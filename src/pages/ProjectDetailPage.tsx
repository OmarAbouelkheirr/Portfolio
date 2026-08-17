import { Link, useParams } from 'react-router-dom'
import { motion, MotionConfig } from 'framer-motion'
import {
  findProject,
  categoryTone,
  categoryMethod,
  profile,
} from '../data/portfolioData.ts'
import { useSpotlight } from '../hooks/useSpotlight.ts'
import { Reveal } from '../components/Reveal.tsx'
import { AppMock } from '../components/AppMock.tsx'
import { FlowDiagram } from '../components/FlowDiagram.tsx'

export function ProjectDetailPage() {
  const { projectId } = useParams()
  const project = findProject(projectId)
  const spotlight = useSpotlight()

  if (!project) {
    return (
      <MotionConfig reducedMotion="user">
        <div className="dark">
          <header className="dark-nav">
            <Link to="/" className="dark-brand">
              <span className="dark-brand-dot"></span>
              {profile.name}
            </Link>
          </header>
          <div className="dark-missing">
            <h1>Project not found</h1>
            <Link className="dark-btn" to="/">Back to projects</Link>
          </div>
        </div>
      </MotionConfig>
    )
  }

  const tone = categoryTone(project.category)
  const d = project.detail
  const hasLinks = Boolean(project.demoUrl || project.githubUrl)

  return (
    <MotionConfig reducedMotion="user">
      <div className="dark">
        <header className="dark-nav">
          <Link to="/" className="dark-brand">
            <span className="dark-brand-dot"></span>
            {profile.name}
          </Link>
          <nav className="dark-links" aria-label="Sections">
            <a href="#overview">Overview</a>
            <a href="#problem">Problem</a>
            <a href="#solution">Solution</a>
            <a href="#architecture">Architecture</a>
          </nav>
          <Link className="dark-resume" to="/">Projects</Link>
        </header>

        <main className="dark-detail">
          <section className="dark-detail-hero" ref={spotlight}>
            <div className="dark-hero-spot" aria-hidden="true"></div>
            <motion.div
              className="dark-detail-hero-inner"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="dark-hero-kicker">
                <span style={{ color: tone }}>{project.category}</span> · {project.year}
              </p>
              <h1>{project.title}</h1>
              <p className="dark-hero-deck">{project.summary}</p>
              {hasLinks && (
                <div className="dark-hero-cta">
                  {project.demoUrl && (
                    <a className="dark-btn dark-btn-primary" href={project.demoUrl} target="_blank" rel="noreferrer">
                      Live demo <span className="dark-arrow">→</span>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a className="dark-btn" href={project.githubUrl} target="_blank" rel="noreferrer">
                      GitHub repository
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          </section>

          <section className="dark-detail-media">
            <Reveal>
              <div className="dark-hero-frame">
                <AppMock tone={tone} seed={project.id} tall />
              </div>
            </Reveal>
          </section>

          <div className="dark-detail-body">
            <section className="dark-detail-section" id="overview">
              <Reveal>
                <p className="dark-kicker">01 · System Overview</p>
                <h2>System Overview</h2>
                <p className="dark-detail-text">{d.overview}</p>
              </Reveal>
            </section>

            <section className="dark-detail-section" id="problem">
              <Reveal>
                <p className="dark-kicker">02 · The Problem</p>
                <h2>The Problem</h2>
                <p className="dark-detail-text">{d.problem}</p>
              </Reveal>
            </section>

            <section className="dark-detail-section" id="solution">
              <Reveal>
                <p className="dark-kicker">03 · The Solution</p>
                <h2>The Solution &amp; Role</h2>
                <p className="dark-detail-text">{d.solution}</p>
                <p className="dark-detail-text" style={{ marginTop: '1.2rem', color: tone, fontWeight: 600 }}>
                  Role: {d.role}
                </p>
              </Reveal>
            </section>

            <section className="dark-detail-section" id="stack">
              <Reveal>
                <p className="dark-kicker">04 · Technology Stack</p>
                <h2>Stack &amp; Methods</h2>
                <ul className="dark-tags dark-tags-lg">
                  <li style={{ background: tone, color: '#0b0d10', fontWeight: 700 }}>
                    {categoryMethod(project.category)}
                  </li>
                  {d.stack.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </Reveal>
            </section>

            <section className="dark-detail-section" id="architecture">
              <Reveal>
                <p className="dark-kicker">05 · Architecture</p>
                <h2>Architecture &amp; Flow</h2>
                <FlowDiagram steps={d.architecture} tone={tone} />
              </Reveal>
            </section>

            {d.challenges.length > 0 && (
              <section className="dark-detail-section" id="challenges">
                <Reveal>
                  <p className="dark-kicker">06 · Key Challenges</p>
                  <h2>Engineering Challenges</h2>
                  <ul className="dark-detail-list">
                    {d.challenges.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </Reveal>
              </section>
            )}

            {d.screenshots.length > 0 && (
              <section className="dark-detail-section" id="screens">
                <Reveal>
                  <p className="dark-kicker">07 · Product Views</p>
                  <h2>System Surfaces</h2>
                  <div className="dark-shots">
                    {d.screenshots.map((s, i) => (
                      <div key={s.label} className="dark-shot">
                        <div className="dark-shot-frame">
                          <AppMock tone={tone} seed={`${project.id}-${i}`} />
                        </div>
                        <p className="dark-shot-caption">
                          <strong>{s.label}:</strong> {s.caption}
                        </p>
                      </div>
                    ))}
                  </div>
                </Reveal>
              </section>
            )}
          </div>
        </main>

        <footer className="dark-footer" id="contact">
          <div className="dark-footer-inner">
            <Reveal>
              <p className="dark-kicker">Next System</p>
              <h2>Have a project in mind?</h2>
              <p className="dark-footer-deck">
                Let's discuss backend architecture, SaaS development, or business system integration.
              </p>
              <div className="dark-hero-cta">
                <Link className="dark-btn dark-btn-primary" to="/">Back to all projects</Link>
                <a className="dark-btn" href={`mailto:${profile.email}`}>{profile.email}</a>
              </div>
            </Reveal>
          </div>
        </footer>
      </div>
    </MotionConfig>
  )
}
