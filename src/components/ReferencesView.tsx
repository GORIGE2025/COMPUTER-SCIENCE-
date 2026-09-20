import React from "react";
import { referenceBooksList } from "../data/outcomesAndStrategy";
import { BookOpen, Star, BookmarkCheck, Lightbulb, Compass, Award } from "lucide-react";

export const ReferencesView: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-2xs space-y-3">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-900">
                Authoritative Academic Sources
              </span>
              <span className="text-xs text-slate-500 font-medium">PG University Syllabus Recommendations</span>
            </div>
            <h2 className="text-xl font-bold text-slate-900 mt-1">
              Suggested Reference Materials & Textbook Reading Guide
            </h2>
            <p className="text-xs text-slate-600">
              Handpicked standard references with exact chapter breakdowns to guarantee maximum scoring precision in M.Sc. Computer Science examinations.
            </p>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 border border-amber-200 rounded-lg text-amber-900 text-xs font-semibold">
            <Star className="w-4 h-4 text-amber-600 fill-amber-500" />
            <span>5 Prescribed Classics</span>
          </div>
        </div>
      </div>

      {/* Suggested Books Cards List */}
      <div className="space-y-4">
        {referenceBooksList.map((book, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs space-y-4 hover:border-indigo-200 transition-all"
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
              <div className="flex items-start gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-900 to-indigo-900 text-white flex items-center justify-center flex-shrink-0 shadow-2xs">
                  <BookOpen className="w-6 h-6 text-indigo-300" />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap text-xs">
                    <span className="font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-md">
                      {book.relevanceToUnit1}
                    </span>
                    <span className="text-slate-400">•</span>
                    <span className="text-slate-500 font-medium">{book.edition}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mt-1">{book.title}</h3>
                  <div className="text-xs font-semibold text-slate-700">By {book.author}</div>
                </div>
              </div>
            </div>

            {/* Must-Read Chapters Box */}
            <div className="p-3.5 rounded-xl bg-indigo-50/60 border border-indigo-100 text-xs space-y-1">
              <div className="font-bold text-indigo-900 flex items-center gap-1.5">
                <BookmarkCheck className="w-4 h-4 text-indigo-600" />
                <span>Essential Must-Read Chapters for Unit-1:</span>
              </div>
              <p className="text-slate-700 leading-relaxed font-medium">
                {book.mustReadChapters}
              </p>
            </div>

            {/* Key Strengths */}
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1">
              <div className="font-bold text-slate-800 flex items-center gap-1.5">
                <Lightbulb className="w-4 h-4 text-amber-600" />
                <span>Why Evaluators Love This Textbook:</span>
              </div>
              <p className="leading-relaxed">{book.keyStrengths}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Fast Pre-Exam Reading Roadmap */}
      <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 rounded-2xl p-6 text-white space-y-4 border border-slate-800 shadow-md">
        <div className="flex items-center gap-2 text-indigo-300">
          <Compass className="w-5 h-5 text-indigo-400" />
          <h3 className="font-bold text-base">Quick Pre-Exam 24-Hour Reading Roadmap</h3>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed">
          If you have limited time before the examination, prioritize your study in this exact sequence:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
            <span className="text-amber-400 font-bold uppercase tracking-wider text-[10px]">Tier 1 (First 3 Hours)</span>
            <div className="font-semibold text-white">M. Morris Mano (Ch 1 & 2)</div>
            <p className="text-slate-400 text-[11px] leading-relaxed">
              Memorize Full Adder two-HA construction, 4:1 MUX logic diagram, JK Master-Slave flip-flop, and universal NAND/NOR conversions.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
            <span className="text-emerald-400 font-bold uppercase tracking-wider text-[10px]">Tier 2 (Next 2 Hours)</span>
            <div className="font-semibold text-white">William Stallings (Ch 1)</div>
            <p className="text-slate-400 text-[11px] leading-relaxed">
              Master the comparative matrix between Computer Organization and Computer Architecture, and the Von Neumann Bottleneck.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
            <span className="text-indigo-400 font-bold uppercase tracking-wider text-[10px]">Tier 3 (Final 1 Hour)</span>
            <div className="font-semibold text-white">Carl Hamacher (Ch 1)</div>
            <p className="text-slate-400 text-[11px] leading-relaxed">
              Draw the 5 Functional Units block diagram with clean address, data, and control bus arrows to ensure effortless 10/10 marks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
