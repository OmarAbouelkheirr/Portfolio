import { useLanguage } from '../i18n/LanguageContext.tsx'
import { uiCopy } from '../i18n/content.ts'

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3.8 12h16.4M12 3.5c2 2.2 3 5 3 8.5s-1 6.3-3 8.5c-2-2.2-3-5-3-8.5s1-6.3 3-8.5Z" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage()
  const copy = uiCopy[language]
  const targetLabel = language === 'en' ? 'العربية' : 'English'

  return (
    <button
      type="button"
      className="language-toggle"
      onClick={toggleLanguage}
      aria-label={copy.switchLanguage}
      title={copy.switchLanguage}
    >
      <GlobeIcon />
      <span lang={language === 'en' ? 'ar' : 'en'} dir="auto">{targetLabel}</span>
    </button>
  )
}
