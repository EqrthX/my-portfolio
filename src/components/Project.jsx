import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { FolderGit2, Github, Eye } from 'lucide-react'
import { projects } from '../data/projects'
import { useLanguage } from '../context/LanguageContext'

const Project = () => {
  const navigate = useNavigate()
  const { language, t } = useLanguage()

  return (
    <section id="projects" className="relative py-24 min-h-screen flex flex-col justify-center items-center">

      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-10 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <FolderGit2 className="w-3.5 h-3.5" />
            {t('ผลงานทั้งหมด', 'Portfolio Showcase')}
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight mb-4 text-slate-900 dark:text-white">
            {t('โปรเจกต์ที่', 'Featured ')}<span className="text-gradient">{t('แนะนำ', 'Projects')}</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg font-light">
            {t('การรวบรวมผลงานการพัฒนาเว็บแอปพลิเคชัน โมบายแอป และบริการ API หลังบ้านที่ผมเคยสร้างขึ้น', 'A showcase of web applications, mobile projects, and backend API services I have built.')}
          </p>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {projects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="glass-card glass-card-hover rounded-3xl overflow-hidden border border-slate-800/80 flex flex-col justify-between group"
              >
                <div>
                  {/* Image Container with Hover Overlay */}
                  <div className="relative h-56 w-full bg-slate-900 overflow-hidden border-b border-slate-800/80">
                    <img
                      src={project.image}
                      alt={project.title[language] || project.title.en}
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-slate-955/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-xs">
                      <button
                        onClick={() => navigate(`/projects/${project.id}`)}
                        className="p-3 rounded-full bg-cyan-500 text-white hover:bg-cyan-400 transition-colors shadow-lg cursor-pointer"
                        title={t('ดูรายละเอียด', 'View Details')}
                      >
                        <Eye className="w-5 h-5" />
                      </button>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-full bg-slate-900 text-slate-200 hover:text-white hover:bg-slate-800 transition-colors border border-slate-700 shadow-lg"
                          title={t('ดูโค้ดแหล่งข้อมูล', 'GitHub Source')}
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-cyan-500 dark:text-cyan-400 mb-2 block">
                      {project.categoryLabel[language] || project.categoryLabel.en}
                    </span>
                    <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                      {project.title[language] || project.title.en}
                    </h3>
                    <p className="text-slate-400 text-sm font-light leading-relaxed mb-4 line-clamp-3">
                      {project.description[language] || project.description.en}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 text-[11px] font-mono rounded-md bg-slate-900 text-slate-300 border border-slate-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action Bar inside Card */}
                <div className="px-6 pb-6 pt-0 flex items-center justify-between border-t border-slate-800/40 pt-4">
                  <button
                    onClick={() => navigate(`/projects/${project.id}`)}
                    className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>{t('ภาพรวม & รายละเอียด', 'Overview & Details')}</span>
                    <Eye className="w-3.5 h-3.5" />
                  </button>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
                    >
                      <span>{t('ดูโค้ด', 'Code')}</span>
                      <Github className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  )
}

export default Project
