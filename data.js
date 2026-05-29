// Java DSA Interactive Visualizer Topic Database (Upgraded with Premium SVGs and Comprehensive Cheatsheet Subtopics)
window.DSA_DATA = [
  {
    id: "oop-concepts",
    title: "OOP Concepts",
    category: "OOP & Core Java",
    analogy: {
      title: "The Car Assembly Line & Driver Interface",
      text: "Imagine a car factory. A <strong>Class</strong> is the blueprint or CAD drawing of a car. An <strong>Object</strong> is the actual physical car driving on the road built from that blueprint. The <strong>Constructor</strong> is the ignition switch that starts the engine and initializes all systems. <strong>Inheritance</strong> is creating a specialized SUV class based on the standard Car class—inheriting the wheels and engine but adding all-wheel drive. <strong>Polymorphism</strong> is how different cars react when you step on the gas pedal: a hybrid car accelerates silently, while a sports car roars. <strong>Abstraction</strong> is the driver's dashboard—you push a pedal to accelerate without knowing the physics of fuel injection or cylinder combustion. <strong>Encapsulation</strong> is the locked engine hood protecting delicate parts from external manipulation. <strong>Interface</strong> is the standard driver controls (steering wheel, pedals)—any driver who knows how to use this interface can drive any car, whether it is a Toyota or a Ferrari. An <strong>Abstract Class</strong> is a partially completed prototype car that cannot be sold directly but serves as a base for specific models.",
      svgRepresentation: `<svg viewBox="0 0 500 200" class="w-full h-44 max-w-lg mx-auto">
        <!-- Grid/Blueprint Background -->
        <rect x="5" y="5" width="490" height="190" rx="8" fill="#f4f6fc" stroke="#c8e6c9" stroke-width="2"/>
        
        <!-- Left Side: Blueprint / Class -->
        <rect x="20" y="25" width="130" height="85" fill="none" stroke="#2d7d32" stroke-width="1.5" stroke-dasharray="3,3"/>
        <path d="M 30 75 Q 85 45 140 75" fill="none" stroke="#2d7d32" stroke-width="1.5" stroke-dasharray="3,3"/>
        <circle cx="50" cy="110" r="10" fill="none" stroke="#2d7d32" stroke-width="1.5" stroke-dasharray="3,3"/>
        <circle cx="120" cy="110" r="10" fill="none" stroke="#2d7d32" stroke-width="1.5" stroke-dasharray="3,3"/>
        <text x="85" y="45" font-family="Anton" font-size="9" fill="#2d7d32" text-anchor="middle">Blueprint (Class)</text>
        
        <!-- Arrow to Instance -->
        <path d="M 160 70 L 195 70" stroke="#ff8f00" stroke-width="2" fill="none"/>
        <polygon points="195,70 188,65 188,75" fill="#ff8f00"/>
        <text x="177" y="60" font-family="Bebas Neue" font-size="8" letter-spacing="1" fill="#ff8f00" text-anchor="middle">new()</text>
        
        <!-- Middle Side: Realized Object -->
        <rect x="210" y="30" width="120" height="75" rx="8" fill="#c8e6c9" stroke="#2d7d32" stroke-width="2"/>
        <path d="M 220 70 Q 270 45 320 70" fill="none" stroke="#2d7d32" stroke-width="2.5"/>
        <circle cx="240" cy="105" r="12" fill="#000" stroke="#ff8f00" stroke-width="2"/>
        <circle cx="240" cy="105" r="4" fill="#fff"/>
        <circle cx="300" cy="105" r="12" fill="#000" stroke="#ff8f00" stroke-width="2"/>
        <circle cx="300" cy="105" r="4" fill="#fff"/>
        <text x="270" y="60" font-family="Anton" font-size="10" fill="#000000" text-anchor="middle">Car (Object)</text>
        
        <!-- Right Side: Interface and Encapsulation -->
        <rect x="350" y="25" width="130" height="150" rx="8" fill="#ffffff" stroke="#ff8f00" stroke-width="2"/>
        <text x="415" y="40" font-family="Bebas Neue" font-size="9.5" letter-spacing="1" fill="#ff8f00" text-anchor="middle">Dashboard (Interface)</text>
        
        <!-- Steering Wheel -->
        <circle cx="385" cy="70" r="15" fill="none" stroke="#2d7d32" stroke-width="2.5"/>
        <line x1="370" y1="70" x2="400" y2="70" stroke="#2d7d32" stroke-width="2"/>
        <line x1="385" y1="55" x2="385" y2="85" stroke="#2d7d32" stroke-width="2"/>
        <text x="385" y="95" font-family="Marcellus" font-size="7.5" fill="#000" text-anchor="middle">Steer() Interface</text>
        
        <!-- Encapsulated Engine block -->
        <rect x="420" y="55" width="50" height="40" rx="4" fill="#ff8f00" fill-opacity="0.1" stroke="#ff8f00" stroke-dasharray="2,2"/>
        <text x="445" y="70" font-family="Anton" font-size="7" fill="#ff8f00" text-anchor="middle">private</text>
        <text x="445" y="82" font-family="Marcellus" font-size="7" fill="#000" text-anchor="middle">Engine</text>
        
        <!-- Abstract base block below -->
        <rect x="20" y="130" width="310" height="45" rx="5" fill="#ffffff" stroke="#2d7d32" stroke-width="1.5" stroke-dasharray="4,4"/>
        <text x="175" y="148" font-family="Bebas Neue" font-size="9" letter-spacing="1.5" fill="#2d7d32" text-anchor="middle">Abstract Class (Partial Prototype Car)</text>
        <text x="175" y="162" font-family="Marcellus" font-size="8" fill="#555" text-anchor="middle">Cannot be instantiated, but holds variables &amp; incomplete blueprints.</text>
      </svg>`
    },
    interactiveType: "oop",
    hoverParts: {
      "dashboard": {
        label: "Dashboard (Abstraction)",
        desc: "Hides complex mechanical systems behind simple driver pedals. In Java: <code>public void pressAccelerator() { startCombustion(); }</code> where combustion details are hidden."
      },
      "ignition": {
        label: "Key Ignition Switch (Constructor)",
        desc: "Invoked when starting the vehicle. Allocates power and starts cylinders. In Java: <code>Car c = new Car();</code> calls the initialization block."
      },
      "car-body": {
        label: "Chassis & Tires (Object & Class)",
        desc: "The physical entity instantiated from blueprint guidelines. Each has individual state (speed, color) but follows the class templates."
      },
      "hood": {
        label: "Locked Engine Hood (Encapsulation)",
        desc: "Prevents direct modification of spark plugs and belts. Variables are kept private, and modified only through safe dashboard triggers (getters/setters)."
      }
    },
    subtopics: [
      {
        name: "Class & Object",
        description: "A Class is a user-defined template or blueprint from which objects are created. An Object is an instance of a class.",
        javaCode: `public class Car {
    private String model;
    private int speed;

    // Constructor method to build a Car object!
    public Car(String model) {
        this.model = model;
        this.speed = 0;
    }

    public void accelerate() {
        this.speed += 10;
        System.out.println(model + " speed is now " + speed + " km/h");
    }

    public static void main(String[] args) {
        // Creating an Object instance from class Car
        Car myCar = new Car("Toyota");
        myCar.accelerate();
    }
}`,
        syntax: `// Defining Class blueprint
class MyClass {
    int data;
    void display() { }
}
// Creating Object instance
MyClass obj = new MyClass();`
      },
      {
        name: "Constructors & Keywords",
        description: "Constructors are invoked dynamically during object instantiation using the 'new' keyword. The 'this' keyword refers to the current object instance, while 'super' invokes parent constructors/methods.",
        javaCode: `class Vehicle {
    protected int wheels;
    public Vehicle(int wheels) {
        this.wheels = wheels; // 'this' differentiates instance fields
    }
}

class Car extends Vehicle {
    private String model;
    
    public Car(String model) {
        super(4); // 'super' calls the parent constructor
        this.model = model;
    }
}`,
        syntax: `// Standard constructor
public ClassName(arguments) {
    this.field = argument;
}
// Parent invocation
super(arguments);`
      },
      {
        name: "Interface & Abstract Class",
        description: "Abstraction hides implementation details. Interfaces declare abstract actions (contracts) that subclasses MUST implement. Abstract Classes can have partial concrete implementations and state fields.",
        javaCode: `interface Drivable {
    void steer(String direction);
    void brake();
}

abstract class EcoVehicle implements Drivable {
    protected int carbonFootprint = 0;
    public abstract void recharge();
    public void showFootprint() {
        System.out.println("Carbon Footprint: " + carbonFootprint);
    }
}

class Tesla extends EcoVehicle {
    public void steer(String dir) { System.out.println("Steering " + dir); }
    public void brake() { System.out.println("Regenerative braking applied"); }
    public void recharge() { System.out.println("Charging battery at Supercharger"); }
}`,
        syntax: `interface MyInterface { void process(); }
abstract class MyAbstractClass {
    abstract void perform();
    void concrete() { }
}`
      },
      {
        name: "Encapsulation & Inheritance",
        description: "Encapsulation restricts direct variable access via private fields and public getters/setters. Inheritance allows a child class to inherit fields and methods from a parent using the 'extends' keyword.",
        javaCode: `public class BankAccount {
    private double balance; // Encapsulated variable

    public double getBalance() {
        return this.balance;
    }

    public void deposit(double amount) {
        if (amount > 0) this.balance += amount;
    }
}

class SavingsAccount extends BankAccount {
    private double interestRate;
    public void applyInterest() {
        double interest = getBalance() * interestRate;
        deposit(interest);
    }
}`,
        syntax: `// Private field & public getter/setter
private String data;
public String getData() { return data; }
// Inheritance
class Child extends Parent { }`
      }
    ]
  },
  {
    id: "core-java",
    title: "Core Java",
    category: "OOP & Core Java",
    analogy: {
      title: "A Warehouse Shipping & Control Center",
      text: "Core Java operates like a state-of-the-art warehouse control center. <strong>Data Types</strong> are different containers—a tiny box for small items (byte/short), a standard crate for numbers (int), and an insulated tank for liquid decimals (double). <strong>Variables</strong> are magnetic label tags stuck to these containers that change as goods move. <strong>Conditionals (if/else)</strong> are sorting chutes that direct packages based on weight. <strong>Loops</strong> are automated conveyor belts carrying boxes until a sensor stops them. <strong>Static</strong> represents the main overhead ceiling light—it is shared by the entire warehouse, whereas non-static objects are local reading lights at each specific worker station. <strong>Final</strong> is a tamper-proof safety lock—once applied, a box cannot be opened or altered. <strong>this</strong> is a worker pointing to the clipboard they are holding, and <strong>super</strong> is pointing to the central master office blueprints. <strong>Exceptions</strong> are warning alarms that halt operations when a conveyor belt jams (try-catch prevents the whole warehouse from shutting down), while <strong>Generics</strong> are universal storage trays designed to safely hold any type of component regardless of its specific shape.",
      svgRepresentation: `<svg viewBox="0 0 500 200" class="w-full h-44 max-w-lg mx-auto">
        <rect x="5" y="5" width="490" height="190" rx="8" fill="#f4f6fc" stroke="#c8e6c9" stroke-width="2"/>
        
        <!-- Data Types Containers -->
        <g transform="translate(10, 20)">
          <!-- int crate -->
          <rect x="10" y="20" width="35" height="35" fill="#c8e6c9" stroke="#2d7d32" stroke-width="1.5"/>
          <text x="27.5" y="42" font-family="Anton" font-size="8" fill="#000" text-anchor="middle">int</text>
          <text x="27.5" y="68" font-family="Bebas Neue" font-size="8" fill="#2d7d32" text-anchor="middle">Crate</text>
          
          <!-- double container -->
          <rect x="55" y="15" width="40" height="40" rx="8" fill="#ff8f00" fill-opacity="0.1" stroke="#ff8f00" stroke-width="1.5"/>
          <text x="75" y="38" font-family="Anton" font-size="8" fill="#ff8f00" text-anchor="middle">double</text>
          <text x="75" y="68" font-family="Bebas Neue" font-size="8" fill="#ff8f00" text-anchor="middle">Tank</text>
        </g>
        
        <!-- Conveyor Loop -->
        <g transform="translate(130, 25)">
          <rect x="10" y="20" width="140" height="35" rx="5" fill="#ffffff" stroke="#2d7d32" stroke-width="1.5"/>
          <line x1="10" y1="37" x2="150" y2="37" stroke="#2d7d32" stroke-dasharray="4,4"/>
          <!-- Moving packages -->
          <rect x="25" y="25" width="15" height="15" fill="#ff8f00" rx="2"/>
          <rect x="70" y="25" width="15" height="15" fill="#c8e6c9" rx="2"/>
          <rect x="115" y="25" width="15" height="15" fill="#ff8f00" rx="2"/>
          <text x="80" y="70" font-family="Bebas Neue" font-size="8" letter-spacing="1.5" fill="#2d7d32" text-anchor="middle">Loops Conveyor</text>
        </g>
        
        <!-- Overhead Ceiling Static Lamp -->
        <g transform="translate(310, 10)">
          <line x1="30" y1="10" x2="30" y2="40" stroke="#000" stroke-width="1.5"/>
          <circle cx="30" cy="48" r="12" fill="#ff8f00" opacity="0.8"/>
          <circle cx="30" cy="48" r="4" fill="#fff"/>
          <!-- Light rays -->
          <line x1="15" y1="48" x2="5" y2="48" stroke="#ff8f00" stroke-width="1"/>
          <line x1="45" y1="48" x2="55" y2="48" stroke="#ff8f00" stroke-width="1"/>
          <line x1="30" y1="65" x2="30" y2="75" stroke="#ff8f00" stroke-width="1"/>
          <text x="30" y="90" font-family="Bebas Neue" font-size="8.5" fill="#ff8f00" text-anchor="middle">Static Lamp</text>
          <text x="30" y="100" font-family="Marcellus" font-size="6.5" fill="#555" text-anchor="middle">(Global Share)</text>
        </g>
        
        <!-- Try-Catch Safety Fuse -->
        <g transform="translate(390, 25)">
          <rect x="10" y="15" width="75" height="50" rx="8" fill="#ffffff" stroke="#ff8f00" stroke-width="1.5"/>
          <!-- Spark lightning -->
          <path d="M 47 25 L 35 43 L 53 43 L 42 60" fill="none" stroke="#ff8f00" stroke-width="2"/>
          <text x="47.5" y="77" font-family="Bebas Neue" font-size="8" letter-spacing="1" fill="#ff8f00" text-anchor="middle">Try-Catch Fuse</text>
        </g>
        
        <!-- Abstract Base Box explanation at bottom -->
        <rect x="20" y="140" width="460" height="40" rx="5" fill="#ffffff" stroke="#2d7d32" stroke-width="1.5"/>
        <text x="250" y="158" font-family="Marcellus" font-size="8.5" fill="#000" text-anchor="middle">Variables are container label tags; loops process boxes; static lighting is class-scoped;</text>
        <text x="250" y="172" font-family="Marcellus" font-size="8.5" fill="#2d7d32" text-anchor="middle">while Try-Catch fuses prevent runtime errors from shutting down the entire warehouse grid!</text>
      </svg>`
    },
    interactiveType: "core-java",
    hoverParts: {
      "conveyor": {
        label: "Automated Conveyor (Loops)",
        desc: "Runs boxes through scanners continuously. In Java, <code>while</code> and <code>for</code> loops process instructions repeatedly until a stop criterion is reached."
      },
      "light": {
        label: "Overhead Ceiling Light (Static)",
        desc: "A single global light source shared by all workers in the warehouse. In Java: <code>static</code> members belong to the class, not instances."
      },
      "fuse": {
        label: "Try-Catch Safety Fuse (Exception Handling)",
        desc: "Prevents a single electrical surge from blowing out the entire facility grid. In Java: <code>try-catch</code> catches runtime errors and keeps the program running."
      }
    },
    subtopics: [
      {
        name: "Primitives & Variables",
        description: "Variables are named storage containers that dynamic values fit inside. Java has 8 primitive data types (byte, short, int, long, float, double, char, boolean) which hold simple raw values directly.",
        javaCode: `public class VariablesDemo {
    public static void main(String[] args) {
        int studentCount = 35; // int crate
        double averageGPA = 3.82; // double tank
        char gradeLetter = 'A'; // single character
        boolean isSchoolDay = true; // binary boolean state
        
        System.out.println("GPA: " + averageGPA);
    }
}`,
        syntax: `int num = 5;
double dec = 5.99;
boolean status = true;
char letter = 'A';`
      },
      {
        name: "Conditionals & Operators",
        description: "Conditional gates steer program flow based on boolean expressions. Standard comparison operators (==, !=, <, >, <=, >=) and logical operators (&&, ||, !) construct execution rules.",
        javaCode: `public class ConditionalsDemo {
    public static void main(String[] args) {
        int score = 85;
        
        // Ternary operator short-hand syntax
        String status = (score >= 50) ? "PASS" : "FAIL";
        
        if (score >= 90) {
            System.out.println("Excellent!");
        } else if (score >= 70 && score < 90) {
            System.out.println("Good Job.");
        } else {
            System.out.println("Keep practicing.");
        }
    }
}`,
        syntax: `// if-else
if (condition) { } else { }
// switch case
switch(expr) { case val: break; }
// Ternary operator
var res = (condition) ? val1 : val2;`
      },
      {
        name: "Loops & Control Flow",
        description: "Conveyor loops repeat operations. 'for' loops are used when the count is known, 'while' loops execute as long as a condition remains true, and 'break'/'continue' control jumps.",
        javaCode: `public class LoopsDemo {
    public static void main(String[] args) {
        // Standard for loop iteration
        for (int i = 0; i < 5; i++) {
            if (i == 2) continue; // skip this box
            System.out.println("Processing crate: " + i);
        }
        
        int temp = 10;
        while (temp > 0) {
            temp--; // cool down
        }
    }
}`,
        syntax: `// for loop
for (int i = 0; i < N; i++) { }
// while loop
while (condition) { }
// for-each loop
for (Type val : array) { }`
      },
      {
        name: "Exception Handling",
        description: "Exceptions represent warnings or faults. A 'try-catch' safety block wraps risky code to catch exceptions before they trigger system crashes.",
        javaCode: `public class ExceptionDemo {
    public static void main(String[] args) {
        try {
            int result = 10 / 0; // ArithmeticException divided by zero
        } catch (ArithmeticException e) {
            System.err.println("Conveyor jam caught: " + e.getMessage());
        } finally {
            System.out.println("Conveyor cleanup completed.");
        }
    }
}`,
        syntax: `try {
    // Risk area
} catch (ExceptionType e) {
    // Safety handle
} finally {
    // Clean-up run
}`
      }
    ]
  },
  {
    id: "arrays",
    title: "Arrays",
    category: "Linear Data Structures",
    analogy: {
      title: "The School Bus",
      text: "An <strong>Array</strong> is like a school bus with a fixed number of seats. The bus cannot expand or shrink once it is built. Each seat is marked with a <strong>Seat Number (Index)</strong> starting at 0, and a specific student occupies that slot. <strong>Array Rotation</strong> shifts the students down a seat, sending the student in the last seat to the very front. The <strong>Sliding Window</strong> is a supervisor's scanner checking exactly 3 contiguous seats at a time, sliding down row-by-row.",
      svgRepresentation: `<svg viewBox="0 0 500 200" class="w-full h-44 max-w-lg mx-auto">
        <rect x="5" y="5" width="490" height="190" rx="8" fill="#f4f6fc" stroke="#c8e6c9" stroke-width="2"/>
        
        <!-- School Bus Outline -->
        <rect x="15" y="25" width="470" height="100" rx="15" fill="#ffffff" stroke="#2d7d32" stroke-width="3"/>
        
        <!-- Wheels -->
        <circle cx="85" cy="130" r="18" fill="#000" stroke="#ff8f00" stroke-width="3"/>
        <circle cx="85" cy="130" r="6" fill="#fff"/>
        
        <circle cx="415" cy="130" r="18" fill="#000" stroke="#ff8f00" stroke-width="3"/>
        <circle cx="415" cy="130" r="6" fill="#fff"/>
        
        <!-- Driver windshield -->
        <rect x="440" y="35" width="35" height="40" fill="#ff8f00" fill-opacity="0.3" stroke="#ff8f00" stroke-width="1.5"/>
        <text x="457.5" y="58" font-family="Anton" font-size="9" fill="#000" text-anchor="middle">Driver</text>
        
        <!-- Grid Seats of Bus -->
        <!-- Seat 0 -->
        <rect x="35" y="45" width="55" height="55" rx="5" fill="#c8e6c9" stroke="#2d7d32" stroke-width="2"/>
        <text x="62.5" y="68" font-family="Anton" font-size="10.5" fill="#000" text-anchor="middle">Alice</text>
        <text x="62.5" y="88" font-family="Bebas Neue" font-size="8" letter-spacing="1" fill="#2d7d32" text-anchor="middle">Index 0</text>
        
        <!-- Seat 1 -->
        <rect x="100" y="45" width="55" height="55" rx="5" fill="#c8e6c9" stroke="#2d7d32" stroke-width="2"/>
        <text x="127.5" y="68" font-family="Anton" font-size="10.5" fill="#000" text-anchor="middle">Bob</text>
        <text x="127.5" y="88" font-family="Bebas Neue" font-size="8" letter-spacing="1" fill="#2d7d32" text-anchor="middle">Index 1</text>
        
        <!-- Seat 2 -->
        <rect x="165" y="45" width="55" height="55" rx="5" fill="#c8e6c9" stroke="#2d7d32" stroke-width="2"/>
        <text x="192.5" y="68" font-family="Anton" font-size="10.5" fill="#000" text-anchor="middle">Charlie</text>
        <text x="192.5" y="88" font-family="Bebas Neue" font-size="8" letter-spacing="1" fill="#2d7d32" text-anchor="middle">Index 2</text>
        
        <!-- Seat 3 -->
        <rect x="230" y="45" width="55" height="55" rx="5" fill="#c8e6c9" stroke="#2d7d32" stroke-width="2"/>
        <text x="257.5" y="68" font-family="Anton" font-size="10.5" fill="#000" text-anchor="middle">David</text>
        <text x="257.5" y="88" font-family="Bebas Neue" font-size="8" letter-spacing="1" fill="#2d7d32" text-anchor="middle">Index 3</text>
        
        <!-- Seat 4 -->
        <rect x="295" y="45" width="55" height="55" rx="5" fill="#c8e6c9" stroke="#2d7d32" stroke-width="2"/>
        <text x="322.5" y="68" font-family="Anton" font-size="10.5" fill="#000" text-anchor="middle">Emma</text>
        <text x="322.5" y="88" font-family="Bebas Neue" font-size="8" letter-spacing="1" fill="#2d7d32" text-anchor="middle">Index 4</text>
        
        <!-- Sliding Window scanner checking contiguous group 1,2,3 -->
        <rect x="94" y="38" width="197" height="69" fill="none" stroke="#ff8f00" stroke-width="2.5" stroke-dasharray="4,2" rx="8"/>
        <text x="192.5" y="24" font-family="Bebas Neue" font-size="9.5" fill="#ff8f00" letter-spacing="1" text-anchor="middle">Sliding Window (Size 3)</text>
        
        <text x="250" y="172" font-family="Marcellus" font-size="9.5" fill="#2d7d32" text-anchor="middle">Contiguous school bus memory blocks indexed strictly starting at 0!</text>
      </svg>`
    },
    interactiveType: "array",
    hoverParts: {
      "seat-0": {
        label: "Seat 0 (Array Index 0)",
        desc: "Occupied by Alice. In Java: <code>bus[0] = \"Alice\";</code>. Elements are contiguous in memory and accessed via 0-based integer indexes."
      },
      "seat-1": {
        label: "Seat 1 (Array Index 1)",
        desc: "Occupied by Bob. In Java: <code>bus[1] = \"Bob\";</code>. Provides O(1) instant lookup time if you know the index."
      }
    },
    subtopics: [
      {
        name: "1D Array",
        description: "A contiguous array allocated in memory. Declared with a fixed capacity that cannot resize. Items are initialized to default values (0, false, null) automatically.",
        javaCode: `public class Array1D {
    public static void main(String[] args) {
        // Initializing with literal values
        int[] ages = {12, 15, 14, 16};
        
        // Initializing empty array with capacity
        int[] scores = new int[5];
        scores[0] = 95; // Write
        int score0 = scores[0]; // O(1) Read
        
        // Traversing elements
        for (int i = 0; i < ages.length; i++) {
            System.out.println("Student at index " + i + ": " + ages[i]);
        }
    }
}`,
        syntax: `// Definition
int[] arr = new int[size];
int[] arrLit = {1, 2, 3};
// Read/Write
arr[idx] = val;
int x = arr[idx];`
      },
      {
        name: "2D Array",
        description: "An array of arrays representing a matrix grid. Elements are accessed using two indices: row index and column index.",
        javaCode: `public class Array2D {
    public static void main(String[] args) {
        // 2x3 Grid Initialization
        int[][] matrix = {
            {1, 2, 3}, // Row 0
            {4, 5, 6}  // Row 1
        };
        
        // Reading cell at Row 1, Column 2
        int val = matrix[1][2]; // returns 6
        
        // Nested loop traversal
        for (int row = 0; row < matrix.length; row++) {
            for (int col = 0; col < matrix[row].length; col++) {
                System.out.print(matrix[row][col] + " ");
            }
            System.out.println();
        }
    }
}`,
        syntax: `// Definition
int[][] grid = new int[rows][cols];
int[][] gridLit = {{1, 2}, {3, 4}};
// Read/Write
grid[r][c] = val;`
      },
      {
        name: "Arrays Utility",
        description: "Java's java.util.Arrays provides built-in methods to easily format, sort, search, and copy standard array arrays.",
        javaCode: `import java.util.Arrays;

public class ArraysUtilDemo {
    public static void main(String[] args) {
        int[] numbers = {19, 5, 23, 8};
        
        // 1. Sort O(N log N)
        Arrays.sort(numbers); // numbers becomes {5, 8, 19, 23}
        
        // 2. Format to String for logging
        System.out.println(Arrays.toString(numbers));
        
        // 3. Binary Search
        int index = Arrays.binarySearch(numbers, 19); // returns 2
        
        // 4. Copy array dynamically
        int[] bigger = Arrays.copyOf(numbers, 8);
    }
}`,
        syntax: `Arrays.sort(array);
String s = Arrays.toString(array);
int idx = Arrays.binarySearch(array, key);
int[] copy = Arrays.copyOf(array, newLength);`
      }
    ]
  },
  {
    id: "strings",
    title: "Strings",
    category: "Linear Data Structures",
    analogy: {
      title: "The String-Bead Necklace",
      text: "A <strong>String</strong> in Java is like a beautiful necklace constructed from character beads. Standard String is immutable; once you thread the beads and lock the clasp, you cannot change any bead—you can only build a completely new necklace.",
      svgRepresentation: `<svg viewBox="0 0 500 200" class="w-full h-44 max-w-lg mx-auto">
        <rect x="5" y="5" width="490" height="190" rx="8" fill="#f4f6fc" stroke="#c8e6c9" stroke-width="2"/>
        
        <!-- Curved necklace cord -->
        <path d="M 50 70 Q 250 170 450 70" fill="none" stroke="#2d7d32" stroke-width="3" stroke-dasharray="3,3"/>
        
        <!-- Beads -->
        <g transform="translate(0, 0)">
          <!-- Bead J -->
          <circle cx="80" cy="81" r="16" fill="#ff8f00" stroke="#000" stroke-width="1.5"/>
          <text x="80" y="86" font-family="Anton" font-size="14" fill="#fff" text-anchor="middle">J</text>
          <text x="80" y="112" font-family="Bebas Neue" font-size="8" fill="#ff8f00" text-anchor="middle">Bead 0</text>
          
          <!-- Bead A -->
          <circle cx="140" cy="102" r="16" fill="#ff8f00" stroke="#000" stroke-width="1.5"/>
          <text x="140" y="107" font-family="Anton" font-size="14" fill="#fff" text-anchor="middle">A</text>
          <text x="140" y="132" font-family="Bebas Neue" font-size="8" fill="#ff8f00" text-anchor="middle">Bead 1</text>
          
          <!-- Bead V -->
          <circle cx="200" cy="116" r="16" fill="#ff8f00" stroke="#000" stroke-width="1.5"/>
          <text x="200" y="121" font-family="Anton" font-size="14" fill="#fff" text-anchor="middle">V</text>
          <text x="200" y="146" font-family="Bebas Neue" font-size="8" fill="#ff8f00" text-anchor="middle">Bead 2</text>
          
          <!-- Bead A -->
          <circle cx="260" cy="120" r="16" fill="#ff8f00" stroke="#000" stroke-width="1.5"/>
          <text x="260" y="125" font-family="Anton" font-size="14" fill="#fff" text-anchor="middle">A</text>
          <text x="260" y="150" font-family="Bebas Neue" font-size="8" fill="#ff8f00" text-anchor="middle">Bead 3</text>
          
          <!-- Bead D -->
          <circle cx="320" cy="113" r="16" fill="#c8e6c9" stroke="#2d7d32" stroke-width="1.5"/>
          <text x="320" y="118" font-family="Anton" font-size="14" fill="#2d7d32" text-anchor="middle">D</text>
          <text x="320" y="140" font-family="Bebas Neue" font-size="8" fill="#2d7d32" text-anchor="middle">Bead 4</text>
          
          <!-- Bead S -->
          <circle cx="380" cy="98" r="16" fill="#c8e6c9" stroke="#2d7d32" stroke-width="1.5"/>
          <text x="380" y="103" font-family="Anton" font-size="14" fill="#2d7d32" text-anchor="middle">S</text>
          <text x="380" y="124" font-family="Bebas Neue" font-size="8" fill="#2d7d32" text-anchor="middle">Bead 5</text>
          
          <!-- Bead A -->
          <circle cx="430" cy="76" r="16" fill="#c8e6c9" stroke="#2d7d32" stroke-width="1.5"/>
          <text x="430" y="81" font-family="Anton" font-size="14" fill="#2d7d32" text-anchor="middle">A</text>
          <text x="430" y="104" font-family="Bebas Neue" font-size="8" fill="#2d7d32" text-anchor="middle">Bead 6</text>
        </g>
        
        <!-- Immutable Clasp at far right -->
        <rect x="440" y="25" width="40" height="35" rx="5" fill="#ffffff" stroke="#2d7d32" stroke-width="2"/>
        <text x="460" y="46" font-family="Anton" font-size="6.5" fill="#000" text-anchor="middle">IMMUTABLE</text>
        <text x="460" y="55" font-family="Bebas Neue" font-size="7" fill="#ff8f00" text-anchor="middle">LOCK CLASP</text>
      </svg>`
    },
    interactiveType: "string",
    hoverParts: {
      "bead-j": {
        label: "Bead 'J' (Char Index 0)",
        desc: "Retrieves the character at index 0. In Java: <code>char c = str.charAt(0);</code>. Strings are sequences of characters."
      }
    },
    subtopics: [
      {
        name: "String Basics",
        description: "Strings store sets of characters. They are immutable (cannot be changed). Modifying a String creates a brand new String object inside memory (String Pool).",
        javaCode: `public class StringDemo {
    public static void main(String[] args) {
        String s1 = "Java"; // Created inside String Pool
        String s2 = new String("Java"); // Created on general heap
        
        // Immutability: concatenating creates a NEW string!
        String s3 = s1.concat(" DSA"); 
        
        // Common queries
        int len = s3.length(); // length method: 8
        char letter = s3.charAt(0); // returns 'J'
        String sub = s3.substring(0, 4); // returns "Java"
        boolean isEqual = s1.equals(s2); // checks literal contents (true)
    }
}`,
        syntax: `String name = "Alice";
int len = name.length();
char c = name.charAt(i);
String sub = name.substring(start, end);
boolean eq = str1.equals(str2);`
      },
      {
        name: "StringBuilder & StringBuffer",
        description: "Mutable, dynamic sequences of characters that allow modification without generating garbage collector overhead. StringBuilder is fast and non-thread-safe. StringBuffer is synchronized and safe for concurrent threads.",
        javaCode: `public class StringBuilderDemo {
    public static void main(String[] args) {
        // Fast mutable sequence
        StringBuilder sb = new StringBuilder("Java");
        
        sb.append(" DSA"); // Appends: "Java DSA"
        sb.insert(4, " &"); // Inserts: "Java & DSA"
        sb.delete(4, 6); // Deletes: "Java DSA"
        sb.reverse(); // Reverses characters: "ASD avaJ"
        
        String finalStr = sb.toString();
        System.out.println(finalStr);
    }
}`,
        syntax: `// Fast mutable builder
StringBuilder sb = new StringBuilder("Base");
sb.append(" added");
sb.insert(offset, "str");
sb.delete(start, end);
sb.reverse();
String res = sb.toString();`
      }
    ]
  },
  {
    id: "linked-list",
    title: "Linked List",
    category: "Linear Data Structures",
    analogy: {
      title: "The Treasure Hunt Clues",
      text: "A <strong>Linked List</strong> is like a nature-trail treasure hunt. You don't have a map showing where all the clues are located ahead of time. Instead, you only know where the first clue is (the <strong>Head</strong>). When you open that clue, it contains the instructions/data and a piece of paper pointing to the location of the next clue (the <strong>Next pointer</strong>).",
      svgRepresentation: `<svg viewBox="0 0 500 200" class="w-full h-44 max-w-lg mx-auto">
        <rect x="5" y="5" width="490" height="190" rx="8" fill="#f4f6fc" stroke="#c8e6c9" stroke-width="2"/>
        
        <!-- Chest Node 1: Head -->
        <g transform="translate(15, 45)">
          <rect x="0" y="0" width="105" height="70" rx="8" fill="#c8e6c9" stroke="#2d7d32" stroke-width="2.5"/>
          <rect x="0" y="0" width="105" height="20" rx="4" fill="#2d7d32"/>
          <text x="52.5" y="14" font-family="Anton" font-size="9" fill="#fff" text-anchor="middle">Chest #1 (Head)</text>
          <!-- Chest contents -->
          <text x="25" y="45" font-family="Anton" font-size="10.5" fill="#000" text-anchor="middle">Data: 10</text>
          <!-- Pointer scroll box -->
          <rect x="50" y="32" width="48" height="26" fill="#ff8f00" fill-opacity="0.15" stroke="#ff8f00" stroke-width="1"/>
          <text x="74" y="44" font-family="Bebas Neue" font-size="7.5" fill="#000" text-anchor="middle">Map to</text>
          <text x="74" y="53" font-family="Bebas Neue" font-size="7.5" fill="#ff8f00" text-anchor="middle">Chest #2</text>
          <!-- Memory Address tag below -->
          <text x="52.5" y="85" font-family="Bebas Neue" font-size="8.5" fill="#2d7d32" text-anchor="middle">Mem Addr: #100</text>
        </g>
        
        <!-- Vine Arrow from Node 1 to 2 -->
        <path d="M 125 80 L 175 80" stroke="#ff8f00" stroke-width="2.5" fill="none"/>
        <polygon points="175,80 167,75 167,85" fill="#ff8f00"/>
        
        <!-- Chest Node 2 -->
        <g transform="translate(185, 45)">
          <rect x="0" y="0" width="105" height="70" rx="8" fill="#c8e6c9" stroke="#2d7d32" stroke-width="2.5"/>
          <rect x="0" y="0" width="105" height="20" rx="4" fill="#2d7d32"/>
          <text x="52.5" y="14" font-family="Anton" font-size="9" fill="#fff" text-anchor="middle">Chest #2</text>
          <text x="25" y="45" font-family="Anton" font-size="10.5" fill="#000" text-anchor="middle">Data: 20</text>
          <rect x="50" y="32" width="48" height="26" fill="#ff8f00" fill-opacity="0.15" stroke="#ff8f00" stroke-width="1"/>
          <text x="74" y="44" font-family="Bebas Neue" font-size="7.5" fill="#000" text-anchor="middle">Map to</text>
          <text x="74" y="53" font-family="Bebas Neue" font-size="7.5" fill="#ff8f00" text-anchor="middle">Chest #3</text>
          <text x="52.5" y="85" font-family="Bebas Neue" font-size="8.5" fill="#2d7d32" text-anchor="middle">Mem Addr: #204</text>
        </g>
        
        <!-- Vine Arrow from Node 2 to 3 -->
        <path d="M 295 80 L 345 80" stroke="#ff8f00" stroke-width="2.5" fill="none"/>
        <polygon points="345,80 337,75 337,85" fill="#ff8f00"/>
        
        <!-- Chest Node 3: Tail -->
        <g transform="translate(355, 45)">
          <rect x="0" y="0" width="125" height="70" rx="8" fill="#c8e6c9" stroke="#2d7d32" stroke-width="2.5"/>
          <rect x="0" y="0" width="125" height="20" rx="4" fill="#2d7d32"/>
          <text x="62.5" y="14" font-family="Anton" font-size="9" fill="#fff" text-anchor="middle">Chest #3 (Tail)</text>
          <text x="30" y="45" font-family="Anton" font-size="10.5" fill="#000" text-anchor="middle">Data: 30</text>
          
          <!-- Null indicator (Locked Padlock) -->
          <rect x="62" y="30" width="50" height="28" fill="#999" fill-opacity="0.1" stroke="#999" stroke-width="1.5" rx="3"/>
          <text x="87" y="47" font-family="Bebas Neue" font-size="8.5" fill="#999" text-anchor="middle">NULL Lock</text>
          <text x="62.5" y="85" font-family="Bebas Neue" font-size="8.5" fill="#2d7d32" text-anchor="middle">Mem Addr: #308</text>
        </g>
      </svg>`
    },
    interactiveType: "linked-list",
    hoverParts: {
      "node-head": {
        label: "Head Node (Index 0)",
        desc: "The entry point of the list. If you lose track of the Head, the entire list is lost in memory. In Java: <code>Node head = new Node(10);</code>"
      }
    },
    subtopics: [
      {
        name: "Singly Linked List",
        description: "A chain of dynamic node elements. Each node holds data and a 'next' reference pointing to the next node in line, terminating at 'null'.",
        javaCode: `public class SinglyLinkedList {
    // Custom internal node container
    static class Node {
        int val;
        Node next;
        Node(int val) {
            this.val = val;
            this.next = null;
        }
    }

    public static void main(String[] args) {
        // Linking nodes manually
        Node head = new Node(10);
        head.next = new Node(20);
        head.next.next = new Node(30);
        
        // Traversing the list
        Node curr = head;
        while (curr != null) {
            System.out.println("Data Chest: " + curr.val);
            curr = curr.next; // step down the clue vine
        }
    }
}`,
        syntax: `class Node {
    int val;
    Node next;
    Node(int val) { this.val = val; }
}`
      },
      {
        name: "Doubly Linked List",
        description: "Nodes contain two pointers: 'next' (points forward) and 'prev' (points backward), enabling full bidirectional traversal.",
        javaCode: `class DLLNode {
    int val;
    DLLNode prev;
    DLLNode next;
    
    DLLNode(int val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

public class DLLDemo {
    public static void main(String[] args) {
        DLLNode first = new DLLNode(10);
        DLLNode second = new DLLNode(20);
        
        first.next = second;
        second.prev = first; // Backlink pointer
    }
}`,
        syntax: `class DLLNode {
    int val;
    DLLNode prev, next;
    DLLNode(int val) { this.val = val; }
}`
      },
      {
        name: "Insertion & Deletion",
        description: "Core pointer redirection methods. Unlike arrays, inserting or deleting items does not require shifting elements—simply rewire local node pointer properties in O(1) time.",
        javaCode: `public Node insertAtHead(Node head, int val) {
    Node newNode = new Node(val);
    newNode.next = head; // Point new node next to previous head
    return newNode; // New node is now the list head!
}

public void deleteNode(Node head, int targetVal) {
    Node curr = head;
    while (curr != null && curr.next != null) {
        if (curr.next.val == targetVal) {
            // Cut the node out of the loop!
            curr.next = curr.next.next;
            return;
        }
        curr = curr.next;
    }
}`,
        syntax: `// Insert Head
newNode.next = head;
// Delete Node
curr.next = curr.next.next;`
      }
    ]
  },
  {
    id: "stack",
    title: "Stack",
    category: "Linear Data Structures",
    analogy: {
      title: "The Cafeteria Plate Stacker",
      text: "A <strong>Stack</strong> operates exactly like a spring-loaded stack of dinner plates in a cafeteria. When a clean plate is washed, it is placed on top of the stack (<strong>Push</strong>). Because of the weight, the entire stack sinks down. When a hungry student comes by, they can only grab the very top plate that is exposed (<strong>Pop</strong>).",
      svgRepresentation: `<svg viewBox="0 0 500 200" class="w-full h-44 max-w-lg mx-auto">
        <rect x="5" y="5" width="490" height="190" rx="8" fill="#f4f6fc" stroke="#c8e6c9" stroke-width="2"/>
        
        <!-- Stack Frame Outline -->
        <path d="M 170 15 L 170 160 L 330 160 L 330 15" fill="none" stroke="#2d7d32" stroke-width="4.5"/>
        
        <!-- Spring at the bottom -->
        <path d="M 180 150 L 320 150 L 190 155 L 310 155 L 200 160 L 300 160" fill="none" stroke="#ff8f00" stroke-width="2"/>
        
        <!-- Plate 1 (Bottom) -->
        <g transform="translate(178, 115)">
          <rect x="0" y="0" width="144" height="25" rx="5" fill="#c8e6c9" stroke="#2d7d32" stroke-width="2"/>
          <text x="72" y="17" font-family="Anton" font-size="11" fill="#000" text-anchor="middle">Data: 10 (First In)</text>
        </g>
        
        <!-- Plate 2 (Middle) -->
        <g transform="translate(178, 85)">
          <rect x="0" y="0" width="144" height="25" rx="5" fill="#c8e6c9" stroke="#2d7d32" stroke-width="2"/>
          <text x="72" y="17" font-family="Anton" font-size="11" fill="#000" text-anchor="middle">Data: 20</text>
        </g>
        
        <!-- Plate 3 (Top) -->
        <g transform="translate(178, 55)">
          <rect x="0" y="0" width="144" height="25" rx="5" fill="#ff8f00" fill-opacity="0.2" stroke="#ff8f00" stroke-width="2"/>
          <text x="72" y="17" font-family="Anton" font-size="11" fill="#ff8f00" text-anchor="middle">Data: 30 (Top / LIFO)</text>
        </g>
        
        <!-- Actions indicators -->
        <!-- Push Action -->
        <g transform="translate(45, 45)">
          <path d="M 50 10 L 50 50" fill="none" stroke="#2d7d32" stroke-width="2" marker-end="url(#arrow)"/>
          <polygon points="50,50 45,42 55,42" fill="#2d7d32"/>
          <text x="50" y="0" font-family="Bebas Neue" font-size="10.5" fill="#2d7d32" text-anchor="middle">PUSH (Add Top)</text>
        </g>
        
        <!-- Pop Action -->
        <g transform="translate(385, 45)">
          <path d="M 50 50 L 50 10" fill="none" stroke="#ff8f00" stroke-width="2"/>
          <polygon points="50,10 45,18 55,18" fill="#ff8f00"/>
          <text x="50" y="0" font-family="Bebas Neue" font-size="10.5" fill="#ff8f00" text-anchor="middle">POP (Remove Top)</text>
        </g>
      </svg>`
    },
    interactiveType: "stack",
    hoverParts: {
      "plate-bottom": {
        label: "Bottom of Stack",
        desc: "The first element pushed into the stack. It cannot be retrieved until all elements above it are popped (LIFO)."
      }
    },
    subtopics: [
      {
        name: "Stack Collections Class",
        description: "Standard LIFO (Last-In, First-Out) container. The last element added via 'push' must be the first one retrieved via 'pop' or inspected with 'peek'.",
        javaCode: `import java.util.Stack;

public class StackDemo {
    public static void main(String[] args) {
        Stack<Integer> plates = new Stack<>();
        
        // Pushing elements O(1)
        plates.push(10); // bottom
        plates.push(20);
        plates.push(30); // top
        
        // Inspecting top O(1)
        int topElement = plates.peek(); // returns 30
        
        // Popping elements O(1)
        int popped = plates.pop(); // returns 30 (Stack is now 10, 20)
        
        boolean empty = plates.isEmpty(); // false
    }
}`,
        syntax: `Stack<Integer> st = new Stack<>();
st.push(val);
int top = st.peek();
int popped = st.pop();
boolean empty = st.isEmpty();`
      },
      {
        name: "Custom Array Stack",
        description: "Building an explicit Stack using a fixed array and a 'top' integer tracker tracking the current active index element.",
        javaCode: `class CustomStack {
    private int[] arr;
    private int top;
    
    public CustomStack(int size) {
        arr = new int[size];
        top = -1; // Empty marker
    }
    
    public void push(int val) {
        if (top < arr.length - 1) {
            arr[++top] = val; // Increment top first, then write
        }
    }
    
    public int pop() {
        if (top >= 0) {
            return arr[top--]; // Read first, then decrement top
        }
        return -1;
    }
}`,
        syntax: `class CustomStack {
    int[] arr = new int[size];
    int top = -1;
}`
      }
    ]
  },
  {
    id: "queue",
    title: "Queue",
    category: "Linear Data Structures",
    analogy: {
      title: "The School Children Lunch Line",
      text: "A <strong>Queue</strong> represents a tidy line of school children waiting in a green meadow for their afternoon lunch. The child who arrived first stands at the front of the line (<strong>Front</strong>) and gets served first (<strong>Dequeue</strong>). A newly arriving child must join at the very back of the line (<strong>Rear / Enqueue</strong>).",
      svgRepresentation: `<svg viewBox="0 0 500 200" class="w-full h-44 max-w-lg mx-auto">
        <rect x="5" y="5" width="490" height="190" rx="8" fill="#f4f6fc" stroke="#c8e6c9" stroke-width="2"/>
        
        <!-- Entry Enqueue Arrow -->
        <g transform="translate(20, 60)">
          <path d="M 10 30 L 60 30" stroke="#2d7d32" stroke-width="2.5" fill="none"/>
          <polygon points="60,30 52,25 52,35" fill="#2d7d32"/>
          <text x="35" y="15" font-family="Bebas Neue" font-size="9" letter-spacing="1" fill="#2d7d32" text-anchor="middle">Enqueue (Rear)</text>
        </g>
        
        <!-- Queue Line of Animals/Children -->
        <!-- Rear Child -->
        <g transform="translate(100, 45)">
          <circle cx="25" cy="25" r="22" fill="#c8e6c9" stroke="#2d7d32" stroke-width="2"/>
          <text x="25" y="30" font-family="Anton" font-size="11" fill="#000" text-anchor="middle">David</text>
          <text x="25" y="62" font-family="Bebas Neue" font-size="8.5" fill="#2d7d32" text-anchor="middle">Index 2 (Rear)</text>
        </g>
        
        <!-- Middle Child -->
        <g transform="translate(180, 45)">
          <circle cx="25" cy="25" r="22" fill="#c8e6c9" stroke="#2d7d32" stroke-width="2"/>
          <text x="25" y="30" font-family="Anton" font-size="11" fill="#000" text-anchor="middle">Charlie</text>
          <text x="25" y="62" font-family="Bebas Neue" font-size="8.5" fill="#2d7d32" text-anchor="middle">Index 1</text>
        </g>
        
        <!-- Front Child -->
        <g transform="translate(260, 45)">
          <circle cx="25" cy="25" r="22" fill="#ff8f00" fill-opacity="0.2" stroke="#ff8f00" stroke-width="2"/>
          <text x="25" y="30" font-family="Anton" font-size="11" fill="#ff8f00" text-anchor="middle">Bob</text>
          <text x="25" y="62" font-family="Bebas Neue" font-size="8.5" fill="#ff8f00" text-anchor="middle">Index 0 (Front)</text>
        </g>
        
        <!-- Exit Dequeue window -->
        <g transform="translate(360, 30)">
          <rect x="0" y="0" width="105" height="90" rx="8" fill="#ffffff" stroke="#ff8f00" stroke-width="2"/>
          <text x="52.5" y="25" font-family="Anton" font-size="9" fill="#000" text-anchor="middle">LUNCH COUNTER</text>
          
          <!-- Exit Arrow -->
          <path d="M 10 55 L 90 55" stroke="#ff8f00" stroke-width="2.5" fill="none"/>
          <polygon points="90,55 82,50 82,60" fill="#ff8f00"/>
          <text x="50" y="77" font-family="Bebas Neue" font-size="8" letter-spacing="1" fill="#ff8f00" text-anchor="middle">Dequeue</text>
        </g>
        
        <text x="250" y="172" font-family="Marcellus" font-size="9.5" fill="#2d7d32" text-anchor="middle">First-In, First-Out (FIFO) queue order waiting in linear succession.</text>
      </svg>`
    },
    interactiveType: "queue",
    hoverParts: {
      "queue-front": {
        label: "Front of Queue (Served first)",
        desc: "Occupied by Bob. Represents First-In, First-Out (FIFO). In Java: <code>int served = queue.poll();</code>"
      }
    },
    subtopics: [
      {
        name: "Queue FIFO Interface",
        description: "Standard FIFO (First-In, First-Out) operations. In Java, Queue is an interface implemented using concrete collections classes like 'LinkedList' or 'ArrayDeque'.",
        javaCode: `import java.util.Queue;
import java.util.LinkedList;

public class QueueDemo {
    public static void main(String[] args) {
        // Instantiate Queue backed by a LinkedList
        Queue<String> lunchLine = new LinkedList<>();
        
        // 1. Enqueue O(1)
        lunchLine.offer("Bob"); // front
        lunchLine.offer("Charlie");
        lunchLine.offer("David"); // rear
        
        // 2. Inspect front O(1)
        String servedNext = lunchLine.peek(); // returns "Bob"
        
        // 3. Dequeue O(1)
        String served = lunchLine.poll(); // removes & returns "Bob"
        
        int lineSize = lunchLine.size(); // returns 2
    }
}`,
        syntax: `Queue<T> q = new LinkedList<>();
q.offer(val); // add rear
T front = q.peek(); // inspect
T served = q.poll(); // remove front`
      },
      {
        name: "Double-Ended Queue (Deque)",
        description: "Deques allow dynamic insertion and removal of elements from BOTH the front and the rear boundaries in O(1) speed.",
        javaCode: `import java.util.Deque;
import java.util.ArrayDeque;

public class DequeDemo {
    public static void main(String[] args) {
        Deque<Integer> dq = new ArrayDeque<>();
        
        // Inserting both directions
        dq.addFirst(10);
        dq.addLast(20);
        
        // Removing both directions
        int f = dq.removeFirst(); // 10
        int l = dq.removeLast(); // 20
    }
}`,
        syntax: `Deque<T> dq = new ArrayDeque<>();
dq.addFirst(x); dq.addLast(y);
T f = dq.pollFirst(); T l = dq.pollLast();`
      }
    ]
  },
  {
    id: "tree",
    title: "Tree",
    category: "Non-Linear Data Structures",
    analogy: {
      title: "The Leafy Branch",
      text: "A <strong>Tree</strong> is exactly like a corporate hierarchy or the folder directory structure on your laptop. At the very peak sits the CEO or root folder (<strong>Root</strong>). From the CEO, branches descend to VPs, managers, and finally to front-line employees (<strong>Leaf Nodes</strong>) who have no reports beneath them.",
      svgRepresentation: `<svg viewBox="0 0 500 200" class="w-full h-44 max-w-lg mx-auto">
        <rect x="5" y="5" width="490" height="190" rx="8" fill="#f4f6fc" stroke="#c8e6c9" stroke-width="2"/>
        
        <!-- Tree Trunk Outline -->
        <path d="M 235 190 L 235 150 L 265 150 L 265 190 Z" fill="#885a3c" stroke="#5d3c21" stroke-width="1.5"/>
        
        <!-- Branches -->
        <path d="M 250 150 L 150 90" stroke="#5d3c21" stroke-width="3"/>
        <path d="M 250 150 L 350 90" stroke="#5d3c21" stroke-width="3"/>
        
        <!-- BST Apple Nodes -->
        <!-- Root node Apple (30) -->
        <g transform="translate(225, 20)">
          <circle cx="25" cy="25" r="20" fill="#2d7d32" stroke="#fff" stroke-width="1.5"/>
          <text x="25" y="30" font-family="Anton" font-size="11.5" fill="#fff" text-anchor="middle">30</text>
          <text x="25" y="5" font-family="Bebas Neue" font-size="8.5" fill="#2d7d32" text-anchor="middle">Root</text>
        </g>
        
        <!-- Left Child (20) -->
        <g transform="translate(125, 75)">
          <circle cx="25" cy="25" r="20" fill="#2d7d32" stroke="#fff" stroke-width="1.5"/>
          <text x="25" y="30" font-family="Anton" font-size="11.5" fill="#fff" text-anchor="middle">20</text>
        </g>
        <line x1="125" y1="120" x2="80" y2="140" stroke="#5d3c21" stroke-width="1.5"/>
        <line x1="165" y1="120" x2="190" y2="140" stroke="#5d3c21" stroke-width="1.5"/>
        
        <!-- Right Child (40) -->
        <g transform="translate(325, 75)">
          <circle cx="25" cy="25" r="20" fill="#ff8f00" stroke="#fff" stroke-width="1.5"/>
          <text x="25" y="30" font-family="Anton" font-size="11.5" fill="#fff" text-anchor="middle">40</text>
        </g>
        <line x1="325" y1="120" x2="280" y2="140" stroke="#5d3c21" stroke-width="1.5"/>
        <line x1="365" y1="120" x2="410" y2="140" stroke="#5d3c21" stroke-width="1.5"/>
        
        <!-- Leaf Nodes -->
        <!-- Left-Left (10) -->
        <circle cx="75" cy="155" r="14" fill="#2d7d32" stroke="#fff"/>
        <text x="75" y="159" font-family="Anton" font-size="9" fill="#fff" text-anchor="middle">10</text>
        
        <!-- Left-Right (25) -->
        <circle cx="195" cy="155" r="14" fill="#2d7d32" stroke="#fff"/>
        <text x="195" y="159" font-family="Anton" font-size="9" fill="#fff" text-anchor="middle">25</text>
        
        <!-- Right-Left (35) -->
        <circle cx="275" cy="155" r="14" fill="#ff8f00" stroke="#fff"/>
        <text x="275" y="159" font-family="Anton" font-size="9" fill="#fff" text-anchor="middle">35</text>
        
        <!-- Right-Right (50) -->
        <circle cx="415" cy="155" r="14" fill="#ff8f00" stroke="#fff"/>
        <text x="415" y="159" font-family="Anton" font-size="9" fill="#fff" text-anchor="middle">50</text>
        
        <text x="415" y="182" font-family="Bebas Neue" font-size="8.5" fill="#ff8f00" text-anchor="middle">Leaf Nodes</text>
      </svg>`
    },
    interactiveType: "tree",
    hoverParts: {
      "tree-root": {
        label: "CEO Node (Tree Root)",
        desc: "The absolute top-level parent node. In Java: <code>Node root = new Node(\"CEO\");</code>. Every tree has exactly one root."
      }
    },
    subtopics: [
      {
        name: "Binary Tree",
        description: "A hierarchical, non-linear system. Each parent Node holds an value and pointer fields references to at most TWO child branches (left, right).",
        javaCode: `public class BinaryTree {
    // Basic Node layout structure
    static class Node {
        int val;
        Node left;
        Node right;
        
        Node(int val) {
            this.val = val;
            this.left = null;
            this.right = null;
        }
    }

    public static void main(String[] args) {
        Node root = new Node(30);
        root.left = new Node(20);
        root.right = new Node(40);
    }
}`,
        syntax: `class Node {
    int val;
    Node left, right;
    Node(int v) { val = v; }
}`
      },
      {
        name: "Tree Traversals",
        description: "Methods to systematically visit all nodes in a tree recursively. Traversals are classified as DFS (Inorder, Preorder, Postorder) or BFS (Level-order).",
        javaCode: `public class Traversals {
    // 1. Inorder: Left -> Root -> Right (BST sorts values!)
    public void inorder(Node root) {
        if (root == null) return;
        inorder(root.left);
        System.out.print(root.val + " ");
        inorder(root.right);
    }
    
    // 2. Preorder: Root -> Left -> Right
    public void preorder(Node root) {
        if (root == null) return;
        System.out.print(root.val + " ");
        preorder(root.left);
        preorder(root.right);
    }
}`,
        syntax: `// DFS Template
void traverse(Node root) {
    if (root == null) return;
    // Preorder: process(root)
    traverse(root.left);
    // Inorder: process(root)
    traverse(root.right);
    // Postorder: process(root)
}`
      },
      {
        name: "Binary Search Tree",
        description: "A BST enforces a sorted structural invariant: for every parent node, all left descendants have smaller values, and all right descendants have larger values.",
        javaCode: `public class BST {
    // Insert recursive routine O(log N)
    public Node insert(Node root, int val) {
        if (root == null) return new Node(val);
        
        if (val < root.val) {
            root.left = insert(root.left, val);
        } else if (val > root.val) {
            root.right = insert(root.right, val);
        }
        return root;
    }
    
    // Search recursive routine O(log N)
    public boolean search(Node root, int key) {
        if (root == null) return false;
        if (root.val == key) return true;
        
        return (key < root.val) 
            ? search(root.left, key) 
            : search(root.right, key);
    }
}`,
        syntax: `// BST insert check
if (val < root.val) root.left = insert(root.left, val);
else root.right = insert(root.right, val);`
      }
    ]
  },
  {
    id: "heap",
    title: "Heap",
    category: "Non-Linear Data Structures",
    analogy: {
      title: "The Hospital Emergency Triage",
      text: "A <strong>Heap</strong> functions like an automated hospital emergency room check-in dashboard. It is a complete binary tree where node values represent the critical nature of a patient's illness.",
      svgRepresentation: `<svg viewBox="0 0 500 200" class="w-full h-44 max-w-lg mx-auto">
        <rect x="5" y="5" width="490" height="190" rx="8" fill="#f4f6fc" stroke="#c8e6c9" stroke-width="2"/>
        
        <!-- Max-Heap Triage Pyramid -->
        <!-- Root node Priority 95 -->
        <g transform="translate(225, 15)">
          <circle cx="25" cy="25" r="22" fill="#ff8f00" fill-opacity="0.2" stroke="#ff8f00" stroke-width="2"/>
          <text x="25" y="30" font-family="Anton" font-size="12" fill="#ff8f00" text-anchor="middle">95</text>
          <text x="25" y="0" font-family="Bebas Neue" font-size="8.5" fill="#ff8f00" text-anchor="middle">Root: Max Priority</text>
          <text x="25" y="-9" font-family="Marcellus" font-size="6.5" fill="#555" text-anchor="middle">(Severe Trauma)</text>
        </g>
        
        <!-- Line connections -->
        <line x1="220" y1="55" x2="160" y2="85" stroke="#2d7d32" stroke-width="2"/>
        <line x1="280" y1="55" x2="340" y2="85" stroke="#2d7d32" stroke-width="2"/>
        
        <!-- Left node Priority 80 -->
        <g transform="translate(125, 75)">
          <circle cx="25" cy="25" r="20" fill="#c8e6c9" stroke="#2d7d32" stroke-width="2"/>
          <text x="25" y="29" font-family="Anton" font-size="11" fill="#000" text-anchor="middle">80</text>
          <text x="25" y="55" font-family="Marcellus" font-size="7" fill="#555" text-anchor="middle">High Fever</text>
        </g>
        
        <!-- Right node Priority 70 -->
        <g transform="translate(325, 75)">
          <circle cx="25" cy="25" r="20" fill="#c8e6c9" stroke="#2d7d32" stroke-width="2"/>
          <text x="25" y="29" font-family="Anton" font-size="11" fill="#000" text-anchor="middle">70</text>
          <text x="25" y="55" font-family="Marcellus" font-size="7" fill="#555" text-anchor="middle">Broken Wrist</text>
        </g>
        
        <!-- Bubble-Up heapify pathways -->
        <path d="M 115 130 Q 95 100 115 70" fill="none" stroke="#ff8f00" stroke-width="1.5" stroke-dasharray="3,2" marker-end="url(#arrow)"/>
        <text x="80" y="105" font-family="Bebas Neue" font-size="8" fill="#ff8f00" text-anchor="middle">Bubble Up</text>
        
        <!-- Bottom left leaf sympton -->
        <circle cx="105" cy="145" r="14" fill="#c8e6c9" stroke="#2d7d32"/>
        <text x="105" y="149" font-family="Anton" font-size="9" fill="#000" text-anchor="middle">45</text>
        <line x1="140" y1="120" x2="115" y2="135" stroke="#2d7d32" stroke-width="1.5"/>
        
        <text x="250" y="180" font-family="Marcellus" font-size="9.5" fill="#2d7d32" text-anchor="middle">Max-Heaps keep maximum priority at the Root for instant O(1) extraction access.</text>
      </svg>`
    },
    interactiveType: "heap",
    hoverParts: {
      "heap-root": {
        label: "Max Heap Root (Emergency Triage #1)",
        desc: "Represents the patient with the highest sickness rating. In a Max Heap, the root always houses the maximum value."
      }
    },
    subtopics: [
      {
        name: "Min Heap",
        description: "A binary heap sorting system. In a Min-Heap, the parent node's value is always smaller than or equal to its children, meaning the smallest item is stored at the root.",
        javaCode: `import java.util.PriorityQueue;

public class MinHeapDemo {
    public static void main(String[] args) {
        // PriorityQueue defaults to a Min-Heap automatically!
        PriorityQueue<Integer> minHeap = new PriorityQueue<>();
        
        // Insert elements O(log N)
        minHeap.add(30);
        minHeap.add(10);
        minHeap.add(20);
        
        // Inspect smallest O(1)
        int min = minHeap.peek(); // returns 10
        
        // Extract smallest O(log N)
        int extracted = minHeap.poll(); // removes and returns 10
    }
}`,
        syntax: `// Min-Heap instantiation
PriorityQueue<Integer> minHeap = new PriorityQueue<>();
minHeap.add(val);
int min = minHeap.poll();`
      },
      {
        name: "Max Heap",
        description: "A parent-dominant sorting system. The parent node's value is larger than or equal to its children. Programmed in Java by passing a custom descending comparator.",
        javaCode: `import java.util.PriorityQueue;
import java.util.Collections;

public class MaxHeapDemo {
    public static void main(String[] args) {
        // Instantiate Max-Heap using reverse order comparator
        PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder());
        
        maxHeap.add(10);
        maxHeap.add(30);
        maxHeap.add(20);
        
        int max = maxHeap.peek(); // returns 30 (Highest Priority)
        int extracted = maxHeap.poll(); // removes 30
    }
}`,
        syntax: `// Max-Heap instantiations
PriorityQueue<T> max = new PriorityQueue<>(Collections.reverseOrder());
PriorityQueue<T> custom = new PriorityQueue<>((a, b) -> b.compare(a));`
      }
    ]
  },
  {
    id: "graph",
    title: "Graph",
    category: "Non-Linear Data Structures",
    analogy: {
      title: "The Flight Routes Network",
      text: "A <strong>Graph</strong> is like a map of international airline routes. Individual cities are vertices/nodes (<strong>Vertices</strong>), and the flight paths connecting them are edges (<strong>Edges</strong>).",
      svgRepresentation: `<svg viewBox="0 0 500 200" class="w-full h-44 max-w-lg mx-auto">
        <rect x="5" y="5" width="490" height="190" rx="8" fill="#f4f6fc" stroke="#c8e6c9" stroke-width="2"/>
        
        <!-- Vertex Nodes representing cities -->
        <!-- NYC -->
        <g transform="translate(60, 45)">
          <circle cx="25" cy="25" r="22" fill="#c8e6c9" stroke="#2d7d32" stroke-width="2.5"/>
          <text x="25" y="30" font-family="Anton" font-size="11" fill="#000" text-anchor="middle">NYC</text>
        </g>
        
        <!-- CHI -->
        <g transform="translate(190, 15)">
          <circle cx="25" cy="25" r="22" fill="#c8e6c9" stroke="#2d7d32" stroke-width="2.5"/>
          <text x="25" y="30" font-family="Anton" font-size="11" fill="#000" text-anchor="middle">CHI</text>
        </g>
        
        <!-- LA -->
        <g transform="translate(340, 45)">
          <circle cx="25" cy="25" r="22" fill="#c8e6c9" stroke="#2d7d32" stroke-width="2.5"/>
          <text x="25" y="30" font-family="Anton" font-size="11" fill="#000" text-anchor="middle">LA</text>
        </g>
        
        <!-- MIA -->
        <g transform="translate(190, 95)">
          <circle cx="25" cy="25" r="22" fill="#ff8f00" fill-opacity="0.2" stroke="#ff8f00" stroke-width="2.5"/>
          <text x="25" y="30" font-family="Anton" font-size="11" fill="#ff8f00" text-anchor="middle">MIA</text>
        </g>
        
        <!-- Connecting Edges with flight hours weights -->
        <!-- NYC - CHI -->
        <line x1="105" y1="58" x2="192" y2="40" stroke="#2d7d32" stroke-width="2"/>
        <text x="145" y="42" font-family="Bebas Neue" font-size="8" fill="#2d7d32" text-anchor="middle">2 Hours</text>
        
        <!-- NYC - MIA -->
        <line x1="105" y1="80" x2="192" y2="105" stroke="#ff8f00" stroke-dasharray="3,2" stroke-width="2"/>
        <text x="145" y="105" font-family="Bebas Neue" font-size="8" fill="#ff8f00" text-anchor="middle">3 Hours</text>
        
        <!-- CHI - LA -->
        <line x1="240" y1="40" x2="342" y2="58" stroke="#2d7d32" stroke-width="2"/>
        <text x="295" y="42" font-family="Bebas Neue" font-size="8" fill="#2d7d32" text-anchor="middle">4 Hours</text>
        
        <!-- MIA - LA -->
        <line x1="240" y1="110" x2="342" y2="80" stroke="#ff8f00" stroke-dasharray="3,2" stroke-width="2"/>
        <text x="295" y="105" font-family="Bebas Neue" font-size="8" fill="#ff8f00" text-anchor="middle">5 Hours</text>
        
        <text x="250" y="172" font-family="Marcellus" font-size="9.5" fill="#2d7d32" text-anchor="middle">Nodes (Cities) connected by weighted bidirectional Edges (Flight Paths).</text>
      </svg>`
    },
    interactiveType: "graph",
    hoverParts: {
      "vertex-nyc": {
        label: "City Vertex (Node NYC)",
        desc: "A vertex representing a location in the network map. In Java: represented as an entry in an Adjacency List."
      }
    },
    subtopics: [
      {
        name: "Representation",
        description: "Graphs consist of vertices (V) and edges (E). They are modeled mathematically using Adjacency Lists (arrays of lists, memory efficient) or Adjacency Matrices (2D arrays, quick edge lookup).",
        javaCode: `import java.util.*;

public class GraphRepresentation {
    public static void main(String[] args) {
        int verticesCount = 4;
        
        // 1. Adjacency List: Map connecting each vertex to its adjacent list
        List<List<Integer>> adjList = new ArrayList<>();
        for (int i = 0; i < verticesCount; i++) {
            adjList.add(new ArrayList<>());
        }
        
        // Add bidirectional edge NYC (0) - CHI (1)
        adjList.get(0).add(1);
        adjList.get(1).add(0);
        
        // 2. Adjacency Matrix
        int[][] adjMatrix = new int[verticesCount][verticesCount];
        adjMatrix[0][1] = 1; // Connection exists
        adjMatrix[1][0] = 1;
    }
}`,
        syntax: `// Adjacency List definition
List<List<Integer>> adj = new ArrayList<>();
// Adjacency Matrix definition
int[][] matrix = new int[V][V];`
      },
      {
        name: "BFS & DFS Traversal",
        description: "BFS (Breadth-First Search) traverses tier-by-tier using a Queue. DFS (Depth-First Search) explores as deep as possible down branches using recursion.",
        javaCode: `public class GraphSearch {
    // DFS routine utilizing recursion
    public void dfs(int vertex, boolean[] visited, List<List<Integer>> adj) {
        visited[vertex] = true;
        System.out.print(vertex + " ");
        
        for (int neighbor : adj.get(vertex)) {
            if (!visited[neighbor]) {
                dfs(neighbor, visited, adj); // recurse deep!
            }
        }
    }

    // BFS routine utilizing FIFO Queue
    public void bfs(int start, List<List<Integer>> adj) {
        boolean[] visited = new boolean[adj.size()];
        Queue<Integer> queue = new LinkedList<>();
        
        visited[start] = true;
        queue.offer(start);
        
        while (!queue.isEmpty()) {
            int curr = queue.poll();
            System.out.print(curr + " ");
            
            for (int neighbor : adj.get(curr)) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.offer(neighbor); // queue next layers
                }
            }
        }
    }
}`,
        syntax: `// DFS recursive helper
dfs(u, visited) { visited[u]=true; for(v: adj[u]) if(!visited[v]) dfs(v); }
// BFS Queue helper
queue.add(start); while(!q.isEmpty()) { u=q.poll(); ... }`
      }
    ]
  },
  {
    id: "hashing",
    title: "Hashing",
    category: "Linear Data Structures",
    analogy: {
      title: "The Supermarket Lockers",
      text: "<strong>Hashing</strong> is like a super-organized bank of lockers at an amusement park. When you check in an item, the locker clerk feeds the item name (the <strong>Key</strong>) into an automated math generator (the <strong>Hash Function</strong>), which instantly prints out a specific locker number (the <strong>Hash Code / Bucket Index</strong>).",
      svgRepresentation: `<svg viewBox="0 0 500 200" class="w-full h-44 max-w-lg mx-auto">
        <rect x="5" y="5" width="490" height="190" rx="8" fill="#f4f6fc" stroke="#c8e6c9" stroke-width="2"/>
        
        <!-- Input Key String -->
        <g transform="translate(15, 60)">
          <rect x="0" y="0" width="75" height="35" rx="5" fill="#ffffff" stroke="#2d7d32" stroke-width="1.5"/>
          <text x="37.5" y="22" font-family="Anton" font-size="10.5" fill="#000" text-anchor="middle">"Paprika"</text>
          <text x="37.5" y="-10" font-family="Bebas Neue" font-size="8.5" fill="#2d7d32" text-anchor="middle">Input Key</text>
        </g>
        
        <!-- Hash Function Scanner -->
        <g transform="translate(115, 45)">
          <rect x="0" y="0" width="85" height="65" rx="8" fill="#ff8f00" fill-opacity="0.1" stroke="#ff8f00" stroke-width="2"/>
          <circle cx="42.5" cy="30" r="14" fill="#ff8f00" opacity="0.2"/>
          <text x="42.5" y="34" font-family="Anton" font-size="10" fill="#ff8f00" text-anchor="middle">hashCode()</text>
          <text x="42.5" y="55" font-family="Bebas Neue" font-size="7.5" fill="#ff8f00" text-anchor="middle">Hash Machine</text>
        </g>
        
        <!-- Scanner path arrows -->
        <path d="M 90 77 L 115 77" stroke="#2d7d32" stroke-width="2" fill="none"/>
        <polygon points="115,77 107,72 107,82" fill="#2d7d32"/>
        
        <path d="M 200 77 L 245 77" stroke="#ff8f00" stroke-width="2" fill="none"/>
        <polygon points="245,77 237,72 237,82" fill="#ff8f00"/>
        <text x="222.5" y="65" font-family="Bebas Neue" font-size="8.5" fill="#ff8f00" text-anchor="middle">Index 3</text>
        
        <!-- Locker buckets layout -->
        <g transform="translate(260, 15)">
          <rect x="0" y="0" width="210" height="135" fill="#ffffff" stroke="#2d7d32" stroke-width="2" rx="5"/>
          
          <!-- Locker Slot 0 -->
          <rect x="10" y="10" width="85" height="35" fill="#f4f6fc" stroke="#ccc"/>
          <text x="18" y="32" font-family="Bebas Neue" font-size="9" fill="#888">Slot 0</text>
          
          <!-- Locker Slot 1 - Collision with list chains! -->
          <rect x="10" y="50" width="85" height="35" fill="#c8e6c9" stroke="#2d7d32"/>
          <text x="18" y="72" font-family="Bebas Neue" font-size="9" fill="#2d7d32">Slot 1</text>
          <text x="55" y="72" font-family="Anton" font-size="8" fill="#000">"Apple"</text>
          <!-- Linked pointer to orange -->
          <path d="M 95 67 L 115 67" stroke="#ff8f00" stroke-width="1.5" marker-end="url(#arrow)"/>
          <rect x="120" y="50" width="80" height="35" fill="#ff8f00" fill-opacity="0.15" stroke="#ff8f00"/>
          <text x="160" y="72" font-family="Anton" font-size="8" fill="#ff8f00" text-anchor="middle">"Banana"</text>
          <text x="150" y="42" font-family="Bebas Neue" font-size="7" fill="#ff8f00" text-anchor="middle">Chaining list</text>
          
          <!-- Locker Slot 3 - Paprika's spot! -->
          <rect x="10" y="90" width="85" height="35" fill="#c8e6c9" stroke="#2d7d32" stroke-width="2"/>
          <text x="18" y="112" font-family="Bebas Neue" font-size="9" fill="#2d7d32">Slot 3</text>
          <text x="55" y="112" font-family="Anton" font-size="8" fill="#000">"Paprika"</text>
        </g>
        
        <text x="250" y="172" font-family="Marcellus" font-size="9.5" fill="#2d7d32" text-anchor="middle">Math functions map keys to slots instantly, handling collisions via linked lists.</text>
      </svg>`
    },
    interactiveType: "hashing",
    hoverParts: {
      "hash-func": {
        label: "Barcode Reader (Hash Function)",
        desc: "Translates a dynamic key input instantly into an array locker index in O(1) time. In Java: <code>key.hashCode() % capacity</code>."
      }
    },
    subtopics: [
      {
        name: "HashMap",
        description: "Stores associations as unique key-value pairs. Instantly fetches values O(1) using keys rather than indexing numbers.",
        javaCode: `import java.util.HashMap;

public class HashMapDemo {
    public static void main(String[] args) {
        // Instantiate HashMap key(String) -> value(Integer)
        HashMap<String, Integer> stock = new HashMap<>();
        
        // 1. Put pairs O(1)
        stock.put("Apple", 50);
        stock.put("Banana", 120);
        stock.put("Paprika", 15);
        
        // 2. Fetch O(1)
        int appleQty = stock.get("Apple"); // returns 50
        
        // 3. Loop keys & entries
        for (String item : stock.keySet()) {
            System.out.println(item + " -> " + stock.get(item));
        }
    }
}`,
        syntax: `HashMap<K, V> map = new HashMap<>();
map.put(key, val);
V value = map.get(key);
boolean exists = map.containsKey(key);`
      },
      {
        name: "HashSet Uniqueness",
        description: "A collection storing strictly unique items, backed internally by a HashMap. Restricts duplicates automatically.",
        javaCode: `import java.util.HashSet;

public class HashSetDemo {
    public static void main(String[] args) {
        HashSet<String> uniqueIngredients = new HashSet<>();
        
        uniqueIngredients.add("Salt");
        uniqueIngredients.add("Pepper");
        uniqueIngredients.add("Salt"); // DUPLICATE - Rejected!
        
        System.out.println(uniqueIngredients.size()); // returns 2
        boolean hasSalt = uniqueIngredients.contains("Salt"); // true
    }
}`,
        syntax: `HashSet<T> set = new HashSet<>();
set.add(item);
boolean exists = set.contains(item);
set.remove(item);`
      }
    ]
  },
  {
    id: "sorting",
    title: "Sorting",
    category: "Algorithms",
    analogy: {
      title: "Arranging the Soldier Lineup",
      text: "<strong>Sorting</strong> is arranging items in linear order. <strong>Bubble Sort</strong> is like a clumsy drill sergeant marching along the lineup, comparing adjacent soldiers and swapping their places repeatedly until the tallest bubbles up to the end.",
      svgRepresentation: `<svg viewBox="0 0 500 200" class="w-full h-44 max-w-lg mx-auto">
        <rect x="5" y="5" width="490" height="190" rx="8" fill="#f4f6fc" stroke="#c8e6c9" stroke-width="2"/>
        
        <!-- Height Parade Lineup -->
        <!-- Cylinder 1 (Value 5) -->
        <g transform="translate(40, 90)">
          <rect x="0" y="40" width="30" height="30" rx="3" fill="#c8e6c9" stroke="#2d7d32" stroke-width="1.5"/>
          <text x="15" y="58" font-family="Anton" font-size="10" fill="#000" text-anchor="middle">5</text>
        </g>
        
        <!-- Cylinder 2 (Value 12) - Active Compare! -->
        <g transform="translate(120, 50)">
          <rect x="0" y="0" width="30" height="70" rx="3" fill="#ff8f00" fill-opacity="0.2" stroke="#ff8f00" stroke-width="2.5"/>
          <text x="15" y="38" font-family="Anton" font-size="11" fill="#ff8f00" text-anchor="middle">12</text>
        </g>
        
        <!-- Swapping Directional Arrows -->
        <path d="M 160 80 Q 200 45 230 80" fill="none" stroke="#ff8f00" stroke-width="2" stroke-dasharray="3,2"/>
        <polygon points="230,80 222,74 225,84" fill="#ff8f00"/>
        
        <path d="M 230 90 Q 200 125 160 90" fill="none" stroke="#ff8f00" stroke-width="2" stroke-dasharray="3,2"/>
        <polygon points="160,90 168,96 165,86" fill="#ff8f00"/>
        <text x="195" y="28" font-family="Bebas Neue" font-size="9.5" fill="#ff8f00" text-anchor="middle">Swap: 12 &gt; 8!</text>
        
        <!-- Cylinder 3 (Value 8) - Active Compare! -->
        <g transform="translate(230, 70)">
          <rect x="0" y="0" width="30" height="50" rx="3" fill="#ff8f00" fill-opacity="0.2" stroke="#ff8f00" stroke-width="2.5"/>
          <text x="15" y="28" font-family="Anton" font-size="11" fill="#ff8f00" text-anchor="middle">8</text>
        </g>
        
        <!-- Cylinder 4 (Value 19) -->
        <g transform="translate(320, 30)">
          <rect x="0" y="0" width="30" height="90" rx="3" fill="#c8e6c9" stroke="#2d7d32" stroke-width="1.5"/>
          <text x="15" y="48" font-family="Anton" font-size="10" fill="#000" text-anchor="middle">19</text>
        </g>
        
        <!-- Cylinder 5 (Value 23) -->
        <g transform="translate(410, 10)">
          <rect x="0" y="0" width="30" height="110" rx="3" fill="#c8e6c9" stroke="#2d7d32" stroke-width="1.5"/>
          <text x="15" y="58" font-family="Anton" font-size="10" fill="#000" text-anchor="middle">23</text>
        </g>
        
        <text x="250" y="172" font-family="Marcellus" font-size="9.5" fill="#2d7d32" text-anchor="middle">Drill sergeant swaps adjacent blocks until the tallest bubbles up to the far end.</text>
      </svg>`
    },
    interactiveType: "sorting",
    hoverParts: {
      "soldier-short": {
        label: "Shorter Element (Swap target)",
        desc: "Currently positioned out of order. Needs to be swapped with adjacent elements to achieve sorted layout."
      }
    },
    subtopics: [
      {
        name: "Bubble Sort",
        description: "Repeatedly steps through the array, compares adjacent elements, and swaps them if they are in the wrong order, 'bubbling' the maximum value to the end.",
        javaCode: `public class BubbleSorter {
    public void bubbleSort(int[] arr) {
        int n = arr.length;
        // Outer loop bounds bubble passes
        for (int i = 0; i < n - 1; i++) {
            // Inner loop compares adjacent cells
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j+1]) {
                    // Swapping values O(1)
                    int temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
        }
    }
}`,
        syntax: `for (int i=0; i<n-1; i++) {
    for (int j=0; j<n-i-1; j++) {
        if (a[j] > a[j+1]) swap(a, j, j+1);
    }
}`
      },
      {
        name: "Merge & Quick Sort",
        description: "Divide-and-conquer sorting strategies. Merge Sort splits arrays recursively and merges them sorted O(N log N). Quick Sort partitions around a pivot index.",
        javaCode: `public class MergeSorter {
    public void mergeSort(int[] arr, int left, int right) {
        if (left < right) {
            int mid = left + (right - left) / 2;
            
            mergeSort(arr, left, mid); // split left
            mergeSort(arr, mid + 1, right); // split right
            
            merge(arr, left, mid, right); // merge sorted sub-grids
        }
    }
    
    private void merge(int[] arr, int l, int m, int r) {
        // Core sorting merger logic
    }
}`,
        syntax: `// Merge Sort recursive split
mergeSort(arr, l, r) {
    if (l >= r) return;
    int m = l + (r-l)/2;
    mergeSort(arr, l, m);
    mergeSort(arr, m+1, r);
    merge(arr, l, m, r);
}`
      },
      {
        name: "Custom Object Sorting",
        description: "Sorting lists of custom structures. Done in Java by passing a custom lambda Comparator defining the ordering property details.",
        javaCode: `import java.util.*;

class Student {
    String name;
    int score;
    Student(String n, int s) { name = n; score = s; }
}

public class SortCustom {
    public static void main(String[] args) {
        List<Student> students = new ArrayList<>();
        students.add(new Student("Alice", 90));
        students.add(new Student("Bob", 75));
        
        // Lambda comparator sorting descending order of score
        students.sort((s1, s2) -> Integer.compare(s2.score, s1.score));
    }
}`,
        syntax: `// Lambda comparator sort descending
list.sort((a, b) -> b.value - a.value);
// Static collections utility
Collections.sort(list, (a, b) -> a.value - b.value);`
      }
    ]
  },
  {
    id: "searching",
    title: "Searching",
    category: "Algorithms",
    analogy: {
      title: "Flipping the Dictionary Pages",
      text: "<strong>Searching</strong> is scanning a collection for a target value. <strong>Binary Search</strong> is finding a word in an alphabetically-sorted physical dictionary: you flip open to the middle page—if your word comes alphabetically before that page, you completely throw away the entire right half of the book.",
      svgRepresentation: `<svg viewBox="0 0 500 200" class="w-full h-44 max-w-lg mx-auto">
        <rect x="5" y="5" width="490" height="190" rx="8" fill="#f4f6fc" stroke="#c8e6c9" stroke-width="2"/>
        
        <!-- Dictionary Opened Book Layout -->
        <g transform="translate(50, 30)">
          <!-- Left page (Discarded / Greyed out) -->
          <rect x="0" y="0" width="180" height="120" rx="5" fill="#e0e0e0" stroke="#bbb" stroke-width="2"/>
          <line x1="20" y1="30" x2="160" y2="30" stroke="#bbb" stroke-width="2"/>
          <line x1="20" y1="60" x2="160" y2="60" stroke="#bbb" stroke-width="2"/>
          <line x1="20" y1="90" x2="130" y2="90" stroke="#bbb" stroke-width="2"/>
          <!-- Big Red X over discarded left half -->
          <line x1="40" y1="30" x2="140" y2="90" stroke="#c7254e" stroke-width="6" opacity="0.6"/>
          <line x1="140" y1="30" x2="40" y2="90" stroke="#c7254e" stroke-width="6" opacity="0.6"/>
          <text x="90" y="138" font-family="Bebas Neue" font-size="9" fill="#c7254e" text-anchor="middle">Left Half Discarded</text>
          
          <!-- Right page (Active search zone) -->
          <rect x="195" y="0" width="180" height="120" rx="5" fill="#ffffff" stroke="#2d7d32" stroke-width="2.5"/>
          <line x1="215" y1="30" x2="355" y2="30" stroke="#2d7d32" stroke-width="2"/>
          <line x1="215" y1="60" x2="355" y2="60" stroke="#2d7d32" stroke-width="2"/>
          <line x1="215" y1="90" x2="325" y2="90" stroke="#2d7d32" stroke-width="2"/>
          <text x="285" y="138" font-family="Bebas Neue" font-size="9" fill="#2d7d32" text-anchor="middle">Active Search Zone</text>
        </g>
        
        <!-- Midpoint Magnifying glass -->
        <g transform="translate(225, 45)">
          <circle cx="20" cy="20" r="18" fill="none" stroke="#ff8f00" stroke-width="3"/>
          <line x1="33" y1="33" x2="50" y2="50" stroke="#ff8f00" stroke-width="4"/>
          <text x="20" y="24" font-family="Anton" font-size="10" fill="#000" text-anchor="middle">MID</text>
        </g>
        
        <text x="250" y="185" font-family="Marcellus" font-size="9.5" fill="#2d7d32" text-anchor="middle">Binary Search halves search bounds recursively, finding entries in fast O(log N) time.</text>
      </svg>`
    },
    interactiveType: "searching",
    hoverParts: {
      "search-mid": {
        label: "Midpoint Cursor",
        desc: "Splits the search boundary in half. In Java: <code>int mid = low + (high - low)/2;</code>. Halves boundaries at each comparison."
      }
    },
    subtopics: [
      {
        name: "Linear Search",
        description: "Scans an unsorted collection sequentially from index 0 to N-1 until finding the target. Runtime takes linear O(N) time.",
        javaCode: `public class LinearSearcher {
    public int linearSearch(int[] arr, int target) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == target) {
                return i; // Target found at index i!
            }
        }
        return -1; // Target does not exist
    }
}`,
        syntax: `for (int i = 0; i < arr.length; i++) {
    if (arr[i] == target) return i;
}
return -1;`
      },
      {
        name: "Binary Search",
        description: "Divides sorted arrays recursively in half. By comparing the middle element, it discards the incorrect half of the array at each step in O(log N) runtime.",
        javaCode: `public class BinarySearcher {
    public int binarySearch(int[] arr, int target) {
        int low = 0;
        int high = arr.length - 1;
        
        while (low <= high) {
            // Midpoint formula avoids arithmetic integer overflows!
            int mid = low + (high - low) / 2;
            
            if (arr[mid] == target) {
                return mid; // Found!
            }
            
            if (arr[mid] < target) {
                low = mid + 1; // Shifting search to right boundary
            } else {
                high = mid - 1; // Shifting search to left boundary
            }
        }
        return -1; // Not found
    }
}`,
        syntax: `int low = 0, high = arr.length - 1;
while (low <= high) {
    int mid = low + (high - low) / 2;
    if (arr[mid] == target) return mid;
    if (arr[mid] < target) low = mid + 1;
    else high = mid - 1;
}`
      }
    ]
  },
  {
    id: "recursion-backtracking",
    title: "Recursion & Backtracking",
    category: "Algorithms",
    analogy: {
      title: "Russian Nesting Dolls & Maze Traversal",
      text: "<strong>Recursion</strong> is like opening a massive Russian nesting doll. Inside, you find a smaller doll, and inside that, an even smaller one, until you reach the tiny solid baby doll (the <strong>Base Case</strong>), which you cannot open further. Then you close them all back up one by one.",
      svgRepresentation: `<svg viewBox="0 0 500 200" class="w-full h-44 max-w-lg mx-auto">
        <rect x="5" y="5" width="490" height="190" rx="8" fill="#f4f6fc" stroke="#c8e6c9" stroke-width="2"/>
        
        <!-- Nesting Doll 1 (Large - recurse(3)) -->
        <g transform="translate(50, 40)">
          <rect x="0" y="0" width="70" height="100" rx="20" fill="#c8e6c9" stroke="#2d7d32" stroke-width="2"/>
          <circle cx="35" cy="30" r="14" fill="#ffffff" stroke="#2d7d32"/>
          <!-- face details -->
          <circle cx="30" cy="27" r="1.5" fill="#000"/>
          <circle cx="40" cy="27" r="1.5" fill="#000"/>
          <path d="M 32 37 Q 35 40 38 37" fill="none" stroke="#ff8f00" stroke-width="1.5"/>
          <text x="35" y="75" font-family="Anton" font-size="8.5" fill="#000" text-anchor="middle">recurse(3)</text>
          <text x="35" y="88" font-family="Bebas Neue" font-size="7.5" fill="#2d7d32" text-anchor="middle">Large Doll</text>
        </g>
        
        <!-- Recurse path arrow -->
        <path d="M 130 85 L 175 85" stroke="#ff8f00" stroke-width="2" marker-end="url(#arrow)"/>
        
        <!-- Nesting Doll 2 (Medium - recurse(2)) -->
        <g transform="translate(195, 50)">
          <rect x="0" y="0" width="55" height="80" rx="15" fill="#c8e6c9" stroke="#2d7d32" stroke-width="2"/>
          <circle cx="27.5" cy="25" r="12" fill="#ffffff" stroke="#2d7d32"/>
          <circle cx="23" cy="22" r="1" fill="#000"/>
          <circle cx="32" cy="22" r="1" fill="#000"/>
          <path d="M 25 31 Q 27.5 33 30 31" fill="none" stroke="#ff8f00" stroke-width="1"/>
          <text x="27.5" y="60" font-family="Anton" font-size="7.5" fill="#000" text-anchor="middle">recurse(2)</text>
          <text x="27.5" y="70" font-family="Bebas Neue" font-size="6.5" fill="#2d7d32" text-anchor="middle">Medium Doll</text>
        </g>
        
        <!-- Recurse path arrow -->
        <path d="M 260 85 L 305 85" stroke="#ff8f00" stroke-width="2" marker-end="url(#arrow)"/>
        
        <!-- Nesting Doll 3 (Small Baby - recurse(1)) -->
        <g transform="translate(325, 60)">
          <rect x="0" y="0" width="40" height="60" rx="10" fill="#ff8f00" fill-opacity="0.2" stroke="#ff8f00" stroke-width="2.5"/>
          <circle cx="20" cy="20" r="10" fill="#ffffff" stroke="#ff8f00"/>
          <circle cx="16" cy="18" r="0.8" fill="#000"/>
          <circle cx="24" cy="18" r="0.8" fill="#000"/>
          <text x="20" y="45" font-family="Anton" font-size="6.5" fill="#000" text-anchor="middle">recurse(1)</text>
          <text x="20" y="53" font-family="Bebas Neue" font-size="6" fill="#ff8f00" text-anchor="middle">Base Case</text>
        </g>
        
        <text x="250" y="172" font-family="Marcellus" font-size="9.5" fill="#2d7d32" text-anchor="middle">Recursive dolls keep calling smaller states until hitting the solid Base Case baby doll.</text>
      </svg>`
    },
    interactiveType: "recursion",
    hoverParts: {
      "doll-base": {
        label: "Base Case (Solid Baby Doll)",
        desc: "Halts the infinite recursive loop and starts returning values back up the stack. Without a base case, programs throw <code>StackOverflowError</code>."
      }
    },
    subtopics: [
      {
        name: "Recursion Basics",
        description: "A technique where a method calls itself recursively. Requires a base case to halt recursion and prevent stackoverflow crashes.",
        javaCode: `public class RecursionBasic {
    // 1. Recursive Factorial method
    public int factorial(int n) {
        // Base Case: solid baby doll terminates recursion!
        if (n <= 1) {
            return 1;
        }
        
        // Recursive Call: opening the next smaller doll
        return n * factorial(n - 1);
    }
    
    public static void main(String[] args) {
        RecursionBasic r = new RecursionBasic();
        System.out.println(r.factorial(4)); // returns 24
    }
}`,
        syntax: `type recurse(state) {
    if (baseCaseCondition) return baseCaseValue; // Base Case
    return recurse(nextState); // Recursive Call
}`
      },
      {
        name: "Backtracking Template",
        description: "A trial-and-error search pattern. It builds paths step-by-step; if a path leads to a dead end, it reverts back (backtracks) and tries alternate branches.",
        javaCode: `import java.util.*;

public class BacktrackingTemplate {
    public void solve(int[] nums, List<Integer> current, List<List<Integer>> result) {
        // Base case: solution found!
        if (current.size() == nums.length) {
            result.add(new ArrayList<>(current));
            return;
        }
        
        for (int i = 0; i < nums.length; i++) {
            if (current.contains(nums[i])) continue; // skip duplicates
            
            // 1. Choose state
            current.add(nums[i]);
            
            // 2. Explore recursively
            solve(nums, current, result);
            
            // 3. Backtrack (Undo choice!)
            current.remove(current.size() - 1);
        }
    }
}`,
        syntax: `void backtrack(state) {
    if (solutionFound) { saveSolution(); return; }
    for (option : options) {
        makeChoice(option);
        backtrack(nextState);
        undoChoice(option); // BACKTRACK STEP
    }
}`
      }
    ]
  },
  {
    id: "dynamic-programming",
    title: "Dynamic Programming",
    category: "Algorithms",
    analogy: {
      title: "The Math Quiz Scratchpad",
      text: "Imagine a teacher asks you to compute: <code>1 + 1 + 1 + 1 + 1</code>. You count them up and say <code>5</code>. Then the teacher writes another <code>+ 1</code> at the end and asks what the total is. You instantly say <code>6</code> without recounting all the initial ones, because you remembered the previous calculation was <code>5</code>.",
      svgRepresentation: `<svg viewBox="0 0 500 200" class="w-full h-44 max-w-lg mx-auto">
        <rect x="5" y="5" width="490" height="190" rx="8" fill="#f4f6fc" stroke="#c8e6c9" stroke-width="2"/>
        
        <!-- School Notepad Page -->
        <g transform="translate(60, 20)">
          <rect x="0" y="0" width="220" height="120" rx="5" fill="#ffffff" stroke="#ccc" stroke-width="1.5"/>
          <line x1="15" y1="0" x2="15" y2="120" stroke="#c7254e" stroke-width="1"/>
          <!-- Equations -->
          <text x="30" y="30" font-family="Fira Code" font-size="10" fill="#000">1 + 1 + 1 + 1 + 1 = 5</text>
          <text x="30" y="60" font-family="Fira Code" font-size="10" fill="#000">Add 1 at the end...</text>
          <text x="30" y="90" font-family="Fira Code" font-size="10.5" fill="#2d7d32">Total = 5 + 1 = 6!</text>
          <text x="110" y="132" font-family="Bebas Neue" font-size="8.5" fill="#555" text-anchor="middle">Math Homework</text>
        </g>
        
        <!-- Memo Cache golden sticky note -->
        <g transform="translate(310, 35)">
          <rect x="0" y="0" width="130" height="85" fill="#ff8f00" fill-opacity="0.15" stroke="#ff8f00" stroke-width="2" rx="4"/>
          <!-- Pin -->
          <circle cx="65" cy="5" r="4" fill="#000"/>
          
          <text x="65" y="30" font-family="Bebas Neue" font-size="10" letter-spacing="1" fill="#ff8f00" text-anchor="middle">MEMOIZATION MEMO</text>
          <text x="65" y="52" font-family="Anton" font-size="11.5" fill="#000" text-anchor="middle">dp[5] = 5</text>
          <text x="65" y="70" font-family="Marcellus" font-size="7.5" fill="#555" text-anchor="middle">(Don't recount: O(1) read!)</text>
        </g>
        
        <text x="250" y="172" font-family="Marcellus" font-size="9.5" fill="#2d7d32" text-anchor="middle">Dynamic programming remembers computed values to avoid repeating redundant arithmetic paths.</text>
      </svg>`
    },
    interactiveType: "dp",
    hoverParts: {
      "dp-memo": {
        label: "Precomputed Table Cell (Memoization)",
        desc: "Saves result of sub-problems to instantly retrieve them in O(1) time rather than re-computing recursively."
      }
    },
    subtopics: [
      {
        name: "Top-Down Memoization",
        description: "A combination of standard recursion and array caching. It starts with the main target problem; as it encounters subproblems, it caches their answers inside a memo table to prevent duplicate calculations.",
        javaCode: `public class MemoizedFibonacci {
    // Memo table caches computed indices
    private int[] memo;

    public int fib(int n) {
        memo = new int[n + 1];
        return fibHelper(n);
    }

    private int fibHelper(int n) {
        if (n <= 1) return n;
        
        // 1. Check if subproblem was already computed!
        if (memo[n] != 0) {
            return memo[n]; // instant O(1) read
        }
        
        // 2. Else compute recursively and cache inside memo table
        memo[n] = fibHelper(n - 1) + fibHelper(n - 2);
        return memo[n];
    }
}`,
        syntax: `// Memoization check
if (memo[n] != null) return memo[n];
memo[n] = recurse(n-1) + recurse(n-2);
return memo[n];`
      },
      {
        name: "Bottom-Up Tabulation",
        description: "An iterative, non-recursive system. It populates an array (dp table) starting from basic base-case boundary inputs (bottom) all the way up to the target index.",
        javaCode: `public class TabulatedFibonacci {
    public int fib(int n) {
        if (n <= 1) return n;
        
        // Allocate dp table
        int[] dp = new int[n + 1];
        
        // 1. Initialize bottom base states
        dp[0] = 0;
        dp[1] = 1;
        
        // 2. Iterate up and populate table cells
        for (int i = 2; i <= n; i++) {
            dp[i] = dp[i - 1] + dp[i - 2];
        }
        
        return dp[n]; // Target solved!
    }
}`,
        syntax: `int[] dp = new int[n + 1];
dp[0] = baseVal0; dp[1] = baseVal1;
for (int i = 2; i <= n; i++) {
    dp[i] = formula(dp[i-1], dp[i-2]);
}`
      }
    ]
  },
  {
    id: "greedy",
    title: "Greedy",
    category: "Algorithms",
    analogy: {
      title: "The Supermarket Shopping Sweep",
      text: "A <strong>Greedy Algorithm</strong> acts like a shopper in a high-speed supermarket sweep. You only have 30 seconds to fill a shopping bag, so you choose the absolute best local option at that specific second, hoping it leads to a global maximum payoff.",
      svgRepresentation: `<svg viewBox="0 0 500 200" class="w-full h-44 max-w-lg mx-auto">
        <rect x="5" y="5" width="490" height="190" rx="8" fill="#f4f6fc" stroke="#c8e6c9" stroke-width="2"/>
        
        <!-- Shelf items -->
        <!-- Coin 1 ($10) -->
        <circle cx="80" cy="50" r="16" fill="#c8e6c9" stroke="#2d7d32" stroke-width="1.5"/>
        <text x="80" y="54" font-family="Anton" font-size="9" fill="#000" text-anchor="middle">$10</text>
        <text x="80" y="78" font-family="Marcellus" font-size="7" fill="#555" text-anchor="middle">Silver Coin</text>
        
        <!-- Coin 2 ($50) -->
        <circle cx="170" cy="45" r="22" fill="#c8e6c9" stroke="#2d7d32" stroke-width="1.5"/>
        <text x="170" y="49" font-family="Anton" font-size="10.5" fill="#000" text-anchor="middle">$50</text>
        <text x="170" y="78" font-family="Marcellus" font-size="7" fill="#555" text-anchor="middle">Gold Coin</text>
        
        <!-- Diamond ($100) - GREEDY TARGET! -->
        <g transform="translate(270, 15)">
          <polygon points="30,0 60,25 30,50 0,25" fill="#ff8f00" fill-opacity="0.2" stroke="#ff8f00" stroke-width="2.5"/>
          <text x="30" y="29" font-family="Anton" font-size="11" fill="#ff8f00" text-anchor="middle">$100</text>
          <text x="30" y="62" font-family="Bebas Neue" font-size="8.5" fill="#ff8f00" text-anchor="middle">Diamond</text>
        </g>
        
        <!-- Shopping Cart sweep arrow -->
        <g transform="translate(300, 110)">
          <!-- Cart outline -->
          <rect x="0" y="0" width="75" height="35" rx="5" fill="#ffffff" stroke="#2d7d32" stroke-width="2"/>
          <circle cx="18" cy="42" r="6" fill="#000"/>
          <circle cx="58" cy="42" r="6" fill="#000"/>
          <text x="37.5" y="22" font-family="Bebas Neue" font-size="8.5" fill="#2d7d32" text-anchor="middle">Greedy Cart</text>
        </g>
        
        <!-- Sweep pointer -->
        <path d="M 285 70 Q 300 100 320 105" fill="none" stroke="#ff8f00" stroke-width="2" stroke-dasharray="3,2"/>
        <polygon points="320,105 311,101 316,110" fill="#ff8f00"/>
        
        <text x="250" y="172" font-family="Marcellus" font-size="9.5" fill="#2d7d32" text-anchor="middle">Shoppers choose the highest value diamond immediately, grabbing the local maximum at each tick.</text>
      </svg>`
    },
    interactiveType: "greedy",
    hoverParts: {
      "greedy-max": {
        label: "Local Maximum Choice",
        desc: "Selecting the highest value watch immediately without checking if secondary paths would yield better combined profits."
      }
    },
    subtopics: [
      {
        name: "Greedy Principle",
        description: "Solves optimization problems by selecting the absolute best local choice at each step, hoping it resolves to the globally optimal final solution.",
        javaCode: `import java.util.Arrays;

public class CoinChangeGreedy {
    public int findMinCoins(int[] coins, int amount) {
        // 1. Sort coins ascending
        Arrays.sort(coins);
        int count = 0;
        
        // 2. Greedily pick the largest denominations first!
        for (int i = coins.length - 1; i >= 0; i--) {
            while (amount >= coins[i]) {
                amount -= coins[i]; // Local optimal choice
                count++;
            }
        }
        return (amount == 0) ? count : -1;
    }
}`,
        syntax: `// Greedy loop
for(int i = items.length - 1; i >= 0; i--) {
    if (canFit(items[i])) add(items[i]);
}`
      },
      {
        name: "Activity Selection",
        description: "Sorts intervals according to their end times, then greedily picks non-overlapping activities finishing earliest first to maximize scheduled counts.",
        javaCode: `import java.util.*;

class Activity {
    int start, finish;
    Activity(int s, int f) { start = s; finish = f; }
}

public class Scheduler {
    public List<Activity> selectActivities(List<Activity> list) {
        List<Activity> selected = new ArrayList<>();
        
        // 1. Sort greedily by earliest finish times!
        list.sort((a, b) -> Integer.compare(a.finish, b.finish));
        
        Activity prev = list.get(0);
        selected.add(prev);
        
        for (int i = 1; i < list.size(); i++) {
            Activity curr = list.get(i);
            if (curr.start >= prev.finish) {
                selected.add(curr);
                prev = curr; // update pointer
            }
        }
        return selected;
    }
}`,
        syntax: `// Sort by finish time
list.sort((a, b) -> a.finish - b.finish);
// Iterate and choose compatible
if (curr.start >= prev.finish) { select(curr); prev = curr; }`
      }
    ]
  },
  {
    id: "java-collections",
    title: "Java Collections",
    category: "OOP & Core Java",
    analogy: {
      title: "The Ultimate Kitchen Organizers",
      text: "The **Java Collections Framework** is like a set of specialized storage containers in a premium kitchen. **ArrayList** is an expandable pantry shelf—highly accessible, but rearranging elements takes time.",
      svgRepresentation: `<svg viewBox="0 0 500 200" class="w-full h-44 max-w-lg mx-auto">
        <rect x="5" y="5" width="490" height="190" rx="8" fill="#f4f6fc" stroke="#c8e6c9" stroke-width="2"/>
        
        <!-- Cabinet Drawer Frame -->
        <rect x="15" y="15" width="470" height="145" rx="8" fill="#ffffff" stroke="#2d7d32" stroke-width="2.5"/>
        
        <!-- Drawer 1: ArrayList resizable tray -->
        <g transform="translate(30, 30)">
          <rect x="0" y="0" width="125" height="110" rx="5" fill="#f4f6fc" stroke="#ccc" stroke-width="1.5"/>
          <!-- Handles -->
          <circle cx="62.5" cy="15" r="5" fill="#ff8f00"/>
          
          <text x="62.5" y="45" font-family="Bebas Neue" font-size="9" letter-spacing="1" fill="#2d7d32" text-anchor="middle">ArrayList Drawer</text>
          <text x="62.5" y="60" font-family="Marcellus" font-size="7.5" fill="#000" text-anchor="middle">[ Alice , Bob , Charlie ]</text>
          <!-- Stretching arrows -->
          <path d="M 10 90 L 115 90" stroke="#ff8f00" stroke-width="1.5" stroke-dasharray="2,2"/>
          <polygon points="115,90 107,86 107,94" fill="#ff8f00"/>
          <polygon points="10,90 18,86 18,94" fill="#ff8f00"/>
          <text x="62.5" y="84" font-family="Bebas Neue" font-size="6.5" fill="#ff8f00" text-anchor="middle">Auto-Resizes Capacity</text>
        </g>
        
        <!-- Drawer 2: HashSet Unique spice carousel -->
        <g transform="translate(185, 30)">
          <rect x="0" y="0" width="125" height="110" rx="5" fill="#f4f6fc" stroke="#ccc" stroke-width="1.5"/>
          <circle cx="62.5" cy="15" r="5" fill="#ff8f00"/>
          
          <text x="62.5" y="45" font-family="Bebas Neue" font-size="9" letter-spacing="1" fill="#2d7d32" text-anchor="middle">HashSet Carousel</text>
          <!-- Unique jars -->
          <circle cx="35" cy="80" r="14" fill="#c8e6c9" stroke="#2d7d32"/>
          <text x="35" y="83" font-family="Anton" font-size="6.5" fill="#000" text-anchor="middle">Salt</text>
          
          <circle cx="90" cy="80" r="14" fill="#c8e6c9" stroke="#2d7d32"/>
          <text x="90" y="83" font-family="Anton" font-size="6.5" fill="#000" text-anchor="middle">Pepper</text>
          <text x="62.5" y="104" font-family="Bebas Neue" font-size="7" fill="#ff8f00" text-anchor="middle">Strictly Unique Jars</text>
        </g>
        
        <!-- Drawer 3: HashMap Labeled spice rack -->
        <g transform="translate(340, 30)">
          <rect x="0" y="0" width="125" height="110" rx="5" fill="#f4f6fc" stroke="#ccc" stroke-width="1.5"/>
          <circle cx="62.5" cy="15" r="5" fill="#ff8f00"/>
          
          <text x="62.5" y="45" font-family="Bebas Neue" font-size="9" letter-spacing="1" fill="#2d7d32" text-anchor="middle">HashMap Spice Rack</text>
          
          <!-- Key-value jars -->
          <rect x="15" y="65" width="42" height="30" fill="#ff8f00" fill-opacity="0.1" stroke="#ff8f00"/>
          <text x="36" y="78" font-family="Bebas Neue" font-size="6.5" fill="#ff8f00" text-anchor="middle">Tag: Sweet</text>
          <text x="36" y="88" font-family="Marcellus" font-size="6" fill="#000" text-anchor="middle">Honey</text>
          
          <rect x="68" y="65" width="42" height="30" fill="#ff8f00" fill-opacity="0.1" stroke="#ff8f00"/>
          <text x="89" y="78" font-family="Bebas Neue" font-size="6.5" fill="#ff8f00" text-anchor="middle">Tag: Sour</text>
          <text x="89" y="88" font-family="Marcellus" font-size="6" fill="#000" text-anchor="middle">Lemon</text>
        </g>
      </svg>`
    },
    interactiveType: "collections",
    hoverParts: {
      "collection-list": {
        label: "ArrayList Drawer (Resizable Array)",
        desc: "Acts like a dynamic drawer. Expands automatically as items exceed base capacity. In Java: <code>List<String> list = new ArrayList<>();</code>"
      }
    },
    subtopics: [
      {
        name: "Lists & Sets",
        description: "List represents ordered sequences allowing duplicates (ArrayList, LinkedList). Set represents unordered collections restricting duplicates (HashSet, LinkedHashSet, TreeSet).",
        javaCode: `import java.util.*;

public class ListsAndSets {
    public static void main(String[] args) {
        // 1. Resizable list
        List<String> arrayList = new ArrayList<>();
        arrayList.add("Salt");
        arrayList.add("Salt"); // allowed!
        
        // 2. Unordered unique set
        Set<String> hashSet = new HashSet<>();
        hashSet.add("Salt");
        hashSet.add("Salt"); // ignored!
        
        // 3. Sorted unique set
        Set<Integer> treeSet = new TreeSet<>();
        treeSet.add(30);
        treeSet.add(10); // Automatically sorted as [10, 30]
    }
}`,
        syntax: `List<T> list = new ArrayList<>();
Set<T> uniqueSet = new HashSet<>();
Set<T> sortedSet = new TreeSet<>();`
      },
      {
        name: "Maps & Utilities",
        description: "Map links keys to values (HashMap, LinkedHashMap, TreeMap). The Collections helper utility class provides useful static search, sort, and copy algorithms.",
        javaCode: `import java.util.*;

public class MapsAndUtils {
    public static void main(String[] args) {
        // 1. Key-value HashMap O(1)
        Map<String, String> spiceRack = new HashMap<>();
        spiceRack.put("Sweet", "Honey");
        
        // 2. Sorted key TreeMap O(log N)
        Map<Integer, String> treeMap = new TreeMap<>();
        treeMap.put(100, "Century");
        
        // 3. Collections Utilities
        List<Integer> values = Arrays.asList(5, 1, 9, 3);
        Collections.sort(values); // sorts values to [1, 3, 5, 9]
        Collections.reverse(values); // reverses values to [9, 5, 3, 1]
    }
}`,
        syntax: `Map<K, V> map = new HashMap<>();
Map<K, V> sortedMap = new TreeMap<>();
Collections.sort(list);
Collections.reverse(list);`
      }
    ]
  },
  {
    id: "bit-manipulation",
    title: "Bit Manipulation",
    category: "Algorithms",
    analogy: {
      title: "The Industrial Power Switchboard",
      text: "<strong>Bit Manipulation</strong> is operating a physical rack of standard light switches. Each switch can only represent one of two states: **ON (1)** or **OFF (0)**.",
      svgRepresentation: `<svg viewBox="0 0 500 200" class="w-full h-44 max-w-lg mx-auto">
        <rect x="5" y="5" width="490" height="190" rx="8" fill="#f4f6fc" stroke="#c8e6c9" stroke-width="2"/>
        
        <!-- 8-Bit Switchboard Panel -->
        <rect x="15" y="15" width="470" height="145" rx="8" fill="#ffffff" stroke="#2d7d32" stroke-width="2.5"/>
        
        <!-- Switch 0 (Value 1) - ON -->
        <g transform="translate(415, 30)">
          <rect x="0" y="0" width="30" height="60" fill="#c8e6c9" stroke="#2d7d32" rx="4"/>
          <circle cx="15" cy="18" r="8" fill="#2d7d32"/>
          <circle cx="15" cy="18" r="3" fill="#fff"/>
          <!-- Bulb glowing -->
          <circle cx="15" cy="-12" r="8" fill="#ff8f00"/>
          <text x="15" y="78" font-family="Bebas Neue" font-size="8.5" fill="#000" text-anchor="middle">ON (1)</text>
          <text x="15" y="93" font-family="Bebas Neue" font-size="9" fill="#ff8f00" text-anchor="middle">Val: 1</text>
        </g>
        
        <!-- Switch 1 (Value 2) - OFF -->
        <g transform="translate(365, 30)">
          <rect x="0" y="0" width="30" height="60" fill="#f4f6fc" stroke="#ccc" rx="4"/>
          <circle cx="15" cy="42" r="8" fill="#aaa"/>
          <!-- Bulb dark -->
          <circle cx="15" cy="-12" r="8" fill="#ddd"/>
          <text x="15" y="78" font-family="Bebas Neue" font-size="8.5" fill="#888" text-anchor="middle">OFF (0)</text>
          <text x="15" y="93" font-family="Bebas Neue" font-size="9" fill="#ccc" text-anchor="middle">Val: 2</text>
        </g>
        
        <!-- Switch 2 (Value 4) - ON -->
        <g transform="translate(315, 30)">
          <rect x="0" y="0" width="30" height="60" fill="#c8e6c9" stroke="#2d7d32" rx="4"/>
          <circle cx="15" cy="18" r="8" fill="#2d7d32"/>
          <circle cx="15" cy="18" r="3" fill="#fff"/>
          <circle cx="15" cy="-12" r="8" fill="#ff8f00"/>
          <text x="15" y="78" font-family="Bebas Neue" font-size="8.5" fill="#000" text-anchor="middle">ON (1)</text>
          <text x="15" y="93" font-family="Bebas Neue" font-size="9" fill="#ff8f00" text-anchor="middle">Val: 4</text>
        </g>
        
        <!-- Left empty byte labels -->
        <g transform="translate(35, 45)">
          <text x="0" y="20" font-family="Anton" font-size="14" fill="#000">Values: 4 + 1 = 5</text>
          <text x="0" y="42" font-family="Bebas Neue" font-size="10.5" letter-spacing="1" fill="#ff8f00">Binary byte: 00000101</text>
        </g>
        
        <text x="250" y="172" font-family="Marcellus" font-size="9.5" fill="#2d7d32" text-anchor="middle">Bit toggles represent exponential bases of 2, manipulated via lightning-fast bitwise math.</text>
      </svg>`
    },
    interactiveType: "bit-manipulation",
    hoverParts: {
      "switch-on": {
        label: "Switch 1 (ON / Bit state 1)",
        desc: "A circuit representing power connection. Translates directly to numeric values based on mathematical powers of 2."
      }
    },
    subtopics: [
      {
        name: "Bitwise Operators",
        description: "Operations executed directly on binary bit lines. Includes bitwise AND (&), OR (|), XOR (^) and NOT (~).",
        javaCode: `public class BitwiseDemo {
    public static void main(String[] args) {
        int a = 5;  // Binary: 0101
        int b = 3;  // Binary: 0011
        
        // 1. AND & (1 if both bits are 1)
        int andRes = a & b; // 0101 & 0011 -> 0001 (Decimal 1)
        
        // 2. OR | (1 if either bit is 1)
        int orRes = a | b; // 0101 | 0011 -> 0111 (Decimal 7)
        
        // 3. XOR ^ (1 if bits are different)
        int xorRes = a ^ b; // 0101 ^ 0011 -> 0110 (Decimal 6)
        
        // 4. NOT ~ (Inverts all bits)
        int notRes = ~a;
    }
}`,
        syntax: `int and = x & y;
int or  = x | y;
int xor = x ^ y;
int not = ~x;`
      },
      {
        name: "Bitwise Shifts",
        description: "Multiply or divide numeric bases rapidly by shifting binary bits left (<<) or right (>>).",
        javaCode: `public class BitwiseShifts {
    public static void main(String[] args) {
        int n = 5; // Binary: 0000 0101 (Decimal 5)
        
        // Left Shift << (Multiplies by 2 for each step)
        int leftShifted = n << 1; // Shifts left: 0000 1010 (Decimal 10)
        
        // Right Shift >> (Divides by 2, preserving negative sign bit)
        int rightShifted = n >> 1; // Shifts right: 0000 0010 (Decimal 2)
        
        // Unsigned Right Shift >>> (Shifts right, padding with 0s)
        int unsigned = n >>> 1;
    }
}`,
        syntax: `int multiply = x << 1; // x * 2
int divide   = x >> 1; // x / 2
int unsigned = x >>> 1;`
      },
      {
        name: "Core Bit Tricks",
        description: "Formulas using shifts to inspect (GET), enable (SET), disable (CLEAR), or switch (TOGGLE) a specific bit at index 'i'.",
        javaCode: `public class BitTricks {
    // 1. GET Bit O(1)
    public boolean getBit(int num, int i) {
        return ((num & (1 << i)) != 0);
    }
    
    // 2. SET Bit O(1)
    public int setBit(int num, int i) {
        return num | (1 << i); // Force bit at index i to 1
    }
    
    // 3. CLEAR Bit O(1)
    public int clearBit(int num, int i) {
        return num & ~(1 << i); // Force bit at index i to 0
    }
    
    // 4. TOGGLE Bit O(1)
    public int toggleBit(int num, int i) {
        return num ^ (1 << i); // Invert bit at index i
    }
}`,
        syntax: `boolean get = (num & (1 << i)) != 0;
int set     = num | (1 << i);
int clear   = num & ~(1 << i);
int toggle  = num ^ (1 << i);`
      }
    ]
  }
];
