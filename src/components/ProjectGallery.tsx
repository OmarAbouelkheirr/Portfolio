import { useCallback, useEffect, useState } from 'react'
import type { ProjectScreenshot } from '../data/projectImages.ts'
import { useLanguage } from '../i18n/LanguageContext.tsx'
import { uiCopy } from '../i18n/content.ts'

interface ProjectGalleryProps {
  projectTitle: string
  screenshots: ProjectScreenshot[]
}

function ChevronLeftIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14.5 5 7.5 12l7 7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ChevronRightIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m9.5 5 7 7-7 7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function ProjectGallery({ projectTitle, screenshots }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const { language, direction } = useLanguage()
  const copy = uiCopy[language]

  const close = useCallback(() => setActiveIndex(null), [])
  const showPrevious = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null) return current
      return (current - 1 + screenshots.length) % screenshots.length
    })
  }, [screenshots.length])

  const showNext = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null) return current
      return (current + 1) % screenshots.length
    })
  }, [screenshots.length])

  useEffect(() => {
    if (activeIndex === null) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close()
      if (event.key === 'ArrowLeft') {
        if (direction === 'rtl') showNext()
        else showPrevious()
      }
      if (event.key === 'ArrowRight') {
        if (direction === 'rtl') showPrevious()
        else showNext()
      }
    }

    document.body.classList.add('gallery-open')
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.classList.remove('gallery-open')
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [activeIndex, close, direction, showNext, showPrevious])

  const activeScreenshot = activeIndex === null ? null : screenshots[activeIndex]
  const previousIcon = direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />
  const nextIcon = direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />

  return (
    <>
      <div className="project-gallery-grid">
        {screenshots.map((screenshot, index) => (
          <figure className="dark-shot project-gallery-card" key={screenshot.src}>
            <button
              type="button"
              className="project-gallery-trigger"
              onClick={() => setActiveIndex(index)}
              aria-label={`${copy.openInGallery}: ${screenshot.title}`}
            >
              <div className="dark-hero-frame dark-shot-frame">
                <img
                  src={screenshot.src}
                  alt={`${projectTitle} — ${screenshot.title}`}
                  loading="lazy"
                />
                <span className="project-gallery-open-label">{copy.viewImage}</span>
              </div>
            </button>
            <figcaption>
              <strong>{screenshot.title}</strong>
              <span>{screenshot.description}</span>
            </figcaption>
          </figure>
        ))}
      </div>

      {activeScreenshot && activeIndex !== null ? (
        <div
          className="project-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${projectTitle} — ${copy.imageGallery}`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) close()
          }}
        >
          <div className="project-lightbox-panel">
            <div className="project-lightbox-topbar">
              <div>
                <strong>{activeScreenshot.title}</strong>
                <span>{activeIndex + 1} / {screenshots.length}</span>
              </div>
              <button type="button" className="project-lightbox-close" onClick={close} aria-label={copy.closeGallery}>×</button>
            </div>

            <div className="project-lightbox-stage">
              {screenshots.length > 1 ? (
                <button type="button" className="project-lightbox-nav project-lightbox-prev" onClick={showPrevious} aria-label={copy.previousImage}>
                  {previousIcon}
                </button>
              ) : null}

              <img
                src={activeScreenshot.src}
                alt={`${projectTitle} — ${activeScreenshot.title}`}
              />

              {screenshots.length > 1 ? (
                <button type="button" className="project-lightbox-nav project-lightbox-next" onClick={showNext} aria-label={copy.nextImage}>
                  {nextIcon}
                </button>
              ) : null}
            </div>

            <div className="project-lightbox-caption">
              <strong>{activeScreenshot.title}</strong>
              <p>{activeScreenshot.description}</p>
            </div>

            {screenshots.length > 1 ? (
              <div className="project-lightbox-thumbs" aria-label={copy.galleryThumbnails}>
                {screenshots.map((screenshot, index) => (
                  <button
                    type="button"
                    key={screenshot.src}
                    className={index === activeIndex ? 'is-active' : ''}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`${copy.viewImage}: ${screenshot.title}`}
                    aria-current={index === activeIndex ? 'true' : undefined}
                  >
                    <img src={screenshot.src} alt="" loading="lazy" />
                  </button>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  )
}
