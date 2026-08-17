import { Link, useParams } from 'react-router-dom'
import { findProject, Icon } from '../shared.tsx'
import { profile } from '../mockData.ts'
import '../shared.css'
import './categoryStandard.css'

function CategoryStandardDetail() {
    const { projectId } = useParams()
    const project = findProject(projectId)

    if (!project) {
        return (
            <div className="cs">
                <header className="cs-nav">
                    <Link to="/explore" className="cs-logo">{profile.name}</Link>
                </header>
                <div className="cs-missing">
                    <h1>Project not found</h1>
                    <Link className="cs-btn" to="/explore/category-standard">
                        <Icon name="back" size={14} /> Back to projects
                    </Link>
                </div>
            </div>
        )
    }

    const d = project.detail
    const hasLinks = Boolean(project.demoUrl || project.githubUrl)

    return (
        <div className="cs">
            <header className="cs-nav">
                <Link to="/explore" className="cs-logo">{profile.name}</Link>
                <nav className="cs-links" aria-label="Sections">
                    <a href="#overview">Overview</a>
                    <a href="#problem">Problem</a>
                    <a href="#solution">Solution</a>
                    <a href="#role">Role</a>
                    <a href="#architecture">Architecture</a>
                </nav>
                <Link className="cs-resume" to="/explore/category-standard">
                    <Icon name="back" size={14} /> Projects
                </Link>
            </header>

            <main className="cs-main">
                <article className="cs-detail">
                    <header className="cs-detail-head">
                        <p className="cs-kicker">
                            {project.category} · {project.year} · Case study
                        </p>
                        <h1>{project.title}</h1>
                        <p className="cs-deck">{project.summary}</p>
                        <ul className="cs-tech cs-tech-center">
                            {project.tags.map((t) => (
                                <li key={t}>{t}</li>
                            ))}
                        </ul>
                        {hasLinks ? (
                            <div className="cs-cta">
                                {project.demoUrl ? (
                                    <a className="cs-btn cs-btn-primary" href={project.demoUrl} target="_blank" rel="noreferrer">
                                        <Icon name="external" size={14} /> Open live demo
                                    </a>
                                ) : null}
                                {project.githubUrl ? (
                                    <a className="cs-btn" href={project.githubUrl} target="_blank" rel="noreferrer">
                                        <Icon name="github" size={14} /> View source
                                    </a>
                                ) : null}
                            </div>
                        ) : (
                            <p className="cs-availability">No public demo or repository — screenshots only.</p>
                        )}
                    </header>

                    <section className="cs-detail-section" id="overview">
                        <h2>Overview</h2>
                        <p>{d.overview}</p>
                    </section>

                    <section className="cs-detail-section" id="problem">
                        <h2>Problem</h2>
                        <p>{d.problem}</p>
                    </section>

                    <section className="cs-detail-section" id="solution">
                        <h2>Solution</h2>
                        <p>{d.solution}</p>
                    </section>

                    <section className="cs-detail-section" id="role">
                        <h2>Role</h2>
                        <p>{d.role}</p>
                    </section>

                    <section className="cs-detail-section" id="stack">
                        <h2>Stack</h2>
                        <ul className="cs-tech">
                            {d.stack.map((s) => (
                                <li key={s}>{s}</li>
                            ))}
                        </ul>
                    </section>

                    <section className="cs-detail-section" id="architecture">
                        <h2>Architecture</h2>
                        <ul className="cs-detail-list">
                            {d.architecture.map((a) => (
                                <li key={a}>{a}</li>
                            ))}
                        </ul>
                    </section>

                    <section className="cs-detail-section" id="challenges">
                        <h2>Challenges</h2>
                        <ul className="cs-detail-list">
                            {d.challenges.map((c) => (
                                <li key={c}>{c}</li>
                            ))}
                        </ul>
                    </section>

                    <section className="cs-detail-section" id="screenshots">
                        <h2>Screenshots</h2>
                        <div className="cs-shots">
                            {d.screenshots.map((s) => (
                                <figure className="cs-shot" key={s.label}>
                                    <div className="cs-shot-frame">
                                        <span className="cs-shot-label">{s.label}</span>
                                    </div>
                                    <figcaption>{s.caption}</figcaption>
                                </figure>
                            ))}
                        </div>
                    </section>

                    <div className="cs-detail-end">
                        <Link to="/explore/category-standard" className="cs-card-link">
                            <Icon name="back" size={14} /> Back to all projects
                        </Link>
                    </div>
                </article>
            </main>
        </div>
    )
}

export default CategoryStandardDetail