export type Category = 'Web Apps' | 'Telegram Mini Apps' | 'Telegram Bots' | 'Unity Games'

export const CATEGORIES: Category[] = ['Web Apps', 'Telegram Mini Apps', 'Telegram Bots', 'Unity Games']

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

export const profile = {
    name: 'Your Name',
    role: 'Software Engineer',
    tagline: 'Backend-focused · SaaS · Business Systems',
    location: 'Remote · Worldwide',
    email: 'hello@example.com',
    phone: '+1 555 010 0246',
    github: 'https://github.com/',
    linkedin: 'https://www.linkedin.com/',
    youtube: 'https://www.youtube.com/',
}

export const expertise = [
    { title: 'Backend Engineering', detail: 'APIs, services, databases, and system design that hold up in production.' },
    { title: 'SaaS Products', detail: 'Multi-tenant architecture, subscriptions, billing logic, and product workflows.' },
    { title: 'Business Systems', detail: 'Inventory, automation, admin tooling, and integrations for real operations.' },
    { title: 'Web Applications', detail: 'Complete products front to back, from schema to shipped interface.' },
    { title: 'Telegram Mini Apps', detail: 'In-chat product surfaces with a native messenger feel.' },
    { title: 'Telegram Bots', detail: 'Automation, notifications, and conversational services.' },
    { title: 'Unity Games', detail: 'Interactive prototypes and playable games as engineering practice.' },
    { title: 'Technical Education', detail: 'YouTube content and university teaching that make systems legible.' },
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
    body: 'Software engineer focused on backend engineering, SaaS products, and business systems. I build complete products end to end — APIs, databases, and the interfaces that use them — and I teach what I learn along the way.',
}

export const projects: Project[] = [
    {
        id: 'inventory-intelligence',
        title: 'Inventory Intelligence',
        category: 'Web Apps',
        year: '2025',
        tags: ['.NET', 'C#', 'PostgreSQL', 'React', 'Redis'],
        summary: 'SaaS inventory platform for small distributors: multi-warehouse stock, forecasting, and supplier automation.',
        featured: true,
        demoUrl: 'https://example.com/demo/inventory',
        githubUrl: 'https://github.com/example/inventory-intelligence',
        detail: {
            overview: 'A multi-warehouse inventory SaaS that turns spreadsheets into a live operations system: stock levels, low-stock alerts, purchase suggestions, and supplier workflows in one place.',
            problem: 'Small distributors managed inventory in spreadsheets: no live stock, no reorder logic, and decisions made on stale numbers. Existing ERP tools were too heavy and too expensive for their size.',
            solution: 'A web app with a shared product catalog across warehouses, real-time stock, reorder-point recommendations, and a supplier purchase flow. Built as a multi-tenant SaaS with per-tenant data isolation.',
            role: 'Backend design and build: schema, services, forecasting logic, and the tenant model. Owned the API contract the React client consumes.',
            stack: ['.NET', 'C#', 'PostgreSQL', 'Redis', 'React', 'TypeScript', 'Docker'],
            architecture: ['Multi-tenant schema with tenant-scoped data access', 'Warehouse + stock tables with a ledger of movements', 'Forecast service computes suggested reorder quantities', 'Background jobs push low-stock notifications'],
            challenges: ['Keeping tenant isolation correct across every query path', 'Making forecasting sensible with sparse historical data', 'A stock ledger that must stay auditable and consistent'],
            screenshots: [
                { label: 'Dashboard', caption: 'Live stock levels and low-stock alerts across warehouses.' },
                { label: 'Forecast', caption: 'Reorder suggestions driven by usage history.' },
                { label: 'Suppliers', caption: 'Purchase workflow with supplier lines.' },
            ],
        },
    },
    {
        id: 'timebox',
        title: 'Timebox',
        category: 'Web Apps',
        year: '2024',
        tags: ['ASP.NET Core', 'C#', 'PostgreSQL', 'React'],
        summary: 'Time tracking SaaS for small teams: projects, weekly reports, and client billing.',
        demoUrl: 'https://example.com/demo/timebox',
        detail: {
            overview: 'Time tracking for small consultancies: log time against projects, get weekly summaries, and export client-ready billing reports.',
            problem: 'Teams tracked hours in shared docs where nothing added up and nobody trusted the totals.',
            solution: 'A focused SaaS with project time entry, weekly rollups, and billable export. Simple enough to adopt in a day.',
            role: 'Backend services, reporting queries, and the React frontend. Designed the report model end to end.',
            stack: ['ASP.NET Core', 'C#', 'PostgreSQL', 'React', 'TypeScript'],
            architecture: ['Projects and time entries with client associations', 'Weekly rollup service for report data', 'Exports generated server-side'],
            challenges: ['Timezone-safe day boundaries for weekly reports', 'Fast aggregation over many entries', 'A billing export clients actually accept'],
            screenshots: [
                { label: 'Entry', caption: 'Logging time against a project.' },
                { label: 'Weekly report', caption: 'Rolled-up hours per client.' },
            ],
        },
    },
    {
        id: 'billing-desk',
        title: 'Billing Desk',
        category: 'Web Apps',
        year: '2023',
        tags: ['C#', 'SQL Server', 'React', '.NET'],
        summary: 'Business billing system: invoices, payments, and dunning for a services company.',
        detail: {
            overview: 'Internal billing system for a services company: invoice generation, payment recording, and automatic follow-ups.',
            problem: 'Invoicing lived in office software with manual follow-up, so money aged and nobody noticed.',
            solution: 'A web system that generates invoices from time data, records payments, and runs a dunning schedule automatically.',
            role: 'Led backend design: data model, payment reconciliation, and the dunning engine.',
            stack: ['C#', '.NET', 'SQL Server', 'React'],
            architecture: ['Invoices derived from approved time entries', 'Payment reconciliation against bank records', 'Dunning engine schedules follow-up by age'],
            challenges: ['Reconciling partial payments cleanly', 'Numbering and audit trail for legal use', 'Dunning that does not harass good clients'],
            screenshots: [
                { label: 'Invoice list', caption: 'Open, paid, and overdue invoices.' },
                { label: 'Dunning', caption: 'Automatic follow-up schedule.' },
            ],
        },
    },
    {
        id: 'card-mate',
        title: 'Card Mate',
        category: 'Telegram Mini Apps',
        year: '2025',
        tags: ['Telegram Mini App', 'React', 'Node.js', 'PostgreSQL'],
        summary: 'Flashcard study inside Telegram: decks, spaced repetition, and progress streaks.',
        demoUrl: 'https://t.me/example/cardmate',
        detail: {
            overview: 'A Telegram Mini App for spaced-repetition flashcards. Users build decks, review cards, and keep streaks — all inside a chat.',
            problem: 'Study apps live in separate apps users forget to open; Telegram is already open.',
            solution: 'A Mini App that lives in the chat: instant launch, notifications for reviews, and progress visible without leaving Telegram.',
            role: 'Full stack: Telegram integration, scheduling logic, and the Mini App UI.',
            stack: ['Telegram Mini App', 'React', 'Node.js', 'PostgreSQL', 'Telegram Bot API'],
            architecture: ['Mini App frontend served from the bot webhook', 'Spaced-repetition scheduler service', 'Review reminders via bot messages'],
            challenges: ['Working inside Telegram WebApp constraints', 'Scheduling that survives irregular usage', 'Keeping the UI small and snappy in chat'],
            screenshots: [
                { label: 'Deck view', caption: 'Cards in the Mini App.' },
                { label: 'Review', caption: 'A review session with scheduling.' },
            ],
        },
    },
    {
        id: 'bookings-mini',
        title: 'Bookings Mini',
        category: 'Telegram Mini Apps',
        year: '2024',
        tags: ['Telegram Mini App', 'TypeScript', 'Node.js', 'SQLite'],
        summary: 'Appointment booking Mini App for a service business, with bot confirmations.',
        detail: {
            overview: 'A booking Mini App where customers pick a service, see live availability, and get a confirmed slot in chat.',
            problem: 'The business took bookings by phone and message, with double-bookings and no-show churn.',
            solution: 'A Mini App with real availability, bot-confirmed appointments, and reminder messages.',
            role: 'Backend booking engine and the Mini App flow.',
            stack: ['Telegram Mini App', 'TypeScript', 'Node.js', 'SQLite'],
            architecture: ['Availability computed from booked slots', 'Booking service with conflict checking', 'Bot reminders before appointments'],
            challenges: ['Preventing double-booking under concurrency', 'Time zones for the customer and the business', 'A flow short enough to finish in chat'],
            screenshots: [
                { label: 'Booking', caption: 'Picking a slot.' },
                { label: 'Confirmed', caption: 'Bot confirmation message.' },
            ],
        },
    },
    {
        id: 'order-tracker-bot',
        title: 'Order Tracker Bot',
        category: 'Telegram Bots',
        year: '2023',
        tags: ['C#', 'Telegram Bot API', 'PostgreSQL'],
        summary: 'Bot that tracks order status across channels and pushes updates to customers.',
        detail: {
            overview: 'A bot that watches order events and keeps customers updated on status in Telegram.',
            problem: 'Support spent the day answering "where is my order?" — the same question, repeatedly.',
            solution: 'A bot that listens to order events, answers status queries, and pushes progress updates automatically.',
            role: 'Built the event handling, state model, and bot commands.',
            stack: ['C#', 'Telegram Bot API', 'PostgreSQL', 'Redis'],
            architecture: ['Order event stream feeding bot state', 'State model per order with history', 'Update scheduler for progress pushes'],
            challenges: ['Idempotent updates so nothing double-sends', 'Graceful handling of bot rate limits', 'Privacy: only the order owner sees updates'],
            screenshots: [
                { label: 'Status', caption: 'A customer asking for status.' },
                { label: 'Update', caption: 'Automatic progress push.' },
            ],
        },
    },
    {
        id: 'notify-bot',
        title: 'Notify Bot',
        category: 'Telegram Bots',
        year: '2022',
        tags: ['Python', 'Telegram Bot API', 'Redis'],
        summary: 'Notification relay bot for internal services and monitoring alerts.',
        detail: {
            overview: 'A lightweight relay that routes internal notifications and alert pages into Telegram channels.',
            problem: 'Monitoring and CI alerts scattered across tools nobody watched.',
            solution: 'One bot with channel subscriptions, deduplication, and alert routing by severity.',
            role: 'Designed the relay, subscription model, and rate limiting.',
            stack: ['Python', 'Telegram Bot API', 'Redis'],
            architecture: ['Webhook intake from monitoring tools', 'Subscription and routing service', 'Deduplication and rate limiting'],
            challenges: ['Alert storms must collapse, not spam', 'Routing rules that stay simple', 'Running quietly for months without attention'],
            screenshots: [
                { label: 'Alert', caption: 'A routed alert in channel.' },
            ],
        },
    },
    {
        id: 'scheduler-bot',
        title: 'Scheduler Bot',
        category: 'Telegram Bots',
        year: '2022',
        tags: ['C#', 'Telegram Bot API', 'SQL Server'],
        summary: 'Content scheduling bot for a channel: queue posts and publish on time.',
        detail: {
            overview: 'A bot that holds a content queue and publishes posts on schedule for a channel.',
            problem: 'The channel posted by hand, on no rhythm, whenever someone remembered.',
            solution: 'A bot with a queue, a schedule, and one-command publish. Reliable enough to run the channel.',
            role: 'Built the queue model, scheduler, and commands.',
            stack: ['C#', 'Telegram Bot API', 'SQL Server'],
            architecture: ['Content queue with publish time', 'Scheduler picks due posts', 'Retry with backoff on send failure'],
            challenges: ['Catch-up after downtime without flooding', 'Idempotent publishing', 'Simple commands for non-technical users'],
            screenshots: [
                { label: 'Queue', caption: 'Queued posts with times.' },
            ],
        },
    },
    {
        id: 'neon-drift',
        title: 'Neon Drift',
        category: 'Unity Games',
        year: '2023',
        tags: ['Unity', 'C#'],
        summary: 'A neon arcade racer prototype: drifting, scoring, and procedural tracks.',
        detail: {
            overview: 'An arcade racing prototype with a neon look: drift for score, chain combos, and race procedurally built tracks.',
            problem: 'A game-jam-scale brief: one strong loop, learnable in seconds, scoreable in minutes.',
            solution: 'A drift-and-combo loop on generated tracks with a single, readable scoring model.',
            role: 'Game systems and gameplay code: movement, scoring, and track generation.',
            stack: ['Unity', 'C#'],
            architecture: ['Physics-based drift handling', 'Score state machine for combo chaining', 'Procedural track builder with seeded generation'],
            challenges: ['Drift feel on limited time budget', 'Combo rules that stay readable', 'Performance on mid-range hardware'],
            screenshots: [
                { label: 'Gameplay', caption: 'Drifting on a neon track.' },
                { label: 'Score', caption: 'Combo chain in progress.' },
            ],
        },
    },
    {
        id: 'puzzle-blocks',
        title: 'Puzzle Blocks',
        category: 'Unity Games',
        year: '2022',
        tags: ['Unity', 'C#'],
        summary: 'A physics puzzle game: stack, balance, and clear the board.',
        detail: {
            overview: 'A physics puzzle where players stack and balance blocks to clear boards within a move budget.',
            problem: 'A tight puzzle design brief: rules must teach themselves without instructions.',
            solution: 'A pick-and-place physics game with an undo system, built to be learned by play.',
            role: 'Core gameplay and the level scripting system.',
            stack: ['Unity', 'C#'],
            architecture: ['Physics-driven stacking with validation', 'Undo system for player forgiveness', 'Level definitions as data'],
            challenges: ['Physics determinism for fair puzzles', 'A level system that scales without hand-tuning', 'Undo that feels instant'],
            screenshots: [
                { label: 'Board', caption: 'A puzzle mid-stack.' },
            ],
        },
    },
]