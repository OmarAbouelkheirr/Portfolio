import { Link } from 'react-router-dom'
import { profile, projects, expertise, career, about, CATEGORY_FILTERS } from '../mockData.ts'
import { useProjectFilter, FEATURED_ID, useReveal, Icon } from '../shared.tsx'
import '../shared.css'
import './technicalSpec.css'

function TechnicalSpec() {
    const { filter, setFilter, filtered } = useProjectFilter(projects)
    const featured = projects.find((p) => p.id === FEATURED_ID)
    const ts = useReveal<HTMLDivElement>()

    return (
        <div className="ts" ref={ts}>
            <header className="ts-topbar">
                <Link to="/explore" className="ts-wordmark">
                    <span className="ts-wordmark-name">{profile.name}</span>
                    <span className="ts-wordmark-doc">SPEC·001 · v1.0</span>
                </Link>
                <nav className="ts-nav" aria-label="Sections">
                    <a href="#catalog">Catalog</a>
                    <a href="#specs">Specifications</a>
                    <a href="#history">Revision history</a>
                    <a href="#document">Document</a>
                </nav>
                <a className="ts-resume" href="#contact">
                    <Icon name="resume" size={14} /> Resume
                </a>
            </header>

            <main className="ts-body">
                <section className="ts-hero" id="hero">
                    <div className="ts-hero-grid" data-reveal>
                        <div className="ts-specfield">
                            <span className="ts-field">Classification</span>
                            <span className="ts-value">Portfolio · {profile.role}</span>
                        </div>
                        <div className="ts-specfield">
                            <span className="ts-field">Focus</span>
                            <span className="ts-value">{profile.tagline}</span>
                        </div>
                        <div className="ts-specfield">
                            <span className="ts-field">Location</span>
                            <span className="ts-value">{profile.location}</span>
                        </div>
                        <div className="ts-specfield">
                            <span className="ts-field">Status</span>
                            <span className="ts-value ts-status-ok">● Available for work</span>
                        </div>
                    </div>
                    <h1 className="ts-title" data-reveal>{profile.role}</h1>
                    <p className="ts-deck" data-reveal>{about.body}</p>
                    <div className="ts-actions" data-reveal>
                        <a className="ts-btn ts-btn-primary" href="#contact">
                            <Icon name="resume" size={15} /> Request resume
                        </a>
                        <a className="ts-btn" href="#catalog">
                            Inspect the catalog <Icon name="chevron" size={14} />
                        </a>
                    </div>
                </section>

                <section className="ts-section" id="catalog">
                    <div className="ts-section-head" data-reveal>
                        <h2>Project catalog</h2>
                        <p>Filterable inventory of built systems. One featured item, then the full run.</p>
                    </div>

                    <div className="ts-tabs" role="tablist" aria-label="Project categories" data-reveal>
                        {CATEGORY_FILTERS.map((f) => (
                            <button
                                key={f}
                                role="tab"
                                aria-selected={filter === f}
                                className={`ts-tab${filter === f ? ' is-active' : ''}`}
                                onClick={() => setFilter(f)}
                            >
                                {f}
                            </button>
                        ))}
                    </div>

                    {featured && (
                        <article className="ts-featured" data-reveal>
                            <div className="ts-featured-head">
                                <span className="ts-model">PRJ·{featured.id.slice(0, 3).toUpperCase()}·FEAT</span>
                                <span className="ts-badge">Featured item</span>
                            </div>
                            <div className="ts-featured-grid">
                                <div>
                                    <h3>{featured.title}</h3>
                                    <p className="ts-featured-summary">{featured.summary}</p>
                                    <p className="ts-featured-tags">{featured.tags.join(' · ')}</p>
                                </div>
                                <dl className="ts-minispec">
                                    <div><dt>Category</dt><dd>{featured.category}</dd></div>
                                    <div><dt>Year</dt><dd>{featured.year}</dd></div>
                                    <div><dt>Demo</dt><dd>{featured.demoUrl ? 'Available' : '—'}</dd></div>
                                    <div><dt>Source</dt><dd>{featured.githubUrl ? 'Available' : '—'}</dd></div>
                                </dl>
                            </div>
                            <Link className="ts-sheet-link" to={`/explore/technical-spec/projects/${featured.id}`}>
                                Open data sheet <Icon name="arrow" size={14} />
                            </Link>
                        </article>
                    )}

                    <div className="ts-grid" data-reveal>
                        {filtered
                            .filter((p) => p.id !== FEATURED_ID)
                            .map((p, i) => (
                                <Link to={`/explore/technical-spec/projects/${p.id}`} className="ts-card" key={p.id}>
                                    <div className="ts-card-head">
                                        <span className="ts-model">PRJ·{String(i + 1).padStart(3, '0')}</span>
                                        <span className="ts-card-cat">{p.category}</span>
                                    </div>
                                    <h3>{p.title}</h3>
                                    <p>{p.summary}</p>
                                    <p className="ts-card-tags">{p.tags.join(' · ')}</p>
                                    <span className="ts-card-more">
                                        <span>{p.year}</span>
                                        <Icon name="chevron" size={14} />
                                    </span>
                                </Link>
                            ))}
                    </div>
                </section>

                <section className="ts-section" id="specs">
                    <div className="ts-section-head" data-reveal>
                        <h2>Specifications</h2>
                        <p>Capabilities with documented detail.</p>
                    </div>
                    <div className="ts-table-wrap" data-reveal>
                        <table className="ts-table">
                            <thead>
                                <tr>
                                    <th>Capability</th>
                                    <th>Detail</th>
                                </tr>
                            </thead>
                            <tbody>
                                {expertise.map((e) => (
                                    <tr key={e.title}>
                                        <td>{e.title}</td>
                                        <td>{e.detail}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                <section className="ts-section" id="history">
                    <div className="ts-section-head" data-reveal>
                        <h2>Revision history</h2>
                        <p>The engineering record, year by year.</p>
                    </div>
                    <div className="ts-table-wrap" data-reveal>
                        <table className="ts-table ts-table-history">
                            <thead>
                                <tr>
                                    <th>Year</th>
                                    <th>Milestone</th>
                                    <th>Note</th>
                                </tr>
                            </thead>
                            <tbody>
                                {career.map((c) => (
                                    <tr key={`${c.year}-${c.title}`}>
                                        <td>{c.year}</td>
                                        <td>{c.title}</td>
                                        <td>{c.detail}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                <section className="ts-section" id="document">
                    <div className="ts-section-head" data-reveal>
                        <h2>Document</h2>
                        <p>{about.heading}</p>
                    </div>
                    <div className="ts-doc" data-reveal>
                        <p>{about.body}</p>
                    </div>
                </section>
            </main>

            <footer className="ts-footer" id="contact">
                <div className="ts-footer-inner" data-reveal>
                    <h2>Contact / requisitions</h2>
                    <p>Open to software engineering roles and SaaS / business-system engagements.</p>
                    <div className="ts-contact">
                        <a className="ts-btn ts-btn-primary" href={`mailto:${profile.email}`}>
                            <Icon name="email" size={15} /> {profile.email}
                        </a>
                        <a className="ts-btn" href={profile.github}><Icon name="github" size={15} /> GitHub</a>
                        <a className="ts-btn" href={profile.linkedin}><Icon name="linkedin" size={15} /> LinkedIn</a>
                        <a className="ts-btn" href={profile.youtube}><Icon name="youtube" size={15} /> YouTube</a>
                    </div>
                    <p className="ts-foot-meta">{profile.location} · {profile.phone}</p>
                </div>
            </footer>
        </div>
    )
}

export default TechnicalSpec