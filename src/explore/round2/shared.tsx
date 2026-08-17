import { useMemo, useRef, useState, useEffect } from 'react'
import type { ReactNode, CSSProperties } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import type { MotionValue } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { round2Projects, CATEGORY_FILTERS } from './data.ts'
import type { Project, Category } from './data.ts'

export type Round2Filter = (typeof CATEGORY_FILTERS)[number]

export function useRound2Filter(all: Project[]) {
    const [filter, setFilter] = useState<Round2Filter>('All')
    const filtered = useMemo(
        () => (filter === 'All' ? all : all.filter((p) => p.category === filter)),
        [all, filter],
    )
    return { filter, setFilter, filtered }
}

export function findRound2Project(id: string | undefined): Project | undefined {
    if (!id) return undefined
    return round2Projects.find((p) => p.id === id)
}

export function categoryMethod(category: Category): string {
    switch (category) {
        case 'Web Apps':
            return 'GET'
        case 'Telegram Mini Apps':
            return 'POST'
        case 'Telegram Bots':
            return 'PUT'
        case 'Unity Games':
            return 'PLAY'
    }
}

export function categoryTone(category: Category): string {
    switch (category) {
        case 'Web Apps':
            return '#3a6ea5'
        case 'Telegram Mini Apps':
            return '#1f9d61'
        case 'Telegram Bots':
            return '#b8791a'
        case 'Unity Games':
            return '#a23c8f'
    }
}

export function useSpotlight() {
    const ref = useRef<HTMLDivElement | null>(null)
    useEffect(() => {
        const el = ref.current
        if (!el) return
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
        const onMove = (e: PointerEvent) => {
            const rect = el.getBoundingClientRect()
            el.style.setProperty('--spot-x', `${e.clientX - rect.left}px`)
            el.style.setProperty('--spot-y', `${e.clientY - rect.top}px`)
        }
        el.addEventListener('pointermove', onMove)
        return () => el.removeEventListener('pointermove', onMove)
    }, [])
    return ref
}

export function Reveal({
    children,
    delay = 0,
    y = 28,
    className,
    once = true,
}: {
    children: ReactNode
    delay?: number
    y?: number
    className?: string
    once?: boolean
}) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once, margin: '0px 0px -60px 0px' }}
            transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
        >
            {children}
        </motion.div>
    )
}

export function Parallax({
    children,
    speed = 10,
    className,
}: {
    children: ReactNode
    speed?: number
    className?: string
}) {
    const ref = useRef<HTMLDivElement | null>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    })
    const y: MotionValue<number> = useTransform(
        scrollYProgress,
        [0, 1],
        [speed, -speed],
    )
    return (
        <div ref={ref} className={`pax ${className ?? ''}`}>
            <motion.div style={{ y }}>{children}</motion.div>
        </div>
    )
}

export function AppMock({
    tone,
    tall = false,
    seed = 'proj',
}: {
    tone: string
    tall?: boolean
    seed?: string
}) {
    const bars = useMemo(() => {
        const hash = Array.from(seed).reduce((a, c) => a + c.charCodeAt(0), 0)
        return [0, 1, 2, 3, 4, 5].map((i) => 24 + ((hash >> (i * 2)) % 64))
    }, [seed])
    return (
        <div className="appmock" style={{ '--mock-tone': tone } as CSSProperties}>
            <div className="appmock-chrome">
                <span className="appmock-dot"></span>
                <span className="appmock-dot"></span>
                <span className="appmock-dot"></span>
            </div>
            <div className="appmock-body">
                <div className="appmock-side"></div>
                <div className="appmock-main">
                    <div className="appmock-head">
                        <span className="appmock-headline"></span>
                        <span className="appmock-headline appmock-headline-short"></span>
                    </div>
                    <div className="appmock-kpis">
                        <span className="appmock-kpi"></span>
                        <span className="appmock-kpi"></span>
                        <span className="appmock-kpi"></span>
                    </div>
                    <div className="appmock-chart" style={tall ? { height: 150 } : undefined}>
                        {bars.map((h, i) => (
                            <span className="appmock-bar" style={{ height: h }} key={i}></span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export function FlowDiagram({
    steps,
    tone,
}: {
    steps: string[]
    tone: string
}) {
    return (
        <div className="flow" style={{ '--flow-tone': tone } as CSSProperties}>
            {steps.map((s, i) => (
                <div className="flow-step" key={s}>
                    <span className="flow-node">{s}</span>
                    {i < steps.length - 1 && <span className="flow-arrow">→</span>}
                </div>
            ))}
        </div>
    )
}

export function ScrollToTop() {
    const { pathname } = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])
    return null
}

export const FEATURED_ID = 'inventory-intelligence'