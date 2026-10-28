import React from 'react';
import { ExamEvaluationResult, Question, StudentAnswer, SubjectInfo } from '../types/exam';
import { Award, CheckCircle2, XCircle, RotateCcw, FileText, Printer, ChevronDown, Sparkles } from 'lucide-react';
import { isAnswerCorrect } from '../utils/examScorer';
import { sounds } from '../utils/soundEffects';

interface ExamResultViewProps {
  result: ExamEvaluationResult;
  questions: Question[];
  studentAnswers: Record<string, StudentAnswer>;
  subject: SubjectInfo;
  onRetakeExam: () => void;
  onGoToModelAnswers: () => void;
  onPrint: () => void;
}

export const ExamResultView: React.FC<ExamResultViewProps> = ({
  result,
  questions,
  studentAnswers,
  subject,
  onRetakeExam,
  onGoToModelAnswers,
  onPrint
}) => {
  const getGradeBadge = (grade: string) => {
    switch (grade) {
      case 'ممتاز':
        return 'bg-emerald-100 text-emerald-800 border-emerald-300';
      case 'جيد جداً':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'جيد':
        return 'bg-amber-100 text-amber-800 border-amber-300';
      case 'مقبول':
        return 'bg-purple-100 text-purple-800 border-purple-300';
      default:
        return 'bg-rose-100 text-rose-800 border-rose-300';
    }
  };

  return (
    <div className="space-y-6">
      {/* Certificate / Main Scorecard Card */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-lg overflow-hidden">
        {/* Certificate Header Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 text-white p-6 sm:p-8 text-center relative">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/40 px-3 py-1 rounded-full text-xs text-emerald-300 mb-3 font-semibold">
            <Award className="w-4 h-4" />
            <span>كشف درجات ونتيجة امتحان الشهادة الإعدادية ٢٠٢٦ / ٢٠٢٧</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
            نتيجة اختبار: {subject.name} (الوحدات ١، ٢، ٣)
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            تم تقييم إجاباتك آلياً وفق معايير ونماذج الإجابة المعتمدة لوزارة التربية والتعليم
          </p>

          {/* Big Score Meter */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/15 text-center min-w-[140px]">
              <div className="text-3xl sm:text-4xl font-black text-emerald-400">
                {result.score} <span className="text-base text-slate-300 font-normal">/ {result.totalMarks}</span>
              </div>
              <div className="text-xs text-slate-300 mt-1 font-medium">الدرجة الكلية المحرزة</div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/15 text-center min-w-[140px]">
              <div className="text-3xl sm:text-4xl font-black text-amber-400">
                %{result.percentage}
              </div>
              <div className="text-xs text-slate-300 mt-1 font-medium">النسبة المئوية</div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/15 text-center min-w-[140px]">
              <div className="text-2xl sm:text-3xl font-black text-white">
                {result.grade}
              </div>
              <div className="text-xs text-slate-300 mt-1 font-medium">التقدير العام</div>
            </div>
          </div>
        </div>

        {/* Pedagogical Feedback message */}
        <div className="p-6 bg-emerald-50/50 border-b border-emerald-100/80 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
            <Sparkles className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-900 mb-0.5">تقييم الأداء والملاحظات التربوية:</h4>
            <p className="text-xs sm:text-sm text-emerald-950 font-medium leading-relaxed">
              {result.feedbackMessage}
            </p>
          </div>
        </div>

        {/* Breakdown by Units (الوحدة الأولى، الوحدة الثانية، الوحدة الثالثة) */}
        <div className="p-6 sm:p-8 space-y-4">
          <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
            <span>التحليل التفصيلي لمستوى الإتقان حسب الوحدات الثلاث:</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {([1, 2, 3] as const).map((unitNum) => {
              const u = result.unitBreakdown[unitNum];
              if (!u || u.totalMarks === 0) return null;

              let barColor = 'bg-emerald-600';
              if (u.percentage < 50) barColor = 'bg-rose-500';
              else if (u.percentage < 75) barColor = 'bg-amber-500';

              return (
                <div key={unitNum} className="p-4 rounded-2xl border border-slate-200 bg-slate-50/60 space-y-2.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-800">{u.unitTitle}</span>
                    <span className="font-bold text-slate-600">{u.score} / {u.totalMarks} درجات</span>
                  </div>

                  {/* Progress bar */}
                  <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${barColor} rounded-full transition-all duration-500`}
                      style={{ width: `${Math.min(100, u.percentage)}%` }}
                    ></div>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-500">
                    <span>نسبة التحصيل: %{u.percentage}</span>
                    <span>{u.correctCount} من أصل {u.questionCount} صحيحة</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Action buttons */}
          <div className="pt-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100">
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => {
                  sounds.playClick();
                  onRetakeExam();
                }}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-bold text-xs hover:bg-slate-50 transition-colors shadow-xs"
              >
                <RotateCcw className="w-4 h-4 text-slate-500" />
                <span>إعادة أداء الامتحان</span>
              </button>

              <button
                onClick={() => {
                  sounds.playClick();
                  onGoToModelAnswers();
                }}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors shadow-xs"
              >
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>عرض نموذج الإجابة الرسمي الكامل</span>
              </button>
            </div>

            <button
              onClick={onPrint}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 transition-colors shadow-xs"
            >
              <Printer className="w-4 h-4" />
              <span>طباعة كشف النتيجة</span>
            </button>
          </div>
        </div>
      </div>

      {/* Detailed Question Review List */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-900"></span>
            <span>مراجعة إجاباتك سؤالاً بسؤال مع نموذج الإجابة والشرح:</span>
          </h3>
          <span className="text-xs text-slate-500">
            {result.correctCount} إجابات صحيحة من أصل {result.totalQuestions}
          </span>
        </div>

        <div className="space-y-4">
          {questions.map((q, idx) => {
            const answer = studentAnswers[q.id];
            const isCorrect = isAnswerCorrect(q, answer);

            return (
              <div
                key={q.id}
                className={`p-5 rounded-2xl border transition-all ${
                  isCorrect
                    ? 'bg-white border-emerald-200/90 shadow-xs'
                    : 'bg-white border-rose-200 shadow-xs'
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`w-7 h-7 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 ${
                        isCorrect ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white'
                      }`}
                    >
                      {idx + 1}
                    </span>
                    <div>
                      <span className="text-xs font-bold text-slate-700">
                        {q.unitTitle}
                      </span>
                      <span className="text-xs text-slate-500 mr-2">
                        • {q.lessonTitle}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span
                      className={`inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full ${
                        isCorrect
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-rose-100 text-rose-800'
                      }`}
                    >
                      {isCorrect ? (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>صحيحة (+{q.marks})</span>
                        </>
                      ) : (
                        <>
                          <XCircle className="w-3.5 h-3.5 text-rose-600" />
                          <span>غير صحيحة (٠ / {q.marks})</span>
                        </>
                      )}
                    </span>
                  </div>
                </div>

                {/* Prompt */}
                <p className="text-sm sm:text-base font-bold text-slate-900 mb-3">
                  {q.prompt}
                </p>

                {/* Student choice if MCQ */}
                {q.type === 'mcq' && q.options && (
                  <div className="text-xs space-y-1.5 mb-3 bg-slate-50 p-3 rounded-xl border border-slate-200/70">
                    <div className="text-slate-600">
                      إجابتك المسجلة: {' '}
                      <span className={`font-bold ${isCorrect ? 'text-emerald-700' : 'text-rose-700'}`}>
                        {answer?.selectedOptionIndex !== undefined ? q.options[answer.selectedOptionIndex] : 'لم تتم الإجابة'}
                      </span>
                    </div>
                  </div>
                )}

                {/* Model Answer Box */}
                <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200/80 space-y-2 text-xs">
                  <div>
                    <span className="font-bold text-emerald-950 block mb-0.5">الإجابة النموذجية المعتمدة:</span>
                    <span className="text-slate-900 font-semibold whitespace-pre-line leading-relaxed">
                      {q.modelAnswer}
                    </span>
                  </div>

                  <div className="pt-2 border-t border-emerald-200/50">
                    <span className="font-bold text-slate-700 block mb-0.5">الشرح والتفسير التربوي:</span>
                    <span className="text-slate-600 leading-relaxed block">
                      {q.explanation}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
