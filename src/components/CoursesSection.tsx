import { Reveal } from './Reveal.tsx'
import { useLanguage } from '../i18n/LanguageContext.tsx'
import { getLocalizedCourses, uiCopy } from '../i18n/content.ts'
import { profile } from '../data/portfolioData.ts'

export function CoursesSection() {
  const { language } = useLanguage()
  const copy = uiCopy[language]
  const localizedCourses = getLocalizedCourses(language)

  return (
    <section className="dark-section dark-section-raise" id="courses">
      <div className="dark-section-head">
        <Reveal>
          <p className="dark-kicker">{copy.coursesKicker}</p>
          <h2>{copy.coursesTitle}</h2>
          <p className="dark-section-deck">{copy.coursesDeck}</p>
        </Reveal>
      </div>

      <div className="dark-courses-grid">
        {localizedCourses.map((course, index) => (
          <Reveal key={course.id} delay={Math.min(index * 0.06, 0.3)}>
            <div className="dark-course-card">
              <div className="dark-course-badge-row">
                <span className="dark-course-cat">{course.category}</span>
                <span className="dark-course-count">{course.lessonsCount}</span>
              </div>
              
              <div className="dark-course-header">
                <div className="dark-course-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <h3>{course.title}</h3>
              </div>

              <p className="dark-course-summary">{course.summary}</p>

              <ul className="dark-tags">
                {course.tags.map((tag) => (
                  <li key={tag} dir="auto">{tag}</li>
                ))}
              </ul>

              <a
                href={course.playlistUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="dark-card-go"
              >
                <span>{copy.watchCourse}</span>
                <span className="dark-arrow" aria-hidden="true">→</span>
              </a>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="dark-courses-banner">
        <Reveal delay={0.25}>
          <div className="dark-courses-banner-inner">
            <div className="dark-courses-banner-text">
              <h4>3MORA TECH — عموره تك</h4>
              <p>
                {language === 'ar'
                  ? 'قناة تقنية مخصصة لشرح وتطوير حلول الذكاء الاصطناعي، أنظمة علوم الحاسب، والبرمجة باللغة العربية.'
                  : 'Technical channel dedicated to explaining AI, computer science systems, and software engineering.'}
              </p>
            </div>
            <a
              href={profile.youtube || 'https://www.youtube.com/@3mora-tech'}
              target="_blank"
              rel="noopener noreferrer"
              className="dark-btn dark-btn-primary"
            >
              <svg className="dark-btn-icon" viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              {copy.channelButton}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
