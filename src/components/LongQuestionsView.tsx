import React, { useState } from "react";
import { longQuestionsList } from "../data/longQuestions";
import { Award, Copy, Check, ChevronDown, ChevronUp, AlertCircle, Sparkles, BookOpen } from "lucide-react";

interface LongQuestionsViewProps {
  onEvaluateWithAI?: (questionTitle: string) => void;
}

export const LongQuestionsView: React.FC<LongQuestionsViewProps> = ({ onEvaluateWithAI }) => {
  const [expandedId, setExpandedId] = useState<number>(1);
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId((prev) => (prev === id ? 0 : id));
  };

  const handleCopy = (lq: (typeof longQuestionsList)[0]) => {
    let text = `LONG QUESTION ${lq.id}: ${lq.question} (${lq.recommendedMarks} Marks)\n\n`;
    text += `INTRODUCTION:\n${lq.introduction}\n\n`;
    lq.structuralSections.forEach((s) => {
      text += `--- ${s.heading} ---\n`;
      text += s.content.join("\n") + "\n\n";
      if (s.diagramOrTable?.asciiArt) {
        text += `[Diagram / Architecture]\n${s.diagramOrTable.asciiArt}\n\n`;
      }
      if (s.diagramOrTable?.tableData) {
        text += `[Table: ${s.diagramOrTable.title}]\n`;
        text += s.diagramOrTable.tableData.headers.join(" | ") + "\n";
        s.diagramOrTable.tableData.rows.forEach((r) => {
          text += r.join(" | ") + "\n";
        });
        text += "\n";
      }
    });
    text += `SUMMARY:\n${lq.summary}\n`;
    navigator.clipboard.writeText(text);
    setCopiedId(lq.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-2xs space-y-3">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                1.16 Review Questions • Part II
              </span>
              <span className="text-xs text-slate-500 font-medium">Pages 73–74</span>
            </div>
            <h2 className="text-xl font-bold text-slate-900 mt-1">
              10 Long Answer Questions (Complete 10-Mark Model Solutions)
            </h2>
            <p className="text-xs text-slate-600">
              Structured to fetch maximum marks in Section B: Introduction, Labeled Architecture/Circuit Diagrams, Formatted Truth Tables, Derivations, and Comparative Tables.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-indigo-50 text-indigo-700 border border-indigo-200 text-xs font-bold rounded-lg">
              10 to 14 Marks Each
            </span>
          </div>
        </div>
      </div>

      {/* Questions Accordion List */}
      <div className="space-y-5">
        {longQuestionsList.map((lq) => {
          const isExpanded = expandedId === lq.id;

          return (
            <div
              key={lq.id}
              id={`lq-${lq.id}`}
              className="bg-white rounded-2xl border border-slate-200 shadow-2xs overflow-hidden transition-all"
            >
              {/* Card Header (Always Visible) */}
              <div
                onClick={() => toggleExpand(lq.id)}
                className={`p-5 flex items-start justify-between gap-4 cursor-pointer transition ${
                  isExpanded ? "bg-indigo-50/40 border-b border-indigo-100" : "hover:bg-slate-50"
                }`}
              >
                <div className="flex items-start gap-3 flex-1">
                  <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-600 to-indigo-800 text-white font-black text-sm flex items-center justify-center flex-shrink-0 shadow-2xs mt-0.5">
                    {lq.id}
                  </span>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap text-xs">
                      <span className="font-bold text-indigo-700 bg-indigo-100/70 px-2 py-0.5 rounded-md">
                        {lq.recommendedMarks} Marks
                      </span>
                      <span className="text-slate-400">•</span>
                      <span className="text-slate-500 font-medium">Target Time: {lq.targetTimeMinutes} mins</span>
                      <span className="text-slate-400">•</span>
                      <span className="text-slate-500 font-semibold">{lq.topic}</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                      {lq.question}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCopy(lq);
                    }}
                    className="p-2 rounded-lg border border-slate-200 hover:bg-white text-slate-600 text-xs font-medium cursor-pointer transition"
                    title="Copy full 10-mark model answer"
                  >
                    {copiedId === lq.id ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4 text-slate-400" />
                    )}
                  </button>

                  <div className="p-1 rounded-lg text-slate-400 hover:text-slate-700">
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </div>
              </div>

              {/* Expanded Answer Content */}
              {isExpanded && (
                <div className="p-5 sm:p-7 space-y-6 animate-fadeIn">
                  {/* Quick Action Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-indigo-600" />
                      <span className="font-semibold text-slate-800">
                        PG 1st Year Model Evaluation Blueprint
                      </span>
                    </div>

                    {onEvaluateWithAI && (
                      <button
                        onClick={() => onEvaluateWithAI(lq.question)}
                        className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg shadow-2xs flex items-center gap-1.5 cursor-pointer"
                      >
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Test My Answer on this Question</span>
                      </button>
                    )}
                  </div>

                  {/* Introduction Section */}
                  <div className="space-y-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-indigo-700">
                      1. Formal Academic Definition & Introduction
                    </div>
                    <div className="p-4 rounded-xl bg-indigo-50/50 border border-indigo-100 text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                      {lq.introduction}
                    </div>
                  </div>

                  {/* Structural Sections */}
                  <div className="space-y-6">
                    {lq.structuralSections.map((sec, sIdx) => (
                      <div key={sIdx} className="space-y-3">
                        <h4 className="text-sm sm:text-base font-bold text-slate-900 border-b border-slate-200 pb-1.5 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
                          <span>{sec.heading}</span>
                        </h4>

                        <div className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                          {sec.content.map((p, pIdx) => (
                            <p key={pIdx} className="whitespace-pre-line">{p}</p>
                          ))}
                        </div>

                        {/* ASCII Diagram or Circuit */}
                        {sec.diagramOrTable?.asciiArt && (
                          <div className="p-4 rounded-xl bg-slate-900 text-indigo-200 font-mono text-xs overflow-x-auto shadow-inner border border-slate-800">
                            <div className="text-[11px] font-sans font-bold text-indigo-400 mb-2 uppercase tracking-wider flex items-center justify-between">
                              <span>{sec.diagramOrTable.title}</span>
                              <span className="text-[10px] text-slate-400 font-normal">Schematic Architecture</span>
                            </div>
                            <pre className="leading-tight">{sec.diagramOrTable.asciiArt}</pre>
                          </div>
                        )}

                        {/* Formatted Truth Table / Comparison Table */}
                        {sec.diagramOrTable?.tableData && (
                          <div className="space-y-1.5">
                            <div className="text-xs font-bold text-slate-800">
                              {sec.diagramOrTable.title}:
                            </div>
                            <div className="overflow-x-auto rounded-xl border border-slate-200">
                              <table className="w-full text-left text-xs border-collapse">
                                <thead>
                                  <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-bold">
                                    {sec.diagramOrTable.tableData.headers.map((h, hIdx) => (
                                      <th key={hIdx} className="px-3.5 py-2.5">
                                        {h}
                                      </th>
                                    ))}
                                  </tr>
                                </thead>
                                <tbody>
                                  {sec.diagramOrTable.tableData.rows.map((r, rIdx) => (
                                    <tr
                                      key={rIdx}
                                      className={`border-b border-slate-100 ${
                                        rIdx % 2 === 0 ? "bg-white" : "bg-slate-50/70"
                                      }`}
                                    >
                                      {r.map((c, cIdx) => (
                                        <td key={cIdx} className="px-3.5 py-2 text-slate-800 font-medium">
                                          {c}
                                        </td>
                                      ))}
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Summary */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1 text-xs sm:text-sm">
                    <span className="font-bold text-slate-900 block">Conclusion & Real-World Impact:</span>
                    <p className="text-slate-700 leading-relaxed">{lq.summary}</p>
                  </div>

                  {/* University Examiner Scoring Breakdown & Common Mistakes */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 border-t border-slate-200">
                    <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200/80 space-y-2">
                      <div className="flex items-center gap-2 text-xs font-bold text-emerald-950 uppercase tracking-wider">
                        <Award className="w-4 h-4 text-emerald-700" />
                        <span>University Evaluator Mark Scheme:</span>
                      </div>
                      <ul className="space-y-1 text-xs text-emerald-900">
                        {lq.examinerScoringCriteria.map((c, idx) => (
                          <li key={idx} className="flex items-center justify-between gap-2 border-b border-emerald-100/60 pb-1">
                            <span>{c.criterion}</span>
                            <strong className="font-bold">{c.marks}</strong>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-4 rounded-xl bg-rose-50/70 border border-rose-200/80 space-y-2">
                      <div className="flex items-center gap-2 text-xs font-bold text-rose-950 uppercase tracking-wider">
                        <AlertCircle className="w-4 h-4 text-rose-600" />
                        <span>Common Student Pitfalls to Avoid:</span>
                      </div>
                      <ul className="space-y-1 text-xs text-rose-900 list-disc list-inside">
                        {lq.commonMistakes.map((m, idx) => (
                          <li key={idx} className="leading-relaxed">{m}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
