import { Link, useParams } from 'react-router-dom'
import { findProject, Icon } from '../shared.tsx'
import { profile } from '../mockData.ts'
import '../shared.css'
import './technicalSpec.css'

function TechnicalSpecDetail() {
    const { projectId } = useParams()
    const project = findProject(projectId)

    if (!project) {
        return (
            <div className="ts">
                <header className="ts-topbar">
                    <Link to="/explore" className="ts-wordmark">
                        <span className="ts-wordmark-name">{profile.name}</span>
                        <span className="ts-wordmark-doc">SPEC·001 · v1.0</span>
                    </Link>
                </header>
                <div className="ts-missing">
                    <h1>Item not found</h1>
                    <Link className="ts-btn" to="/explore/technical-spec">
                        <Icon name="back" size={14} /> Back to catalog
                    </Link>
                </div>
            </div>
        )
    }

    const d = project.detail

    return (
        <div className="ts">
            <header className="ts-topbar">
                <Link to="/explore" className="ts-wordmark">
                    <span className="ts-wordmark-name">{profile.name}</span>
                    <span className="ts-wordmark-doc">SPEC·001 · v1.0</span>
                </Link>
                <nav className="ts-nav" aria-label="Sections">
                    <a href="#overview">Overview</a>
                    <a href="#problem">Problem</a>
                    <a href="#solution">Solution</a>
                    <a href="#role">Role</a>
                    <a href="#architecture">Architecture</a>
                </nav>
                <Link className="ts-resume" to="/explore/technical-spec">
                    <Icon name="back" size={14} /> Catalog
                </Link>
            </header>

            <main className="ts-body">
                <article className="ts-sheet">
                    <header className="ts-sheet-head">
                        <div className="ts-sheet-meta">
                            <span className="ts-model">PRJ·{project.id.slice(0, 3).toUpperCase()}·{project.year}</span>
                            <span className="ts-card-cat">{project.category}</span>
                        </div>
                        <h1 className="ts-title">{project.title}</h1>
                        <p className="ts-deck">{project.summary}</p>
                        <div className="ts-hero-grid">
                            <div className="ts-specfield">
                                <span className="ts-field">Category</span>
                                <span className="ts-value">{project.category}</span>
                            </div>
                            <div className="ts-specfield">
                                <span className="ts-field">Year</span>
                                <span className="ts-value">{project.year}</span>
                            </div>
                            <div className="ts-specfield">
                                <span className="ts-field">Demo</span>
                                <span className="ts-value">{project.demoUrl ? 'Available' : 'Not public'}</span>
                            </div>
                            <div className="ts-specfield">
                                <span className="ts-field">Source</span>
                                <span className="ts-value">{project.githubUrl ? 'Available' : 'Not public'}</span>
                            </div>
                        </div>
                        {project.demoUrl || project.githubUrl ? (
                            <div className="ts-actions">
                                {project.demoUrl ? (
                                    <a className="ts-btn ts-btn-primary" href={project.demoUrl} target="_blank" rel="noreferrer">
                                        <Icon name="external" size={14} /> Live demo
                                    </a>
                                ) : null}
                                {project.githubUrl ? (
                                    <a className="ts-btn" href={project.githubUrl} target="_blank" rel="noreferrer">
                                        <Icon name="github" size={14} /> Source code
                                    </a>
                                ) : null}
                            </div>
                        ) : (
                            <p className="ts-availability">No public demo or repository — screenshots only.</p>
                        )}
                    </header>

                    <section className="ts-sheet-section" id="overview">
                        <h2>Overview</h2>
                        <p>{d.overview}</p>
                    </section>

                    <section className="ts-sheet-section" id="problem">
                        <h2>Problem</h2>
                        <p>{d.problem}</p>
                    </section>

                    <section className="ts-sheet-section" id="solution">
                        <h2>Solution</h2>
                        <p>{d.solution}</p>
                    </section>

                    <section className="ts-sheet-section" id="role">
                        <h2>Role</h2>
                        <p>{d.role}</p>
                    </section>

                    <section className="ts-sheet-section" id="stack">
                        <h2>Stack</h2>
                        <div className="ts-table-wrap">
                            <table className="ts-table ts-table-stack">
                                <thead>
                                    <tr><th>Technology</th><th>Role in system</th></tr>
                                </thead>
                                <tbody>
                                    {d.stack.map((s) => (
                                        <tr key={s}>
                                            <td>{s}</td>
                                            <td>{d.architecture[0] ?? 'Core component'}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section className="ts-sheet-section" id="architecture">
                        <h2>Architecture</h2>
                        <ol className="ts-arch">
                            {d.architecture.map((a) => (
                                <li key={a}>{a}</li>
                            ))}
                        </ol>
                    </section>

                    <section className="ts-sheet-section" id="challenges">
                        <h2>Challenges</h2>
                        <ul className="ts-arch ts-arch-list">
                            {d.challenges.map((c) => (
                                <li key={c}>{c}</li>
                            ))}
                        </ul>
                    </section>

                    <section className="ts-sheet-section" id="plates">
                        <h2>Screenshots</h2>
                        <div className="ts-plates">
                            {d.screenshots.map((s) => (
                                <figure className="ts-plate" key={s.label}>
                                    <div className="ts-plate-frame">
                                        <span className="ts-plate-label">{s.label}</span>
                                    </div>
                                    <figcaption>{s.caption}</figcaption>
                                </figure>
                            ))}
                        </div>
                    </section>

                    <footer className="ts-sheet-end">
                        <Link to="/explore/technical-spec" className="ts-sheet-link">
                            <Icon name="back" size={14} /> Back to catalog
                        </Link>
                    </footer>
                </article>
            </main>
        </div>
    )
}

export default TechnicalSpecDetail