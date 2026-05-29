// api/explain.js
// Production-hardened serverless logic for VisualByte
// Implements CORS lockdown, sliding-window rate limiting, strict validation, safe error handling, and timeout boundaries.

// In-memory Rate Limiting Store (Scoped per serverless instance container)
const ipRequestMap = new Map();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1-minute window
const MAX_REQUESTS_PER_WINDOW = 20;  // Limit: 20 requests per minute per IP

// Periodic memory garbage collection to prevent memory leaks from inactive IPs
setInterval(() => {
  const now = Date.now();
  for (const [ip, data] of ipRequestMap.entries()) {
    if (now - data.windowStart > RATE_LIMIT_WINDOW) {
      ipRequestMap.delete(ip);
    }
  }
}, 5 * 60 * 1000); // Scans and purges every 5 minutes

export default async function handler(req, res) {
  // CORS Lock - Origins Allowlist
  const allowedOrigins = [
    "https://visualbyte.vercel.app", // Your Production Domain
    "http://localhost:3000",         // Local Node dev port
    "http://localhost:5173",         // Vite standard local port
    "http://localhost:8080",         // Alternative local port
    "http://127.0.0.1:3000",
    "http://127.0.0.1:5173",
    "http://127.0.0.1:8080"
  ];

  const origin = req.headers.origin;
  let isAllowed = false;

  if (origin) {
    // Check exact matches
    if (allowedOrigins.includes(origin)) {
      isAllowed = true;
    }
    // Check Vercel Preview Deployments dynamically using regex: https://visualbyte-git-*.vercel.app
    else if (/^https:\/\/visualbyte-git-.*-.*\.vercel\.app$/.test(origin) || /^https:\/\/visualbyte-.*\.vercel\.app$/.test(origin)) {
      isAllowed = true;
    }
  } else {
    // Safe fallback for direct developer hit or local testing without Origin header
    isAllowed = true; 
  }

  // Reject unauthorized origins with HTTP 403 Forbidden
  if (origin && !isAllowed) {
    return res.status(403).json({ error: "CORS policy violation. Origin not allowed." });
  }

  // Dynamic CORS headers setting
  if (origin && isAllowed) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  } else {
    res.setHeader("Access-Control-Allow-Origin", "https://visualbyte.vercel.app");
  }
  
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "POST,OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  // Stop CORS Preflight OPTIONS queries immediately
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // Enforce HTTP Method lock
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed. Use POST." });
  }

  // IP-Based Rate Limiting Check
  const clientIp = req.headers["x-forwarded-for"] || req.socket.remoteAddress || "anonymous";
  const now = Date.now();

  if (!ipRequestMap.has(clientIp)) {
    ipRequestMap.set(clientIp, { count: 1, windowStart: now });
  } else {
    const data = ipRequestMap.get(clientIp);
    if (now - data.windowStart > RATE_LIMIT_WINDOW) {
      // Refresh window if expired
      data.count = 1;
      data.windowStart = now;
    } else {
      data.count++;
    }

    if (data.count > MAX_REQUESTS_PER_WINDOW) {
      console.warn(`[SECURITY WARN] Rate limit exceeded by IP: ${clientIp}`);
      return res.status(429).json({ error: "Rate limit exceeded. Please try again later." });
    }
  }

  // Request Body Input Validation
  const { prompt } = req.body;
  
  if (prompt === undefined || prompt === null || typeof prompt !== "string") {
    return res.status(400).json({ error: "Prompt must be a non-empty string." });
  }

  const trimmedPrompt = prompt.trim();
  
  if (trimmedPrompt.length < 1) {
    return res.status(400).json({ error: "Prompt must be a non-empty string." });
  }

  if (trimmedPrompt.length > 3000) {
    return res.status(400).json({ error: "Prompt exceeds maximum length." });
  }

  // API Key Hardening
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error("[SECURITY ERROR] GEMINI_API_KEY environment variable is not defined on Vercel!");
    return res.status(500).json({ error: "AI service temporarily unavailable." });
  }

  // Gemini API Request with 15-second Abort Timeout Protection
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 15000);

  try {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: trimmedPrompt }] }]
      }),
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`[GEMINI API ERROR] HTTP ${response.status}: ${errorText}`);
      return res.status(response.status).json({ error: "AI service temporarily unavailable." });
    }

    const data = await response.json();
    const explanation = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!explanation) {
      console.error("[GEMINI API ERROR] Invalid/Empty response candidate payload: ", JSON.stringify(data));
      return res.status(502).json({ error: "AI service temporarily unavailable." });
    }

    return res.status(200).json({ explanation });
  } catch (error) {
    clearTimeout(timeoutId);
    
    // Graceful timeout abort handling
    if (error.name === "AbortError") {
      console.error("[TIMEOUT ERROR] Gemini API request exceeded 15-second limit and was aborted.");
      return res.status(504).json({ error: "AI service temporarily unavailable." });
    }

    // Safe error handling - log internal stack traces locally, never expose to client
    console.error("[SERVER EXCEPTION ERROR]: ", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
