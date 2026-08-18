import { useRef, useState, useLayoutEffect, useCallback } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from 'framer-motion'
import { career } from '../data/portfolioData.ts'

const NODE_CENTER = 16
const clamp01 = (n: number) => Math.min(1, Math.max(0, n))

const INK = { r: 11, g: 13, b: 16 }
const RING = { r: 65, g: 67, b: 69 }
const BRASS = { r: 201, g: 168, b: 106 }

function mix(a: { r: number; g: number; b: number }, b: { r: number; g: number; b: number }, k: number) {
  const t = clamp01(k)
  const c = (x: number, y: number) => Math.round(x + (y - x) * t)
  return `rgb(${c(a.r, b.r)}, ${c(a.g, b.g)}, ${c(a.b, b.b)})`
}

interface MilestoneProps {
  index: number
  year: string
  title: string
  detail: string
  ratio: number
  scrollYProgress: MotionValue<number>
  isHovered: boolean
  reducedMotion: boolean
  registerRef: (index: number, el: HTMLDivElement | null) => void
  onHoverStart: () => void
  onHoverEnd: () => void
}

function Milestone({
  index,
  year,
  title,
  detail,
  ratio,
  scrollYProgress,
  isHovered,
  reducedMotion,
  registerRef,
  onHoverStart,
  onHoverEnd,
}: MilestoneProps) {
  const ratioRef = useRef(ratio)
  ratioRef.current = ratio

  const progress = useTransform(scrollYProgress, (v) => {
    const r = ratioRef.current
    return clamp01((v - (r - 0.12)) / 0.14)
  })

  const opacity = useTransform(progress, (k) => 0.65 + 0.35 * k)
  const x = useTransform(progress, (k) => 5 * (1 - k))
  const fill = useTransform(progress, (k) => mix(INK, BRASS, k))
  const ring = useTransform(progress, (k) => mix(RING, BRASS, k))
  const glow = useTransform(scrollYProgress, (v) => {
    const r = ratioRef.current
    const up = clamp01((v - (r - 0.09)) / 0.09)
    const rest = 1 - 0.75 * clamp01((v - r) / 0.09)
    const level = up * rest
    return `0 0 ${6 + level * 12}px rgba(201, 168, 106, ${0.15 + level * 0.42})`
  })

  const setRefs = useCallback(
    (el: HTMLDivElement | null) => {
      registerRef(index, el)
    },
    [index, registerRef],
  )

  return (
    <div
      ref={setRefs}
      className={`dark-timeline-item${isHovered ? ' is-hovered' : ''}`}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
    >
      <motion.div
        className="dark-timeline-settle"
        style={reducedMotion ? { opacity } : { opacity, x }}
      >
        <span className="dark-timeline-year">{year}</span>
        <div className="dark-timeline-body">
          <h3>{title}</h3>
          <p>{detail}</p>
        </div>
      </motion.div>
      <motion.span
        className="dark-timeline-line"
        aria-hidden="true"
        style={{ backgroundColor: fill, borderColor: ring, boxShadow: glow }}
      />
    </div>
  )
}

export function CareerTimeline() {
  const timelineRef = useRef<HTMLDivElement | null>(null)
  const itemEls = useRef<(HTMLDivElement | null)[]>([])
  const [ratios, setRatios] = useState<number[]>(career.map(() => 0))
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const prefersReducedMotion = useReducedMotion() ?? false

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 75%', 'end 25%'],
  })

  const railScaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

  const measure = useCallback(() => {
    const container = timelineRef.current
    if (!container) return
    const total = container.offsetHeight
    if (!total) return
    const next = itemEls.current.map((el) => (el ? (el.offsetTop + NODE_CENTER) / total : 0))
    setRatios((prev) => {
      if (prev.length === next.length && prev.every((r, i) => Math.abs(r - next[i]) < 0.0001)) {
        return prev
      }
      return next
    })
  }, [])

  useLayoutEffect(() => {
    measure()
    const container = timelineRef.current
    if (!container || typeof ResizeObserver === 'undefined') return
    const observer = new ResizeObserver(measure)
    observer.observe(container)
    return () => observer.disconnect()
  }, [measure])

  const registerRef = useCallback((index: number, el: HTMLDivElement | null) => {
    itemEls.current[index] = el
  }, [])

  return (
    <div ref={timelineRef} className="dark-timeline">
      <div className="dark-timeline-rail" aria-hidden="true" />
      <motion.div
        className="dark-timeline-progress"
        aria-hidden="true"
        style={{ scaleY: railScaleY }}
      />
      {career.map((c, i) => (
        <Milestone
          key={`${c.year}-${c.title}`}
          index={i}
          year={c.year}
          title={c.title}
          detail={c.detail}
          ratio={ratios[i]}
          scrollYProgress={scrollYProgress}
          isHovered={hoveredIndex === i}
          reducedMotion={prefersReducedMotion}
          registerRef={registerRef}
          onHoverStart={() => setHoveredIndex(i)}
          onHoverEnd={() => setHoveredIndex(null)}
        />
      ))}
    </div>
  )
}