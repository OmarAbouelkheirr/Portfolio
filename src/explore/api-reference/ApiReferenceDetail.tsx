import { Link, useParams } from 'react-router-dom'
import { findProject, categoryMethod, methodColor, Icon } from '../shared.tsx'
import { profile } from '../mockData.ts'
import '../shared.css'
import './apiReference.css'

function ApiReferenceDetail() {
    const { projectId } = useParams()
    const project = findProject(projectId)

    if (!project) {
        return (
            <div className="api">
                <div className="api-topbar">
                    <Link to="/explore" className="api-brand">
                        <span className="api-brand-dot" aria-hidden="true"></span>
                        <span>{profile.name} · API</span>
                    </Link>
                </div>
                <div className="api-detail-missing">
                    <p className="api-status">404 · NOT FOUND</p>
                    <h1>Unknown project</h1>
                    <Link className="api-btn" to="/explore/api-reference">
                        <Icon name="back" size={14} /> Back to the reference
                    </Link>
                </div>
            </div>
        )
    }

    const method = categoryMethod(project.category)
    const color = methodColor(method)
    const d = project.detail

    return (
        <div className="api">
            <div className="api-topbar">
                <Link to="/explore" className="api-brand">
                    <span className="api-brand-dot" aria-hidden="true"></span>
                    <span>{profile.name} · API</span>
                </Link>
                <Link className="api-resume" to="/explore/api-reference">
                    <Icon name="back" size={14} /> Reference
                </Link>
            </div>

            <div className="api-layout">
                <aside className="api-side">
                    <p className="api-side-label">Project</p>
                    <ul>
                        <li><a href="#overview">Overview</a></li>
                        <li><a href="#problem">Problem</a></li>
                        <li><a href="#solution">Solution</a></li>
                        <li><a href="#role">Role</a></li>
                        <li><a href="#stack">Stack</a></li>
                        <li><a href="#architecture">Architecture</a></li>
                        <li><a href="#challenges">Challenges</a></li>
                        <li><a href="#screenshots">Screenshots</a></li>
                    </ul>
                    <p className="api-side-label">Actions</p>
                    <ul>
                        {project.demoUrl ? (
                            <li>
                                <a className="api-method-link" href={project.demoUrl} target="_blank" rel="noreferrer">
                                    <span className="api-method" style={{ color }}>POST</span>
                                    /live-demo
                                </a>
                            </li>
                        ) : null}
                        {project.githubUrl ? (
                            <li>
                                <a className="api-method-link" href={project.githubUrl} target="_blank" rel="noreferrer">
                                    <span className="api-method" style={{ color: methodColor('GET') }}>GET</span>
                                    /source
                                </a>
                            </li>
                        ) : null}
                    </ul>
                </aside>

                <main className="api-main">
                    <Link to="/explore/api-reference" className="api-back">
                        <Icon name="back" size={14} /> All projects
                    </Link>

                    <header className="api-detail-head">
                        <div className="api-method-row">
                            <span className="api-method" style={{ color }}>{method}</span>
                            <code>/projects/{project.id}</code>
                            <span className="api-status api-status-year">{project.year}</span>
                        </div>
                        <h1>{project.title}</h1>
                        <p className="api-detail-summary">{project.summary}</p>
                        <ul className="api-tags">
                            {project.tags.map((t) => (
                                <li key={t}>{t}</li>
                            ))}
                        </ul>
                        <div className="api-cta">
                            {project.demoUrl ? (
                                <a className="api-btn api-btn-primary" href={project.demoUrl} target="_blank" rel="noreferrer">
                                    <Icon name="external" size={14} /> Live demo
                                </a>
                            ) : null}
                            {project.githubUrl ? (
                                <a className="api-btn" href={project.githubUrl} target="_blank" rel="noreferrer">
                                    <Icon name="github" size={14} /> Source code
                                </a>
                            ) : null}
                            {!project.demoUrl && !project.githubUrl ? (
                                <p className="api-availability">No public demo or repository — screenshots only.</p>
                            ) : null}
                        </div>
                    </header>

                    <section className="api-section" id="overview">
                        <div className="api-section-head"><h2>Overview</h2></div>
                        <p className="api-body">{d.overview}</p>
                    </section>

                    <section className="api-section" id="problem">
                        <div className="api-section-head"><h2>Problem</h2></div>
                        <p className="api-body">{d.problem}</p>
                    </section>

                    <section className="api-section" id="solution">
                        <div className="api-section-head"><h2>Solution</h2></div>
                        <p className="api-body">{d.solution}</p>
                    </section>

                    <section className="api-section" id="role">
                        <div className="api-section-head"><h2>Role</h2></div>
                        <p className="api-body">{d.role}</p>
                    </section>

                    <section className="api-section" id="stack">
                        <div className="api-section-head"><h2>Stack</h2></div>
                        <ul className="api-tags api-tags-lg">
                            {d.stack.map((s) => (
                                <li key={s}>{s}</li>
                            ))}
                        </ul>
                    </section>

                    <section className="api-section" id="architecture">
                        <div className="api-section-head"><h2>Architecture</h2></div>
                        <ul className="api-list">
                            {d.architecture.map((a) => (
                                <li key={a}><span className="api-list-dot" style={{ color }}>●</span>{a}</li>
                            ))}
                        </ul>
                    </section>

                    <section className="api-section" id="challenges">
                        <div className="api-section-head"><h2>Challenges</h2></div>
                        <ul className="api-list">
                            {d.challenges.map((c) => (
                                <li key={c}><span className="api-list-dot" style={{ color: methodColor('POST') }}>●</span>{c}</li>
                            ))}
                        </ul>
                    </section>

                    <section className="api-section" id="screenshots">
                        <div className="api-section-head"><h2>Screenshots</h2></div>
                        <div className="api-shots">
                            {d.screenshots.map((s) => (
                                <figure className="api-shot" key={s.label}>
                                    <div className="api-shot-frame" style={{ '--shot-color': color } as React.CSSProperties}>
                                        <span className="api-shot-label">{s.label}</span>
                                    </div>
                                    <figcaption>{s.caption}</figcaption>
                                </figure>
                            ))}
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}

export default ApiReferenceDetail
