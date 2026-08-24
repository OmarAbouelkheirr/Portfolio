import { projects as baseProjects } from './portfolioData.ts'
import type { Project, ProjectDetail } from './portfolioData.ts'

export interface PortfolioProjectDetail extends ProjectDetail {
  features?: string[]
}

export interface PortfolioProject extends Omit<Project, 'detail'> {
  detail: PortfolioProjectDetail
}

const baleghProject: PortfolioProject = {
  id: 'balegh',
  title: 'Balegh',
  category: 'Web & SaaS',
  year: '2026',
  tags: ['.NET 10', 'Angular 20', 'PostgreSQL', 'Redis', 'Docker', 'AWS', 'SSR', 'RBAC'],
  summary:
    'Production Arabic-first LMS for Qudrat and Tahsili preparation, combining course delivery, quizzes, protected learning content, permission-based administration, and AWS-backed infrastructure.',
  featured: true,
  demoUrl: 'https://balegh-academy.com/',
  detail: {
    overview:
      'Balegh is a live Arabic-first learning platform built for Qudrat quantitative/verbal and Tahsili preparation. It brings the public course catalog, student learning experience, course administration, quizzes, files, access management, and operational tooling into one production system.',
    problem:
      'The platform needed to deliver structured Arabic learning content with a strong RTL experience while keeping lessons, files, quizzes, results, and administrative operations secure and manageable. It also had to be deployable as a real production product rather than a demo application.',
    solution:
      'A single-tenant modular-monolith backend built with ASP.NET Core 10 and PostgreSQL, paired with an Angular 20 SSR/hydrated frontend. Redis supports caching and rate-limiting concerns, NSwag keeps the frontend API client aligned with the backend contract, and the production stack runs in Docker behind Nginx on AWS with S3-backed file storage.',
    role:
      'Product & Backend Engineer: designed the backend architecture and domain workflows, implemented authentication and permission-based authorization, learning and administration APIs, database persistence, production infrastructure, and the integration contract used by the Angular frontend.',
    stack: [
      '.NET 10',
      'ASP.NET Core 10',
      'Entity Framework Core',
      'PostgreSQL',
      'Redis',
      'ASP.NET Core Identity',
      'JWT + Refresh Tokens',
      'Angular 20',
      'TypeScript',
      'Angular SSR & Hydration',
      'SCSS',
      'NSwag',
      'Docker Compose',
      'Nginx',
      'AWS EC2',
      'Amazon S3',
      'Ansible',
    ],
    features: [
      'Arabic-first, fully RTL public and student learning experience',
      'Course catalog with structured sections, lessons, files, and protected learning content',
      'Quiz workflows with persisted attempts and stable historical results',
      'Student authentication with JWT access tokens and rotating refresh-token sessions',
      'Permission-based roles for Owner, Admin, and Student responsibilities',
      'Administrative course and content management workflows',
      'Manual course-access activation with a WhatsApp-based subscription/contact flow',
      'Redis-backed caching and API rate limiting',
      'Generated Angular API clients from the backend OpenAPI contract using NSwag',
      'Server-side rendering and hydration for fast public-facing Angular pages',
      'Production file storage through Amazon S3',
      'Containerized AWS deployment behind Nginx with Ansible-based server provisioning',
    ],
    architecture: [
      'ASP.NET Core 10 modular monolith split into Identity, Student, Admin, Notifications, and Background Jobs modules',
      'PostgreSQL persistence through Entity Framework Core with ASP.NET Core Identity for users and roles',
      'Angular 20 application with SSR, hydration, standalone components, and generated NSwag API clients',
      'Redis for distributed caching, rate-limit state, and operational coordination',
      'Docker Compose deployment on AWS EC2 behind Nginx, with S3 used for platform files and media',
    ],
    challenges: [
      'Building a polished Arabic-first RTL experience across public, student, and admin workflows',
      'Keeping authorization enforced consistently for protected lessons, files, quizzes, results, and admin operations',
      'Designing secure access-token and refresh-token rotation without exposing long-lived credentials to browser storage',
      'Keeping the frontend/backend contract synchronized while the product evolved quickly',
      'Hardening the application and infrastructure for an actual public production launch',
    ],
    screenshots: [],
  },
}

export const FEATURED_ID = 'balegh'

export const projects: PortfolioProject[] = [
  baleghProject,
  ...(baseProjects.filter((project) => project.id !== 'masar') as PortfolioProject[]),
]

export function findProject(id: string | undefined): PortfolioProject | undefined {
  if (!id) return undefined
  return projects.find((project) => project.id === id)
}
