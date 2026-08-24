import { useEffect, useState } from 'react'
import type { ProjectScreenshot } from '../data/projectImages.ts'

interface ProjectGalleryProps {
  projectTitle: string
  screenshots: ProjectScreenshot[]
}

export function ProjectGallery({ projectTitle, screenshots }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const close = () => setActiveIndex(null)
  const showPrevious = () => {
    setActiveIndex((current) => {
      if (current === null) return current
      return (current - 1 + screenshots.length) % screenshots.length
    })
  }
  const showNext = () => {
    setActiveIndex((current) => {
      if (current === null) return current
      return (current + 1) % screenshots.length
    })
  }

  useEffect(() => {
    if (activeIndex === null) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close()
      if (event.key === 'ArrowLeft') showPrevious()
      if (event.key === 'ArrowRight') showNext()
    }

    document.body.classList.add('gallery-open')
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.classList.remove('gallery-open')
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [activeIndex, screenshots.length])

  const activeScreenshot = activeIndex === null ? null : screenshots[activeIndex]

  return (
    <>
      <div className="project-gallery-grid">
        {screenshots.map((screenshot, index) => (
          <figure className="dark-shot project-gallery-card" key={screenshot.src}>
            <button
              type="button"
              className="project-gallery-trigger"
              onClick={() => setActiveIndex(index)}
              aria-label={`Open ${screenshot.title} in gallery`}
            >
              <div className="dark-hero-frame dark-shot-frame">
                <img
                  src={screenshot.src}
                  alt={`${projectTitle} — ${screenshot.title}`}
                  loading="lazy"
                />
                <span className="project-gallery-open-label">View image</span>
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
          aria-label={`${projectTitle} image gallery`}
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
              <button type="button" className="project-lightbox-close" onClick={close} aria-label="Close gallery">×</button>
            </div>

            <div className="project-lightbox-stage">
              {screenshots.length > 1 ? (
                <button type="button" className="project-lightbox-nav project-lightbox-prev" onClick={showPrevious} aria-label="Previous image">‹</button>
              ) : null}

              <img
                src={activeScreenshot.src}
                alt={`${projectTitle} — ${activeScreenshot.title}`}
              />

              {screenshots.length > 1 ? (
                <button type="button" className="project-lightbox-nav project-lightbox-next" onClick={showNext} aria-label="Next image">›</button>
              ) : null}
            </div>

            <div className="project-lightbox-caption">
              <strong>{activeScreenshot.title}</strong>
              <p>{activeScreenshot.description}</p>
            </div>

            {screenshots.length > 1 ? (
              <div className="project-lightbox-thumbs" aria-label="Gallery thumbnails">
                {screenshots.map((screenshot, index) => (
                  <button
                    type="button"
                    key={screenshot.src}
                    className={index === activeIndex ? 'is-active' : ''}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`View ${screenshot.title}`}
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
