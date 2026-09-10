import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Reveal } from './Reveal.tsx'
import { useLanguage } from '../i18n/LanguageContext.tsx'
import { getLocalizedCertificates, uiCopy } from '../i18n/content.ts'
import {
  CERTIFICATE_CATEGORIES,
  LINKEDIN_CERTS_URL,
  type CertificateCategory,
} from '../data/certificatesData.ts'

export function CertificatesSection() {
  const { language } = useLanguage()
  const copy = uiCopy[language]
  const [activeCategory, setActiveCategory] = useState<CertificateCategory>('All')
  const [showAll, setShowAll] = useState<boolean>(false)

  const localizedCertificates = useMemo(() => {
    return getLocalizedCertificates(language)
  }, [language])

  const filteredCertificates = useMemo(() => {
    if (activeCategory === 'All') {
      return localizedCertificates
    }
    return localizedCertificates.filter((cert) => {
      // Map category back if localized
      if (language === 'ar') {
        const catMap: Record<string, CertificateCategory> = {
          'الكل': 'All',
          'C# و .NET': 'C# & .NET',
          'الخوارزميات وهياكل البيانات': 'Algorithms & DS',
          'قواعد البيانات و SQL': 'Databases & SQL',
          'الويب والـ APIs': 'Web & APIs',
          'الأساسيات وعلوم الحاسب': 'Foundations',
        }
        return catMap[cert.category as string] === activeCategory || cert.category === activeCategory
      }
      return cert.category === activeCategory
    })
  }, [localizedCertificates, activeCategory, language])

  const displayedCertificates = useMemo(() => {
    if (showAll || activeCategory !== 'All') {
      return filteredCertificates
    }
    return filteredCertificates.slice(0, 6)
  }, [filteredCertificates, showAll, activeCategory])

  return (
    <section className="dark-section dark-section-raise" id="certificates">
      <div className="dark-section-head">
        <Reveal>
          <p className="dark-kicker">{copy.certsKicker}</p>
          <h2>{copy.certsTitle}</h2>
          <p className="dark-section-deck">{copy.certsDeck}</p>
        </Reveal>
      </div>

      {/* Category Filter Pills */}
      <div className="dark-filters-wrap">
        <Reveal delay={0.1}>
          <div className="dark-filters" role="tablist">
            {CERTIFICATE_CATEGORIES.map((cat) => {
              const label =
                language === 'ar'
                  ? cat === 'All'
                    ? 'الكل'
                    : cat === 'C# & .NET'
                    ? 'C# و .NET'
                    : cat === 'Algorithms & DS'
                    ? 'الخوارزميات وهياكل البيانات'
                    : cat === 'Databases & SQL'
                    ? 'قواعد البيانات و SQL'
                    : cat === 'Web & APIs'
                    ? 'الويب والـ APIs'
                    : 'الأساسيات'
                  : cat

              const isActive = activeCategory === cat
              return (
                <button
                  key={cat}
                  type="button"
                  className={`dark-filter-btn${isActive ? ' active' : ''}`}
                  onClick={() => {
                    setActiveCategory(cat)
                    if (cat !== 'All') setShowAll(true)
                  }}
                >
                  {label}
                  {cat === 'All' && (
                    <span className="dark-filter-count">{localizedCertificates.length}</span>
                  )}
                </button>
              )
            })}
          </div>
        </Reveal>
      </div>

      {/* Certificates Grid */}
      <motion.div layout className="dark-certs-grid">
        <AnimatePresence mode="popLayout">
          {displayedCertificates.map((cert, index) => (
            <motion.div
              layout
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.25) }}
            >
              <div className="dark-cert-card">
                <div className="dark-cert-top">
                  <div className="dark-cert-badge-row">
                    <span className="dark-cert-cat">{cert.category}</span>
                    <span className="dark-cert-date">
                      {copy.issuedDateLabel}: {cert.issueDate}
                    </span>
                  </div>

                  <div className="dark-cert-header">
                    <div className="dark-cert-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="8" r="7" />
                        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                      </svg>
                    </div>
                    <div>
                      <h3>{cert.title}</h3>
                      <div className="dark-cert-issuer">
                        <span>{cert.issuer}</span>
                        <span className="dark-cert-verified-check" title="Verified Credential">✓</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="dark-cert-body">
                  <div className="dark-cert-credential">
                    <span className="dark-cert-cred-label">{copy.viewCredential}:</span>
                    <code className="dark-cert-cred-code">{cert.credentialId}</code>
                  </div>

                  <ul className="dark-tags">
                    {cert.tags.map((tag) => (
                      <li key={tag} dir="auto">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="dark-cert-actions">
                  <a
                    href={cert.courseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dark-btn dark-btn-secondary dark-cert-btn"
                  >
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    <span>{copy.viewCoursePage}</span>
                  </a>

                  <a
                    href={LINKEDIN_CERTS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dark-btn dark-btn-ghost dark-cert-btn"
                    title={copy.viewLinkedInCerts}
                  >
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Show All Toggle Button */}
      {activeCategory === 'All' && filteredCertificates.length > 6 && (
        <div className="dark-certs-toggle">
          <Reveal delay={0.2}>
            <button
              type="button"
              className="dark-btn dark-btn-primary dark-toggle-btn"
              onClick={() => setShowAll((prev) => !prev)}
            >
              <span>{showAll ? copy.showFeaturedCerts : `${copy.showAllCerts} (${localizedCertificates.length})`}</span>
              <span className={`dark-toggle-arrow${showAll ? ' expanded' : ''}`}>↓</span>
            </button>
          </Reveal>
        </div>
      )}

      {/* Direct LinkedIn CTA Banner */}
      <div className="dark-courses-banner">
        <Reveal delay={0.25}>
          <div className="dark-courses-banner-inner">
            <div className="dark-courses-banner-text">
              <h4>
                {language === 'ar'
                  ? 'الشهادات والتعلم المستمر على LinkedIn'
                  : 'Professional Credentials & Continuous Learning'}
              </h4>
              <p>
                {language === 'ar'
                  ? 'سجل متكامل من الشهادات المعتمدة في الخوارزميات، هندسة البرمجيات، قواعد البيانات، وتطوير الويب.'
                  : 'A comprehensive collection of verified credentials in algorithms, software engineering, database systems, and web development.'}
              </p>
            </div>
            <a
              href={LINKEDIN_CERTS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="dark-btn dark-btn-primary"
            >
              <svg className="dark-btn-icon" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
              {copy.viewLinkedInCerts}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
