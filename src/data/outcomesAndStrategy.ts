import { LearningOutcome, ReferenceBook } from "../types";

export interface ExamStrategySection {
  title: string;
  badge: string;
  keyAdvice: string;
  steps: {
    number: string;
    heading: string;
    description: string;
    proTip: string;
  }[];
}

export const examMasterStrategy: ExamStrategySection[] = [
  {
    title: "Understanding the 70-Marks University Examination Blueprint",
    badge: "Paper 1: Computer Organization (70 Marks / 180 Minutes)",
    keyAdvice: "In M.Sc. Computer Science PG 1st year examinations, evaluators reward structured presentation, accurate circuit diagrams, complete truth tables, and concise comparisons far more than unformatted blocks of text.",
    steps: [
      {
        number: "01",
        heading: "Mastering Part A: Short Answer Questions (20 - 30 Marks)",
        description: "Usually contains 10 compulsory questions carrying 2 or 3 marks each. Total time allocated should not exceed 40–45 minutes (approx. 4 minutes per question). Write crisp, 4 to 6 bullet points, state the mathematical/Boolean formula, and include a mini truth-table or symbol where applicable.",
        proTip: "Never leave a short question blank. If uncertain about full working, write the definition and standard formula to secure at least 1 to 1.5 marks."
      },
      {
        number: "02",
        heading: "Dominating Part B: Long Essay Questions (40 - 50 Marks)",
        description: "Usually requires answering 4 to 5 long questions carrying 10 marks (or 8–14 marks) each. Allocate 25–28 minutes per long question. Structure every long answer into: (1) Formal Definition & Concept, (2) Labeled Block/Circuit Diagram, (3) Mathematical/Boolean Derivation & Truth Table, (4) Step-by-Step Functional Working, (5) Comparative Table or Applications, and (6) Conclusion.",
        proTip: "Draw diagrams FIRST in your answer before writing paragraphs. University examiners skim the diagram and truth table first; an accurate diagram immediately anchors you in the 8-10 marks tier."
      },
      {
        number: "03",
        heading: "The 180-Minute Time Management Protocol (2:00 PM – 5:00 PM)",
        description: "• 02:00 PM – 02:10 PM (10 mins): Question paper reading, selecting the best long questions to answer, marking key equations.\n• 02:10 PM – 02:55 PM (45 mins): Section A (Short questions 1 to 10).\n• 02:55 PM – 04:45 PM (110 mins): Section B (4 Long questions @ ~27 mins each).\n• 04:45 PM – 05:00 PM (15 mins): Final audit, verifying equation labels, numbering, and underlining key technical keywords.",
        proTip: "Keep a wristwatch on your desk. If a long question crosses 28 minutes, immediately write the summary paragraph and jump to the next question. Do not sacrifice a full 10-mark question for the tail end of another."
      },
      {
        number: "04",
        heading: "The 'High-Scoring PG Answer' Formatting Checklist",
        description: "1. Headings & Subheadings: Use clear underlined headings for every section.\n2. Boxed Equations: Draw neat rectangular boxes around final Boolean expressions (e.g. S = A ⊕ B, C = A·B).\n3. Two-Column Comparison Tables: Whenever asked 'difference between' (e.g. Full Adder vs Half Adder, Organization vs Architecture), ALWAYS use a ruled 2-column table with distinct parameter rows.\n4. Truth Tables: Write all 2ⁿ input permutations in standard binary progression (00, 01, 10, 11).",
        proTip: "Use technical terms like 'Stored-Program Concept', 'Bistable Multivibrator', 'Von Neumann Bottleneck', and 'Huntington Postulates'—these are trigger keywords for evaluators."
      }
    ]
  }
];

export const learningOutcomesList: LearningOutcome[] = [
  {
    id: 1,
    title: "Design Digital Electronic Circuits for Specific Operations",
    description: "Ability to synthesize, design, and interconnect digital hardware circuits (such as Half Adders, Full Adders, Multiplexers, Demultiplexers, and Encoders) to perform dedicated binary operations.",
    relevantTopics: ["Half Adder", "Full Adder", "Multiplexers (2:1, 4:1, 8:1)", "Encoders & Decoders"],
    bloomLevel: "Design & Evaluate",
    assessmentQuestions: [
      { type: "Long", idRef: "LQ-6", title: "Difference between Full Adder and Half Adder, and construction using Half Adders" },
      { type: "Short", idRef: "SQ-2", title: "Write about Multiplexers (Data Selector logic)" },
      { type: "Short", idRef: "SQ-3", title: "Explain about Encoders (Decimal to BCD)" },
      { type: "MCQ", idRef: "MCQ-30", title: "How many OR gates are required for Decimal-to-BCD encoder? (Ans: 4)" }
    ]
  },
  {
    id: 2,
    title: "Analyse Digital Electronic Circuits Using Mapping & Logic Tools",
    description: "Competency in analyzing combinational and sequential logic circuits using Boolean algebra theorems, truth tables, Huntington's postulates, De Morgan's laws, and the Duality principle.",
    relevantTopics: ["Boolean Algebra", "De Morgan's Theorems", "Duality Principle", "Truth Tables", "Universal Gate Synthesis"],
    bloomLevel: "Apply & Analyze",
    assessmentQuestions: [
      { type: "Long", idRef: "LQ-2", title: "Explain different types of logic gates with truth tables & Duality principle" },
      { type: "Long", idRef: "LQ-3", title: "Explain Boolean Algebra postulates and theorems" },
      { type: "MCQ", idRef: "MCQ-5", title: "Universal logic gates identification (NOR, NAND)" },
      { type: "MCQ", idRef: "MCQ-9", title: "OR operation properties in Boolean algebra (All of these)" }
    ]
  },
  {
    id: 3,
    title: "Apply the Fundamentals of Digital Electronics",
    description: "Practical application of elementary digital logic components—Basic Gates (AND, OR, NOT), Universal Gates (NAND, NOR), and bistable memory cells (Flip-Flops: SR, JK, D, T) in hardware systems.",
    relevantTopics: ["Basic Logic Gates", "Universal Gates", "Flip-Flops (SR, JK, D, T)", "Race-Around Condition"],
    bloomLevel: "Apply & Analyze",
    assessmentQuestions: [
      { type: "Short", idRef: "SQ-1", title: "What are Basic Logic Gates?" },
      { type: "Short", idRef: "SQ-10", title: "Symbol, truth table, and operation of basic logic gates" },
      { type: "Long", idRef: "LQ-4", title: "Explain about Flip-Flops (SR, JK, D, T, Master-Slave)" },
      { type: "MCQ", idRef: "MCQ-8", title: "Digital circuit that can store only one bit (Flip-flop)" }
    ]
  },
  {
    id: 4,
    title: "Understand Concepts and Techniques to Implement Complex Digital Systems",
    description: "Understanding intermediate and advanced sequential storage units, Registers (SISO, SIPO, PISO, PIPO), memory address registers (MAR, MDR), Program Counter, and CPU datapath registers.",
    relevantTopics: ["Registers", "Shift Registers", "Storage Cells", "Program Counter & Accumulator"],
    bloomLevel: "Remember & Understand",
    assessmentQuestions: [
      { type: "Short", idRef: "SQ-9", title: "Write about Registers (n-bit flip-flop storage)" },
      { type: "MCQ", idRef: "MCQ-15", title: "A register can be defined as group of flip-flops storing binary info" },
      { type: "MCQ", idRef: "MCQ-23", title: "Register holding address of next instruction (Program Counter)" },
      { type: "Long", idRef: "LQ-9", title: "Define digital computer with respect to hardware organization" }
    ]
  },
  {
    id: 5,
    title: "Understand the Basic Functioning and Design of Digital Computers",
    description: "Holistic grasp of digital computer architecture, block diagrams, CPU functional units (ALU, Control Unit), Von Neumann stored-program architecture, and the distinction between Organization, Architecture, and Design.",
    relevantTopics: ["Computer Organization", "Computer Architecture", "Computer Design", "Block Diagram of Digital Computer", "Classification of Computers"],
    bloomLevel: "Remember & Understand",
    assessmentQuestions: [
      { type: "Long", idRef: "LQ-1", title: "Explain Computer Organization and Computer Design" },
      { type: "Long", idRef: "LQ-5", title: "Explain the Functional Unit of a Computer" },
      { type: "Long", idRef: "LQ-8", title: "Explain the Block Diagram of Computer" },
      { type: "Long", idRef: "LQ-10", title: "Difference between Computer Organization and Computer Architecture" },
      { type: "MCQ", idRef: "MCQ-21", title: "CPU-Memory speed disparity known as Von Neumann Bottleneck" }
    ]
  }
];

export const referenceBooksList: ReferenceBook[] = [
  {
    title: "Computer System Architecture",
    author: "M. Morris Mano",
    edition: "3rd Edition (Pearson Education)",
    relevanceToUnit1: "Highest Priority (Primary Textbook for M.Sc. Computer Science)",
    mustReadChapters: "Chapter 1: Digital Logic Circuits (Gates, Boolean Algebra, Map Simplification, Combinational Circuits, Flip-Flops, Sequential Circuits) & Chapter 2: Digital Components (Integrated Circuits, Decoders, Multiplexers, Registers, Shift Registers, Memory Unit).",
    keyStrengths: "Crystal clear block diagrams, standard university notations, identical terminology to Indian PG exam papers, and comprehensive RTL register transfer representations."
  },
  {
    title: "Digital Logic and Computer Design",
    author: "M. Morris Mano",
    edition: "1st / Classic Edition (Prentice Hall)",
    relevanceToUnit1: "Essential for Unit 1 Logic Gates, Adders, and Combinational Circuits",
    mustReadChapters: "Chapter 2: Boolean Algebra & Logic Gates (Huntington's Postulates, Duality Principle) & Chapter 4: Combinational Logic (Half Adder, Full Adder, Subtractor) & Chapter 5: Combinational Logic with MSI & LSI (Multiplexers, Decoders, Encoders).",
    keyStrengths: "Provides the mathematical proofs for Boolean postulates, rigorous truth tables, and systematic gate minimization."
  },
  {
    title: "Computer Organization and Architecture: Designing for Performance",
    author: "William Stallings",
    edition: "10th / 11th Edition (Pearson)",
    relevanceToUnit1: "Authoritative Reference for Computer Organization vs Architecture",
    mustReadChapters: "Chapter 1: Basic Concepts and Computer Evolution (Definitions of Organization vs Architecture) & Chapter 3: A Top-Level View of Computer Function and Interconnection (Bus Systems, Memory-CPU Interconnection).",
    keyStrengths: "Globally acclaimed for differentiating between architectural visible attributes (ISA) and organizational realizations (datapath, pipelining, control)."
  },
  {
    title: "Computer Organization and Embedded Systems",
    author: "Carl Hamacher, Zvonko Vranesic, Safwat Zaky",
    edition: "6th Edition (McGraw-Hill)",
    relevanceToUnit1: "Excellent for Functional Units and Bus Architecture",
    mustReadChapters: "Chapter 1: Basic Structure of Computers (Functional Units, Basic Operational Concepts, Bus Structures, Software, Performance).",
    keyStrengths: "Very clear explanation of the five functional units and hardware instruction cycle (Fetch, Decode, Execute)."
  },
  {
    title: "Modern Digital Electronics",
    author: "R.P. Jain",
    edition: "4th Edition (Tata McGraw-Hill)",
    relevanceToUnit1: "Excellent Reference for Flip-Flops, Registers & Adders",
    mustReadChapters: "Chapter 3: Logic Gates & Families, Chapter 6: Combinational Logic Design (Adders, MUX, DEMUX, Encoders), Chapter 7: Flip-Flops (Race-Around Condition, Master-Slave JK).",
    keyStrengths: "Rich collection of solved university exam problems, step-by-step circuit synthesis, and clear wave timing diagrams for flip-flops."
  }
];
