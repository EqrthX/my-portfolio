import { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('portfolio-lang') || 'en'
  })

  useEffect(() => {
    localStorage.setItem('portfolio-lang', language)
  }, [language])

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'en' ? 'th' : 'en'))
  }

  const t = (th, en) => {
    return language === 'th' ? th : en
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
