# Portfolio Projects Content & Placement Plan

## 1. Portfolio Positioning

Primary identity:

**Software Engineer — Backend-focused, SaaS, and Business Systems**

The project section should prove that positioning first, while Telegram and Unity show breadth.

Recommended homepage emphasis:

1. SaaS / business systems
2. Full product / backend-heavy web platforms
3. Production Telegram Mini Apps
4. Telegram Bots
5. Unity Games
6. Smaller educational / practice projects should not appear in the main grid

---

## 2. Recommended Project Filters

The current filter set should be slightly expanded because two of the strongest projects are desktop business systems.

Use:

- **All**
- **Web & SaaS**
- **Desktop Systems**
- **Telegram Mini Apps**
- **Telegram Bots**
- **Unity Games**

Technology names remain tags, not filters.

Examples:

`ASP.NET Core` · `.NET` · `C#` · `PostgreSQL` · `SQL Server` · `Angular` · `React` · `Redis` · `Docker` · `AWS` · `Unity`

---

## 3. Recommended Homepage Order

### Featured
1. **Masar** — FEATURED

### Strong primary projects
2. **EventHub**
3. **CinemaVerse**
4. **TaskMint**
5. **Driving License Management System**
6. **Blood Bank Management System**

### Supporting projects
7. **StudyTracker**
8. **UniConnect**
9. **How To Train Your AI**
10. **KeywordGuard**
11. **KAU MedReg**

This order can change once real screenshots and project metrics are available.

---

# 4. Project Records

---

## Masar

### Portfolio placement

- **Category:** Web & SaaS
- **Priority:** Highest
- **Featured:** **Yes**
- **Homepage treatment:** Large featured project inside the normal Projects collection
- **Dedicated case study:** Yes
- **GitHub button:** No public GitHub button while repository remains private
- **Demo button:** Add only if/when a public environment is available

### Suggested card copy

**Masar**  
Multi-tenant learning platform built around tenant isolation, dynamic authorization, learning workflows, quizzes, and production-oriented infrastructure.

### Why it belongs at the top

Masar is the project that best supports the intended portfolio positioning:

- backend engineering
- SaaS architecture
- business systems
- multi-tenancy
- authorization
- infrastructure
- product engineering

### Verified technical story

The backend is an **ASP.NET Core 10 modular monolith** designed as a tenant-aware platform.

Key architectural points:

- multiple clients share the same application and primary PostgreSQL database
- tenant-owned data is isolated by `TenantId`
- tenant scope is enforced through tenant context, EF Core query filters, and write guards
- tenant identifiers are included in cache and storage keys
- ASP.NET Core Identity
- JWT access tokens
- tenant-scoped roles
- dynamic permission-based authorization through role claims
- separate host-level System Owner administration
- PostgreSQL
- Redis-backed caching
- distributed rate limiting
- file/object storage abstraction
- health checks
- structured logging
- Docker deployment

The platform contains backend modules for:

- Identity
- Admin
- Student
- System Owner
- Notifications
- Background Jobs

The infrastructure repository describes deployment using:

- AWS EC2
- Nginx
- Docker Compose
- PostgreSQL
- Redis
- private S3 storage
- CloudFormation
- Ansible over AWS Systems Manager

### Suggested tags

`.NET 10` `ASP.NET Core` `PostgreSQL` `Redis` `Angular` `Docker` `AWS` `S3` `CloudFormation` `Ansible` `Multi-Tenant SaaS`

### Suggested case-study sections

**Overview**  
A tenant-aware LMS/product platform intended to support multiple independent clients without separate application codebases for compatible business models.

**Problem**  
How to build one education platform that can serve different clients while preserving logical isolation, permissions, branding, users, courses, learning data, and administrative boundaries.

**Solution**  
A modular-monolith application with tenant-aware domain boundaries, permission-based authorization, shared infrastructure, and isolated tenant data.

**Role**  
Exact wording should be confirmed before publishing. Do not invent team/client claims.

**Architecture**  
This should be one of the strongest visual sections in the entire portfolio. Include:
- application architecture diagram
- tenant isolation diagram
- authorization flow
- infrastructure/deployment diagram

**Challenges to discuss**
- tenant isolation
- dynamic RBAC
- student access rules
- quiz/attempt workflows
- caching and distributed concerns
- storage isolation
- deployment and infrastructure

### Media to prepare

- Landing / public page
- Student course experience
- Learning page
- Quiz experience
- Admin dashboard
- Course builder
- Users / access management
- System Owner screens
- Architecture diagram
- AWS deployment diagram

### Content status

**Strong enough for Featured now**, but needs real screenshots and final owner-role wording.

---

## EventHub

### Portfolio placement

- **Category:** Web & SaaS
- **Priority:** Very high
- **Featured:** No
- **Dedicated case study:** Yes
- **GitHub:** Public
- **Demo:** Repository documents a live website; verify it is still online before publishing

### Suggested card copy

**EventHub**  
Event discovery and ticketing platform with attendee, organizer, and admin workflows, JWT authentication, bookings, and QR-based ticket verification.

### Verified features

- Admin, Organizer, and Attendee roles
- JWT authentication
- attendees browse and book events
- QR-code ticket generation
- organizer event management
- on-site QR verification
- admin management portal

### Verified architecture / stack

- C# / .NET Core
- MVC + Web API
- Entity Framework Core
- LINQ
- JWT
- HTML / CSS / JavaScript / Bootstrap

### Verified role

The repository states that Omar was:

**Team Lead** — system analysis and architecture design, full backend/API layer for users, organizers, and admins, database structure, task division, and overall development coordination.

This is a strong portfolio story and should be stated clearly.

### Suggested tags

`.NET` `ASP.NET Core` `EF Core` `JWT` `SQL` `REST API` `QR Tickets` `Team Lead`

### Best case-study angle

**Business workflow engineering + technical leadership**

### Media to prepare

- Landing/event discovery
- Event details
- booking flow
- QR ticket
- organizer dashboard
- admin dashboard
- QR scanning/verification flow
- architecture diagram

---

## CinemaVerse

### Portfolio placement

- **Category:** Web & SaaS
- **Priority:** Very high
- **Featured:** No
- **Dedicated case study:** Yes
- **GitHub:** Public
- **Demo:** Verify current live API/site availability before publishing

### Suggested card copy

**CinemaVerse**  
End-to-end cinema booking platform with real-time seat selection, Stripe payments, QR tickets, scheduling, background jobs, and an administrative operations suite.

### Verified features

User:
- movie browsing
- search/genre/language filtering
- movie details
- seat selection
- bookings
- Stripe payment
- QR ticket generation

Admin:
- KPIs and analytics
- movie CRUD and media
- branches and halls
- seat layouts
- showtime scheduling and conflict detection
- users
- bookings
- payments
- tickets / check-in

### Verified backend stack

- ASP.NET Core 9
- EF Core 9
- SQL Server
- Stripe
- Hangfire
- MailKit
- BCrypt
- Serilog
- JWT + refresh tokens

Frontend:
- Angular 21
- TypeScript
- SCSS / Bootstrap
- Chart.js
- RxJS
- Angular Signals

### Verified role

Repository team table lists:

**Omar Aboelkheir — Backend**

Do not claim sole ownership of the frontend.

### Strong technical talking points

- payment integration
- pending-booking expiration jobs
- show reminders
- showtime conflict detection
- seat availability
- ticket validation
- JWT/refresh flow
- admin/user workflow separation

### Suggested tags

`.NET 9` `Angular` `SQL Server` `Stripe` `Hangfire` `JWT` `QR Codes` `Background Jobs`

### Media to prepare

The repository already documents many useful screenshots:
- home
- movie listing/detail
- booking
- payment
- admin dashboard
- branches/halls
- showtimes
- bookings
- ticket/check-in

This makes CinemaVerse one of the easiest strong case studies to finish.

---

## TaskMint

### Portfolio placement

- **Category:** Telegram Mini Apps
- **Priority:** Very high
- **Featured:** No
- **Dedicated case study:** Yes
- **Production badge:** Yes, if you confirm it is currently/previously production
- **GitHub button:** **Hide** — repository is private
- **Public demo:** Hide if you do not want to expose the production URL
- **Media strategy:** Screenshots/video only

### Suggested card copy

**TaskMint**  
Production-oriented Telegram Mini App combining a React client, Telegram bot, backend API, task/reward workflows, referrals, withdrawals, ads, and operational tooling.

### Verified architecture

Monorepo/workspace containing:

- `client`
- `server`
- `bot`
- `admin-bot`

Client:
- React 19
- TypeScript
- Vite
- Telegram Apps SDK
- React Router
- Tailwind
- Monetag SDK

Server:
- Node.js
- Express
- Prisma
- PostgreSQL
- Redis
- JWT
- rate limiting

Bot:
- grammY

Repository structure also includes:
- Docker
- Docker Compose
- admin bot / deployment operations

### Verified domain model

The database schema includes:

- Telegram users
- balances
- referral codes / referral relationships
- tasks
- task submissions
- approval/rejection
- withdrawals
- balance logs
- ad placements
- ad sessions
- configuration
- admin users

Task types include Telegram and custom tasks.

### Strong case-study angle

**A production Telegram product, not “just a bot.”**

Show the architecture as:

Telegram User  
→ Telegram Bot / Mini App  
→ React Client  
→ Express API  
→ PostgreSQL / Redis  
→ Tasks / Referrals / Withdrawals / Ads

### Suggested tags

`Telegram Mini Apps` `React` `Node.js` `Express` `PostgreSQL` `Prisma` `Redis` `Docker` `Telegram Bot` `JWT`

### Media to prepare

- Telegram launch flow
- home/dashboard
- tasks
- task submission
- referral UI
- balance
- withdrawal
- ads/reward flow
- admin views if safe to display
- architecture diagram

### Important privacy rule

Do not expose:
- production tokens
- admin credentials
- private URLs you do not want public
- infrastructure secrets

---

## Driving License Management System (DVLD)

### Portfolio placement

- **Category:** Desktop Systems
- **Priority:** High
- **Featured:** No
- **Dedicated case study:** Yes
- **GitHub:** Public
- **Demo:** YouTube demo is documented in the repository

### Suggested card copy

**Driving License Management System**  
Desktop business system for driving-license applications, testing, issuance, renewal, detention, and administrative workflows.

### Verified features

- authentication / authorization
- user management
- people records
- drivers
- local/international license applications
- workflow and status tracking
- vision/theory/practical test scheduling
- license issuance
- renewals
- lost/damaged replacements
- license detention/release
- history / audit trail
- administrative configuration

### Verified stack

- C#
- .NET Framework 4.7.2
- WinForms
- Guna UI2
- SQL Server
- ADO.NET
- three-tier architecture

### Strong case-study angle

**Complex business workflows and separation of presentation/business/data layers**

### Suggested tags

`C#` `.NET Framework` `WinForms` `SQL Server` `ADO.NET` `Three-Tier Architecture` `Business Workflows`

### Media to prepare

The repo already contains screenshots for:
- login
- main dashboard
- people
- license applications

Use video frames/screenshots for:
- detained licenses
- issuance
- tests
- other workflows

---

## Blood Bank Management System

### Portfolio placement

- **Category:** Desktop Systems
- **Priority:** High
- **Featured:** No
- **Dedicated case study:** Yes
- **GitHub:** Public

### Suggested card copy

**Blood Bank Management System**  
Operational desktop system for donors, blood inventory, patients, transfusions, compatibility, reporting, and employee access control.

### Verified features

- donor registration/history
- blood stock
- expiration tracking
- blood testing
- patient management
- transfusion requests/history
- blood-unit allocation
- employee management
- role-based access
- reporting
- blood compatibility checking
- low-stock alerts
- audit logging

### Verified stack

- .NET Framework 4.7.2
- WinForms
- Guna UI2
- SQL Server
- WinForms Charts
- three-tier architecture

### Team / role caution

The repository lists two developers:

- NourEldeenMahmoud
- OmarAbouelkheirr

Before publishing, specify exactly what you personally implemented.

### Suggested tags

`C#` `.NET Framework` `WinForms` `SQL Server` `RBAC` `Inventory` `Three-Tier Architecture`

### Media to prepare

Repo already includes:
- login
- dashboard
- donor management
- donation flow
- blood-unit card
- blood matching

---

## StudyTracker

### Portfolio placement

- **Category:** Web & SaaS
- **Priority:** Medium
- **Featured:** No
- **Dedicated case study:** Optional / Yes if screenshots are strong
- **GitHub:** Public

### Suggested card copy

**StudyTracker**  
Study-session tracking platform with goals, streaks, multiple leaderboards, profile management, and an administration layer.

### Verified features

- authentication
- CRUD study sessions
- daily/weekly/monthly/all-time analytics
- weekly targets
- streaks
- multiple leaderboard views
- admin user/session management
- profile editing
- image upload/cropping
- notification UI

### Verified stack

- ASP.NET Core MVC 8
- EF Core
- SQL Server
- ASP.NET Identity
- Tailwind CSS
- ImageSharp
- Cropper.js

### Suggested tags

`.NET 8` `ASP.NET Core MVC` `Identity` `EF Core` `SQL Server` `Tailwind`

### Portfolio role

Good supporting proof of product completion and conventional application development, but weaker than Masar/EventHub/CinemaVerse as a lead project.

---

## UniConnect / Graduation Team Builder

### Portfolio placement

- **Category:** Web & SaaS
- **Priority:** Medium
- **Featured:** No
- **Dedicated case study:** Optional
- **GitHub:** Public

### Suggested card copy

**UniConnect**  
Graduation-team matching platform with student discovery, skill/track filtering, OTP-secured profile editing, and application administration.

### Verified features

- student registration
- dynamic skill suggestions
- search/filtering by track and skills
- responsive directory
- OTP email verification
- admin approve/reject flow
- profile editing
- pagination
- social links
- Arabic text support

### Verified stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- MongoDB
- SendGrid / Resend

### Suggested tags

`Next.js` `React` `TypeScript` `MongoDB` `OTP` `Email` `Responsive`

### Portfolio role

Useful breadth project, especially because it is outside the .NET stack.

---

## How To Train Your AI

### Portfolio placement

- **Category:** Unity Games
- **Priority:** High inside the Unity filter
- **Featured:** Not overall portfolio Featured
- **Dedicated case study:** Yes
- **GitHub:** Public

### Suggested card copy

**How To Train Your AI**  
Narrative-driven Unity first-person experience where the player trains a robot through connected gameplay systems and mini-games.

### Verified project scope

Unity 6 first-person game containing:

- narrative progression
- player/robot control switching
- three training mini-games
- persistent robot stats
- fault system based on training quality
- custom A* pathfinding
- energy/path-efficiency mechanics
- spatial push puzzles
- deadlock detection
- scene transitions
- event-driven systems

### Verified tech

- Unity 6
- C#
- URP
- Cinemachine
- Input System
- AI Navigation
- Timeline
- TextMeshPro
- ScriptableObjects
- C# events

### Critical role accuracy

The repository team table states:

**Omar — Mini-Game 1**

Do not present the entire game as a solo project.

The portfolio page should say something like:

**Role: Mini-Game 1 Developer / Gameplay Contributor**

unless you confirm a broader role.

### Suggested tags

`Unity 6` `C#` `Gameplay Systems` `Cinemachine` `ScriptableObjects` `Event-Driven` `Game Development`

### Media strategy

This project should be media-heavy:
- gameplay video
- animated preview
- screenshots
- short GIF/video clips
- Mini-Game 1 specifically should be emphasized because that is the verified contribution

---

## KeywordGuard

### Portfolio placement

- **Category:** Telegram Bots
- **Priority:** Strong bot
- **Dedicated case study:** Optional
- **GitHub:** Repository is currently private; use screenshots/code-safe visuals only unless made public

### Suggested card copy

**KeywordGuard**  
Telegram moderation bot that detects obfuscated or prohibited Arabic content and automatically enforces group rules.

### Verified behavior

The README describes:
- prohibited-word/group moderation
- automatic message deletion
- member kick/ban behavior
- Docker/VPS deployment

The code also contains more interesting text-processing logic:
- Arabic character normalization
- diacritic removal
- punctuation/symbol normalization
- whitespace/tatweel handling
- phrase matching
- fuzzy matching using RapidFuzz

### Verified stack

- Python
- Pyrogram
- TgCrypto
- RapidFuzz
- Unidecode
- Docker

### Strong case-study angle

Do not market it as merely a “bad-word bot.”

The stronger story is:

**Arabic text normalization + fuzzy moderation + automated Telegram enforcement**

### Suggested tags

`Telegram Bot` `Python` `Pyrogram` `Arabic NLP` `Fuzzy Matching` `Docker` `Moderation`

### Media to prepare

- moderation demo conversation
- detected violation
- admin controls
- before/after message
- small diagram explaining normalization + matching pipeline

---

## KAU MedReg

### Portfolio placement

- **Category:** Telegram Bots
- **Priority:** Strong supporting bot
- **Dedicated case study:** Optional
- **GitHub:** Private
- **Media:** screenshots only

### Suggested card copy

**KAU MedReg**  
Telegram registration workflow for university students with validation, editable profiles, local persistence, Google Sheets synchronization, and admin notifications.

### Verified workflow

Code shows a conversational registration flow collecting:

- full name
- university ID
- university email
- phone number
- college/specialization
- program/path status

Also includes:
- field validation
- duplicate-registration handling
- existing-user lookup
- editing previously registered data
- admin notifications for new users
- local data storage
- Google Sheets synchronization

### Verified stack

- Python
- python-telegram-bot
- gspread / Google Sheets
- Docker

### Suggested tags

`Telegram Bot` `Python` `Google Sheets` `Validation` `Automation` `Docker`

### Strong case-study angle

**Turning a manual university registration/organization workflow into a guided Telegram process**

---

# 5. Projects I Would NOT Put in the Main Portfolio Grid

These can remain on GitHub and may be referenced in the journey/learning history, but they dilute the professional project section if displayed beside Masar or CinemaVerse:

- CSS_Tasks
- FirstReactApp
- Simple-Calculator
- TextEncryptor
- cSharpFund
- WebDevelopmentBasics
- SQLPracticeSolutions
- Assembly
- RDBMS_Architecture
- Big-Data-Revisions
- simple PHP CRUD exercises
- small fundamentals repositories
- `PHPTgBot-Youtube` in its current form (README describes it only as a simple PHP Telegram bot)
- `dotnet-api-security-lab` as a main project — useful learning lab, but too small compared with the larger systems

They are not “bad” repositories. They simply belong under **learning history / GitHub activity**, not the primary portfolio showcase.

---

# 6. Missing / Not Currently Visible Through Connected GitHub

## PlatFit

PlatFit was one of the intended flagship projects, but no repository matching `PlatFit` or `gym` is currently visible through the connected GitHub installation.

Do not invent its case study.

Once the repository becomes available, review it separately and decide whether it replaces EventHub/CinemaVerse as the #2 project or even competes with Masar for Featured.

## Additional Telegram Bots

The stated portfolio target is around five substantial Telegram bots.

The currently connected repositories provide enough verified material for:

- KeywordGuard
- KAU MedReg
- TaskMint's Telegram bot component (but TaskMint should primarily be categorized as a Mini App)

Do not pad the portfolio with tiny tutorial bots just to reach “five.”

Keep mock placeholders until the stronger private/production bots are photographed and documented.

## Additional Unity Games

Only **How To Train Your AI** is currently strong and verifiable from the connected project set.

Keep placeholder Unity entries for the other games until screenshots/video and exact contribution details are provided.

---

# 7. Project Card Data Model

Each project in the React portfolio should eventually use a centralized model similar to:

```ts
type ProjectCategory =
  | "web-saas"
  | "desktop"
  | "telegram-mini-app"
  | "telegram-bot"
  | "unity";

interface PortfolioProject {
  slug: string;
  title: string;
  shortDescription: string;
  category: ProjectCategory;

  featured: boolean;
  priority: number;

  role: string;
  stack: string[];

  thumbnail: string;
  mediaType: "image" | "video";

  githubUrl?: string;
  demoUrl?: string;
  youtubeUrl?: string;

  githubVisibility: "public" | "private" | "none";
  productionVisibility: "public" | "private" | "not-live";

  caseStudy: {
    overview: string;
    problem: string;
    solution: string;
    role: string;
    architecture: string[];
    challenges: string[];
    media: string[];
  };
}
```

This allows a private production project to be fully showcased without exposing a repository or URL.

---

# 8. Link Rules

### Public repository
Show:

`View Case Study` + `GitHub`

### Public demo and public repository
Show:

`View Case Study` + `Live Demo` + `GitHub`

### Private repository
Show:

`View Case Study`

Optionally add a small label:

`Private source`

Do not render a disabled GitHub button.

### Production project with private URL
Show screenshots/video and:

`Production Project`

Do not expose the live URL.

### Unity project without playable build
Show:

`View Case Study` + `Gameplay`

Do not show a fake Live Demo action.

---

# 9. Media Checklist

Before the final portfolio content pass, collect for every serious project:

### Web / SaaS
- hero screenshot
- user-facing workflow
- admin workflow
- architecture diagram
- 3–6 supporting screenshots
- optional short product video

### Desktop
- dashboard
- main business workflow
- data-management view
- architecture diagram
- 3–6 screenshots

### Telegram Mini App
- Telegram launch
- home
- important flows
- admin/operations if safe
- phone-sized screenshots
- short screen recording

### Telegram Bot
- realistic conversation screenshots
- admin interaction
- action/result
- architecture or flow diagram

### Unity
- 10–20 second gameplay clip
- hero screenshot
- 3–6 gameplay screenshots
- exact contribution/role
- systems/architecture graphic for the strongest game

---

# 10. Security Action Required Before Portfolio Publication

While reviewing the connected repositories, sensitive credentials were found embedded in repository content/default code in at least one private production repository, and credential-like defaults are also present in bot source.

Before any repository is made public or linked from the portfolio:

1. Rotate exposed Telegram bot tokens and any other credentials.
2. Remove credentials from README/source.
3. Replace them with placeholders / `.env.example`.
4. Check Git history — deleting the current line is not enough if the secret exists in history.
5. Keep production repositories private until the cleanup is complete.
6. Never copy those credentials into the portfolio project data.

This is higher priority than adding GitHub links.

---

# 11. Recommended First Real Content Pass

Implement real content in this order:

1. **Masar** — Featured
2. **EventHub**
3. **CinemaVerse**
4. **TaskMint**
5. **Driving License System**
6. **Blood Bank System**
7. **How To Train Your AI**
8. **KeywordGuard**
9. **StudyTracker**
10. **KAU MedReg**
11. **UniConnect**

Then replace remaining mock cards only when the real Telegram/Unity project media is ready.

---

## Final rule

The portfolio should not communicate:

> “I have a lot of repositories.”

It should communicate:

> **“I build real systems, understand backend and product architecture, and I can take software from idea to working product across several environments.”**
