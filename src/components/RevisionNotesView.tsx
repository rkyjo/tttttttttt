import React, { useState } from 'react';
import { SubjectId, UnitNumber } from '../types/exam';
import { REVISION_FLASHCARDS } from '../data/flashcardsData';
import { Search, Layers, Lightbulb, BookMarked, Sparkles } from 'lucide-react';
import { sounds } from '../utils/soundEffects';

interface RevisionNotesViewProps {
  currentSubject: SubjectId;
  onStartExam: () => void;
}

export const RevisionNotesView: React.FC<RevisionNotesViewProps> = ({
  currentSubject,
  onStartExam
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUnit, setSelectedUnit] = useState<UnitNumber | 'all'>('all');

  const filteredCards = REVISION_FLASHCARDS.filter((card) => {
    // If cards exist for this subject, filter; otherwise show relevant cards
    const matchSubject = card.subjectId === currentSubject || currentSubject === 'comprehensive';
    const matchUnit = selectedUnit === 'all' || card.unitNumber === selectedUnit;
    const matchQuery =
      searchQuery.trim() === '' ||
      card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (card.formulaOrRule && card.formulaOrRule.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchSubject && matchUnit && matchQuery;
  });

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 to-emerald-950 text-white rounded-3xl p-6 sm:p-8 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>مراجعة ليلة الامتحان والمفاهيم الوزارية</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black">
              ملخص وقوانين الوحدات الأولى والثانية والثالثة
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
              أهم القوانين والقواعد والمفاهيم المتكررة في امتحانات الشهادة الإعدادية لعام ٢٠٢٦/٢٠٢٧
            </p>
          </div>

          <button
            onClick={() => {
              sounds.playClick();
              onStartExam();
            }}
            className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-md transition-colors"
          >
            بدء الامتحان التفاعلي الآن
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 flex flex-wrap items-center justify-between gap-3 shadow-xs">
        {/* Search */}
        <div className="relative flex-1 min-w-[240px]">
          <Search className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="ابحث عن قانون، قاعدة نحوية، مصطلح علمي، أو كلمة إنجليزية..."
            className="w-full pr-9 pl-4 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500"
          />
        </div>

        {/* Unit buttons */}
        <div className="flex flex-wrap items-center gap-1.5">
          <button
            onClick={() => { sounds.playClick(); setSelectedUnit('all'); }}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              selectedUnit === 'all'
                ? 'bg-slate-900 text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            جميع الوحدات (١، ٢، ٣)
          </button>
          <button
            onClick={() => { sounds.playClick(); setSelectedUnit(1); }}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              selectedUnit === 1
                ? 'bg-emerald-600 text-white'
                : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100'
            }`}
          >
            الوحدة الأولى
          </button>
          <button
            onClick={() => { sounds.playClick(); setSelectedUnit(2); }}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              selectedUnit === 2
                ? 'bg-teal-600 text-white'
                : 'bg-teal-50 text-teal-800 hover:bg-teal-100'
            }`}
          >
            الوحدة الثانية
          </button>
          <button
            onClick={() => { sounds.playClick(); setSelectedUnit(3); }}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              selectedUnit === 3
                ? 'bg-indigo-600 text-white'
                : 'bg-indigo-50 text-indigo-800 hover:bg-indigo-100'
            }`}
          >
            الوحدة الثالثة
          </button>
        </div>
      </div>

      {/* Cards Grid */}
      {filteredCards.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center text-slate-500 space-y-2">
          <p>لا توجد بطاقات تطابق بحثك حالياً.</p>
          <button
            onClick={() => { setSearchQuery(''); setSelectedUnit('all'); }}
            className="text-xs text-emerald-700 font-bold hover:underline"
          >
            إعادة تعيين البحث
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredCards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-2xl border border-slate-200/90 hover:border-emerald-300 p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 rounded-full">
                    {card.unitTitle}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">{card.topic}</span>
                </div>

                <h3 className="text-base font-bold text-slate-900">{card.title}</h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{card.content}</p>

                {card.formulaOrRule && (
                  <div className="bg-emerald-50/70 border border-emerald-200/80 text-emerald-950 font-mono text-xs sm:text-sm p-3 rounded-xl font-bold direction-ltr text-center">
                    {card.formulaOrRule}
                  </div>
                )}

                {card.bulletPoints && (
                  <ul className="space-y-1.5 text-xs text-slate-700 pt-1">
                    {card.bulletPoints.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <span className="text-emerald-500 font-bold mt-0.5">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {card.highlight && (
                <div className="mt-2 pt-2 border-t border-slate-100 flex items-start gap-2 text-xs bg-amber-50/60 p-2.5 rounded-xl border border-amber-200/70 text-amber-950">
                  <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span className="font-semibold leading-relaxed">{card.highlight}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
