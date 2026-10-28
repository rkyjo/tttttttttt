import { FlashcardNote } from '../types/exam';

export const REVISION_FLASHCARDS: FlashcardNote[] = [
  // ================= ENGLISH (EGYPT PREP 3: NEW HELLO) =================
  {
    id: 'card_eng_1',
    subjectId: 'english',
    unitNumber: 1,
    unitTitle: 'Unit 1: Around Town',
    topic: 'Grammar: Prepositions of Time (at / on / in)',
    title: 'قاعدة حروف الجر الخاصة بالوقت (at / on / in)',
    content: 'Rule summary for New Hello Prep 3 Unit 1:',
    bulletPoints: [
      'at: تُستخدم مع الأوقات المحددة بالساعات: at 7:00, at half past two، ومع فترات العطلات والوجبات: at the weekend, at night, at lunchtime.',
      'on: تُستخدم مع الأيام والتواريخ المحددة: on Sunday, on Monday morning, on 15th October, on my birthday.',
      'in: تُستخدم مع الشهور والسنين وفصول السنة وفترات اليوم: in October, in 2026, in summer, in the morning / afternoon / evening.'
    ],
    formulaOrRule: 'at + clock time/night | on + day/date | in + month/year/season/part of day',
    highlight: 'مثال امتحاني: The train leaves at 7:30 on Monday morning.'
  },
  {
    id: 'card_eng_2',
    subjectId: 'english',
    unitNumber: 1,
    unitTitle: 'Unit 1: Around Town',
    topic: 'Grammar: Present Simple for Timetables',
    title: 'المضارع البسيط للمواعيد والجداول الثابتة',
    content: 'نستخدم زمن المضارع البسيط للتعبير عن مواعيد وسائل المواصلات والسينما والامتحانات والحصص.',
    bulletPoints: [
      'الفاعل المفرد (The train / plane / ferry / exhibition / lesson) يأخذ فعلاً مضافاً إليه s / es.',
      'The train leaves at 9:00 AM.',
      'The film finishes at 10:30 PM.',
      'What time does the match start?'
    ],
    formulaOrRule: 'Singular Subject + Verb-(s/es) + Time',
    highlight: 'حتى لو كان الموعد في المستقبل (غداً أو الليلة)، ما دام جدولاً رسمياً ثابتاً نستخدم المضارع البسيط وليس will!'
  },
  {
    id: 'card_eng_3',
    subjectId: 'english',
    unitNumber: 2,
    unitTitle: 'Unit 2: Go Shopping',
    topic: 'Grammar: Both / Either / Neither / None',
    title: 'قواعد التعبير عن الاختيار والمقارنة (Both / Either / Neither)',
    content: 'روابط هامة جداً في امتحانات الشهادة الإعدادية بمصر:',
    bulletPoints: [
      'Both ... and (كلا من ... و): تأخذ دائماً فعلاً في صيغة الجمع (plural verb): Both Ali and Mona are happy.',
      'Either ... or (إما ... أو): يتبع الفعل الفاعل الأقرب له: Either the teacher or the students are in the lab.',
      'Neither ... nor (لا ... ولا): يتبع الفعل الفاعل الأقرب له: Neither Ahmed nor his brothers were at home.',
      'Neither of + اسم جمع: يأخذ فعلاً مفرداً: Neither of the phones is working.'
    ],
    formulaOrRule: 'Both + A + and + B + Plural Verb | Neither of + Plural Noun + Singular Verb',
    highlight: 'في سؤال تصحيح الكلمة بين قوسين: Both my sisters (likes) -> like (جمع).'
  },
  {
    id: 'card_eng_4',
    subjectId: 'english',
    unitNumber: 2,
    unitTitle: 'Unit 2: Go Shopping',
    topic: 'Grammar: Comparatives & Superlatives',
    title: 'صيغ المقارنة والتفضيل (Comparatives & Superlatives)',
    content: 'طرق المقارنة بين الأشياء والصفات الشاذة:',
    bulletPoints: [
      'الصفات القصيرة: adjective + er + than (cheaper than, faster than).',
      'الصفات الطويلة: more / less + adjective + than (more expensive than).',
      'صيغة التفضيل العليا: the + adjective + est (the cheapest) أو the most / least + adjective (the most popular).',
      'الصفات الشاذة: good -> better than -> the best | bad -> worse than -> the worst | far -> further than -> the furthest.'
    ],
    formulaOrRule: 'good -> better than -> the best | bad -> worse than -> the worst',
    highlight: 'كلمة than تدل على المقارنة الثنائية، وكلمة the قبل النقط تدل على التفضيل الأعلى.'
  },
  {
    id: 'card_eng_5',
    subjectId: 'english',
    unitNumber: 3,
    unitTitle: 'Unit 3: My Community',
    topic: 'Grammar: Present Continuous for Future Arrangements',
    title: 'المضارع المستمر للترتيبات المستقبلية المؤكدة',
    content: 'عند التحدث عن خطط مستقبلية تم حجز تذاكرها أو إعداد ترتيباتها بالكامل.',
    bulletPoints: [
      'التكوين: am / is / are + verb-ing.',
      'الكلمات الدالة: arranged, prepared, booked tickets, packed bags.',
      'مثال: We are travelling to Alexandria tomorrow; we have booked the tickets.'
    ],
    formulaOrRule: 'Subject + am/is/are + Verb-ing + Future Time (Arranged)',
    highlight: 'إذا وجدت كلمة "Everything is arranged" أو "I have booked" اختر فوراً المضارع المستمر!'
  },
  {
    id: 'card_eng_6',
    subjectId: 'english',
    unitNumber: 3,
    unitTitle: 'Unit 3: My Community',
    topic: 'Grammar: Adjectives ending in -ed vs -ing',
    title: 'الصفات المنتهية بـ -ed مقابل -ing',
    content: 'الفرق البسيط بين شعور الفاعل والمسبب للشعور:',
    bulletPoints: [
      'الصفة المنتهية بـ -ed: تصف شعور الشخص وإحساسه الداخلي (The boy was bored / excited / interested / amazed).',
      'الصفة المنتهية بـ -ing: تصف الشيء أو الشخص الذي يسبب هذا الشعور (The film was boring / exciting / interesting / amazing).'
    ],
    formulaOrRule: '-ed = how someone feels | -ing = the cause of the feeling',
    highlight: 'I am interested in science. Science is an interesting subject.'
  },

  // ================= SCIENCE =================
  {
    id: 'card_sci_1',
    subjectId: 'science',
    unitNumber: 1,
    unitTitle: 'الوحدة الأولى: القوى والحركة',
    topic: 'قوانين السرعة والتحويلات',
    title: 'قانون السرعة والتحويل بين الوحدات',
    content: 'السرعة هي المسافة المقطوعة خلال وحدة الزمن، أو المعدل الزمني للتغير في المسافة.',
    formulaOrRule: 'السرعة (ع) = المسافة (ف) ÷ الزمن (ز) | للتحويل من كم/س إلى م/ث نضرب في (٥ / ١٨)',
    bulletPoints: [
      'السرعة المنتظمة: يقطع الجسم مسافات متساوية في أزمنة متساوية.',
      'السرعة المتوسطة: المسافة الكلية مقسومة على الزمن الكلي المستغرق.',
      'السرعة النسبية: سرعة جسم متحرك بالنسبة لمراقب ساكن أو متحرك.'
    ],
    highlight: 'إذا تحرك جسمان في نفس الاتجاه: السرعة النسبية = الفرق بين السرعتين. في عكس الاتجاه: السرعة النسبية = مجموع السرعتين.'
  },
  {
    id: 'card_sci_2',
    subjectId: 'science',
    unitNumber: 1,
    unitTitle: 'الوحدة الأولى: القوى والحركة',
    topic: 'العجلة المنتظمة وأنواعها',
    title: 'العجلة المنتظمة الموجبة والسالبة',
    content: 'العجلة هي مقدار التغير في سرعة الجسم خلال ثانية واحدة.',
    formulaOrRule: 'العجلة (جـ) = (ع₂ - ع₁) ÷ ز (متر / ثانية²)',
    bulletPoints: [
      'عجلة منتظمة موجبة: ع₂ > ع₁ (تزداد السرعة بمقادير متساوية).',
      'عجلة منتظمة سالبة: ع₁ > ع₂ (تتناقص السرعة بمقادير متساوية).',
      'إذا تحرك الجسم بسرعة منتظمة: العجلة = صفر.'
    ],
    highlight: 'إذا بدأ الجسم حركته من السكون: ع₁ = صفر. وإذا ضغط السائق على الفرامل حتى توقف: ع₂ = صفر.'
  },
  {
    id: 'card_sci_4',
    subjectId: 'science',
    unitNumber: 2,
    unitTitle: 'الوحدة الثانية: الطاقة الضوئية',
    topic: 'المرايا الكرية',
    title: 'المرايا المقعرة والمحدبة',
    content: 'المرآة المقعرة مجمعة للأشعة ومركزها أمام السطح العاكس. المرآة المحدبة مفرقة ومركزها خلف السطح العاكس.',
    formulaOrRule: 'نصف قطر التكور (نق) = ٢ × البعد البؤري (ع) | ع = نق ÷ ٢',
    bulletPoints: [
      'الجسم عند مركز التكور: تتكون صورة حقيقية مقلوبة مساوية للجسم عند المركز.',
      'الجسم بعد مركز التكور: صورة حقيقية مقلوبة مصغرة بين البؤرة والمركز.',
      'الجسم بين البؤرة والمركز: صورة حقيقية مقلوبة مكبرة بعد المركز.'
    ],
    highlight: 'الصورة التقديرية دائماً معتدلة ولا يمكن استقبالها على حائل وتنتج من تلاقي امتدادات الأشعة.'
  },
  {
    id: 'card_sci_6',
    subjectId: 'science',
    unitNumber: 3,
    unitTitle: 'الوحدة الثالثة: الكون والنظام الشمسي',
    topic: 'نشأة الكون والانفجار العظيم',
    title: 'نظرية الانفجار العظيم (Big Bang)',
    content: 'تفسر نشأة الكون من انفجار هائل حدث منذ ١٥ ألف مليون سنة تولدت منه كل أشكال المادة والطاقة والفضاء والزمن.',
    bulletPoints: [
      'بعد دقائق: التحمت الجسيمات وكونت غازي الهيدروجين (٧٥%) والهيليوم (٢٥%).',
      'بعد حوالي ٥٠٠٠ مليون سنة: اتخذت مجرة درب التبانة شكلها القرصي.',
      'بعد حوالي ١٠٠٠٠ مليون سنة: ولدت الشمس ونشأت الأرض والكواكب السيّارة.'
    ],
    highlight: 'السنة الضوئية = ٩.٤٦ × ١٠¹² كم (المسافة التي يقطعها الضوء في سنة كاملة بسرعة ٣٠٠ ألف كم/ث).'
  },

  // ================= ARABIC =================
  {
    id: 'card_ara_1',
    subjectId: 'arabic',
    unitNumber: 1,
    unitTitle: 'الوحدة الأولى: قيم وحياة',
    topic: 'النحو العربي: أنواع المنادى',
    title: 'أنواع المنادى وحكمه الإعرابي',
    content: 'المنادى يقع بعد أداة نداء. ينقسم إلى معرب ومبني:',
    bulletPoints: [
      'المنادى المعرب (منصوب): المضاف (يا طالبَ العلمِ)، الشبيه بالمضاف (يا طالباً للعلمِ)، النكرة غير المقصودة (يا غافلاً انتبه).',
      'المنادى المبني (يبنى على ما يرفع به في محل نصب): العلم المفرد (يا محمدُ)، النكرة المقصودة (يا رجلُ).'
    ],
    highlight: 'عند نداء ما فيه (أل) نأتي قبله بـ (أيها) للمذكر أو (أيتها) للمؤنث، ويعرب (أيُّ) منادى مبنياً على الضم في محل نصب.'
  }
];
