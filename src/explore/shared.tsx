import { useEffect, useMemo, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { CATEGORY_FILTERS, projects } from './mockData.ts'
import type { Project } from './mockData.ts'

export type Filter = (typeof CATEGORY_FILTERS)[number]

export function useProjectFilter(all: Project[]) {
  const [filter, setFilter] = useState<Filter>('All')
  const filtered = useMemo(
    () => (filter === 'All' ? all : all.filter((p) => p.category === filter)),
    [all, filter],
  )
  return { filter, setFilter, filtered }
}

export function findProject(id: string | undefined): Project | undefined {
  if (!id) return undefined
  return projects.find((p) => p.id === id)
}

export function categoryMethod(category: Project['category']): string {
  switch (category) {
    case 'Web & SaaS':
      return 'GET'
    case 'Desktop Systems':
      return 'SYS'
    case 'Telegram Mini Apps':
      return 'POST'
    case 'Telegram Bots':
      return 'PUT'
    case 'Unity Games':
      return 'PLAY'
    default:
      return 'GET'
  }
}

export function methodColor(method: string): string {
  switch (method) {
    case 'GET':
      return '#1f9d61'
    case 'POST':
      return '#2456f0'
    case 'PUT':
      return '#b8791a'
    case 'PLAY':
      return '#a23c8f'
    default:
      return '#5c6370'
  }
}

export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reveal = () => {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-revealed')
              io.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
      )
      el.querySelectorAll<HTMLElement>('[data-reveal]').forEach((node) => io.observe(node))
      return io
    }

    let io = reveal()

    const mo = new MutationObserver(() => {
      io.disconnect()
      io = reveal()
    })
    mo.observe(el, { childList: true, subtree: true })

    return () => {
      io.disconnect()
      mo.disconnect()
    }
  }, [ref])
  return ref
}

export function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export function Icon({
  name,
  size = 16,
  className,
}: {
  name: IconName
  size?: number
  className?: string
}) {
  const paths: Record<IconName, React.ReactNode> = {
    resume: (
      <>
        <path d="M12 3v12m0 0-4-4m4 4 4-4" />
        <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
      </>
    ),
    arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
    external: (
      <>
        <path d="M14 4h6v6" />
        <path d="M20 4 11 13" />
        <path d="M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5" />
      </>
    ),
    github: (
      <>
        <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
      </>
    ),
    linkedin: (
      <>
        <path d="M4 8h4v12H4z" />
        <circle cx="6" cy="5" r="2" fill="none" />
        <path d="M10 8h4v2a4 4 0 0 1 3 3v7h-4v-7a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v7h-4z" />
      </>
    ),
    youtube: (
      <>
        <rect x="2.5" y="5" width="19" height="14" rx="3" />
        <path d="m10 9 5 3-5 3z" />
      </>
    ),
    email: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    phone: (
      <path d="M5 3h3l1.5 4.5L7 9a12 12 0 0 0 8 8l1.5-2.5L21 16v3a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2" />
    ),
    back: <path d="M15 5l-7 7 7 7" />,
    chevron: <path d="m9 6 6 6-6 6" />,
    code: (
      <>
        <path d="m8 8-4 4 4 4" />
        <path d="m16 8 4 4-4 4" />
        <path d="m13 4-2 16" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
  }
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}

export type IconName =
  | 'resume'
  | 'arrow'
  | 'external'
  | 'github'
  | 'linkedin'
  | 'youtube'
  | 'email'
  | 'phone'
  | 'back'
  | 'chevron'
  | 'code'
  | 'check'

export const FEATURED_ID = 'masar'
