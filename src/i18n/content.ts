import { about, career, expertise, profile, type Category } from '../data/portfolioData.ts'
import type { PortfolioProject } from '../data/projectCatalog.ts'
import type { ProjectScreenshot } from '../data/projectImages.ts'
import type { Language } from './LanguageContext.tsx'

export const uiCopy = {
  en: {
    navProjects: 'Projects',
    navExpertise: 'Expertise',
    navJourney: 'Journey',
    navAbout: 'About',
    navOverview: 'Overview',
    navSolution: 'Solution',
    navFeatures: 'Features',
    navArchitecture: 'Architecture',
    resume: 'Resume',
    heroHeading: 'Building software for',
    heroAccent: ' SaaS & business systems.',
    viewProjects: 'View projects',
    downloadResume: 'Download resume',
    theWork: 'The work',
    projectsTitle: 'Projects',
    projectsDeck: 'One featured system, then the collection, filterable by category.',
    featured: 'Featured',
    openCaseStudy: 'Open case study',
    capabilities: 'Capabilities',
    expertiseTitle: 'Engineering expertise',
    theRecord: 'The record',
    journeyTitle: 'Career journey',
    contact: 'Contact',
    footerTitle: 'Build dependable systems.',
    footerDeck: 'Open to software engineering roles and SaaS / business-system engagements.',
    projectNotFound: 'Project not found',
    backToProjects: 'Back to projects',
    openLiveDemo: 'Open live demo',
    viewSource: 'View source',
    noLinks: 'No public demo or repository — screenshots only.',
    overviewKicker: '01 · Overview',
    overviewTitle: 'Overview',
    problemKicker: '02 · Context',
    problemTitle: 'Problem',
    solutionKicker: '03 · Approach',
    solutionTitle: 'Solution',
    roleKicker: '04 · Role',
    roleTitle: 'Role',
    stackKicker: '05 · Stack',
    stackTitle: 'Technology',
    featuresKicker: '06 · Product',
    featuresTitle: 'Features',
    architectureLabel: 'Architecture',
    architectureTitle: 'Architecture',
    challengesLabel: 'Challenges',
    challengesTitle: 'Challenges',
    artifactsLabel: 'Artifacts',
    screenshotsTitle: 'Screenshots',
    backToAllProjects: 'Back to all projects',
    all: 'All',
    viewImage: 'View image',
    openInGallery: 'Open in gallery',
    closeGallery: 'Close gallery',
    previousImage: 'Previous image',
    nextImage: 'Next image',
    galleryThumbnails: 'Gallery thumbnails',
    imageGallery: 'image gallery',
    switchLanguage: 'Switch to Arabic',
    telegram: 'Telegram',
    whatsapp: 'WhatsApp',
    linkedin: 'LinkedIn',
    youtube: 'YouTube',
    github: 'GitHub',
  },
  ar: {
    navProjects: 'المشاريع',
    navExpertise: 'الخبرات',
    navJourney: 'المسيرة',
    navAbout: 'نبذة عني',
    navOverview: 'نظرة عامة',
    navSolution: 'الحل',
    navFeatures: 'المزايا',
    navArchitecture: 'المعمارية',
    resume: 'السيرة الذاتية',
    heroHeading: 'أبني برمجيات لـ',
    heroAccent: ' منتجات SaaS وأنظمة الأعمال.',
    viewProjects: 'عرض المشاريع',
    downloadResume: 'تحميل السيرة الذاتية',
    theWork: 'أعمالي',
    projectsTitle: 'المشاريع',
    projectsDeck: 'مشروع مميز في البداية، ثم بقية الأعمال مع إمكانية التصفية حسب النوع.',
    featured: 'مميز',
    openCaseStudy: 'عرض تفاصيل المشروع',
    capabilities: 'القدرات',
    expertiseTitle: 'الخبرات الهندسية',
    theRecord: 'المسيرة',
    journeyTitle: 'رحلتي المهنية',
    contact: 'تواصل',
    footerTitle: 'لنبن أنظمة يمكن الاعتماد عليها.',
    footerDeck: 'متاح لفرص هندسة البرمجيات والعمل على منتجات SaaS وأنظمة الأعمال.',
    projectNotFound: 'المشروع غير موجود',
    backToProjects: 'العودة إلى المشاريع',
    openLiveDemo: 'فتح النسخة الحية',
    viewSource: 'عرض الكود المصدري',
    noLinks: 'لا توجد نسخة عامة أو مستودع متاح — لقطات الشاشة فقط.',
    overviewKicker: '01 · نظرة عامة',
    overviewTitle: 'نظرة عامة',
    problemKicker: '02 · السياق',
    problemTitle: 'المشكلة',
    solutionKicker: '03 · المنهج',
    solutionTitle: 'الحل',
    roleKicker: '04 · دوري',
    roleTitle: 'دوري',
    stackKicker: '05 · التقنيات',
    stackTitle: 'التقنيات المستخدمة',
    featuresKicker: '06 · المنتج',
    featuresTitle: 'المزايا',
    architectureLabel: 'المعمارية',
    architectureTitle: 'المعمارية',
    challengesLabel: 'التحديات',
    challengesTitle: 'التحديات',
    artifactsLabel: 'لقطات المشروع',
    screenshotsTitle: 'لقطات الشاشة',
    backToAllProjects: 'العودة إلى كل المشاريع',
    all: 'الكل',
    viewImage: 'عرض الصورة',
    openInGallery: 'فتح في المعرض',
    closeGallery: 'إغلاق المعرض',
    previousImage: 'الصورة السابقة',
    nextImage: 'الصورة التالية',
    galleryThumbnails: 'صور المعرض المصغرة',
    imageGallery: 'معرض الصور',
    switchLanguage: 'التبديل إلى الإنجليزية',
    telegram: 'تيليجرام',
    whatsapp: 'واتساب',
    linkedin: 'لينكد إن',
    youtube: 'يوتيوب',
    github: 'جيت هاب',
  },
} as const

const categoryArabic: Record<Category, string> = {
  'Web & SaaS': 'الويب و SaaS',
  'Desktop Systems': 'أنظمة سطح المكتب',
  'Telegram Mini Apps': 'تطبيقات تيليجرام المصغرة',
  'Telegram Bots': 'بوتات تيليجرام',
  'Unity Games': 'ألعاب Unity',
}

export function getCategoryLabel(category: Category, language: Language) {
  return language === 'ar' ? categoryArabic[category] : category
}

export function getFilterLabel(filter: 'All' | Category, language: Language) {
  if (filter === 'All') return uiCopy[language].all
  return getCategoryLabel(filter, language)
}

export function getLocalizedProfile(language: Language) {
  if (language === 'en') return profile
  return {
    ...profile,
    name: 'عمر أبو الخير',
    role: 'مهندس برمجيات',
    tagline: 'باك إند · SaaS · أنظمة أعمال',
    location: 'عن بُعد · حول العالم',
  }
}

export function getLocalizedAbout(language: Language) {
  if (language === 'en') return about
  return {
    heading: 'نبذة عني',
    body: 'مهندس برمجيات أركز على هندسة الباك إند، ومنتجات SaaS، وأنظمة الأعمال. أبني المنتجات كاملة من البداية للنهاية — واجهات API، وقواعد البيانات، والمعماريات متعددة المستأجرين، وأنظمة سطح المكتب، وتطبيقات تيليجرام — وأشارك ما أتعلمه أثناء الرحلة.',
  }
}

export function getLocalizedExpertise(language: Language) {
  if (language === 'en') return expertise
  return [
    { title: 'هندسة الباك إند', detail: 'واجهات API، وخدمات، وقواعد بيانات، وتصميم أنظمة تتحمل العمل الحقيقي في بيئة الإنتاج.' },
    { title: 'منتجات SaaS', detail: 'معمارية متعددة المستأجرين، واشتراكات، ومنطق فوترة، وتدفقات منتج متكاملة.' },
    { title: 'أنظمة الأعمال', detail: 'مخزون، وأتمتة، وأدوات إدارة، وتكاملات تدعم العمليات الفعلية.' },
    { title: 'تطبيقات الويب', detail: 'منتجات متكاملة من الواجهة إلى الباك إند، بداية من تصميم البيانات وحتى الإطلاق.' },
    { title: 'أنظمة سطح المكتب', detail: 'برمجيات أعمال مؤسسية باستخدام WinForms ومعمارية ثلاثية الطبقات.' },
    { title: 'تطبيقات تيليجرام المصغرة', detail: 'تجارب منتجات تعمل داخل المحادثة بإحساس قريب من التطبيقات الأصلية.' },
    { title: 'بوتات تيليجرام', detail: 'أتمتة، وإشراف نصي عربي، وخدمات محادثية.' },
    { title: 'ألعاب Unity', detail: 'برمجة أنظمة اللعب، ومعماريات أحداث باستخدام ScriptableObject، وميكانيكيات تفاعلية.' },
  ]
}

export function getLocalizedCareer(language: Language) {
  if (language === 'en') return career
  return [
    { year: '2021', title: 'بدأت تطوير البرمجيات', detail: 'أول برامج، وأول commits، وبداية بناء الأساس الهندسي.' },
    { year: '2021', title: 'تطوير بوتات تيليجرام', detail: 'أول مشاريع الأتمتة والخدمات المحادثية.' },
    { year: '2022', title: 'بدأت قناة تقنية على يوتيوب', detail: 'مشاركة وشرح هندسة البرمجيات من خلال الفيديو.' },
    { year: '2022', title: 'دراسة علوم الحاسب في الجامعة', detail: 'بناء أساس أكاديمي في الخوارزميات والأنظمة.' },
    { year: '2023', title: 'تخصصت أكثر في هندسة الباك إند', detail: 'تركيز أعمق على الخدمات، وقواعد البيانات، والمعمارية.' },
    { year: '2024', title: 'بنيت منتجات SaaS وأنظمة أعمال', detail: 'أنظمة بمستوى منتج حقيقي تم تصميمها وبناؤها من البداية للنهاية.' },
    { year: '2025', title: 'تقديم محتوى تقني وتعليمي', detail: 'محتوى جامعي وتعليم عام بالتوازي مع بناء المشاريع.' },
    { year: 'الآن', title: 'أبني وأطلق منتجات', detail: 'أنظمة ومشاريع حالية، والخطوة التالية التي أعمل عليها.' },
  ]
}

interface ProjectTranslation {
  title?: string
  summary: string
  detail: {
    overview: string
    problem: string
    solution: string
    role: string
    architecture: string[]
    challenges: string[]
    features?: string[]
  }
}

const projectArabic: Record<string, ProjectTranslation> = {
  balegh: {
    title: 'بليغ',
    summary: 'منصة تعليمية عربية تعمل في الإنتاج للاستعداد لاختبارات القدرات والتحصيلي، تجمع الدورات والاختبارات والمحتوى التعليمي المحمي وإدارة الصلاحيات وبنية تحتية على AWS.',
    detail: {
      overview: 'بليغ منصة تعليمية عربية حية موجهة للاستعداد لاختبارات القدرات الكمي واللفظي والتحصيلي. تجمع دليل الدورات العام، وتجربة الطالب التعليمية، وإدارة المحتوى والدورات، والاختبارات، والملفات، وإدارة الوصول، والأدوات التشغيلية في نظام إنتاجي واحد.',
      problem: 'كان المطلوب تقديم محتوى تعليمي عربي منظم بتجربة RTL قوية، مع الحفاظ على أمان الدروس والملفات والاختبارات والنتائج وعمليات الإدارة وسهولة التحكم فيها. كذلك كان لابد أن يكون النظام منتجا حقيقيا قابلا للنشر والتشغيل، وليس مجرد تطبيق تجريبي.',
      solution: 'باك إند Modular Monolith أحادي المستأجر مبني باستخدام ASP.NET Core 10 وPostgreSQL، مع واجهة Angular 20 تدعم SSR وHydration. يستخدم Redis للكاش والـ rate limiting، ويحافظ NSwag على تطابق عقد الـ API بين الباك إند والفرونت إند، بينما يعمل النظام في الإنتاج داخل Docker خلف Nginx على AWS مع تخزين الملفات على S3.',
      role: 'مهندس منتج وFull-Stack: صممت معمارية الباك إند وتدفقات الدومين، ونفذت المصادقة والتفويض المبني على الصلاحيات وواجهات API الخاصة بالتعلم والإدارة وقاعدة البيانات والبنية التحتية للإنتاج، كما شاركت في بناء واجهة Angular وتجربة RTL العربية وتدفقات الطالب والإدارة وSSR/Hydration والتكامل الكامل بين الفرونت إند والباك إند.',
      architecture: [
        'Modular Monolith باستخدام ASP.NET Core 10 ومقسم إلى وحدات Identity وStudent وAdmin وNotifications وBackground Jobs',
        'تخزين PostgreSQL من خلال Entity Framework Core مع ASP.NET Core Identity للمستخدمين والأدوار',
        'تطبيق Angular 20 مع SSR وHydration وStandalone Components وعميل API مولد باستخدام NSwag',
        'Redis للكاش الموزع وحالة الـ rate limiting والتنسيق التشغيلي',
        'نشر Docker Compose على AWS EC2 خلف Nginx مع استخدام S3 لملفات ووسائط المنصة',
      ],
      challenges: [
        'بناء تجربة عربية RTL مصقولة ومتناسقة عبر الصفحات العامة وتدفقات الطالب والإدارة',
        'فرض التفويض بشكل ثابت على الدروس والملفات والاختبارات والنتائج وعمليات الإدارة المحمية',
        'تصميم تدوير آمن لـ access tokens وrefresh tokens بدون تخزين بيانات اعتماد طويلة العمر داخل المتصفح',
        'الحفاظ على تزامن عقد الفرونت إند والباك إند أثناء تطور المنتج بسرعة',
        'تأمين التطبيق والبنية التحتية بما يناسب إطلاقا عاما حقيقيا في بيئة الإنتاج',
      ],
      features: [
        'تجربة عربية بالكامل وRTL للصفحات العامة وتجربة التعلم الخاصة بالطالب',
        'دليل دورات منظم إلى أقسام ودروس وملفات ومحتوى تعليمي محمي',
        'اختبارات بمحاولات محفوظة ونتائج تاريخية ثابتة يمكن الرجوع إليها',
        'مصادقة للطلاب باستخدام JWT access tokens وجلسات refresh token دورية وآمنة',
        'أدوار وصلاحيات منفصلة للـ Owner والـ Admin والـ Student',
        'تدفقات إدارية لإنشاء الدورات والمحتوى وإدارتهما',
        'تفعيل يدوي للوصول إلى الدورات مع تدفق اشتراك وتواصل عبر WhatsApp',
        'كاش وAPI rate limiting باستخدام Redis',
        'توليد عميل Angular API من عقد OpenAPI الخاص بالباك إند باستخدام NSwag',
        'Server-side rendering وHydration لصفحات Angular العامة لتحسين سرعة التحميل',
        'تخزين ملفات الإنتاج باستخدام Amazon S3',
        'نشر Containerized على AWS خلف Nginx مع تجهيز الخادم باستخدام Ansible',
      ],
    },
  },
  eventhub: {
    summary: 'منصة لاكتشاف الفعاليات وحجز التذاكر، تشمل تدفقات للحضور والمنظمين والإدارة، ومصادقة JWT، وحجوزات، والتحقق من التذاكر عبر QR.',
    detail: {
      overview: 'نظام متكامل لإدارة الفعاليات يضم أدوارا متعددة، وحجز تذاكر رقمية، والتحقق الفوري من الحضور باستخدام QR عند الدخول.',
      problem: 'كان منظمو الفعاليات بحاجة إلى منصة واحدة تجمع إنشاء الفعاليات وبيع التذاكر وتسجيل حضور الزوار والإدارة التشغيلية.',
      solution: 'نظام ويب مبني بـ .NET يدعم أدوار Admin وOrganizer وAttendee مع إنشاء تذاكر QR والتحقق منها آليا.',
      role: 'قائد الفريق ومهندس الباك إند الرئيسي: صممت معمارية النظام ومخطط قاعدة البيانات وواجهات API الخاصة بالمستخدمين والمنظمين والإدارة، وشاركت في تقسيم المهام داخل الفريق.',
      architecture: [
        'مصادقة وتفويض متعدد الأدوار باستخدام JWT',
        'محرك لإنشاء أكواد QR لتذاكر يمكن التحقق منها',
        'تكامل ماسح QR عند موقع الفعالية لتسجيل الدخول بسرعة',
      ],
      challenges: [
        'منع الحجوزات المكررة عند وصول عدة طلبات تذاكر في الوقت نفسه',
        'تصميم مسار سريع وموثوق للتحقق من أكواد QR للمنظمين',
      ],
    },
  },
  cinemaverse: {
    summary: 'منصة متكاملة لحجز السينما تشمل اختيار المقاعد لحظيا، ودفع Stripe، وتذاكر QR، وجدولة العروض، والمهام الخلفية، وحزمة كاملة لإدارة العمليات.',
    detail: {
      overview: 'نظام كامل لإدارة السينما وحجز المقاعد يدعم حجوزات العملاء والدفع الإلكتروني وإدارة العمليات من لوحة الإدارة.',
      problem: 'تحتاج دور السينما إلى قفل لحظي للمقاعد المتاحة، واكتشاف تلقائي لتعارض مواعيد العروض، ومعالجة سريعة وموثوقة للمدفوعات.',
      solution: 'تطبيق Full-Stack باستخدام ASP.NET Core 9 وAngular 21، مع Stripe Checkout وHangfire للمهام الخلفية والتحقق الفوري من تذاكر QR.',
      role: 'مهندس باك إند: طورت REST APIs، وتسوية مدفوعات Stripe، ومهام Hangfire الخلفية، وخوارزميات اكتشاف تعارض مواعيد العروض.',
      architecture: [
        'معالجة خلفية باستخدام Hangfire لانتهاء الحجوزات المعلقة وتذكيرات العروض',
        'معالجات Webhooks خاصة ببوابة الدفع Stripe',
        'محرك جدولة عروض يكتشف تلقائيا تعارض القاعات والأوقات',
      ],
      challenges: [
        'التحكم في التزامن أثناء اختيار المقاعد في أوقات الطلب المرتفع',
        'تنظيف حجوزات المقاعد المنتهية آليا من خلال مهام خلفية موثوقة',
      ],
    },
  },
  taskmint: {
    summary: 'Telegram Mini App موجه للإنتاج يجمع عميل React وبوت تيليجرام وBackend API وتدفقات مهام ومكافآت وإحالات وسحوبات وأدوات تشغيلية.',
    detail: {
      overview: 'منصة Telegram Mini App قابلة للتوسع تسمح للمستخدمين بإكمال مهام اجتماعية ومخصصة وكسب المكافآت وإدارة شبكة الإحالات وطلب السحب مباشرة من داخل تيليجرام.',
      problem: 'التحدي كان بناء منظومة مكافآت عالية التزامن داخل تيليجرام تمنع الاحتيال الآلي وتحافظ على استجابة API سريعة جدا.',
      solution: 'Monorepo يجمع Telegram Mini App مبنيا بـ React 19 مع باك إند Express/PostgreSQL وإطار GrammY للبوت وRedis للكاش.',
      role: 'مهندس منتج Full-Stack: صممت مخطط PostgreSQL باستخدام Prisma، وواجهات Express REST APIs، وتكامل Telegram Mini App SDK، وأدوات الإدارة داخل البوت.',
      architecture: [
        'مصادقة Telegram Apps SDK والتحقق الآمن من init-data',
        'تخزين مؤقت في Redis لأرصدة المستخدمين وتتبع شجرة الإحالات',
        'مسار آلي للتحقق من المهام مع إدارة من خلال Admin Bot',
      ],
      challenges: [
        'منع إساءة استخدام الإحالات وهجمات الأتمتة والبوتات',
        'الحفاظ على واجهة موبايل سلسة بسرعة 60fps داخل Telegram WebApp',
      ],
    },
  },
  dvld: {
    title: 'نظام إدارة رخص القيادة',
    summary: 'نظام أعمال لسطح المكتب لإدارة طلبات رخص القيادة والاختبارات والإصدار والتجديد والحجز الإداري للرخص وبقية التدفقات التشغيلية.',
    detail: {
      overview: 'تطبيق مؤسسي متكامل لسطح المكتب يدير دورة حياة رخص القيادة المحلية والدولية بالكامل.',
      problem: 'تحتاج مكاتب إصدار الرخص إلى نظام موحد يدير تقييم المتقدم على مراحل، واختبارات النظر والنظري والعملي، وقواعد حجز الرخص.',
      solution: 'حل WinForms قوي بمعمارية ثلاثية الطبقات، وكائنات أعمال مخصصة في C#، وتخزين SQL Server عبر ADO.NET، وصلاحيات RBAC دقيقة.',
      role: 'مهندس برمجيات: صممت المعمارية ثلاثية الطبقات Data Access وBusiness Logic وUI، ونفذت تدفقات إصدار الرخص متعددة المراحل.',
      architecture: [
        'معمارية ثلاثية الطبقات تفصل Data Access وBusiness Logic وواجهة المستخدم',
        'State machine لحالة الطلب عبر مراحل New وCancelled وCompleted',
        'سجل مالي لعمليات حجز الرخص والإفراج عنها',
      ],
      challenges: [
        'فرض قواعد أعمال معقدة على اختبارات النظر والنظري والقيادة العملية',
        'إدارة قيود إصدار الرخص الدولية وسجل تاريخ السائق',
      ],
    },
  },
  'blood-bank': {
    title: 'نظام إدارة بنك الدم',
    summary: 'نظام تشغيلي لسطح المكتب لإدارة المتبرعين ومخزون الدم والمرضى وعمليات نقل الدم والتوافق والتقارير وصلاحيات الموظفين.',
    detail: {
      overview: 'نظام طبي لسطح المكتب لإدارة المخزون وتتبع جمع وحدات الدم وفحوص التوافق وطلبات نقل الدم وتواريخ الصلاحية.',
      problem: 'تواجه بنوك الدم تحديات حساسة للغاية مثل دقة توافق فصائل الدم ومراقبة انتهاء الصلاحية وفرض صلاحيات وصول صارمة.',
      solution: 'نظام سطح مكتب يوفر مراقبة لحظية لمخزون الدم، وخوارزميات تلقائية لمطابقة التوافق، وتنبيهات انخفاض المخزون، وسجلات تدقيق كاملة.',
      role: 'مطور مشارك: نفذت طبقة الوصول إلى البيانات، وخوارزميات مطابقة الدم، ومنطق تتبع انتهاء الصلاحية، وأمان الموظفين المبني على الأدوار.',
      architecture: [
        'محرك تقييم لمصفوفة توافق فصائل الدم',
        'تتبع صلاحية الوحدات مع تحويلها تلقائيا إلى حالة الحجر عند الحاجة',
        'أمان مبني على الأدوار لتقييد عمليات المرضى ونقل الدم',
      ],
      challenges: [
        'الوصول إلى منطق مطابقة بدون أخطاء لمنع أي اعتماد غير آمن لعملية نقل دم',
        'تصميم تنبيهات تلقائية لانخفاض المخزون واقتراب انتهاء صلاحية الوحدات',
      ],
    },
  },
  'how-to-train-your-ai': {
    summary: 'تجربة Unity من منظور الشخص الأول تعتمد على السرد، يتدرب فيها الروبوت من خلال أنظمة لعب مترابطة ومجموعة من الألعاب المصغرة.',
    detail: {
      overview: 'لعبة ألغاز سردية من منظور الشخص الأول مبنية باستخدام Unity 6، تشمل التبديل بين منظور اللاعب والروبوت، وAI Navigation، وألعاب تدريب مصغرة.',
      problem: 'تصميم ألعاب مصغرة ممتعة تؤثر بشكل مباشر على إحصائيات الروبوت الدائمة وعلى نتائج اللعب لاحقا.',
      solution: 'معمارية C# معيارية قائمة على الأحداث داخل Unity 6 باستخدام ScriptableObjects وCinemachine لانتقالات الكاميرا ومسارات حركة مخصصة.',
      role: 'مساهم في أنظمة اللعب ومطور Mini-Game 1: أنشأت منطق اللعبة المصغرة الأولى، وقنوات الأحداث باستخدام ScriptableObject، ومعالجات تفاعل الروبوت.',
      architecture: [
        'معمارية أحداث باستخدام ScriptableObject تفصل الألعاب المصغرة عن الحالة العامة للعبة',
        'State machine للتحكم في منظور اللاعب والروبوت',
        'خوارزمية A* مخصصة لاكتشاف المسار مع اكتشاف حالات التعطل',
      ],
      challenges: [
        'ضمان انتقالات كاميرا سلسة أثناء التبديل بين الشخصيات',
        'موازنة صعوبة الألعاب المصغرة بحيث تؤثر بشكل منطقي على تطور إحصائيات الروبوت',
      ],
    },
  },
  'keyword-guard': {
    summary: 'بوت إشراف لتيليجرام يكتشف المحتوى العربي المحظور أو المموه ويطبق قواعد المجموعة تلقائيا.',
    detail: {
      overview: 'بوت عالي الأداء لإدارة المجموعات العربية يجمع تطبيع النصوص وإزالة التشكيل والمطابقة التقريبية والتنفيذ التلقائي للعقوبات.',
      problem: 'يمكن للمخالفين تجاوز فلاتر الكلمات البسيطة بإضافة التشكيل أو الرموز أو التطويل أو تغييرات في الحروف العربية.',
      solution: 'بوت Python مزود بمسار مخصص لتطبيع اللغة العربية مع RapidFuzz لاكتشاف المخالفات المموهة بدرجة موثوقة.',
      role: 'المطور الوحيد: بنيت خوارزميات تطبيع النصوص، ومعالجات أحداث Pyrogram، ومحرك القواعد، وإعداد النشر باستخدام Docker.',
      architecture: [
        'تطبيع عربي متعدد المراحل يشمل إزالة التشكيل والرموز وتوحيد الحروف',
        'حساب تشابه النص باستخدام RapidFuzz مقابل قوائم القواعد المحظورة',
        'معالج رسائل Async باستخدام Pyrogram مع تنفيذ تلقائي للحذف أو الكتم أو الحظر',
      ],
      challenges: [
        'معالجة عدد كبير من الرسائل بدون تجاوز rate limits الخاصة بتيليجرام',
        'تقليل النتائج الإيجابية الخاطئة مع العبارات العربية المركبة',
      ],
    },
  },
  'study-tracker': {
    summary: 'منصة لتتبع جلسات المذاكرة تشمل الأهداف والاستمرارية ولوحات صدارة متعددة وإدارة الملف الشخصي وطبقة إدارية.',
    detail: {
      overview: 'منصة إنتاجية تساعد الطلاب على تسجيل ساعات المذاكرة والحفاظ على الاستمرارية اليومية والمنافسة من خلال لوحات الصدارة.',
      problem: 'يصعب على كثير من الطلاب الحفاظ على الاستمرارية بدون رؤية واضحة للتقدم والأهداف ونوع من المحاسبة الاجتماعية الودية.',
      solution: 'منصة ASP.NET Core 8 MVC توفر حساب الاستمرارية وتتبع الأهداف وقص صور الحساب وإدارة كاملة من لوحة الإدارة.',
      role: 'مطور Full-Stack: بنيت MVC Controllers، ونماذج EF Core، وخوارزميات حساب الاستمرارية، وواجهة Tailwind.',
      architecture: [
        'مصادقة ASP.NET Core Identity مع امتدادات مخصصة للملف الشخصي',
        'استعلامات تجميع لسلاسل زمنية يومية وأسبوعية وشهرية',
        'معالجة وقص صور الملفات الشخصية على الخادم باستخدام ImageSharp',
      ],
      challenges: [
        'التعامل مع المناطق الزمنية للحفاظ على دقة الاستمرارية اليومية',
        'تحسين استعلامات SQL الخاصة بلوحات الصدارة عبر عدد كبير من سجلات الدراسة',
      ],
    },
  },
  'kau-medreg': {
    summary: 'تدفق تسجيل جامعي عبر تيليجرام مع تحقق من البيانات وملفات شخصية قابلة للتعديل وتخزين محلي ومزامنة Google Sheets وإشعارات للإدارة.',
    detail: {
      overview: 'بوت تسجيل آلي يسهل ضم طلاب الجامعة من خلال نموذج محادثي خطوة بخطوة مع مزامنة مباشرة إلى Google Sheets.',
      problem: 'جمع أرقام الطلاب والبريد الجامعي والمسارات الأكاديمية يدويا كان يسبب بطئا وأخطاء إدخال وتكرار بيانات.',
      solution: 'بوت Python محادثي يتحقق من صيغ البريد والرقم الجامعي، ويسمح بتحديث الملف الشخصي، ويرسل إشعارات للإدارة، ويزامن البيانات مع Google Sheets لحظيا.',
      role: 'مطور: صممت الـ finite state machine للمحادثة، وقواعد التحقق، وتكامل Google Sheets من خلال gspread API.',
      architecture: [
        'Conversation handler يحتفظ بحالة خطوات التسجيل',
        'Regex للتحقق من نطاق البريد الجامعي وصيغة الرقم الجامعي',
        'مزامنة في background thread مع Google Sheets API باستخدام gspread',
      ],
      challenges: [
        'التعامل مع حدود الحصة الخاصة بـ Google Sheets API أثناء فترات التسجيل المزدحمة',
        'السماح للمستخدمين الحاليين بعرض بيانات ملفاتهم وتحديثها بسهولة',
      ],
    },
  },
  uniconnect: {
    summary: 'منصة لمطابقة فرق مشاريع التخرج تشمل اكتشاف الطلاب والتصفية حسب المهارات والمسار وتعديل الملف بتأكيد OTP وإدارة الطلبات.',
    detail: {
      overview: 'منصة ويب تربط طلاب الجامعة الذين يشكلون فرق مشاريع التخرج بناء على المهارات المتكاملة والمسارات الأكاديمية.',
      problem: 'يواجه طلاب مشاريع التخرج صعوبة في إيجاد زملاء يمتلكون مهارات محددة مثل تصميم UI أو تطوير الباك إند أو الأنظمة المضمنة.',
      solution: 'تطبيق Next.js يضم تصفية ديناميكية للمهارات، وتحقق OTP عبر البريد، وبحثا في دليل الطلاب، وإشرافا من الإدارة.',
      role: 'مطور Full-Stack: أنشأت Next.js API routes، ومخططات MongoDB، والتحقق عبر Resend email OTP، ومكونات UI عربية وإنجليزية.',
      architecture: [
        'Next.js Server Actions وAPI routes للبحث في الدليل والتصفية',
        'مخطط MongoDB باستخدام Mongoose مع تحسين فهارس المهارات',
        'خدمة مصادقة OTP عبر البريد باستخدام Resend',
      ],
      challenges: [
        'تحسين البحث في دليل الطلاب مع وسوم مهارات ديناميكية',
        'تصميم دليل متجاوب ونظيف يدعم المحتوى العربي',
      ],
    },
  },
}

const termArabic: Record<string, string> = {
  'QR Tickets': 'تذاكر QR',
  'Team Lead': 'قيادة الفريق',
  'Three-Tier Architecture': 'معمارية ثلاثية الطبقات',
  Inventory: 'المخزون',
  'Gameplay Systems': 'أنظمة اللعب',
  'Event-Driven': 'قائم على الأحداث',
  'Telegram Bot': 'بوت تيليجرام',
  'Arabic NLP': 'معالجة اللغة العربية',
  'Fuzzy Matching': 'مطابقة تقريبية',
  Validation: 'التحقق',
  Automation: 'الأتمتة',
  Email: 'البريد الإلكتروني',
  Responsive: 'متجاوب',
  'REST API': 'REST API',
  'Multi-Tenant SaaS': 'SaaS متعدد المستأجرين',
}

function localizeTerm(value: string, language: Language) {
  if (language === 'en') return value
  return termArabic[value] ?? value
}

export function localizeProject(project: PortfolioProject, language: Language): PortfolioProject {
  if (language === 'en') return project

  const translation = projectArabic[project.id]
  if (!translation) return project

  return {
    ...project,
    title: translation.title ?? project.title,
    summary: translation.summary,
    tags: project.tags.map((tag) => localizeTerm(tag, language)),
    detail: {
      ...project.detail,
      overview: translation.detail.overview,
      problem: translation.detail.problem,
      solution: translation.detail.solution,
      role: translation.detail.role,
      stack: project.detail.stack.map((item) => localizeTerm(item, language)),
      architecture: translation.detail.architecture,
      challenges: translation.detail.challenges,
      ...(project.detail.features
        ? { features: translation.detail.features ?? project.detail.features }
        : {}),
    },
  }
}

type ScreenshotTranslation = Pick<ProjectScreenshot, 'title' | 'description'>

const screenshotArabic: Record<string, ScreenshotTranslation[]> = {
  balegh: [
    { title: 'الصفحة الرئيسية', description: 'الواجهة العربية الرئيسية التي تقدم بليغ وتجربة التعلم ومسارات الاستعداد لاختبار القدرات.' },
    { title: 'دليل الدورات', description: 'دليل عام لاكتشاف الدورات المتاحة وفتح مسار التعلم الخاص بكل دورة.' },
    { title: 'تسجيل دخول الطالب', description: 'واجهة مصادقة آمنة للوصول إلى الدورات المسجل بها الطالب وتقدمه واختباراته ونتائجه.' },
    { title: 'إنشاء حساب', description: 'تدفق تسجيل عربي لإنشاء حساب متعلم جديد على المنصة.' },
    { title: 'استعادة كلمة المرور', description: 'تدفق يساعد الطالب على استعادة الوصول إلى حسابه عند فقدان كلمة المرور.' },
    { title: 'تسجيل دخول الإدارة', description: 'بوابة دخول منفصلة للمشرفين ومديري المحتوى المصرح لهم.' },
    { title: 'الأسئلة الشائعة', description: 'صفحة عامة تجيب عن الأسئلة المتكررة حول الدورات والاستعداد والوصول واستخدام المنصة.' },
    { title: 'الدعم', description: 'صفحة توضح قنوات المساعدة والتواصل المتاحة للطلاب.' },
    { title: 'تواصل معنا', description: 'واجهة عامة لإرسال الاستفسارات والتواصل مباشرة مع فريق بليغ.' },
    { title: 'سياسة الخصوصية', description: 'صفحة توضح كيفية التعامل مع بيانات الطلاب والحسابات داخل المنصة.' },
    { title: 'شروط الاستخدام', description: 'صفحة عامة توضح القواعد والشروط التي تحكم استخدام منصة بليغ.' },
    { title: 'حالة إيقاف التسجيل', description: 'حالة بديلة تظهر عندما يكون إنشاء الحسابات الجديدة متوقفا مؤقتا مع استمرار تسجيل دخول المستخدمين الحاليين.' },
    { title: 'دورة التأسيس اللفظي', description: 'صفحة تفاصيل دورة التأسيس اللفظي وتعرض هيكل الدورة ومحتواها التعليمي.' },
    { title: 'دورة التدريب اللفظي', description: 'صفحة تفاصيل مسار التدريب اللفظي الموجه للممارسة والاستعداد لأسئلة القدرات.' },
  ],
  cinemaverse: [
    { title: 'إدارة المستخدمين', description: 'واجهة إدارية لمراجعة حسابات مستخدمي المنصة وإدارتها.' },
    { title: 'تفاصيل المستخدم', description: 'عرض إداري مفصل لبيانات مستخدم واحد ومعلومات حسابه.' },
    { title: 'إدارة الفروع', description: 'واجهة لإدارة فروع السينما ومعلومات التشغيل الخاصة بها.' },
    { title: 'لوحة تحكم الإدارة', description: 'لوحة تشغيل تعرض أهم مؤشرات إدارة السينما والاختصارات الأساسية.' },
    { title: 'حجز فيلم', description: 'تدفق العميل لاختيار عرض سينمائي وإتمام الحجز.' },
    { title: 'تعديل القاعة', description: 'واجهة إدارية لتعديل إعدادات القاعة وبياناتها.' },
    { title: 'إدارة الأفلام', description: 'دليل الأفلام الإداري لإدارة العناوين المتاحة على المنصة.' },
    { title: 'إدارة مواعيد العروض', description: 'واجهة جدولة لمراجعة مواعيد العروض وإدارتها.' },
    { title: 'إدارة التذاكر', description: 'واجهة إدارية لتتبع التذاكر الصادرة وسجلات الحجز.' },
    { title: 'تفاصيل الفرع', description: 'عرض مفصل لبيانات فرع سينما وإعداداته.' },
    { title: 'تفاصيل الفيلم — الإدارة', description: 'عرض إداري لتفاصيل الفيلم والمعلومات المطلوبة لإدارته.' },
    { title: 'تفاصيل التذكرة', description: 'عرض مفصل لسجل تذكرة وحجز محدد.' },
    { title: 'الحجوزات', description: 'قائمة إدارية لمراجعة الحجوزات عبر العروض المختلفة.' },
    { title: 'الصفحة الرئيسية للعملاء', description: 'واجهة السينما العامة التي تعرض الأفلام والمحتوى المتاح.' },
    { title: 'تفاصيل الفيلم', description: 'صفحة موجهة للعميل تعرض معلومات الفيلم قبل الحجز.' },
    { title: 'دليل الأفلام', description: 'تجربة تصفح لاكتشاف الأفلام المتاحة حاليا.' },
    { title: 'الدفع', description: 'خطوة إتمام الدفع وإنهاء حجز السينما.' },
  ],
  dvld: [
    { title: 'طلب رخصة', description: 'تدفق إنشاء ومعالجة طلب جديد للحصول على رخصة قيادة.' },
    { title: 'تفاصيل الطلب', description: 'عرض مفصل لطلب الرخصة وحالته الحالية ومعلومات المعالجة.' },
    { title: 'تسجيل الدخول', description: 'واجهة دخول آمنة للموظفين للوصول إلى نظام إدارة الرخص.' },
    { title: 'لوحة التحكم الرئيسية', description: 'مساحة العمل الأساسية لخدمات الرخص والطلبات والاختبارات والإدارة.' },
    { title: 'إدارة الأشخاص', description: 'واجهة للبحث في سجلات الأشخاص ومراجعتها وتحديثها.' },
  ],
  'blood-bank': [
    { title: 'تفاصيل وحدة الدم', description: 'بطاقة مفصلة تعرض البيانات المطلوبة لتتبع وحدة دم داخل المخزون.' },
    { title: 'لوحة مخزون الدم', description: 'لوحة التحكم الرئيسية لمراقبة المخزون والنشاط التشغيلي لبنك الدم.' },
    { title: 'تسجيل تبرع', description: 'تدفق تسجيل زيارة المتبرع وبدء عملية تبرع جديدة.' },
    { title: 'تفاصيل التبرع', description: 'واجهة متابعة تحتوي على البيانات المسجلة أثناء عملية التبرع.' },
    { title: 'البحث عن توافق', description: 'تدفق للعثور على وحدات دم مناسبة لطلب مريض.' },
    { title: 'تسجيل دخول الموظفين', description: 'واجهة مصادقة للموظفين للوصول إلى نظام إدارة بنك الدم.' },
    { title: 'إدارة المتبرعين', description: 'دليل المتبرعين لمراجعة السجلات والأهلية وتاريخ التبرعات.' },
    { title: 'تم العثور على توافق', description: 'حالة النتيجة التي تعرض تطابقا متوافقا تم العثور عليه بواسطة النظام.' },
  ],
  'how-to-train-your-ai': [
    { title: 'حوار القصة الأول', description: 'لحظة حوار سردية تدفع أحداث القصة وأهداف اللاعب إلى الأمام.' },
    { title: 'حوار القصة الثاني', description: 'مشهد حوار آخر من السرد وتفاعل الشخصيات داخل اللعبة.' },
    { title: 'الصورة الرئيسية للعبة', description: 'الصورة الرئيسية التي تمثل التوجه البصري العام للمشروع.' },
    { title: 'رسالة الجد', description: 'رسالة سردية تقدم جزءا مهما من قصة اللعبة.' },
    { title: 'بوابة المنزل', description: 'البيئة الخارجية عند مدخل المنزل الموروث.' },
    { title: 'المنزل', description: 'المنزل الموروث الذي يمثل موقعا محوريا في القصة.' },
    { title: 'القائمة الرئيسية', description: 'واجهة الدخول لبدء تجربة اللعبة والتنقل بين خياراتها.' },
    { title: 'الروبوت قبل التدريب', description: 'حالة الروبوت مباشرة قبل بدء لعبة المعايرة المصغرة الأولى.' },
    { title: 'لقطة لعب 1', description: 'لقطة إضافية من داخل اللعبة ضمن توثيق المشروع.' },
    { title: 'لقطة لعب 2', description: 'لقطة إضافية من داخل اللعبة ضمن توثيق المشروع.' },
    { title: 'لقطة لعب 3', description: 'لقطة إضافية من داخل اللعبة ضمن توثيق المشروع.' },
    { title: 'نتيجة المعايرة', description: 'شاشة نتيجة توضح أداء اللاعب في لعبة معايرة الروبوت الأولى.' },
    { title: 'معايرة التحكم — تفاصيل', description: 'عرض مفصل من تحدي التدريب الأول الخاص بمعايرة التحكم في الروبوت.' },
    { title: 'معايرة التحكم', description: 'اللعبة المصغرة الأولى التي يعاير فيها اللاعب أنظمة حركة الروبوت.' },
    { title: 'كفاءة المسار — تفاصيل', description: 'عرض مفصل للتحدي التدريبي الثاني وقيود الحركة داخله.' },
    { title: 'تجربة كفاءة المسار', description: 'اللعبة المصغرة الثانية التي تركز على جمع الهدف مع تحسين المسار واستهلاك الطاقة.' },
    { title: 'نتيجة مطابقة الإشارة', description: 'حالة إتمام لغز تدريب الروبوت الثالث.' },
    { title: 'مطابقة الإشارة — تفاصيل', description: 'عرض مفصل للغز من لعبة التدريب المصغرة الثالثة.' },
    { title: 'تدريب مطابقة الإشارة', description: 'اللعبة المصغرة الثالثة المبنية على المنطق المكاني ووضع العناصر وقواعد المطابقة.' },
  ],
  uniconnect: [
    { title: 'لوحة تحكم الإدارة', description: 'واجهة إدارية لمراجعة منصة مطابقة الطلاب وإدارتها.' },
    { title: 'تعديل الملف الشخصي', description: 'محرر بيانات الطالب والمسار ومجموعة المهارات.' },
    { title: 'الصفحة الرئيسية', description: 'واجهة البداية التي تقدم منصة البحث عن فرق مشاريع التخرج.' },
    { title: 'دليل الطلاب', description: 'دليل قابل للبحث لاكتشاف زملاء محتملين حسب الملف والمهارات.' },
  ],
}

export function localizeScreenshots(
  projectId: string,
  screenshots: ProjectScreenshot[],
  language: Language,
): ProjectScreenshot[] {
  if (language === 'en') return screenshots

  const translations = screenshotArabic[projectId]
  if (!translations) return screenshots

  return screenshots.map((screenshot, index) => ({
    ...screenshot,
    ...(translations[index] ?? {}),
  }))
}
