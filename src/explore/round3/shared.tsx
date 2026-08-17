import { useMemo, useRef, useState, useEffect } from 'react'
import type { ReactNode, CSSProperties } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import type { MotionValue } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { round3Projects, CATEGORY_FILTERS } from './data.ts'
import type { Project, Category } from './data.ts'

export type Round3Filter = (typeof CATEGORY_FILTERS)[number]

export function useRound3Filter(all: Project[]) {
    const [filter, setFilter] = useState<Round3Filter>('All')
    const filtered = useMemo(
        () => (filter === 'All' ? all : all.filter((p) => p.category === filter)),
        [all, filter],
    )
    return { filter, setFilter, filtered }
}

export function findRound3Project(id: string | undefined): Project | undefined {
    if (!id) return undefined
    return round3Projects.find((p) => p.id === id)
}

export function categoryCode(category: Category): string {
    switch (category) {
        case 'Web Apps':
            return 'WEB'
        case 'Telegram Mini Apps':
            return 'MINI'
        case 'Telegram Bots':
            return 'BOT'
        case 'Unity Games':
            return 'GAME'
    }
}

export function categoryTone(category: Category): string {
    switch (category) {
        case 'Web Apps':
            return '#2b6cb0'
        case 'Telegram Mini Apps':
            return '#1f8f5b'
        case 'Telegram Bots':
            return '#b26a12'
        case 'Unity Games':
            return '#8f3f9e'
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
            el.style.setProperty('--r3-spot-x', `${e.clientX - rect.left}px`)
            el.style.setProperty('--r3-spot-y', `${e.clientY - rect.top}px`)
        }
        el.addEventListener('pointermove', onMove)
        return () => el.removeEventListener('pointermove', onMove)
    }, [])
    return ref
}

export function Reveal({
    children,
    delay = 0,
    y = 26,
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
    const y: MotionValue<number> = useTransform(scrollYProgress, [0, 1], [speed, -speed])
    return (
        <div ref={ref} className={`r3-pax ${className ?? ''}`}>
            <motion.div style={{ y }}>{children}</motion.div>
        </div>
    )
}

export function ProductMock({
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
        return [0, 1, 2, 3, 4, 5, 6].map((i) => 22 + ((hash >> (i * 2)) % 62))
    }, [seed])
    return (
        <div
            className={`r3mock${tall ? ' r3mock-tall' : ''}`}
            style={{ '--r3-tone': tone } as CSSProperties}
        >
            <div className="r3mock-bar">
                <span className="r3mock-brand"></span>
                <span className="r3mock-tabs">
                    <span className="r3mock-tab r3mock-tab-on"></span>
                    <span className="r3mock-tab"></span>
                    <span className="r3mock-tab"></span>
                </span>
                <span className="r3mock-user"></span>
            </div>
            <div className="r3mock-body">
                <div className="r3mock-side">
                    <span className="r3mock-nav r3mock-nav-on"></span>
                    <span className="r3mock-nav"></span>
                    <span className="r3mock-nav"></span>
                    <span className="r3mock-nav"></span>
                </div>
                <div className="r3mock-main">
                    <div className="r3mock-head">
                        <span className="r3mock-title"></span>
                        <span className="r3mock-title-short"></span>
                    </div>
                    <div className="r3mock-kpis">
                        <span className="r3mock-kpi"></span>
                        <span className="r3mock-kpi"></span>
                        <span className="r3mock-kpi"></span>
                    </div>
                    <div className="r3mock-chart" style={tall ? { height: 170 } : undefined}>
                        {bars.map((h, i) => (
                            <span className="r3mock-barfill" style={{ height: h }} key={i}></span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export function ArchDiagram({ steps, tone }: { steps: string[]; tone: string }) {
    return (
        <div className="r3arch" style={{ '--r3-tone': tone } as CSSProperties}>
            {steps.map((s, i) => (
                <div className="r3arch-row" key={s}>
                    <span className="r3arch-idx">{String(i + 1).padStart(2, '0')}</span>
                    <span className="r3arch-rail">
                        <span className="r3arch-dot"></span>
                        {i < steps.length - 1 && <span className="r3arch-line"></span>}
                    </span>
                    <span className="r3arch-node">{s}</span>
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