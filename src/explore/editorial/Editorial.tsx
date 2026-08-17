import { Link } from 'react-router-dom'
import { profile, projects, expertise, career, about, CATEGORY_FILTERS } from '../mockData.ts'
import { useProjectFilter, FEATURED_ID, useReveal, Icon } from '../shared.tsx'
import '../shared.css'
import './editorial.css'

function Editorial() {
    const { filter, setFilter, filtered } = useProjectFilter(projects)
    const featured = projects.find((p) => p.id === FEATURED_ID)
    const ed = useReveal<HTMLDivElement>()

    return (
        <div className="ed" ref={ed}>
            <header className="ed-mast">
                <Link to="/explore" className="ed-brand">
                    {profile.name}
                    <span className="ed-brand-sub">A portfolio in print</span>
                </Link>
                <nav className="ed-nav" aria-label="Sections">
                    <a href="#features">Features</a>
                    <a href="#craft">Craft</a>
                    <a href="#chronicle">Chronicle</a>
                    <a href="#about">About</a>
                </nav>
                <a className="ed-resume" href="#contact">
                    <Icon name="resume" size={14} /> Resume
                </a>
            </header>

            <main className="ed-body">
                <header className="ed-cover">
                    <p className="ed-dateline" data-reveal>
                        {profile.location} · Portfolio · {new Date().getFullYear()}
                    </p>
                    <h1 className="ed-headline" data-reveal>
                        Software Engineer,
                        <em> focused on backend, SaaS &amp; business systems</em>
                    </h1>
                    <p className="ed-deck" data-reveal>
                        {about.body}
                    </p>
                    <div className="ed-cover-cta" data-reveal>
                        <a className="ed-btn ed-btn-primary" href="#contact">
                            Request the resume <Icon name="arrow" size={14} />
                        </a>
                        <a className="ed-btn" href="#features">
                            Read the features
                        </a>
                    </div>
                </header>

                <section className="ed-section" id="features">
                    <div className="ed-section-head" data-reveal>
                        <p className="ed-kicker">From the contents</p>
                        <h2>Features</h2>
                        <p>One lead story and the full run of projects, filterable by section.</p>
                    </div>

                    <div className="ed-filter-row" data-reveal>
                        {CATEGORY_FILTERS.map((f) => (
                            <button
                                key={f}
                                className={`ed-filter${filter === f ? ' is-active' : ''}`}
                                onClick={() => setFilter(f)}
                            >
                                {f}
                            </button>
                        ))}
                    </div>

                    {featured && (
                        <article className="ed-feature" data-reveal>
                            <div className="ed-feature-meta">
                                <span className="ed-section-label">{featured.category}</span>
                                <span className="ed-section-label ed-section-label-accent">Lead story</span>
                            </div>
                            <h3>
                                <Link to={`/explore/editorial/projects/${featured.id}`}>{featured.title}</Link>
                            </h3>
                            <p className="ed-feature-deck">{featured.summary}</p>
                            <p className="ed-feature-tags">{featured.tags.join(' · ')}</p>
                            <Link className="ed-read" to={`/explore/editorial/projects/${featured.id}`}>
                                Read the story <Icon name="arrow" size={14} />
                            </Link>
                        </article>
                    )}

                    <ol className="ed-toc" data-reveal>
                        {filtered
                            .filter((p) => p.id !== FEATURED_ID)
                            .map((p, i) => (
                                <li key={p.id}>
                                    <Link to={`/explore/editorial/projects/${p.id}`} className="ed-toc-link">
                                        <span className="ed-toc-num">{String(i + 1).padStart(2, '0')}</span>
                                        <span className="ed-toc-cat">{p.category}</span>
                                        <span className="ed-toc-title">{p.title}</span>
                                        <span className="ed-toc-year">{p.year}</span>
                                    </Link>
                                </li>
                            ))}
                    </ol>
                </section>

                <section className="ed-section" id="craft">
                    <div className="ed-section-head" data-reveal>
                        <p className="ed-kicker">The working methods</p>
                        <h2>Craft</h2>
                        <p>Where the engineering effort concentrates.</p>
                    </div>
                    <div className="ed-craft-grid" data-reveal>
                        {expertise.map((e, i) => (
                            <div className="ed-craft" key={e.title}>
                                <span className="ed-craft-num">{String(i + 1).padStart(2, '0')}</span>
                                <h3>{e.title}</h3>
                                <p>{e.detail}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="ed-section" id="chronicle">
                    <div className="ed-section-head" data-reveal>
                        <p className="ed-kicker">A working biography</p>
                        <h2>Chronicle</h2>
                        <p>From first commits to current systems.</p>
                    </div>
                    <ol className="ed-chron" data-reveal>
                        {career.map((c) => (
                            <li key={`${c.year}-${c.title}`}>
                                <span className="ed-chron-year">{c.year}</span>
                                <div className="ed-chron-body">
                                    <h3>{c.title}</h3>
                                    <p>{c.detail}</p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </section>

                <section className="ed-section" id="about">
                    <div className="ed-section-head" data-reveal>
                        <p className="ed-kicker">About the author</p>
                        <h2>About</h2>
                    </div>
                    <blockquote className="ed-pull" data-reveal>
                        “{about.body}”
                    </blockquote>
                </section>
            </main>

            <footer className="ed-footer" id="contact">
                <div className="ed-footer-inner" data-reveal>
                    <h2>Correspondence</h2>
                    <p>Roles in software engineering, and engagements in SaaS and business systems.</p>
                    <address className="ed-contact">
                        <a href={`mailto:${profile.email}`}>{profile.email}</a>
                        <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
                        <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                        <a href={profile.youtube} target="_blank" rel="noreferrer">YouTube</a>
                    </address>
                    <p className="ed-colophon">
                        {profile.name} · {profile.location} · {profile.phone}
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default Editorial
