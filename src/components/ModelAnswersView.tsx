import React, { useState } from 'react';
import { Question, SubjectInfo, UnitNumber } from '../types/exam';
import { 
  FileCheck, CheckCircle2, Sparkles, Filter, Eye, EyeOff, 
  Printer, BookOpen, HelpCircle, Layers, ArrowUpDown
} from 'lucide-react';
import { sounds } from '../utils/soundEffects';

interface ModelAnswersViewProps {
  questions: Question[];
  subject: SubjectInfo;
  onPrint: () => void;
  onStartExam: () => void;
}

export const ModelAnswersView: React.FC<ModelAnswersViewProps> = ({
  questions,
  subject,
  onPrint,
  onStartExam
}) => {
  const [selectedUnit, setSelectedUnit] = useState<UnitNumber | 'all'>('all');
  const [showAllAnswers, setShowAllAnswers] = useState(true);
  const [expandedQuestions, setExpandedQuestions] = useState<Record<string, boolean>>({});

  const filteredQuestions = questions.filter((q) => {
    if (selectedUnit !== 'all' && q.unit !== selectedUnit) return false;
    return true;
  });

  const totalMarks = filteredQuestions.reduce((acc, q) => acc + (q.marks || 1), 0);

  const toggleQuestionAnswer = (id: string) => {
    sounds.playClick();
    setExpandedQuestions((prev) => ({
      ...prev,
      [id]: prev[id] !== undefined ? !prev[id] : !showAllAnswers
    }));
  };

  const isQuestionAnswerVisible = (id: string) => {
    if (expandedQuestions[id] !== undefined) {
      return expandedQuestions[id];
    }
    return showAllAnswers;
  };

  return (
    <div className="space-y-6">
      {/* Header controls bar */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4 no-print">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-xs">
            <FileCheck className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              كراسة الامتحان ونموذج الإجابة الرسمي المعتمد
            </h2>
            <p className="text-xs text-slate-500">
              {subject.name} • الوحدات الأولى والثانية والثالثة • العام الدراسي ٢٠٢٦/٢٠٢٧
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Toggle all answers */}
          <button
            onClick={() => {
              sounds.playClick();
              setShowAllAnswers(!showAllAnswers);
              setExpandedQuestions({});
            }}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border border-slate-300 text-slate-700 hover:bg-slate-50 transition-colors"
          >
            {showAllAnswers ? <EyeOff className="w-4 h-4 text-slate-500" /> : <Eye className="w-4 h-4 text-emerald-600" />}
            <span>{showAllAnswers ? 'حجب الإجابات للاختبار الذاتي' : 'إظهار كافة الإجابات النموذجية'}</span>
          </button>

          <button
            onClick={onPrint}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 text-white hover:bg-slate-800 text-xs font-bold transition-colors shadow-xs"
          >
            <Printer className="w-4 h-4" />
            <span>طباعة البوكليت والنموذج</span>
          </button>

          <button
            onClick={onStartExam}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 text-xs font-bold transition-colors shadow-xs"
          >
            <BookOpen className="w-4 h-4" />
            <span>أداء الامتحان التفاعلي المؤقت</span>
          </button>
        </div>
      </div>

      {/* Filter and stats banner */}
      <div className="bg-slate-50 rounded-2xl border border-slate-200 p-4 flex flex-wrap items-center justify-between gap-3 no-print">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-600">تصفية حسب الوحدة:</span>
          <div className="flex flex-wrap gap-1.5">
            <button
              onClick={() => { sounds.playClick(); setSelectedUnit('all'); }}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                selectedUnit === 'all'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              جميع الوحدات الثلاث (١، ٢، ٣)
            </button>
            <button
              onClick={() => { sounds.playClick(); setSelectedUnit(1); }}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                selectedUnit === 1
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-white text-emerald-900 border border-emerald-200 hover:bg-emerald-50'
              }`}
            >
              الوحدة الأولى
            </button>
            <button
              onClick={() => { sounds.playClick(); setSelectedUnit(2); }}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                selectedUnit === 2
                  ? 'bg-teal-600 text-white shadow-xs'
                  : 'bg-white text-teal-900 border border-teal-200 hover:bg-teal-50'
              }`}
            >
              الوحدة الثانية
            </button>
            <button
              onClick={() => { sounds.playClick(); setSelectedUnit(3); }}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                selectedUnit === 3
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-white text-indigo-900 border border-indigo-200 hover:bg-indigo-50'
              }`}
            >
              الوحدة الثالثة
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3 text-xs text-slate-600">
          <span className="bg-white px-2.5 py-1 rounded-lg border border-slate-200 font-medium">
            عدد الأسئلة المعروضة: <strong className="text-slate-900">{filteredQuestions.length}</strong>
          </span>
          <span className="bg-white px-2.5 py-1 rounded-lg border border-slate-200 font-medium">
            مجموع الدرجات: <strong className="text-emerald-700">{totalMarks} درجة</strong>
          </span>
        </div>
      </div>

      {/* Official Booklet Header (Visible in print and screen) */}
      <div className="bg-white rounded-3xl border border-slate-300 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="border-b-2 border-slate-800 pb-4 text-center space-y-1.5">
          <div className="flex justify-between items-center text-xs sm:text-sm text-slate-700 font-bold border-b border-slate-200 pb-2 mb-2">
            <div>جمهورية مصر العربية - وزارة التربية والتعليم</div>
            <div>امتحان شهادة إتمام الدراسة بمرحلة التعليم الأساسي</div>
            <div>العام الدراسي ٢٠٢٦ / ٢٠٢٧</div>
          </div>
          <h1 className="text-xl sm:text-2xl font-black text-slate-900">
            امتحان {subject.name} - الفصل الدراسي الأول (الوحدات: الأولى والثانية والثالثة)
          </h1>
          <p className="text-xs text-slate-500 font-medium">
            الزمن: ساعتان ونصف • الدرجة العظمى: ٤٠ درجة • نموذج إجابة موثق مع توزيع الدرجات والتعليل التربوي
          </p>
        </div>

        {/* Questions & Model Answers List */}
        <div className="space-y-6">
          {filteredQuestions.map((q, index) => {
            const isAnswerVisible = isQuestionAnswerVisible(q.id);

            return (
              <div
                key={q.id}
                className="p-5 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 transition-all space-y-3.5"
              >
                {/* Question title and unit badge */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-xl bg-slate-900 text-white font-bold text-sm flex items-center justify-center shrink-0">
                      {index + 1}
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                          {q.unitTitle}
                        </span>
                        <span className="text-xs text-slate-500 font-medium">
                          ({q.lessonTitle})
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold bg-amber-50 text-amber-900 border border-amber-200 px-2.5 py-1 rounded-lg">
                      [{q.marks} درجات]
                    </span>

                    <button
                      onClick={() => toggleQuestionAnswer(q.id)}
                      className="no-print p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                      title={isAnswerVisible ? 'إخفاء الإجابة' : 'عرض الإجابة'}
                    >
                      {isAnswerVisible ? <EyeOff className="w-4 h-4 text-emerald-600" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Context snippet if any */}
                {q.contextSnippet && (
                  <div className="p-3 bg-amber-50/60 border border-amber-200/60 rounded-xl text-amber-950 font-serif text-sm leading-relaxed">
                    {q.contextSnippet}
                  </div>
                )}

                {/* Prompt */}
                <div className="text-sm sm:text-base font-bold text-slate-900 leading-relaxed">
                  {q.prompt}
                </div>

                {/* MCQ Options Display */}
                {q.type === 'mcq' && q.options && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs sm:text-sm">
                    {q.options.map((opt, optIdx) => {
                      const isCorrect = optIdx === q.correctOptionIndex;
                      const showHighlight = isAnswerVisible && isCorrect;

                      return (
                        <div
                          key={optIdx}
                          className={`p-2.5 rounded-xl border flex items-center gap-2.5 transition-colors ${
                            showHighlight
                              ? 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold ring-1 ring-emerald-500/30'
                              : 'bg-slate-50/60 border-slate-200 text-slate-700'
                          }`}
                        >
                          <span
                            className={`w-6 h-6 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 ${
                              showHighlight
                                ? 'bg-emerald-600 text-white'
                                : 'bg-slate-200 text-slate-700'
                            }`}
                          >
                            {['أ', 'ب', 'ج', 'د'][optIdx] || optIdx + 1}
                          </span>
                          <span className="flex-1">{opt}</span>
                          {showHighlight && (
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Model Answer & Pedagogical Breakdown */}
                {isAnswerVisible && (
                  <div className="mt-3 p-4 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50/50 border border-emerald-200/80 space-y-2 text-xs sm:text-sm">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-emerald-950 block mb-1">
                          الإجابة النموذجية المعتمدة (توزيع الدرجات: {q.marks} درجات):
                        </strong>
                        <div className="text-slate-900 font-semibold whitespace-pre-line leading-relaxed bg-white/80 p-3 rounded-lg border border-emerald-100">
                          {q.modelAnswer}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 pt-2 border-t border-emerald-200/60">
                      <Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-800 block mb-0.5">
                          الشرح والتفسير التربوي وقاعدة الحل:
                        </strong>
                        <p className="text-slate-700 leading-relaxed">
                          {q.explanation}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Booklet Ending / Ministry Verification Seal */}
        <div className="pt-6 border-t-2 border-slate-800 flex flex-wrap items-center justify-between text-xs text-slate-600 gap-4">
          <div>
            <strong>توجيه عام المادة:</strong> تم إعداد الامتحان ونموذج الإجابة وفق المواصفات القياسية للورقة الامتحانية لسنة ٢٠٢٦ / ٢٠٢٧.
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
            <span className="font-bold text-slate-900">انتهت الأسئلة ونموذج الإجابة بحمد الله</span>
          </div>
        </div>
      </div>
    </div>
  );
};
