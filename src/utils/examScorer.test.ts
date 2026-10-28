import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateGrade, isAnswerCorrect, evaluateExam } from './examScorer';
import { Question } from '../types/exam';

test('calculateGrade assigns correct Egyptian prep certificates', () => {
  assert.equal(calculateGrade(95), 'ممتاز');
  assert.equal(calculateGrade(85), 'ممتاز');
  assert.equal(calculateGrade(80), 'جيد جداً');
  assert.equal(calculateGrade(75), 'جيد جداً');
  assert.equal(calculateGrade(70), 'جيد');
  assert.equal(calculateGrade(65), 'جيد');
  assert.equal(calculateGrade(55), 'مقبول');
  assert.equal(calculateGrade(50), 'مقبول');
  assert.equal(calculateGrade(45), 'يحتاج إلى مراجعة ودعم');
});

test('isAnswerCorrect evaluates MCQ and text correctly', () => {
  const mcqQuestion: Question = {
    id: 'q1',
    unit: 1,
    unitTitle: 'الوحدة الأولى: القوى والحركة',
    lessonTitle: 'الحركة في اتجاه واحد',
    type: 'mcq',
    prompt: 'ما هي وحدة قياس السرعة؟',
    options: ['م/ث', 'م/ث²', 'كم.ث', 'م.ث'],
    correctOptionIndex: 0,
    correctAnswerText: 'م/ث',
    modelAnswer: 'م/ث (متر لكل ثانية)',
    explanation: 'السرعة هي المسافة المقطوعة خلال وحدة الزمن.',
    marks: 2,
    difficulty: 'easy'
  };

  assert.equal(isAnswerCorrect(mcqQuestion, { questionId: 'q1', selectedOptionIndex: 0 }), true);
  assert.equal(isAnswerCorrect(mcqQuestion, { questionId: 'q1', selectedOptionIndex: 1 }), false);
  assert.equal(isAnswerCorrect(mcqQuestion, undefined), false);

  const termQuestion: Question = {
    id: 'q2',
    unit: 2,
    unitTitle: 'الوحدة الثانية: الطاقة الضوئية',
    lessonTitle: 'المرايا',
    type: 'scientific_term',
    prompt: 'نقطة وهمية تتوسط السطح العاكس للمرآة الكرية.',
    correctAnswerText: 'قطب المرآة',
    modelAnswer: 'قطب المرآة (ق)',
    explanation: 'تعريف قطب المرآة الكرية.',
    marks: 2,
    difficulty: 'easy'
  };

  assert.equal(isAnswerCorrect(termQuestion, { questionId: 'q2', writtenAnswer: 'قطب المرآة' }), true);
  assert.equal(isAnswerCorrect(termQuestion, { questionId: 'q2', isSelfMarkedCorrect: true }), true);
  assert.equal(isAnswerCorrect(termQuestion, { questionId: 'q2', isSelfMarkedCorrect: false }), false);
});

test('evaluateExam computes scores, unit breakdowns, and percentage', () => {
  const questions: Question[] = [
    {
      id: 'q1',
      unit: 1,
      unitTitle: 'الوحدة 1',
      lessonTitle: 'درس 1',
      type: 'mcq',
      prompt: 'سؤال 1',
      options: ['أ', 'ب'],
      correctOptionIndex: 0,
      correctAnswerText: 'أ',
      modelAnswer: 'أ',
      explanation: 'شرح',
      marks: 10,
      difficulty: 'easy'
    },
    {
      id: 'q2',
      unit: 2,
      unitTitle: 'الوحدة 2',
      lessonTitle: 'درس 2',
      type: 'mcq',
      prompt: 'سؤال 2',
      options: ['أ', 'ب'],
      correctOptionIndex: 1,
      correctAnswerText: 'ب',
      modelAnswer: 'ب',
      explanation: 'شرح',
      marks: 10,
      difficulty: 'easy'
    },
    {
      id: 'q3',
      unit: 3,
      unitTitle: 'الوحدة 3',
      lessonTitle: 'درس 3',
      type: 'mcq',
      prompt: 'سؤال 3',
      options: ['أ', 'ب'],
      correctOptionIndex: 0,
      correctAnswerText: 'أ',
      modelAnswer: 'أ',
      explanation: 'شرح',
      marks: 20,
      difficulty: 'easy'
    }
  ];

  const studentAnswers = {
    q1: { questionId: 'q1', selectedOptionIndex: 0 }, // 10/10 in unit 1
    q2: { questionId: 'q2', selectedOptionIndex: 0 }, // 0/10 in unit 2 (wrong)
    q3: { questionId: 'q3', selectedOptionIndex: 0 }  // 20/20 in unit 3
  };

  const result = evaluateExam(questions, studentAnswers);

  assert.equal(result.totalMarks, 40);
  assert.equal(result.score, 30);
  assert.equal(result.percentage, 75);
  assert.equal(result.grade, 'جيد جداً');
  assert.equal(result.passed, true);
  assert.equal(result.correctCount, 2);

  // Unit breakdowns
  assert.equal(result.unitBreakdown[1].score, 10);
  assert.equal(result.unitBreakdown[1].percentage, 100);
  assert.equal(result.unitBreakdown[2].score, 0);
  assert.equal(result.unitBreakdown[2].percentage, 0);
  assert.equal(result.unitBreakdown[3].score, 20);
  assert.equal(result.unitBreakdown[3].percentage, 100);
});
