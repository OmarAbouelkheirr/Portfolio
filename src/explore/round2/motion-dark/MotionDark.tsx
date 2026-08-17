import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence, MotionConfig, useInView } from 'framer-motion'
import { round2Projects, profile, expertise, career, about, CATEGORY_FILTERS } from '../data.ts'
import type { Project } from '../data.ts'
import {
  useRound2Filter,
  FEATURED_ID,
  categoryTone,
  categoryMethod,
  useSpotlight,
  Reveal,
  Parallax,
  AppMock,
} from '../shared.tsx'
import '../round2.css'
import './motionDark.css'

const accent = '#c9a86a'

function DarkCard({
  project,
  tone,
  featured = false,
}: {
  project: Project
  tone: string
  featured?: boolean
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={featured ? 'dark-col-featured' : ''}
    >
      <Link
        to={`/explore/motion-dark/projects/${project.id}`}
        className={`dark-card${featured ? ' dark-card-featured' : ''}`}
        style={{ '--card-tone': tone } as React.CSSProperties}
      >
        <div className="dark-card-media">
          <div className="dark-card-media-inner">
            <AppMock tone={tone} seed={project.id} tall={featured} />
          </div>
          <span className="dark-card-method">{categoryMethod(project.category)}</span>
          {featured && <span className="dark-card-feat">Featured</span>}
        </div>
        <div className="dark-card-body">
          <div className="dark-card-meta">
            <span className="dark-card-cat" style={{ color: tone }}>{project.category}</span>
            <span className="dark-card-year">{project.year}</span>
          </div>
          <h3>{project.title}</h3>
          <p>{project.summary}</p>
          <ul className="dark-tags">
            {project.tags.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <span className="dark-card-go">
            Open case study <span className="dark-arrow">→</span>
          </span>
        </div>
      </Link>
    </motion.div>
  )
}

function MotionDark() {
  const { filter, setFilter, filtered } = useRound2Filter(round2Projects)
  const featured = round2Projects.find((p) => p.id === FEATURED_ID)
  const spotlight = useSpotlight()
  const timelineRef = useRef<HTMLDivElement | null>(null)
  const timelineInView = useInView(timelineRef, { once: true, amount: 0.25 })

  return (
    <MotionConfig reducedMotion="user">
      <div className="dark">
        <header className="dark-nav">
          <Link to="/explore" className="dark-brand">
            <span className="dark-brand-dot"></span>
            {profile.name}
          </Link>
          <nav className="dark-links" aria-label="Sections">
            <a href="#projects">Projects</a>
            <a href="#expertise">Expertise</a>
            <a href="#journey">Journey</a>
            <a href="#about">About</a>
          </nav>
          <a className="dark-resume" href="#contact">Resume</a>
        </header>

        <section className="dark-hero" ref={spotlight}>
          <div className="dark-hero-spot" aria-hidden="true"></div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="dark-hero-inner"
          >
            <p className="dark-hero-kicker">{profile.location} · {profile.role}</p>
            <h1>
              Backend engineering for
              <em> SaaS &amp; business systems.</em>
            </h1>
            <p className="dark-hero-deck">{about.body}</p>
            <div className="dark-hero-cta">
              <a className="dark-btn dark-btn-primary" href="#projects">View projects</a>
              <a className="dark-btn" href="#contact">Download resume</a>
              <a className="dark-btn dark-btn-ghost" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </motion.div>

          <motion.div
            className="dark-hero-media"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <Parallax speed={12}>
              <div className="dark-hero-frame">
                <AppMock tone={accent} seed="featured" tall />
              </div>
            </Parallax>
            <span className="dark-hero-caption">A live product surface — the work is shipping.</span>
          </motion.div>
        </section>

        <section className="dark-section" id="projects">
          <div className="dark-section-head">
            <Reveal>
              <p className="dark-kicker">The work</p>
              <h2>Projects</h2>
              <p className="dark-section-deck">One featured system, then the collection, filterable by category.</p>
            </Reveal>
          </div>

          <div className="dark-filters">
            {CATEGORY_FILTERS.map((f) => (
              <button
                key={f}
                className={`dark-filter${filter === f ? ' is-active' : ''}`}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="dark-grid">
            {featured && (filter === 'All' || filter === featured.category) && (
              <DarkCard project={featured} tone={categoryTone(featured.category)} featured />
            )}

            <AnimatePresence mode="popLayout">
              {filtered
                .filter((p) => p.id !== FEATURED_ID)
                .map((p) => (
                  <DarkCard key={p.id} project={p} tone={categoryTone(p.category)} />
                ))}
            </AnimatePresence>
          </div>
        </section>

        <section className="dark-section dark-section-raise" id="expertise">
          <div className="dark-section-head">
            <Reveal>
              <p className="dark-kicker">Capabilities</p>
              <h2>Engineering expertise</h2>
            </Reveal>
          </div>
          <div className="dark-expertise">
            {expertise.map((e, i) => (
              <Reveal key={e.title} delay={Math.min(i * 0.05, 0.35)}>
                <div className="dark-expertise-item">
                  <span className="dark-expertise-num">{String(i + 1).padStart(2, '0')}</span>
                  <h3>{e.title}</h3>
                  <p>{e.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="dark-section" id="journey">
          <div className="dark-section-head">
            <Reveal>
              <p className="dark-kicker">The record</p>
              <h2>Career journey</h2>
            </Reveal>
          </div>
          <div
            ref={timelineRef}
            className={`dark-timeline${timelineInView ? ' is-in-view' : ''}`}
          >
            {career.map((c, i) => (
              <div
                key={`${c.year}-${c.title}`}
                className={`dark-timeline-item${i === career.length - 1 ? ' is-now' : ''}`}
              >
                <span className="dark-timeline-year">{c.year}</span>
                <span className="dark-timeline-line"></span>
                <div className="dark-timeline-body">
                  <h3>{c.title}</h3>
                  <p>{c.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="dark-section" id="about">
          <Reveal>
            <div className="dark-about">
              <p className="dark-kicker">{about.heading}</p>
              <p className="dark-about-text">{about.body}</p>
            </div>
          </Reveal>
        </section>

        <footer className="dark-footer" id="contact">
          <div className="dark-footer-inner">
            <Reveal>
              <p className="dark-kicker">Contact</p>
              <h2>Build dependable systems.</h2>
              <p className="dark-footer-deck">
                Open to software engineering roles and SaaS / business-system engagements.
              </p>
              <div className="dark-hero-cta">
                <a className="dark-btn dark-btn-primary" href={`mailto:${profile.email}`}>{profile.email}</a>
                <a className="dark-btn" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                <a className="dark-btn" href={profile.youtube} target="_blank" rel="noreferrer">YouTube</a>
              </div>
              <p className="dark-footer-meta">{profile.location} · {profile.phone}</p>
            </Reveal>
          </div>
        </footer>
      </div>
    </MotionConfig>
  )
}

export default MotionDark