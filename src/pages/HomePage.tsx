import { useMemo, useState, type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence, MotionConfig } from 'framer-motion'
import {
  CATEGORY_FILTERS,
  categoryTone,
  type Category,
} from '../data/portfolioData.ts'
import { projects, FEATURED_ID, type PortfolioProject } from '../data/projectCatalog.ts'
import { getProjectCoverImage } from '../data/projectImages.ts'
import { baleghCoverImage } from '../data/baleghImages.ts'
import { howToTrainAICoverImage } from '../data/howToTrainAIImages.ts'
import { useSpotlight } from '../hooks/useSpotlight.ts'
import { Reveal } from '../components/Reveal.tsx'
import { AppMock } from '../components/AppMock.tsx'
import { CareerTimeline } from '../components/CareerTimeline.tsx'
import { SmoothLink } from '../components/SmoothLink.tsx'
import { LanguageToggle } from '../components/LanguageToggle.tsx'
import { useLanguage } from '../i18n/LanguageContext.tsx'
import {
  getCategoryLabel,
  getFilterLabel,
  getLocalizedAbout,
  getLocalizedCareer,
  getLocalizedExpertise,
  getLocalizedProfile,
  localizeProject,
  uiCopy,
} from '../i18n/content.ts'

function ProjectCard({
  project,
  tone,
  featured = false,
}: {
  project: PortfolioProject
  tone: string
  featured?: boolean
}) {
  const { language } = useLanguage()
  const copy = uiCopy[language]
  const coverImage = project.id === 'balegh'
    ? baleghCoverImage
    : project.id === 'how-to-train-your-ai'
      ? howToTrainAICoverImage
      : getProjectCoverImage(project.id)

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        to={`/projects/${project.id}`}
        className={`dark-card${featured ? ' dark-card-featured' : ''}`}
        style={{ '--card-tone': tone } as CSSProperties}
      >
        <div className="dark-card-media">
          <div className="dark-card-media-inner">
            {coverImage ? (
              <img
                src={coverImage}
                alt={`${project.title} — ${copy.screenshotsTitle}`}
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
              />
            ) : (
              <AppMock tone={tone} seed={project.id} />
            )}
          </div>
          {featured && <span className="dark-card-feat">{copy.featured}</span>}
        </div>
        <div className="dark-card-body">
          <div className="dark-card-meta">
            <span className="dark-card-cat" style={{ color: tone }}>{getCategoryLabel(project.category, language)}</span>
            <span className="dark-card-year">{project.year}</span>
          </div>
          <h3>{project.title}</h3>
          <p>{project.summary}</p>
          <ul className="dark-tags">
            {project.tags.map((tag) => (
              <li key={tag} dir="auto">{tag}</li>
            ))}
          </ul>
          <span className="dark-card-go">{copy.openCaseStudy}</span>
        </div>
      </Link>
    </motion.div>
  )
}

export function HomePage() {
  const [filter, setFilter] = useState<'All' | Category>('All')
  const spotlight = useSpotlight()
  const { language, direction } = useLanguage()
  const copy = uiCopy[language]
  const localizedProfile = getLocalizedProfile(language)
  const localizedAbout = getLocalizedAbout(language)
  const localizedExpertise = getLocalizedExpertise(language)
  const localizedCareer = getLocalizedCareer(language)
  const localizedProjects = useMemo(
    () => projects.map((project) => localizeProject(project, language)),
    [language],
  )

  const featured = localizedProjects.find((project) => project.id === FEATURED_ID)
  const filtered = useMemo(
    () => (filter === 'All' ? localizedProjects : localizedProjects.filter((project) => project.category === filter)),
    [filter, localizedProjects],
  )

  return (
    <MotionConfig reducedMotion="user">
      <div className="dark" dir={direction}>
        <header className="dark-nav">
          <Link to="/" className="dark-brand">
            <span className="dark-brand-dot"></span>
            {localizedProfile.name}
          </Link>
          <nav className="dark-links" aria-label={copy.navProjects}>
            <SmoothLink href="#projects">{copy.navProjects}</SmoothLink>
            <SmoothLink href="#expertise">{copy.navExpertise}</SmoothLink>
            <SmoothLink href="#journey">{copy.navJourney}</SmoothLink>
            <SmoothLink href="#about">{copy.navAbout}</SmoothLink>
          </nav>
          <div className="dark-nav-actions">
            <LanguageToggle />
            <a className="dark-resume" href="/resume.pdf" download>{copy.resume}</a>
          </div>
        </header>

        <section className="dark-hero" ref={spotlight}>
          <div className="dark-hero-spot" aria-hidden="true"></div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="dark-hero-inner"
          >
            <p className="dark-hero-kicker">{localizedProfile.location} · {localizedProfile.role}</p>
            <h1>
              {copy.heroHeading}
              <em>{copy.heroAccent}</em>
            </h1>
            <p className="dark-hero-deck">{localizedAbout.body}</p>
            <div className="dark-hero-cta">
              <SmoothLink className="dark-btn dark-btn-primary" href="#projects">{copy.viewProjects}</SmoothLink>
              <a className="dark-btn" href="/resume.pdf" download>{copy.downloadResume}</a>
              <a className="dark-btn dark-btn-ghost dark-hero-social" href={localizedProfile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg className="dark-btn-icon" aria-hidden="true"><use href="/icons.svg#github-icon" /></svg>
                GitHub
              </a>
              <a className="dark-btn dark-btn-ghost dark-hero-social" href={localizedProfile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg className="dark-btn-icon" aria-hidden="true"><use href="/icons.svg#linkedin-icon" /></svg>
                LinkedIn
              </a>
            </div>
          </motion.div>
        </section>

        <section className="dark-section" id="projects">
          <div className="dark-section-head">
            <Reveal>
              <p className="dark-kicker">{copy.theWork}</p>
              <h2>{copy.projectsTitle}</h2>
              <p className="dark-section-deck">{copy.projectsDeck}</p>
            </Reveal>
          </div>

          <div className="dark-filters">
            {CATEGORY_FILTERS.map((category) => (
              <button
                key={category}
                className={`dark-filter${filter === category ? ' is-active' : ''}`}
                onClick={() => setFilter(category)}
              >
                {getFilterLabel(category, language)}
              </button>
            ))}
          </div>

          <div className="dark-grid">
            {featured && (filter === 'All' || filter === featured.category) && (
              <ProjectCard project={featured} tone={categoryTone(featured.category)} featured />
            )}

            <AnimatePresence mode="popLayout">
              {filtered
                .filter((project) => project.id !== FEATURED_ID)
                .map((project) => (
                  <ProjectCard key={project.id} project={project} tone={categoryTone(project.category)} />
                ))}
            </AnimatePresence>
          </div>
        </section>

        <section className="dark-section dark-section-raise" id="expertise">
          <div className="dark-section-head">
            <Reveal>
              <p className="dark-kicker">{copy.capabilities}</p>
              <h2>{copy.expertiseTitle}</h2>
            </Reveal>
          </div>
          <div className="dark-expertise">
            {localizedExpertise.map((item, index) => (
              <Reveal key={item.title} delay={Math.min(index * 0.05, 0.35)}>
                <div className="dark-expertise-item">
                  <span className="dark-expertise-num">{String(index + 1).padStart(2, '0')}</span>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="dark-section" id="journey">
          <div className="dark-section-head">
            <Reveal>
              <p className="dark-kicker">{copy.theRecord}</p>
              <h2>{copy.journeyTitle}</h2>
            </Reveal>
          </div>
          <CareerTimeline items={localizedCareer} />
        </section>

        <section className="dark-section" id="about">
          <Reveal>
            <div className="dark-about">
              <p className="dark-kicker">{localizedAbout.heading}</p>
              <p className="dark-about-text">{localizedAbout.body}</p>
            </div>
          </Reveal>
        </section>

        <footer className="dark-footer" id="contact">
          <div className="dark-footer-inner">
            <Reveal>
              <p className="dark-kicker">{copy.contact}</p>
              <h2>{copy.footerTitle}</h2>
              <p className="dark-footer-deck">{copy.footerDeck}</p>
              <div className="dark-hero-cta">
                <a className="dark-btn dark-btn-primary" href={`mailto:${localizedProfile.email}`}>{localizedProfile.email}</a>
                <a className="dark-btn" href={localizedProfile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                <a className="dark-btn" href={localizedProfile.youtube} target="_blank" rel="noreferrer">YouTube</a>
              </div>
              <p className="dark-footer-meta">{localizedProfile.location} · {localizedProfile.phone}</p>
            </Reveal>
          </div>
        </footer>
      </div>
    </MotionConfig>
  )
}
