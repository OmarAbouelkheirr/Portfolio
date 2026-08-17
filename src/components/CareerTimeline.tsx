import { useRef, useState, useEffect, useCallback } from 'react'
import { motion, useScroll, useTransform, useMotionValueEvent, useReducedMotion } from 'framer-motion'
import { career } from '../data/portfolioData.ts'

export function CareerTimeline() {
  const timelineRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])
  const [activeIndex, setActiveIndex] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const prefersReducedMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 75%', 'end 50%'],
  })

  const railHeightPercent = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  const updateActiveMilestone = useCallback(() => {
    if (typeof window === 'undefined') return
    const focusY = window.innerHeight * 0.45
    let closestIdx = 0
    let minDistance = Infinity

    itemRefs.current.forEach((el, index) => {
      if (!el) return
      const rect = el.getBoundingClientRect()
      const itemCenterY = rect.top + rect.height / 2
      const distance = Math.abs(itemCenterY - focusY)
      if (distance < minDistance) {
        minDistance = distance
        closestIdx = index
      }
    })

    setActiveIndex(closestIdx)
  }, [])

  useMotionValueEvent(scrollYProgress, 'change', () => {
    updateActiveMilestone()
  })

  useEffect(() => {
    updateActiveMilestone()
    window.addEventListener('scroll', updateActiveMilestone, { passive: true })
    window.addEventListener('resize', updateActiveMilestone, { passive: true })
    return () => {
      window.removeEventListener('scroll', updateActiveMilestone)
      window.removeEventListener('resize', updateActiveMilestone)
    }
  }, [updateActiveMilestone])

  return (
    <div ref={timelineRef} className="dark-timeline">
      <div className="dark-timeline-rail" aria-hidden="true" />
      <motion.div
        className="dark-timeline-progress"
        aria-hidden="true"
        style={{ height: railHeightPercent }}
      />
      {career.map((c, i) => {
        const isHovered = hoveredIndex === i
        const isSelected = selectedIndex === i
        const isCurrent = activeIndex === i && hoveredIndex === null && selectedIndex === null
        const isPast = i < activeIndex

        let itemState: 'past' | 'current' | 'future' | 'hovered' | 'selected' = 'future'
        if (isHovered) itemState = 'hovered'
        else if (isSelected) itemState = 'selected'
        else if (isCurrent) itemState = 'current'
        else if (isPast) itemState = 'past'

        let xShift = 0
        if (!prefersReducedMotion) {
          if (isHovered || isSelected) xShift = 6
          else if (isCurrent) xShift = 4
        }

        return (
          <motion.div
            key={`${c.year}-${c.title}`}
            ref={(el) => {
              itemRefs.current[i] = el
            }}
            tabIndex={0}
            role="button"
            aria-label={`${c.year} milestone: ${c.title}`}
            aria-current={isCurrent ? 'step' : undefined}
            className={`dark-timeline-item state-${itemState}`}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => setSelectedIndex(selectedIndex === i ? null : i)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                setSelectedIndex(selectedIndex === i ? null : i)
              }
            }}
            animate={{ x: xShift }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="dark-timeline-year">{c.year}</span>
            <motion.span
              className="dark-timeline-line"
              animate={{
                scale: !prefersReducedMotion && (isCurrent || isHovered || isSelected) ? 1.2 : 1,
              }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            />
            <div className="dark-timeline-body">
              <h3>{c.title}</h3>
              <p>{c.detail}</p>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
