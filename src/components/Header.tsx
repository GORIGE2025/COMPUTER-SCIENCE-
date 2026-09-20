import React from "react";
import { BookOpen, Award, CheckCircle2, Clock, Calendar, Sparkles, Printer } from "lucide-react";

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenPrint: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, onOpenPrint }) => {
  const tabs = [
    { id: "strategy", label: "70-Mark Strategy", icon: Award },
    { id: "mcqs", label: "40 MCQs & Quiz", icon: CheckCircle2, badge: "All 40" },
    { id: "short", label: "Short Q&A (10)", icon: BookOpen },
    { id: "long", label: "Long Q&A (10)", icon: BookOpen },
    { id: "notes", label: "Unit 1 Study Notes", icon: BookOpen },
    { id: "outcomes", label: "Learning Outcomes", icon: CheckCircle2 },
    { id: "references", label: "Recommended Books", icon: BookOpen },
    { id: "ai-tutor", label: "AI Exam Tutor & Evaluator", icon: Sparkles, badge: "AI Powered" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Top Academic Notification Bar */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white px-4 py-2.5 text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 flex-wrap text-center sm:text-left">
            <span className="px-2 py-0.5 rounded-full bg-indigo-500/30 text-indigo-200 border border-indigo-400/30 font-medium">
              M.Sc. Computer Science (PG 1st Year)
            </span>
            <span className="text-slate-300 font-medium">Paper 1: Computer Organization (CD253-1-01R25)</span>
            <span className="hidden md:inline text-slate-500">•</span>
            <span className="text-amber-300 font-semibold">Unit 1: Basics of Digital Electronics</span>
          </div>

          <div className="flex items-center gap-4 text-slate-300 text-xs">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-indigo-400" />
              <span>Exam: 24.09.2026 (Thursday)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>2:00 PM – 5:00 PM</span>
            </div>
            <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded-md font-bold">
              70 Marks
            </span>
          </div>
        </div>
      </div>

      {/* Main Header Brand & Fast Action */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-indigo-800 flex items-center justify-center text-white font-black text-lg shadow-sm">
            DE
          </div>
          <div>
            <h1 className="text-lg sm:text-xl font-bold text-slate-900 leading-tight">
              Digital Electronics & Computer Organization Study Hub
            </h1>
            <p className="text-xs text-slate-500">
              Complete PG University Exam Portal: Unit 1 Model Q&A, 40 Official MCQs & Explanations
            </p>
          </div>
        </div>

        <button
          onClick={onOpenPrint}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 text-slate-700 bg-white hover:bg-slate-50 hover:text-indigo-600 text-xs font-semibold shadow-2xs transition-colors cursor-pointer"
          title="Open printable summary for fast pre-exam revision"
        >
          <Printer className="w-3.5 h-3.5 text-slate-500" />
          <span className="hidden sm:inline">Print / Quick Revision Sheet</span>
          <span className="sm:hidden">Print</span>
        </button>
      </div>

      {/* Responsive Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-4 overflow-x-auto scrollbar-none">
        <nav className="flex items-center gap-1 border-t border-slate-100 py-1.5 min-w-max">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  isActive
                    ? "bg-indigo-50 text-indigo-700 font-semibold shadow-2xs border border-indigo-200/60"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-indigo-600" : "text-slate-400"}`} />
                <span>{tab.label}</span>
                {tab.badge && (
                  <span
                    className={`px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
                      isActive ? "bg-indigo-200 text-indigo-800" : "bg-slate-200 text-slate-600"
                    }`}
                  >
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
