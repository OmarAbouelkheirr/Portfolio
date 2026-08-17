import { Link, useParams } from 'react-router-dom'
import { motion, MotionConfig } from 'framer-motion'
import {
  findRound3Project,
  categoryTone,
  Reveal,
  ProductMock,
  ArchDiagram,
} from '../shared.tsx'
import { profile } from '../data.ts'
import '../round3.css'
import './luminous.css'

function MaskedPlate({ tone, children }: { tone: string; children: React.ReactNode }) {
  return (
    <div className="lum-plate" style={{ '--plate-tone': tone } as React.CSSProperties}>
      <div className="lum-plate-mask">
        <motion.div
          className="lum-plate-inner"
          initial={{ scale: 1.12 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, margin: '0px 0px -80px 0px' }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  )
}

function LuminousEditorialDetail() {
  const { projectId } = useParams()
  const project = findRound3Project(projectId)

  if (!project) {
    return (
      <MotionConfig reducedMotion="user">
        <div className="lum">
          <header className="lum-mast">
            <Link to="/explore" className="lum-brand">{profile.name}</Link>
          </header>
          <div className="lum-missing">
            <h1>Project not found</h1>
            <Link className="lum-link" to="/explore/luminous-editorial">← Back to the issue</Link>
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
      <div className="lum">
        <header className="lum-mast">
          <Link to="/explore" className="lum-brand">{profile.name}</Link>
          <nav className="lum-nav" aria-label="Sections">
            <a href="#overview">Overview</a>
            <a href="#problem">Problem</a>
            <a href="#solution">Solution</a>
            <a href="#architecture">Architecture</a>
          </nav>
          <Link className="lum-resume" to="/explore/luminous-editorial">Issue</Link>
        </header>

        <section className="lum-detail-hero">
          <div className="lum-folio" aria-hidden="true">
            <span>Case study — {project.category}</span>
            <span>{project.year}</span>
            <span>{String(round3Index(project.id)).padStart(2, '0')} / 20</span>
          </div>
          <motion.div
            className="lum-detail-hero-inner"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1>{project.title}</h1>
            <p className="lum-detail-deck">{project.summary}</p>
            <ul className="lum-tags lum-tags-lg">
              {project.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <div className="lum-hero-cta" style={{ justifyContent: 'flex-start' }}>
              {project.demoUrl ? (
                <a className="lum-link" href={project.demoUrl} target="_blank" rel="noreferrer">
                  Open live demo <span className="lum-arrow">→</span>
                </a>
              ) : null}
              {project.githubUrl ? (
                <a className="lum-link" href={project.githubUrl} target="_blank" rel="noreferrer">
                  View source <span className="lum-arrow">→</span>
                </a>
              ) : null}
              {!hasLinks ? <p className="lum-availability">Private production project — screenshots only.</p> : null}
            </div>
          </motion.div>
        </section>

        <div className="lum-detail-media">
          <MaskedPlate tone={tone}>
            <ProductMock tone={tone} seed={project.id} tall />
          </MaskedPlate>
          <span className="lum-hero-caption">Fig. 01 — {project.title}, product surface.</span>
        </div>

        <div className="lum-detail-body">
          <section id="overview" className="lum-detail-section">
            <Reveal>
              <p className="lum-kicker">01 · Overview</p>
              <h2>Overview</h2>
              <p className="lum-detail-text">{d.overview}</p>
            </Reveal>
          </section>

          <section id="problem" className="lum-detail-section">
            <Reveal>
              <p className="lum-kicker">02 · Context</p>
              <h2>Problem</h2>
              <p className="lum-detail-text">{d.problem}</p>
            </Reveal>
          </section>

          <section id="solution" className="lum-detail-section">
            <Reveal>
              <p className="lum-kicker">03 · Approach</p>
              <h2>Solution</h2>
              <p className="lum-detail-text">{d.solution}</p>
            </Reveal>
          </section>

          <section id="role" className="lum-detail-section">
            <Reveal>
              <p className="lum-kicker">04 · Role</p>
              <h2>Role</h2>
              <p className="lum-detail-text">{d.role}</p>
            </Reveal>
          </section>

          <section id="stack" className="lum-detail-section">
            <Reveal>
              <p className="lum-kicker">05 · Stack</p>
              <h2>Technology</h2>
              <ul className="lum-tags lum-tags-lg">
                {d.stack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </Reveal>
          </section>

          <section id="architecture" className="lum-detail-section">
            <Reveal>
              <p className="lum-kicker">06 · Architecture</p>
              <h2>Architecture</h2>
              <ArchDiagram steps={d.architecture} tone={tone} />
            </Reveal>
          </section>

          <section id="challenges" className="lum-detail-section">
            <Reveal>
              <p className="lum-kicker">07 · Challenges</p>
              <h2>Challenges</h2>
              <ul className="lum-detail-list">
                {d.challenges.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </Reveal>
          </section>

          <section id="screenshots" className="lum-detail-section">
            <Reveal>
              <p className="lum-kicker">08 · Artifacts</p>
              <h2>Screenshots</h2>
              <div className="lum-shots">
                {d.screenshots.map((s) => (
                  <figure className="lum-shot" key={s.label}>
                    <MaskedPlate tone={tone}>
                      <ProductMock tone={tone} seed={project.id + s.label} />
                    </MaskedPlate>
                    <figcaption>
                      <strong>{s.label}</strong>
                      <span>{s.caption}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </Reveal>
          </section>

          <div className="lum-detail-end">
            <Link className="lum-link" to="/explore/luminous-editorial">← Back to the issue</Link>
          </div>
        </div>
      </div>
    </MotionConfig>
  )
}

function round3Index(id: string): number {
  const idx = ['inventory-intelligence', 'timebox', 'billing-desk', 'card-mate', 'bookings-mini', 'order-tracker-bot', 'notify-bot', 'scheduler-bot', 'neon-drift', 'puzzle-blocks', 'nexus-crm', 'doc-vault', 'kanban-flow', 'payroll-core', 'quiz-arena-mini', 'moderator-bot', 'payout-bot', 'inventory-sync-bot', 'hex-rover', 'glider-soar']
  return idx.indexOf(id) + 1
}

export default LuminousEditorialDetail