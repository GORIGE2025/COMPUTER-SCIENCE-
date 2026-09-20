import React from "react";
import { mcqsList } from "../data/mcqs";
import { shortQuestionsList } from "../data/shortQuestions";
import { longQuestionsList } from "../data/longQuestions";
import { learningOutcomesList } from "../data/outcomesAndStrategy";
import { Printer, X, Download } from "lucide-react";

interface QuickPrintViewProps {
  onClose: () => void;
}

export const QuickPrintView: React.FC<QuickPrintViewProps> = ({ onClose }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-5xl w-full p-6 sm:p-8 shadow-2xl space-y-6 max-h-[92vh] overflow-y-auto print:max-h-none print:shadow-none print:p-0 print:border-none">
        {/* Floating Print Action Bar (Hidden in Print) */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-4 print:hidden">
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              One-Click University Exam Revision Sheet
            </h2>
            <p className="text-xs text-slate-500">
              Print or save as PDF for offline revision before entering the exam hall.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-lg text-xs flex items-center gap-2 shadow-xs cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg border border-slate-200 text-slate-500 hover:text-slate-800 hover:bg-slate-100 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Document Body */}
        <div className="space-y-6 text-slate-900 font-sans">
          {/* Document Header */}
          <div className="text-center border-b-2 border-slate-900 pb-4 space-y-1">
            <div className="text-xs uppercase font-bold tracking-widest text-slate-600">
              M.Sc. Computer Science (PG 1st Year) • Examination Rapid Revision Sheet
            </div>
            <h1 className="text-2xl font-black tracking-tight text-slate-900">
              Paper 1: Computer Organization (CD253-1-01R25)
            </h1>
            <div className="text-sm font-semibold text-indigo-900">
              Unit-1: Basics of Digital Electronics • 70 Marks (3 Hours)
            </div>
          </div>

          {/* 1. 40 MCQs Official Master Key */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold uppercase tracking-wider bg-slate-100 p-2 rounded border border-slate-300">
              1. 40 MCQs Official Answer Keys (Page 78 of Syllabus)
            </h3>
            <div className="grid grid-cols-5 sm:grid-cols-8 gap-1.5 text-[11px] font-mono">
              {mcqsList.map((m) => (
                <div key={m.id} className="p-1.5 border border-slate-300 rounded text-center">
                  <span className="text-slate-500">Q{m.id}:</span>{" "}
                  <strong className="text-indigo-800 font-bold">({m.correctAnswer})</strong>
                </div>
              ))}
            </div>
          </div>

          {/* 2. 10 Short Questions Key Formulas */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold uppercase tracking-wider bg-slate-100 p-2 rounded border border-slate-300">
              2. 10 Short Questions: Core Definitions & Formulas (2–3 Marks Each)
            </h3>
            <div className="space-y-3">
              {shortQuestionsList.map((q) => (
                <div key={q.id} className="border border-slate-200 p-3 rounded-lg text-xs space-y-1">
                  <div className="font-bold text-slate-900 flex items-center justify-between">
                    <span>Q{q.id}. {q.question}</span>
                    <span className="text-slate-500 font-mono text-[10px]">[{q.topic}]</span>
                  </div>
                  <p className="text-slate-700">{q.conciseAnswer}</p>
                  {q.keyDiagramOrFormula && (
                    <div className="p-1.5 bg-slate-50 border border-slate-200 font-mono text-[10px] text-indigo-900">
                      {q.keyDiagramOrFormula}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 3. 10 Long Questions Key Architectures */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold uppercase tracking-wider bg-slate-100 p-2 rounded border border-slate-300">
              3. 10 Long Questions (Section B: 10 Marks Each): Master Architectures
            </h3>
            <div className="space-y-3">
              {longQuestionsList.map((lq) => (
                <div key={lq.id} className="border border-slate-200 p-3 rounded-lg text-xs space-y-1.5">
                  <div className="font-bold text-slate-900">
                    LQ-{lq.id}: {lq.question}
                  </div>
                  <p className="text-slate-700 text-[11px] leading-relaxed">
                    <strong>Intro:</strong> {lq.introduction}
                  </p>
                  <div className="text-[11px] text-slate-600">
                    <strong>Key Sections:</strong> {lq.structuralSections.map((s) => s.heading).join(" ➔ ")}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Learning Outcomes Checklist */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold uppercase tracking-wider bg-slate-100 p-2 rounded border border-slate-300">
              4. The 5 Syllabus Learning Outcomes (1.15)
            </h3>
            <ul className="text-xs space-y-1 list-disc list-inside text-slate-700">
              {learningOutcomesList.map((lo) => (
                <li key={lo.id}>
                  <strong>{lo.title}:</strong> {lo.description}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
