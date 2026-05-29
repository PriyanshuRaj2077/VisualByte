// VisualByte App Logic (Upgraded with 1300x850 Concept Map, 17 Connections, Overlap Elimination, & High-Fidelity Simulators)
let activeTopicIndex = 0;
let activeSubtopicIndex = 0;

// Custom interactive simulator states
let stackData = [10, 20];
let queueData = ['A', 'B', 'C'];
let arrayData = [12, 5, 8, 19, 23];
let listNodes = [10, 20, 30];
let bitState = [0, 0, 0, 0, 0, 1, 0, 1]; // Binary for 5 (00000101)
let dollDepth = 1;

// OOP concept variables
let oopCarColor = 'var(--forest-canopy)';
let oopCarEngine = 'V6 Hybrid';

// Core Java concept variables
let coreJavaValue = 42;
let coreJavaType = 'int';

// String concept variables
let stringMode = 'equals';

// Tree concept variables
let treeNodes = [50, 30, 70];

// Heap concept variables
let heapNodes = [90, 50, 70, 20];
let heapStep = 0;

// Graph concept variables
let graphPathFound = false;

// Hashing concept variables
let hashingStep = 0;

// Sorting concept variables
let sortData = [40, 10, 30, 20];
let sortIndex = 0;

// Searching concept variables
let searchStep = 0;

// DP concept variables
let dpFibTable = [0, 1, '?', '?', '?'];
let dpStep = 0;

// Greedy concept variables
let greedyTarget = 36;
let greedyCoins = [];

// Collections concept variables
let collList = ['A'];
let collSet = ['A'];
let collStep = 0;

// Flowchart nodes coordinates & visual drawings (SVG icons inside rect boxes)
// Box size: 120 x 90. Spaced out on spacious 1300 x 850 layout to prevent overlaps
const flowchartNodes = [
  // ROW 1: y = 60
  { 
    id: "oop-concepts", 
    title: "OOP Concepts", 
    analogy: "Car Factory", 
    x: 60, y: 60,
    iconSvg: (x, y) => `
      <rect x="${x + 20}" y="${y + 50}" width="80" height="22" rx="3" fill="none" stroke="var(--forest-canopy)" stroke-width="1.5" opacity="0.7"/>
      <circle cx="${x + 38}" cy="${y + 72}" r="7" fill="none" stroke="var(--forest-canopy)" stroke-width="1.5"/>
      <circle cx="${x + 82}" cy="${y + 72}" r="7" fill="none" stroke="var(--forest-canopy)" stroke-width="1.5"/>
      <line x1="${x + 48}" y1="${y + 56}" x2="${x + 72}" y2="${y + 56}" stroke="var(--forest-canopy)" stroke-width="1.5" stroke-dasharray="2"/>
    `
  },
  { 
    id: "core-java", 
    title: "Core Java", 
    analogy: "Warehouse", 
    x: 280, y: 60,
    iconSvg: (x, y) => `
      <rect x="${x + 35}" y="${y + 48}" width="22" height="22" rx="2" fill="none" stroke="var(--forest-canopy)" stroke-width="1.5"/>
      <line x1="${x + 35}" y1="${y + 48}" x2="${x + 57}" y2="${y + 70}" stroke="var(--forest-canopy)" stroke-width="1" opacity="0.6"/>
      <rect x="${x + 65}" y="${y + 53}" width="18" height="18" rx="2" fill="none" stroke="var(--forest-canopy)" stroke-width="1.5"/>
    `
  },
  { 
    id: "bit-manipulation", 
    title: "Bit Manip", 
    analogy: "Switchboard", 
    x: 500, y: 60,
    iconSvg: (x, y) => `
      <rect x="${x + 38}" y="${y + 46}" width="44" height="24" rx="4" fill="none" stroke="var(--forest-canopy)" stroke-width="1.5"/>
      <rect x="${x + 60}" y="${y + 50}" width="16" height="16" rx="2" fill="var(--forest-canopy)" opacity="0.8"/>
    `
  },
  { 
    id: "arrays", 
    title: "Arrays", 
    analogy: "School Bus", 
    x: 720, y: 60,
    iconSvg: (x, y) => `
      <rect x="${x + 20}" y="${y + 48}" width="80" height="22" rx="3" fill="none" stroke="var(--forest-canopy)" stroke-width="1.5"/>
      <circle cx="${x + 38}" cy="${y + 70}" r="6" fill="none" stroke="var(--forest-canopy)" stroke-width="1.5"/>
      <circle cx="${x + 82}" cy="${y + 70}" r="6" fill="none" stroke="var(--forest-canopy)" stroke-width="1.5"/>
    `
  },
  { 
    id: "strings", 
    title: "Strings", 
    analogy: "Bead Necklace", 
    x: 940, y: 60,
    iconSvg: (x, y) => `
      <path d="M ${x + 25} ${y + 54} Q ${x + 60} ${y + 74} ${x + 95} ${y + 54}" fill="none" stroke="var(--forest-canopy)" stroke-width="1.5" stroke-dasharray="2"/>
      <circle cx="${x + 40}" cy="${y + 59}" r="5" fill="var(--forest-canopy)" opacity="0.8"/>
      <circle cx="${x + 60}" cy="${y + 64}" r="5" fill="var(--forest-canopy)" opacity="0.8"/>
      <circle cx="${x + 80}" cy="${y + 59}" r="5" fill="var(--forest-canopy)" opacity="0.8"/>
    `
  },
  { 
    id: "linked-list", 
    title: "Linked List", 
    analogy: "Treasure Hunt", 
    x: 1160, y: 60,
    iconSvg: (x, y) => `
      <rect x="${x + 20}" y="${y + 48}" width="28" height="18" rx="2" fill="none" stroke="var(--forest-canopy)" stroke-width="1.5"/>
      <circle cx="${x + 34}" cy="${y + 57}" r="2" fill="var(--forest-canopy)"/>
      <line x1="${x + 48}" y1="${y + 57}" x2="${x + 72}" y2="${y + 57}" stroke="var(--sunset-amber)" stroke-width="2"/>
      <polygon points="${x + 72},57 ${x + 66},53 ${x + 66},61" fill="var(--sunset-amber)"/>
      <rect x="${x + 72}" y="${y + 48}" width="28" height="18" rx="2" fill="none" stroke="var(--forest-canopy)" stroke-width="1.5"/>
    `
  },

  // ROW 2: y = 340
  { 
    id: "stack", 
    title: "Stack", 
    analogy: "Plate Stacker", 
    x: 60, y: 340,
    iconSvg: (x, y) => `
      <line x1="${x + 45}" y1="${y + 46}" x2="${x + 45}" y2="${y + 74}" stroke="var(--forest-canopy)" stroke-width="1.5"/>
      <line x1="${x + 75}" y1="${y + 46}" x2="${x + 75}" y2="${y + 74}" stroke="var(--forest-canopy)" stroke-width="1.5"/>
      <line x1="${x + 45}" y1="${y + 74}" x2="${x + 75}" y2="${y + 74}" stroke="var(--forest-canopy)" stroke-width="1.5"/>
      <rect x="${x + 49}" y="${y + 53}" width="22" height="4" rx="1" fill="var(--forest-canopy)" opacity="0.6"/>
      <rect x="${x + 49}" y="${y + 60}" width="22" height="4" rx="1" fill="var(--forest-canopy)" opacity="0.8"/>
      <rect x="${x + 49}" y="${y + 67}" width="22" height="4" rx="1" fill="var(--forest-canopy)"/>
    `
  },
  { 
    id: "queue", 
    title: "Queue", 
    analogy: "Lunch Line", 
    x: 280, y: 340,
    iconSvg: (x, y) => `
      <circle cx="${x + 35}" cy="${y + 54}" r="8" fill="none" stroke="var(--forest-canopy)" stroke-width="1.5"/>
      <circle cx="${x + 35}" cy="${y + 69}" r="3.5" fill="var(--forest-canopy)"/>
      <circle cx="${x + 60}" cy="${y + 54}" r="8" fill="none" stroke="var(--forest-canopy)" stroke-width="1.5" opacity="0.7"/>
      <circle cx="${x + 85}" cy="${y + 54}" r="8" fill="none" stroke="var(--forest-canopy)" stroke-width="1.5" opacity="0.4"/>
    `
  },
  { 
    id: "tree", 
    title: "Tree", 
    analogy: "Org Chart", 
    x: 500, y: 340,
    iconSvg: (x, y) => `
      <circle cx="${x + 60}" cy="${y + 46}" r="4.5" fill="var(--forest-canopy)"/>
      <line x1="${x + 60}" y1="${y + 46}" x2="${x + 42}" y2="${y + 66}" stroke="var(--forest-canopy)" stroke-width="1.2"/>
      <line x1="${x + 60}" y1="${y + 46}" x2="${x + 78}" y2="${y + 66}" stroke="var(--forest-canopy)" stroke-width="1.2"/>
      <circle cx="${x + 42}" cy="${y + 66}" r="4.5" fill="var(--forest-canopy)" opacity="0.7"/>
      <circle cx="${x + 78}" cy="${y + 66}" r="4.5" fill="var(--forest-canopy)" opacity="0.7"/>
    `
  },
  { 
    id: "heap", 
    title: "Heap", 
    analogy: "ER Triage", 
    x: 720, y: 340,
    iconSvg: (x, y) => `
      <circle cx="${x + 60}" cy="${y + 56}" r="15" fill="none" stroke="var(--forest-canopy)" stroke-width="1.5"/>
      <line x1="${x + 60}" y1="${y + 46}" x2="${x + 60}" y2="${y + 66}" stroke="var(--forest-canopy)" stroke-width="2"/>
      <line x1="${x + 50}" y1="${y + 56}" x2="${x + 70}" y2="${y + 56}" stroke="var(--forest-canopy)" stroke-width="2"/>
    `
  },
  { 
    id: "graph", 
    title: "Graph", 
    analogy: "Flight Net", 
    x: 940, y: 340,
    iconSvg: (x, y) => `
      <circle cx="${x + 35}" cy="${y + 48}" r="4" fill="var(--forest-canopy)"/>
      <circle cx="${x + 85}" cy="${y + 48}" r="4" fill="var(--forest-canopy)"/>
      <circle cx="${x + 60}" cy="${y + 70}" r="4" fill="var(--forest-canopy)"/>
      <line x1="${x + 35}" y1="${y + 48}" x2="${x + 85}" y2="${y + 48}" stroke="var(--forest-canopy)" stroke-width="1" opacity="0.6"/>
      <line x1="${x + 85}" y1="${y + 48}" x2="${x + 60}" y2="${y + 70}" stroke="var(--forest-canopy)" stroke-width="1"/>
      <line x1="${x + 35}" y1="${y + 48}" x2="${x + 60}" y2="${y + 70}" stroke="var(--forest-canopy)" stroke-width="1"/>
    `
  },
  { 
    id: "hashing", 
    title: "Hashing", 
    analogy: "Lockers", 
    x: 1160, y: 340,
    iconSvg: (x, y) => `
      <rect x="${x + 35}" y="${y + 46}" width="50" height="28" fill="none" stroke="var(--forest-canopy)" stroke-width="1.5"/>
      <line x1="${x + 60}" y1="${y + 46}" x2="${x + 60}" y2="${y + 74}" stroke="var(--forest-canopy)" stroke-width="1.2"/>
      <line x1="${x + 35}" y1="${y + 60}" x2="${x + 85}" y2="${y + 60}" stroke="var(--forest-canopy)" stroke-width="1.2"/>
    `
  },

  // ROW 3: y = 620
  { 
    id: "sorting", 
    title: "Sorting", 
    analogy: "Soldier Line", 
    x: 60, y: 620,
    iconSvg: (x, y) => `
      <rect x="${x + 35}" y="${y + 60}" width="10" height="14" rx="1" fill="var(--forest-canopy)" opacity="0.5"/>
      <rect x="${x + 55}" y="${y + 50}" width="10" height="24" rx="1" fill="var(--forest-canopy)" opacity="0.8"/>
      <rect x="${x + 75}" y="${y + 40}" width="10" height="34" rx="1" fill="var(--forest-canopy)"/>
    `
  },
  { 
    id: "searching", 
    title: "Searching", 
    analogy: "Book Flipper", 
    x: 280, y: 620,
    iconSvg: (x, y) => `
      <rect x="${x + 32}" y="${y + 46}" width="56" height="26" rx="2" fill="none" stroke="var(--forest-canopy)" stroke-width="1.5"/>
      <line x1="${x + 60}" y1="${y + 46}" x2="${x + 60}" y2="${y + 72}" stroke="var(--forest-canopy)" stroke-width="1.5"/>
    `
  },
  { 
    id: "recursion-backtracking", 
    title: "Recursion", 
    analogy: "Nesting Dolls", 
    x: 500, y: 620,
    iconSvg: (x, y) => `
      <circle cx="${x + 60}" cy="${y + 56}" r="15" fill="none" stroke="var(--forest-canopy)" stroke-width="1.5"/>
      <circle cx="${x + 60}" cy="${y + 56}" r="9" fill="none" stroke="var(--forest-canopy)" stroke-width="1.2" opacity="0.7"/>
      <circle cx="${x + 60}" cy="${y + 56}" r="4" fill="var(--forest-canopy)"/>
    `
  },
  { 
    id: "dynamic-programming", 
    title: "Dynamic Prog", 
    analogy: "Scratch Pad", 
    x: 720, y: 620,
    iconSvg: (x, y) => `
      <rect x="${x + 35}" y="${y + 46}" width="50" height="28" fill="none" stroke="var(--forest-canopy)" stroke-width="1.5"/>
      <line x1="${x + 51}" y1="${y + 46}" x2="${x + 51}" y2="${y + 74}" stroke="var(--forest-canopy)" stroke-width="1"/>
      <line x1="${x + 69}" y1="${y + 46}" x2="${x + 69}" y2="${y + 74}" stroke="var(--forest-canopy)" stroke-width="1"/>
    `
  },
  { 
    id: "greedy", 
    title: "Greedy", 
    analogy: "Super Sweep", 
    x: 940, y: 620,
    iconSvg: (x, y) => `
      <rect x="${x + 38}" y="${y + 46}" width="44" height="22" fill="none" stroke="var(--forest-canopy)" stroke-width="1.5"/>
      <line x1="${x + 38}" y1="${y + 68}" x2="${x + 82}" y2="${y + 68}" stroke="var(--forest-canopy)" stroke-width="1.5"/>
      <circle cx="${x + 48}" cy="${y + 73}" r="4" fill="var(--forest-canopy)"/>
      <circle cx="${x + 72}" cy="${y + 73}" r="4" fill="var(--forest-canopy)"/>
    `
  },
  { 
    id: "java-collections", 
    title: "Collections", 
    analogy: "Spice Rack", 
    x: 1160, y: 620,
    iconSvg: (x, y) => `
      <rect x="${x + 32}" y="${y + 45}" width="56" height="32" rx="3" fill="none" stroke="var(--forest-canopy)" stroke-width="1.5"/>
      <line x1="${x + 50}" y1="${y + 45}" x2="${x + 50}" y2="${y + 77}" stroke="var(--forest-canopy)" stroke-width="1.2"/>
      <line x1="${x + 70}" y1="${y + 45}" x2="${x + 70}" y2="${y + 77}" stroke="var(--forest-canopy)" stroke-width="1.2"/>
    `
  }
];

// Flowchart relationships connecting nodes (Spacious bezier layouts with ZERO overlaps!)
const flowchartRelations = [
  {
    from: "oop-concepts",
    to: "core-java",
    label: "\ud83c\udfd7\ufe0f Blueprint \u2192 \ud83d\udce6 Warehouse",
    labelX: 170, labelY: 105,
    desc: "<strong>🏗️ Blueprint &rarr; 📦 Warehouse (OOP to Core Java):</strong><br>OOP classes define the static blueprints, whereas Core Java variables, primitives, and memory stacks represent the physical warehouse grid storing actual items. Classes represent structural designs; variables are physical storage bins.",
    path: (fromNode, toNode) => `M ${fromNode.x + 120} ${fromNode.y + 45} L ${toNode.x} ${toNode.y + 45}`
  },
  {
    from: "core-java",
    to: "bit-manipulation",
    label: "\ud83d\udce6 Crates \u2192 \ud83d\udd0c Switches",
    labelX: 450, labelY: 105,
    desc: "<strong>📦 Warehouse Crates &rarr; 🔌 Power Switches (Core Java to Bit Manip):</strong><br>Underneath all decimal integers, strings, and custom objects inside the JVM lie basic collections of electrical hardware switchboards operating strictly in 1s (ON) and 0s (OFF). Bit manipulation controls these circuits directly at the lowest level.",
    path: (fromNode, toNode) => `M ${fromNode.x + 120} ${fromNode.y + 45} L ${toNode.x} ${toNode.y + 45}`
  },
  {
    from: "core-java",
    to: "arrays",
    label: "\ud83d\udce6 Crates \u2192 \ud83d\ude8c Bus Seats",
    labelX: 500, labelY: 15,
    desc: "<strong>📦 Warehouse Crates &rarr; 🚌 Bus Seats (Core Java variables to Arrays):</strong><br>To store a long row of identical primitive data values contiguously, Java packs them into an Array: a school bus of variables with a fixed capacity where each seat gets a unique index starting at 0.",
    path: (fromNode, toNode) => {
      const startX = fromNode.x + 60;
      const endX = toNode.x + 60;
      return `M ${startX} ${fromNode.y} Q ${(startX + endX)/2} ${fromNode.y - 65} ${endX} ${toNode.y}`;
    }
  },
  {
    from: "arrays",
    to: "strings",
    label: "\ud83d\ude8c Bus \u2192 \ud83d\udcff Bead Necklace",
    labelX: 890, labelY: 105,
    desc: "<strong>🚌 Bus Seats &rarr; 📿 Bead Necklace (Arrays to Strings):</strong><br>A Java String is conceptually just a special immutable array of character beads. Once threaded and locked with the immutability clasp, character indices cannot be modified without generating a new necklace.",
    path: (fromNode, toNode) => `M ${fromNode.x + 120} ${fromNode.y + 45} L ${toNode.x} ${toNode.y + 45}`
  },
  {
    from: "arrays",
    to: "linked-list",
    label: "\ud83d\ude8c Bus \u2192 \ud83d\uddfa\ufe0f Clue Vines",
    labelX: 940, labelY: 15,
    desc: "<strong>🚌 Bus Seats &rarr; 🗺️ Clue Vines (Arrays to Linked List):</strong><br>Standard arrays require contiguous capacity. If memory is scattered, we throw away the bus model and scatter treasure chest nodes around, linking them dynamically via forward-pointing clue scrolls (Next pointers).",
    path: (fromNode, toNode) => {
      const startX = fromNode.x + 60;
      const endX = toNode.x + 60;
      return `M ${startX} ${fromNode.y} Q ${(startX + endX)/2} ${fromNode.y - 65} ${endX} ${toNode.y}`;
    }
  },
  {
    from: "linked-list",
    to: "stack",
    label: "\ud83d\uddfa\ufe0f Vines \u2192 \ud83e\uddc7 Plate Pile",
    labelX: 620, labelY: 190,
    desc: "<strong>🗺️ Clue Vines &rarr; 🥞 Plate Pile (Linked List to Stack):</strong><br>By linking clue boxes in a vertical column, we model a LIFO plate stacker! Pushing links a new head node; popping cuts the head off and points to the next lower item.",
    path: (fromNode, toNode) => {
      const startX = fromNode.x;
      const startY = fromNode.y + 45;
      const endX = toNode.x + 60;
      const endY = toNode.y;
      return `M ${startX} ${startY} C ${(startX + endX)/2} ${(startY + endY)/2 - 50} ${(startX + endX)/2} ${(startY + endY)/2 + 50} ${endX} ${endY}`;
    }
  },
  {
    from: "linked-list",
    to: "queue",
    label: "\ud83d\uddfa\ufe0f Vines \u2192 \ud83d\udeb6 School Line",
    labelX: 740, labelY: 235,
    desc: "<strong>🗺️ Clue Vines &rarr; 🚶 School Line (Linked List to Queue):</strong><br>Lining up clue chest pointers front-to-back creates a FIFO Queue lunch line! Dequeue removes elements at the 'head' pointer; enqueue appends nodes to the 'tail' pointer.",
    path: (fromNode, toNode) => {
      const startX = fromNode.x;
      const startY = fromNode.y + 90;
      const endX = toNode.x + 60;
      const endY = toNode.y;
      return `M ${startX} ${startY} Q ${(startX + endX)/2} ${startY - 40} ${endX} ${endY}`;
    }
  },
  {
    from: "linked-list",
    to: "tree",
    label: "\ud83d\uddfa\ufe0f Vines \u2192 \ud83c\udf33 Org Branches",
    labelX: 860, labelY: 260,
    desc: "<strong>🗺️ Clue Vines &rarr; 🌳 Org Branches (Linked List to Trees):</strong><br>A singly linked list node points to exactly one next node. If we expand each node to point to up to TWO next nodes (Left and Right), the linear trail branches out into a complete Binary Tree structure!",
    path: (fromNode, toNode) => {
      const startX = fromNode.x;
      const startY = fromNode.y + 90;
      const endX = toNode.x + 60;
      const endY = toNode.y;
      return `M ${startX} ${startY} Q ${(startX + endX)/2} ${startY - 20} ${endX} ${endY}`;
    }
  },
  {
    from: "tree",
    to: "heap",
    label: "\ud83c\udf33 Tree \u2192 \ud83c\udfe5 ER Triage",
    labelX: 670, labelY: 385,
    desc: "<strong>🌳 Family Tree &rarr; 🏥 ER Triage (Trees to Heaps):</strong><br>A heap is a specialized complete binary tree enforcing strict parent-child size relationships. For Max-Heaps, the most critical patient (highest number) always sits strictly at the root CEO position.",
    path: (fromNode, toNode) => `M ${fromNode.x + 120} ${fromNode.y + 45} L ${toNode.x} ${toNode.y + 45}`
  },
  {
    from: "tree",
    to: "graph",
    label: "\ud83c\udf33 Tree \u2192 \u2708\ufe0f Flight Map",
    labelX: 720, labelY: 470,
    desc: "<strong>🌳 Family Tree &rarr; ✈️ Flight Map (Trees to Graphs):</strong><br>Trees branch exclusively downwards with no loops. Removing this constraint allows vertices to link bidirectionally in any cyclic configuration, mapping complex networks like airline routes.",
    path: (fromNode, toNode) => {
      const startX = fromNode.x + 60;
      const endX = toNode.x + 60;
      return `M ${startX} ${fromNode.y + 90} Q ${(startX + endX)/2} ${fromNode.y + 140} ${endX} ${toNode.y}`;
    }
  },
  {
    from: "arrays",
    to: "sorting",
    label: "\ud83d\ude8c Bus \u2192 \ud83d\udc82 Soldier Heights",
    labelX: 380, labelY: 330,
    desc: "<strong>🚌 Bus Seats &rarr; 💂 Soldier Heights (Arrays to Sorting):</strong><br>An array storing items in random height order makes searching extremely slow. Sorting algorithms step through index boundaries to swap adjacent values into ascending order.",
    path: (fromNode, toNode) => {
      const startX = fromNode.x;
      const startY = fromNode.y + 45;
      const endX = toNode.x + 60;
      const endY = toNode.y;
      return `M ${startX} ${startY} C ${(startX + endX)/2} ${(startY + endY)/2 - 50} ${(startX + endX)/2} ${(startY + endY)/2 + 50} ${endX} ${endY}`;
    }
  },
  {
    from: "sorting",
    to: "searching",
    label: "\ud83d\udc82 Soldiers \u2192 \ud83d\udcd6 Dictionary",
    labelX: 230, labelY: 665,
    desc: "<strong>💂 Soldiers &rarr; 📖 Dictionary Pages (Sorting to Searching):</strong><br>If arrays are unsorted, searching elements takes slow O(N) time. But once items are arranged in sorted height parade, you can instantly apply Binary Search, discarding half the boundary at each comparison.",
    path: (fromNode, toNode) => `M ${fromNode.x + 120} ${fromNode.y + 45} L ${toNode.x} ${toNode.y + 45}`
  },
  {
    from: "stack",
    to: "recursion-backtracking",
    label: "\ud83e\uddc7 Plates \u2192 \ud83e\ude86 Nesting Dolls",
    labelX: 280, labelY: 520,
    desc: "<strong>🥞 Plate Pile &rarr; 🪆 Nesting Dolls (Stack to Recursion):</strong><br>Recursive methods rely on LIFO call stack frames inside JVM memory. Each doll you open pushes a new active frame; reaching the base case baby doll triggers pop steps in reverse order.",
    path: (fromNode, toNode) => {
      const startX = fromNode.x + 60;
      const endX = toNode.x;
      return `M ${startX} ${fromNode.y + 90} Q ${(startX + endX)/2} ${fromNode.y + 140} ${endX} ${toNode.y + 45}`;
    }
  },
  {
    from: "recursion-backtracking",
    to: "dynamic-programming",
    label: "\ud83e\ude86 Dolls \u2192 \ud83d\uddd2 Notepad",
    labelX: 670, labelY: 665,
    desc: "<strong>🪆 Nesting Dolls &rarr; 🗒️ Math Notepad (Recursion to DP):</strong><br>Standard recursion repeats redundant subproblem calculations. Memoization dynamic programming fixes this by keeping a math notepad cache of doll sizes for O(1) lookups.",
    path: (fromNode, toNode) => `M ${fromNode.x + 120} ${fromNode.y + 45} L ${toNode.x} ${toNode.y + 45}`
  },
  {
    from: "dynamic-programming",
    to: "greedy",
    label: "\ud83d\uddd2 Notepad \u2192 \ud83d\uded2 Sweep",
    labelX: 890, labelY: 665,
    desc: "<strong>🗒️ Math Notepad &rarr; 🛒 Shopping Sweep (DP to Greedy):</strong><br>DP iterates over all historic subproblem cells to ensure a global maximum. Greedy algorithms bypass historic notepad tables entirely, grabbing the highest local value item immediately.",
    path: (fromNode, toNode) => `M ${fromNode.x + 120} ${fromNode.y + 45} L ${toNode.x} ${toNode.y + 45}`
  },
  {
    from: "hashing",
    to: "java-collections",
    label: "\ud83d\udd12 Lockers \u2192 \ud83d\uddc4 Cabinets",
    labelX: 1220, labelY: 522,
    desc: "<strong>🔒 Locker Keys &rarr; 🌶️ Spice Cabinets (Hashing to Collections):</strong><br>Key-index hashing cogs form the structural motor powering Java's HashMap and HashSet cabinets, offering instant O(1) retrievals using catalog labels instead of integer indices.",
    path: (fromNode, toNode) => `M ${fromNode.x + 60} ${fromNode.y + 90} L ${toNode.x + 60} ${toNode.y}`
  },
  {
    from: "java-collections",
    to: "oop-concepts",
    label: "\ud83d\uddc4 Cabinets \u2192 \ud83c\udfd7\ufe0f Blueprints",
    labelX: 300, labelY: 780,
    desc: "<strong>🌶️ Spice Cabinets &rarr; 🏗️ Blueprints (Java Collections back to OOP):</strong><br>The complete Java Collections library is constructed entirely using OOP blueprints: abstract collections models, inheritance frameworks, and standardized interface controllers.",
    path: (fromNode, toNode) => {
      const startX = fromNode.x + 60;
      const startY = fromNode.y + 90;
      const endX = toNode.x + 60;
      const endY = toNode.y + 90;
      return `M ${startX} ${startY} C ${(startX + endX)/2} ${startY + 150} ${endX - 300} ${endY + 250} ${endX} ${endY}`;
    }
  }
];

// Drag, Pan & Zoom state properties for concept map
let isDragging = false;
let startX, startY;
let scrollLeft, scrollTop;
let hasMoved = false;
let mapScale = 1.0;

// Initialize the app on load
window.addEventListener('DOMContentLoaded', () => {
  renderDirectory();
  selectTopic(0);
  renderCheatsheet();
  initMapDragger();
});

// Apply zoom dimensions dynamically to the SVG
function applyZoom() {
  const svgElement = document.querySelector('#playground-svg-canvas svg');
  if (!svgElement) return;
  svgElement.setAttribute('width', 1300 * mapScale);
  svgElement.setAttribute('height', 850 * mapScale);
}

// Global zoom helper triggers
function zoomInMap() {
  mapScale = Math.min(2.5, mapScale + 0.15);
  applyZoom();
}

function zoomOutMap() {
  mapScale = Math.max(0.5, mapScale - 0.15);
  applyZoom();
}

// Drag, Pan & Zoom handler for the concept map
function initMapDragger() {
  const mapContainer = document.getElementById('playground-svg-canvas');
  if (!mapContainer) return;

  // Set default grab cursor
  mapContainer.style.cursor = 'grab';

  let isDragging = false;
  let startX, startY;
  let scrollLeft, scrollTop;
  let hasMoved = false;

  // Velocity tracking variables for premium inertia momentum glide
  let lastX = 0, lastY = 0;
  let vx = 0, vy = 0;
  let inertiaFrame = null;

  // Function to apply smooth friction-based glide after releasing mouse or touch
  function startInertia() {
    function animateInertia() {
      if (Math.abs(vx) < 0.15 && Math.abs(vy) < 0.15) {
        cancelAnimationFrame(inertiaFrame);
        inertiaFrame = null;
        return;
      }

      // Smooth friction deceleration coefficient (0.92)
      vx *= 0.92;
      vy *= 0.92;

      mapContainer.scrollLeft -= vx;
      mapContainer.scrollTop -= vy;

      inertiaFrame = requestAnimationFrame(animateInertia);
    }
    inertiaFrame = requestAnimationFrame(animateInertia);
  }

  // 1. Mouse Dragging
  mapContainer.addEventListener('mousedown', (e) => {
    isDragging = true;
    hasMoved = false;
    mapContainer.style.cursor = 'grabbing';
    
    // Cancel any running inertia glide when grabbing again
    if (inertiaFrame) {
      cancelAnimationFrame(inertiaFrame);
      inertiaFrame = null;
    }

    startX = e.clientX;
    startY = e.clientY;
    lastX = e.clientX;
    lastY = e.clientY;
    vx = 0;
    vy = 0;
    
    scrollLeft = mapContainer.scrollLeft;
    scrollTop = mapContainer.scrollTop;
    e.preventDefault(); // Prevents selection highlighting while dragging
  });

  mapContainer.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    
    const totalDx = e.clientX - startX;
    const totalDy = e.clientY - startY;

    if (Math.abs(totalDx) > 8 || Math.abs(totalDy) > 8) {
      hasMoved = true;
    }

    // Track instant velocity of the frame
    const dx = e.clientX - lastX;
    const dy = e.clientY - lastY;
    
    // Direct scrolling with premium 1.5x speed
    mapContainer.scrollLeft = scrollLeft - totalDx * 1.5;
    mapContainer.scrollTop = scrollTop - totalDy * 1.5;

    // Save frame velocity for momentum (scaled by direct speed factor)
    vx = dx * 1.5;
    vy = dy * 1.5;

    lastX = e.clientX;
    lastY = e.clientY;
  });

  const stopDragging = () => {
    if (!isDragging) return;
    isDragging = false;
    if (mapContainer) mapContainer.style.cursor = 'grab';
    
    // Initiate gorgeous smooth momentum glide on release
    if (hasMoved) {
      startInertia();
    }
  };

  mapContainer.addEventListener('mouseup', stopDragging);
  mapContainer.addEventListener('mouseleave', stopDragging);

  // 2. Android Touch Gestures
  let isTouchDragging = false;
  let touchStartX = 0;
  let touchStartY = 0;
  let touchScrollLeft = 0;
  let touchScrollTop = 0;
  let touchLastX = 0;
  let touchLastY = 0;

  mapContainer.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
      isTouchDragging = true;
      hasMoved = false;

      if (inertiaFrame) {
        cancelAnimationFrame(inertiaFrame);
        inertiaFrame = null;
      }

      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
      touchLastX = e.touches[0].clientX;
      touchLastY = e.touches[0].clientY;
      vx = 0;
      vy = 0;

      touchScrollLeft = mapContainer.scrollLeft;
      touchScrollTop = mapContainer.scrollTop;
    } else {
      isTouchDragging = false;
    }
  }, { passive: true });

  mapContainer.addEventListener('touchmove', (e) => {
    if (!isTouchDragging || e.touches.length !== 1) return;
    
    const totalDx = e.touches[0].clientX - touchStartX;
    const totalDy = e.touches[0].clientY - touchStartY;
    
    if (Math.abs(totalDx) > 8 || Math.abs(totalDy) > 8) {
      hasMoved = true;
    }
    
    // Direction Analyzer: If movement is primarily horizontal, pan map and prevent page scroll
    if (Math.abs(totalDx) > Math.abs(totalDy)) {
      if (e.cancelable) e.preventDefault();
      
      const dx = e.touches[0].clientX - touchLastX;
      const dy = e.touches[0].clientY - touchLastY;

      mapContainer.scrollLeft = touchScrollLeft - totalDx * 1.5;
      mapContainer.scrollTop = touchScrollTop - totalDy * 1.5;

      vx = dx * 1.5;
      vy = dy * 1.5;
    }

    touchLastX = e.touches[0].clientX;
    touchLastY = e.touches[0].clientY;
  }, { passive: false });

  mapContainer.addEventListener('touchend', (e) => {
    if (isTouchDragging) {
      isTouchDragging = false;
      if (hasMoved) {
        startInertia();
      }
    }
  });
}

// 1. Navigation / View Routing
function switchView(view) {
  const explorerBtn = document.getElementById('tab-btn-explorer');
  const playgroundBtn = document.getElementById('tab-btn-playground');
  const cheatsheetBtn = document.getElementById('tab-btn-cheatsheet');
  
  const explorerView = document.getElementById('view-explorer');
  const playgroundView = document.getElementById('view-playground');
  const cheatsheetView = document.getElementById('view-cheatsheet');
  
  const searchBox = document.querySelector('.search-box-container');

  // Reset search input and all search filters when changing tabs
  const searchInput = document.getElementById('main-search-input');
  if (searchInput) {
    searchInput.value = "";
    document.querySelectorAll('.topic-list li').forEach(li => li.style.display = 'block');
    document.querySelectorAll('.cheatsheet-card').forEach(card => card.style.display = 'flex');
  }

  [explorerBtn, playgroundBtn, cheatsheetBtn].forEach(btn => btn.classList.remove('active'));
  [explorerView, playgroundView, cheatsheetView].forEach(v => v.style.display = 'none');
  
  if (view === 'explorer') {
    explorerBtn.classList.add('active');
    explorerView.style.display = 'flex';
    if (searchBox) searchBox.style.display = 'block';
  } else if (view === 'playground') {
    playgroundBtn.classList.add('active');
    playgroundView.style.display = 'flex';
    if (searchBox) searchBox.style.display = 'none';
    renderConceptMap();
  } else {
    cheatsheetBtn.classList.add('active');
    cheatsheetView.style.display = 'flex';
    if (searchBox) searchBox.style.display = 'block';
    renderCheatsheet();
  }
}

// 2. Render Left Directory Menu (Visual Explorer Sidebar)
function renderDirectory() {
  const container = document.getElementById('directory-container');
  container.innerHTML = "";

  const categories = {};
  window.DSA_DATA.forEach((topic, idx) => {
    if (!categories[topic.category]) {
      categories[topic.category] = [];
    }
    categories[topic.category].push({ topic, idx });
  });

  for (const [catName, items] of Object.entries(categories)) {
    const groupDiv = document.createElement('div');
    groupDiv.className = 'category-group';
    
    const catTitle = document.createElement('div');
    catTitle.className = 'category-title label';
    catTitle.innerText = catName;
    groupDiv.appendChild(catTitle);

    const list = document.createElement('ul');
    list.className = 'topic-list';

    items.forEach(item => {
      const li = document.createElement('li');
      const btn = document.createElement('button');
      btn.className = `topic-item-btn ${item.idx === activeTopicIndex ? 'active' : ''}`;
      btn.id = `directory-btn-${item.idx}`;
      btn.onclick = () => selectTopic(item.idx);
      
      btn.innerHTML = `
        <span>${item.topic.title}</span>
        <svg style="width:12px;height:12px;fill:currentColor;" viewBox="0 0 24 24">
          <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/>
        </svg>
      `;
      li.appendChild(btn);
      list.appendChild(li);
    });

    groupDiv.appendChild(list);
    container.appendChild(groupDiv);
  }
}

// 3. Topic Selection Routing
function selectTopic(index) {
  const prevBtn = document.getElementById(`directory-btn-${activeTopicIndex}`);
  if (prevBtn) prevBtn.classList.remove('active');
  
  activeTopicIndex = index;
  activeSubtopicIndex = 0;
  
  const currentBtn = document.getElementById(`directory-btn-${activeTopicIndex}`);
  if (currentBtn) currentBtn.classList.add('active');

  renderActiveTopic();
  
  const chatMessagesBox = document.getElementById('chat-messages-box');
  const topic = window.DSA_DATA[activeTopicIndex];
  chatMessagesBox.innerHTML = `
    <div class="chat-msg bot animate-slide">
      Welcome to <strong>${topic.title}</strong>! You can ask me any custom Java questions about this topic or paste code for feedback.
    </div>
  `;
}

// Programmatic redirection from Flowchart to Explorer
function navigateToTopic(topicId) {
  if (hasMoved) {
    // If a drag operation was in progress, block navigation!
    return;
  }
  const idx = window.DSA_DATA.findIndex(t => t.id === topicId);
  if (idx !== -1) {
    switchView('explorer');
    selectTopic(idx);
    document.getElementById('active-topic-container').scrollIntoView({ behavior: 'smooth' });
  }
}

// 4. Render Active Topic Detail View
function renderActiveTopic() {
  const container = document.getElementById('active-topic-container');
  const topic = window.DSA_DATA[activeTopicIndex];
  
  if (!topic) return;

  let html = `
    <div class="topic-header-flex">
      <h2 class="topic-title-h2">${topic.title}</h2>
      <span class="topic-category-tag label">${topic.category}</span>
    </div>

    <!-- Analogy Card -->
    <div class="content-card" style="margin-bottom:var(--space-2); background:var(--bg-white);">
      <h3 class="analogy-title-h3">
        <svg style="width:20px;height:20px;fill:currentColor;" viewBox="0 0 24 24">
          <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4M12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18Z"/>
        </svg>
        Real-Life & Nature Analogy: ${topic.analogy.title}
      </h3>
      <p class="analogy-text">${topic.analogy.text}</p>
      <div style="margin-top:var(--space-2);">${topic.analogy.svgRepresentation || ''}</div>
    </div>

    <!-- Simulator Sandbox Card -->
    <div class="content-card accent" style="margin-bottom:var(--space-2);">
      <h3 class="analogy-title-h3" style="color:var(--sunset-amber);">
        <svg style="width:20px;height:20px;fill:currentColor;" viewBox="0 0 24 24">
          <path d="M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22C17.53,22 22,17.53 22,12C22,6.47 17.53,2 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M11,7H13V13H11V7M11,15H13V17H11V15Z"/>
        </svg>
        Interactive Visual Simulator
      </h3>
      <p class="analogy-text" style="font-size:14px; margin-bottom:var(--space-1.5);">
        Directly interact with this visual state engine to see how standard operations act inside computer memory.
      </p>
      
      <div class="viz-display-box" id="simulator-canvas">
        <!-- Interactive components loaded dynamically -->
      </div>
      
      <div class="sim-controls" id="simulator-controls">
        <!-- Controller buttons loaded dynamically -->
      </div>
    </div>

    <!-- Subtopics Tab Selection -->
    <div class="subtopics-tab-bar">
  `;

  topic.subtopics.forEach((sub, idx) => {
    html += `
      <button class="subtopic-tab ${idx === activeSubtopicIndex ? 'active' : ''}" onclick="selectSubtopic(${idx})">
        ${sub.name}
      </button>
    `;
  });

  html += `
    </div>

    <!-- Active Subtopic Explanation & Code Codeblock -->
    <div id="subtopic-detail-container">
      <!-- Loaded dynamically -->
    </div>
  `;

  container.innerHTML = html;
  
  renderSubtopic();
  initSimulator();
}

// 5. Select Subtopic Detail Tab
function selectSubtopic(idx) {
  const tabs = document.querySelectorAll('.subtopic-tab');
  tabs.forEach((tab, i) => {
    if (i === idx) tab.classList.add('active');
    else tab.classList.remove('active');
  });

  activeSubtopicIndex = idx;
  renderSubtopic();
}

function renderSubtopic() {
  const container = document.getElementById('subtopic-detail-container');
  const sub = window.DSA_DATA[activeTopicIndex].subtopics[activeSubtopicIndex];
  
  if (!sub) return;

  container.innerHTML = `
    <p class="subtopic-desc animate-slide" style="font-size:15px; margin-bottom:var(--space-2);">
      ${sub.description}
    </p>

    <div class="code-container animate-slide">
      <div class="code-header">
        <span>Java Implementation Reference</span>
        <button class="copy-btn" onclick="copyCodeText(this)">Copy Code</button>
      </div>
      <pre class="code-block"><code>${escapeHTML(sub.javaCode)}</code></pre>
    </div>
  `;
}

// 6. Interactive Visual Simulator Engines
function initSimulator() {
  const type = window.DSA_DATA[activeTopicIndex].interactiveType;
  const canvas = document.getElementById('simulator-canvas');
  const controls = document.getElementById('simulator-controls');

  canvas.innerHTML = "";
  controls.innerHTML = "";

  if (type === 'stack') {
    renderStack();
    controls.innerHTML = `
      <input type="number" id="stack-input" class="sim-input" value="40" min="1" max="99">
      <button class="sim-btn" onclick="pushStack()">Push Element</button>
      <button class="sim-btn secondary" onclick="popStack()">Pop Element</button>
    `;
  } else if (type === 'queue') {
    renderQueue();
    controls.innerHTML = `
      <input type="text" id="queue-input" class="sim-input" value="D" maxlength="5" style="width:60px;">
      <button class="sim-btn" onclick="enqueueQueue()">Enqueue</button>
      <button class="sim-btn secondary" onclick="dequeueQueue()">Dequeue</button>
    `;
  } else if (type === 'array') {
    renderArray();
    controls.innerHTML = `
      <button class="sim-btn" onclick="rotateArray()">Rotate Left</button>
      <button class="sim-btn" onclick="computePrefixSum()">Compute Prefix Sum</button>
      <button class="sim-btn secondary" onclick="resetArraySimulator()">Reset Grid</button>
    `;
  } else if (type === 'linked-list') {
    renderLinkedList();
    controls.innerHTML = `
      <input type="number" id="list-input" class="sim-input" value="40" min="1" max="99">
      <button class="sim-btn" onclick="insertListNode()">Add to Head</button>
      <button class="sim-btn" onclick="reverseLinkedList()">Reverse List</button>
      <button class="sim-btn secondary" onclick="resetListSimulator()">Reset List</button>
    `;
  } else if (type === 'bit-manipulation') {
    renderBitManip();
    controls.innerHTML = `
      <button class="sim-btn" onclick="shiftBitsLeft()">Shift Left (&lt;&lt; 1)</button>
      <button class="sim-btn" onclick="shiftBitsRight()">Shift Right (&gt;&gt; 1)</button>
      <button class="sim-btn secondary" onclick="resetBits()">Clear Switches</button>
    `;
  } else if (type === 'recursion') {
    renderRecursion();
    controls.innerHTML = `
      <button class="sim-btn" onclick="stepRecursion()">Open Doll (Recurse)</button>
      <button class="sim-btn secondary" onclick="resetRecursion()">Reset Dolls</button>
    `;
  } else if (type === 'oop') {
    renderOOPSimulator();
    controls.innerHTML = `
      <button class="sim-btn" onclick="changeOOPColor()">Toggle Color</button>
      <button class="sim-btn" onclick="changeOOPEngine()">Toggle Engine</button>
      <button class="sim-btn secondary" onclick="resetOOPSimulator()">Reset Object</button>
    `;
  } else if (type === 'core-java') {
    renderCoreJavaSimulator();
    controls.innerHTML = `
      <button class="sim-btn" onclick="setCoreJavaType('byte')">Cast to byte</button>
      <button class="sim-btn" onclick="setCoreJavaType('int')">Cast to int</button>
      <button class="sim-btn" onclick="setCoreJavaType('double')">Cast to double</button>
    `;
  } else if (type === 'string') {
    renderStringSimulator();
    controls.innerHTML = `
      <button class="sim-btn" onclick="toggleStringMode('equals')">s1.equals(s2)</button>
      <button class="sim-btn" onclick="toggleStringMode('equalsDouble')">s1 == s2</button>
    `;
  } else if (type === 'tree') {
    renderTreeSimulator();
    controls.innerHTML = `
      <button class="sim-btn" onclick="insertTreeNode()">Insert Child Node</button>
      <button class="sim-btn secondary" onclick="resetTreeSimulator()">Reset Tree</button>
    `;
  } else if (type === 'heap') {
    renderHeapSimulator();
    controls.innerHTML = `
      <button class="sim-btn" onclick="bubbleUpHeap()">Step Bubble Up</button>
      <button class="sim-btn secondary" onclick="resetHeapSimulator()">Reset Heap</button>
    `;
  } else if (type === 'graph') {
    renderGraphSimulator();
    controls.innerHTML = `
      <button class="sim-btn" onclick="findGraphPath()">Find Dijkstra Path</button>
      <button class="sim-btn secondary" onclick="resetGraphSimulator()">Reset Graph</button>
    `;
  } else if (type === 'hashing') {
    renderHashingSimulator();
    controls.innerHTML = `
      <button class="sim-btn" onclick="stepHash()">Step Hash (Ann)</button>
      <button class="sim-btn secondary" onclick="resetHashSimulator()">Reset Hash Map</button>
    `;
  } else if (type === 'sorting') {
    renderSortingSimulator();
    controls.innerHTML = `
      <button class="sim-btn" onclick="stepSort()">Step Bubble Swap</button>
      <button class="sim-btn secondary" onclick="resetSortSimulator()">Reset List</button>
    `;
  } else if (type === 'searching') {
    renderSearchingSimulator();
    controls.innerHTML = `
      <button class="sim-btn" onclick="stepSearch()">Step Binary Search</button>
      <button class="sim-btn secondary" onclick="resetSearchSimulator()">Reset Bounds</button>
    `;
  } else if (type === 'dp') {
    renderDPSimulator();
    controls.innerHTML = `
      <button class="sim-btn" onclick="stepDP()">Step Fib Memoization</button>
      <button class="sim-btn secondary" onclick="resetDPSimulator()">Reset Cache</button>
    `;
  } else if (type === 'greedy') {
    renderGreedySimulator();
    controls.innerHTML = `
      <button class="sim-btn" onclick="makeGreedyChoice()">Make Greedy Choice</button>
      <button class="sim-btn secondary" onclick="resetGreedySimulator()">Reset Change</button>
    `;
  } else if (type === 'collections') {
    renderCollectionsSimulator();
    controls.innerHTML = `
      <button class="sim-btn" onclick="addCollectionsDuplicate()">Insert Duplicate 'A'</button>
      <button class="sim-btn secondary" onclick="resetCollectionsSimulator()">Reset Collections</button>
    `;
  }
}

/* 6a. STACK ENGINE */
function renderStack() {
  const canvas = document.getElementById('simulator-canvas');
  let svg = `<svg viewBox="0 0 300 200" width="100%" height="200">
    <path d="M 110 20 L 110 180 L 190 180 L 190 20" fill="none" stroke="var(--forest-canopy)" stroke-width="4"/>
  `;
  
  stackData.forEach((val, idx) => {
    const y = 150 - (idx * 32);
    svg += `
      <g class="animate-slide">
        <rect x="120" y="${y}" width="60" height="25" rx="4" fill="var(--spring-meadow)" stroke="var(--forest-canopy)" stroke-width="2"/>
        <text x="150" y="${y + 17}" font-family="Anton" font-size="12" fill="#000000" text-anchor="middle">${val}</text>
      </g>
    `;
  });

  if (stackData.length === 0) {
    svg += `<text x="150" y="100" font-family="Marcellus" font-size="12" fill="#888" text-anchor="middle">Stack Empty</text>`;
  }

  svg += `</svg>`;
  canvas.innerHTML = svg;
}

function pushStack() {
  const val = parseInt(document.getElementById('stack-input').value);
  if (!val || stackData.length >= 5) return;
  stackData.push(val);
  renderStack();
}

function popStack() {
  if (stackData.length === 0) return;
  stackData.pop();
  renderStack();
}

/* 6b. QUEUE ENGINE */
function renderQueue() {
  const canvas = document.getElementById('simulator-canvas');
  let svg = `<svg viewBox="0 0 400 150" width="100%" height="150" style="display:block; margin:auto;">`;

  queueData.forEach((val, idx) => {
    const x = 80 + (idx * 70);
    svg += `
      <g class="animate-slide">
        <circle cx="${x}" cy="70" r="22" fill="var(--spring-meadow)" stroke="var(--forest-canopy)" stroke-width="2"/>
        <!-- SECURE BINDING: HTML escape the value before placing it inside the SVG element! -->
        <text x="${x}" y="75" font-family="Anton" font-size="14" fill="#000" text-anchor="middle">${escapeHTML(val)}</text>
        <text x="${x}" y="115" font-family="Bebas Neue" font-size="10" fill="var(--forest-canopy)" text-anchor="middle">
          ${idx === 0 ? 'Front' : (idx === queueData.length - 1 ? 'Rear' : '')}
        </text>
      </g>
    `;
  });

  if (queueData.length === 0) {
    svg += `<text x="200" y="75" font-family="Marcellus" font-size="12" fill="#888" text-anchor="middle">Queue Empty</text>`;
  }

  svg += `</svg>`;
  canvas.innerHTML = svg;
}

function enqueueQueue() {
  const val = document.getElementById('queue-input').value.trim();
  if (!val || queueData.length >= 5) return;
  queueData.push(val);
  renderQueue();
}

function dequeueQueue() {
  if (queueData.length === 0) return;
  queueData.shift();
  renderQueue();
}

/* 6c. ARRAY ENGINE */
function renderArray() {
  const canvas = document.getElementById('simulator-canvas');
  let svg = `<svg viewBox="0 0 400 150" width="100%" height="150">`;
  
  arrayData.forEach((val, idx) => {
    const x = 40 + (idx * 68);
    svg += `
      <g class="animate-slide">
        <rect x="${x}" y="45" width="56" height="50" rx="6" fill="var(--spring-meadow)" stroke="var(--forest-canopy)" stroke-width="2"/>
        <text x="${x + 28}" y="78" font-family="Anton" font-size="14" fill="#000" text-anchor="middle">${val}</text>
        <text x="${x + 28}" y="120" font-family="Bebas Neue" font-size="9" fill="var(--forest-canopy)" text-anchor="middle">Index ${idx}</text>
      </g>
    `;
  });

  svg += `</svg>`;
  canvas.innerHTML = svg;
}

function rotateArray() {
  if (arrayData.length === 0) return;
  const first = arrayData.shift();
  arrayData.push(first);
  renderArray();
}

function computePrefixSum() {
  let running = 0;
  arrayData = arrayData.map(val => {
    running += val;
    return running;
  });
  renderArray();
}

function resetArraySimulator() {
  arrayData = [12, 5, 8, 19, 23];
  renderArray();
}

/* 6d. LINKED LIST ENGINE */
function renderLinkedList() {
  const canvas = document.getElementById('simulator-canvas');
  let svg = `<svg viewBox="0 0 500 150" width="100%" height="150">`;

  listNodes.forEach((val, idx) => {
    const x = 30 + (idx * 115);
    svg += `
      <g class="animate-slide">
        <rect x="${x}" y="45" width="50" height="40" rx="4" fill="var(--spring-meadow)" stroke="var(--forest-canopy)" stroke-width="2"/>
        <text x="${x + 25}" y="70" font-family="Anton" font-size="12" fill="#000" text-anchor="middle">${val}</text>
        
        <!-- Next address pointer box -->
        <rect x="${x + 50}" y="45" width="20" height="40" rx="1" fill="var(--sunset-amber)" fill-opacity="0.2" stroke="var(--sunset-amber)"/>
        <circle cx="${x + 60}" cy="65" r="3" fill="var(--sunset-amber)"/>
    `;
    
    if (idx < listNodes.length - 1) {
      svg += `
        <!-- Arrow pointing to next node -->
        <path d="M ${x + 70} 65 L ${x + 108} 65" stroke="var(--sunset-amber)" stroke-width="2"/>
        <polygon points="${x + 108},65 ${x + 102},61 ${x + 102},69" fill="var(--sunset-amber)"/>
      `;
    } else {
      svg += `
        <text x="${x + 60}" y="105" font-family="Bebas Neue" font-size="8" fill="#999" text-anchor="middle">NULL</text>
      `;
    }

    svg += `
      </g>
    `;
  });

  if (listNodes.length === 0) {
    svg += `<text x="250" y="75" font-family="Marcellus" font-size="12" fill="#888" text-anchor="middle">List Empty</text>`;
  }

  svg += `</svg>`;
  canvas.innerHTML = svg;
}

function insertListNode() {
  const val = parseInt(document.getElementById('list-input').value);
  if (!val || listNodes.length >= 4) return;
  listNodes.unshift(val); // add to head
  renderLinkedList();
}

function reverseLinkedList() {
  listNodes.reverse();
  renderLinkedList();
}

function resetListSimulator() {
  listNodes = [10, 20, 30];
  renderLinkedList();
}

/* 6e. BIT MANIPULATION ENGINE */
function renderBitManip() {
  const canvas = document.getElementById('simulator-canvas');
  let decimal = 0;
  bitState.forEach((val, idx) => {
    if (val === 1) decimal += Math.pow(2, 7 - idx);
  });

  let svg = `<svg viewBox="0 0 500 150" width="100%" height="150">`;
  
  bitState.forEach((val, idx) => {
    const x = 20 + (idx * 56);
    const weight = Math.pow(2, 7 - idx);
    svg += `
      <g class="animate-slide" style="cursor:pointer;" onclick="toggleBitAt(${idx})">
        <!-- Switch Box -->
        <rect x="${x}" y="35" width="46" height="60" rx="4" fill="${val === 1 ? 'var(--spring-meadow)' : '#ffffff'}" stroke="${val === 1 ? 'var(--forest-canopy)' : '#ccc'}" stroke-width="2"/>
        <circle cx="${x + 23}" cy="${val === 1 ? 50 : 80}" r="10" fill="${val === 1 ? 'var(--forest-canopy)' : '#888'}"/>
        
        <text x="${x + 23}" y="112" font-family="Bebas Neue" font-size="9" fill="var(--forest-canopy)" text-anchor="middle">2^${7-idx} (${weight})</text>
        <text x="${x + 23}" y="128" font-family="Anton" font-size="10" fill="#000" text-anchor="middle">${val}</text>
      </g>
    `;
  });

  svg += `
    <text x="250" y="22" font-family="Anton" font-size="13" fill="var(--forest-canopy)" text-anchor="middle">Decimal Total = ${decimal}</text>
  </svg>`;
  
  canvas.innerHTML = svg;
}

function toggleBitAt(idx) {
  bitState[idx] = bitState[idx] === 1 ? 0 : 1;
  renderBitManip();
}

function shiftBitsLeft() {
  bitState.shift();
  bitState.push(0);
  renderBitManip();
}

function shiftBitsRight() {
  bitState.pop();
  bitState.unshift(0);
  renderBitManip();
}

function resetBits() {
  bitState = [0, 0, 0, 0, 0, 0, 0, 0];
  renderBitManip();
}

/* 6f. RECURSION ENGINE */
function renderRecursion() {
  const canvas = document.getElementById('simulator-canvas');
  let svg = `<svg viewBox="0 0 450 150" width="100%" height="150">`;

  for (let i = 0; i < dollDepth; i++) {
    const x = 40 + (i * 90);
    const size = 80 - (i * 12);
    const y = 80 - size / 2;
    svg += `
      <g class="animate-slide">
        <!-- Doll contour -->
        <rect x="${x}" y="${y}" width="${size}" height="${size}" rx="15" fill="var(--spring-meadow)" stroke="var(--forest-canopy)" stroke-width="2"/>
        <circle cx="${x + size/2}" cy="${y + size/3}" r="${size/5}" fill="#ffffff" stroke="var(--forest-canopy)"/>
        <!-- Eyes -->
        <circle cx="${x + size/2 - 3}" cy="${y + size/3 - 1}" r="1" fill="#000"/>
        <circle cx="${x + size/2 + 3}" cy="${y + size/3 - 1}" r="1" fill="#000"/>
        <text x="${x + size/2}" y="${y + size - 15}" font-family="Anton" font-size="8.5" fill="#000" text-anchor="middle">Doll(${i + 1})</text>
    `;
    if (i === 3) {
      svg += `<text x="${x + size/2}" y="${y + size + 20}" font-family="Bebas Neue" font-size="8.5" fill="var(--sunset-amber)" text-anchor="middle">BASE CASE!</text>`;
    }
    svg += `</g>`;
  }

  svg += `</svg>`;
  canvas.innerHTML = svg;
}

function stepRecursion() {
  if (dollDepth >= 4) return;
  dollDepth++;
  renderRecursion();
}

function resetRecursion() {
  dollDepth = 1;
  renderRecursion();
}

/* 6g. OOP ENGINE */
function renderOOPSimulator() {
  const canvas = document.getElementById('simulator-canvas');
  canvas.innerHTML = `
    <svg viewBox="0 0 400 120" width="100%" height="120" style="display:block; margin:auto;">
      <rect x="130" y="30" width="140" height="50" rx="10" fill="${oopCarColor}" stroke="#333" stroke-width="2"/>
      <rect x="160" y="10" width="80" height="25" rx="5" fill="${oopCarColor}" stroke="#333" stroke-width="2"/>
      <circle cx="165" cy="80" r="15" fill="#222" stroke="#fff" stroke-width="2"/>
      <circle cx="235" cy="80" r="15" fill="#222" stroke="#fff" stroke-width="2"/>
      <text x="200" y="60" font-family="Anton" font-size="9.5" fill="#fff" text-anchor="middle">${oopCarEngine}</text>
    </svg>
    <div style="font-size:12px; margin-top:8px; font-family:monospace; color:var(--forest-canopy); text-align:center;">
      Car myCar = new Car("${oopCarColor === 'var(--forest-canopy)' ? 'Green' : 'Amber'}", "${oopCarEngine}");
    </div>
  `;
}
function changeOOPColor() {
  oopCarColor = oopCarColor === 'var(--forest-canopy)' ? 'var(--sunset-amber)' : 'var(--forest-canopy)';
  renderOOPSimulator();
}
function changeOOPEngine() {
  oopCarEngine = oopCarEngine === 'V6 Hybrid' ? 'V8 Electric' : 'V6 Hybrid';
  renderOOPSimulator();
}
function resetOOPSimulator() {
  oopCarColor = 'var(--forest-canopy)';
  oopCarEngine = 'V6 Hybrid';
  renderOOPSimulator();
}

/* 6h. CORE JAVA ENGINE */
function renderCoreJavaSimulator() {
  const canvas = document.getElementById('simulator-canvas');
  let bitWidth = coreJavaType === 'byte' ? 60 : (coreJavaType === 'int' ? 120 : 180);
  canvas.innerHTML = `
    <svg viewBox="0 0 400 120" width="100%" height="120" style="display:block; margin:auto;">
      <rect x="${200 - bitWidth/2}" y="25" width="${bitWidth}" height="45" rx="4" fill="var(--spring-meadow)" stroke="var(--forest-canopy)" stroke-width="2"/>
      <text x="200" y="52" font-family="Anton" font-size="14" fill="#000" text-anchor="middle">${coreJavaValue}</text>
      <text x="200" y="95" font-family="Bebas Neue" font-size="11" fill="var(--forest-canopy)" text-anchor="middle">Type: ${coreJavaType.toUpperCase()} (${coreJavaType === 'byte' ? '8-bit container' : (coreJavaType === 'int' ? '32-bit container' : '64-bit decimal container')})</text>
    </svg>
  `;
}
function setCoreJavaType(type) {
  coreJavaType = type;
  if (type === 'byte') coreJavaValue = 127;
  else if (type === 'int') coreJavaValue = 2048;
  else coreJavaValue = 99.99;
  renderCoreJavaSimulator();
}

/* 6i. STRING ENGINE */
function renderStringSimulator() {
  const canvas = document.getElementById('simulator-canvas');
  let equalsResult = stringMode === 'equals' ? 'true' : 'false';
  let codeStr = stringMode === 'equals' ? 's1.equals(s2)' : 's1 == s2';
  canvas.innerHTML = `
    <svg viewBox="0 0 450 140" width="100%" height="140" style="display:block; margin:auto;">
      <rect x="10" y="10" width="430" height="120" rx="8" fill="none" stroke="#ccc" stroke-dasharray="3,3"/>
      <text x="25" y="25" font-family="Bebas Neue" font-size="9" fill="#999">Heap Memory</text>
      
      <rect x="230" y="25" width="180" height="90" rx="6" fill="var(--spring-meadow)" fill-opacity="0.2" stroke="var(--forest-canopy)" stroke-width="1.5"/>
      <text x="320" y="42" font-family="Bebas Neue" font-size="9" fill="var(--forest-canopy)" text-anchor="middle">String Pool</text>
      
      <rect x="260" y="55" width="120" height="25" rx="3" fill="var(--spring-meadow)" stroke="var(--forest-canopy)" stroke-width="1.5"/>
      <text x="320" y="71" font-family="Anton" font-size="10" fill="#000" text-anchor="middle">"Java" [@101]</text>
      
      <rect x="40" y="80" width="140" height="25" rx="3" fill="#ffffff" stroke="var(--sunset-amber)" stroke-width="1.5"/>
      <text x="110" y="96" font-family="Anton" font-size="10" fill="#000" text-anchor="middle">new String("Java") [@202]</text>
      
      <text x="40" y="45" font-family="Fira Code" font-size="9" fill="#333">s1 = "Java" &rarr; [@101]</text>
      <text x="40" y="65" font-family="Fira Code" font-size="9" fill="#333">s2 = ${stringMode === 'equals' ? '"Java" &rarr; [@101]' : 'new String("Java") &rarr; [@202]'}</text>
      
      <text x="220" y="125" font-family="Anton" font-size="11" fill="var(--sunset-amber)" text-anchor="middle">${codeStr} is ${equalsResult}</text>
    </svg>
  `;
}
function toggleStringMode(mode) {
  stringMode = mode;
  renderStringSimulator();
}

/* 6j. TREE ENGINE */
function renderTreeSimulator() {
  const canvas = document.getElementById('simulator-canvas');
  let svg = `<svg viewBox="0 0 400 150" width="100%" height="150" style="display:block; margin:auto;">`;
  svg += `<line x1="200" y1="35" x2="130" y2="80" stroke="var(--forest-canopy)" stroke-width="2"/>`;
  svg += `<line x1="200" y1="35" x2="270" y2="80" stroke="var(--forest-canopy)" stroke-width="2"/>`;
  
  svg += `<circle cx="200" cy="35" r="18" fill="var(--spring-meadow)" stroke="var(--forest-canopy)" stroke-width="2"/>`;
  svg += `<text x="200" y="39" font-family="Anton" font-size="11" fill="#000" text-anchor="middle">50</text>`;
  
  svg += `<circle cx="130" cy="80" r="18" fill="var(--spring-meadow)" stroke="var(--forest-canopy)" stroke-width="2"/>`;
  svg += `<text x="130" y="84" font-family="Anton" font-size="11" fill="#000" text-anchor="middle">30</text>`;
  
  svg += `<circle cx="270" cy="80" r="18" fill="var(--spring-meadow)" stroke="var(--forest-canopy)" stroke-width="2"/>`;
  svg += `<text x="270" y="84" font-family="Anton" font-size="11" fill="#000" text-anchor="middle">70</text>`;
  
  if (treeNodes.length > 3) {
    const extraVal = treeNodes[3];
    let cx = extraVal < 50 ? (extraVal < 30 ? 80 : 180) : (extraVal < 70 ? 220 : 320);
    let px = extraVal < 50 ? 130 : 270;
    svg += `<line x1="${px}" y1="80" x2="${cx}" y2="125" stroke="var(--sunset-amber)" stroke-width="1.5" stroke-dasharray="2"/>`;
    svg += `<circle cx="${cx}" cy="125" r="15" fill="var(--spring-meadow)" stroke="var(--sunset-amber)" stroke-width="2"/>`;
    svg += `<text x="${cx}" y="129" font-family="Anton" font-size="9" fill="#000" text-anchor="middle">${extraVal}</text>`;
  }
  
  svg += `</svg>`;
  canvas.innerHTML = svg;
}
function insertTreeNode() {
  if (treeNodes.length >= 4) return;
  const choices = [20, 40, 60, 80];
  const val = choices[Math.floor(Math.random() * choices.length)];
  treeNodes.push(val);
  renderTreeSimulator();
}
function resetTreeSimulator() {
  treeNodes = [50, 30, 70];
  renderTreeSimulator();
}

/* 6k. HEAP ENGINE */
function renderHeapSimulator() {
  const canvas = document.getElementById('simulator-canvas');
  let svg = `<svg viewBox="0 0 400 150" width="100%" height="150" style="display:block; margin:auto;">`;
  
  svg += `<line x1="200" y1="35" x2="130" y2="80" stroke="var(--forest-canopy)" stroke-width="2"/>`;
  svg += `<line x1="200" y1="35" x2="270" y2="80" stroke="var(--forest-canopy)" stroke-width="2"/>`;
  svg += `<line x1="130" y1="80" x2="80" y2="125" stroke="var(--forest-canopy)" stroke-width="2"/>`;
  
  let n1 = heapStep === 0 ? 90 : (heapStep === 1 ? 90 : 99);
  let n2 = heapStep === 0 ? 50 : (heapStep === 1 ? 99 : 90);
  let n3 = 70;
  let n4 = heapStep === 0 ? 99 : (heapStep === 1 ? 50 : 50);
  
  svg += `<circle cx="200" cy="35" r="18" fill="var(--spring-meadow)" stroke="var(--forest-canopy)" stroke-width="2"/>`;
  svg += `<text x="200" y="39" font-family="Anton" font-size="11" fill="#000" text-anchor="middle">${n1}</text>`;
  
  svg += `<circle cx="130" cy="80" r="18" fill="var(--spring-meadow)" stroke="var(--forest-canopy)" stroke-width="2"/>`;
  svg += `<text x="130" y="84" font-family="Anton" font-size="11" fill="#000" text-anchor="middle">${n2}</text>`;
  
  svg += `<circle cx="270" cy="80" r="18" fill="var(--spring-meadow)" stroke="var(--forest-canopy)" stroke-width="2"/>`;
  svg += `<text x="270" y="84" font-family="Anton" font-size="11" fill="#000" text-anchor="middle">${n3}</text>`;
  
  svg += `<circle cx="80" cy="125" r="15" fill="var(--spring-meadow)" stroke="${heapStep === 0 ? 'var(--sunset-amber)' : 'var(--forest-canopy)'}" stroke-width="2"/>`;
  svg += `<text x="80" y="129" font-family="Anton" font-size="9" fill="#000" text-anchor="middle">${n4}</text>`;
  
  svg += `</svg>`;
  canvas.innerHTML = svg;
}
function bubbleUpHeap() {
  if (heapStep < 2) {
    heapStep++;
    renderHeapSimulator();
  }
}
function resetHeapSimulator() {
  heapStep = 0;
  renderHeapSimulator();
}

/* 6l. GRAPH ENGINE */
function renderGraphSimulator() {
  const canvas = document.getElementById('simulator-canvas');
  let svg = `<svg viewBox="0 0 400 150" width="100%" height="150" style="display:block; margin:auto;">`;
  let pStroke1 = graphPathFound ? 'var(--sunset-amber)' : 'var(--forest-canopy)';
  let pStroke2 = graphPathFound ? 'var(--sunset-amber)' : 'var(--forest-canopy)';
  let pStroke3 = 'var(--forest-canopy)';
  
  svg += `<line x1="50" y1="75" x2="200" y2="30" stroke="${pStroke1}" stroke-width="${graphPathFound ? 4 : 2}"/>`;
  svg += `<line x1="50" y1="75" x2="200" y2="120" stroke="${pStroke3}" stroke-width="2"/>`;
  svg += `<line x1="200" y1="30" x2="350" y2="75" stroke="${pStroke2}" stroke-width="${graphPathFound ? 4 : 2}"/>`;
  svg += `<line x1="200" y1="120" x2="350" y2="75" stroke="var(--forest-canopy)" stroke-width="2"/>`;
  
  svg += `<text x="120" y="45" font-family="Anton" font-size="10" fill="#000">Wt: 2</text>`;
  svg += `<text x="120" y="110" font-family="Anton" font-size="10" fill="#000">Wt: 8</text>`;
  svg += `<text x="280" y="45" font-family="Anton" font-size="10" fill="#000">Wt: 3</text>`;
  
  svg += `<circle cx="50" cy="75" r="18" fill="var(--spring-meadow)" stroke="var(--forest-canopy)" stroke-width="2"/>`;
  svg += `<text x="50" y="79" font-family="Anton" font-size="11" fill="#000" text-anchor="middle">A</text>`;
  
  svg += `<circle cx="200" cy="30" r="18" fill="var(--spring-meadow)" stroke="var(--forest-canopy)" stroke-width="2"/>`;
  svg += `<text x="200" y="34" font-family="Anton" font-size="11" fill="#000" text-anchor="middle">B</text>`;
  
  svg += `<circle cx="200" cy="120" r="18" fill="var(--spring-meadow)" stroke="var(--forest-canopy)" stroke-width="2"/>`;
  svg += `<text x="200" y="124" font-family="Anton" font-size="11" fill="#000" text-anchor="middle">C</text>`;
  
  svg += `<circle cx="350" cy="75" r="18" fill="var(--spring-meadow)" stroke="var(--forest-canopy)" stroke-width="2"/>`;
  svg += `<text x="350" y="79" font-family="Anton" font-size="11" fill="#000" text-anchor="middle">D</text>`;
  
  svg += `</svg>`;
  canvas.innerHTML = svg;
}
function findGraphPath() {
  graphPathFound = true;
  renderGraphSimulator();
}
function resetGraphSimulator() {
  graphPathFound = false;
  renderGraphSimulator();
}

/* 6m. HASHING ENGINE */
function renderHashingSimulator() {
  const canvas = document.getElementById('simulator-canvas');
  let svg = `<svg viewBox="0 0 400 150" width="100%" height="150" style="display:block; margin:auto;">`;
  
  for (let i = 0; i < 4; i++) {
    svg += `<rect x="${60 + (i * 80)}" y="60" width="60" height="35" rx="3" fill="var(--morning-mist)" stroke="var(--forest-canopy)" stroke-width="1.5"/>`;
    svg += `<text x="${90 + (i * 80)}" y="82" font-family="Anton" font-size="10" fill="#000" text-anchor="middle">Bucket ${i}</text>`;
  }
  
  svg += `<rect x="60" y="60" width="60" height="35" rx="3" fill="var(--spring-meadow)" stroke="var(--forest-canopy)" stroke-width="2"/>`;
  svg += `<text x="90" y="82" font-family="Anton" font-size="10" fill="#000" text-anchor="middle">Bob</text>`;
  
  if (hashingStep > 0) {
    let y = hashingStep === 1 ? 12 : 60;
    svg += `<g class="animate-slide">`;
    svg += `<rect x="220" y="${y}" width="60" height="35" rx="3" fill="var(--spring-meadow)" stroke="var(--sunset-amber)" stroke-width="2"/>`;
    svg += `<text x="250" y="${y + 22}" font-family="Anton" font-size="10" fill="#000" text-anchor="middle">Ann</text>`;
    svg += `</g>`;
    
    if (hashingStep === 1) {
      svg += `<text x="200" y="130" font-family="Fira Code" font-size="9.5" fill="var(--sunset-amber)" text-anchor="middle">"Ann".hashCode() % 4 = 2</text>`;
    }
  }
  
  svg += `</svg>`;
  canvas.innerHTML = svg;
}
function stepHash() {
  if (hashingStep < 2) {
    hashingStep++;
    renderHashingSimulator();
  }
}
function resetHashSimulator() {
  hashingStep = 0;
  renderHashingSimulator();
}

/* 6n. SORTING ENGINE */
function renderSortingSimulator() {
  const canvas = document.getElementById('simulator-canvas');
  let svg = `<svg viewBox="0 0 400 150" width="100%" height="150" style="display:block; margin:auto;">`;
  sortData.forEach((val, idx) => {
    const x = 70 + (idx * 70);
    const h = val * 2;
    const y = 90 - h;
    let strokeCol = (idx === sortIndex || idx === sortIndex + 1) ? 'var(--sunset-amber)' : 'var(--forest-canopy)';
    svg += `
      <rect x="${x}" y="${y}" width="40" height="${h}" rx="3" fill="var(--spring-meadow)" stroke="${strokeCol}" stroke-width="2.5"/>
      <text x="${x + 20}" y="115" font-family="Anton" font-size="12" fill="#000" text-anchor="middle">${val}</text>
    `;
  });
  svg += `</svg>`;
  canvas.innerHTML = svg;
}
function stepSort() {
  if (sortIndex < sortData.length - 1) {
    if (sortData[sortIndex] > sortData[sortIndex + 1]) {
      let temp = sortData[sortIndex];
      sortData[sortIndex] = sortData[sortIndex + 1];
      sortData[sortIndex + 1] = temp;
    }
    sortIndex++;
  } else {
    sortIndex = 0;
  }
  renderSortingSimulator();
}
function resetSortSimulator() {
  sortData = [40, 10, 30, 20];
  sortIndex = 0;
  renderSortingSimulator();
}

/* 6o. SEARCHING ENGINE */
function renderSearchingSimulator() {
  const canvas = document.getElementById('simulator-canvas');
  let svg = `<svg viewBox="0 0 450 150" width="100%" height="150" style="display:block; margin:auto;">`;
  let vals = [10, 20, 25, 37, 50, 60];
  let low = searchStep === 0 ? 0 : (searchStep === 1 ? 3 : 3);
  let high = searchStep === 0 ? 5 : (searchStep === 1 ? 5 : 3);
  let mid = searchStep === 0 ? 2 : (searchStep === 1 ? 4 : 3);
  
  vals.forEach((val, idx) => {
    const x = 30 + (idx * 65);
    let isEliminated = (idx < low || idx > high);
    let fillCol = isEliminated ? '#eee' : 'var(--spring-meadow)';
    let textCol = isEliminated ? '#bbb' : '#000';
    svg += `
      <rect x="${x}" y="35" width="50" height="40" rx="4" fill="${fillCol}" stroke="var(--forest-canopy)" stroke-width="2"/>
      <text x="${x + 25}" y="60" font-family="Anton" font-size="12" fill="${textCol}" text-anchor="middle">${val}</text>
    `;
    if (idx === low && !isEliminated) svg += `<text x="${x + 25}" y="95" font-family="Bebas Neue" font-size="8" fill="var(--forest-canopy)" text-anchor="middle">L</text>`;
    if (idx === high && !isEliminated) svg += `<text x="${x + 25}" y="115" font-family="Bebas Neue" font-size="8" fill="var(--forest-canopy)" text-anchor="middle">H</text>`;
    if (idx === mid && !isEliminated) svg += `<text x="${x + 25}" y="105" font-family="Bebas Neue" font-size="8" fill="var(--sunset-amber)" text-anchor="middle">MID</text>`;
  });
  
  svg += `</svg>`;
  canvas.innerHTML = svg;
}
function stepSearch() {
  if (searchStep < 2) {
    searchStep++;
    renderSearchingSimulator();
  }
}
function resetSearchSimulator() {
  searchStep = 0;
  renderSearchingSimulator();
}

/* 6p. DP ENGINE */
function renderDPSimulator() {
  const canvas = document.getElementById('simulator-canvas');
  let svg = `<svg viewBox="0 0 400 150" width="100%" height="150" style="display:block; margin:auto;">`;
  for (let i = 0; i < 5; i++) {
    const x = 50 + (i * 60);
    let fillCol = dpFibTable[i] === '?' ? '#fff' : 'var(--spring-meadow)';
    svg += `
      <rect x="${x}" y="35" width="50" height="40" rx="4" fill="${fillCol}" stroke="var(--forest-canopy)" stroke-width="2"/>
      <text x="${x + 25}" y="60" font-family="Anton" font-size="14" fill="#000" text-anchor="middle">${dpFibTable[i]}</text>
      <text x="${x + 25}" y="95" font-family="Bebas Neue" font-size="10" fill="var(--forest-canopy)" text-anchor="middle">Fib(${i})</text>
    `;
  }
  svg += `</svg>`;
  canvas.innerHTML = svg;
}
function stepDP() {
  if (dpStep === 0) {
    dpFibTable[2] = 1;
    dpStep++;
  } else if (dpStep === 1) {
    dpFibTable[3] = 2;
    dpStep++;
  } else if (dpStep === 2) {
    dpFibTable[4] = 3;
    dpStep++;
  }
  renderDPSimulator();
}
function resetDPSimulator() {
  dpFibTable = [0, 1, '?', '?', '?'];
  dpStep = 0;
  renderDPSimulator();
}

/* 6q. GREEDY ENGINE */
function renderGreedySimulator() {
  const canvas = document.getElementById('simulator-canvas');
  let svg = `<svg viewBox="0 0 400 150" width="100%" height="150" style="display:block; margin:auto;">`;
  svg += `<text x="200" y="25" font-family="Anton" font-size="12" fill="var(--forest-canopy)" text-anchor="middle">Remaining Target: $${greedyTarget}</text>`;
  
  greedyCoins.forEach((coin, idx) => {
    const x = 100 + (idx * 70);
    svg += `
      <circle cx="${x}" cy="75" r="22" fill="var(--spring-meadow)" stroke="var(--sunset-amber)" stroke-width="2.5"/>
      <text x="${x}" y="79" font-family="Anton" font-size="12" fill="#000" text-anchor="middle">$${coin}</text>
    `;
  });
  
  svg += `</svg>`;
  canvas.innerHTML = svg;
}
function makeGreedyChoice() {
  if (greedyTarget >= 25) {
    greedyCoins.push(25);
    greedyTarget -= 25;
  } else if (greedyTarget >= 10) {
    greedyCoins.push(10);
    greedyTarget -= 10;
  } else if (greedyTarget >= 1) {
    greedyCoins.push(1);
    greedyTarget -= 1;
  }
  renderGreedySimulator();
}
function resetGreedySimulator() {
  greedyTarget = 36;
  greedyCoins = [];
  renderGreedySimulator();
}

/* 6r. COLLECTIONS ENGINE */
function renderCollectionsSimulator() {
  const canvas = document.getElementById('simulator-canvas');
  let svg = `<svg viewBox="0 0 450 150" width="100%" height="150" style="display:block; margin:auto;">`;
  
  svg += `<rect x="30" y="30" width="160" height="85" rx="6" fill="none" stroke="var(--forest-canopy)" stroke-width="1.5"/>`;
  svg += `<text x="110" y="22" font-family="Bebas Neue" font-size="10" fill="var(--forest-canopy)" text-anchor="middle">ArrayList (Allows Duplicates)</text>`;
  collList.forEach((val, idx) => {
    svg += `<rect x="${45 + (idx * 50)}" y="50" width="40" height="40" rx="3" fill="var(--spring-meadow)" stroke="var(--forest-canopy)" stroke-width="1.5"/>`;
    svg += `<text x="${65 + (idx * 50)}" y="75" font-family="Anton" font-size="12" fill="#000" text-anchor="middle">${val}</text>`;
  });
  
  svg += `<rect x="260" y="30" width="160" height="85" rx="6" fill="none" stroke="var(--sunset-amber)" stroke-width="1.5"/>`;
  svg += `<text x="340" y="22" font-family="Bebas Neue" font-size="10" fill="var(--sunset-amber)" text-anchor="middle">HashSet (Requires Uniqueness)</text>`;
  collSet.forEach((val, idx) => {
    svg += `<circle cx="${340}" cy="70" r="22" fill="var(--spring-meadow)" fill-opacity="0.3" stroke="var(--sunset-amber)" stroke-width="1.5"/>`;
    svg += `<text x="340" y="74" font-family="Anton" font-size="12" fill="#000" text-anchor="middle">${val}</text>`;
  });
  
  if (collStep === 1) {
    svg += `<text x="225" y="138" font-family="Marcellus" font-size="9" fill="var(--sunset-amber)" text-anchor="middle">ArrayList accepted duplicate 'A'! HashSet rejected duplicate 'A'!</text>`;
  }
  
  svg += `</svg>`;
  canvas.innerHTML = svg;
}
function addCollectionsDuplicate() {
  if (collStep === 0) {
    collList.push('A');
    collStep = 1;
    renderCollectionsSimulator();
  }
}
function resetCollectionsSimulator() {
  collList = ['A'];
  collSet = ['A'];
  collStep = 0;
  renderCollectionsSimulator();
}

// 7. Render Revision Cheatsheet View
function renderCheatsheet() {
  const container = document.getElementById('cheatsheet-cards-container');
  container.innerHTML = "";

  window.DSA_DATA.forEach((topic, topicIdx) => {
    topic.subtopics.forEach((sub, subIdx) => {
      const card = document.createElement('div');
      card.className = 'cheatsheet-card';
      card.onclick = () => navigateFromCheatsheetToExplorer(topicIdx, subIdx);
      
      card.innerHTML = `
        <div class="cheatsheet-header">${topic.title}</div>
        <div class="cheatsheet-subname">${sub.name}</div>
        <div class="cheatsheet-syntax"><code>${escapeHTML(sub.syntax)}</code></div>
      `;
      container.appendChild(card);
    });
  });
}

function navigateFromCheatsheetToExplorer(topicIdx, subtopicIdx) {
  switchView('explorer');
  selectTopic(topicIdx);
  selectSubtopic(subtopicIdx);
  document.getElementById('active-topic-container').scrollIntoView({ behavior: 'smooth' });
}

// 8. Handle Search Filters
function handleSearch(event) {
  const query = event.target.value.toLowerCase().trim();
  const explorerBtn = document.getElementById('tab-btn-explorer');
  const cheatsheetBtn = document.getElementById('tab-btn-cheatsheet');
  
  const explorerActive = explorerBtn && explorerBtn.classList.contains('active');
  const cheatsheetActive = cheatsheetBtn && cheatsheetBtn.classList.contains('active');

  if (explorerActive) {
    const lists = document.querySelectorAll('.topic-list li');
    if (query === "") {
      lists.forEach(li => li.style.display = 'block');
      return;
    }

    window.DSA_DATA.forEach((topic, idx) => {
      const listBtn = document.getElementById(`directory-btn-${idx}`);
      if (listBtn) {
        const parentLi = listBtn.parentElement;
        const matches = topic.title.toLowerCase().includes(query) || topic.subtopics.some(sub => 
          sub.name.toLowerCase().includes(query) || sub.description.toLowerCase().includes(query)
        );
        parentLi.style.display = matches ? 'block' : 'none';
      }
    });
  } else if (cheatsheetActive) {
    const cards = document.querySelectorAll('.cheatsheet-card');
    if (query === "") {
      cards.forEach(card => card.style.display = 'flex');
      return;
    }

    cards.forEach(card => {
      const headerText = card.querySelector('.cheatsheet-header').innerText.toLowerCase();
      const subnameText = card.querySelector('.cheatsheet-subname').innerText.toLowerCase();
      const syntaxText = card.querySelector('.cheatsheet-syntax').innerText.toLowerCase();
      const matches = headerText.includes(query) || subnameText.includes(query) || syntaxText.includes(query);
      card.style.display = matches ? 'flex' : 'none';
    });
  }
}

// 9. AI Tutor Chat Logic (Safely proxies queries exclusively to backend API endpoint)
async function sendTutorMessage() {
  const input = document.getElementById('tutor-chat-input');
  const query = input.value.trim();
  if (!query) return;

  const chatBox = document.getElementById('chat-messages-box');
  
  chatBox.innerHTML += `
    <div class="chat-msg user animate-slide">${escapeHTML(query)}</div>
  `;
  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;

  const loadingId = "tutor-loading-" + Date.now();
  chatBox.innerHTML += `
    <div class="chat-msg bot animate-slide" id="${loadingId}">Thinking scholar answers...</div>
  `;
  chatBox.scrollTop = chatBox.scrollHeight;

  const topic = window.DSA_DATA[activeTopicIndex];
  const subtopic = topic.subtopics[activeSubtopicIndex];
  
  const systemPrompt = `You are a strict, nature-inspired scholarly Java tutor. Explain everything strictly in Java, with an academic tone.
Active Topic: ${topic.title}
Active Subtopic: ${subtopic.name}
Java Code Reference:
${subtopic.javaCode}

User Question: ${query}`;

  try {
    const res = await fetch('/api/explain', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: systemPrompt })
    });

    if (!res.ok) {
      throw new Error("Tutor backend offline. Please configure Vercel's GEMINI_API_KEY environment variable!");
    }

    const data = await res.json();
    const responseText = data.explanation;

    const loadingEl = document.getElementById(loadingId);
    if (loadingEl) {
      loadingEl.innerHTML = formatMarkdown(responseText);
    }
  } catch (err) {
    const loadingEl = document.getElementById(loadingId);
    if (loadingEl) {
      loadingEl.className = "chat-msg bot animate-slide";
      loadingEl.style.backgroundColor = "rgba(255,143,0,0.15)";
      loadingEl.style.borderColor = "var(--sunset-amber)";
      loadingEl.innerHTML = `<strong>Error:</strong> ${err.message}`;
    }
  }
  chatBox.scrollTop = chatBox.scrollHeight;
}

// 10. Unified Concept Map Flowchart Renderer (With glowing nodes synchronizer & explicit non-overlapping paths)
function renderConceptMap() {
  const canvas = document.getElementById('playground-svg-canvas');
  canvas.innerHTML = "";

  // Dynamic SVG assembly, size 1300x850 to provide immense breathing room
  let svg = `<svg viewBox="0 0 1300 850" width="1300" height="850" style="display: block; overflow: visible; user-select:none;">
    <defs>
      <!-- Standard green arrowhead -->
      <marker id="relation-arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--forest-canopy)"/>
      </marker>
      <!-- Hover orange arrowhead -->
      <marker id="relation-arrow-hover" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--sunset-amber)"/>
      </marker>
    </defs>
  `;

  // 1. Draw Relationship paths (Behind nodes)
  flowchartRelations.forEach((rel, rIdx) => {
    const fromNode = flowchartNodes.find(n => n.id === rel.from);
    const toNode = flowchartNodes.find(n => n.id === rel.to);
    
    if (fromNode && toNode) {
      const pathD = rel.path(fromNode, toNode);

      svg += `
        <g class="flow-relation" style="cursor:pointer;" 
           onmouseenter="hoverRelation(${rIdx})" 
           onmouseleave="clearRelationHighlight(${rIdx})"
           onclick="navigateToTopic('${rel.to}')">
          <path d="${pathD}" fill="none" stroke="var(--forest-canopy)" stroke-width="2.5" 
                marker-end="url(#relation-arrow)" class="hoverable-part" id="flow-path-${rIdx}" data-part="rel-${rIdx}"/>
          
          <!-- Relationship midpath labels placed at explicit, non-overlapping coordinates -->
          <rect x="${rel.labelX - 65}" y="${rel.labelY - 11}" width="130" height="20" rx="4" fill="var(--morning-mist)" stroke="none" opacity="0.9"/>
          <text x="${rel.labelX}" y="${rel.labelY + 2}" font-family="Bebas Neue" font-size="8.5" fill="var(--forest-canopy)" text-anchor="middle">${escapeHTML(rel.label)}</text>
        </g>
      `;
    }
  });

  // 2. Draw Nodes (On top of lines)
  flowchartNodes.forEach(node => {
    svg += `
      <g class="flow-node" style="cursor:pointer;" 
         onmouseenter="hoverNode('${node.id}')" 
         onmouseleave="clearNodeHighlight('${node.id}')"
         onclick="navigateToTopic('${node.id}')">
        <!-- Node Box size is 120 x 90 -->
        <rect x="${node.x}" y="${node.y}" width="120" height="90" rx="8" 
              fill="var(--bg-white)" stroke="var(--forest-canopy)" stroke-width="2" 
              class="hoverable-part" id="flow-node-rect-${node.id}" data-part="node-${node.id}"/>
        
        <!-- Text labels inside box -->
        <text x="${node.x + 60}" y="${node.y + 18}" font-family="Anton" font-size="10.5" fill="var(--text-dark)" text-anchor="middle">${escapeHTML(node.title)}</text>
        <text x="${node.x + 60}" y="${node.y + 33}" font-family="Bebas Neue" font-size="8.5" fill="var(--forest-canopy)" text-anchor="middle">${escapeHTML(node.analogy)}</text>
        
        <!-- Visual Analogies drawings embedded inside each box -->
        ${node.iconSvg(node.x, node.y)}
      </g>
    `;
  });

  svg += `</svg>`;
  canvas.innerHTML = svg;
  applyZoom();
}

// Hover handlers for Concept Map nodes & relations (Visual Synchronizers!)
function hoverNode(topicId) {
  const detailTitle = document.getElementById('hover-element-title');
  const detailDesc = document.getElementById('hover-element-desc');
  
  const topic = window.DSA_DATA.find(t => t.id === topicId);
  if (topic) {
    detailTitle.innerHTML = `${topic.title} Node <span style="font-family:'Bebas Neue'; color:var(--sunset-amber); font-size:12px; margin-left:8px;">Click to select and open simulation in Visual Explorer</span>`;
    detailDesc.innerHTML = `<strong>Real-Life Analogy Mapping:</strong> ${topic.analogy.text}`;
  }
}

function clearNodeHighlight(topicId) {
  // Gracefully handles leaving nodes
}

function hoverRelation(relIndex) {
  const detailTitle = document.getElementById('hover-element-title');
  const detailDesc = document.getElementById('hover-element-desc');
  const rel = flowchartRelations[relIndex];
  
  if (rel) {
    detailTitle.innerHTML = `Relationship: ${rel.label} <span style="font-family:'Bebas Neue'; color:var(--sunset-amber); font-size:12px; margin-left:8px;">Click to explore target topic</span>`;
    detailDesc.innerHTML = rel.desc;

    // Glowing Node Synchronizer: highlights source and target node boxes!
    const sourceRect = document.getElementById(`flow-node-rect-${rel.from}`);
    const targetRect = document.getElementById(`flow-node-rect-${rel.to}`);
    
    if (sourceRect) sourceRect.classList.add('glow-highlight');
    if (targetRect) targetRect.classList.add('glow-highlight');
  }
}

function clearRelationHighlight(relIndex) {
  const rel = flowchartRelations[relIndex];
  if (rel) {
    const sourceRect = document.getElementById(`flow-node-rect-${rel.from}`);
    const targetRect = document.getElementById(`flow-node-rect-${rel.to}`);
    
    if (sourceRect) sourceRect.classList.remove('glow-highlight');
    if (targetRect) targetRect.classList.remove('glow-highlight');
  }
}

// Helper Utilities
function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag)
  );
}

// Copy to clipboard helper
function copyCodeText(button) {
  const codeBlock = button.parentElement.nextElementSibling.querySelector('code');
  navigator.clipboard.writeText(codeBlock.innerText).then(() => {
    const originalText = button.innerText;
    button.innerText = "Copied!";
    button.style.backgroundColor = "var(--sunset-amber)";
    setTimeout(() => {
      button.innerText = originalText;
      button.style.backgroundColor = "";
    }, 1500);
  });
}

function formatMarkdown(text) {
  // SECURE BINDING: Escape raw input to neutralize arbitrary script injections
  const escaped = escapeHTML(text);
  
  // Wrap safe markdown markers with clean structural tags
  let formatted = escaped.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  formatted = formatted.replace(/`(.*?)`/g, '<code style="background:rgba(0,0,0,0.05); padding:2px 4px; border-radius:4px; font-family:monospace;">$1</code>');
  formatted = formatted.split('\n\n').map(p => `<p style="margin-bottom:8px;">${p}</p>`).join('');
  return formatted;
}
