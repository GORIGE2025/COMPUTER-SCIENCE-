import { LongQuestion } from "../types";

export const longQuestionsList: LongQuestion[] = [
  {
    id: 1,
    question: "Explain about computer organization and computer design?",
    recommendedMarks: 10,
    targetTimeMinutes: 25,
    introduction: "In computer science and engineering, Computer Organization and Computer Design are two foundational, tightly linked disciplines that translate abstract computational models into concrete hardware systems. While Computer Architecture defines the programmer's view (instruction set, registers, data types), Computer Organization focuses on how those architectural specifications are physically structured and interconnected, and Computer Design focuses on the hardware engineering methodology to build those functional units.",
    structuralSections: [
      {
        heading: "1. Computer Organization: Definition & Scope",
        content: [
          "Computer Organization is concerned with the operational units of a computer system and their interconnections that realize the architectural specifications.",
          "It deals with physical, internal hardware details that are transparent to the machine-language programmer.",
          "Key Organizational Components:",
          "• Control Signals & Timing: Interfaces that command registers, ALU, and memory.",
          "• CPU Internal Datapath: Organization of ALU, accumulators, and internal buses.",
          "• Memory Interfacing: Address buses, data buses, cache controllers, and DRAM access circuits.",
          "• I/O Interface: DMA controllers, interrupts, and bus arbitration logic.",
          "Example: Whether an architecture uses a hardwired control unit or microprogrammed ROM control unit is purely an organizational decision—it does not change the user's assembly instruction set."
        ],
        diagramOrTable: {
          title: "Hierarchical Relationship in Computer Engineering",
          asciiArt: `+-----------------------------------------------------------+
|               COMPUTER ARCHITECTURE                       |
| (Conceptual Structure & Programmer Attributes: ISA, Modes) |
+-----------------------------------------------------------+
                             |
                             v Realized by
+-----------------------------------------------------------+
|               COMPUTER ORGANIZATION                       |
| (Operational Units, Datapath, Buses, Control Signals)     |
+-----------------------------------------------------------+
                             |
                             v Implemented through
+-----------------------------------------------------------+
|                 COMPUTER DESIGN                           |
| (Hardware Engineering, ICs, Gate Layouts, PCB Fabrication)|
+-----------------------------------------------------------+`
        }
      },
      {
        heading: "2. Computer Design: Definition & Engineering Methodology",
        content: [
          "Computer Design is the practical engineering discipline concerned with specifying, designing, and assembling the detailed hardware components that compose the computer.",
          "It encompasses hardware synthesis, gate-level logic design, register-transfer-level (RTL) descriptions, physical layout, and printed circuit board (PCB) integration.",
          "Phases of Computer Design:",
          "1. System Design: Specification of major subsystems (processors, memories, buses, peripheral controllers).",
          "2. Logic Design: Boolean algebra, truth tables, combinational circuits (adders, decoders) and sequential elements (flip-flops, registers).",
          "3. Circuit Design: Electrical characteristics, fan-in, fan-out, propagation delays, power consumption, clock skew management.",
          "4. Physical / VLSI Design: Silicon layout, photolithography mask generation, packaging, and heat dissipation."
        ]
      },
      {
        heading: "3. Comparative Analysis: Organization vs. Design",
        content: [
          "Understanding the exact demarcation between Organization and Design is critical for scoring full marks in PG examinations."
        ],
        diagramOrTable: {
          title: "Comparative Parameters: Computer Organization vs Computer Design",
          tableData: {
            headers: ["Parameter", "Computer Organization", "Computer Design"],
            rows: [
              ["Focus", "How operational units interconnect to realize the ISA", "Hardware engineering and component fabrication methodology"],
              ["Level of Abstraction", "Block-level / Architectural datapath level", "Gate-level, RTL, transistor and physical silicon level"],
              ["Core Concern", "Data flow, control signals, bus protocols, latency", "Circuit topology, clock speed, chip area, power efficiency"],
              ["Responsibility", "Computer Systems Architect & System Engineers", "Hardware Design Engineers, Logic Designers, VLSI Engineers"],
              ["Example Decisions", "Bus width (32-bit vs 64-bit), Cache hierarchy (L1/L2/L3)", "NAND/NOR implementation, transistor sizing, CMOS fabrication"]
            ]
          }
        }
      }
    ],
    summary: "In conclusion, Computer Organization acts as the functional blueprint bridging architectural concepts with physical hardware, while Computer Design transforms that organizational blueprint into physical, operational silicon chips and circuit boards.",
    examinerScoringCriteria: [
      { criterion: "Precise definitions of both terms", marks: "2 Marks" },
      { criterion: "Key components and phases for each domain", marks: "3 Marks" },
      { criterion: "Hierarchical relationship block diagram", marks: "2 Marks" },
      { criterion: "Detailed comparison table with at least 4 parameters", marks: "3 Marks" }
    ],
    commonMistakes: [
      "Confusing Computer Architecture with Computer Organization (ISA vs Datapath).",
      "Treating Computer Design as software design rather than hardware/logic design."
    ],
    topic: "Computer Organization & Design"
  },
  {
    id: 2,
    question: "Explain the different types of logic gates with truth table and logic circuit diagram. What is duality principle?",
    recommendedMarks: 10,
    targetTimeMinutes: 28,
    introduction: "Logic gates are the primary elemental building blocks of all digital circuits. They take binary inputs (logic 0 or 1) and produce a deterministic binary output according to Boolean logic rules. This answer presents Basic Gates, Universal Gates, and Special Purpose Gates along with symbols, Boolean expressions, truth tables, and concludes with an authoritative explanation of the Duality Principle.",
    structuralSections: [
      {
        heading: "1. Basic Logic Gates (AND, OR, NOT)",
        content: [
          "• NOT Gate (Inverter): Unary operator; outputs complement of input: Y = Ā.",
          "• AND Gate: Logical product; output is 1 only if all inputs are 1: Y = A · B.",
          "• OR Gate: Logical sum; output is 1 if any input is 1: Y = A + B."
        ],
        diagramOrTable: {
          title: "Truth Tables for Basic Gates",
          tableData: {
            headers: ["A", "B", "NOT (Ā)", "AND (A·B)", "OR (A+B)"],
            rows: [
              ["0", "0", "1", "0", "0"],
              ["0", "1", "1", "0", "1"],
              ["1", "0", "0", "0", "1"],
              ["1", "1", "0", "1", "1"]
            ]
          }
        }
      },
      {
        heading: "2. Universal Logic Gates (NAND, NOR)",
        content: [
          "A Universal Gate can implement ANY Boolean function (AND, OR, NOT, XOR, etc.) without requiring any other gate type.",
          "• NAND Gate: Inverted AND. Output is 0 only when all inputs are 1: Y = (A · B)̄.",
          "• NOR Gate: Inverted OR. Output is 1 only when all inputs are 0: Y = (A + B)̄.",
          "Implementation of NOT using NAND: Connect both inputs together: (A·A)̄ = Ā.",
          "Implementation of AND using NAND: ( (A·B)̄ )̄ = A·B (NAND followed by NAND-inverter).",
          "Implementation of OR using NAND: De Morgan's Law: (Ā · B̄)̄ = A + B."
        ],
        diagramOrTable: {
          title: "Truth Tables for Universal Gates",
          tableData: {
            headers: ["A", "B", "NAND ( (A·B)̄ )", "NOR ( (A+B)̄ )"],
            rows: [
              ["0", "0", "1", "1"],
              ["0", "1", "1", "0"],
              ["1", "0", "1", "0"],
              ["1", "1", "0", "0"]
            ]
          }
        }
      },
      {
        heading: "3. Special Purpose Arithmetic Gates (XOR, XNOR)",
        content: [
          "• XOR Gate (Exclusive-OR): Odd-parity detector. Output is 1 when inputs are DIFFERENT: Y = A ⊕ B = ĀB + AB̄.",
          "• XNOR Gate (Equivalence / Coincidence Gate): Even-parity detector. Output is 1 when inputs are IDENTICAL: Y = A ⊙ B = AB + ĀB̄.",
          "Critical Use: XOR forms the heart of Half Adders, Full Adders, Parity Checkers, and Gray-to-Binary converters."
        ],
        diagramOrTable: {
          title: "Truth Tables for XOR and XNOR",
          tableData: {
            headers: ["A", "B", "XOR (A ⊕ B)", "XNOR (A ⊙ B)"],
            rows: [
              ["0", "0", "0", "1"],
              ["0", "1", "1", "0"],
              ["1", "0", "1", "0"],
              ["1", "1", "0", "1"]
            ]
          }
        }
      },
      {
        heading: "4. The Principle of Duality",
        content: [
          "The Duality Principle is a fundamental postulate of Boolean algebra. It states that: Every algebraic identity deducible from the postulates of Boolean algebra remains valid if the operators and identity elements are systematically interchanged.",
          "Rules for Obtaining the Dual of a Boolean Expression:",
          "1. Change every AND (·) operation to an OR (+) operation.",
          "2. Change every OR (+) operation to an AND (·) operation.",
          "3. Change every binary constant 0 to 1, and every 1 to 0.",
          "4. Leave all variable literals (complemented or uncomplemented) unchanged.",
          "Examples of Duality:",
          "• Original: A + 0 = A  ──► Dual: A · 1 = A",
          "• Original: A + Ā = 1  ──► Dual: A · Ā = 0",
          "• Original: A · (B + C) = (A·B) + (A·C)  ──► Dual: A + (B·C) = (A+B) · (A+C)",
          "Note: Duality is NOT the same as complementation. Variables are NOT complemented when taking the dual!"
        ]
      }
    ],
    summary: "Mastery of all 7 logic gates and the duality principle allows engineers to transform, minimize, and synthesize digital circuits using cost-effective universal gates like NAND and NOR.",
    examinerScoringCriteria: [
      { criterion: "Classification and definitions of all 7 logic gates", marks: "3 Marks" },
      { criterion: "Accurate Truth Tables and Boolean equations", marks: "3 Marks" },
      { criterion: "Proof of Universal Gates (NAND/NOR capabilities)", marks: "2 Marks" },
      { criterion: "Clear statement of Duality Principle with 3 valid algebraic examples", marks: "2 Marks" }
    ],
    commonMistakes: [
      "Complementing variables when finding the dual (Dual of A+B is A·B, NOT Ā·B̄).",
      "Omitting the distinction between universal gates and basic gates."
    ],
    topic: "Logic Gates & Boolean Postulates"
  },
  {
    id: 3,
    question: "Explain Boolean algebra?",
    recommendedMarks: 10,
    targetTimeMinutes: 25,
    introduction: "Introduced by English mathematician George Boole in 1854 and adapted to digital switching circuits by Claude Shannon in 1938, Boolean Algebra is an algebraic structure defined on a set of binary elements B = {0, 1} with two binary operators (+, ·) and a unary operator ( ̄ ). It provides the mathematical foundation for analyzing, minimizing, and implementing digital logic circuits.",
    structuralSections: [
      {
        heading: "1. Postulates of Boolean Algebra (Huntington's Postulates)",
        content: [
          "Boolean algebra is formally defined by Huntington's Postulates over set B = {0, 1}:",
          "• Closure: For every x, y in B, (x + y) is in B, and (x · y) is in B.",
          "• Identity Element: There exists an identity element 0 with respect to +, and 1 with respect to · such that: x + 0 = x and x · 1 = x.",
          "• Commutative Law: x + y = y + x and x · y = y · x.",
          "• Distributive Law: x · (y + z) = (x·y) + (x·z), and importantly x + (y·z) = (x+y) · (x+z).",
          "• Complement: For every x in B, there exists an element x̄ in B such that: x + x̄ = 1 and x · x̄ = 0.",
          "• Discrete Elements: There exist at least two distinct elements x, y in B such that x ≠ y."
        ]
      },
      {
        heading: "2. Fundamental Theorems & Operational Laws",
        content: [
          "From the basic postulates, several crucial algebraic theorems are derived:",
          "• Idempotent Law: x + x = x  |  x · x = x",
          "• Boundedness (Dominance / Null Element): x + 1 = 1  |  x · 0 = 0",
          "• Involution (Double Negation): (x̄)̄ = x",
          "• Associative Law: x + (y + z) = (x + y) + z  |  x · (y · z) = (x · y) · z",
          "• Absorption Law: x + (x · y) = x  |  x · (x + y) = x",
          "• Consensus Theorem: xy + x̄z + yz = xy + x̄z (the redundant term yz is eliminated)"
        ]
      },
      {
        heading: "3. De Morgan's Theorems",
        content: [
          "De Morgan's Theorems provide the mathematical bridge between AND and OR logic, enabling universal gate transformations:",
          "First Theorem: The complement of a logical sum equals the logical product of individual complements:",
          "     (A + B)̄ = Ā · B̄",
          "Second Theorem: The complement of a logical product equals the logical sum of individual complements:",
          "     (A · B)̄ = Ā + B̄",
          "Application: Converts Sum-of-Products (SOP) into Product-of-Sums (POS) and vice-versa."
        ],
        diagramOrTable: {
          title: "Truth Table Verification of De Morgan's First Theorem: (A+B)̄ = Ā · B̄",
          tableData: {
            headers: ["A", "B", "A+B", "(A+B)̄", "Ā", "B̄", "Ā · B̄"],
            rows: [
              ["0", "0", "0", "1", "1", "1", "1"],
              ["0", "1", "1", "0", "1", "0", "0"],
              ["1", "0", "1", "0", "0", "1", "0"],
              ["1", "1", "1", "0", "0", "0", "0"]
            ]
          }
        }
      },
      {
        heading: "4. Practical Importance in Computer Engineering",
        content: [
          "• Hardware Reduction: Minimizing Boolean expressions reduces the count of logic gates and IC packages.",
          "• Propagation Delay Reduction: Shorter gate paths mean higher processor clock speeds.",
          "• Power & Heat Optimization: Fewer active transistors translate directly into reduced power consumption and cooler chip operation."
        ]
      }
    ],
    summary: "Boolean Algebra is the rigorous mathematical backbone of computer science. By mastering its postulates, laws, and De Morgan's theorems, engineers can systematically simplify complex digital expressions to their minimum cost hardware realizations.",
    examinerScoringCriteria: [
      { criterion: "Definition and Huntington's postulates", marks: "3 Marks" },
      { criterion: "Complete list of laws (Absorption, Consensus, Associative)", marks: "3 Marks" },
      { criterion: "De Morgan's two theorems with algebraic proofs/truth table", marks: "3 Marks" },
      { criterion: "Significance in digital circuit design", marks: "1 Mark" }
    ],
    commonMistakes: [
      "Forgetting the second distributive law: in ordinary algebra x+(y·z) does not factor, but in Boolean algebra x+(y·z) = (x+y)(x+z).",
      "Confusing De Morgan's expressions."
    ],
    topic: "Boolean Algebra"
  },
  {
    id: 4,
    question: "Explain about Flip flops?",
    recommendedMarks: 10,
    targetTimeMinutes: 30,
    introduction: "A Flip-Flop (bistable multivibrator) is a fundamental sequential logic circuit capable of storing one bit of binary data in a stable state (0 or 1). Unlike combinational circuits where outputs depend solely on present inputs, sequential circuit outputs depend on both present inputs and the past history (stored internal state). Flip-flops are edge-triggered or level-clocked memory cells that form the foundation of registers, counters, and RAM.",
    structuralSections: [
      {
        heading: "1. Basic SR (Set-Reset) Flip-Flop",
        content: [
          "The SR flip-flop has two data inputs: S (Set) and R (Reset), a Clock (CLK) input, and complementary outputs Q and Q̄.",
          "• When S=1, R=0: Output Q becomes 1 (Set state).",
          "• When S=0, R=1: Output Q becomes 0 (Reset state).",
          "• When S=0, R=0: Output remains unchanged (Hold / Memory state, Qₙ₊₁ = Qₙ).",
          "• When S=1, R=1: FORBIDDEN / UNDEFINED / INVALID state because both Q and Q̄ try to become 0 simultaneously, violating complementation."
        ],
        diagramOrTable: {
          title: "SR Flip-Flop Truth / Characteristic Table",
          tableData: {
            headers: ["S", "R", "CLK", "Qₙ₊₁ (Next State)", "Description"],
            rows: [
              ["0", "0", "↑", "Qₙ", "No Change (Memory)"],
              ["0", "1", "↑", "0", "Reset (Clear)"],
              ["1", "0", "↑", "1", "Set"],
              ["1", "1", "↑", "Invalid (?)", "Forbidden / Undefined"]
            ]
          }
        }
      },
      {
        heading: "2. JK Flip-Flop & The Race-Around Condition",
        content: [
          "The JK Flip-Flop resolves the invalid state of the SR flip-flop by feeding back outputs Q and Q̄ to the input gating AND gates.",
          "• J acts as Set; K acts as Reset.",
          "• When J=1 and K=1: The output TOGGLES (inverts previous state: Qₙ₊₁ = Q̄ₙ).",
          "The Race-Around Problem:",
          "In a level-triggered JK flip-flop, when J=1, K=1 and clock pulse width tp > propagation delay of gate Δt, the output toggles repeatedly back and forth between 0 and 1 during the single clock pulse, producing an unpredictable state at clock fall.",
          "Solutions to Race-Around Condition:",
          "1. Keep clock pulse width shorter than propagation delay (tp < Δt) - practically difficult.",
          "2. Use Edge-Triggering (Positive or Negative edge triggered flip-flops).",
          "3. Use Master-Slave JK Flip-Flop (Two cascaded flip-flops: Master latches on clock HIGH, Slave transfers to output on clock LOW)."
        ],
        diagramOrTable: {
          title: "JK Flip-Flop Characteristic Table",
          tableData: {
            headers: ["J", "K", "Qₙ₊₁ (Next State)", "Operation Mode"],
            rows: [
              ["0", "0", "Qₙ", "No Change (Hold)"],
              ["0", "1", "0", "Reset"],
              ["1", "0", "1", "Set"],
              ["1", "1", "Q̄ₙ", "Toggle (Complemented)"]
            ]
          }
        }
      },
      {
        heading: "3. D (Data / Delay) Flip-Flop",
        content: [
          "Constructed from an SR or JK flip-flop by connecting the two inputs together via an inverter (S = D, R = D̄).",
          "• Single data input D.",
          "• Eliminates the forbidden state entirely.",
          "• Characteristic Equation: Qₙ₊₁ = D.",
          "• Primary Application: Registers, pipelines, data buffers, and temporary memory."
        ]
      },
      {
        heading: "4. T (Toggle) Flip-Flop",
        content: [
          "Constructed by tying the J and K inputs of a JK flip-flop together (J = K = T).",
          "• When T = 0: No change (Qₙ₊₁ = Qₙ).",
          "• When T = 1: Output toggles (Qₙ₊₁ = Q̄ₙ).",
          "• Primary Application: Asynchronous/Synchronous binary counters and frequency dividers."
        ]
      }
    ],
    summary: "Flip-flops are the building blocks of sequential circuits. From SR to JK, D, and T flip-flops, each variant solves specific operational challenges like invalid states, race-around conditions, and data latching.",
    examinerScoringCriteria: [
      { criterion: "Definition of flip-flop and combinational vs sequential distinction", marks: "2 Marks" },
      { criterion: "SR flip-flop operation, logic diagram, truth table, and invalid state", marks: "3 Marks" },
      { criterion: "JK flip-flop, toggle mode, and thorough explanation of Race-Around Condition with solutions", marks: "3 Marks" },
      { criterion: "D and T flip-flops with characteristic equations", marks: "2 Marks" }
    ],
    commonMistakes: [
      "Failing to explain the Race-Around condition and how Master-Slave solves it.",
      "Leaving out the characteristic equations (e.g. Qₙ₊₁ = S + R̄Qₙ; Qₙ₊₁ = JQ̄ₙ + K̄Qₙ; Qₙ₊₁ = D; Qₙ₊₁ = T ⊕ Qₙ)."
    ],
    topic: "Flip Flops"
  },
  {
    id: 5,
    question: "Explain the functional unit of a computer.",
    recommendedMarks: 10,
    targetTimeMinutes: 25,
    introduction: "A digital computer is an integrated system consisting of several specialized subsystems that cooperate to execute instructions and process data. According to standard computer architecture models (Von Neumann), a computer system is partitioned into five fundamental functional units: Input Unit, Arithmetic & Logic Unit (ALU), Memory Unit, Control Unit, and Output Unit.",
    structuralSections: [
      {
        heading: "1. Functional Units Overview & Architecture Diagram",
        content: [
          "The CPU combines the ALU, Control Unit, and internal Registers.",
          "The System Bus (Data Bus, Address Bus, Control Bus) provides the interconnection pathway between functional units."
        ],
        diagramOrTable: {
          title: "Block Diagram of Functional Units of a Digital Computer",
          asciiArt: `                 +---------------------------------------------+
                 |          CENTRAL PROCESSING UNIT (CPU)      |
                 |                                             |
                 |   +-------------------+  Control Signals    |
                 |   |   CONTROL UNIT    |===================> |
                 |   +-------------------+                     |
                 |             ^                               |
                 |             | Internal Bus                  |
                 |             v                               |
                 |   +-------------------+   +---------------+ |
                 |   | ARITHMETIC LOGIC  |   | CPU REGISTERS | |
                 |   |    UNIT (ALU)     |<->| (AC, PC, IR)  | |
                 |   +-------------------+   +---------------+ |
                 +---------------------------------------------+
                            ^                   ^
               Control/Data |                   | Control/Data
                            v                   v
+--------------+     +-------------------+     +---------------+
|  INPUT UNIT  |====>|    MAIN MEMORY    |====>|  OUTPUT UNIT  |
| (Kbd, Mouse) |     |    (RAM / ROM)    |     | (VDU, Print)  |
+--------------+     +-------------------+     +---------------+
                               ^
                               | Secondary Storage
                               v
                     +-------------------+
                     | AUXILIARY STORAGE |
                     |   (SSD / HDD)     |
                     +-------------------+`
        }
      },
      {
        heading: "2. Detailed Analysis of the Five Units",
        content: [
          "1. Input Unit:",
          "• Accepts external binary data or converts analog/character data into binary strings via encoders and transducers.",
          "• Places converted data into designated locations in main memory.",
          "",
          "2. Memory Unit (Storage):",
          "• Primary Memory (RAM/ROM): Volatile, semiconductor, byte-addressable storage connected directly to the CPU.",
          "• Secondary / Auxiliary Memory: Non-volatile, high-capacity, block-addressable magnetic/flash storage (SSD, Hard Disks, Optical Media).",
          "",
          "3. Arithmetic & Logic Unit (ALU):",
          "• Performs arithmetic operations (Addition, Subtraction, Multiplication, Division).",
          "• Performs logical operations (AND, OR, NOT, XOR) and relational comparisons (<, >, ==).",
          "• Features specialized hardware: Parallel Binary Adders, Status/Flag Registers (Zero, Carry, Sign, Overflow).",
          "",
          "4. Output Unit:",
          "• Takes binary results from main memory, translates them into human-readable alphanumerics or physical controls (via DACs, display drivers), and presents them on monitors, printers, or actuator outputs.",
          "",
          "5. Control Unit (CU):",
          "• The coordinator that fetches instructions sequentially, decodes the opcode, and generates timing pulses to activate appropriate datapath logic."
        ]
      },
      {
        heading: "3. Interconnection Subsystems (System Bus)",
        content: [
          "The units communicate via three distinct physical bus groups:",
          "• Address Bus (Unidirectional): CPU sends target memory or I/O port address.",
          "• Data Bus (Bidirectional): Transfers data operands and instructions between CPU, memory, and peripherals.",
          "• Control Bus (Bidirectional): Carries timing, status, read/write, and interrupt request/acknowledge signals."
        ]
      }
    ],
    summary: "The functional units operate in tightly synchronized harmony. Understanding their distinct boundaries is vital for grasping memory-CPU bottlenecks, bus arbitration, and instruction pipeline execution.",
    examinerScoringCriteria: [
      { criterion: "Neat, labeled block diagram of functional units and buses", marks: "3 Marks" },
      { criterion: "In-depth explanation of all 5 units (Input, ALU, Memory, Output, CU)", marks: "4 Marks" },
      { criterion: "Description of the System Bus (Address, Data, Control)", marks: "2 Marks" },
      { criterion: "Presentation and technical terminology", marks: "1 Mark" }
    ],
    commonMistakes: [
      "Omitting the distinction between primary memory and auxiliary storage.",
      "Drawing disconnected blocks without arrows showing data flow vs control signal flow."
    ],
    topic: "Computer Organization & Functional Units"
  },
  {
    id: 6,
    question: "What is the difference between full adder and half adder?",
    recommendedMarks: 10,
    targetTimeMinutes: 25,
    introduction: "Binary Adders are fundamental combinational arithmetic circuits used inside the Arithmetic Logic Unit (ALU) to perform digital binary addition. A Half Adder adds two single-bit binary inputs, while a Full Adder adds three single-bit inputs (two operand bits plus one incoming carry bit from a preceding stage). Understanding their circuit structures, Boolean equations, and hardware cascading is a central topic in Digital Electronics.",
    structuralSections: [
      {
        heading: "1. Half Adder: Circuit, Truth Table & Equations",
        content: [
          "A Half Adder accepts 2 single-bit inputs A and B, producing Sum (S) and Carry (C).",
          "• Sum expression: S = ĀB + AB̄ = A ⊕ B (Implemented with 1 XOR gate).",
          "• Carry expression: C = A · B (Implemented with 1 AND gate).",
          "Limitation: It cannot accept a carry generated by a previous lower-order bit stage, making it unsuitable for multi-bit binary addition on its own."
        ],
        diagramOrTable: {
          title: "Half Adder Truth Table & Logic Implementation",
          tableData: {
            headers: ["A", "B", "Sum (S = A ⊕ B)", "Carry (C = A · B)"],
            rows: [
              ["0", "0", "0", "0"],
              ["0", "1", "1", "0"],
              ["1", "0", "1", "0"],
              ["1", "1", "0", "1"]
            ]
          }
        }
      },
      {
        heading: "2. Full Adder: Circuit, Truth Table & Equations",
        content: [
          "A Full Adder accepts 3 single-bit inputs: A, B, and Cᵢₙ (Carry-in from previous stage), and produces Sum (S) and Carry-out (Cₒᵤₜ).",
          "• Sum expression: S = A ⊕ B ⊕ Cᵢₙ.",
          "• Carry expression: Cₒᵤₜ = AB + Cᵢₙ(A ⊕ B) = AB + BCᵢₙ + ACᵢₙ.",
          "Construction using Half Adders:",
          "A Full Adder can be constructed using TWO Half Adders and ONE OR Gate:",
          "• Half Adder 1: Inputs A and B produce intermediate Sum S₁ = A ⊕ B and Carry C₁ = AB.",
          "• Half Adder 2: Inputs S₁ and Cᵢₙ produce final Sum S = S₁ ⊕ Cᵢₙ = A ⊕ B ⊕ Cᵢₙ and intermediate Carry C₂ = S₁ · Cᵢₙ.",
          "• OR Gate: Combines C₁ and C₂ to produce final Carry-out: Cₒᵤₜ = C₁ + C₂ = AB + (A ⊕ B)Cᵢₙ."
        ],
        diagramOrTable: {
          title: "Full Adder Truth Table",
          tableData: {
            headers: ["A", "B", "Cᵢₙ", "Sum (S)", "Carry-out (Cₒᵤₜ)"],
            rows: [
              ["0", "0", "0", "0", "0"],
              ["0", "0", "1", "1", "0"],
              ["0", "1", "0", "1", "0"],
              ["0", "1", "1", "0", "1"],
              ["1", "0", "0", "1", "0"],
              ["1", "0", "1", "0", "1"],
              ["1", "1", "0", "0", "1"],
              ["1", "1", "1", "1", "1"]
            ]
          }
        }
      },
      {
        heading: "3. Comprehensive Comparative Table",
        content: [
          "Here is the direct comparison between Half Adder and Full Adder for examination scoring:"
        ],
        diagramOrTable: {
          title: "Half Adder vs Full Adder Comparison",
          tableData: {
            headers: ["Feature / Parameter", "Half Adder", "Full Adder"],
            rows: [
              ["Number of Inputs", "2 inputs (A, B)", "3 inputs (A, B, and Carry-in Cᵢₙ)"],
              ["Number of Outputs", "2 outputs (Sum, Carry)", "2 outputs (Sum, Carry-out)"],
              ["Carry from Previous Stage", "Cannot accommodate previous carry", "Accepts previous carry Cᵢₙ"],
              ["Hardware Components", "1 XOR gate + 1 AND gate", "2 XOR gates + 2 AND gates + 1 OR gate (or 2 Half Adders + 1 OR gate)"],
              ["Boolean Sum Expression", "S = A ⊕ B", "S = A ⊕ B ⊕ Cᵢₙ"],
              ["Boolean Carry Expression", "C = A · B", "Cₒᵤₜ = AB + BCᵢₙ + ACᵢₙ"],
              ["Application in Parallel Adders", "Can only be used for LSB bit (bit 0)", "Used for all intermediate and MSB bit stages"],
              ["Complexity & Delay", "Simple, 1 gate-delay for XOR", "Higher complexity, 2 gate-delays for sum"]
            ]
          }
        }
      }
    ],
    summary: "While a Half Adder is only adequate for adding the least significant bit (LSB) position, Full Adders are indispensable for building n-bit parallel binary adders (Ripple Carry Adder, Carry Look-Ahead Adder) in computer arithmetic.",
    examinerScoringCriteria: [
      { criterion: "Half adder truth table, circuit diagram, and Boolean equations", marks: "3 Marks" },
      { criterion: "Full adder truth table, circuit diagram, and Boolean equations", marks: "3 Marks" },
      { criterion: "Implementation of Full Adder using 2 Half Adders and an OR gate", marks: "2 Marks" },
      { criterion: "Tabular comparison with at least 5 distinct points", marks: "2 Marks" }
    ],
    commonMistakes: [
      "Writing Carry-out as a product rather than the sum of minterms (Cₒᵤₜ = AB + Cᵢₙ(A ⊕ B)).",
      "Forgetting to show the 2 Half Adders + OR gate schematic block."
    ],
    topic: "Adders & Arithmetic Circuits"
  },
  {
    id: 7,
    question: "Write down the different types of computers?",
    recommendedMarks: 10,
    targetTimeMinutes: 25,
    introduction: "Digital computers are classified according to multiple criteria including computational power, physical size, processing speed, architecture, and application domain. In computer science, computers are traditionally categorized into four main classes based on processing capacity and scale: Supercomputers, Mainframe Computers, Minicomputers, and Microcomputers (including Workstations and Personal Computers).",
    structuralSections: [
      {
        heading: "1. Supercomputers (High-Performance Computing - HPC)",
        content: [
          "• Characteristics: The fastest, largest, and most expensive computers in existence.",
          "• Architecture: Massively Parallel Processing (MPP) architectures featuring tens of thousands to millions of processor cores running in parallel.",
          "• Performance Metric: Measured in FLOPS (Floating-point Operations Per Second), currently in the ExaFLOPS range (10¹⁸ FLOPS).",
          "• Applications: Climate modeling, weather forecasting, quantum mechanics, nuclear fusion simulation, molecular dynamics, and aerodynamic modeling.",
          "• Examples: Frontier (USA), Fugaku (Japan), PARAM Siddhi & PARAM Ganga (India)."
        ]
      },
      {
        heading: "2. Mainframe Computers (Enterprise Computing)",
        content: [
          "• Characteristics: High-reliability, ultra-high-throughput enterprise machines designed for massive I/O handling and high concurrency.",
          "• Key Strengths: Reliability, Availability, and Serviceability (RAS). Can process billions of real-time transactions daily with zero downtime.",
          "• Multitenancy: Supports thousands of concurrent users running separate isolated virtual partitions (LPARs).",
          "• Applications: Global banking transactions (SWIFT, credit cards), airline reservations, insurance claim processing, and census bureaus.",
          "• Examples: IBM zSeries (z16, z15), Unisys ClearPath."
        ]
      },
      {
        heading: "3. Minicomputers (Mid-Range Computers)",
        content: [
          "• Characteristics: Medium-scale multi-user computers that bridge the gap between mainframes and microcomputers.",
          "• Emergence: Developed in the 1960s (pioneered by DEC) to provide cost-effective computing for departments and universities without requiring multimillion-dollar mainframe rooms.",
          "• Capacity: Simultaneously supports 50 to 250 users connected via network terminals.",
          "• Applications: Manufacturing plant automation, departmental databases, scientific laboratory data acquisition.",
          "• Examples: DEC PDP-11, VAX series, IBM AS/400 (Power Systems), HP 3000."
        ]
      },
      {
        heading: "4. Microcomputers, Workstations & Embedded Systems",
        content: [
          "• Microcomputers: Built around a single-chip Microprocessor (VLSI). Includes desktop PCs, laptops, tablets, and smartphones. Highly affordable, mass-market general-purpose machines.",
          "• Workstations: High-performance single-user microcomputers with advanced GPUs, high-speed ECC RAM, and fast multicore CPUs designed for 3D graphics, CAD/CAM, audio editing, and software development.",
          "• Embedded Computers: Specialized microcontrollers (e.g., ARM Cortex-M, PIC, Arduino) integrated inside consumer appliances, automobiles, medical devices, and IoT sensors to perform dedicated real-time control functions."
        ],
        diagramOrTable: {
          title: "Comprehensive Classification Table",
          tableData: {
            headers: ["Class", "Processing Speed", "Typical Users", "Primary Architecture", "Dominant Use Case"],
            rows: [
              ["Supercomputer", "PetaFLOPS to ExaFLOPS", "Specialized scientists / teams", "Massively Parallel (MPP / Clusters)", "Grand-challenge scientific research"],
              ["Mainframe", "Hundreds of MIPS / TFLOPS", "Thousands of concurrent users", "Heavy I/O coprocessors & fault tolerance", "Banking, Airlines, Enterprise ERP"],
              ["Minicomputer", "Tens of MIPS / GFLOPS", "50 - 250 departmental users", "Multiprocessor rack-mount servers", "Departmental servers, factory automation"],
              ["Microcomputer", "Gigahertz clocks / GFLOPS", "Single personal user", "Single-chip microprocessor (x86, ARM)", "Office, education, personal computing"],
              ["Embedded", "Megahertz to Low GHz", "Automated system (no direct user)", "System-on-Chip (SoC) / Microcontroller", "Automotive, robotics, smart IoT appliances"]
            ]
          }
        }
      }
    ],
    summary: "From giant parallel supercomputers pushing the frontiers of human science to tiny embedded microcontrollers inside automobiles, each class of computer balances performance, power consumption, cost, and architecture to fulfill distinct computational roles.",
    examinerScoringCriteria: [
      { criterion: "Clear breakdown of all 4 major classes (Super, Mainframe, Mini, Micro)", marks: "4 Marks" },
      { criterion: "Performance metrics and architectural traits for each class", marks: "3 Marks" },
      { criterion: "Real-world examples and application areas for each", marks: "2 Marks" },
      { criterion: "Comparative summary table", marks: "1 Mark" }
    ],
    commonMistakes: [
      "Omitting Minicomputers or confusing Minicomputers with Microcomputers.",
      "Not providing real-world machine examples (e.g. PARAM, IBM zSeries, DEC PDP)."
    ],
    topic: "Types of Digital Computers"
  },
  {
    id: 8,
    question: "Explain the block diagram of computer?",
    recommendedMarks: 10,
    targetTimeMinutes: 28,
    introduction: "The Block Diagram of a digital computer illustrates the structural decomposition and interconnection of its primary hardware subsystems based on the classical Von Neumann stored-program architecture. Every general-purpose computer consists of five interconnected subsystems: Input Unit, Storage (Memory) Unit, Control Unit, Arithmetic Logic Unit (ALU), and Output Unit, coordinated through dedicated control, address, and data transmission paths.",
    structuralSections: [
      {
        heading: "1. Detailed Computer Hardware Block Diagram",
        content: [
          "In the architectural block diagram, solid lines represent the transmission of data/instructions, while dashed/double lines represent the transmission of timing and control signals generated by the Control Unit."
        ],
        diagramOrTable: {
          title: "Standard Architecture Block Diagram of a Digital Computer",
          asciiArt: `+-------------------------------------------------------------------------+
|                       CENTRAL PROCESSING UNIT (CPU)                     |
|                                                                         |
|      +-----------------------------------------------------------+      |
|      |                       CONTROL UNIT                        |      |
|      |    (Timing generator, Instruction Register, Decoder)      |      |
|      +-----------------------------------------------------------+      |
|         | | |                   | | |                   | | |           |
|  Control| | |Signals     Control| | |Signals     Control| | |Signals    |
|         v v v                   v v v                   v v v           |
|      +-----------------------------------------------------------+      |
|      |                ARITHMETIC & LOGIC UNIT (ALU)              |      |
|      |    (Adders, Logic Gates, Shifters, Status/Flag Register)  |      |
|      +-----------------------------------------------------------+      |
|                                 ^ |                                     |
|                      Operand Bus| |Accumulator Bus                      |
|                                 v v                                     |
|      +-----------------------------------------------------------+      |
|      |                   INTERNAL CPU REGISTERS                  |      |
|      |     (Accumulator AC, PC, MAR, MDR, General Purpose R0-Rn) |      |
|      +-----------------------------------------------------------+      |
+-------------------------------------------------------------------------+
           ^                                         |
           | Data Bus                                | Data Bus
           v                                         v
+-----------------------+                 +-----------------------+
|      INPUT UNIT       |                 |      OUTPUT UNIT      |
|                       |                 |                       |
|   • Keyboard          |                 |   • Monitor (VDU)     |
|   • Mouse             |                 |   • Laser Printer     |
|   • Optical Scanner   |                 |   • Audio Speakers    |
|   • ADC / Sensors     |                 |   • DAC / Actuators   |
+-----------------------+                 +-----------------------+
           |                                         ^
           +--------------------+ +------------------+
                                | |
                                v v
               +------------------------------------+
               |         STORAGE / MEMORY UNIT      |
               |                                    |
               |   +----------------------------+   |
               |   |   PRIMARY MEMORY (RAM/ROM) |   |
               |   |  (Directly accessible)     |   |
               |   +----------------------------+   |
               |                 ^                  |
               |                 | Block Transfers  |
               |                 v                  |
               |   +----------------------------+   |
               |   |   SECONDARY STORAGE        |   |
               |   |   (SSD, HDD, Flash Drives) |   |
               |   +----------------------------+   |
               +------------------------------------+`
        }
      },
      {
        heading: "2. Systematic Breakdown of Subsystems",
        content: [
          "1. Input Unit: Transduces physical human keystrokes or analog signals into standard binary representations (ASCII/Unicode, binary integers) and writes them into memory.",
          "2. Central Processing Unit (The Brain of the Computer):",
          "   a) Arithmetic Logic Unit (ALU): Executes arithmetic operations (+, -, *, /) using parallel adders and logical bit manipulations (AND, OR, NOT, XOR, Rotate, Shift). Stores immediate results in the Accumulator.",
          "   b) Control Unit (CU): Generates micro-instructions and timing clocks. Coordinates the four phases of the instruction cycle: Fetch, Decode, Execute, and Write-Back.",
          "   c) Internal Registers: Ultra-fast SRAM cells (Program Counter, Memory Address Register, Memory Buffer Register, Instruction Register).",
          "3. Memory Unit: Dual-level memory architecture consisting of high-speed byte-addressable Random Access Memory (RAM) for current execution and non-volatile magnetic/flash auxiliary storage for long-term file retention.",
          "4. Output Unit: Re-converts processed binary numbers into human-readable alphanumerics, high-resolution graphic displays, or physical printer outputs."
        ]
      },
      {
        heading: "3. The Stored-Program Concept (Von Neumann Architecture)",
        content: [
          "A fundamental concept to highlight in PG examinations:",
          "• Instructions and data reside together in the same unified memory space.",
          "• Execution proceeds sequentially (pointed to by the Program Counter) unless interrupted by branches/jumps.",
          "• The Von Neumann Bottleneck: CPU throughput is strictly throttled by the shared memory bus bandwidth."
        ]
      }
    ],
    summary: "The computer block diagram encapsulates how input, memory, CPU (ALU + CU + Registers), and output units work in lockstep under the stored-program concept to process data at billions of operations per second.",
    examinerScoringCriteria: [
      { criterion: "Clean, comprehensive, accurately labeled block diagram", marks: "4 Marks" },
      { criterion: "Clear distinction between data flow paths and control lines", marks: "2 Marks" },
      { criterion: "Detailed explanation of CPU, Memory, and I/O subunits", marks: "3 Marks" },
      { criterion: "Mention of Stored-Program concept and Von Neumann bottleneck", marks: "1 Mark" }
    ],
    commonMistakes: [
      "Drawing CPU without distinguishing between ALU, Control Unit, and Registers.",
      "Neglecting to show the connection between Primary Memory and Secondary Storage."
    ],
    topic: "Computer Organization & Block Diagram"
  },
  {
    id: 9,
    question: "Define digital computer with respect to hardware organization.",
    recommendedMarks: 10,
    targetTimeMinutes: 25,
    introduction: "With respect to hardware organization, a Digital Computer is defined as an interconnected assembly of discrete electronic digital logic circuits, registers, arithmetic-logic datapath units, control sequencing circuits, and memory storage devices operating under common timing signals to manipulate, store, and transfer binary digits (bits: 0 and 1) in accordance with a stored program.",
    structuralSections: [
      {
        heading: "1. Hardware Organization Definition & Architectural Model",
        content: [
          "From a hardware organizational perspective, a digital computer is an electronic state machine composed of:",
          "• Datapath Hardware: Registers, ALUs, buses, multiplexers, and internal interconnections that physically hold and process operands.",
          "• Control Logic Hardware: Finite state machines (FSMs), instruction decoders, and timing generators that issue gating signals to activate datapath elements.",
          "• Memory Hardware Hierarchy: Register files, L1/L2/L3 caches, DRAM modules, and secondary NVMe storage controllers.",
          "• Input/Output Hardware: Device controllers, bus transceivers, UARTs, and interrupt arbitration circuits."
        ]
      },
      {
        heading: "2. The Triad of Digital Hardware Subsystems",
        content: [
          "Hardware organization views the computer as three tightly coupled subsystems:",
          "1. Processor Datapath (Execution Engine): Contains the Arithmetic Logic Unit (ALU) built from full adders, multiplexers, shifters, and the register file (Accumulator, GPRs). Operates synchronously with the master clock.",
          "2. Memory Subsystem: Organized as a 2-dimensional matrix of storage flip-flops or capacitor cells (DRAM). Interfaces via two key organizational registers:",
          "   • MAR (Memory Address Register): Holds the memory address being accessed.",
          "   • MDR (Memory Data / Buffer Register): Holds data read from or written to memory.",
          "3. System Interconnection (Buses): Printed circuit traces or internal silicon wires providing parallel data transfer between functional modules."
        ],
        diagramOrTable: {
          title: "Hardware Organization: Register-Transfer-Level (RTL) View",
          asciiArt: `   +---------------------------------------------------------+
   |                     CPU HARDWARE                        |
   |                                                         |
   |  +---------------------+        +--------------------+  |
   |  |   PROGRAM COUNTER   |------->|   MEMORY ADDRESS   |  |
   |  |        (PC)         |        |   REGISTER (MAR)   |  |
   |  +---------------------+        +--------------------+  |
   |             |                             |             |
   |             v Address Bus                 v Address Bus |
   +-------------|-----------------------------|-------------+
                 |                             |
                 +--------------+--------------+
                                |
                                v
                   +-------------------------+
                   |       MAIN MEMORY       |
                   |   (Storage Array &      |
                   |    Row/Col Decoders)    |
                   +-------------------------+
                                |
                 +--------------+--------------+
                 |                             |
   +-------------|-----------------------------|-------------+
   |             v Data Bus                    v Data Bus    |
   |  +---------------------+        +--------------------+  |
   |  |     INSTRUCTION     |        |    MEMORY BUFFER   |  |
   |  |    REGISTER (IR)    |        |   REGISTER (MDR)   |  |
   |  +---------------------+        +--------------------+  |
   |             |                             |             |
   |             v                             v             |
   |  +---------------------+        +--------------------+  |
   |  |    CONTROL LOGIC    |=======>|     ARITHMETIC     |  |
   |  |   (FSM / Decoder)   |Control |     LOGIC UNIT     |  |
   |  +---------------------+Signals +--------------------+  |
   +---------------------------------------------------------+`
        }
      },
      {
        heading: "3. Hardware Execution: The Instruction Cycle",
        content: [
          "Hardware organization is best illustrated through the automated Register Transfer Level (RTL) steps of the machine cycle:",
          "• Fetch Phase: MAR ← PC; Memory Read; MDR ← M[MAR]; IR ← MDR; PC ← PC + 1.",
          "• Decode Phase: Control Unit decodes IR opcode bits; address mode evaluated.",
          "• Execute Phase: Operands transferred from registers to ALU; ALU operation executed; result stored back in Accumulator or memory.",
          "• Interrupt Check: Check interrupt line status before next fetch."
        ]
      }
    ],
    summary: "Defining a digital computer through hardware organization highlights its concrete electronic identity: a deterministic, synchronized network of logic gates, flip-flop registers, buses, and control micro-sequencers that transform raw electricity into programmable computing power.",
    examinerScoringCriteria: [
      { criterion: "Rigorous definition with respect to hardware and RTL organization", marks: "3 Marks" },
      { criterion: "Hardware components (Datapath, Control logic, Memory, Bus systems)", marks: "3 Marks" },
      { criterion: "RTL register organization diagram (PC, MAR, MDR, IR, ALU)", marks: "2 Marks" },
      { criterion: "Step-by-step hardware instruction cycle (Fetch, Decode, Execute)", marks: "2 Marks" }
    ],
    commonMistakes: [
      "Providing a non-technical high school definition ('a computer is an electronic machine that takes input...') instead of discussing hardware datapath, registers, and RTL.",
      "Omitting MAR, MDR, and bus lines."
    ],
    topic: "Digital Computers & Hardware Organization"
  },
  {
    id: 10,
    question: "What is the difference between computer organization and architecture?",
    recommendedMarks: 10,
    targetTimeMinutes: 28,
    introduction: "In computer science and engineering, Computer Architecture and Computer Organization are often confused but represent two distinct levels of abstraction. Formulated by legendary computer architect Gerrit Blaauw (co-designer of the IBM System/360), Architecture is the programmer's view of the machine (the 'What'), whereas Organization is the physical, internal implementation that realizes those architectural specifications (the 'How').",
    structuralSections: [
      {
        heading: "1. Computer Architecture: Attributes & The Programmer's Model",
        content: [
          "Computer Architecture refers to those operational attributes of a computer system that are directly visible to the assembly/machine-language programmer.",
          "It defines the conceptual structure and functional behavior of the computer as seen by software.",
          "Key Architectural Attributes:",
          "• Instruction Set Architecture (ISA): Available opcodes (ADD, SUB, JMP), instruction formats, and instruction length.",
          "• Addressing Modes: Direct, Indirect, Register, Indexed, Relative, Immediate addressing.",
          "• Data Representation: Number of bits used to represent integers, floating point numbers (IEEE 754), characters (ASCII/Unicode).",
          "• Programmer-Visible Registers: General-purpose registers, condition code flags (Zero, Carry, Sign, Overflow), Stack Pointer, Program Counter.",
          "• Memory Addressing: Byte-addressable vs word-addressable, physical address space limits.",
          "• I/O Mechanism: Memory-mapped I/O vs Isolated I/O, interrupt handling conventions.",
          "Key Principle: Software written for a specific architecture can run on ANY computer implementing that same architecture, regardless of how differently their underlying hardware is organized!"
        ]
      },
      {
        heading: "2. Computer Organization: Operational Units & Realization",
        content: [
          "Computer Organization refers to the operational units and their physical interconnections that realize the architectural specifications.",
          "It deals with internal hardware details that are completely transparent (hidden) to the machine-language programmer.",
          "Key Organizational Attributes:",
          "• Control Signals & Mechanism: Hardwired vs microprogrammed control unit.",
          "• CPU Datapath Design: Single-cycle, multi-cycle, or pipelined datapath (number of pipeline stages, branch prediction logic).",
          "• Memory Technology & Hierarchy: Cache organization (direct-mapped, set-associative), cache replacement policies (LRU, FIFO), DRAM access latency.",
          "• Bus Interfaces & Clocking: Bus width (32-bit vs 64-bit internal bus), clock frequency, bus arbitration protocols.",
          "• Peripheral Interfacing: DMA controller implementations, interrupt priority circuits.",
          "Key Principle: An architecture can remain constant for decades (e.g., Intel x86) while its underlying organization changes radically with every new processor generation to improve speed, power, and throughput!"
        ]
      },
      {
        heading: "3. Comprehensive Comparative Master Table",
        content: [
          "This side-by-side comparison captures all parameters expected by PG university examiners:"
        ],
        diagramOrTable: {
          title: "Comprehensive Comparison: Architecture vs Organization",
          tableData: {
            headers: ["Comparative Aspect", "Computer Architecture", "Computer Organization"],
            rows: [
              ["Core Definition", "Conceptual structure and functional behavior visible to the assembly programmer", "Structural operational units and physical interconnections that realize the architecture"],
              ["Fundamental Question", "WHAT does the computer do?", "HOW does the computer do it?"],
              ["Programmer Visibility", "Directly visible to the machine/assembly programmer", "Transparent (hidden) from the programmer"],
              ["Core Attributes", "Instruction set (ISA), addressing modes, register count, data types", "Control signals, datapath, pipeline stages, cache size, bus clock"],
              ["Evolution & Stability", "Long-lasting and stable over many decades (ensures backward software compatibility)", "Rapidly changes and upgrades with every microarchitecture silicon generation"],
              ["Performance Impact", "Determines the number of instructions needed to execute a program", "Determines clock cycle time (frequency) and Clock Cycles Per Instruction (CPI)"],
              ["Design Focus", "Logical specification and software-hardware interface", "Hardware implementation, circuit optimization, and electrical speed"],
              ["Classic Real-World Example", "Intel x86 (IA-32 / x86-64) architecture remains constant across decades", "Pentium, Core i7, and Xeon organize x86 completely differently (multicore, deep pipeline)"]
            ]
          }
        }
      },
      {
        heading: "4. Practical Example: Multiplication Operation",
        content: [
          "To cement the distinction for the examiner:",
          "• Architectural Decision: 'Does the processor have a hardware MULTIPLY instruction (MUL R1, R2)?' (If yes, programmer can use it directly in assembly).",
          "• Organizational Decision: 'How is that multiply instruction physically executed?'",
          "   - Computer Organization A: Implements a high-speed Booth's Wallace-tree hardware array multiplier (executes in 1 clock cycle).",
          "   - Computer Organization B: Implements repeated addition using the existing ALU adder over 16 clock cycles.",
          "Both computers possess the EXACT same Architecture, but have completely different Organizations!"
        ]
      }
    ],
    summary: "In summary, Computer Architecture sets the contractual interface between software and hardware, while Computer Organization builds the actual electronic machine that satisfies that contract.",
    examinerScoringCriteria: [
      { criterion: "Precise conceptual definitions of both terms with Gerrit Blaauw's perspective", marks: "2 Marks" },
      { criterion: "Architectural attributes list (ISA, addressing modes, data types)", marks: "2 Marks" },
      { criterion: "Organizational attributes list (Datapath, control signals, cache, bus)", marks: "2 Marks" },
      { criterion: "Comprehensive 8-point comparison table", marks: "3 Marks" },
      { criterion: "Illustrative example (e.g. Multiplication instruction vs hardware implementation)", marks: "1 Mark" }
    ],
    commonMistakes: [
      "Saying architecture is software and organization is hardware (both are hardware-related, but architecture is the software-visible interface).",
      "Failing to provide a concrete example like x86 or the multiplication hardware distinction."
    ],
    topic: "Architecture vs Organization"
  }
];
