import { useEffect, useRef } from 'react'

export function useSpotlight() {
  const ref = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const spot = el.querySelector<HTMLElement>('.dark-hero-spot')
    let lastX = Number.NaN
    let lastY = Number.NaN

    const setVisible = (visible: boolean) => {
      spot?.style.setProperty('opacity', visible ? '1' : '0')
    }

    const isInside = (x: number, y: number) => {
      const r = el.getBoundingClientRect()
      return x >= r.left && x <= r.right && y >= r.top && y <= r.bottom
    }

    const applyPosition = (x: number, y: number) => {
      const rect = el.getBoundingClientRect()
      el.style.setProperty('--spot-x', `${x - rect.left}px`)
      el.style.setProperty('--spot-y', `${y - rect.top}px`)
    }

    const onMove = (e: PointerEvent) => {
      lastX = e.clientX
      lastY = e.clientY
      applyPosition(lastX, lastY)
    }

    const onEnter = (e: PointerEvent) => {
      lastX = e.clientX
      lastY = e.clientY
      applyPosition(lastX, lastY)
      setVisible(true)
    }

    const onLeave = () => {
      setVisible(false)
    }

    const onScroll = () => {
      if (!Number.isNaN(lastX) && !Number.isNaN(lastY)) {
        setVisible(isInside(lastX, lastY))
      }
    }

    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerenter', onEnter)
    el.addEventListener('pointerleave', onLeave)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerenter', onEnter)
      el.removeEventListener('pointerleave', onLeave)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])
  return ref
}