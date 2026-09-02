import { useState, useEffect } from 'react'
import { Link as ScrollLink, scroller } from 'react-scroll'
import { useLocation, useNavigate } from 'react-router-dom'
import { Code2, Menu, X, Sparkles, Send } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const { language, toggleLanguage, t } = useLanguage()
  
  const isHomePage = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: t('หน้าแรก', 'Home'), target: 'home' },
    { name: t('ทักษะ', 'Skills'), target: 'skills' },
    { name: t('ผลงาน', 'Projects'), target: 'projects' },
    { name: t('เส้นทาง', 'Journey'), target: 'timeline' },
    { name: t('ติดต่อ', 'Contact'), target: 'contact' },
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
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-[2px] shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-[#0B0F17] rounded-[10px] flex items-center justify-center">
              <Code2 className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold font-heading tracking-tight text-white flex items-center gap-1">
              Earth<span className="text-cyan-400">.dev</span>
            </span>
            <span className="text-[10px] text-slate-400 uppercase tracking-widest -mt-1 font-semibold">
              {t('ฟูลสแต็ก', 'Full Stack')}
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
          {navItems.map((item) => (
            isHomePage ? (
              <ScrollLink
                key={item.target}
                to={item.target}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                activeClass="!text-white bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 border-cyan-500/40"
                className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-full transition-all duration-300 cursor-pointer border border-transparent hover:border-slate-700"
              >
                {item.name}
              </ScrollLink>
            ) : (
              <button
                key={item.target}
                onClick={() => handleNavClick(item.target)}
                className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-full transition-all duration-300 cursor-pointer border border-transparent hover:border-slate-700 bg-transparent text-left"
              >
                {item.name}
              </button>
            )
          ))}
        </div>

        {/* Action Button, Language Toggle, & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          
          {/* Language Toggle Button */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-bold rounded-full bg-slate-900/90 border border-slate-800 text-slate-400 hover:text-white transition-all cursor-pointer shadow-md select-none"
            title={t('สลับภาษา / Switch Language', 'Switch Language / สลับภาษา')}
          >
            <span className={language === 'th' ? 'text-cyan-400 font-extrabold' : 'text-slate-500'}>TH</span>
            <span className="text-slate-700 font-normal">|</span>
            <span className={language === 'en' ? 'text-cyan-400 font-extrabold' : 'text-slate-500'}>EN</span>
          </button>

          {isHomePage ? (
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              offset={-80}
              className="hidden sm:flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              {t('ติดต่อฉัน', 'Get In Touch')}
            </ScrollLink>
          ) : (
            <button
              onClick={() => handleNavClick('contact')}
              className="hidden sm:flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer bg-transparent border-0"
            >
              <Send className="w-3.5 h-3.5" />
              {t('ติดต่อฉัน', 'Get In Touch')}
            </button>
          )}

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white focus:outline-none"
          >
            {isOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      <div 
        className={`md:hidden fixed inset-x-4 top-20 bg-[#0F172A]/95 backdrop-blur-2xl rounded-2xl border border-slate-800 p-6 shadow-2xl transition-all duration-300 ease-in-out origin-top ${
          isOpen ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-95 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-3">
          {navItems.map((item) => (
            isHomePage ? (
              <ScrollLink
                key={item.target}
                to={item.target}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={() => setIsOpen(false)}
                activeClass="!text-cyan-400 bg-slate-800/80 border-cyan-500/30"
                className="px-4 py-3 rounded-xl text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 border border-transparent transition-all duration-200"
              >
                {item.name}
              </ScrollLink>
            ) : (
              <button
                key={item.target}
                onClick={() => handleNavClick(item.target)}
                className="px-4 py-3 rounded-xl text-left text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 border border-transparent transition-all duration-200 bg-transparent animate-none"
              >
                {item.name}
              </button>
            )
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
                {t('ติดต่อฉัน', 'Contact Me')}
              </ScrollLink>
            ) : (
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-xl shadow-lg shadow-cyan-500/20 cursor-pointer border-0"
              >
                <Sparkles className="w-4 h-4" />
                {t('ติดต่อฉัน', 'Contact Me')}
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
