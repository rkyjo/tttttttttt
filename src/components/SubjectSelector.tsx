import React from 'react';
import { SubjectId, UnitNumber } from '../types/exam';
import { SUBJECTS } from '../data/examData';
import { Atom, BookOpen, Globe, Languages, Calculator, Sparkles, Filter } from 'lucide-react';
import { sounds } from '../utils/soundEffects';

interface SubjectSelectorProps {
  currentSubject: SubjectId;
  onSelectSubject: (subjectId: SubjectId) => void;
  selectedUnitFilter: UnitNumber | 'all';
  onSelectUnitFilter: (unit: UnitNumber | 'all') => void;
  totalQuestions: number;
}

export const SubjectSelector: React.FC<SubjectSelectorProps> = ({
  currentSubject,
  onSelectSubject,
  selectedUnitFilter,
  onSelectUnitFilter,
  totalQuestions
}) => {
  const getSubjectIcon = (id: SubjectId) => {
    switch (id) {
      case 'science': return <Atom className="w-5 h-5 text-emerald-600" />;
      case 'arabic': return <BookOpen className="w-5 h-5 text-amber-600" />;
      case 'social': return <Globe className="w-5 h-5 text-blue-600" />;
      case 'english': return <Languages className="w-5 h-5 text-purple-600" />;
      case 'math': return <Calculator className="w-5 h-5 text-rose-600" />;
      default: return <Sparkles className="w-5 h-5 text-indigo-600" />;
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-4 sm:p-5 mb-6 no-print">
      {/* Subject Selector Buttons */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            اختر المادة الدراسية:
          </span>
          <span className="text-xs text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full font-medium">
            عدد الأسئلة المتوفرة: {totalQuestions} سؤال
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
          {SUBJECTS.map((sub) => {
            const isSelected = currentSubject === sub.id;
            return (
              <button
                key={sub.id}
                onClick={() => {
                  sounds.playClick();
                  onSelectSubject(sub.id);
                }}
                className={`flex items-center gap-2.5 p-3 rounded-xl border text-right transition-all duration-200 ${
                  isSelected
                    ? 'border-emerald-600 bg-emerald-50/80 text-emerald-950 font-bold shadow-sm ring-2 ring-emerald-500/20'
                    : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50/80 text-slate-700'
                }`}
              >
                <div className={`p-1.5 rounded-lg ${isSelected ? 'bg-white shadow-xs' : 'bg-slate-100'}`}>
                  {getSubjectIcon(sub.id)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs sm:text-sm font-bold truncate">{sub.name}</div>
                  <div className="text-[10px] text-slate-500 truncate">الوحدات ١، ٢، ٣</div>
                </div>
              </button>
            );
          })}

          {/* Comprehensive Exam Button */}
          <button
            onClick={() => {
              sounds.playClick();
              onSelectSubject('comprehensive');
            }}
            className={`flex items-center gap-2.5 p-3 rounded-xl border text-right transition-all duration-200 ${
              currentSubject === 'comprehensive'
                ? 'border-indigo-600 bg-indigo-50/80 text-indigo-950 font-bold shadow-sm ring-2 ring-indigo-500/20'
                : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50/80 text-slate-700'
            }`}
          >
            <div className={`p-1.5 rounded-lg ${currentSubject === 'comprehensive' ? 'bg-white shadow-xs' : 'bg-slate-100'}`}>
              <Sparkles className="w-5 h-5 text-indigo-600" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs sm:text-sm font-bold truncate">الامتحان الشامل</div>
              <div className="text-[10px] text-slate-500 truncate">مجمع لكافة المواد</div>
            </div>
          </button>
        </div>

        {/* Unit Filter Badges */}
        <div className="mt-2 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
            <Filter className="w-3.5 h-3.5 text-slate-400" />
            <span>نطاق الأسئلة:</span>
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            <button
              onClick={() => { sounds.playClick(); onSelectUnitFilter('all'); }}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                selectedUnitFilter === 'all'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              جميع الوحدات الثلاث (١ + ٢ + ٣)
            </button>

            <button
              onClick={() => { sounds.playClick(); onSelectUnitFilter(1); }}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                selectedUnitFilter === 1
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200'
              }`}
            >
              الوحدة الأولى فقط
            </button>

            <button
              onClick={() => { sounds.playClick(); onSelectUnitFilter(2); }}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                selectedUnitFilter === 2
                  ? 'bg-teal-600 text-white shadow-xs'
                  : 'bg-teal-50 text-teal-800 hover:bg-teal-100 border border-teal-200'
              }`}
            >
              الوحدة الثانية فقط
            </button>

            <button
              onClick={() => { sounds.playClick(); onSelectUnitFilter(3); }}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                selectedUnitFilter === 3
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-indigo-50 text-indigo-800 hover:bg-indigo-100 border border-indigo-200'
              }`}
            >
              الوحدة الثالثة فقط
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
