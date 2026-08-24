export type Category =
  | 'Web & SaaS'
  | 'Desktop Systems'
  | 'Telegram Mini Apps'
  | 'Telegram Bots'
  | 'Unity Games'

export const CATEGORIES: Category[] = [
  'Web & SaaS',
  'Desktop Systems',
  'Telegram Mini Apps',
  'Telegram Bots',
  'Unity Games',
]

export const CATEGORY_FILTERS: Array<'All' | Category> = ['All', ...CATEGORIES]

export interface Screenshot {
  label: string
  caption: string
}

export interface ProjectDetail {
  overview: string
  problem: string
  solution: string
  role: string
  stack: string[]
  architecture: string[]
  challenges: string[]
  screenshots: Screenshot[]
}

export interface Project {
  id: string
  title: string
  category: Category
  year: string
  tags: string[]
  summary: string
  featured?: boolean
  demoUrl?: string
  githubUrl?: string
  detail: ProjectDetail
}

export const FEATURED_ID = 'masar'

export const profile = {
  name: 'Omar Aboelkheir',
  role: 'Software Engineer',
  tagline: 'Backend-focused · SaaS · Business Systems',
  location: 'Remote · Worldwide',
  email: 'omarrabouelkheir@gmail.com',
  phone: '+201005454695',
  github: 'https://github.com/OmarAbouelkheirr/',
  linkedin: 'https://www.linkedin.com/in/omar-abouelkhier-eg/',
  telegram: 'https://t.me/Dev3mora',
  whatsapp: 'https://wa.me/201005454695',
  youtube: 'https://www.youtube.com/channel/UCG8NTaeAu2U27NZPt9wNktw',
}

export const expertise = [
  { title: 'Backend Engineering', detail: 'APIs, services, databases, and system design that hold up in production.' },
  { title: 'SaaS Products', detail: 'Multi-tenant architecture, subscriptions, billing logic, and product workflows.' },
  { title: 'Business Systems', detail: 'Inventory, automation, admin tooling, and integrations for real operations.' },
  { title: 'Web Applications', detail: 'Complete products front to back, from schema to shipped interface.' },
  { title: 'Desktop Systems', detail: 'Enterprise WinForms & desktop business software with 3-tier architecture.' },
  { title: 'Telegram Mini Apps', detail: 'In-chat product surfaces with a native messenger feel.' },
  { title: 'Telegram Bots', detail: 'Automation, Arabic NLP moderation, and conversational services.' },
  { title: 'Unity Games', detail: 'Gameplay programming, ScriptableObject event architectures, and interactive mechanics.' },
]

export const career = [
  { year: '2021', title: 'Started software development', detail: 'First programs, first commits, the foundation of the craft.' },
  { year: '2021', title: 'Telegram bot development', detail: 'Early automation bots and conversational services.' },
  { year: '2022', title: 'Started a technical YouTube channel', detail: 'Teaching software engineering through video.' },
  { year: '2022', title: 'Computer Science at university', detail: 'Formal foundations in algorithms and systems.' },
  { year: '2023', title: 'Specialized in backend engineering', detail: 'Deeper focus on services, databases, and architecture.' },
  { year: '2024', title: 'Built SaaS and business products', detail: 'Product-grade systems designed and shipped end to end.' },
  { year: '2025', title: 'Teaching technical content', detail: 'University content and public education while building.' },
  { year: 'Now', title: 'Building and shipping', detail: 'Current systems, products, and what is next.' },
]

export const about = {
  heading: 'About',
  body: 'Software engineer focused on backend engineering, SaaS products, and business systems. I build complete products end to end — APIs, databases, multi-tenant architectures, desktop systems, and Telegram apps — and I teach what I learn along the way.',
}

export const projects: Project[] = [
  {
    id: 'masar',
    title: 'Masar',
    category: 'Web & SaaS',
    year: '2025',
    tags: ['.NET 10', 'ASP.NET Core', 'PostgreSQL', 'Redis', 'Angular', 'Docker', 'AWS', 'Multi-Tenant SaaS'],
    summary: 'Multi-tenant learning platform built around tenant isolation, dynamic authorization, learning workflows, quizzes, and production-oriented infrastructure.',
    featured: true,
    detail: {
      overview: 'A tenant-aware LMS and product platform intended to support multiple independent clients without separate application codebases for compatible business models.',
      problem: 'How to build one education platform that can serve different clients while preserving logical isolation, permissions, branding, users, courses, learning data, and administrative boundaries.',
      solution: 'A modular-monolith application with tenant-aware domain boundaries, permission-based authorization, shared infrastructure, and isolated tenant data.',
      role: 'Backend architecture and engineering: tenant context, EF Core query filters, dynamic permission-based RBAC, identity services, and AWS/Docker deployment.',
      stack: ['.NET 10', 'ASP.NET Core', 'PostgreSQL', 'Redis', 'Angular', 'Docker', 'AWS EC2', 'S3', 'CloudFormation', 'Ansible'],
      architecture: [
        'ASP.NET Core 10 modular monolith with tenant-scoped domain boundaries',
        'EF Core query filters and write guards enforcing TenantId isolation',
        'Dynamic permission-based authorization through role claims and ASP.NET Core Identity',
        'Infrastructure deployment on AWS EC2 using Nginx, Docker Compose, Redis, and private S3',
      ],
      challenges: [
        'Keeping strict tenant isolation across every query and write path',
        'Dynamic RBAC claims and permission evaluation for multi-tenant users',
        'Distributed rate-limiting and caching key isolation with Redis',
      ],
      screenshots: [
        { label: 'Platform Dashboard', caption: 'Tenant management and active learning workflows.' },
        { label: 'Course Builder', caption: 'Course creation, quizzes, and module administration.' },
        { label: 'System Admin', caption: 'System Owner admin and tenant configuration.' },
      ],
    },
  },
  {
    id: 'eventhub',
    title: 'EventHub',
    category: 'Web & SaaS',
    year: '2024',
    tags: ['.NET', 'ASP.NET Core', 'EF Core', 'JWT', 'SQL Server', 'REST API', 'QR Tickets', 'Team Lead'],
    summary: 'Event discovery and ticketing platform with attendee, organizer, and admin workflows, JWT authentication, bookings, and QR-based ticket verification.',
    githubUrl: 'https://github.com/',
    detail: {
      overview: 'End-to-end event management system featuring multi-role workflows, digital ticket booking, and real-time QR code check-in.',
      problem: 'Event organizers lacked an integrated platform to manage event creation, ticket sales, attendee check-in, and administrative governance.',
      solution: 'A robust .NET web system supporting Admin, Organizer, and Attendee roles with automated QR ticket generation and validation.',
      role: 'Team Lead & Lead Backend Engineer: designed system architecture, database schema, user/organizer/admin APIs, and task division.',
      stack: ['C#', '.NET Core', 'EF Core', 'LINQ', 'JWT', 'SQL Server', 'HTML/CSS/JS', 'Bootstrap'],
      architecture: [
        'Multi-role authentication and authorization using JWT',
        'QR code generation engine for verified tickets',
        'On-site QR scanner integration for rapid event check-in',
      ],
      challenges: [
        'Preventing duplicate bookings under concurrent ticket requests',
        'Designing an efficient QR code verification pipeline for organizers',
      ],
      screenshots: [
        { label: 'Event Discovery', caption: 'Browse and search upcoming events.' },
        { label: 'QR Ticket', caption: 'Digital ticket with scannable QR verification.' },
        { label: 'Organizer Portal', caption: 'Manage events, attendees, and check-in stats.' },
      ],
    },
  },
  {
    id: 'cinemaverse',
    title: 'CinemaVerse',
    category: 'Web & SaaS',
    year: '2024',
    tags: ['.NET 9', 'Angular', 'SQL Server', 'Stripe', 'Hangfire', 'JWT', 'QR Codes'],
    summary: 'End-to-end cinema booking platform with real-time seat selection, Stripe payments, QR tickets, scheduling, background jobs, and an administrative operations suite.',
    githubUrl: 'https://github.com/',
    detail: {
      overview: 'Complete cinema management and seat booking system supporting customer reservations, payment gateway integration, and back-office management.',
      problem: 'Cinemas need real-time seat availability locks, automated showtime scheduling conflict detection, and quick payment processing.',
      solution: 'Full-stack application powered by ASP.NET Core 9 and Angular 21 with Stripe checkout, Hangfire background jobs, and instant QR check-in.',
      role: 'Backend Engineer: developed backend REST APIs, Stripe payment reconciliation, Hangfire background tasks, and showtime conflict algorithms.',
      stack: ['ASP.NET Core 9', 'EF Core 9', 'SQL Server', 'Stripe API', 'Hangfire', 'Angular 21', 'TypeScript', 'RxJS'],
      architecture: [
        'Hangfire background processing for pending booking expirations and show reminders',
        'Stripe payment gateway webhook handlers',
        'Showtime scheduling engine with automatic hall/time collision detection',
      ],
      challenges: [
        'Concurrency control during high-demand seat selection',
        'Automating expired seat reservations cleanup with reliable background jobs',
      ],
      screenshots: [
        { label: 'Seat Selection', caption: 'Interactive hall map and real-time seat status.' },
        { label: 'Admin Analytics', caption: 'KPIs, revenue metrics, and booking statistics.' },
        { label: 'Ticket Verification', caption: 'QR scanning interface for hall entries.' },
      ],
    },
  },
  {
    id: 'taskmint',
    title: 'TaskMint',
    category: 'Telegram Mini Apps',
    year: '2025',
    tags: ['Telegram Mini Apps', 'React', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Redis', 'Docker'],
    summary: 'Production-oriented Telegram Mini App combining a React client, Telegram bot, backend API, task/reward workflows, referrals, withdrawals, and operational tooling.',
    detail: {
      overview: 'A scalable Telegram Mini App platform enabling users to complete social and custom tasks, earn rewards, manage referral networks, and request withdrawals directly within Telegram.',
      problem: 'Building a high-concurrency reward ecosystem inside Telegram that prevents automated fraud and maintains sub-second API responses.',
      solution: 'Monorepo workspace pairing a React 19 Telegram Mini App with an Express/PostgreSQL backend, GrammY bot framework, and Redis caching.',
      role: 'Full-stack Product Engineer: designed the PostgreSQL schema via Prisma, Express REST APIs, Telegram Mini App SDK integration, and admin Telegram bot tools.',
      stack: ['React 19', 'TypeScript', 'Vite', 'Telegram Apps SDK', 'Node.js', 'Express', 'Prisma', 'PostgreSQL', 'Redis', 'Docker'],
      architecture: [
        'Telegram Apps SDK authentication and secure init-data validation',
        'Redis-cached user balances and referral tree tracking',
        'Automated task verification pipeline with Admin Bot management',
      ],
      challenges: [
        'Preventing referral abuse and bot automation attacks',
        'Ensuring fluid 60fps mobile UI inside Telegram WebApp container',
      ],
      screenshots: [
        { label: 'Mini App Dashboard', caption: 'User balance, daily rewards, and task feed.' },
        { label: 'Referral Hub', caption: 'Referral stats, invite link generator, and earnings.' },
        { label: 'Task Verification', caption: 'Proof submission and instant reward payout.' },
      ],
    },
  },
  {
    id: 'dvld',
    title: 'Driving License Management System',
    category: 'Desktop Systems',
    year: '2023',
    tags: ['C#', '.NET Framework', 'WinForms', 'SQL Server', 'ADO.NET', 'Three-Tier Architecture'],
    summary: 'Desktop business system for driving-license applications, testing, issuance, renewal, detention, and administrative workflows.',
    githubUrl: 'https://github.com/',
    detail: {
      overview: 'Comprehensive desktop enterprise application managing the full lifecycle of local and international driving licenses.',
      problem: 'Government license offices required a unified desktop system handling multi-stage applicant evaluation, vision/theory/driving tests, and license detention rules.',
      solution: 'A robust 3-tier WinForms solution built with custom C# business objects, SQL Server ADO.NET persistence, and granular RBAC permissions.',
      role: 'Software Engineer: architected the 3-tier architecture (Data Access Layer, Business Logic Layer, and UI Layer) and complex multi-step license workflows.',
      stack: ['C#', '.NET Framework 4.7.2', 'WinForms', 'Guna UI2', 'SQL Server', 'ADO.NET'],
      architecture: [
        'Clean 3-tier architecture isolating Data Access, Business Logic, and UI',
        'Multi-stage application status state machine (New, Cancelled, Completed)',
        'License detention and release financial audit trail',
      ],
      challenges: [
        'Enforcing complex business rules across vision, theory, and practical driving tests',
        'Managing international license issuance constraints and driver history logs',
      ],
      screenshots: [
        { label: 'Main Control Panel', caption: 'Applicant management, tests, and license services.' },
        { label: 'Test Scheduling', caption: 'Vision, theory, and practical driving test appointments.' },
        { label: 'Detained Licenses', caption: 'Detain, release, and fine payment management.' },
      ],
    },
  },
  {
    id: 'blood-bank',
    title: 'Blood Bank Management System',
    category: 'Desktop Systems',
    year: '2023',
    tags: ['C#', '.NET Framework', 'WinForms', 'SQL Server', 'RBAC', 'Inventory', 'Three-Tier Architecture'],
    summary: 'Operational desktop system for donors, blood inventory, patients, transfusions, compatibility, reporting, and employee access control.',
    githubUrl: 'https://github.com/',
    detail: {
      overview: 'Medical desktop inventory and management system tracking blood bag collection, compatibility testing, transfusion requests, and expiration dates.',
      problem: 'Blood banks face life-critical challenges: blood type compatibility accuracy, expiration monitoring, and strict access controls.',
      solution: 'Desktop system providing real-time blood stock monitoring, automated compatibility matching algorithms, low-stock alerts, and full audit logs.',
      role: 'Co-Developer: implemented data access layer, blood matching algorithms, expiration tracking logic, and employee role-based security.',
      stack: ['C#', '.NET Framework 4.7.2', 'WinForms', 'Guna UI2', 'SQL Server', 'WinForms Charts'],
      architecture: [
        'Blood group compatibility matrix evaluation engine',
        'Unit expiration tracking with automatic quarantine status',
        'Role-based security restricting patient and transfusion controls',
      ],
      challenges: [
        'Zero-error blood matching logic to prevent unsafe transfusion approvals',
        'Designing automated low-stock and upcoming expiration alerts',
      ],
      screenshots: [
        { label: 'Inventory Dashboard', caption: 'Live stock count by blood group and expiration warnings.' },
        { label: 'Donor Management', caption: 'Donor history, medical eligibility, and donation logs.' },
        { label: 'Blood Compatibility', caption: 'Automated donor-patient matching tool.' },
      ],
    },
  },
  {
    id: 'how-to-train-your-ai',
    title: 'How To Train Your AI',
    category: 'Unity Games',
    year: '2024',
    tags: ['Unity 6', 'C#', 'Gameplay Systems', 'Cinemachine', 'ScriptableObjects', 'Event-Driven'],
    summary: 'Narrative-driven Unity first-person experience where the player trains a robot through connected gameplay systems and mini-games.',
    githubUrl: 'https://github.com/',
    detail: {
      overview: 'First-person narrative puzzle game made with Unity 6 featuring player-robot perspective switching, AI navigation, and training mini-games.',
      problem: 'Designing engaging interactive mini-games that directly affect persistent robot AI stats and gameplay outcomes.',
      solution: 'Modular event-driven C# architecture in Unity 6 using ScriptableObjects, Cinemachine camera blending, and custom pathfinding.',
      role: 'Gameplay Contributor / Mini-Game 1 Developer: created Mini-Game 1 gameplay logic, ScriptableObject event channels, and robot interaction handlers.',
      stack: ['Unity 6', 'C#', 'URP', 'Cinemachine', 'Input System', 'AI Navigation', 'ScriptableObjects'],
      architecture: [
        'ScriptableObject event architecture decoupling mini-games from global game state',
        'Player and robot perspective controller state machine',
        'Custom A* pathfinding and deadlock detection',
      ],
      challenges: [
        'Ensuring smooth camera transitions during character switching',
        'Balancing mini-game difficulty to impact robot stat progression',
      ],
      screenshots: [
        { label: 'Mini-Game 1', caption: 'Robot training calibration mini-game.' },
        { label: 'Robot Perspective', caption: 'First-person view inside the training facility.' },
        { label: 'Environment', caption: 'Narrative lab environment rendered in URP.' },
      ],
    },
  },
  {
    id: 'keyword-guard',
    title: 'KeywordGuard',
    category: 'Telegram Bots',
    year: '2024',
    tags: ['Telegram Bot', 'Python', 'Pyrogram', 'Arabic NLP', 'Fuzzy Matching', 'Docker'],
    summary: 'Telegram moderation bot that detects obfuscated or prohibited Arabic content and automatically enforces group rules.',
    detail: {
      overview: 'High-performance Arabic group moderation bot combining text normalization, diacritic removal, fuzzy pattern matching, and automated enforcement.',
      problem: 'Spammers and rule breakers bypass basic keyword filters by adding Arabic diacritics, symbols, tatweel, or character variations.',
      solution: 'Python bot equipped with custom Arabic NLP normalization pipeline and RapidFuzz matching to catch obfuscated violations reliably.',
      role: 'Sole Creator: developed the text normalization algorithms, Pyrogram event handlers, rule engine, and Docker deployment setup.',
      stack: ['Python', 'Pyrogram', 'TgCrypto', 'RapidFuzz', 'Unidecode', 'Docker'],
      architecture: [
        'Multi-pass Arabic normalization (diacritics removal, symbol cleaning, letter unification)',
        'RapidFuzz string similarity scoring against prohibited rule catalogs',
        'Async Pyrogram message handler with automatic mute/ban/delete enforcement',
      ],
      challenges: [
        'High-throughput message processing without hitting Telegram bot rate limits',
        'Eliminating false positives on complex Arabic language phrases',
      ],
      screenshots: [
        { label: 'Auto Moderation', caption: 'Obfuscated text detection and instant message deletion.' },
        { label: 'Rule Engine', caption: 'Configurable sensitivity and custom word lists.' },
      ],
    },
  },
  {
    id: 'study-tracker',
    title: 'StudyTracker',
    category: 'Web & SaaS',
    year: '2024',
    tags: ['.NET 8', 'ASP.NET Core MVC', 'Identity', 'EF Core', 'SQL Server', 'Tailwind'],
    summary: 'Study-session tracking platform with goals, streaks, multiple leaderboards, profile management, and an administration layer.',
    githubUrl: 'https://github.com/',
    detail: {
      overview: 'Web productivity platform helping students log study hours, maintain daily streaks, and compete on community leaderboards.',
      problem: 'Students struggle to stay consistent without clear progress visualization, targets, and friendly social accountability.',
      solution: 'ASP.NET Core 8 MVC platform providing streak calculations, target tracking, avatar cropping, and administrative management.',
      role: 'Full-Stack Developer: built MVC controllers, EF Core database models, streak computation algorithms, and Tailwind UI.',
      stack: ['ASP.NET Core MVC 8', 'EF Core 8', 'SQL Server', 'ASP.NET Identity', 'Tailwind CSS', 'ImageSharp'],
      architecture: [
        'ASP.NET Core Identity authentication with custom profile extensions',
        'Daily/Weekly/Monthly time series aggregation queries',
        'Server-side ImageSharp profile image processing and cropping',
      ],
      challenges: [
        'Timezone adjustments for accurate daily streak preservation',
        'Efficient SQL leaderboards aggregation queries across large entry datasets',
      ],
      screenshots: [
        { label: 'Analytics Dashboard', caption: 'Weekly targets, streaks, and study charts.' },
        { label: 'Leaderboard', caption: 'Global and group rankings by study volume.' },
      ],
    },
  },
  {
    id: 'kau-medreg',
    title: 'KAU MedReg',
    category: 'Telegram Bots',
    year: '2024',
    tags: ['Telegram Bot', 'Python', 'Google Sheets', 'Validation', 'Automation', 'Docker'],
    summary: 'Telegram registration workflow for university students with validation, editable profiles, local persistence, Google Sheets synchronization, and admin notifications.',
    detail: {
      overview: 'Automated registration bot facilitating university student onboarding with step-by-step conversational forms and live sync to Google Sheets.',
      problem: 'Manual collection of student university IDs, emails, and academic tracks created data entry bottlenecks and duplication errors.',
      solution: 'Conversational Python bot that validates email/ID formats, allows profile updates, notifies admins, and syncs data to Google Sheets in real time.',
      role: 'Developer: designed the conversational finite state machine, validation rules, and Google Sheets gspread API integration.',
      stack: ['Python', 'python-telegram-bot', 'gspread', 'Google Sheets API', 'Docker'],
      architecture: [
        'Stateful conversation handler tracking registration steps',
        'Regex validation for university email domain and student ID syntax',
        'Background thread synchronization with Google Sheets API via gspread',
      ],
      challenges: [
        'Handling API quota limits for Google Sheets during peak registration windows',
        'Allowing existing users to seamlessly view and update profile data',
      ],
      screenshots: [
        { label: 'Registration Flow', caption: 'Guided step-by-step student information prompt.' },
        { label: 'Admin Alert', caption: 'Real-time notification sent to coordinators.' },
      ],
    },
  },
  {
    id: 'uniconnect',
    title: 'UniConnect',
    category: 'Web & SaaS',
    year: '2024',
    tags: ['Next.js', 'React', 'TypeScript', 'MongoDB', 'OTP', 'Email', 'Responsive'],
    summary: 'Graduation-team matching platform with student discovery, skill/track filtering, OTP-secured profile editing, and application administration.',
    githubUrl: 'https://github.com/',
    detail: {
      overview: 'Web platform connecting university students forming graduation project teams based on complementary skill sets and academic tracks.',
      problem: 'Graduation project students struggle to find teammates with specific skills (e.g., UI design, backend development, embedded systems).',
      solution: 'Next.js application featuring dynamic skill filtering, OTP email verification, directory search, and admin moderation.',
      role: 'Full-Stack Developer: created Next.js API routes, MongoDB schemas, Resend email OTP verification, and Arabic/English UI components.',
      stack: ['Next.js 14', 'React 18', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'Mongoose', 'Resend API'],
      architecture: [
        'Next.js Server Actions and API routes for directory search and filtering',
        'MongoDB Mongoose schema with skill index optimization',
        'OTP email authentication service powered by Resend',
      ],
      challenges: [
        'Optimizing student directory search across dynamic skill tags',
        'Designing a clean responsive directory supporting Arabic text content',
      ],
      screenshots: [
        { label: 'Student Directory', caption: 'Browse students by track and skills.' },
        { label: 'Profile Setup', caption: 'OTP email verification and skill tag selector.' },
      ],
    },
  },
]

export function findProject(id: string | undefined): Project | undefined {
  if (!id) return undefined
  return projects.find((p) => p.id === id)
}

export function categoryTone(category: Category): string {
  switch (category) {
    case 'Web & SaaS':
      return '#c9a86a'
    case 'Desktop Systems':
      return '#7ea8d8'
    case 'Telegram Mini Apps':
      return '#89c997'
    case 'Telegram Bots':
      return '#8ba5d8'
    case 'Unity Games':
      return '#d88ba5'
    default:
      return '#c9a86a'
  }
}
