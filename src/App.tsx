import React, { useState } from "react";
import { Header } from "./components/Header";
import { StrategyView } from "./components/StrategyView";
import { MCQQuizView } from "./components/MCQQuizView";
import { ShortQuestionsView } from "./components/ShortQuestionsView";
import { LongQuestionsView } from "./components/LongQuestionsView";
import { StudyNotesView } from "./components/StudyNotesView";
import { OutcomesView } from "./components/OutcomesView";
import { ReferencesView } from "./components/ReferencesView";
import { AIEvaluatorView } from "./components/AIEvaluatorView";
import { QuickPrintView } from "./components/QuickPrintView";
import { BookOpen, CheckCircle, Award, Sparkles, Clock, Calendar, ShieldCheck } from "lucide-react";

export default function App() {
  const [activeTab, setActiveTab] = useState<string>("strategy");
  const [showPrintModal, setShowPrintModal] = useState<boolean>(false);
  const [aiInitialQuestion, setAiInitialQuestion] = useState<string>("");

  const handleNavigateToQuestion = (type: "Short" | "Long" | "MCQ", idRef: string) => {
    if (type === "Long") {
      setActiveTab("long");
      const num = parseInt(idRef.replace("LQ-", ""), 10);
      setTimeout(() => {
        const el = document.getElementById(`lq-${num}`);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else if (type === "Short") {
      setActiveTab("short");
      const num = parseInt(idRef.replace("SQ-", ""), 10);
      setTimeout(() => {
        const el = document.getElementById(`sq-${num}`);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else if (type === "MCQ") {
      setActiveTab("mcqs");
      const num = parseInt(idRef.replace("MCQ-", ""), 10);
      setTimeout(() => {
        const el = document.getElementById(`mcq-${num}`);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  const handleEvaluateWithAI = (questionTitle: string) => {
    setAiInitialQuestion(questionTitle);
    setActiveTab("ai-tutor");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900 antialiased selection:bg-indigo-500 selection:text-white">
      {/* App Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenPrint={() => setShowPrintModal(true)}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-6 sm:py-8">
        {activeTab === "strategy" && <StrategyView onSelectTab={setActiveTab} />}
        {activeTab === "mcqs" && <MCQQuizView />}
        {activeTab === "short" && <ShortQuestionsView />}
        {activeTab === "long" && (
          <LongQuestionsView onEvaluateWithAI={handleEvaluateWithAI} />
        )}
        {activeTab === "notes" && <StudyNotesView />}
        {activeTab === "outcomes" && (
          <OutcomesView onNavigateToQuestion={handleNavigateToQuestion} />
        )}
        {activeTab === "references" && <ReferencesView />}
        {activeTab === "ai-tutor" && (
          <AIEvaluatorView initialQuestion={aiInitialQuestion} />
        )}
      </main>

      {/* Printable Revision Sheet Modal */}
      {showPrintModal && (
        <QuickPrintView onClose={() => setShowPrintModal(false)} />
      )}

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-auto py-6 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-800">
              PG Examination Portal: Paper 1 Unit 1 (Basics of Digital Electronics)
            </span>
            <span className="hidden sm:inline">•</span>
            <span>M.Sc. Computer Science 1st Year</span>
          </div>

          <div className="flex items-center gap-4 text-slate-600 font-medium">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Syllabus Aligned
            </span>
            <span className="flex items-center gap-1">
              <Award className="w-4 h-4 text-indigo-600" />
              70 Marks Target
            </span>
            <button
              onClick={() => setShowPrintModal(true)}
              className="text-indigo-600 hover:text-indigo-800 font-bold underline cursor-pointer"
            >
              Print Quick Notes
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
