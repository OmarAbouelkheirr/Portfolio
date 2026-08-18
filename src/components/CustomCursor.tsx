import { useEffect, useRef } from 'react'

const INTERACTIVE_SELECTOR =
  'a, button, [role="button"], .dark-card, .dark-expertise-item, .dark-hero-social, .dark-filter, [data-cursor]'

const DOT_SIZE = 5

export function CustomCursor() {
  const rootRef = useRef<HTMLDivElement | null>(null)
  const dotRef = useRef<HTMLDivElement | null>(null)
  const ringRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const root = rootRef.current
    const dot = dotRef.current
    const ring = ringRef.current
    if (!root || !dot || !ring) return
    if (typeof window === 'undefined') return

    const canUseCustomCursor =
      window.matchMedia('(pointer: fine)').matches &&
      window.matchMedia('(hover: hover)').matches
    if (!canUseCustomCursor) return

    let targetX = 0
    let targetY = 0
    let ringX = 0
    let ringY = 0
    let raf = 0

    const handlePointerMove = (event: PointerEvent) => {
      targetX = event.clientX
      targetY = event.clientY
      dot.style.transform =
        `translate3d(${targetX - DOT_SIZE / 2}px, ${targetY - DOT_SIZE / 2}px, 0)`
      if (!root.classList.contains('is-visible')) {
        root.classList.add('is-visible')
        document.documentElement.classList.add('custom-cursor-enabled')
      }
    }

    const loop = () => {
      ringX += (targetX - ringX) * 0.2
      ringY += (targetY - ringY) * 0.2
      ring.style.transform =
        `translate3d(${ringX - ring.offsetWidth / 2}px, ${ringY - ring.offsetHeight / 2}px, 0)`
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    const handlePointerOver = (event: PointerEvent) => {
      const target = event.target as Element | null
      if (target && target.closest(INTERACTIVE_SELECTOR)) {
        root.classList.add('is-interactive')
      }
    }

    const handlePointerOut = (event: PointerEvent) => {
      const target = event.target as Element | null
      const related = event.relatedTarget as Element | null
      const leavingInteractive = target && target.closest(INTERACTIVE_SELECTOR)
      const enteringInteractive = related && related.closest(INTERACTIVE_SELECTOR)
      if (leavingInteractive && !enteringInteractive) {
        root.classList.remove('is-interactive')
      }
    }

    const handlePointerDown = () => root.classList.add('is-pressed')
    const handlePointerUp = () => root.classList.remove('is-pressed')

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    document.addEventListener('pointerover', handlePointerOver)
    document.addEventListener('pointerout', handlePointerOut)
    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('pointerup', handlePointerUp)
    document.addEventListener('pointercancel', handlePointerUp)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', handlePointerMove)
      document.removeEventListener('pointerover', handlePointerOver)
      document.removeEventListener('pointerout', handlePointerOut)
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('pointerup', handlePointerUp)
      document.removeEventListener('pointercancel', handlePointerUp)
      document.documentElement.classList.remove('custom-cursor-enabled')
    }
  }, [])

  return (
    <div ref={rootRef} className="custom-cursor-root" aria-hidden="true">
      <div ref={ringRef} className="custom-cursor-ring" />
      <div ref={dotRef} className="custom-cursor-dot" />
    </div>
  )
}