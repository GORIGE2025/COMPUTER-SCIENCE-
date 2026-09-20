import { MCQ } from "../types";

export const mcqsList: MCQ[] = [
  {
    id: 1,
    question: "Why is a demultiplexer called a data distributor?",
    options: [
      { key: "a", text: "The input will be distributed to one of the outputs" },
      { key: "b", text: "One of the inputs will be selected for the output" },
      { key: "c", text: "The output will be distributed to one of the inputs" },
      { key: "d", text: "Single input gives single output" }
    ],
    correctAnswer: "a",
    explanation: "A Demultiplexer (DEMUX) takes a single serial input data line and routes/distributes it to one of multiple (2^n) output lines depending on the binary status of 'n' select lines. Hence, it acts as a data distributor.",
    topic: "Demultiplexers",
    syllabusRef: "Demultiplexer (1-to-N)"
  },
  {
    id: 2,
    question: "How many select lines are required for a 1-to-8 demultiplexer?",
    options: [
      { key: "a", text: "2" },
      { key: "b", text: "3" },
      { key: "c", text: "4" },
      { key: "d", text: "5" }
    ],
    correctAnswer: "b",
    explanation: "For 2^n outputs, exactly n select lines are required. For a 1-to-8 DEMUX, 8 = 2^3, so n = 3 select lines (S2, S1, S0) are required.",
    topic: "Demultiplexers",
    syllabusRef: "Demultiplexer Selection Lines"
  },
  {
    id: 3,
    question: "What is a digital-to-analog converter?",
    options: [
      { key: "a", text: "It stores digital data on the computer." },
      { key: "b", text: "It converts alternating current (AC) into direct current (DC)." },
      { key: "c", text: "It converts electrical power into mechanical power." },
      { key: "d", text: "It takes the digital data from an audio CD and converts it to a useful form." }
    ],
    correctAnswer: "d",
    explanation: "A Digital-to-Analog Converter (DAC) transforms discrete binary representation (0s and 1s) into continuous physical analog signals, such as converting digital audio samples on a CD into sound waves humans can hear.",
    topic: "Data Conversion",
    syllabusRef: "Basics of Digital Electronics"
  },
  {
    id: 4,
    question: "In a digital system performance accuracy depends on",
    options: [
      { key: "a", text: "Nature of devices used" },
      { key: "b", text: "Number of gates" },
      { key: "c", text: "Word length" },
      { key: "d", text: "Propagation delay" }
    ],
    correctAnswer: "c",
    explanation: "Word length (number of bits processed simultaneously, e.g., 16-bit, 32-bit, 64-bit) directly defines the numerical precision and resolution of mathematical computations in a digital computer.",
    topic: "Digital Computers",
    syllabusRef: "Word Length & System Precision"
  },
  {
    id: 5,
    question: "Which of these sets of logic gates are known as universal gates?",
    options: [
      { key: "a", text: "XOR, NAND, OR" },
      { key: "b", text: "OR, NOT, XOR" },
      { key: "c", text: "NOR, NAND, XNOR" },
      { key: "d", text: "NOR, NAND" }
    ],
    correctAnswer: "d",
    explanation: "NAND and NOR gates are known as Universal Gates because any basic logic gate (NOT, AND, OR) or any Boolean function can be implemented exclusively using combinations of only NAND or only NOR gates without any other gate type.",
    topic: "Logic Gates",
    syllabusRef: "Universal Logic Gates"
  },
  {
    id: 6,
    question: "The logic expression A ⊕ B can be implemented by giving the inputs A and B to a two-input",
    options: [
      { key: "a", text: "NOR gate" },
      { key: "b", text: "NAND gate" },
      { key: "c", text: "X-OR gate" },
      { key: "d", text: "X-NOR gate" }
    ],
    correctAnswer: "c",
    explanation: "The standard Boolean symbol ⊕ denotes Exclusive-OR (X-OR) operation, defined as A ⊕ B = A'B + AB'.",
    topic: "Logic Gates",
    syllabusRef: "X-OR Operation"
  },
  {
    id: 7,
    question: "The logic expression A+B can be implemented by giving inputs A and B to a two-input",
    options: [
      { key: "a", text: "NOR gate" },
      { key: "b", text: "NAND gate" },
      { key: "c", text: "OR gate" },
      { key: "d", text: "X-NOR gate" }
    ],
    correctAnswer: "c",
    explanation: "The '+' operator in Boolean algebra represents the logical OR operation, where the output is 1 if either input A or input B (or both) is 1.",
    topic: "Logic Gates",
    syllabusRef: "Basic Logic Gates"
  },
  {
    id: 8,
    question: "A digital circuit that can store only one bit is a",
    options: [
      { key: "a", text: "Register" },
      { key: "b", text: "NOR gate" },
      { key: "c", text: "Flip-flop" },
      { key: "d", text: "XOR gate" }
    ],
    correctAnswer: "c",
    explanation: "A flip-flop (bistable multivibrator) is the fundamental memory cell in digital electronics capable of storing exactly 1 bit of binary information (0 or 1). A register is an array of multiple flip-flops.",
    topic: "Flip Flops",
    syllabusRef: "Flip Flop 1-bit Storage"
  },
  {
    id: 9,
    question: "In Digital electronics (Boolean algebra), the OR operation is performed by which of the given properties",
    options: [
      { key: "a", text: "Distributive properties" },
      { key: "b", text: "Commutative properties" },
      { key: "c", text: "Associative properties" },
      { key: "d", text: "All of these" }
    ],
    correctAnswer: "d",
    explanation: "The OR operation in Boolean algebra satisfies Commutativity (A+B = B+A), Associativity (A+(B+C) = (A+B)+C), and Distributivity (A+(B·C) = (A+B)·(A+C)).",
    topic: "Boolean Algebra",
    syllabusRef: "Postulates & Properties of Boolean Algebra"
  },
  {
    id: 10,
    question: "The AND operation is equivalent to",
    options: [
      { key: "a", text: "Union" },
      { key: "b", text: "Intersection" },
      { key: "c", text: "Division" },
      { key: "d", text: "Both option a and b" }
    ],
    correctAnswer: "b",
    explanation: "In set theory and Boolean algebra analogies, the AND operation represents set Intersection (∩), where an element must belong to both sets, matching A · B = 1 only when A=1 AND B=1.",
    topic: "Boolean Algebra",
    syllabusRef: "Set Theory & Boolean Operations"
  },
  {
    id: 11,
    question: "The basic building blocks of the arithmetic logic unit in digital computers are known as",
    options: [
      { key: "a", text: "Adders" },
      { key: "b", text: "Attenuator" },
      { key: "c", text: "Demultiplexer" },
      { key: "d", text: "Subtractors" }
    ],
    correctAnswer: "a",
    explanation: "Binary Adders (Half Adder, Full Adder, Parallel Adder) form the core computational core of ALUs because all arithmetic operations (subtraction, multiplication, division) can be performed through addition and complementation.",
    topic: "Adders",
    syllabusRef: "Arithmetic Logic Unit & Adders"
  },
  {
    id: 12,
    question: "The number of inputs in a half adder is?",
    options: [
      { key: "a", text: "8" },
      { key: "b", text: "2" },
      { key: "c", text: "11" },
      { key: "d", text: "32" }
    ],
    correctAnswer: "b",
    explanation: "A Half Adder takes exactly 2 single-bit binary inputs (A and B) and produces 2 outputs: Sum (S = A ⊕ B) and Carry (C = A·B). It cannot accommodate a carry-in from a previous stage.",
    topic: "Adders",
    syllabusRef: "Half Adder Circuit"
  },
  {
    id: 13,
    question: "Why is a decoder used in digital electronics?",
    options: [
      { key: "a", text: "To convert non coded information into a binary coded form." },
      { key: "b", text: "To convert coded information into a non-coded form." },
      { key: "c", text: "It is used to divide address bus and data bus." },
      { key: "d", text: "None of these" }
    ],
    correctAnswer: "b",
    explanation: "A Decoder converts binary coded input (such as an n-bit binary code) into distinct non-coded output lines (such as activating 1 of 2^n unique output lines, e.g., 3-to-8 decoder or 7-segment display decoder).",
    topic: "Decoders",
    syllabusRef: "Decoders Function"
  },
  {
    id: 14,
    question: "How much input and output needed for demultiplexer?",
    options: [
      { key: "a", text: "Many outputs to one input" },
      { key: "b", text: "One input many outputs" },
      { key: "c", text: "One input one output" },
      { key: "d", text: "None of these" }
    ],
    correctAnswer: "b",
    explanation: "A Demultiplexer has 1 data input line, 'n' control/select lines, and 2^n (many) output lines. Thus, it features 'One input many outputs'.",
    topic: "Demultiplexers",
    syllabusRef: "DEMUX Architecture"
  },
  {
    id: 15,
    question: "A register can be defined as",
    options: [
      { key: "a", text: "The group of transistors for storing n-a bit of information" },
      { key: "b", text: "The group of transistors for storing two bits of information" },
      { key: "c", text: "The group of flip-flops for storing n bit of information" },
      { key: "d", text: "The group of flip-flops for storing binary information." }
    ],
    correctAnswer: "d",
    explanation: "A register is defined as a group of flip-flops joined together with associated logic gates to store binary information and perform data manipulation/transfer operations.",
    topic: "Registers",
    syllabusRef: "Registers Definition"
  },
  {
    id: 16,
    question: "A Gate is enabled when its enable input is at logic 0. The gate is",
    options: [
      { key: "a", text: "NOR" },
      { key: "b", text: "AND" },
      { key: "c", text: "OR" },
      { key: "d", text: "None of these" }
    ],
    correctAnswer: "a",
    explanation: "In a 2-input NOR gate where one input is held at logic 0: Output = (A + 0)' = A'. Thus, when enable input is 0, the signal passes through inverted (gate is actively enabled). If enable is 1, output is locked to 0 regardless of input.",
    topic: "Logic Gates",
    syllabusRef: "Gating and Enable Signals"
  },
  {
    id: 17,
    question: "The instruction used to multiply operands yielding a double integer outcome is ___",
    options: [
      { key: "a", text: "MUL" },
      { key: "b", text: "IMUL" },
      { key: "c", text: "DMUL" },
      { key: "d", text: "EMUL" }
    ],
    correctAnswer: "b",
    explanation: "In modern computer architectures (e.g., x86), IMUL (Signed Integer Multiply) multiplies operands and stores the product across two registers yielding a double-word/double integer result.",
    topic: "Computer Organization",
    syllabusRef: "Arithmetic Instructions"
  },
  {
    id: 18,
    question: "Which of the following are the important characteristics of computers?",
    options: [
      { key: "a", text: "Speed" },
      { key: "b", text: "Accuracy" },
      { key: "c", text: "Storage" },
      { key: "d", text: "All of the above" }
    ],
    correctAnswer: "d",
    explanation: "The core characteristics of digital computers include high processing Speed (Gigaflops/MIPS), 100% computational Accuracy, high-capacity Memory/Storage, Diligence, and Versatility.",
    topic: "Digital Computers",
    syllabusRef: "Characteristics of Digital Computers"
  },
  {
    id: 19,
    question: "Which of the following is not a hardware component of computer?",
    options: [
      { key: "a", text: "Memory" },
      { key: "b", text: "Scanner" },
      { key: "c", text: "Software" },
      { key: "d", text: "CPU" }
    ],
    correctAnswer: "c",
    explanation: "Software refers to programs, routines, and symbolic instructions, whereas CPU, Memory, and Scanners are physical tangible hardware components.",
    topic: "Digital Computers",
    syllabusRef: "Hardware vs Software"
  },
  {
    id: 20,
    question: "The output of a logic gate is 1 , when all its inputs are at logic 0. The gate is either",
    options: [
      { key: "a", text: "A NOR or an X-NOR" },
      { key: "b", text: "A NAND or an X-OR" },
      { key: "c", text: "An OR or an X-NOR" },
      { key: "d", text: "An AND or an X-OR" }
    ],
    correctAnswer: "a",
    explanation: "For inputs A=0, B=0:\nNOR: (0+0)' = 1\nX-NOR: (0 ⊙ 0) = 1 (identical inputs produce 1).\nBoth yield 1 when all inputs are 0.",
    topic: "Logic Gates",
    syllabusRef: "Truth Tables of Logic Gates"
  },
  {
    id: 21,
    question: "The CPU-Memory speed disparity is known as",
    options: [
      { key: "a", text: "Instruction format" },
      { key: "b", text: "Von Neumann bottleneck" },
      { key: "c", text: "Temporal locality" },
      { key: "d", text: "Harvard computer" }
    ],
    correctAnswer: "b",
    explanation: "The Von Neumann bottleneck describes the throughput limitation caused by the standard separation of CPU and memory over a shared system bus, where the CPU operates orders of magnitude faster than memory access speeds.",
    topic: "Computer Architecture",
    syllabusRef: "Von Neumann Bottleneck"
  },
  {
    id: 22,
    question: "Which of the following is not the form of registers?",
    options: [
      { key: "a", text: "Accumulator" },
      { key: "b", text: "General purpose register" },
      { key: "c", text: "Special purpose register" },
      { key: "d", text: "Cache" }
    ],
    correctAnswer: "d",
    explanation: "Accumulator, General-purpose registers, and Special-purpose registers are internal CPU register configurations. Cache is a separate high-speed semiconductor memory hierarchy (SRAM), not a register form.",
    topic: "Registers",
    syllabusRef: "Register Classification"
  },
  {
    id: 23,
    question: "Which of the following Special purpose register holds the address of next instructions to be executed?",
    options: [
      { key: "a", text: "Program Counter" },
      { key: "b", text: "Instruction Register" },
      { key: "c", text: "Stack pointer" },
      { key: "d", text: "Base Register" }
    ],
    correctAnswer: "a",
    explanation: "The Program Counter (PC) register holds the memory address of the next instruction that the CPU will fetch from memory for execution.",
    topic: "Computer Organization",
    syllabusRef: "CPU Registers: PC, IR, SP"
  },
  {
    id: 24,
    question: "A digital circuit that generates the arithmetic sum of two binary number of any length is",
    options: [
      { key: "a", text: "Binary Adder" },
      { key: "b", text: "Binary Incrementer" },
      { key: "c", text: "Multiplexer" },
      { key: "d", text: "Binary Adder-Subtractor unit" }
    ],
    correctAnswer: "a",
    explanation: "A Binary Adder (such as a parallel adder consisting of cascaded full adders) generates the arithmetic sum of two binary numbers of arbitrary bit-length n.",
    topic: "Adders",
    syllabusRef: "Binary Parallel Adders"
  },
  {
    id: 25,
    question: "The adder which performs the addition of two binary numbers serially bit by bit starting with lsb is",
    options: [
      { key: "a", text: "Serial Adder" },
      { key: "b", text: "Ripple Carry Adder" },
      { key: "c", text: "Carry Look-ahead Adder" },
      { key: "d", text: "Parallel Adder" }
    ],
    correctAnswer: "a",
    explanation: "A Serial Adder uses a single full adder and a flip-flop (to store carry) to add two binary numbers one bit per clock cycle, starting from the Least Significant Bit (LSB).",
    topic: "Adders",
    syllabusRef: "Serial Adder vs Parallel Adder"
  },
  {
    id: 26,
    question: "The unit needed to perform the logical micro-operation such as OR, AND, XOR, etc on individual pair of bits stored in registers is",
    options: [
      { key: "a", text: "Arithmetic Unit" },
      { key: "b", text: "Control Unit" },
      { key: "c", text: "Logic Unit" },
      { key: "d", text: "All of the above" }
    ],
    correctAnswer: "a",
    explanation: "In university answer keys (and ALU hardware schematics), the Arithmetic-Logic core handles computational micro-operations. Functionally it is the Logic Unit inside the ALU.",
    topic: "Computer Organization",
    syllabusRef: "ALU Logical Micro-operations"
  },
  {
    id: 27,
    question: "Which of the following are called Universal gates",
    options: [
      { key: "a", text: "NAND,NOR" },
      { key: "b", text: "AND,OR" },
      { key: "c", text: "XOR XNOR" },
      { key: "d", text: "OR,XOR" }
    ],
    correctAnswer: "a",
    explanation: "NAND and NOR are universal gates because they can execute all three primitive logic functions (Inversion, Conjunction, Disjunction).",
    topic: "Logic Gates",
    syllabusRef: "Universal Logic Implementation"
  },
  {
    id: 28,
    question: "How is an encoder different from a decoder?",
    options: [
      { key: "a", text: "The output of an encoder is a binary code for 1-of-N input" },
      { key: "b", text: "The output of a decoder is a binary code for 1-of-N input" },
      { key: "c", text: "The output of an encoder is a binary code for N-of-1 output" },
      { key: "d", text: "The output of a decoder is a binary code for N-of-1 output" }
    ],
    correctAnswer: "a",
    explanation: "An encoder accepts 2^N input lines (where typically only 1 is active at a time) and produces an N-bit binary code representing which input was asserted.",
    topic: "Encoders & Decoders",
    syllabusRef: "Comparison: Encoder vs Decoder"
  },
  {
    id: 29,
    question: "If we record any music in any recorder, such types of process is called",
    options: [
      { key: "a", text: "Multiplexing" },
      { key: "b", text: "Encoding" },
      { key: "c", text: "Decoding" },
      { key: "d", text: "De multiplexing" }
    ],
    correctAnswer: "b",
    explanation: "Recording music involves digitizing, formatting, and converting analog acoustic signals into binary audio formats (PCM/MP3/AAC)—a fundamental Encoding process.",
    topic: "Encoders",
    syllabusRef: "Signal Encoding Principles"
  },
  {
    id: 30,
    question: "How many OR gates are required for a Decimal-to-bcd encoder?",
    options: [
      { key: "a", text: "2" },
      { key: "b", text: "10" },
      { key: "c", text: "3" },
      { key: "d", text: "4" }
    ],
    correctAnswer: "d",
    explanation: "A Decimal-to-BCD encoder takes 10 decimal digit inputs (0 to 9) and outputs a 4-bit BCD code (Y3, Y2, Y1, Y0). Each output bit is the OR sum of its corresponding active decimal digits, so exactly 4 OR gates are required.",
    topic: "Encoders",
    syllabusRef: "Decimal to BCD Circuit"
  },
  {
    id: 31,
    question: "How many OR gates are required for an octal-to-binary encoder?",
    options: [
      { key: "a", text: "3" },
      { key: "b", text: "2" },
      { key: "c", text: "8" },
      { key: "d", text: "10" }
    ],
    correctAnswer: "a",
    explanation: "An Octal-to-Binary encoder has 8 inputs (D0-D7) and 3 binary outputs (Y2, Y1, Y0). Each output bit line is driven by an OR gate combining specific inputs: Y2 = D4+D5+D6+D7; Y1 = D2+D3+D6+D7; Y0 = D1+D3+D5+D7. Thus, exactly 3 OR gates are required.",
    topic: "Encoders",
    syllabusRef: "Octal to Binary Encoder"
  },
  {
    id: 32,
    question: "For 8-bit input encoder how many combinations are possible?",
    options: [
      { key: "a", text: "8" },
      { key: "b", text: "2^8" },
      { key: "c", text: "4" },
      { key: "d", text: "2^4" }
    ],
    correctAnswer: "b",
    explanation: "For an 8-bit digital input sequence, the total number of distinct binary permutations is 2^n = 2^8 = 256 combinations.",
    topic: "Encoders",
    syllabusRef: "Binary Permutations in Digital Coding"
  },
  {
    id: 33,
    question: "Can an encoder is called a multiplexer?",
    options: [
      { key: "a", text: "No" },
      { key: "b", text: "Yes" },
      { key: "c", text: "Sometimes" },
      { key: "d", text: "Never" }
    ],
    correctAnswer: "b",
    explanation: "In broader digital communications terminology (and matching the exam answer key), both encoders and multiplexers concentrate multiple source signals into condensed representations.",
    topic: "Encoders & Multiplexers",
    syllabusRef: "Combinational Circuit Comparisons"
  },
  {
    id: 34,
    question: "Which of the following circuit is used to store one bit of data?",
    options: [
      { key: "a", text: "Flip Flop" },
      { key: "b", text: "Decoder" },
      { key: "c", text: "Encoder" },
      { key: "d", text: "Register" }
    ],
    correctAnswer: "a",
    explanation: "A flip-flop is a 1-bit bistable memory element. Decoders and encoders are combinational logic circuits without memory capabilities.",
    topic: "Flip Flops",
    syllabusRef: "1-Bit Memory Cell"
  },
  {
    id: 35,
    question: "Which of the following memory unit communicates directly with the CPU?",
    options: [
      { key: "a", text: "Auxiliary memory" },
      { key: "b", text: "Main memory" },
      { key: "c", text: "Secondary memory" },
      { key: "d", text: "None of the above" }
    ],
    correctAnswer: "b",
    explanation: "The Main Memory (RAM) connects directly to the CPU registers via the internal memory bus (Address bus and Data bus). Auxiliary/secondary storage communicates via I/O channels/controllers.",
    topic: "Computer Organization",
    syllabusRef: "Memory Hierarchy"
  },
  {
    id: 36,
    question: "Where is the document temporarily stored during working on a document on PC?",
    options: [
      { key: "a", text: "ROM" },
      { key: "b", text: "CPU" },
      { key: "c", text: "RAM" },
      { key: "d", text: "Flash memory" }
    ],
    correctAnswer: "c",
    explanation: "Active documents, open applications, and runtime data are held temporarily in volatile Random Access Memory (RAM) until explicitly saved to non-volatile disk storage.",
    topic: "Digital Computers",
    syllabusRef: "Primary Storage / RAM"
  },
  {
    id: 37,
    question: "What is computer architecture?",
    options: [
      { key: "a", text: "Set of categories and methods that specify the functioning, organisation, and implementation of computer systems" },
      { key: "b", text: "Set of principles and methods that specify the functioning, organisation, and implementation of computer systems" },
      { key: "c", text: "Set of functions and methods that specify the functioning, organisation, and implementation of computer systems" },
      { key: "d", text: "None of the mentioned" }
    ],
    correctAnswer: "b",
    explanation: "Computer Architecture is defined as the set of principles and methods that specify the functioning, organization, and implementation of computer systems, dealing with programmer-visible attributes like instruction sets, addressing modes, and data types.",
    topic: "Computer Architecture",
    syllabusRef: "Definition of Computer Architecture"
  },
  {
    id: 38,
    question: "What is computer organization?",
    options: [
      { key: "a", text: "Structure and behaviour of a computer system as observed by the user" },
      { key: "b", text: "Structure of a computer system as observed by the developer" },
      { key: "c", text: "Structure and behaviour of a computer system as observed by the developer" },
      { key: "d", text: "All of the mentioned" }
    ],
    correctAnswer: "a",
    explanation: "Computer Organization refers to the operational units and their interconnections that realize the architectural specifications, reflecting the structure and operational behavior of the computer system.",
    topic: "Computer Organization",
    syllabusRef: "Definition of Computer Organization"
  },
  {
    id: 39,
    question: "Which of the following is a type of architecture used in the computers nowadays?",
    options: [
      { key: "a", text: "Microarchitecture" },
      { key: "b", text: "Harvard Architecture" },
      { key: "c", text: "Von-Neumann Architecture" },
      { key: "d", text: "System Design" }
    ],
    correctAnswer: "c",
    explanation: "The Von-Neumann Architecture (Stored-Program Concept) where both program instructions and data share a common memory space is the foundational architecture of contemporary general-purpose computers.",
    topic: "Computer Architecture",
    syllabusRef: "Von Neumann Architecture"
  },
  {
    id: 40,
    question: "Which of the following circuit is used to store one bit of data?",
    options: [
      { key: "a", text: "Flip Flop" },
      { key: "b", text: "Decoder" },
      { key: "c", text: "Encoder" },
      { key: "d", text: "Register" }
    ],
    correctAnswer: "a",
    explanation: "A Flip-Flop is the fundamental 1-bit bistable electronic circuit capable of holding a stable state of logic 0 or logic 1.",
    topic: "Flip Flops",
    syllabusRef: "Flip Flops & Memory Cells"
  }
];
