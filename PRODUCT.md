# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary audiences are two groups doing related but distinct jobs:

- **Recruiters / hiring managers** evaluating the owner for Software Engineering / Backend Engineering roles. They scan quickly for relevant skills, work history, and evidence of impact, and decide whether to advance the candidate.
- **Potential clients** deciding whether to hire the owner to build SaaS products and business software. They weigh demonstrated backend, architecture, and product capability from project evidence.

## Product Purpose

A portfolio that presents the owner as a Software Engineer specialized in backend engineering, SaaS products, and business systems — converting both audiences from "who is this?" to "I want to talk to them." Success is a visitor leaving with a clear, credible picture of the owner's engineering depth and a direct path to contact.

## Positioning

The owner is a Software Engineer whose professional identity is dominated by backend engineering, SaaS products, and business systems. Frontend work and complete-product builds exist but are supporting evidence, not the primary identity. Additional breadth — web applications, Telegram Mini Apps, Telegram Bots, Unity game development, and technical education / YouTube content — demonstrates range, but backend + SaaS + business systems must lead the professional positioning.

The portfolio's proof is first-hand, demonstrated engineering: real projects rather than claims. What a neighboring portfolio could not truthfully copy is the specific set of projects, experience, and results the owner has actually built.

## Operating Context

- Visitors arrive from links on resumes, profiles (GitHub, LinkedIn), and referrals, typically on a first impression with limited attention.
- The homepage is the primary browsing experience; dedicated project detail pages / case studies provide depth for those who want it.
- Contact initiation is the terminal action for both audiences.

## Capabilities and Constraints

- Built with Vite + React 19 + TypeScript; styles via CSS; assets bundled from `src/assets/`, public files served at `/`.
- No test framework; typecheck runs as part of `npm run build`; lint is oxlint.
- Multi-page structure: homepage plus dedicated project detail routes (case-study pages) supporting Overview, Problem, Solution, Role, Stack, Architecture, Challenges, Screenshots, Demo, and GitHub sections.
- Some projects may have no public GitHub repository and/or no public live URL — the UI must handle screenshot/video-only states naturally.
- Projects are the most important content. One Projects section on the homepage; the single Featured project is visually emphasized inside that same collection, not a separate section.
- Project browsing/filtering by categories: All, Web Apps, Telegram Mini Apps, Telegram Bots, Unity Games. Technology names are tags, not primary category filters.
- V1 is English only. Arabic is planned after the first complete English version is finalized; do not implement it now, but avoid architecture decisions that unnecessarily prevent future i18n and RTL support.
- One visual theme for V1; no light/dark theme switch.
- Fully responsive across desktop, tablet, and mobile. Motion should be subtle, polished, and functional — not game-like or flashy.
- Contact/identity to expose: downloadable Resume / CV, GitHub, LinkedIn, Email, Phone, YouTube. Resume should be prominent in the Hero and may also appear in navigation.
- Placeholder/mock data is allowed until verified content is supplied; do not invent facts, metrics, employers, clients, or achievements.

## Brand Commitments

None established. The portfolio must not fabricate testimonials, companies, roles, clients, or metrics.

## Evidence on Hand

- Resume / CV content (to be supplied by the owner).
- Personal and professional projects (details to be supplied by the owner; expected scale: several Web/SaaS/business applications, one production Telegram Mini App, around five Telegram Bots, around five Unity projects).
- Career journey milestones starting around 2021: beginning software development, Telegram bot development, starting a technical YouTube channel, studying Computer Science at university, specializing in backend engineering, building SaaS/business products, teaching technical/university content, and major project milestones (details to be supplied by the owner).
- External profile links: GitHub, LinkedIn, YouTube, Email, Phone (to be supplied by the owner).

Absences future work must not fabricate: company names, job titles, clients, testimonials, and performance numbers not confirmed by the owner.

## Product Principles

- **Engineering depth over breadth claims:** communicate strong backend, SaaS, architecture, and business-system expertise while using other disciplines as evidence of broader software engineering capability.
- **Evidence over claims:** show real work; never assert unconfirmed experience or results.
- **Respect the quick scan:** both audiences decide fast; the most important information must be reachable in seconds.
- **One clear path to contact:** every audience should end at a direct, obvious way to reach the owner.
- **Small, credible surface:** a tight set of strong projects beats a padded gallery.

## Accessibility & Inclusion

No product-specific requirement established beyond standard web accessibility.