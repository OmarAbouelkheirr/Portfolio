import { profile, about, expertise, career, projects, CATEGORIES, CATEGORY_FILTERS } from '../mockData.ts'
import type { Project, Category } from '../mockData.ts'

export { profile, about, expertise, career, projects, CATEGORIES, CATEGORY_FILTERS }
export type { Project, Category }

const extraProjects: Project[] = [
    {
        id: 'workspace-hub',
        title: 'Workspace Hub',
        category: 'Web Apps',
        year: '2025',
        tags: ['.NET', 'C#', 'PostgreSQL', 'React', 'Elasticsearch'],
        summary: 'A knowledge-base SaaS for small operations teams: docs, search, and team spaces in one product.',
        detail: {
            overview: 'A hosted knowledge base where small operations teams keep runbooks, policies, and notes in one searchable product with clean team spaces.',
            problem: 'Operational knowledge lived in chat threads and local files, so answers were slow and tribal — nobody trusted where the truth lived.',
            solution: 'A web app with hierarchical spaces, full-text search across everything, and permissioned team access. Simple publishing, immediate answers.',
            role: 'Backend design and build: content model, search pipeline, and team permissions. Owned the API the React client uses.',
            stack: ['.NET', 'C#', 'PostgreSQL', 'Elasticsearch', 'React', 'TypeScript', 'Docker'],
            architecture: ['Spaces and documents with soft-delete history', 'Indexed search pipeline over the full corpus', 'Team scoping with per-space permissions', 'Background jobs for search re-indexing'],
            challenges: ['Keeping search results fresh without heavy re-index churn', 'A permissions model simple enough to administer', 'Editor data that stays clean and queryable'],
            screenshots: [
                { label: 'Spaces', caption: 'Team spaces with permissions.' },
                { label: 'Search', caption: 'Full-text search across all docs.' },
            ],
        },
    },
    {
        id: 'buddy-board-mini',
        title: 'Buddy Board Mini',
        category: 'Telegram Mini Apps',
        year: '2025',
        tags: ['Telegram Mini App', 'React', 'Node.js', 'MongoDB'],
        summary: 'A leaderboard Mini App for a community: points, streaks, and weekly rankings in chat.',
        detail: {
            overview: 'A Telegram Mini App that runs community leaderboards: members earn points, keep streaks, and watch weekly rankings without leaving the chat.',
            problem: 'The community tracked activity in spreadsheets and manual announcements, with zero visibility and lots of moderator work.',
            solution: 'A Mini App with point logging, streak tracking, and live weekly rankings, plus bot announcements for milestones.',
            role: 'Full stack: points engine, ranking queries, and the Mini App interface.',
            stack: ['Telegram Mini App', 'React', 'Node.js', 'MongoDB', 'Telegram Bot API'],
            architecture: ['Points ledger with immutable entries', 'Streak calculation service', 'Ranking view built for instant reads'],
            challenges: ['Streak rules across timezones', 'Rankings that stay fair under abuse', 'A chat-native UI that loads instantly'],
            screenshots: [
                { label: 'Rankings', caption: 'Weekly leaderboard in the Mini App.' },
                { label: 'Profile', caption: 'Points and streak for a member.' },
            ],
        },
    },
    {
        id: 'digest-bot',
        title: 'Digest Bot',
        category: 'Telegram Bots',
        year: '2024',
        tags: ['TypeScript', 'Node.js', 'PostgreSQL', 'Telegram Bot API'],
        summary: 'A bot that collects highlights from subscribed sources and sends a clean daily digest.',
        detail: {
            overview: 'A bot that aggregates highlights from subscribed sources into one clean daily digest, delivered on schedule.',
            problem: 'Team members followed the same dozen sources separately and still missed the important updates.',
            solution: 'A bot with source subscriptions, a highlight extraction pipeline, and scheduled digests with per-user preferences.',
            role: 'Built the ingestion pipeline, digest assembly, and scheduling.',
            stack: ['TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Telegram Bot API'],
            architecture: ['Source ingestion workers with deduplication', 'Digest assembler respecting per-user prefs', 'Scheduler with retry and backoff'],
            challenges: ['Deduplicating overlapping sources', 'Digests that stay short and scannable', 'Scheduling that respects quiet hours'],
            screenshots: [
                { label: 'Digest', caption: 'A clean daily digest.' },
            ],
        },
    },
    {
        id: 'slope-run',
        title: 'Slope Run',
        category: 'Unity Games',
        year: '2024',
        tags: ['Unity', 'C#', 'Procedural Generation'],
        summary: 'An endless downhill runner: procedural terrain, speed ramps, and a one-touch control scheme.',
        detail: {
            overview: 'An endless downhill runner where terrain is generated as you descend: speed ramps, near-miss bonuses, and a one-touch control scheme.',
            problem: 'A prototype brief for a mobile-feel game: one-thumb play, procedural variety, and immediate restarts.',
            solution: 'A procedural terrain system with seeded generation and a scoring model built around near-misses and speed.',
            role: 'Gameplay systems: generation, controls, and scoring.',
            stack: ['Unity', 'C#', 'Procedural Generation'],
            architecture: ['Seeded terrain chunks generated ahead of the player', 'Near-miss detection for score bonuses', 'Speed curve tuned across the run'],
            challenges: ['Terrain variety without visible repetition', 'Near-miss detection that feels fair', 'Solid frame rate on mobile GPUs'],
            screenshots: [
                { label: 'Run', caption: 'Descending a generated slope.' },
                { label: 'Near-miss', caption: 'Bonus moment in the run.' },
            ],
        },
    },
]

export const round2Projects: Project[] = [...projects, ...extraProjects]