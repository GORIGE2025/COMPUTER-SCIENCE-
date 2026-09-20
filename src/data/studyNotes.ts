import { StudyTopic } from "../types";

export const studyTopicsList: StudyTopic[] = [
  {
    id: "logic-gates",
    title: "Logic Gates (Basic, Universal & Special)",
    category: "Digital Logic",
    summary: "Electronic circuits implementing Boolean switching functions. Classified into Basic Gates (AND, OR, NOT), Universal Gates (NAND, NOR), and Arithmetic Special Gates (XOR, XNOR).",
    examSignificance: "High (10 Marks)",
    keyConcepts: [
      {
        name: "Basic Gates (AND, OR, NOT)",
        description: "AND requires all inputs 1 for output 1 (Y = A·B). OR requires at least one 1 for output 1 (Y = A+B). NOT inverts single input (Y = Ā).",
        formulaOrTruthTable: "AND: Y = A·B | OR: Y = A+B | NOT: Y = Ā"
      },
      {
        name: "Universal Gates (NAND, NOR)",
        description: "Capable of implementing any Boolean function without using other gate types. NAND is negated AND: Y = (A·B)̄. NOR is negated OR: Y = (A+B)̄.",
        formulaOrTruthTable: "NOT via NAND: A NAND A = Ā | AND via NAND: ((A·B)̄)̄ = A·B | OR via NAND: (Ā·B̄)̄ = A+B"
      },
      {
        name: "Exclusive Gates (XOR, XNOR)",
        description: "XOR (Odd Function): Output 1 when inputs differ (Y = ĀB + AB̄). XNOR (Equivalence Gate): Output 1 when inputs are equal (Y = AB + ĀB̄).",
        formulaOrTruthTable: "XOR: 0⊕0=0, 0⊕1=1, 1⊕0=1, 1⊕1=0 | XNOR: 0⊙0=1, 0⊙1=0, 1⊙0=0, 1⊙1=1"
      }
    ],
    detailedNotes: [
      "Why are NAND and NOR called Universal Gates? Because any Boolean equation can be simplified into combinations of NAND only or NOR only. In semiconductor fabrication, CMOS NAND and NOR gates require fewer transistors and consume less silicon die area than AND/OR gates.",
      "Enable/Inhibit properties of gates: For a 2-input AND gate, holding one input at 0 disables/inhibits output to 0; holding it at 1 enables signal transmission. For an OR gate, holding one input at 1 forces output to 1; holding it at 0 enables signal transmission.",
      "Propagation Delay (tpd): The time taken for an input transition to cause an output transition (typically 1–10 nanoseconds in modern TTL/CMOS)."
    ]
  },
  {
    id: "boolean-algebra",
    title: "Boolean Algebra, Laws & Duality Principle",
    category: "Digital Logic",
    summary: "The algebraic system for analyzing and minimizing digital switching networks using binary variables {0, 1} and fundamental logical operators.",
    examSignificance: "High (10 Marks)",
    keyConcepts: [
      {
        name: "Huntington's Postulates",
        description: "Foundational axioms establishing closure, identity elements (0 for OR, 1 for AND), commutativity, distributivity, and complementation.",
        formulaOrTruthTable: "x + 0 = x, x · 1 = x, x + x̄ = 1, x · x̄ = 0, x + (y·z) = (x+y)(x+z)"
      },
      {
        name: "De Morgan's Theorems",
        description: "1st Theorem: Complement of OR sum = AND product of complements: (A+B)̄ = Ā·B̄. 2nd Theorem: Complement of AND product = OR sum of complements: (A·B)̄ = Ā+B̄.",
        formulaOrTruthTable: "(A + B)̄ = Ā · B̄  and  (A · B)̄ = Ā + B̄"
      },
      {
        name: "Principle of Duality",
        description: "Any true Boolean expression remains valid if AND and OR operators are interchanged, and 0 and 1 are swapped, while variable literals remain untouched.",
        formulaOrTruthTable: "Expression: A + 0 = A  ──►  Dual: A · 1 = A"
      }
    ],
    detailedNotes: [
      "Absorption Law: A + AB = A. Proof: A(1 + B) = A(1) = A. This eliminates redundant terms during circuit synthesis.",
      "Consensus Theorem: AB + ĀC + BC = AB + ĀC. The term BC is the consensus of AB and ĀC and is redundant.",
      "Difference between Duality and Complementation: Duality swaps operators and identity constants (+ ↔ ·, 0 ↔ 1) WITHOUT inverting variables. Complementation inverts both operators and variable literals according to De Morgan's laws."
    ]
  },
  {
    id: "adders",
    title: "Binary Adders: Half Adder & Full Adder",
    category: "Combinational Circuits",
    summary: "Core arithmetic building blocks of the Arithmetic Logic Unit (ALU) used to compute binary addition, subtraction (via 2's complement), and multiplication.",
    examSignificance: "High (10 Marks)",
    keyConcepts: [
      {
        name: "Half Adder (HA)",
        description: "Adds two 1-bit binary inputs (A, B) producing Sum (S) and Carry (C). Uses 1 XOR gate and 1 AND gate.",
        formulaOrTruthTable: "Sum S = A ⊕ B | Carry C = A · B"
      },
      {
        name: "Full Adder (FA)",
        description: "Adds three 1-bit inputs (A, B, and Carry-in Cin) to produce Sum and Carry-out. Essential for multi-bit cascaded addition.",
        formulaOrTruthTable: "S = A ⊕ B ⊕ Cin | Cout = AB + Cin(A ⊕ B)"
      },
      {
        name: "Constructing FA using Two Half Adders",
        description: "HA1 takes A, B → S1 = A⊕B, C1 = AB. HA2 takes S1, Cin → S = S1⊕Cin, C2 = S1·Cin. Final Cout = C1 + C2 (via OR gate).",
        formulaOrTruthTable: "Cout = AB + (A ⊕ B)Cin"
      }
    ],
    detailedNotes: [
      "Parallel Binary Adder (Ripple Carry Adder): An n-bit parallel adder is constructed by cascading n full adders, connecting Cout of stage i to Cin of stage i+1.",
      "Ripple Carry Delay: In an n-bit adder, the carry ripples sequentially from LSB to MSB, creating a propagation delay of 2n gate delays. Carry Look-Ahead Adders (CLA) eliminate this delay by generating carries in parallel using Generate (G = AB) and Propagate (P = A⊕B) signals.",
      "Serial Adder: Uses one Full Adder and a D flip-flop to add operands sequentially bit-by-bit over n clock cycles. Slower than parallel adder but uses minimal hardware."
    ]
  },
  {
    id: "mux-demux",
    title: "Multiplexers (MUX) & Demultiplexers (DEMUX)",
    category: "Combinational Circuits",
    summary: "Data routing circuits. A MUX selects 1 of 2ⁿ inputs to 1 output (Data Selector). A DEMUX routes 1 input to 1 of 2ⁿ outputs (Data Distributor).",
    examSignificance: "High (10 Marks)",
    keyConcepts: [
      {
        name: "Multiplexer (2ⁿ-to-1)",
        description: "Accepts 2ⁿ data inputs, n select control lines, and produces 1 output. 4:1 MUX requires 2 select lines (S1, S0). 8:1 MUX requires 3 select lines (S2, S1, S0).",
        formulaOrTruthTable: "4:1 MUX: Y = S̄1S̄0·I0 + S̄1S0·I1 + S1S̄0·I2 + S1S0·I3"
      },
      {
        name: "Demultiplexer (1-to-2ⁿ)",
        description: "Accepts 1 data input line, n select lines, and distributes the data bit to one of 2ⁿ output lines while other outputs remain inactive.",
        formulaOrTruthTable: "1:4 DEMUX: Y0 = S̄1S̄0·D, Y1 = S̄1S0·D, Y2 = S1S̄0·D, Y3 = S1S0·D"
      },
      {
        name: "Boolean Function Implementation via MUX",
        description: "Any Boolean function of n variables can be implemented using a 2ⁿ⁻¹-to-1 MUX by connecting n-1 variables to select lines and using the remaining variable as data inputs.",
        formulaOrTruthTable: "Example: 3-variable logic implemented with 4:1 MUX (2 select lines)"
      }
    ],
    detailedNotes: [
      "Strobe / Enable Input: Active-low or active-high control line used to enable or inhibit the entire multiplexer or demultiplexer IC, allowing easy IC cascading (e.g. creating a 16:1 MUX from two 8:1 MUX ICs).",
      "Demultiplexer vs Decoder: A decoder with an Enable input acts exactly like a Demultiplexer, where the Enable pin is used as the data input line and decoder inputs serve as select lines."
    ]
  },
  {
    id: "encoders-decoders",
    title: "Encoders, Priority Encoders & Decoders",
    category: "Combinational Circuits",
    summary: "Code translation circuits. Encoders convert discrete lines into binary code (2ⁿ to n). Decoders convert binary code into distinct active lines (n to 2ⁿ).",
    examSignificance: "Medium (3-5 Marks)",
    keyConcepts: [
      {
        name: "Decoders (n-to-2ⁿ)",
        description: "Decodes an n-bit binary input word to activate 1 of 2ⁿ output lines. Examples: 2:4 decoder, 3:8 decoder (74LS138), BCD-to-7-segment decoder.",
        formulaOrTruthTable: "3:8 Decoder: 3 inputs (A, B, C) → 8 outputs (Y0 to Y7). Each output represents a unique minterm."
      },
      {
        name: "Encoders (2ⁿ-to-n)",
        description: "Accepts 2ⁿ input lines and generates an n-bit binary output code. Constructed using OR gates.",
        formulaOrTruthTable: "Octal-to-Binary: 8 inputs → 3 outputs (requires 3 OR gates). Decimal-to-BCD: 10 inputs → 4 outputs (requires 4 OR gates)."
      },
      {
        name: "Priority Encoder",
        description: "Resolves ambiguity when multiple inputs are active at once by generating the code corresponding to the highest-order active input bit.",
        formulaOrTruthTable: "Example IC: 74LS148 (8-line to 3-line priority encoder)"
      }
    ],
    detailedNotes: [
      "Memory Address Decoding: Decoders are universally used in computer organization to select specific RAM memory chips or I/O ports based on high-order address bus bits.",
      "Encoder Limitations: Standard encoders produce erroneous outputs if more than one input is active or if all inputs are 0, which necessitated the invention of Priority Encoders with valid bit flags."
    ]
  },
  {
    id: "flip-flops",
    title: "Flip-Flops (SR, JK, D, T) & Sequential Logic",
    category: "Sequential Circuits",
    summary: "Bistable electronic multivibrator circuits capable of holding 1 bit of memory. Synchronized by clock edges and forming the basis for registers, counters, and RAM.",
    examSignificance: "High (10 Marks)",
    keyConcepts: [
      {
        name: "SR Flip-Flop",
        description: "Set-Reset latch with clock. S=1, R=0 sets Q=1; S=0, R=1 resets Q=0; S=0, R=0 holds previous state. S=1, R=1 is FORBIDDEN/INVALID.",
        formulaOrTruthTable: "Characteristic Equation: Qₙ₊₁ = S + R̄·Qₙ (with constraint S·R = 0)"
      },
      {
        name: "JK Flip-Flop & Race-Around Condition",
        description: "Eliminates the forbidden state: when J=1, K=1, output toggles. In level-clocked JK flip-flops, if clock pulse width > propagation delay, output toggles uncontrollably (Race-Around).",
        formulaOrTruthTable: "Characteristic Equation: Qₙ₊₁ = J·Q̄ₙ + K̄·Qₙ"
      },
      {
        name: "Master-Slave JK Flip-Flop",
        description: "Consists of two cascaded flip-flops: Master latches on clock HIGH, Slave transfers to output on clock LOW (inverter). Completely eliminates race-around condition.",
        formulaOrTruthTable: "Master active at CLK=1; Slave active at CLK=0"
      },
      {
        name: "D & T Flip-Flops",
        description: "D (Data) flip-flop stores input bit (Qₙ₊₁ = D). T (Toggle) flip-flop toggles output when T=1 (Qₙ₊₁ = T ⊕ Qₙ).",
        formulaOrTruthTable: "D: Qₙ₊₁ = D | T: Qₙ₊₁ = T ⊕ Qₙ"
      }
    ],
    detailedNotes: [
      "Difference between Latch and Flip-Flop: A latch is level-sensitive (transparent while clock/enable is active); a flip-flop is edge-triggered (samples data strictly on rising or falling voltage edge).",
      "Setup Time (ts) and Hold Time (th): Setup time is the minimum time data must remain stable before the active clock edge. Hold time is the minimum time data must remain stable after the clock edge."
    ]
  },
  {
    id: "registers",
    title: "Registers & Shift Register Configurations",
    category: "Sequential Circuits",
    summary: "High-speed temporary storage units inside the CPU constructed from a group of flip-flops connected with common clock and control gating.",
    examSignificance: "Medium (3-5 Marks)",
    keyConcepts: [
      {
        name: "Definition of Register",
        description: "An array of n flip-flops capable of storing an n-bit binary word. An 8-bit register uses 8 flip-flops sharing a clock.",
        formulaOrTruthTable: "Bit capacity = Number of flip-flops n"
      },
      {
        name: "Shift Register Classifications",
        description: "Classified by how data enters and leaves: 1. SISO (Serial-In Serial-Out), 2. SIPO (Serial-In Parallel-Out), 3. PISO (Parallel-In Serial-Out), 4. PIPO (Parallel-In Parallel-Out).",
        formulaOrTruthTable: "SISO: n clock cycles to load, n to read | PIPO: 1 clock cycle to load, 1 to read"
      },
      {
        name: "CPU Special Purpose Registers",
        description: "Program Counter (PC - holds address of next instruction), Instruction Register (IR - holds current opcode), Memory Address Register (MAR), Memory Data Register (MDR), Accumulator (AC).",
        formulaOrTruthTable: "PC → MAR → Memory Bus → MDR → IR"
      }
    ],
    detailedNotes: [
      "Universal Shift Register (e.g. 74LS194): A versatile register that can perform parallel load, shift right, shift left, and hold state based on 2-bit mode selection inputs (S1, S0).",
      "Registers vs Cache Memory: Registers reside directly inside the CPU datapath with zero bus latency. Cache memory is SRAM external to the datapath connected through high-speed internal buses."
    ]
  },
  {
    id: "computer-organization-architecture",
    title: "Digital Computers, Block Diagram & Architecture vs Organization",
    category: "Computer Architecture & Organization",
    summary: "System-level study of digital computers: functional units, hardware datapath, Von Neumann stored-program architecture, and the crucial distinction between Organization, Architecture, and Design.",
    examSignificance: "High (10 Marks)",
    keyConcepts: [
      {
        name: "Five Functional Units",
        description: "Input Unit, Memory Unit (Primary RAM/ROM & Secondary), Control Unit (CU), Arithmetic Logic Unit (ALU), and Output Unit.",
        formulaOrTruthTable: "CPU = ALU + Control Unit + Internal Register File"
      },
      {
        name: "Architecture vs Organization",
        description: "Architecture: Programmer-visible attributes (ISA, instructions, addressing modes, data types). Organization: Hardware operational units and interconnections realizing the architecture (datapath, control signals, cache size, bus clock).",
        formulaOrTruthTable: "Architecture = WHAT the computer does | Organization = HOW it does it"
      },
      {
        name: "Von Neumann Architecture & Bottleneck",
        description: "Stored-program concept where instructions and data reside in common memory. The shared memory bus restricts throughput because CPU speed far outpaces memory bus speed (Von Neumann Bottleneck).",
        formulaOrTruthTable: "Instruction Cycle: Fetch → Decode → Execute → Store"
      },
      {
        name: "Types of Digital Computers",
        description: "1. Supercomputers (ExaFLOPS, climate modeling), 2. Mainframes (High I/O, transaction processing, SWIFT/Banking), 3. Minicomputers (Mid-range multi-user servers), 4. Microcomputers (PCs, laptops, embedded SoC).",
        formulaOrTruthTable: "Super > Mainframe > Mini > Micro (in speed/scale)"
      }
    ],
    detailedNotes: [
      "Gerrit Blaauw's Principle: 'Architecture specifies the functional appearance of the system to the programmer; implementation (organization & design) specifies the logical and physical structures that achieve that appearance.'",
      "System Bus Architecture: Address Bus (unidirectional, CPU to memory), Data Bus (bidirectional, operand transfer), Control Bus (bidirectional, Read/Write/Interrupt signals)."
    ]
  }
];
