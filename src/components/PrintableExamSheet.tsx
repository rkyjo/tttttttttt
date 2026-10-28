import React from 'react';
import { Question, SubjectInfo } from '../types/exam';

interface PrintableExamSheetProps {
  questions: Question[];
  subject: SubjectInfo;
}

export const PrintableExamSheet: React.FC<PrintableExamSheetProps> = ({
  questions,
  subject
}) => {
  return (
    <div className="print-only p-8 text-black bg-white max-w-4xl mx-auto space-y-6">
      {/* 1. QUESTION PAPER */}
      <div className="border-4 border-black p-6 space-y-6">
        {/* Official Header */}
        <div className="border-b-2 border-black pb-4 text-center space-y-2">
          <div className="flex justify-between items-start text-xs font-bold">
            <div className="text-right">
              <div>جمهورية مصر العربية</div>
              <div>وزارة التربية والتعليم والتعليم الفني</div>
              <div>مديرية التربية والتعليم</div>
            </div>
            <div className="text-center font-bold text-sm">
              <div>امتحان شهادة إتمام الدراسة بمرحلة التعليم الأساسي</div>
              <div>(الشهادة الإعدادية - الصف الثالث الإعدادي)</div>
              <div>العام الدراسي ٢٠٢٦ / ٢٠٢٧ م - الفصل الدراسي الأول</div>
            </div>
            <div className="text-left">
              <div>المادة: {subject.name}</div>
              <div>الزمن: ساعتان ونصف</div>
              <div>الدرجة العظمى: {subject.totalExamMarks} درجة</div>
            </div>
          </div>

          <div className="pt-2">
            <h1 className="text-xl font-black underline tracking-wide">
              ورقة أسئلة امتحان: {subject.name} (الوحدات: الأولى والثانية والثالثة)
            </h1>
          </div>
        </div>

        {/* Student metadata fields */}
        <div className="grid grid-cols-3 gap-4 border border-black p-3 text-xs font-bold">
          <div>اسم الطالب / الطالبة: .......................................</div>
          <div>رقم الجلوس: ..........................</div>
          <div>اسم المدرسة: .......................................</div>
        </div>

        {/* Questions list */}
        <div className="space-y-5 pt-2">
          {questions.map((q, idx) => (
            <div key={q.id} className="space-y-2 text-sm border-b border-gray-300 pb-3">
              <div className="flex justify-between items-start">
                <span className="font-bold">
                  السؤال ({idx + 1}): [{q.unitTitle} - {q.lessonTitle}]
                </span>
                <span className="font-bold text-xs">({q.marks} درجات)</span>
              </div>

              {q.contextSnippet && (
                <div className="p-2 bg-gray-100 italic border border-gray-300 text-center text-xs">
                  {q.contextSnippet}
                </div>
              )}

              <div className="font-semibold">{q.prompt}</div>

              {q.type === 'mcq' && q.options && (
                <div className="grid grid-cols-2 gap-2 text-xs pt-1 pr-4">
                  {q.options.map((opt, oIdx) => (
                    <div key={oIdx} className="flex items-center gap-1.5">
                      <span>({['أ', 'ب', 'ج', 'د'][oIdx] || oIdx + 1})</span>
                      <span>{opt}</span>
                    </div>
                  ))}
                </div>
              )}

              {q.type !== 'mcq' && (
                <div className="h-16 border-b border-dotted border-gray-400 mt-2">
                  <span className="text-[10px] text-gray-500">مساحة للإجابة:</span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center text-xs font-bold pt-4 border-t-2 border-black">
          [ انتهت الأسئلة - مع أطيب التمنيات لجميع أبنائنا الطلاب بالنجاح والتفوق الباهر ٢٠٢٦ / ٢٠٢٧ ]
        </div>
      </div>

      {/* Page Break for Answers */}
      <div className="print-page-break"></div>

      {/* 2. OFFICIAL MODEL ANSWER KEY */}
      <div className="border-4 border-black p-6 space-y-6">
        <div className="border-b-2 border-black pb-4 text-center space-y-1">
          <div className="text-xs font-bold">جمهورية مصر العربية - وزارة التربية والتعليم</div>
          <h2 className="text-lg font-black underline">
            نموذج الإجابة الرسمي وتوزيع الدرجات المعتمد - مادة {subject.name}
          </h2>
          <div className="text-xs font-medium">الوحدات الأولى والثانية والثالثة • دور يناير ٢٠٢٧</div>
        </div>

        <table className="w-full border-collapse border border-black text-xs">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-black p-2 w-12 text-center">رقم</th>
              <th className="border border-black p-2 w-28 text-center">الوحدة المقررة</th>
              <th className="border border-black p-2 text-right">الإجابة النموذجية المعتمدة وتفاصيل الحل</th>
              <th className="border border-black p-2 w-16 text-center">الدرجة</th>
            </tr>
          </thead>
          <tbody>
            {questions.map((q, idx) => (
              <tr key={q.id}>
                <td className="border border-black p-2 text-center font-bold">{idx + 1}</td>
                <td className="border border-black p-2 text-center">{q.unitTitle}</td>
                <td className="border border-black p-2 whitespace-pre-line leading-relaxed">
                  <div className="font-bold mb-1">{q.modelAnswer}</div>
                  <div className="text-gray-700 italic text-[11px]">{q.explanation}</div>
                </td>
                <td className="border border-black p-2 text-center font-bold">{q.marks}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-gray-100 font-bold">
              <td colSpan={3} className="border border-black p-2 text-left">
                المجموع الكلي للدرجات:
              </td>
              <td className="border border-black p-2 text-center text-sm font-black">
                {questions.reduce((a, b) => a + (b.marks || 1), 0)}
              </td>
            </tr>
          </tfoot>
        </table>

        <div className="border border-black p-3 text-xs space-y-1">
          <div className="font-bold">تنبيهات هامة للجنة تقدير الدرجات (المصححين):</div>
          <div>• تُقبل أي إجابة علمية أو لغوية أخرى يراها الطالب صحيحة وتؤدي نفس المعنى.</div>
          <div>• في المسائل والتمارين الرياضية: تراعى درجات القانون والخطوات والناتج ووحدة القياس.</div>
        </div>
      </div>
    </div>
  );
};
