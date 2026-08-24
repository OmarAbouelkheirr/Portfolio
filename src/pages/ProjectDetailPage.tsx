import { Link, useParams } from 'react-router-dom'
import { motion, MotionConfig } from 'framer-motion'
import { categoryTone } from '../data/portfolioData.ts'
import { findProject } from '../data/projectCatalog.ts'
import { getProjectScreenshots } from '../data/projectImages.ts'
import { baleghScreenshots } from '../data/baleghImages.ts'
import { howToTrainAIScreenshots } from '../data/howToTrainAIImages.ts'
import { useSpotlight } from '../hooks/useSpotlight.ts'
import { Reveal } from '../components/Reveal.tsx'
import { FlowDiagram } from '../components/FlowDiagram.tsx'
import { SmoothLink } from '../components/SmoothLink.tsx'
import { ProjectGallery } from '../components/ProjectGallery.tsx'
import { LanguageToggle } from '../components/LanguageToggle.tsx'
import { useLanguage } from '../i18n/LanguageContext.tsx'
import {
  getCategoryLabel,
  getLocalizedProfile,
  localizeProject,
  localizeScreenshots,
  uiCopy,
} from '../i18n/content.ts'
import '../styles/projectGallery.css'

export function ProjectDetailPage() {
  const { projectId } = useParams()
  const baseProject = findProject(projectId)
  const spotlight = useSpotlight()
  const { language, direction } = useLanguage()
  const copy = uiCopy[language]
  const localizedProfile = getLocalizedProfile(language)
  const project = baseProject ? localizeProject(baseProject, language) : undefined

  const baseScreenshots = baseProject
    ? baseProject.id === 'balegh'
      ? baleghScreenshots
      : baseProject.id === 'how-to-train-your-ai'
        ? howToTrainAIScreenshots
        : getProjectScreenshots(baseProject.id)
    : []

  const screenshots = baseProject
    ? localizeScreenshots(baseProject.id, baseScreenshots, language)
    : []

  if (!project) {
    return (
      <MotionConfig reducedMotion="user">
        <div className="dark" dir={direction}>
          <header className="dark-nav">
            <Link to="/" className="dark-brand">
              <span className="dark-brand-dot"></span>
              {localizedProfile.name}
            </Link>
            <div className="dark-nav-actions">
              <LanguageToggle />
              <Link className="dark-resume" to="/">{copy.navProjects}</Link>
            </div>
          </header>
          <div className="dark-missing">
            <h1>{copy.projectNotFound}</h1>
            <Link className="dark-btn" to="/">{copy.backToProjects}</Link>
          </div>
        </div>
      </MotionConfig>
    )
  }

  const tone = categoryTone(project.category)
  const detail = project.detail
  const hasLinks = Boolean(project.demoUrl || project.githubUrl)
  const architectureNumber = detail.features?.length ? '07' : '06'
  const challengesNumber = detail.features?.length ? '08' : '07'
  const screenshotsNumber = detail.features?.length ? '09' : '08'

  return (
    <MotionConfig reducedMotion="user">
      <div className="dark" dir={direction}>
        <header className="dark-nav">
          <Link to="/" className="dark-brand">
            <span className="dark-brand-dot"></span>
            {localizedProfile.name}
          </Link>
          <nav className="dark-links" aria-label={language === 'ar' ? 'أقسام المشروع' : 'Project sections'}>
            <SmoothLink href="#overview">{copy.navOverview}</SmoothLink>
            <SmoothLink href="#solution">{copy.navSolution}</SmoothLink>
            {detail.features?.length ? <SmoothLink href="#features">{copy.navFeatures}</SmoothLink> : null}
            <SmoothLink href="#architecture">{copy.navArchitecture}</SmoothLink>
          </nav>
          <div className="dark-nav-actions">
            <LanguageToggle />
            <Link className="dark-resume" to="/">{copy.navProjects}</Link>
          </div>
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
                {getCategoryLabel(project.category, language)} · {project.year}
              </p>
              <h1>{project.title}</h1>
              <p className="dark-hero-deck">{project.summary}</p>
              <ul className="dark-tags">
                {project.tags.map((tag) => (
                  <li key={tag} dir="auto">{tag}</li>
                ))}
              </ul>
              <div className="dark-hero-cta">
                {project.demoUrl ? (
                  <a className="dark-btn dark-btn-primary" href={project.demoUrl} target="_blank" rel="noreferrer">
                    {copy.openLiveDemo}
                  </a>
                ) : null}
                {project.githubUrl ? (
                  <a
                    className="dark-btn"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${copy.viewSource}: ${project.title}`}
                  >
                    <svg
                      aria-hidden="true"
                      style={{ width: '1.05rem', height: '1.05rem', fill: 'currentColor', flex: '0 0 auto' }}
                    >
                      <use href="/icons.svg#github-icon" />
                    </svg>
                    {copy.viewSource}
                  </a>
                ) : null}
                {!hasLinks ? <p className="dark-availability">{copy.noLinks}</p> : null}
              </div>
            </motion.div>
          </section>

          <div className="dark-detail-body">
            <section id="overview" className="dark-detail-section">
              <Reveal>
                <p className="dark-kicker">{copy.overviewKicker}</p>
                <h2>{copy.overviewTitle}</h2>
                <p className="dark-detail-text">{detail.overview}</p>
              </Reveal>
            </section>

            <section id="problem" className="dark-detail-section">
              <Reveal>
                <p className="dark-kicker">{copy.problemKicker}</p>
                <h2>{copy.problemTitle}</h2>
                <p className="dark-detail-text">{detail.problem}</p>
              </Reveal>
            </section>

            <section id="solution" className="dark-detail-section">
              <Reveal>
                <p className="dark-kicker">{copy.solutionKicker}</p>
                <h2>{copy.solutionTitle}</h2>
                <p className="dark-detail-text">{detail.solution}</p>
              </Reveal>
            </section>

            <section id="role" className="dark-detail-section">
              <Reveal>
                <p className="dark-kicker">{copy.roleKicker}</p>
                <h2>{copy.roleTitle}</h2>
                <p className="dark-detail-text">{detail.role}</p>
              </Reveal>
            </section>

            <section id="stack" className="dark-detail-section">
              <Reveal>
                <p className="dark-kicker">{copy.stackKicker}</p>
                <h2>{copy.stackTitle}</h2>
                <ul className="dark-tags dark-tags-lg">
                  {detail.stack.map((item) => (
                    <li key={item} dir="auto">{item}</li>
                  ))}
                </ul>
              </Reveal>
            </section>

            {detail.features?.length ? (
              <section id="features" className="dark-detail-section">
                <Reveal>
                  <p className="dark-kicker">{copy.featuresKicker}</p>
                  <h2>{copy.featuresTitle}</h2>
                  <ul className="dark-detail-list">
                    {detail.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </Reveal>
              </section>
            ) : null}

            <section id="architecture" className="dark-detail-section">
              <Reveal>
                <p className="dark-kicker">{architectureNumber} · {copy.architectureLabel}</p>
                <h2>{copy.architectureTitle}</h2>
                <FlowDiagram steps={detail.architecture} tone={tone} />
              </Reveal>
            </section>

            <section id="challenges" className="dark-detail-section">
              <Reveal>
                <p className="dark-kicker">{challengesNumber} · {copy.challengesLabel}</p>
                <h2>{copy.challengesTitle}</h2>
                <ul className="dark-detail-list">
                  {detail.challenges.map((challenge) => (
                    <li key={challenge}>{challenge}</li>
                  ))}
                </ul>
              </Reveal>
            </section>

            {screenshots.length > 0 ? (
              <section id="screenshots" className="dark-detail-section">
                <Reveal>
                  <p className="dark-kicker">{screenshotsNumber} · {copy.artifactsLabel}</p>
                  <h2>{copy.screenshotsTitle}</h2>
                  <ProjectGallery projectTitle={project.title} screenshots={screenshots} />
                </Reveal>
              </section>
            ) : null}

            <div className="dark-detail-end">
              <Link className="dark-btn" to="/">{copy.backToAllProjects}</Link>
            </div>
          </div>
        </main>
      </div>
    </MotionConfig>
  )
}
