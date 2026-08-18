import { useCallback } from 'react'
import { useReducedMotion } from 'framer-motion'
import type { MouseEvent, ReactNode } from 'react'

export function SmoothLink({
  href,
  className,
  children,
}: {
  href: string
  className?: string
  children: ReactNode
}) {
  const reduced = useReducedMotion()

  const onClick = useCallback(
    (e: MouseEvent<HTMLAnchorElement>) => {
      const id = href.replace(/^#/, '')
      const el = document.getElementById(id)
      if (!el) return
      e.preventDefault()
      el.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' })
      if (window.location.hash !== href) {
        window.history.pushState(null, '', href)
      }
    },
    [href, reduced],
  )

  return (
    <a href={href} className={className} onClick={onClick}>
      {children}
    </a>
  )
}