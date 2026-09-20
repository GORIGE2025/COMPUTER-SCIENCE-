import React, { useState } from "react";
import { studyTopicsList } from "../data/studyNotes";
import { BookOpen, Layers, CheckCircle2, Bookmark, ArrowRight } from "lucide-react";

interface StudyNotesViewProps {
  onNavigateToTopic?: (topicId: string) => void;
}

export const StudyNotesView: React.FC<StudyNotesViewProps> = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "Digital Logic",
    "Combinational Circuits",
    "Sequential Circuits",
    "Computer Architecture & Organization",
  ];

  const filteredTopics = selectedCategory === "All"
    ? studyTopicsList
    : studyTopicsList.filter((t) => t.category === selectedCategory);

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-2xs space-y-3">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-100 text-indigo-800">
                Unit-1: Basics of Digital Electronics
              </span>
              <span className="text-xs text-slate-500 font-medium">Textbook Synthesis</span>
            </div>
            <h2 className="text-xl font-bold text-slate-900 mt-1">
              Comprehensive High-Yield Study Notes
            </h2>
            <p className="text-xs text-slate-600">
              Rigorous, syllabus-aligned conceptual breakdowns with Boolean expressions, truth tables, and architectural insights.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-lg">
              {studyTopicsList.length} Core Modules
            </span>
          </div>
        </div>

        {/* Category Selector */}
        <div className="flex items-center gap-1.5 overflow-x-auto pt-2 border-t border-slate-100 text-xs">
          <span className="text-slate-500 font-medium mr-1 flex-shrink-0">Category:</span>
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setSelectedCategory(c)}
              className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
                selectedCategory === c
                  ? "bg-indigo-600 text-white shadow-2xs"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Topics Grid */}
      <div className="space-y-6">
        {filteredTopics.map((topic) => (
          <div
            key={topic.id}
            id={`note-${topic.id}`}
            className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs hover:border-indigo-200 transition-all space-y-5"
          >
            {/* Topic Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-700 text-[11px] font-bold">
                    {topic.category}
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded-md text-[11px] font-bold ${
                      topic.examSignificance.includes("High")
                        ? "bg-rose-50 text-rose-700 border border-rose-200"
                        : "bg-amber-50 text-amber-700 border border-amber-200"
                    }`}
                  >
                    Weightage: {topic.examSignificance}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">{topic.title}</h3>
              </div>
            </div>

            {/* Summary */}
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
              {topic.summary}
            </p>

            {/* Key Concept Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {topic.keyConcepts.map((kc, kIdx) => (
                <div
                  key={kIdx}
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 flex flex-col justify-between"
                >
                  <div className="space-y-1.5">
                    <h4 className="font-bold text-slate-900 text-xs flex items-center gap-1.5">
                      <Bookmark className="w-3.5 h-3.5 text-indigo-600" />
                      <span>{kc.name}</span>
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {kc.description}
                    </p>
                  </div>
                  {kc.formulaOrTruthTable && (
                    <div className="mt-2 p-2 rounded-lg bg-white border border-slate-200 font-mono text-[11px] text-indigo-900 break-words">
                      {kc.formulaOrTruthTable}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Detailed University Examination Notes */}
            <div className="p-4 rounded-xl bg-indigo-50/50 border border-indigo-100 space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-indigo-900 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-indigo-700" />
                <span>Deep Technical Notes & Examiner Highlights:</span>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {topic.detailedNotes.map((dn, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-2">
                    <ArrowRight className="w-3.5 h-3.5 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{dn}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
