import React, { useState, useMemo, useEffect } from "react";
import { mcqsList } from "../data/mcqs";
import { CheckCircle2, XCircle, HelpCircle, RotateCcw, Search, Table, Trophy, Clock, Filter, Sparkles } from "lucide-react";

export const MCQQuizView: React.FC = () => {
  const [mode, setMode] = useState<"practice" | "exam">("practice");
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [revealedExplanations, setRevealedExplanations] = useState<Record<number, boolean>>({});
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTopic, setSelectedTopic] = useState<string>("All");
  const [showKeyModal, setShowKeyModal] = useState(false);

  // Exam mode state
  const [examSubmitted, setExamSubmitted] = useState(false);
  const [examTimeLeft, setExamTimeLeft] = useState(40 * 60); // 40 mins
  const [examTimerActive, setExamTimerActive] = useState(false);

  // Topics extraction
  const topics = useMemo(() => {
    const set = new Set<string>();
    mcqsList.forEach((m) => set.add(m.topic));
    return ["All", ...Array.from(set)];
  }, []);

  // Filtered MCQs
  const filteredMCQs = useMemo(() => {
    return mcqsList.filter((m) => {
      const matchesTopic = selectedTopic === "All" || m.topic === selectedTopic;
      const matchesSearch =
        m.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.options.some((o) => o.text.toLowerCase().includes(searchQuery.toLowerCase())) ||
        m.explanation.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTopic && matchesSearch;
    });
  }, [searchQuery, selectedTopic]);

  // Exam timer
  useEffect(() => {
    let interval: any = null;
    if (mode === "exam" && examTimerActive && !examSubmitted && examTimeLeft > 0) {
      interval = setInterval(() => {
        setExamTimeLeft((t) => {
          if (t <= 1) {
            setExamSubmitted(true);
            return 0;
          }
          return t - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [mode, examTimerActive, examSubmitted, examTimeLeft]);

  const handleSelectOption = (questionId: number, optionKey: string) => {
    if (examSubmitted) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: optionKey,
    }));
  };

  const toggleExplanation = (questionId: number) => {
    setRevealedExplanations((prev) => ({
      ...prev,
      [questionId]: !prev[questionId],
    }));
  };

  const resetAll = () => {
    setSelectedAnswers({});
    setRevealedExplanations({});
    setExamSubmitted(false);
    setExamTimeLeft(40 * 60);
    setExamTimerActive(false);
  };

  // Exam calculations
  const calculateScore = () => {
    let score = 0;
    mcqsList.forEach((m) => {
      if (selectedAnswers[m.id] === m.correctAnswer) {
        score += 1;
      }
    });
    return score;
  };

  const score = calculateScore();
  const answeredCount = Object.keys(selectedAnswers).length;

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div className="space-y-6">
      {/* Header & Controls Bar */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-2xs space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-100 text-indigo-800">
                Official Syllabus Questions
              </span>
              <span className="text-xs text-slate-500 font-medium">Page 74–77 (Q1 to Q40)</span>
            </div>
            <h2 className="text-xl font-bold text-slate-900 mt-1">
              40 Multiple Choice Questions (Unit 1: Digital Electronics)
            </h2>
            <p className="text-xs text-slate-600">
              Extracted directly from the syllabus with the official answer keys and conceptual explanations.
            </p>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => {
                setMode("practice");
                setExamTimerActive(false);
              }}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition ${
                mode === "practice"
                  ? "bg-indigo-600 text-white shadow-2xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Study / Practice Mode
            </button>
            <button
              onClick={() => {
                setMode("exam");
                setExamTimerActive(true);
              }}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition ${
                mode === "exam"
                  ? "bg-emerald-600 text-white shadow-2xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Timed Mock Exam Mode
            </button>
            <button
              onClick={() => setShowKeyModal(true)}
              className="px-3 py-1.5 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50 text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
              title="View official answer key table"
            >
              <Table className="w-3.5 h-3.5 text-slate-500" />
              <span>Official Key (Pg 78)</span>
            </button>
            <button
              onClick={resetAll}
              className="p-1.5 rounded-lg border border-slate-200 text-slate-500 hover:text-slate-800 hover:bg-slate-50 cursor-pointer"
              title="Reset all choices"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Exam Timer & Progress Bar (When Exam Mode is active) */}
        {mode === "exam" && (
          <div className="p-4 rounded-xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xs">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-amber-400" />
              <div>
                <div className="text-xs text-slate-400">Exam Timer (40 Minutes)</div>
                <div className="text-xl font-black text-amber-300 tracking-wider">
                  {formatTime(examTimeLeft)}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs">
              <div>
                Answered: <strong className="text-indigo-300">{answeredCount}</strong> / 40
              </div>
              {!examSubmitted ? (
                <button
                  onClick={() => setExamSubmitted(true)}
                  className="px-4 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg shadow-xs cursor-pointer transition"
                >
                  Submit Exam Paper
                </button>
              ) : (
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 rounded-md font-bold">
                    Score: {score} / 40 ({Math.round((score / 40) * 100)}%)
                  </span>
                  <button
                    onClick={resetAll}
                    className="px-3 py-1 bg-white/10 hover:bg-white/20 text-white rounded-md font-semibold cursor-pointer"
                  >
                    Retake
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Filter and Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 border-t border-slate-100 text-xs">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Filter className="w-4 h-4 text-slate-400" />
            <span className="text-slate-500 font-medium">Topic:</span>
            <select
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              className="px-2.5 py-1.5 rounded-lg border border-slate-300 bg-white text-slate-700 text-xs font-medium focus:ring-2 focus:ring-indigo-500 focus:outline-hidden"
            >
              {topics.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Search question, keyword, or concept..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 rounded-lg border border-slate-300 bg-white text-xs placeholder:text-slate-400 focus:ring-2 focus:ring-indigo-500 focus:outline-hidden"
            />
          </div>
        </div>
      </div>

      {/* Exam Result Banner if submitted */}
      {mode === "exam" && examSubmitted && (
        <div className="bg-gradient-to-r from-emerald-900 via-slate-900 to-indigo-950 p-6 rounded-2xl text-white shadow-md border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 animate-fadeIn">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300">
              <Trophy className="w-8 h-8" />
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                Mock Exam Completed
              </div>
              <h3 className="text-2xl font-black">
                Your Score: {score} / 40 Marks
              </h3>
              <p className="text-xs text-slate-300">
                {score >= 32
                  ? "Distinction Level! Outstanding preparation for PG 1st Year examinations."
                  : score >= 24
                  ? "Good performance! Review the questions below to strengthen tricky concepts."
                  : "Needs revision. Go through the explanations and Study Notes tab."}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right">
              <div className="text-xs text-slate-400">Percentage</div>
              <div className="text-2xl font-bold text-emerald-300">
                {Math.round((score / 40) * 100)}%
              </div>
            </div>
            <button
              onClick={() => {
                setExamSubmitted(false);
                setMode("practice");
              }}
              className="px-4 py-2 bg-white text-slate-900 hover:bg-slate-100 font-bold rounded-xl text-xs shadow-xs cursor-pointer"
            >
              Review with Answers
            </button>
          </div>
        </div>
      )}

      {/* MCQs List */}
      <div className="space-y-4">
        {filteredMCQs.length === 0 ? (
          <div className="p-8 text-center bg-white rounded-xl border border-slate-200 text-slate-500">
            No questions match your search filter.
          </div>
        ) : (
          filteredMCQs.map((mcq) => {
            const selected = selectedAnswers[mcq.id];
            const isPracticeMode = mode === "practice";
            const showResult = isPracticeMode ? Boolean(selected) : examSubmitted;
            const isCorrect = selected === mcq.correctAnswer;
            const isRevealed = revealedExplanations[mcq.id] || (mode === "exam" && examSubmitted);

            return (
              <div
                key={mcq.id}
                id={`mcq-${mcq.id}`}
                className={`bg-white rounded-xl border p-5 shadow-2xs transition-all ${
                  showResult
                    ? isCorrect
                      ? "border-emerald-200 bg-emerald-50/20"
                      : "border-rose-200 bg-rose-50/20"
                    : "border-slate-200 hover:border-slate-300"
                }`}
              >
                {/* Question Top Meta */}
                <div className="flex items-center justify-between gap-2 text-xs mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-indigo-50 border border-indigo-200 flex items-center justify-center font-bold text-indigo-700 text-xs">
                      Q{mcq.id}
                    </span>
                    <span className="text-slate-500 font-medium">{mcq.topic}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    {showResult && (
                      <span
                        className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md font-bold text-xs ${
                          isCorrect
                            ? "bg-emerald-100 text-emerald-800"
                            : "bg-rose-100 text-rose-800"
                        }`}
                      >
                        {isCorrect ? (
                          <>
                            <CheckCircle2 className="w-3.5 h-3.5" /> Correct (+1)
                          </>
                        ) : (
                          <>
                            <XCircle className="w-3.5 h-3.5" /> Key: ({mcq.correctAnswer})
                          </>
                        )}
                      </span>
                    )}

                    {isPracticeMode && (
                      <button
                        onClick={() => toggleExplanation(mcq.id)}
                        className="text-xs text-indigo-600 hover:text-indigo-800 font-medium inline-flex items-center gap-1 cursor-pointer"
                      >
                        <HelpCircle className="w-3.5 h-3.5" />
                        <span>{isRevealed ? "Hide Explanation" : "Explain"}</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Question Statement */}
                <h3 className="text-sm sm:text-base font-semibold text-slate-900 leading-snug mb-3">
                  {mcq.question}
                </h3>

                {/* Options Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {mcq.options.map((opt) => {
                    const isChosen = selected === opt.key;
                    const isRightOption = opt.key === mcq.correctAnswer;

                    let btnStyle = "border-slate-200 hover:bg-slate-50 text-slate-700";
                    if (showResult) {
                      if (isRightOption) {
                        btnStyle = "border-emerald-500 bg-emerald-50 text-emerald-900 font-semibold ring-1 ring-emerald-500";
                      } else if (isChosen && !isRightOption) {
                        btnStyle = "border-rose-400 bg-rose-50 text-rose-900 line-through";
                      } else {
                        btnStyle = "border-slate-100 text-slate-400 opacity-60";
                      }
                    } else if (isChosen) {
                      btnStyle = "border-indigo-600 bg-indigo-50/70 text-indigo-900 font-semibold ring-1 ring-indigo-500";
                    }

                    return (
                      <button
                        key={opt.key}
                        onClick={() => handleSelectOption(mcq.id, opt.key)}
                        disabled={examSubmitted}
                        className={`text-left px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm flex items-start gap-2.5 transition-all cursor-pointer ${btnStyle}`}
                      >
                        <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5 uppercase">
                          {opt.key}
                        </span>
                        <span className="leading-relaxed">{opt.text}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Explanation Box */}
                {(isRevealed || (isPracticeMode && selected)) && (
                  <div className="mt-3.5 p-3 rounded-lg bg-indigo-50/70 border border-indigo-200/70 text-xs text-indigo-950 space-y-1 animate-fadeIn">
                    <div className="font-bold text-indigo-900 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                      <span>Conceptual Explanation (Official Key: {mcq.correctAnswer}):</span>
                    </div>
                    <p className="leading-relaxed text-slate-700">{mcq.explanation}</p>
                    <div className="text-[11px] text-indigo-700/80 font-mono">
                      Syllabus reference: {mcq.syllabusRef}
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Official Answer Key Modal (Exact match to Page 78) */}
      {showKeyModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 shadow-xl border border-slate-200 space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div>
                <h3 className="font-bold text-lg text-slate-900">
                  Official Key (Page 78 of Uploaded Document)
                </h3>
                <p className="text-xs text-slate-500">
                  Unit-1 Basics of Digital Electronics & Computer Organization Answer Keys
                </p>
              </div>
              <button
                onClick={() => setShowKeyModal(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
              {mcqsList.map((m) => (
                <div
                  key={m.id}
                  className="p-2 rounded-md bg-slate-50 border border-slate-200 flex items-center justify-between"
                >
                  <span className="font-semibold text-slate-700">Q{m.id}:</span>
                  <span className="font-bold text-indigo-700 bg-indigo-100/70 px-2 py-0.5 rounded uppercase">
                    ({m.correctAnswer})
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-200 flex justify-end">
              <button
                onClick={() => setShowKeyModal(false)}
                className="px-4 py-2 bg-indigo-600 text-white text-xs font-semibold rounded-lg hover:bg-indigo-500 cursor-pointer"
              >
                Close Key
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
