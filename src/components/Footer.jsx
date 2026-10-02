import { Link, animateScroll as scroll } from 'react-scroll'
import { Code2, Github, Facebook, Mail, ArrowUp } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()

  const scrollToTop = () => {
    scroll.scrollToTop()
  }

  const navLinks = [
    { target: 'home', label: t('footer.home') },
    { target: 'skills', label: t('footer.skills') },
    { target: 'projects', label: t('footer.projects') },
    { target: 'timeline', label: t('footer.journey') },
    { target: 'contact', label: t('footer.contact') },
  ]

  return (
    <footer className="relative bg-slate-100 dark:bg-[#070A10] border-t border-slate-200 dark:border-slate-800/80 text-slate-600 dark:text-slate-400 py-12 transition-colors duration-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200 dark:border-slate-800/60">
          
          {/* Logo & Info */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-[2px]">
              <div className="w-full h-full bg-white dark:bg-[#0B0F17] rounded-[10px] flex items-center justify-center">
                <Code2 className="w-5 h-5 text-cyan-500 dark:text-cyan-400" />
              </div>
            </div>
            <div>
              <span className="text-lg font-bold font-heading text-slate-900 dark:text-white">Nontprawitch Saetang</span>
              <p className="text-xs text-slate-500 dark:text-slate-500">{t('footer.fullStackDeveloperPortfolio')}</p>
            </div>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
            {navLinks.map((item) => (
              <Link
                key={item.target}
                to={item.target}
                smooth={true}
                duration={500}
                offset={-80}
                className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-pointer"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/EqrthX"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-200/80 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-slate-700 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="mailto:nontprawitch.saetang@gmail.com"
              className="p-2.5 rounded-xl bg-slate-200/80 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-slate-700 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-200/80 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-slate-700 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light">
          <p>
            {t('footer.nontprawitchSaetangEarthAllRightsReserved', { year: new Date().getFullYear() })}
          </p>
          
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-500">
              {t('footer.builtWithReactTailwindCss')}
            </span>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/30 transition-all flex items-center gap-1 cursor-pointer"
              title={t('footer.backToTop')}
            >
              <ArrowUp className="w-4 h-4" />
              <span className="text-[10px] font-bold uppercase tracking-wider">{t('footer.top')}</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
