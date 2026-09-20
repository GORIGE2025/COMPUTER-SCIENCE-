import { ShortQuestion } from "../types";

export const shortQuestionsList: ShortQuestion[] = [
  {
    id: 1,
    question: "What are Basic logic gates?",
    recommendedMarks: 2,
    targetTimeMinutes: 3,
    conciseAnswer: "Basic logic gates are fundamental electronic circuits that perform elementary Boolean operations on one or more binary inputs to generate a single binary output. They are the elementary building blocks of all digital and computer systems.",
    bulletPoints: [
      "There are three primary basic logic gates: AND, OR, and NOT (Inverter).",
      "AND Gate: Performs logical multiplication (Y = A · B). Output is HIGH (1) only if all inputs are HIGH.",
      "OR Gate: Performs logical addition (Y = A + B). Output is HIGH (1) if at least one input is HIGH.",
      "NOT Gate: Performs logical inversion/complementation (Y = Ā). Output is the opposite of the input.",
      "All complex combinational and sequential digital systems are constructed from combinations of these basic gates."
    ],
    keyDiagramOrFormula: "AND: Y = A · B  |  OR: Y = A + B  |  NOT: Y = Ā",
    examinerTip: "Always list the three names clearly, state their algebraic expressions, and mention that NOT is unary (1 input) while AND and OR are multi-input.",
    topic: "Logic Gates"
  },
  {
    id: 2,
    question: "Write about multiplexers?",
    recommendedMarks: 3,
    targetTimeMinutes: 4,
    conciseAnswer: "A Multiplexer (MUX), often called a 'Data Selector', is a combinational logic circuit that accepts 2ⁿ input lines, 'n' selection control lines, and directs exactly one selected input to a single output line.",
    bulletPoints: [
      "Input/Output Ratio: 2ⁿ data inputs to 1 single data output, controlled by 'n' select lines.",
      "Formula: Number of select lines n = log₂(N), where N is number of data inputs (e.g., 4:1 MUX requires 2 select lines S₁, S₀).",
      "Function: Acts as a digitally controlled multi-position rotary switch.",
      "Enable Line (E or EN): An active-low or active-high strobe pin used to cascade smaller MUX ICs into larger ones.",
      "Applications: Data routing, parallel-to-serial conversion, time-division multiplexing (TDM), and Boolean function implementation without external logic gates."
    ],
    keyDiagramOrFormula: "For 4:1 MUX: Y = S̄₁S̄₀I₀ + S̄₁S₀I₁ + S₁S̄₀I₂ + S₁S₀I₃",
    examinerTip: "Remember to write the Boolean equation for a 2:1 or 4:1 MUX and highlight the relationship 2ⁿ inputs = n select lines.",
    topic: "Multiplexers"
  },
  {
    id: 3,
    question: "Explain about Encoders?",
    recommendedMarks: 3,
    targetTimeMinutes: 4,
    conciseAnswer: "An Encoder is a combinational digital circuit that performs the inverse operation of a decoder. It receives 2ⁿ (or fewer) active input lines and translates them into an 'n'-bit binary code at the output.",
    bulletPoints: [
      "Input/Output Ratio: Accepts 2ⁿ inputs and generates n outputs (e.g., Octal-to-Binary: 8 inputs → 3 outputs; Decimal-to-BCD: 10 inputs → 4 outputs).",
      "Operating Principle: Assumes that only one input line is active (HIGH) at any given instant under standard operation.",
      "Priority Encoder: An advanced variant that resolves ambiguity when two or more inputs are active simultaneously by encoding only the input with the highest priority.",
      "Internal Hardware: Constructed primarily using a set of OR gates.",
      "Key Applications: Keyboard encoders, interrupt controllers in microprocessors, and analog-to-digital flash conversion."
    ],
    keyDiagramOrFormula: "Octal-to-Binary: Y₂ = D₄+D₅+D₆+D₇, Y₁ = D₂+D₃+D₆+D₇, Y₀ = D₁+D₃+D₅+D₇",
    examinerTip: "Mention the '1-out-of-2ⁿ' active line principle and specify how many OR gates are needed (e.g. 4 OR gates for Decimal-to-BCD).",
    topic: "Encoders"
  },
  {
    id: 4,
    question: "What is the difference between encoder and decoder?",
    recommendedMarks: 3,
    targetTimeMinutes: 4,
    conciseAnswer: "Encoders and Decoders are complementary combinational circuits: an encoder compresses multiple discrete lines into coded binary representations, while a decoder expands a binary code to activate one of multiple unique output lines.",
    bulletPoints: [
      "Inputs/Outputs: Encoder has 2ⁿ inputs and n outputs; Decoder has n inputs and 2ⁿ outputs.",
      "Function: Encoder converts non-coded (e.g., decimal/octal) into binary code; Decoder converts binary code into recognizable non-coded output lines.",
      "Internal Logic: Encoders are constructed primarily using OR gates; Decoders are built using AND / NAND gates along with inverters.",
      "Data Selection lines: Decoders often utilize an Enable pin acting as a demultiplexer; Encoders do not require select lines.",
      "Examples: Encoder = Keyboard matrix encoder (74LS148); Decoder = Memory address decoder, 7-Segment LED driver (74LS138, 74LS47)."
    ],
    keyDiagramOrFormula: "Encoder: 2ⁿ Inputs ───► n Outputs  |  Decoder: n Inputs ───► 2ⁿ Outputs",
    examinerTip: "Draw a clean comparative 2-column table with at least 4 distinct parameters (Inputs/Outputs, Function, Logic Gates Used, Example Applications).",
    topic: "Encoders & Decoders"
  },
  {
    id: 5,
    question: "Write down the definition of computer?",
    recommendedMarks: 2,
    targetTimeMinutes: 3,
    conciseAnswer: "A computer is an electronic, programmable, digital data processing machine that accepts raw input data under the control of stored instructions (programs), processes this data arithmetically and logically at high speed, and produces meaningful output information while storing results for future use.",
    bulletPoints: [
      "Core Characteristics: Operates on the IPO (Input - Process - Output - Storage) cycle.",
      "Program Control: Governed by software instructions stored in internal memory (Von Neumann stored-program concept).",
      "Essential Operations: Data input, data storage, arithmetic/logic processing, output retrieval, and sequence control.",
      "Key Attributes: Extreme speed, near-perfect accuracy (GIGO - Garbage In, Garbage Out principle), massive storage capacity, diligence, and multi-purpose versatility."
    ],
    keyDiagramOrFormula: "[Input Unit] ──► [Central Processing Unit: CU + ALU + Registers] ──► [Output Unit]\n                          ▲             ▲\n                          └──── [Memory] ───┘",
    examinerTip: "Emphasize the stored-program capability and electronic nature rather than merely calling it a calculating machine.",
    topic: "Digital Computers"
  },
  {
    id: 6,
    question: "What is the difference between super computer and minicomputer?",
    recommendedMarks: 3,
    targetTimeMinutes: 4,
    conciseAnswer: "Supercomputers and minicomputers represent opposite ends of the computing power, cost, and architecture spectrum, engineered for completely different computational workloads.",
    bulletPoints: [
      "Processing Capability: Supercomputers are the fastest, most powerful machines in the world (measured in PFLOPS/EFLOPS with tens of thousands of parallel processors); Minicomputers (mid-range servers) have modest multi-core processors.",
      "Purpose & Workload: Supercomputers perform highly intensive scientific simulations (weather modeling, quantum mechanics, aerodynamics, nuclear research); Minicomputers handle mid-sized departmental business processing, database management, and manufacturing automation.",
      "Cost & Architecture: Supercomputers cost millions of dollars and require dedicated liquid/chilled infrastructure; Minicomputers are compact, affordable for small-to-mid businesses, and rack-mounted.",
      "Users: Supercomputers support thousands of concurrent batch processes on grand-challenge problems; Minicomputers typically serve 50–250 simultaneous network terminals.",
      "Examples: Supercomputer: PARAM Siddhi, Fugaku, Frontier; Minicomputer: DEC PDP-11, VAX-11, IBM AS/400."
    ],
    keyDiagramOrFormula: "Parameter: Supercomputer (High-Performance Parallel Clusters) vs Minicomputer (Mid-range Multi-user Server)",
    examinerTip: "Highlight speed metrics (FLOPS vs MIPS), cost difference, and real-world application examples for full marks.",
    topic: "Digital Computers"
  },
  {
    id: 7,
    question: "Explain about input and output unit?",
    recommendedMarks: 2,
    targetTimeMinutes: 3,
    conciseAnswer: "The Input and Output (I/O) units constitute the peripheral interface between human users/external physical environments and the central digital computer system.",
    bulletPoints: [
      "Input Unit: Accepts data and control instructions from outside sources, converts them from human-understandable or analog forms into binary digital code (0s and 1s) via transducers/encoders, and transfers them into main memory.",
      "Input Devices: Keyboard, mouse, scanner, optical mark reader (OMR), barcode reader, microphone.",
      "Output Unit: Takes processed binary information from main memory/CPU, decodes it into human-comprehensible visual, audio, or physical formats, and displays or prints it.",
      "Output Devices: Monitor (VDU), printers, plotters, speakers, digital-to-analog converters.",
      "I/O Interface: Necessary because CPU and peripherals differ drastically in data transfer speed, signal levels, and data formats."
    ],
    keyDiagramOrFormula: "External World ──(Transducer/ADC)──► Input Unit ──► CPU/Memory ──► Output Unit ──(DAC/Display)──► External World",
    examinerTip: "Don't just list devices—mention the essential conversion role (human form ↔ binary representation).",
    topic: "Computer Organization"
  },
  {
    id: 8,
    question: "Explain about control unit?",
    recommendedMarks: 3,
    targetTimeMinutes: 4,
    conciseAnswer: "The Control Unit (CU) is the 'nervous system' or supervisor of the computer CPU. It directs, coordinates, and synchronizes the flow of data and instructions across all functional units of the digital system.",
    bulletPoints: [
      "Primary Responsibility: Fetches instructions from memory, decodes operation codes (opcodes), and generates precise timing and control signals.",
      "Instruction Execution Cycle: Governs Fetch → Decode → Read Effective Address → Execute → Store Results.",
      "Core Registers Used: Program Counter (PC - stores next instruction address) and Instruction Register (IR - holds current opcode).",
      "Implementation Types: Hardwired Control (fixed combinational logic, fast execution, RISC-style) and Microprogrammed Control (micro-instructions in ROM/Control Memory, flexible, CISC-style).",
      "Crucial Distinction: CU does NOT process or alter data itself; it strictly commands other units (ALU, registers, memory, I/O) on how and when to act."
    ],
    keyDiagramOrFormula: "Clock + Status Flags + Opcode ──► [Control Unit] ──► Control Signals (Read/Write, ALU Op, MUX Select, Bus Enable)",
    examinerTip: "Always mention the two design architectures of the Control Unit: Hardwired vs Microprogrammed.",
    topic: "Computer Organization"
  },
  {
    id: 9,
    question: "Write about registers?",
    recommendedMarks: 2,
    targetTimeMinutes: 3,
    conciseAnswer: "A Register is a very high-speed, temporary internal storage location inside the CPU composed of a group of flip-flops (and gating logic) capable of storing an n-bit binary word.",
    bulletPoints: [
      "Bit Capacity: An n-bit register contains 'n' flip-flops, holding exactly n bits of binary data (e.g., 8-bit, 16-bit, 32-bit, 64-bit).",
      "Speed: Sits at the highest tier of the memory hierarchy with zero-bus-wait latency (faster than L1 Cache).",
      "Classification by Function: General Purpose Registers (GPRs - for temporary operand storage during computation) and Special Purpose Registers (SPRs - PC, IR, MAR, MDR, Accumulator, Stack Pointer).",
      "Classification by Shift Capability: SISO (Serial In Serial Out), SIPO, PISO, and PIPO (Parallel In Parallel Out).",
      "Role: Enables immediate operand accessibility during instruction pipelining and ALU operations."
    ],
    keyDiagramOrFormula: "Register = Cascaded Flip-Flops (FF₀ ... FFₙ₋₁) + Common Clock & Enable Controls",
    examinerTip: "Distinguish between General Purpose Registers (GPR) and Special Purpose Registers (PC, MAR, MDR, AC).",
    topic: "Registers"
  },
  {
    id: 10,
    question: "Draw and explain symbol truth table and operation of the basic logic gates.",
    recommendedMarks: 3,
    targetTimeMinutes: 5,
    conciseAnswer: "The three basic logic gates are AND, OR, and NOT. Each has a distinct graphic symbol, Boolean equation, and truth table defining its binary behavior.",
    bulletPoints: [
      "1. NOT Gate (Inverter): Unary operator. Output Y = Ā. Inverts input (0 becomes 1; 1 becomes 0).",
      "2. AND Gate: Multi-input operator. Output Y = A · B. Output is 1 only when BOTH inputs A=1 and B=1. If any input is 0, output is 0.",
      "3. OR Gate: Multi-input operator. Output Y = A + B. Output is 1 when EITHER A=1 OR B=1 (or both). Output is 0 only when both inputs are 0.",
      "Truth Table for AND: (0,0)=0 | (0,1)=0 | (1,0)=0 | (1,1)=1",
      "Truth Table for OR: (0,0)=0 | (0,1)=1 | (1,0)=1 | (1,1)=1",
      "Truth Table for NOT: (0)=1 | (1)=0"
    ],
    keyDiagramOrFormula: "NOT: [A]--|>o--[Y=A']  |  AND: [A,B]--D--[Y=AB]  |  OR: [A,B]--) )--[Y=A+B]",
    examinerTip: "Never skip the truth tables! A 3-mark question requires explicit truth tables with all binary input permutations.",
    topic: "Logic Gates"
  }
];
