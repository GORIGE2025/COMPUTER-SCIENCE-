import React, { useState } from "react";
import { learningOutcomesList } from "../data/outcomesAndStrategy";
import { CheckCircle2, Circle, Target, Award, ArrowRight, ExternalLink } from "lucide-react";

interface OutcomesViewProps {
  onNavigateToQuestion: (type: "Short" | "Long" | "MCQ", idRef: string) => void;
}

export const OutcomesView: React.FC<OutcomesViewProps> = ({ onNavigateToQuestion }) => {
  const [completedOutcomes, setCompletedOutcomes] = useState<Record<number, boolean>>({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });

  const toggleOutcome = (id: number) => {
    setCompletedOutcomes((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const completedCount = Object.values(completedOutcomes).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / learningOutcomesList.length) * 100);

  return (
    <div className="space-y-6">
      {/* Top Banner & Progress Tracker */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-2xs space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-100 text-indigo-800">
                1.15 OUTCOMES
              </span>
              <span className="text-xs text-slate-500 font-medium">Page 73 of Uploaded Syllabus</span>
            </div>
            <h2 className="text-xl font-bold text-slate-900 mt-1">
              Curriculum Learning Outcomes & Self-Readiness Tracker
            </h2>
            <p className="text-xs text-slate-600">
              Upon successful completion of Unit-1, students must demonstrate competencies across these 5 fundamental educational outcomes.
            </p>
          </div>

          <div className="text-right sm:border-l sm:border-slate-200 sm:pl-4">
            <div className="text-xs text-slate-500 font-medium">Syllabus Mastery</div>
            <div className="text-2xl font-black text-indigo-600">
              {progressPercent}% <span className="text-xs text-slate-400 font-normal">({completedCount}/5 Ready)</span>
            </div>
          </div>
        </div>

        {/* Visual Progress Bar */}
        <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
          <div
            className="bg-gradient-to-r from-indigo-600 to-emerald-500 h-full transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Outcomes Cards List */}
      <div className="space-y-4">
        {learningOutcomesList.map((outcome) => {
          const isDone = Boolean(completedOutcomes[outcome.id]);

          return (
            <div
              key={outcome.id}
              className={`bg-white rounded-2xl border p-5 sm:p-6 shadow-2xs transition-all ${
                isDone ? "border-emerald-300 bg-emerald-50/15" : "border-slate-200"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <button
                    onClick={() => toggleOutcome(outcome.id)}
                    className="mt-0.5 text-slate-400 hover:text-emerald-600 transition cursor-pointer"
                    title={isDone ? "Mark as pending" : "Mark as mastered"}
                  >
                    {isDone ? (
                      <CheckCircle2 className="w-6 h-6 text-emerald-600 fill-emerald-100" />
                    ) : (
                      <Circle className="w-6 h-6 text-slate-300" />
                    )}
                  </button>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 flex-wrap text-xs">
                      <span className="font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-md">
                        Outcome #{outcome.id}
                      </span>
                      <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-semibold">
                        Bloom's Level: {outcome.bloomLevel}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                      {outcome.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {outcome.description}
                    </p>

                    {/* Relevant Topics */}
                    <div className="flex items-center gap-1.5 flex-wrap pt-1 text-xs">
                      <span className="text-slate-500 font-medium">Mapped Topics:</span>
                      {outcome.relevantTopics.map((t, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded-md bg-slate-50 border border-slate-200 text-slate-700 text-[11px] font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Assessment Questions Linked */}
              <div className="mt-4 pt-3 border-t border-slate-100">
                <div className="text-xs font-bold text-slate-700 mb-2 flex items-center gap-1.5">
                  <Target className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Mapped Review Questions from Syllabus:</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {outcome.assessmentQuestions.map((aq, aIdx) => (
                    <div
                      key={aIdx}
                      onClick={() => onNavigateToQuestion(aq.type, aq.idRef)}
                      className="p-2.5 rounded-lg bg-slate-50 hover:bg-indigo-50 border border-slate-200 hover:border-indigo-300 transition flex items-center justify-between gap-2 cursor-pointer text-xs group"
                    >
                      <div className="flex items-center gap-2 overflow-hidden">
                        <span
                          className={`px-1.5 py-0.5 rounded text-[10px] font-bold uppercase flex-shrink-0 ${
                            aq.type === "Long"
                              ? "bg-purple-100 text-purple-800"
                              : aq.type === "Short"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-amber-100 text-amber-800"
                          }`}
                        >
                          {aq.type}
                        </span>
                        <span className="truncate text-slate-800 font-medium group-hover:text-indigo-900">
                          {aq.title}
                        </span>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-600 flex-shrink-0" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
