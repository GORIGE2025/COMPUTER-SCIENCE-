import React from "react";
import { examMasterStrategy } from "../data/outcomesAndStrategy";
import { Award, Clock, CheckCircle, Target, Sparkles, BookOpen, AlertCircle } from "lucide-react";

interface StrategyViewProps {
  onSelectTab: (tab: string) => void;
}

export const StrategyView: React.FC<StrategyViewProps> = ({ onSelectTab }) => {
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Hero Exam Preparation Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-6 sm:p-8 text-white shadow-md border border-slate-800">
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-semibold">
            <Award className="w-3.5 h-3.5" />
            <span>Master Exam Scoring Protocol: 70/70 Target</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            How to Score Maximum Marks in PG 1st Year Computer Organization
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            With upcoming exams scheduled in a short time, this strategic guide decodes the exact evaluation criteria, time allocation, and diagram presentation standards required to score 65+ out of 70 marks in Paper 1 (Unit 1: Basics of Digital Electronics).
          </p>

          <div className="pt-2 flex flex-wrap gap-3 text-xs">
            <button
              onClick={() => onSelectTab("mcqs")}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg shadow-xs transition cursor-pointer flex items-center gap-1.5"
            >
              <CheckCircle className="w-4 h-4" /> Practice 40 Official MCQs
            </button>
            <button
              onClick={() => onSelectTab("long")}
              className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 transition cursor-pointer flex items-center gap-1.5"
            >
              <BookOpen className="w-4 h-4" /> 10-Mark Model Long Answers
            </button>
            <button
              onClick={() => onSelectTab("ai-tutor")}
              className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold rounded-lg shadow-xs transition cursor-pointer flex items-center gap-1.5"
            >
              <Sparkles className="w-4 h-4" /> AI Answer Evaluator
            </button>
          </div>
        </div>
      </div>

      {/* 70-Marks Paper Blueprint Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-2xs space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md">
              Section A: Short Questions
            </span>
            <span className="text-lg font-black text-slate-800">20–30 Marks</span>
          </div>
          <h3 className="font-bold text-slate-900 text-base">Crisp, High-Yield Definitions</h3>
          <ul className="text-xs text-slate-600 space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-indigo-500 font-bold">•</span>
              <span><strong>Total Questions:</strong> 10 questions (usually 2 or 3 marks each).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-500 font-bold">•</span>
              <span><strong>Ideal Length:</strong> 4 to 6 concise bullet points per question.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-500 font-bold">•</span>
              <span><strong>Mandatory:</strong> Always write the Boolean formula, standard symbol, or mini 4-row truth table.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-500 font-bold">•</span>
              <span><strong>Allocated Time:</strong> 40–45 mins total (~4 mins each).</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-2xs space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
              Section B: Long Essay Questions
            </span>
            <span className="text-lg font-black text-slate-800">40–50 Marks</span>
          </div>
          <h3 className="font-bold text-slate-900 text-base">In-Depth Technical Mastery</h3>
          <ul className="text-xs text-slate-600 space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-emerald-500 font-bold">•</span>
              <span><strong>Total Questions:</strong> 4 or 5 questions (10 or 14 marks each).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-500 font-bold">•</span>
              <span><strong>Anatomy of a 10-Mark Answer:</strong> Intro (1m) + Schematic Diagram (3m) + Truth Table / Derivation (3m) + Working / Application (2m) + Conclusion (1m).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-500 font-bold">•</span>
              <span><strong>Allocated Time:</strong> 110 mins (~27 mins each).</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-2xs space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md">
              Examiner Psychology
            </span>
            <span className="text-lg font-black text-slate-800">Presentation</span>
          </div>
          <h3 className="font-bold text-slate-900 text-base">How Evaluators Distribute Marks</h3>
          <ul className="text-xs text-slate-600 space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-amber-500 font-bold">•</span>
              <span><strong>Visual First:</strong> Evaluators glance at diagrams and truth tables before reading paragraphs.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-500 font-bold">•</span>
              <span><strong>Boxed Equations:</strong> Highlight Boolean results (e.g. <code>S = A ⊕ B</code>) in neat rectangles.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-500 font-bold">•</span>
              <span><strong>Comparative Tables:</strong> Never write differences as paragraphs—always use a side-by-side 2-column table!</span>
            </li>
          </ul>
        </div>
      </div>

      {/* 3-Hour Exam Time-Management Schedule */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-2xs space-y-4">
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-indigo-600" />
          <h3 className="text-lg font-bold text-slate-900">
            3-Hour (180 Minutes) Clock Management Plan (2:00 PM – 5:00 PM)
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-1.5">
            <div className="text-xs font-bold text-indigo-600 uppercase">Phase 1 (10 mins)</div>
            <div className="text-sm font-semibold text-slate-900">2:00 PM – 2:10 PM</div>
            <p className="text-xs text-slate-600">
              Read the entire question paper calmly. Select the 4 or 5 long questions where you know the full circuit diagram and truth table best.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-1.5">
            <div className="text-xs font-bold text-indigo-600 uppercase">Phase 2 (45 mins)</div>
            <div className="text-sm font-semibold text-slate-900">2:10 PM – 2:55 PM</div>
            <p className="text-xs text-slate-600">
              Answer all Section A Short Questions. Keep answers strictly bulleted (3–5 points). Include mini-truth tables and Boolean equations.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-1.5">
            <div className="text-xs font-bold text-indigo-600 uppercase">Phase 3 (110 mins)</div>
            <div className="text-sm font-semibold text-slate-900">2:55 PM – 4:45 PM</div>
            <p className="text-xs text-slate-600">
              Complete the Section B Long Questions (~27 mins each). Draw diagrams first, construct full truth tables, and show step-by-step logic proofs.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-200 space-y-1.5">
            <div className="text-xs font-bold text-emerald-700 uppercase">Phase 4 (15 mins)</div>
            <div className="text-sm font-semibold text-emerald-900">4:45 PM – 5:00 PM</div>
            <p className="text-xs text-emerald-700">
              Final Revision: Check question numbering, underline key technical terms, confirm all pins/inputs in diagrams are labeled, and tie up loose ends.
            </p>
          </div>
        </div>
      </div>

      {/* Strategic Steps Details */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <Target className="w-5 h-5 text-indigo-600" />
          <span>Core Strategic Execution Blueprint</span>
        </h3>

        {examMasterStrategy[0].steps.map((step) => (
          <div key={step.number} className="bg-white rounded-xl border border-slate-200 p-5 shadow-2xs space-y-3">
            <div className="flex items-start gap-4">
              <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center font-black text-indigo-700 text-sm">
                {step.number}
              </span>
              <div className="space-y-1 flex-1">
                <h4 className="text-base font-bold text-slate-900">{step.heading}</h4>
                <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">{step.description}</p>
                <div className="mt-2.5 p-3 rounded-lg bg-amber-50/80 border border-amber-200 flex items-start gap-2 text-xs text-amber-900">
                  <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-semibold text-amber-950">University Examiner Pro Tip: </strong>
                    {step.proTip}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
