import React, { useState } from "react";
import { shortQuestionsList } from "../data/shortQuestions";
import { CheckCircle, Copy, Check, Sparkles, Clock, AlertCircle } from "lucide-react";

export const ShortQuestionsView: React.FC = () => {
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const topics = ["All", "Logic Gates", "Multiplexers", "Encoders", "Encoders & Decoders", "Digital Computers", "Computer Organization", "Registers"];

  const filteredQuestions = activeFilter === "All"
    ? shortQuestionsList
    : shortQuestionsList.filter((q) => q.topic.includes(activeFilter) || activeFilter.includes(q.topic));

  const handleCopy = (q: (typeof shortQuestionsList)[0]) => {
    const text = `QUESTION ${q.id}: ${q.question} (${q.recommendedMarks} Marks)\n\nAnswer:\n${q.conciseAnswer}\n\nKey Points:\n${q.bulletPoints.map((b) => `• ${b}`).join("\n")}\n\nFormula/Truth Table: ${q.keyDiagramOrFormula || "N/A"}\nExaminer Tip: ${q.examinerTip}`;
    navigator.clipboard.writeText(text);
    setCopiedId(q.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-2xs space-y-3">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-100 text-indigo-800">
                1.16 Review Questions • Part I
              </span>
              <span className="text-xs text-slate-500 font-medium">Page 73</span>
            </div>
            <h2 className="text-xl font-bold text-slate-900 mt-1">
              10 Short Answer Questions (Model Answers & Evaluation Tips)
            </h2>
            <p className="text-xs text-slate-600">
              Structured to guarantee maximum marks (2 to 3 marks each) under standard university evaluation.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg">
            <Clock className="w-3.5 h-3.5 text-indigo-600" />
            <span>Target Speed: <strong>~3-4 mins</strong> / question</span>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pt-2 border-t border-slate-100 text-xs">
          <span className="text-slate-500 font-medium mr-1 flex-shrink-0">Topic:</span>
          {topics.map((t) => (
            <button
              key={t}
              onClick={() => setActiveFilter(t)}
              className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
                activeFilter === t
                  ? "bg-indigo-600 text-white shadow-2xs"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Questions List */}
      <div className="space-y-4">
        {filteredQuestions.map((q) => (
          <div
            key={q.id}
            id={`sq-${q.id}`}
            className="bg-white rounded-xl border border-slate-200 p-5 shadow-2xs hover:border-indigo-200 transition-all space-y-4"
          >
            {/* Header Meta */}
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="w-7 h-7 rounded-lg bg-indigo-600 text-white font-black text-xs flex items-center justify-center shadow-xs">
                  {q.id}
                </span>
                <span className="px-2.5 py-0.5 rounded-md bg-indigo-50 border border-indigo-200 text-indigo-800 text-xs font-bold">
                  {q.recommendedMarks} Marks
                </span>
                <span className="text-xs text-slate-500 font-medium">{q.topic}</span>
              </div>

              <button
                onClick={() => handleCopy(q)}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md border border-slate-200 hover:bg-slate-50 text-slate-600 text-xs font-medium cursor-pointer transition"
                title="Copy model answer for revision notes"
              >
                {copiedId === q.id ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                    <span>Copy Answer</span>
                  </>
                )}
              </button>
            </div>

            {/* Question Heading */}
            <h3 className="text-base font-bold text-slate-900 leading-snug">
              {q.question}
            </h3>

            {/* Core Definition */}
            <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
              {q.conciseAnswer}
            </div>

            {/* Key Bullet Points */}
            <div className="space-y-1.5">
              <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Exam Scoring Key Points:
              </div>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {q.bulletPoints.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Diagram / Formula preview */}
            {q.keyDiagramOrFormula && (
              <div className="p-3 rounded-lg bg-indigo-950 text-indigo-100 font-mono text-xs border border-indigo-900 overflow-x-auto">
                <div className="text-[10px] text-indigo-400 uppercase font-sans font-bold mb-1">
                  Formula / Logic Representation:
                </div>
                <div className="whitespace-pre-wrap">{q.keyDiagramOrFormula}</div>
              </div>
            )}

            {/* Examiner Tip */}
            <div className="p-3 rounded-lg bg-amber-50/80 border border-amber-200/80 text-xs text-amber-950 flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="font-semibold text-amber-950">University Evaluator Checklist: </strong>
                {q.examinerTip}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
