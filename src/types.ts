export interface MCQ {
  id: number;
  question: string;
  options: {
    key: "a" | "b" | "c" | "d";
    text: string;
  }[];
  correctAnswer: "a" | "b" | "c" | "d";
  explanation: string;
  topic: string;
  syllabusRef: string;
}

export interface ShortQuestion {
  id: number;
  question: string;
  recommendedMarks: number; // e.g. 2 or 3 marks
  targetTimeMinutes: number; // e.g. 4 minutes
  conciseAnswer: string;
  bulletPoints: string[];
  keyDiagramOrFormula?: string;
  examinerTip: string;
  topic: string;
}

export interface LongQuestion {
  id: number;
  question: string;
  recommendedMarks: number; // e.g. 10 or 14 marks
  targetTimeMinutes: number; // e.g. 25-30 minutes
  introduction: string;
  structuralSections: {
    heading: string;
    content: string[];
    diagramOrTable?: {
      title: string;
      asciiArt?: string;
      tableData?: { headers: string[]; rows: string[][] };
      notes?: string;
    };
  }[];
  summary: string;
  examinerScoringCriteria: {
    criterion: string;
    marks: string;
  }[];
  commonMistakes: string[];
  topic: string;
}

export interface StudyTopic {
  id: string;
  title: string;
  category: "Digital Logic" | "Combinational Circuits" | "Sequential Circuits" | "Computer Architecture & Organization";
  summary: string;
  keyConcepts: {
    name: string;
    description: string;
    formulaOrTruthTable?: string;
  }[];
  detailedNotes: string[];
  examSignificance: "High (10 Marks)" | "Medium (3-5 Marks)" | "Essential MCQ/Fundamental";
}

export interface LearningOutcome {
  id: number;
  title: string;
  description: string;
  relevantTopics: string[];
  assessmentQuestions: {
    type: "Short" | "Long" | "MCQ";
    idRef: string;
    title: string;
  }[];
  bloomLevel: "Remember & Understand" | "Apply & Analyze" | "Design & Evaluate";
}

export interface ReferenceBook {
  title: string;
  author: string;
  edition?: string;
  relevanceToUnit1: string;
  mustReadChapters: string;
  keyStrengths: string;
}
