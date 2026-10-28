import { Question, StudentAnswer, ExamEvaluationResult, UnitNumber, UnitScoreBreakdown } from '../types/exam';

export function calculateGrade(percentage: number): 'ممتاز' | 'جيد جداً' | 'جيد' | 'مقبول' | 'يحتاج إلى مراجعة ودعم' {
  if (percentage >= 85) return 'ممتاز';
  if (percentage >= 75) return 'جيد جداً';
  if (percentage >= 65) return 'جيد';
  if (percentage >= 50) return 'مقبول';
  return 'يحتاج إلى مراجعة ودعم';
}

export function isAnswerCorrect(question: Question, answer?: StudentAnswer): boolean {
  if (!answer) return false;

  if (question.type === 'mcq') {
    return answer.selectedOptionIndex !== undefined && answer.selectedOptionIndex === question.correctOptionIndex;
  }

  // For open-ended / written questions, either self-marked or verified text
  if (answer.isSelfMarkedCorrect !== undefined) {
    return answer.isSelfMarkedCorrect;
  }

  if (answer.writtenAnswer) {
    const cleanAnswer = answer.writtenAnswer.trim().toLowerCase();
    const cleanExpected = question.correctAnswerText.trim().toLowerCase();
    return cleanAnswer.length > 0 && (cleanAnswer === cleanExpected || cleanAnswer.includes(cleanExpected));
  }

  return false;
}

export function evaluateExam(questions: Question[], studentAnswers: Record<string, StudentAnswer>): ExamEvaluationResult {
  let totalMarks = 0;
  let earnedScore = 0;
  let correctCount = 0;

  const unitMap: Record<UnitNumber, UnitScoreBreakdown> = {
    1: { unitNumber: 1, unitTitle: 'الوحدة الأولى', score: 0, totalMarks: 0, percentage: 0, questionCount: 0, correctCount: 0 },
    2: { unitNumber: 2, unitTitle: 'الوحدة الثانية', score: 0, totalMarks: 0, percentage: 0, questionCount: 0, correctCount: 0 },
    3: { unitNumber: 3, unitTitle: 'الوحدة الثالثة', score: 0, totalMarks: 0, percentage: 0, questionCount: 0, correctCount: 0 }
  };

  for (const q of questions) {
    const qMarks = q.marks || 1;
    totalMarks += qMarks;

    const unit = q.unit;
    if (unitMap[unit]) {
      unitMap[unit].totalMarks += qMarks;
      unitMap[unit].questionCount += 1;
      if (q.unitTitle) {
        unitMap[unit].unitTitle = q.unitTitle;
      }
    }

    const answer = studentAnswers[q.id];
    const correct = isAnswerCorrect(q, answer);

    if (correct) {
      earnedScore += qMarks;
      correctCount += 1;
      if (unitMap[unit]) {
        unitMap[unit].score += qMarks;
        unitMap[unit].correctCount += 1;
      }
    }
  }

  for (const u of [1, 2, 3] as UnitNumber[]) {
    const b = unitMap[u];
    b.percentage = b.totalMarks > 0 ? Math.round((b.score / b.totalMarks) * 1000) / 10 : 0;
  }

  const finalPercentage = totalMarks > 0 ? Math.round((earnedScore / totalMarks) * 1000) / 10 : 0;
  const grade = calculateGrade(finalPercentage);
  const passed = finalPercentage >= 50;

  let feedbackMessage = '';
  if (finalPercentage >= 90) {
    feedbackMessage = 'ما شاء الله! أداء استثنائي ونتيجة متميزة تعكس استيعاباً كاملاً للوحدات الثلاث وإتقاناً لجميع المفاهيم والقوانين.';
  } else if (finalPercentage >= 80) {
    feedbackMessage = 'أداء رائع جداً! استيعاب قوي لمعظم موضوعات الوحدات الثلاث مع حاجة بسيطة لمراجعة الجزئيات الدقيقة.';
  } else if (finalPercentage >= 65) {
    feedbackMessage = 'مستوى جيد ومبشر، ننصحك بمراجعة الوحدة التي حصلت فيها على نسبة أقل والاطلاع على نموذج الإجابة النموذجي.';
  } else if (finalPercentage >= 50) {
    feedbackMessage = 'نجاح مقبول، ولكن تحتاج إلى تعزيز فهمك للقوانين والمفاهيم الأساسية في الوحدات الثلاث لتحقيق الدرجة النهائية.';
  } else {
    feedbackMessage = 'تحتاج إلى قضاء مزيد من الوقت في دراسة الوحدات الثلاث والاطلاع على ملخص القوانين ونموذج الإجابة المفصل، ثم إعادة المحاولة.';
  }

  return {
    score: earnedScore,
    totalMarks,
    percentage: finalPercentage,
    grade,
    passed,
    unitBreakdown: unitMap,
    correctCount,
    totalQuestions: questions.length,
    feedbackMessage
  };
}
