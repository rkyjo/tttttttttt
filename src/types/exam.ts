export type SubjectId = 'science' | 'arabic' | 'social' | 'english' | 'math' | 'comprehensive';

export type UnitNumber = 1 | 2 | 3;

export type QuestionType = 
  | 'mcq'              // اختيار من متعدد
  | 'true_false'       // صح أم خطأ مع التعليل
  | 'scientific_term'  // اكتب المصطلح العلمي أو المفهوم
  | 'give_reason'      // علل لما يأتي / اذكر السبب
  | 'problem_solving'; // مسائل وخطوات حل / إعراب

export interface Question {
  id: string;
  unit: UnitNumber;
  unitTitle: string;
  lessonTitle: string;
  type: QuestionType;
  prompt: string;
  contextSnippet?: string; // e.g. text excerpt, sentence for grammar
  options?: string[];      // For MCQ
  correctOptionIndex?: number; // 0-based for MCQ
  correctAnswerText: string;   // Canonical correct answer
  modelAnswer: string;         // Comprehensive model answer for teachers/students
  explanation: string;         // Why this answer is correct & key concept
  marks: number;               // Marks allocated (e.g. 2, 3, 5)
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface SubjectInfo {
  id: SubjectId;
  name: string;
  subtitle: string;
  iconName: string;
  accentColor: string;
  units: {
    unitNumber: UnitNumber;
    title: string;
    description: string;
    topics: string[];
  }[];
  totalExamMarks: number;
  timeMinutes: number;
}

export interface StudentAnswer {
  questionId: string;
  selectedOptionIndex?: number;
  writtenAnswer?: string;
  isSelfMarkedCorrect?: boolean;
}

export interface UnitScoreBreakdown {
  unitNumber: UnitNumber;
  unitTitle: string;
  score: number;
  totalMarks: number;
  percentage: number;
  questionCount: number;
  correctCount: number;
}

export interface ExamEvaluationResult {
  score: number;
  totalMarks: number;
  percentage: number;
  grade: 'ممتاز' | 'جيد جداً' | 'جيد' | 'مقبول' | 'يحتاج إلى مراجعة ودعم';
  passed: boolean;
  unitBreakdown: Record<UnitNumber, UnitScoreBreakdown>;
  correctCount: number;
  totalQuestions: number;
  feedbackMessage: string;
}

export interface FlashcardNote {
  id: string;
  subjectId: SubjectId;
  unitNumber: UnitNumber;
  unitTitle: string;
  topic: string;
  title: string;
  content: string;
  bulletPoints?: string[];
  formulaOrRule?: string;
  highlight?: string;
}
