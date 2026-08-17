import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence, MotionConfig } from 'framer-motion'
import {
  projects,
  profile,
  expertise,
  about,
  CATEGORY_FILTERS,
  FEATURED_ID,
  categoryTone,
  categoryMethod,
} from '../data/portfolioData.ts'
import type { Project, Category } from '../data/portfolioData.ts'
import { useSpotlight } from '../hooks/useSpotlight.ts'
import { Reveal } from '../components/Reveal.tsx'
import { Parallax } from '../components/Parallax.tsx'
import { AppMock } from '../components/AppMock.tsx'
import { CareerTimeline } from '../components/CareerTimeline.tsx'

const accent = '#c9a86a'

function ProjectCard({
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
        to={`/projects/${project.id}`}
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

export function HomePage() {
  const [filter, setFilter] = useState<'All' | Category>('All')
  const spotlight = useSpotlight()

  const featured = projects.find((p) => p.id === FEATURED_ID)
  const filtered = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  )

  return (
    <MotionConfig reducedMotion="user">
      <div className="dark">
        <header className="dark-nav">
          <Link to="/" className="dark-brand">
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
              <ProjectCard project={featured} tone={categoryTone(featured.category)} featured />
            )}

            <AnimatePresence mode="popLayout">
              {filtered
                .filter((p) => p.id !== FEATURED_ID)
                .map((p) => (
                  <ProjectCard key={p.id} project={p} tone={categoryTone(p.category)} />
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
          <CareerTimeline />
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
