import { Question, SubjectInfo, SubjectId } from '../types/exam';

export const SUBJECTS: SubjectInfo[] = [
  {
    id: 'english',
    name: 'اللغة الإنجليزية (New Hello!)',
    subtitle: 'منهج مصر للشهادة الإعدادية • Units 1, 2 & 3',
    iconName: 'Languages',
    accentColor: 'from-blue-600 to-indigo-700',
    totalExamMarks: 40,
    timeMinutes: 45,
    units: [
      {
        unitNumber: 1,
        title: 'Unit 1: Around Town',
        description: 'Directions, prepositions of time/place, public transport, and present simple for timetables',
        topics: ['Prepositions: at / on / in', 'Present Simple for Timetables', 'Places in Town: aquarium, botanical gardens, monument', 'Alexandria trams & Ismailia']
      },
      {
        unitNumber: 2,
        title: 'Unit 2: Go Shopping',
        description: 'Shopping online and in stores, comparatives and superlatives, both/either/neither/none',
        topics: ['Comparatives (-er / more) & Superlatives (-est / most)', 'Both ... and / Either ... or / Neither ... nor', 'Kitchen appliances: kettle, microwave, toaster', 'Writing an online review & email of complaint']
      },
      {
        unitNumber: 3,
        title: 'Unit 3: My Community',
        description: 'Community projects, Decent Life (حياة كريمة), present continuous for future arrangements, -ed vs -ing adjectives',
        topics: ['Present Continuous for Planned Future Arrangements', 'Adjectives ending in -ed vs -ing', 'Decent Life Initiative (مبادرة حياة كريمة)', 'Community facilities & neighbourhood']
      }
    ]
  },
  {
    id: 'science',
    name: 'مادة العلوم',
    subtitle: 'الوحدات: القوى والحركة • الطاقة الضوئية • الكون والنظام الشمسي',
    iconName: 'Atom',
    accentColor: 'from-emerald-600 to-teal-700',
    totalExamMarks: 40,
    timeMinutes: 45,
    units: [
      {
        unitNumber: 1,
        title: 'الوحدة الأولى: القوى والحركة',
        description: 'الحركة في اتجاه واحد، السرعة والعجلة، الكميات القياسية والمتجهة',
        topics: ['السرعة المنتظمة وغير المنتظمة', 'السرعة المتوسطة والنسبية', 'العجلة المنتظمة الموجبة والسالبة', 'المسافة والإزاحة']
      },
      {
        unitNumber: 2,
        title: 'الوحدة الثانية: الطاقة الضوئية',
        description: 'المرايا المستوية والكرية، العدسات، وعيوب الإبصار',
        topics: ['قوانين انعكاس الضوء', 'المرآة المقعرة والمحدبة', 'العدسة المحدبة والمقعرة', 'قصر وطول النظر والعدسات اللاصقة']
      },
      {
        unitNumber: 3,
        title: 'الوحدة الثالثة: الكون والنظام الشمسي',
        description: 'نشأة الكون (الانفجار العظيم)، ونظريات نشأة المجموعة الشمسية',
        topics: ['المجرات وتمدد الكون', 'نظرية الانفجار العظيم', 'نظرية السديم (لابلاس)', 'نظرية النجم العابر والنظرية الحديثة']
      }
    ]
  },
  {
    id: 'arabic',
    name: 'اللغة العربية',
    subtitle: 'الوحدات: قيم وحياة • طلب العلم • القراءة والنحو والقصة',
    iconName: 'BookOpen',
    accentColor: 'from-amber-600 to-orange-700',
    totalExamMarks: 40,
    timeMinutes: 45,
    units: [
      {
        unitNumber: 1,
        title: 'الوحدة الأولى: قيم وحياة',
        description: 'نص عباد الرحمن، درس قصة أثر، المنادى وأنواعه',
        topics: ['سورة الفرقان (عباد الرحمن)', 'الكنيسة المعلقة وقلعة قايتباي', 'المنادى المضاف والشبيه بالمضاف والنكرة والمفرد']
      },
      {
        unitNumber: 2,
        title: 'الوحدة الثانية: طلب العلم وعظمة الخالق',
        description: 'نص فضل العلم، درس سميرة موسى، البدل وأنواعه',
        topics: ['حديث شريف (فضل العلم)', 'عالمة الذرة سميرة موسى', 'البدل المطابق وبعض من كل والاشتمال']
      },
      {
        unitNumber: 3,
        title: 'الوحدة الثالثة: الأمل والعمل والوطنية',
        description: 'نص كن جميلاً، طريق النور (برايل)، أسلوب المدح والذم والممنوع من الصرف',
        topics: ['شعر كن جميلاً لإيليا أبو ماضي', 'لويس برايل وطريقة القراءة', 'نعم وبئس وحبذا، الممنوع من الصرف']
      }
    ]
  },
  {
    id: 'social',
    name: 'الدراسات الاجتماعية',
    subtitle: 'الوحدات: الجغرافيا الطبيعية • جغرافية السكان • تاريخ مصر الحديث',
    iconName: 'Globe',
    accentColor: 'from-emerald-700 to-teal-800',
    totalExamMarks: 40,
    timeMinutes: 45,
    units: [
      {
        unitNumber: 1,
        title: 'الوحدة الأولى: الجغرافيا الطبيعية للعالم',
        description: 'قارات العالم، التضاريس، والمناخ والنبات الطبيعي',
        topics: ['موقع ومساحة القارات', 'جبال وهضاب وسهول العالم', 'الأقاليم المناخية الحارة والمعتدلة والباردة']
      },
      {
        unitNumber: 2,
        title: 'الوحدة الثانية: جغرافية سكان العالم',
        description: 'السلالات البشرية الرئيسية، وتوزيع السكان ومعدلات الزيادة',
        topics: ['السلالة الزنجية والقوقازية والمغولية', 'توزيع السكان وتركزهم', 'الخصائص التعليمية والصحية']
      },
      {
        unitNumber: 3,
        title: 'الوحدة الثالثة: مصر تحت الحكم العثماني والحديث',
        description: 'المماليك والعثمانيون، الحملة الفرنسية، وتولية محمد علي',
        topics: ['معركة مرج دابق والريدانية', 'الحملة الفرنسية ونتائجها العلمية والسياسية', 'ثورة الشعب 1805 وبناء الدولة الحديثة']
      }
    ]
  },
  {
    id: 'math',
    name: 'الرياضيات',
    subtitle: 'الوحدات: حاصل الضرب الديكارتي والدوال • النسبة والتناسب • حساب المثلثات',
    iconName: 'Calculator',
    accentColor: 'from-rose-600 to-pink-700',
    totalExamMarks: 40,
    timeMinutes: 45,
    units: [
      {
        unitNumber: 1,
        title: 'الوحدة الأولى: العلاقات والدوال',
        description: 'حاصل الضرب الديكارتي، بيان العلاقة، دوال كثيرات الحدود',
        topics: ['حاصل الضرب الديكارتي للأزواج المرتبة', 'مفهوم الدالة والمجال والمدى', 'الدالة الخطية والتربيعية وتمثيلها']
      },
      {
        unitNumber: 2,
        title: 'الوحدة الثانية: النسبة والتناسب',
        description: 'خواص التناسب، التناسب المتسلسل، التغير الطردي والعكسي',
        topics: ['خواص التناسب والتناسب المتسلسل', 'التغير الطردي y = mx', 'التغير العكسي y = m/x']
      },
      {
        unitNumber: 3,
        title: 'الوحدة الثالثة: حساب المثلثات',
        description: 'النسب المثلثية الأساسية للزاوية الحادة وقيم الزوايا الخاصة',
        topics: ['جيب الزاوية (جا) وجيب التمام (جتا) والظل (ظا)', 'النسب المثلثية للزوايا 30° و 60° و 45°', 'تطبيقات هندسية']
      }
    ]
  }
];

export const ENGLISH_QUESTIONS: Question[] = [
  // ================= UNIT 1: Around Town =================
  {
    id: 'eng_u1_q1',
    unit: 1,
    unitTitle: 'Unit 1: Around Town',
    lessonTitle: 'Vocabulary & Definitions',
    type: 'mcq',
    prompt: 'A large area of water with land all around it is called a / an ............',
    options: ['lake', 'island', 'aquarium', 'monument'],
    correctOptionIndex: 0,
    correctAnswerText: 'lake',
    modelAnswer: 'lake (بحيرة). Example in the syllabus: Lake Timsah near Ismailia is a beautiful lake surrounded by beaches.',
    explanation: 'تعريف البحيرة (lake): مساحة واسعة من المياه تحيط بها اليابسة من جميع الجهات. أما الجزيرة (island) فهي يابسة تحيط بها المياه من كل جانب.',
    marks: 2,
    difficulty: 'easy'
  },
  {
    id: 'eng_u1_q2',
    unit: 1,
    unitTitle: 'Unit 1: Around Town',
    lessonTitle: 'Grammar: Prepositions of Time (at / on / in)',
    type: 'mcq',
    prompt: 'The train to Alexandria leaves ............ 7:30 ............ Sunday morning.',
    options: ['at / on', 'in / at', 'on / at', 'at / in'],
    correctOptionIndex: 0,
    correctAnswerText: 'at / on',
    modelAnswer: 'at / on. We use "at" with clock times (at 7:30) and "on" with days of the week and specific dates (on Sunday morning).',
    explanation: 'قاعدة حروف جر الوقت في منهج تالتة إعدادي:\n• at: تأتي مع الساعات (at 7:30)، والوجبات (at lunchtime)، و (at the weekend / at night).\n• on: تأتي مع الأيام والتواريخ (on Sunday, on 15th October).\n• in: تأتي مع الشهور والسنين وأوقات اليوم (in the morning, in 2026).',
    marks: 2,
    difficulty: 'easy'
  },
  {
    id: 'eng_u1_q3',
    unit: 1,
    unitTitle: 'Unit 1: Around Town',
    lessonTitle: 'Grammar: Present Simple for Public Timetables',
    type: 'mcq',
    prompt: 'Hurry up! The metro train ............ at 8:15 AM from platform 2.',
    options: ['leaves', 'is going to leave', 'leaving', 'left'],
    correctOptionIndex: 0,
    correctAnswerText: 'leaves',
    modelAnswer: 'leaves (Present Simple). In English, we use the Present Simple tense to talk about scheduled events and public transportation timetables (trains, planes, buses, classes).',
    explanation: 'يستخدم المضارع البسيط (Present Simple: فعل + s مع المفرد) للتعبير عن المواعيد والجداول الثابتة لوسائل المواصلات والامتحانات والسينما.',
    marks: 2,
    difficulty: 'medium'
  },
  {
    id: 'eng_u1_q4',
    unit: 1,
    unitTitle: 'Unit 1: Around Town',
    lessonTitle: 'Language Functions: Dialogue Completion',
    type: 'problem_solving',
    contextSnippet: 'Ahmed is asking a tourist at Cairo Station about his trip to Ismailia.',
    prompt: 'Complete the dialogue:\nAhmed: Excuse me, where are you going today?\nTourist: I am going to Ismailia.\nAhmed: (1) .............................................................. ?\nTourist: Because I want to see Lake Timsah and the beautiful gardens there.\nAhmed: Which platform does the train leave from?\nTourist: (2) .............................................................. .',
    correctAnswerText: '(1) Why are you going there? / Why Ismailia? - (2) It leaves from platform 4.',
    modelAnswer: '(1) Why are you going there? (or: Why do you want to visit Ismailia?)\n(2) It leaves from platform 4 (or: Platform 2 / Platform 3).',
    explanation: 'السؤال بـ Why مناسب جداً لأن الإجابة بدأت بـ Because. وبالنسبة للمنصة يذكر رقم المنصة Platform + رقم.',
    marks: 4,
    difficulty: 'medium'
  },
  {
    id: 'eng_u1_q5',
    unit: 1,
    unitTitle: 'Unit 1: Around Town',
    lessonTitle: 'Grammar: Correct the word in brackets',
    type: 'problem_solving',
    prompt: 'Complete the sentence with the correct form of the word in brackets:\n"The exhibition (finish) .................... on 25th November."',
    correctAnswerText: 'finishes',
    modelAnswer: 'finishes. Explanation: "The exhibition" is a singular subject referring to a fixed timetable/schedule, so the verb takes "-es" in the present simple.',
    explanation: 'المعارض والمواعيد المحددة تعامل معاملة المضارع البسيط مع المفرد: finish تنتهي بـ sh فيضاف لها es فتصبح finishes.',
    marks: 2,
    difficulty: 'easy'
  },

  // ================= UNIT 2: Go Shopping =================
  {
    id: 'eng_u2_q1',
    unit: 2,
    unitTitle: 'Unit 2: Go Shopping',
    lessonTitle: 'Vocabulary: Household Appliances',
    type: 'mcq',
    prompt: 'A kitchen machine which boils water quickly for tea or coffee is a ............',
    options: ['kettle', 'microwave', 'toaster', 'fridge'],
    correctOptionIndex: 0,
    correctAnswerText: 'kettle',
    modelAnswer: 'kettle (غلاية مياه كهربائية). "A kettle is a machine that boils water."',
    explanation: 'الكلمات الرئيسية في الوحدة الثانية: kettle (غلاية)، microwave (ميكروويف)، toaster (محمصة خبز).',
    marks: 2,
    difficulty: 'easy'
  },
  {
    id: 'eng_u2_q2',
    unit: 2,
    unitTitle: 'Unit 2: Go Shopping',
    lessonTitle: 'Grammar: Both / Either / Neither / None',
    type: 'mcq',
    prompt: '............ the smart TV and the speaker were on special offer in the shop.',
    options: ['Both', 'Either', 'Neither', 'None'],
    correctOptionIndex: 0,
    correctAnswerText: 'Both',
    modelAnswer: 'Both. We use "Both ... and" with a plural verb (were) when talking about two things together.',
    explanation: 'قاعدة كلا الأمرين:\n• Both ... and + فعل جمع (were).\n• Either ... or (إما ... أو).\n• Neither ... nor (لا هذا ولا ذاك).',
    marks: 2,
    difficulty: 'easy'
  },
  {
    id: 'eng_u2_q3',
    unit: 2,
    unitTitle: 'Unit 2: Go Shopping',
    lessonTitle: 'Grammar: Comparatives & Superlatives',
    type: 'mcq',
    prompt: 'Online shopping is usually ............ than shopping in normal stores.',
    options: ['easier', 'easiest', 'more easy', 'as easy'],
    correctOptionIndex: 0,
    correctAnswerText: 'easier',
    modelAnswer: 'easier. "easy" is a two-syllable adjective ending in "-y", so its comparative form is "easier than".',
    explanation: 'في المقارنة بين شيئين مع وجود than، الصفات المنتهية بـ y نحذف الـ y ونضيف ier فتصبح easier than.',
    marks: 2,
    difficulty: 'easy'
  },
  {
    id: 'eng_u2_q4',
    unit: 2,
    unitTitle: 'Unit 2: Go Shopping',
    lessonTitle: 'Grammar: Correct the word in brackets',
    type: 'problem_solving',
    prompt: 'Complete the sentences with the correct form of the words in brackets:\n1. Neither of the two mobile phones (be) .................... cheap.\n2. This is the (good) .................... electronic product I have ever bought.',
    correctAnswerText: '1. is / was - 2. best',
    modelAnswer: '1. is (or was). "Neither of + plural noun" takes a singular verb.\n2. best. The superlative form of the irregular adjective "good" is "the best".',
    explanation: '١. بعد Neither of الاسم جمع والفعل مفرد (is).\n٢. صيغة التفضيل العليا من good هي the best.',
    marks: 4,
    difficulty: 'medium'
  },
  {
    id: 'eng_u2_q5',
    unit: 2,
    unitTitle: 'Unit 2: Go Shopping',
    lessonTitle: 'Writing: Online Review & Complaints',
    type: 'problem_solving',
    prompt: 'Write an online review (about 40-50 words) about "An electronic item you bought online recently":',
    correctAnswerText: 'Model review about a smart watch or microwave',
    modelAnswer: 'Model Answer:\n"Last week, I ordered a smart microwave online. The delivery was very fast and arrived in two days. The microwave looks modern and works wonderfully. It heats food quickly and was cheaper than in shops because of a 20% discount. I highly recommend buying it!"',
    explanation: 'مواصفات كتابة الريفيو: ذكر اسم السلعة، مدة التوصيل، مميزاتها وسعرها، والتوصية النهائية.',
    marks: 4,
    difficulty: 'medium'
  },

  // ================= UNIT 3: My Community =================
  {
    id: 'eng_u3_q1',
    unit: 3,
    unitTitle: 'Unit 3: My Community',
    lessonTitle: 'Vocabulary & Decent Life Initiative',
    type: 'mcq',
    prompt: 'The "Decent Life" initiative (حياة كريمة) in Egypt aims to ............ the quality of public services in rural areas.',
    options: ['improve', 'destroy', 'pollute', 'ignore'],
    correctOptionIndex: 0,
    correctAnswerText: 'improve',
    modelAnswer: 'improve (يحسّن / يطوّر). The Decent Life initiative is an Egyptian national project that improves healthcare, education, and facilities for millions of people.',
    explanation: 'مبادرة حياة كريمة (Decent Life Initiative) موضوع رئيسي في الوحدة الثالثة، والهدف منها هو تحسين (improve) الخدمات العامة ومرافق القرى.',
    marks: 2,
    difficulty: 'easy'
  },
  {
    id: 'eng_u3_q2',
    unit: 3,
    unitTitle: 'Unit 3: My Community',
    lessonTitle: 'Grammar: Present Continuous for Future Arrangements',
    type: 'mcq',
    prompt: 'We ............ a community meeting in the town hall tomorrow at 5 PM. Everything is arranged and prepared.',
    options: ['are having', 'have had', 'had', 'will to have'],
    correctOptionIndex: 0,
    correctAnswerText: 'are having',
    modelAnswer: 'are having. We use the Present Continuous (am/is/are + verb-ing) to talk about fixed future plans where arrangements have already been made ("Everything is arranged").',
    explanation: 'الخطط والترتيبات المستقبلية المؤكدة (وجود كلمات مثل arranged / booked / prepared) نستخدم معها زمن المضارع المستمر (am / is / are + v-ing).',
    marks: 2,
    difficulty: 'medium'
  },
  {
    id: 'eng_u3_q3',
    unit: 3,
    unitTitle: 'Unit 3: My Community',
    lessonTitle: 'Grammar: Adjectives with -ed and -ing',
    type: 'mcq',
    prompt: 'The football match was so ............ that all the spectators were very ............',
    options: [
      'exciting / excited',
      'excited / exciting',
      'exciting / exciting',
      'excited / excited'
    ],
    correctOptionIndex: 0,
    correctAnswerText: 'exciting / excited',
    modelAnswer: 'exciting / excited. Adjectives ending in "-ing" describe the cause of the feeling (the match was exciting), while adjectives ending in "-ed" describe how people feel (the spectators were excited).',
    explanation: 'الصفة المنتهية بـ ing تصف الشيء المسبب للشعور (المباراة مثيرة exciting). والصفة المنتهية بـ ed تصف شعور الشخص (المتفرجون متحمسون excited).',
    marks: 2,
    difficulty: 'medium'
  },
  {
    id: 'eng_u3_q4',
    unit: 3,
    unitTitle: 'Unit 3: My Community',
    lessonTitle: 'Grammar: Correct the word in brackets',
    type: 'problem_solving',
    prompt: 'Complete the sentences with the correct form of the words in brackets:\n1. The students were (amaze) .................... by the new solar energy project in their village.\n2. What (you / do) .................... next Friday morning? I bought our train tickets.',
    correctAnswerText: '1. amazed - 2. are you doing',
    modelAnswer: '1. amazed (describing the students\' feeling).\n2. are you doing (Present Continuous for future arrangement because tickets are already bought).',
    explanation: '١. الطلاب شعروا بالانبهار فتكون amazed.\n٢. التذاكر تم شراؤها إذن ترتيب مستقبلي مؤكد فنستخدم are you doing.',
    marks: 4,
    difficulty: 'medium'
  },
  {
    id: 'eng_u3_q5',
    unit: 3,
    unitTitle: 'Unit 3: My Community',
    lessonTitle: 'Reading Comprehension & Vocabulary',
    type: 'scientific_term',
    prompt: 'Write the correct word: "The equipment, rooms, or services provided in a town for a particular purpose (e.g. sports, healthcare, education)".',
    correctAnswerText: 'facilities',
    modelAnswer: 'facilities (المرافق والخدمات العامة مثل المراكز الرياضية والمستشفيات والمدارس).',
    explanation: 'كلمة facilities من أهم مفردات الوحدة الثالثة في كتاب New Hello.',
    marks: 2,
    difficulty: 'easy'
  }
];

// Combine existing questions
export { SCIENCE_QUESTIONS, ARABIC_QUESTIONS, SOCIAL_QUESTIONS, MATH_QUESTIONS } from './examDataLegacy';

import { SCIENCE_QUESTIONS } from './examDataLegacy';
import { ARABIC_QUESTIONS } from './examDataLegacy';
import { SOCIAL_QUESTIONS } from './examDataLegacy';
import { MATH_QUESTIONS } from './examDataLegacy';

export function getQuestionsBySubject(subjectId: SubjectId): Question[] {
  switch (subjectId) {
    case 'english':
      return ENGLISH_QUESTIONS;
    case 'science':
      return SCIENCE_QUESTIONS;
    case 'arabic':
      return ARABIC_QUESTIONS;
    case 'social':
      return SOCIAL_QUESTIONS;
    case 'math':
      return MATH_QUESTIONS;
    case 'comprehensive':
    default:
      return [
        ...ENGLISH_QUESTIONS.slice(0, 5),
        ...SCIENCE_QUESTIONS.slice(0, 4),
        ...ARABIC_QUESTIONS.slice(0, 3),
        ...SOCIAL_QUESTIONS.slice(0, 2),
        ...MATH_QUESTIONS.slice(0, 2)
      ];
  }
}
