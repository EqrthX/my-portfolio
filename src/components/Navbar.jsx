import { useState, useEffect } from 'react'
import { Link as ScrollLink, scroller } from 'react-scroll'
import { useLocation, useNavigate } from 'react-router-dom'
import { Code2, Menu, X, Sparkles, Send, Sun, Moon } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useTheme } from '../context/ThemeContext'

const sectionIds = ['home', 'skills', 'projects', 'timeline', 'contact']

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const location = useLocation()
  const navigate = useNavigate()
  const { t, i18n } = useTranslation()
  const language = i18n.resolvedLanguage
  const toggleLanguage = () => i18n.changeLanguage(language === 'th' ? 'en' : 'th')
  const { toggleTheme, isDark } = useTheme()

  const isHomePage = location.pathname === '/'

  useEffect(() => {
    let frame = 0
    const updateSection = () => {
      frame = 0
      setScrolled(window.scrollY > 20)
      if (!isHomePage) return

      // Match the section just below the fixed navbar, including short sections.
      let current = 'home'
      for (const id of sectionIds) {
        const section = document.getElementById(id)
        if (section && section.getBoundingClientRect().top <= 96) current = id
      }
      const atBottom = window.scrollY > 0 &&
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2
      setActiveSection(atBottom ? 'contact' : current)
    }
    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateSection)
    }
    const observer = new ResizeObserver(scheduleUpdate)
    if (isHomePage) {
      sectionIds.forEach(id => {
        const section = document.getElementById(id)
        if (section) observer.observe(section)
      })
    }
    updateSection()
    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate)
    return () => {
      window.cancelAnimationFrame(frame)
      observer.disconnect()
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)
    }
  }, [isHomePage])

  const currentSection = isHomePage ? activeSection : 'projects'

  const navItems = [
    { name: t('navbar.home'), target: 'home' },
    { name: t('navbar.skills'), target: 'skills' },
    { name: t('navbar.projects'), target: 'projects' },
    { name: t('navbar.journey'), target: 'timeline' },
    { name: t('navbar.contact'), target: 'contact' },
  ]

  const handleLogoClick = () => {
    if (isHomePage) {
      scroller.scrollTo('home', { smooth: true, duration: 500 })
    } else {
      navigate('/', { state: { scrollTo: 'home' } })
    }
  }

  const handleNavClick = (target) => {
    setIsOpen(false)
    if (isHomePage) {
      scroller.scrollTo(target, { smooth: true, duration: 500, offset: -80 })
    } else {
      navigate('/', { state: { scrollTo: target } })
    }
  }

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3 shadow-lg shadow-black/20' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Brand Logo */}
        <div
          onClick={handleLogoClick}
          className="flex items-center gap-2 sm:gap-3 cursor-pointer group shrink-0"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-[2px] shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-[#0B0F17] rounded-[10px] flex items-center justify-center">
              <Code2 className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold font-heading tracking-tight text-black dark:text-white flex items-center gap-1">
              Earth<span className="text-cyan-400">.dev</span>
            </span>
            <span className="text-[10px] text-slate-400 uppercase tracking-widest -mt-1 font-semibold">
              {t('navbar.fullStack')}
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
          {navItems.map(item => (
            <button
              key={item.target}
              type="button"
              onClick={() => handleNavClick(item.target)}
              aria-current={currentSection === item.target ? 'location' : undefined}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 cursor-pointer border ${
                currentSection === item.target
                  ? 'text-white bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 border-cyan-500/40'
                  : 'text-slate-300 hover:text-white border-transparent hover:border-slate-700'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Action Button, Language Toggle, & Mobile Menu Toggle */}
        <div className="flex items-center gap-1.5 sm:gap-3">

          {/* Language Toggle Button */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-bold rounded-full bg-slate-900/90 border border-slate-800 text-slate-400 hover:text-white transition-all cursor-pointer shadow-md select-none"
            title={t('navbar.switchLanguage')}
          >
            <span className={language === 'th' ? 'text-cyan-400 font-extrabold' : 'text-slate-500'}>TH</span>
            <span className="text-slate-700 font-normal">|</span>
            <span className={language === 'en' ? 'text-cyan-400 font-extrabold' : 'text-slate-500'}>EN</span>
          </button>

          {/* Theme Toggle Button (Dark / Light) */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-slate-900/90 border border-slate-800 text-amber-400 hover:text-amber-300 transition-all cursor-pointer shadow-md select-none hover:scale-105 active:scale-95 flex items-center justify-center"
            title={isDark ? t('navbar.switchToLightMode') : t('navbar.switchToDarkMode')}
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-amber-400 animate-spin-slow" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-400" />
            )}
          </button>

          {isHomePage ? (
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              offset={-80}
              className="hidden lg:flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              {t('navbar.getInTouch')}
            </ScrollLink>
          ) : (
            <button
              onClick={() => handleNavClick('contact')}
              className="hidden lg:flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer bg-transparent border-0"
            >
              <Send className="w-3.5 h-3.5" />
              {t('navbar.getInTouch2')}
            </button>
          )}

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={t('navbar.toggleMenu')}
            className="lg:hidden p-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white focus:outline-none"
          >
            {isOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`lg:hidden fixed inset-x-4 top-20 bg-[#0F172A]/95 backdrop-blur-2xl rounded-2xl border border-slate-800 p-6 shadow-2xl transition-all duration-300 ease-in-out origin-top ${isOpen ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-95 pointer-events-none'
          }`}
      >
        <div className="flex flex-col gap-3">
          {navItems.map(item => (
            <button
              key={item.target}
              type="button"
              onClick={() => handleNavClick(item.target)}
              aria-current={currentSection === item.target ? 'location' : undefined}
              className={`px-4 py-3 rounded-xl text-left text-base font-medium border transition-all duration-200 ${
                currentSection === item.target
                  ? 'text-cyan-400 bg-slate-800/80 border-cyan-500/30'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/50 border-transparent'
              }`}
            >
              {item.name}
            </button>
          ))}
          <div className="pt-2 border-t border-slate-800">
            {isHomePage ? (
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-xl shadow-lg shadow-cyan-500/20 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                {t('navbar.contactMe')}
              </ScrollLink>
            ) : (
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-xl shadow-lg shadow-cyan-500/20 cursor-pointer border-0"
              >
                <Sparkles className="w-4 h-4" />
                {t('navbar.contactMe2')}
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
