import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, Github, CheckCircle, Code, Layers, Server } from 'lucide-react'

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        
        {/* Backdrop Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-3xl glass-card bg-[#0F172A] border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden z-10 my-8"
        >
          {/* Header Image / Cover */}
          <div className="relative h-64 sm:h-80 w-full bg-slate-900 overflow-hidden border-b border-slate-800">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/40 to-transparent" />
            
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-950/70 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-900 transition-colors shadow-lg"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Category Tag Overlay */}
            <div className="absolute bottom-4 left-6">
              <span className="px-3 py-1 text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 border border-cyan-500/30 rounded-full">
                {project.categoryLabel || 'Featured Project'}
              </span>
            </div>
          </div>

          {/* Modal Content Body */}
          <div className="p-6 sm:p-8 space-y-6">
            
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white mb-2">
                {project.title}
              </h2>
              <p className="text-slate-300 text-base font-light leading-relaxed">
                {project.fullDescription || project.description}
              </p>
            </div>

            {/* Tech Stack Badges */}
            <div>
              <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                <Code className="w-4 h-4 text-cyan-400" /> Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-3 py-1 text-xs font-mono font-medium rounded-xl bg-slate-800 border border-slate-700 text-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Features List */}
            {project.features && project.features.length > 0 && (
              <div>
                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" /> Highlights & Key Features
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 bg-slate-900/60 p-3 rounded-xl border border-slate-800/80">
                      <span className="text-cyan-400 font-bold">•</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Action Buttons */}
            <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-end gap-3">
              <button
                onClick={onClose}
                className="px-5 py-2.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
              >
                Close
              </button>
              
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-xl transition-all shadow-md"
                >
                  <Github className="w-4 h-4 text-cyan-400" />
                  View GitHub Source
                </a>
              )}
            </div>

          </div>
        </motion.div>

      </div>
    </AnimatePresence>
  )
}

export default ProjectModal
