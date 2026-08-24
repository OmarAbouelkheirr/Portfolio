import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'

export type Language = 'en' | 'ar'
export type Direction = 'ltr' | 'rtl'

interface LanguageContextValue {
  language: Language
  direction: Direction
  setLanguage: (language: Language) => void
  toggleLanguage: () => void
}

const STORAGE_KEY = 'portfolio-language'
const LanguageContext = createContext<LanguageContextValue | null>(null)

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') return 'en'

  try {
    return window.localStorage.getItem(STORAGE_KEY) === 'ar' ? 'ar' : 'en'
  } catch {
    return 'en'
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage)
  const direction: Direction = language === 'ar' ? 'rtl' : 'ltr'

  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = direction
    document.documentElement.dataset.language = language
    document.body.dir = direction
    document.title = language === 'ar' ? 'عمر أبو الخير · مهندس برمجيات' : 'Omar Aboelkheir · Software Engineer'

    try {
      window.localStorage.setItem(STORAGE_KEY, language)
    } catch {
      // Local storage may be unavailable in privacy-restricted browsing contexts.
    }
  }, [direction, language])

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      direction,
      setLanguage,
      toggleLanguage: () => setLanguage((current) => (current === 'en' ? 'ar' : 'en')),
    }),
    [direction, language],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used inside LanguageProvider')
  }
  return context
}
