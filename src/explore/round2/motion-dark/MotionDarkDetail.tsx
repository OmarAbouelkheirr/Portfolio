import { Link, useParams } from 'react-router-dom'
import { motion, MotionConfig } from 'framer-motion'
import {
    findRound2Project,
    categoryTone,
    categoryMethod,
    useSpotlight,
    Reveal,
    AppMock,
    FlowDiagram,
} from '../shared.tsx'
import { profile } from '../data.ts'
import '../round2.css'
import './motionDark.css'

function MotionDarkDetail() {
    const { projectId } = useParams()
    const project = findRound2Project(projectId)
    const spotlight = useSpotlight()

    if (!project) {
        return (
            <MotionConfig reducedMotion="user">
                <div className="dark">
                    <header className="dark-nav">
                        <Link to="/explore" className="dark-brand">
                            <span className="dark-brand-dot"></span>
                            {profile.name}
                        </Link>
                    </header>
                    <div className="dark-missing">
                        <h1>Project not found</h1>
                        <Link className="dark-btn" to="/explore/motion-dark">Back to projects</Link>
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
                    <Link to="/explore" className="dark-brand">
                        <span className="dark-brand-dot"></span>
                        {profile.name}
                    </Link>
                    <nav className="dark-links" aria-label="Sections">
                        <a href="#overview">Overview</a>
                        <a href="#problem">Problem</a>
                        <a href="#solution">Solution</a>
                        <a href="#architecture">Architecture</a>
                    </nav>
                    <Link className="dark-resume" to="/explore/motion-dark">Projects</Link>
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
                                {categoryMethod(project.category)} · {project.category} · {project.year} · Case study
                            </p>
                            <h1>{project.title}</h1>
                            <p className="dark-hero-deck">{project.summary}</p>
                            <ul className="dark-tags">
                                {project.tags.map((t) => (
                                    <li key={t}>{t}</li>
                                ))}
                            </ul>
                            <div className="dark-hero-cta">
                                {project.demoUrl ? (
                                    <a className="dark-btn dark-btn-primary" href={project.demoUrl} target="_blank" rel="noreferrer">
                                        Open live demo →
                                    </a>
                                ) : null}
                                {project.githubUrl ? (
                                    <a className="dark-btn" href={project.githubUrl} target="_blank" rel="noreferrer">
                                        View source →
                                    </a>
                                ) : null}
                                {!hasLinks ? <p className="dark-availability">No public demo or repository — screenshots only.</p> : null}
                            </div>
                        </motion.div>
                    </section>

                    <div className="dark-detail-media">
                        <div className="dark-hero-frame">
                            <AppMock tone={tone} seed={project.id} tall />
                        </div>
                    </div>

                    <div className="dark-detail-body">
                        <section id="overview" className="dark-detail-section">
                            <Reveal>
                                <p className="dark-kicker">01 · Overview</p>
                                <h2>Overview</h2>
                                <p className="dark-detail-text">{d.overview}</p>
                            </Reveal>
                        </section>

                        <section id="problem" className="dark-detail-section">
                            <Reveal>
                                <p className="dark-kicker">02 · Context</p>
                                <h2>Problem</h2>
                                <p className="dark-detail-text">{d.problem}</p>
                            </Reveal>
                        </section>

                        <section id="solution" className="dark-detail-section">
                            <Reveal>
                                <p className="dark-kicker">03 · Approach</p>
                                <h2>Solution</h2>
                                <p className="dark-detail-text">{d.solution}</p>
                            </Reveal>
                        </section>

                        <section id="role" className="dark-detail-section">
                            <Reveal>
                                <p className="dark-kicker">04 · Role</p>
                                <h2>Role</h2>
                                <p className="dark-detail-text">{d.role}</p>
                            </Reveal>
                        </section>

                        <section id="stack" className="dark-detail-section">
                            <Reveal>
                                <p className="dark-kicker">05 · Stack</p>
                                <h2>Technology</h2>
                                <ul className="dark-tags dark-tags-lg">
                                    {d.stack.map((s) => (
                                        <li key={s}>{s}</li>
                                    ))}
                                </ul>
                            </Reveal>
                        </section>

                        <section id="architecture" className="dark-detail-section">
                            <Reveal>
                                <p className="dark-kicker">06 · Architecture</p>
                                <h2>Architecture</h2>
                                <FlowDiagram steps={d.architecture} tone={tone} />
                            </Reveal>
                        </section>

                        <section id="challenges" className="dark-detail-section">
                            <Reveal>
                                <p className="dark-kicker">07 · Challenges</p>
                                <h2>Challenges</h2>
                                <ul className="dark-detail-list">
                                    {d.challenges.map((c) => (
                                        <li key={c}>{c}</li>
                                    ))}
                                </ul>
                            </Reveal>
                        </section>

                        <section id="screenshots" className="dark-detail-section">
                            <Reveal>
                                <p className="dark-kicker">08 · Artifacts</p>
                                <h2>Screenshots</h2>
                                <div className="dark-shots">
                                    {d.screenshots.map((s) => (
                                        <figure className="dark-shot" key={s.label}>
                                            <div className="dark-hero-frame dark-shot-frame">
                                                <AppMock tone={tone} seed={project.id + s.label} />
                                            </div>
                                            <figcaption>
                                                <strong>{s.label}</strong>
                                                <span>{s.caption}</span>
                                            </figcaption>
                                        </figure>
                                    ))}
                                </div>
                            </Reveal>
                        </section>

                        <div className="dark-detail-end">
                            <Link className="dark-btn" to="/explore/motion-dark">← Back to all projects</Link>
                        </div>
                    </div>
                </main>
            </div>
        </MotionConfig>
    )
}

export default MotionDarkDetail