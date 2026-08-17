import { Link } from 'react-router-dom'
import { profile, projects, expertise, career, about, CATEGORY_FILTERS } from '../mockData.ts'
import type { Category } from '../mockData.ts'
import { useProjectFilter, categoryMethod, methodColor, FEATURED_ID, useReveal, Icon } from '../shared.tsx'
import '../shared.css'
import './apiReference.css'

function ApiReference() {
    const { filter, setFilter, filtered } = useProjectFilter(projects)
    const featured = projects.find((p) => p.id === FEATURED_ID)
    const api = useReveal<HTMLDivElement>()

    return (
        <div className="api" ref={api}>
            <div className="api-topbar">
                <Link to="/explore" className="api-brand">
                    <span className="api-brand-dot" aria-hidden="true"></span>
                    <span>{profile.name} · API</span>
                </Link>
                <nav className="api-nav" aria-label="Sections">
                    <a href="#endpoints">Endpoints</a>
                    <a href="#capabilities">Capabilities</a>
                    <a href="#changelog">Changelog</a>
                    <a href="#readme">README</a>
                    <a href="#contact">Contact</a>
                </nav>
                <a className="api-resume" href="#contact">
                    <Icon name="resume" size={14} /> Get resume
                </a>
            </div>

            <div className="api-layout">
                <aside className="api-side">
                    <p className="api-side-label">Reference</p>
                    <ul>
                        <li><a className="is-active" href="#masthead">Overview</a></li>
                        <li><a href="#endpoints">Projects</a></li>
                        <li><a href="#capabilities">Capabilities</a></li>
                        <li><a href="#changelog">Career changelog</a></li>
                        <li><a href="#readme">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    <p className="api-side-label">Resources</p>
                    <ul>
                        <li>
                            <a className="api-method-link" href="#contact">
                                <span className="api-method" style={{ color: methodColor('GET') }}>GET</span>
                                /resume.pdf
                            </a>
                        </li>
                        <li>
                            <a className="api-method-link" href={profile.github}>
                                <span className="api-method" style={{ color: methodColor('GET') }}>GET</span>
                                /github
                            </a>
                        </li>
                        <li>
                            <a className="api-method-link" href={profile.linkedin}>
                                <span className="api-method" style={{ color: methodColor('GET') }}>GET</span>
                                /linkedin
                            </a>
                        </li>
                        <li>
                            <a className="api-method-link" href={profile.youtube}>
                                <span className="api-method" style={{ color: methodColor('GET') }}>GET</span>
                                /youtube
                            </a>
                        </li>
                    </ul>
                </aside>

                <main className="api-main">
                    <header className="api-masthead" id="masthead">
                        <div className="api-masthead-line" data-reveal>
                            <span className="api-method api-method-lg" style={{ color: methodColor('GET') }}>GET</span>
                            <code>/</code>
                        </div>
                        <h1 data-reveal>
                            <span className="api-role">{profile.role}</span>
                            <span className="api-tagline">{profile.tagline}</span>
                        </h1>
                        <p className="api-lede" data-reveal>
                            {about.body}
                        </p>
                        <div className="api-cta" data-reveal>
                            <a className="api-btn api-btn-primary" href="#contact">
                                <Icon name="resume" size={15} /> Download resume
                            </a>
                            <a className="api-btn" href="#endpoints">
                                Browse projects <Icon name="chevron" size={14} />
                            </a>
                        </div>
                    </header>

                    <section className="api-section" id="endpoints">
                        <div className="api-section-head" data-reveal>
                            <h2>Projects</h2>
                            <p>
                                One featured product plus the full index. Filter by category — each category is a
                                method in this system.
                            </p>
                        </div>

                        <div className="api-filters" role="tablist" aria-label="Project categories" data-reveal>
                            {CATEGORY_FILTERS.map((f) => {
                                const isAll = f === 'All'
                                const active = filter === f
                                const method = isAll ? '' : categoryMethod(f as Category)
                                const color = isAll ? '' : methodColor(method)
                                return (
                                    <button
                                        key={f}
                                        role="tab"
                                        aria-selected={active}
                                        className={`api-filter${active ? ' is-active' : ''}`}
                                        onClick={() => setFilter(f)}
                                    >
                                        {!isAll && (
                                            <span className="api-method" style={{ color }}>
                                                {method}
                                            </span>
                                        )}
                                        {f}
                                    </button>
                                )
                            })}
                        </div>

                        <div className="api-featured" data-reveal>
                            {featured && (
                                <div className="api-featured-card">
                                    <div className="api-featured-head">
                                        <span className="api-status">200 · OK</span>
                                        <span className="api-featured-tag">Featured</span>
                                    </div>
                                    <div className="api-method-row">
                                        <span className="api-method" style={{ color: methodColor(categoryMethod(featured.category)) }}>
                                            {categoryMethod(featured.category)}
                                        </span>
                                        <code>/projects/{'{id}'} → {featured.id}</code>
                                    </div>
                                    <h3>{featured.title}</h3>
                                    <p>{featured.summary}</p>
                                    <ul className="api-tags">
                                        {featured.tags.map((t) => (
                                            <li key={t}>{t}</li>
                                        ))}
                                    </ul>
                                    <Link className="api-doc-link" to={`/explore/api-reference/projects/${featured.id}`}>
                                        Read the docs <Icon name="arrow" size={14} />
                                    </Link>
                                </div>
                            )}
                        </div>

                        <div className="api-endpoints" data-reveal>
                            {filtered
                                .filter((p) => p.id !== FEATURED_ID)
                                .map((p) => {
                                    const method = categoryMethod(p.category)
                                    const color = methodColor(method)
                                    return (
                                        <Link to={`/explore/api-reference/projects/${p.id}`} className="api-endpoint" key={p.id}>
                                            <span className="api-method" style={{ color }}>
                                                {method}
                                            </span>
                                            <div className="api-endpoint-body">
                                                <code>/projects/{p.id}</code>
                                                <h3>{p.title}</h3>
                                                <p>{p.summary}</p>
                                                <ul className="api-tags">
                                                    {p.tags.map((t) => (
                                                        <li key={t}>{t}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <span className="api-endpoint-year">{p.year}</span>
                                            <Icon name="chevron" size={16} className="api-endpoint-chevron" />
                                        </Link>
                                    )
                                })}
                        </div>
                    </section>

                    <section className="api-section" id="capabilities">
                        <div className="api-section-head" data-reveal>
                            <h2>Capabilities</h2>
                            <p>Engineering expertise, exposed as endpoints.</p>
                        </div>
                        <div className="api-cap-grid" data-reveal>
                            {expertise.map((e) => (
                                <div className="api-cap" key={e.title}>
                                    <code>{e.title}</code>
                                    <p>{e.detail}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="api-section" id="changelog">
                        <div className="api-section-head" data-reveal>
                            <h2>Career changelog</h2>
                            <p>A versioned history of the path so far.</p>
                        </div>
                        <ol className="api-changelog" data-reveal>
                            {career.map((c) => (
                                <li key={`${c.year}-${c.title}`}>
                                    <span className="api-ver">{c.year}</span>
                                    <div>
                                        <h3>{c.title}</h3>
                                        <p>{c.detail}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </section>

                    <section className="api-section" id="readme">
                        <div className="api-section-head" data-reveal>
                            <h2>README</h2>
                            <p>{about.heading}</p>
                        </div>
                        <div className="api-readme" data-reveal>
                            <pre>{`# ${profile.name}
- role: ${profile.role}
- focus: ${profile.tagline}
- location: ${profile.location}`}</pre>
                            <p>{about.body}</p>
                        </div>
                    </section>
                </main>
            </div>

            <footer className="api-footer" id="contact">
                <div className="api-foot-inner" data-reveal>
                    <h2>Contact</h2>
                    <p>Open to software engineering roles and SaaS / business-system engagements.</p>
                    <div className="api-foot-links">
                        <a className="api-btn api-btn-primary" href={`mailto:${profile.email}`}>
                            <Icon name="email" size={15} /> {profile.email}
                        </a>
                        <a className="api-btn" href={profile.github}><Icon name="github" size={15} /> GitHub</a>
                        <a className="api-btn" href={profile.linkedin}><Icon name="linkedin" size={15} /> LinkedIn</a>
                        <a className="api-btn" href={profile.youtube}><Icon name="youtube" size={15} /> YouTube</a>
                    </div>
                    <p className="api-foot-meta">{profile.location} · {profile.phone}</p>
                </div>
            </footer>
        </div>
    )
}

export default ApiReference
