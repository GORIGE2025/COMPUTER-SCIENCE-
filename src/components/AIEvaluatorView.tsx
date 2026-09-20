import React, { useState } from "react";
import { Sparkles, Send, Award, CheckCircle2, AlertTriangle, Lightbulb, RefreshCw, BookOpen, Bot } from "lucide-react";

interface AIEvaluatorViewProps {
  initialQuestion?: string;
}

export const AIEvaluatorView: React.FC<AIEvaluatorViewProps> = ({ initialQuestion = "" }) => {
  const [activeSubTab, setActiveSubTab] = useState<"ask" | "evaluate">("ask");

  // Ask AI State
  const [query, setQuery] = useState(initialQuestion);
  const [askLoading, setAskLoading] = useState(false);
  const [askResponse, setAskResponse] = useState<string>("");
  const [askHistory, setAskHistory] = useState<{ role: "user" | "assistant"; text: string }[]>([]);

  // Answer Evaluator State
  const [evalQuestion, setEvalQuestion] = useState(initialQuestion || "Explain the difference between Full Adder and Half Adder. Design a Full Adder using two Half Adders.");
  const [evalStudentAnswer, setEvalStudentAnswer] = useState("");
  const [evalMarks, setEvalMarks] = useState<number>(10);
  const [evalLoading, setEvalLoading] = useState(false);
  const [evalResult, setEvalResult] = useState<{
    scoreObtained: number;
    maxMarks: number;
    grade: string;
    strengths: string[];
    missingElements: string[];
    examinerFeedback: string;
    modelImprovementTips: string[];
  } | null>(null);

  const samplePrompts = [
    "How to get full 10/10 marks on the Full Adder question?",
    "Explain the Race-Around condition in JK flip-flop and how Master-Slave solves it",
    "What is the difference between Computer Architecture and Computer Organization?",
    "Show step-by-step how to implement an OR gate using only NAND gates",
    "Explain the Von Neumann Bottleneck with a neat schematic diagram"
  ];

  const handleAskSubmit = async (textToSend?: string) => {
    const questionText = textToSend || query;
    if (!questionText.trim() || askLoading) return;

    setAskLoading(true);
    setAskResponse("");

    const newHistory = [...askHistory, { role: "user" as const, text: questionText }];
    setAskHistory(newHistory);
    if (!textToSend) setQuery("");

    try {
      const res = await fetch("/api/exam-ai/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: questionText }),
      });

      if (!res.ok) {
        throw new Error(`Server returned ${res.status}`);
      }

      const data = await res.json();
      setAskResponse(data.answer);
      setAskHistory((prev) => [...prev, { role: "assistant" as const, text: data.answer }]);
    } catch (err: any) {
      const errorMsg = "Unable to connect to AI Exam Tutor. Please ensure your GEMINI_API_KEY is configured in Settings.";
      setAskResponse(errorMsg);
      setAskHistory((prev) => [...prev, { role: "assistant" as const, text: errorMsg }]);
    } finally {
      setAskLoading(false);
    }
  };

  const handleEvaluateSubmit = async () => {
    if (!evalQuestion.trim() || !evalStudentAnswer.trim() || evalLoading) return;

    setEvalLoading(true);
    setEvalResult(null);

    try {
      const res = await fetch("/api/exam-ai/evaluate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: evalQuestion,
          studentAnswer: evalStudentAnswer,
          maxMarks: evalMarks,
        }),
      });

      if (!res.ok) {
        throw new Error(`Evaluation failed with status ${res.status}`);
      }

      const data = await res.json();
      setEvalResult(data);
    } catch (err: any) {
      setEvalResult({
        scoreObtained: 0,
        maxMarks: evalMarks,
        grade: "Evaluation Error",
        strengths: ["Submitted for review"],
        missingElements: ["Unable to contact server evaluation engine"],
        examinerFeedback: "Please check your network and Gemini API configuration in Settings.",
        modelImprovementTips: ["Ensure server is reachable"],
      });
    } finally {
      setEvalLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-2xs space-y-3">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-100 text-indigo-800 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>AI Powered Study Assistant</span>
              </span>
              <span className="text-xs text-slate-500 font-medium">Gemini 2.5 Flash</span>
            </div>
            <h2 className="text-xl font-bold text-slate-900 mt-1">
              PG Examination AI Tutor & Answer Evaluator
            </h2>
            <p className="text-xs text-slate-600">
              Ask doubts on Unit 1 Basics of Digital Electronics, or paste your practice answers to receive university examiner grading and feedback.
            </p>
          </div>

          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
            <button
              onClick={() => setActiveSubTab("ask")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition ${
                activeSubTab === "ask"
                  ? "bg-white text-indigo-700 shadow-2xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Ask AI Tutor
            </button>
            <button
              onClick={() => setActiveSubTab("evaluate")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition ${
                activeSubTab === "evaluate"
                  ? "bg-white text-indigo-700 shadow-2xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Evaluate My Answer
            </button>
          </div>
        </div>
      </div>

      {/* Sub-Tab 1: Ask AI Exam Tutor */}
      {activeSubTab === "ask" && (
        <div className="space-y-4 animate-fadeIn">
          {/* Quick Prompts */}
          <div className="space-y-1.5">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Recommended High-Yield Exam Questions:
            </div>
            <div className="flex flex-wrap gap-2">
              {samplePrompts.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setQuery(p);
                    handleAskSubmit(p);
                  }}
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50 text-slate-700 hover:text-indigo-900 text-xs font-medium transition cursor-pointer text-left"
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          {/* Chat History & Streamed Output */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-2xs space-y-4 min-h-[300px]">
            {askHistory.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12 text-center text-slate-400 space-y-2">
                <Bot className="w-12 h-12 text-slate-300" />
                <p className="text-sm font-medium text-slate-600">
                  Ask any question on Unit 1: Basics of Digital Electronics
                </p>
                <p className="text-xs text-slate-400 max-w-md">
                  Get high-scoring university format answers with Boolean equations, truth tables, and exam presentation tips.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {askHistory.map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex items-start gap-3 ${
                      item.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    {item.role === "assistant" && (
                      <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center flex-shrink-0 text-xs font-bold mt-1">
                        AI
                      </div>
                    )}
                    <div
                      className={`max-w-3xl p-4 rounded-2xl text-xs sm:text-sm leading-relaxed whitespace-pre-wrap ${
                        item.role === "user"
                          ? "bg-indigo-600 text-white font-medium rounded-tr-xs"
                          : "bg-slate-50 border border-slate-200 text-slate-800 rounded-tl-xs"
                      }`}
                    >
                      {item.text}
                    </div>
                  </div>
                ))}

                {askLoading && (
                  <div className="flex items-center gap-2 text-xs text-indigo-600 font-semibold p-3 bg-indigo-50/50 rounded-xl border border-indigo-100">
                    <RefreshCw className="w-4 h-4 animate-spin text-indigo-600" />
                    <span>Synthesizing university exam-grade solution with diagrams & truth tables...</span>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Input Bar */}
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleAskSubmit();
              }}
              placeholder="Ask about Logic Gates, Flip-Flops, Adders, MUX, Computer Organization..."
              className="flex-1 px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-hidden shadow-2xs"
            />
            <button
              onClick={() => handleAskSubmit()}
              disabled={askLoading || !query.trim()}
              className="px-5 py-3 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-bold rounded-xl shadow-xs transition flex items-center gap-1.5 cursor-pointer text-sm"
            >
              <Send className="w-4 h-4" />
              <span>Ask</span>
            </button>
          </div>
        </div>
      )}

      {/* Sub-Tab 2: Answer Evaluator */}
      {activeSubTab === "evaluate" && (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs space-y-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Question to Evaluate:
              </label>
              <input
                type="text"
                value={evalQuestion}
                onChange={(e) => setEvalQuestion(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-xs sm:text-sm font-medium focus:ring-2 focus:ring-indigo-500 focus:outline-hidden"
              />
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-slate-700">Target Marks:</span>
              {[2, 3, 5, 8, 10, 14].map((m) => (
                <button
                  key={m}
                  onClick={() => setEvalMarks(m)}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                    evalMarks === m
                      ? "bg-indigo-600 text-white"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {m} Marks
                </button>
              ))}
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Paste or Type Your Answer:
                </label>
                <span className="text-xs text-slate-400">
                  {evalStudentAnswer.length} characters
                </span>
              </div>
              <textarea
                rows={7}
                value={evalStudentAnswer}
                onChange={(e) => setEvalStudentAnswer(e.target.value)}
                placeholder="Write your answer here (e.g. definitions, logic equations, description of truth table and circuits)..."
                className="w-full p-4 rounded-xl border border-slate-300 bg-white text-xs sm:text-sm leading-relaxed focus:ring-2 focus:ring-indigo-500 focus:outline-hidden"
              />
            </div>

            <button
              onClick={handleEvaluateSubmit}
              disabled={evalLoading || !evalStudentAnswer.trim()}
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-bold rounded-xl shadow-xs transition flex items-center justify-center gap-2 cursor-pointer text-sm"
            >
              {evalLoading ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Evaluating Against University Exam Standards...</span>
                </>
              ) : (
                <>
                  <Award className="w-4 h-4" />
                  <span>Evaluate My Answer & Get Examiner Score</span>
                </>
              )}
            </button>
          </div>

          {/* Evaluator Result Display */}
          {evalResult && (
            <div className="bg-white rounded-2xl border border-indigo-200 p-6 shadow-md space-y-5 animate-fadeIn">
              {/* Score Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-100 text-indigo-800">
                    Official Examiner Evaluation
                  </span>
                  <h3 className="text-xl font-black text-slate-900 mt-1">
                    Performance Assessment
                  </h3>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <div className="text-xs text-slate-500 font-medium">Estimated Marks</div>
                    <div className="text-3xl font-black text-indigo-700">
                      {evalResult.scoreObtained} <span className="text-sm font-normal text-slate-500">/ {evalResult.maxMarks}</span>
                    </div>
                  </div>
                  <span className="px-3 py-1.5 rounded-xl bg-indigo-50 text-indigo-800 border border-indigo-200 font-bold text-xs">
                    Grade: {evalResult.grade}
                  </span>
                </div>
              </div>

              {/* Examiner Feedback */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 leading-relaxed">
                <strong className="font-bold text-slate-900 block mb-1">Evaluator Feedback:</strong>
                {evalResult.examinerFeedback}
              </div>

              {/* Strengths & Missing Elements */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 space-y-2">
                  <div className="text-xs font-bold text-emerald-950 uppercase flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>What You Did Well:</span>
                  </div>
                  <ul className="space-y-1 text-xs text-emerald-900">
                    {evalResult.strengths.map((s, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-emerald-600 font-bold">•</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 space-y-2">
                  <div className="text-xs font-bold text-amber-950 uppercase flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    <span>Missing Elements for Full Marks:</span>
                  </div>
                  <ul className="space-y-1 text-xs text-amber-900">
                    {evalResult.missingElements.map((m, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-amber-600 font-bold">•</span>
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Actionable Recommendations */}
              <div className="p-4 rounded-xl bg-indigo-50/50 border border-indigo-100 space-y-2">
                <div className="text-xs font-bold text-indigo-900 uppercase flex items-center gap-1.5">
                  <Lightbulb className="w-4 h-4 text-indigo-600" />
                  <span>How to Turn this into a 10/10 in the Exam Hall:</span>
                </div>
                <ul className="space-y-1 text-xs text-slate-700">
                  {evalResult.modelImprovementTips.map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-indigo-600 font-bold">✓</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
