/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useEffect } from 'react';
import { SubjectId, UnitNumber, ExamEvaluationResult, StudentAnswer } from './types/exam';
import { SUBJECTS, getQuestionsBySubject } from './data/examData';
import { Navbar } from './components/Navbar';
import { SubjectSelector } from './components/SubjectSelector';
import { ExamSimulator } from './components/ExamSimulator';
import { ExamResultView } from './components/ExamResultView';
import { ModelAnswersView } from './components/ModelAnswersView';
import { RevisionNotesView } from './components/RevisionNotesView';
import { PrintableExamSheet } from './components/PrintableExamSheet';
import { sounds } from './utils/soundEffects';

export default function App() {
  const [currentSubjectId, setCurrentSubjectId] = useState<SubjectId>('english');
  const [selectedUnitFilter, setSelectedUnitFilter] = useState<UnitNumber | 'all'>('all');
  const [activeTab, setActiveTab] = useState<'exam' | 'model_answers' | 'revision'>('model_answers');
  const [examResult, setExamResult] = useState<ExamEvaluationResult | null>(null);
  const [studentAnswers, setStudentAnswers] = useState<Record<string, StudentAnswer>>({});
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Check for ?autostart=1 or ?tab= from URL
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('autostart') === '1') {
        setActiveTab('exam');
      }
      const subjectParam = params.get('subject') as SubjectId;
      if (subjectParam && SUBJECTS.some((s) => s.id === subjectParam)) {
        setCurrentSubjectId(subjectParam);
      }
    }
  }, []);

  const currentSubject = useMemo(() => {
    return (
      SUBJECTS.find((s) => s.id === currentSubjectId) || {
        id: 'english' as SubjectId,
        name: 'اللغة الإنجليزية (New Hello!)',
        subtitle: 'منهج مصر للشهادة الإعدادية • Units 1, 2 & 3',
        iconName: 'Languages',
        accentColor: 'from-blue-600 to-indigo-700',
        totalExamMarks: 40,
        timeMinutes: 45,
        units: []
      }
    );
  }, [currentSubjectId]);

  const rawQuestions = useMemo(() => {
    return getQuestionsBySubject(currentSubjectId);
  }, [currentSubjectId]);

  const activeQuestions = useMemo(() => {
    if (selectedUnitFilter === 'all') return rawQuestions;
    return rawQuestions.filter((q) => q.unit === selectedUnitFilter);
  }, [rawQuestions, selectedUnitFilter]);

  const handleFinishExam = (result: ExamEvaluationResult, answers: Record<string, StudentAnswer>) => {
    setExamResult(result);
    setStudentAnswers(answers);
  };

  const handleRetakeExam = () => {
    sounds.playClick();
    setExamResult(null);
    setStudentAnswers({});
    setActiveTab('exam');
  };

  const handlePrint = () => {
    sounds.playClick();
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col justify-between" dir="rtl">
      {/* 1. Header & Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={(tab) => {
          // If switching to exam, clear previous result to allow fresh test
          if (tab === 'exam' && examResult) {
            setExamResult(null);
          }
          setActiveTab(tab);
        }}
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
        onPrint={handlePrint}
      />

      {/* 2. Main Content Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex-1 w-full no-print">
        {/* Subject & Unit Selector Bar */}
        <SubjectSelector
          currentSubject={currentSubjectId}
          onSelectSubject={(subId) => {
            setCurrentSubjectId(subId);
            setExamResult(null);
            setStudentAnswers({});
          }}
          selectedUnitFilter={selectedUnitFilter}
          onSelectUnitFilter={setSelectedUnitFilter}
          totalQuestions={activeQuestions.length}
        />

        {/* Tab 1: Interactive Exam / Scorecard */}
        {activeTab === 'exam' && (
          <div>
            {examResult ? (
              <ExamResultView
                result={examResult}
                questions={activeQuestions}
                studentAnswers={studentAnswers}
                subject={currentSubject}
                onRetakeExam={handleRetakeExam}
                onGoToModelAnswers={() => setActiveTab('model_answers')}
                onPrint={handlePrint}
              />
            ) : (
              <ExamSimulator
                questions={activeQuestions}
                subject={currentSubject}
                onFinishExam={handleFinishExam}
                onGoToModelAnswers={() => setActiveTab('model_answers')}
              />
            )}
          </div>
        )}

        {/* Tab 2: Model Answers & Printable Booklet */}
        {activeTab === 'model_answers' && (
          <ModelAnswersView
            questions={activeQuestions}
            subject={currentSubject}
            onPrint={handlePrint}
            onStartExam={() => {
              setExamResult(null);
              setActiveTab('exam');
            }}
          />
        )}

        {/* Tab 3: Revision Flashcards & Summaries */}
        {activeTab === 'revision' && (
          <RevisionNotesView
            currentSubject={currentSubjectId}
            onStartExam={() => {
              setExamResult(null);
              setActiveTab('exam');
            }}
          />
        )}
      </main>

      {/* 3. Printable Version (Visible only during print preview / PDF export) */}
      <PrintableExamSheet
        questions={activeQuestions}
        subject={currentSubject}
      />

      {/* 4. Footer */}
      <footer className="bg-slate-900 text-slate-400 py-6 text-center text-xs border-t border-slate-800 no-print mt-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            منصة امتحانات الشهادة الإعدادية الرسمية ٢٠٢٦ / ٢٠٢٧ • جميع الحقوق محفوظة لطلاب مصر
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <span>الوحدات: الأولى والثانية والثالثة</span>
            <span>•</span>
            <button
              onClick={handlePrint}
              className="text-emerald-400 hover:text-emerald-300 font-semibold underline"
            >
              طباعة كراسة الامتحان والنموذج PDF
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
