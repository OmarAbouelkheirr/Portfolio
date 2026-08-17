import { Link } from 'react-router-dom'
import { profile, projects, expertise, career, about, CATEGORY_FILTERS } from '../mockData.ts'
import { useProjectFilter, FEATURED_ID, useReveal, Icon } from '../shared.tsx'
import '../shared.css'
import './categoryStandard.css'

function CategoryStandard() {
    const { filter, setFilter, filtered } = useProjectFilter(projects)
    const featured = projects.find((p) => p.id === FEATURED_ID)
    const cs = useReveal<HTMLDivElement>()

    return (
        <div className="cs" ref={cs}>
            <header className="cs-nav">
                <Link to="/explore" className="cs-logo">{profile.name}</Link>
                <nav className="cs-links" aria-label="Sections">
                    <a href="#projects">Projects</a>
                    <a href="#expertise">Expertise</a>
                    <a href="#journey">Journey</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </nav>
                <a className="cs-resume" href="#contact">
                    <Icon name="resume" size={14} /> Resume
                </a>
            </header>

            <main className="cs-main">
                <header className="cs-hero">
                    <p className="cs-kicker">{profile.location}</p>
                    <h1 className="cs-title">
                        {profile.role}
                        <span className="cs-title-accent">{profile.tagline}</span>
                    </h1>
                    <p className="cs-deck">{about.body}</p>
                    <div className="cs-cta">
                        <a className="cs-btn cs-btn-primary" href="#contact">
                            <Icon name="resume" size={15} /> Download resume
                        </a>
                        <a className="cs-btn" href="#projects">
                            View projects
                        </a>
                    </div>
                </header>

                <section className="cs-section" id="projects">
                    <div className="cs-section-head">
                        <h2>Projects</h2>
                        <p>One featured product and the full collection, filterable by category.</p>
                    </div>

                    <div className="cs-pills" role="tablist" aria-label="Project categories">
                        {CATEGORY_FILTERS.map((f) => (
                            <button
                                key={f}
                                role="tab"
                                aria-selected={filter === f}
                                className={`cs-pill${filter === f ? ' is-active' : ''}`}
                                onClick={() => setFilter(f)}
                            >
                                {f}
                            </button>
                        ))}
                    </div>

                    <div className="cs-grid">
                        {featured && filterMatches(featured, filter) ? (
                            <Link
                                to={`/explore/category-standard/projects/${featured.id}`}
                                className="cs-card cs-card-featured"
                                data-reveal
                            >
                                <div className="cs-card-media cs-card-media-featured">
                                    <span className="cs-card-tag">Featured</span>
                                    <span className="cs-card-cat">{featured.category}</span>
                                </div>
                                <div className="cs-card-body">
                                    <h3>{featured.title}</h3>
                                    <p>{featured.summary}</p>
                                    <ul className="cs-tech">
                                        {featured.tags.map((t) => (
                                            <li key={t}>{t}</li>
                                        ))}
                                    </ul>
                                    <span className="cs-card-link">
                                        View case study <Icon name="arrow" size={14} />
                                    </span>
                                </div>
                            </Link>
                        ) : null}

                        {filtered
                            .filter((p) => p.id !== FEATURED_ID)
                            .map((p) => (
                                <Link
                                    to={`/explore/category-standard/projects/${p.id}`}
                                    className="cs-card"
                                    data-reveal
                                    key={p.id}
                                >
                                    <div className="cs-card-media">
                                        <span className="cs-card-cat">{p.category}</span>
                                    </div>
                                    <div className="cs-card-body">
                                        <h3>{p.title}</h3>
                                        <p>{p.summary}</p>
                                        <ul className="cs-tech">
                                            {p.tags.slice(0, 4).map((t) => (
                                                <li key={t}>{t}</li>
                                            ))}
                                        </ul>
                                        <span className="cs-card-link">
                                            Case study <Icon name="arrow" size={14} />
                                        </span>
                                    </div>
                                </Link>
                            ))}
                    </div>
                </section>

                <section className="cs-section" id="expertise">
                    <div className="cs-section-head">
                        <h2>Engineering expertise</h2>
                        <p>Where the work concentrates.</p>
                    </div>
                    <div className="cs-expertise">
                        {expertise.map((e) => (
                            <div className="cs-expertise-item" data-reveal key={e.title}>
                                <h3>{e.title}</h3>
                                <p>{e.detail}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="cs-section" id="journey">
                    <div className="cs-section-head">
                        <h2>Career journey</h2>
                        <p>From first commits to current systems.</p>
                    </div>
                    <div className="cs-journey">
                        {career.map((c, i) => (
                            <div className="cs-journey-item" data-reveal key={`${c.year}-${c.title}`}>
                                <div className="cs-journey-marker">
                                    <span className={`cs-journey-dot${i === career.length - 1 ? ' is-now' : ''}`}></span>
                                    <span className="cs-journey-year">{c.year}</span>
                                </div>
                                <div className="cs-journey-body">
                                    <h3>{c.title}</h3>
                                    <p>{c.detail}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="cs-section" id="about">
                    <div className="cs-section-head">
                        <h2>About</h2>
                    </div>
                    <div className="cs-about" data-reveal>
                        <p className="cs-about-text">{about.body}</p>
                    </div>
                </section>
            </main>

            <footer className="cs-footer" id="contact">
                <div className="cs-footer-inner">
                    <h2>Let&apos;s build something</h2>
                    <p>Open to software engineering roles and SaaS / business-system engagements.</p>
                    <div className="cs-social">
                        <a className="cs-btn cs-btn-primary" href={`mailto:${profile.email}`}>
                            <Icon name="email" size={15} /> {profile.email}
                        </a>
                        <a className="cs-btn cs-btn-light" href={profile.github}><Icon name="github" size={15} /> GitHub</a>
                        <a className="cs-btn cs-btn-light" href={profile.linkedin}><Icon name="linkedin" size={15} /> LinkedIn</a>
                        <a className="cs-btn cs-btn-light" href={profile.youtube}><Icon name="youtube" size={15} /> YouTube</a>
                    </div>
                    <p className="cs-foot-note">{profile.location} · {profile.phone}</p>
                </div>
            </footer>
        </div>
    )
}

function filterMatches(
    project: { category: (typeof CATEGORY_FILTERS)[number] | string },
    filter: string,
) {
    return filter === 'All' || project.category === filter
}

export default CategoryStandard