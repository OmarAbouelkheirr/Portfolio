import { Link, useParams } from 'react-router-dom'
import { findProject, Icon } from '../shared.tsx'
import { profile } from '../mockData.ts'
import '../shared.css'
import './editorial.css'

function EditorialDetail() {
    const { projectId } = useParams()
    const project = findProject(projectId)

    if (!project) {
        return (
            <div className="ed">
                <header className="ed-mast">
                    <Link to="/explore" className="ed-brand">
                        {profile.name}
                        <span className="ed-brand-sub">A portfolio in print</span>
                    </Link>
                </header>
                <main className="ed-body">
                    <div className="ed-missing">
                        <h1>Story not found</h1>
                        <Link className="ed-btn" to="/explore/editorial">
                            <Icon name="back" size={14} /> Back to features
                        </Link>
                    </div>
                </main>
            </div>
        )
    }

    const d = project.detail
    const hasLinks = Boolean(project.demoUrl || project.githubUrl)

    return (
        <div className="ed">
            <header className="ed-mast">
                <Link to="/explore" className="ed-brand">
                    {profile.name}
                    <span className="ed-brand-sub">A portfolio in print</span>
                </Link>
                <nav className="ed-nav" aria-label="Sections">
                    <a href="#overview">Overview</a>
                    <a href="#problem">Problem</a>
                    <a href="#solution">Solution</a>
                    <a href="#role">Role</a>
                    <a href="#architecture">Architecture</a>
                </nav>
                <Link className="ed-resume" to="/explore/editorial">
                    <Icon name="back" size={14} /> Features
                </Link>
            </header>

            <main className="ed-body">
                <article className="ed-story">
                    <header className="ed-story-head">
                        <p className="ed-dateline">
                            {project.category} · {project.year} · A case study
                        </p>
                        <h1 className="ed-story-title">{project.title}</h1>
                        <p className="ed-story-deck">{project.summary}</p>
                        <p className="ed-feature-tags">{project.tags.join(' · ')}</p>
                        {hasLinks ? (
                            <div className="ed-cover-cta">
                                {project.demoUrl ? (
                                    <a className="ed-btn ed-btn-primary" href={project.demoUrl} target="_blank" rel="noreferrer">
                                        Open the demo <Icon name="external" size={14} />
                                    </a>
                                ) : null}
                                {project.githubUrl ? (
                                    <a className="ed-btn" href={project.githubUrl} target="_blank" rel="noreferrer">
                                        View the source <Icon name="external" size={14} />
                                    </a>
                                ) : null}
                            </div>
                        ) : (
                            <p className="ed-feature-tags">No public demo or repository — screenshots only.</p>
                        )}
                    </header>

                    <section className="ed-prose" id="overview">
                        <h2>Overview</h2>
                        <p>{d.overview}</p>
                    </section>

                    <section className="ed-prose" id="problem">
                        <h2>Problem</h2>
                        <p>{d.problem}</p>
                    </section>

                    <section className="ed-prose" id="solution">
                        <h2>Solution</h2>
                        <p>{d.solution}</p>
                    </section>

                    <section className="ed-prose" id="role">
                        <h2>Role</h2>
                        <p>{d.role}</p>
                    </section>

                    <section className="ed-prose" id="stack">
                        <h2>Stack</h2>
                        <p className="ed-feature-tags">{d.stack.join(' · ')}</p>
                    </section>

                    <section className="ed-prose" id="architecture">
                        <h2>Architecture</h2>
                        <ul className="ed-list">
                            {d.architecture.map((a) => (
                                <li key={a}>{a}</li>
                            ))}
                        </ul>
                    </section>

                    <section className="ed-prose" id="challenges">
                        <h2>Challenges</h2>
                        <ul className="ed-list">
                            {d.challenges.map((c) => (
                                <li key={c}>{c}</li>
                            ))}
                        </ul>
                    </section>

                    <section className="ed-prose" id="plates">
                        <h2>Plates</h2>
                        <div className="ed-plates">
                            {d.screenshots.map((s) => (
                                <figure className="ed-plate" key={s.label}>
                                    <div className="ed-plate-frame">
                                        <span className="ed-plate-label">{s.label}</span>
                                    </div>
                                    <figcaption>{s.caption}</figcaption>
                                </figure>
                            ))}
                        </div>
                    </section>

                    <footer className="ed-story-end">
                        <Link to="/explore/editorial" className="ed-read">
                            <Icon name="back" size={14} /> Back to all features
                        </Link>
                    </footer>
                </article>
            </main>
        </div>
    )
}

export default EditorialDetail