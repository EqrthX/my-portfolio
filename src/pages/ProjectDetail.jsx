import { useState, useMemo, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Github, CheckCircle, Code, Layers, ZoomIn, X, ChevronLeft, ChevronRight, Images, Video } from 'lucide-react'
import { projects } from '../data/projects'
import { useLanguage } from '../context/LanguageContext'

const ProjectDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { language, t } = useLanguage()
  
  // State for image lightbox/modal
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Find project by ID
  const project = projects.find(p => p.id === parseInt(id || '1', 10))

  // Collect all unique images for this project
  const allImages = useMemo(() => {
    if (!project) return []
    const list = []
    if (project.image) list.push(project.image)
    if (project.gallery && Array.isArray(project.gallery)) {
      project.gallery.forEach(img => {
        if (img && !list.includes(img)) list.push(img)
      })
    }
    if (project.modules && Array.isArray(project.modules)) {
      project.modules.forEach(m => {
        if (m.image && !list.includes(m.image)) list.push(m.image)
      })
    }
    return list
  }, [project])

  // Get active screen info for current lightbox image
  const currentImageInfo = useMemo(() => {
    const currentImg = allImages[currentImageIndex]
    if (!currentImg || !project) return null
    // Search in project modules for an exact image match
    const foundModule = project.modules?.find(m => m.image === currentImg)
    if (foundModule) {
      return {
        title: foundModule.title[language] || foundModule.title.en,
        description: foundModule.description[language] || foundModule.description.en,
        features: foundModule.features ? (foundModule.features[language] || foundModule.features.en) : []
      }
    }
    return {
      title: `${t('ภาพตัวอย่างระบบที่', 'System Screen')} ${currentImageIndex + 1}: ${project.title[language] || project.title.en}`,
      description: project.fullDescription ? (project.fullDescription[language] || project.fullDescription.en) : (project.description[language] || project.description.en),
      features: []
    }
  }, [allImages, currentImageIndex, project, language, t])

  const openLightbox = (imgUrl) => {
    const idx = allImages.indexOf(imgUrl)
    if (idx !== -1) {
      setCurrentImageIndex(idx)
    } else {
      setCurrentImageIndex(0)
    }
    setIsModalOpen(true)
  }

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (!isModalOpen) return
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false)
      } else if (e.key === 'ArrowLeft') {
        setCurrentImageIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1))
      } else if (e.key === 'ArrowRight') {
        setCurrentImageIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1))
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [isModalOpen, allImages])

  if (!project) {
    return (
      <div className="min-h-screen pt-28 pb-16 flex flex-col justify-center items-center px-4">
        <h2 className="text-2xl font-bold mb-4">{t('ไม่พบข้อมูลโปรเจกต์', 'Project not found')}</h2>
        <button 
          onClick={() => navigate('/')}
          className="px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-white rounded-xl transition-colors font-semibold"
        >
          {t('กลับสู่หน้าแรก', 'Back to Home')}
        </button>
      </div>
    )
  }

  const featuresList = project.features[language] || project.features.en || []

  return (
    <div className="pt-28 pb-20 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/', { state: { scrollTo: 'projects' } })}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors shadow-lg cursor-pointer text-sm font-semibold"
        >
          <ArrowLeft className="w-4 h-4 text-cyan-400" />
          {t('กลับหน้าผลงาน', 'Back to Projects')}
        </motion.button>

        {/* Project Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-card bg-[#0F172A]/80 border border-slate-800/80 rounded-3xl overflow-hidden shadow-2xl"
        >
          {/* Cover Image */}
          <div 
            onClick={() => openLightbox(project.image)}
            className="group relative h-64 sm:h-[420px] w-full bg-slate-900 overflow-hidden border-b border-slate-800 cursor-pointer"
          >
            <img 
              src={project.image} 
              alt={project.title[language] || project.title.en}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/30 to-transparent" />
            
            {/* Zoom Hint Overlay */}
            <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-900/90 backdrop-blur-xs text-cyan-300 px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-2 border border-slate-700 shadow-xl">
              <ZoomIn className="w-4 h-4 text-cyan-400" />
              <span>{t('คลิกเพื่อขยายภาพ', 'Click to enlarge')}</span>
            </div>

            {/* Category Tag Overlay */}
            <div className="absolute bottom-6 left-8">
              <span className="px-3.5 py-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 border border-cyan-500/30 rounded-full shadow-lg">
                {project.categoryLabel[language] || project.categoryLabel.en}
              </span>
            </div>
          </div>

          {/* Details Body */}
          <div className="p-8 sm:p-12 space-y-12">
            
            {/* Title & Description */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
                {project.title[language] || project.title.en}
              </h1>
              <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
                {(project.fullDescription && project.fullDescription[language]) || project.description[language] || project.description.en}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="space-y-4">
              <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                <Code className="w-4 h-4 text-cyan-400" /> {t('เทคโนโลยีที่ใช้', 'Technologies Used')}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {project.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-3 py-1.5 text-xs sm:text-sm font-mono font-medium rounded-xl bg-slate-800 border border-slate-700/80 text-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Highlights / Features */}
            {featuresList.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" /> {t('ภาพรวม & ไฮไลท์ของระบบ', 'Key Features & Highlights')}
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {featuresList.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-300 bg-slate-900/50 p-4 rounded-2xl border border-slate-800/80">
                      <span className="text-cyan-400 font-bold mt-0.5">•</span>
                      <span className="leading-relaxed">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Project Walkthrough Modules */}
            {project.modules && project.modules.length > 0 && (
              <div className="space-y-10 pt-10 border-t border-slate-800/60">
                
                {/* Section Subtitle */}
                <div className="text-center md:text-left max-w-3xl">
                  <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest flex items-center justify-center md:justify-start gap-2 mb-2">
                    <Layers className="w-4 h-4 text-cyan-400" /> {t('เจาะลึกรายละเอียดทุกหน้าจอระบบ', 'System Screens Walkthrough & Modules')}
                  </h3>
                  <p className="text-slate-400 text-sm font-light leading-relaxed">
                    {t('รายละเอียดและฟังก์ชันการทำงานของแต่ละหน้าจอในโปรเจกต์นี้', 'Detailed explanation and key capabilities for each system screen in this project.')}
                  </p>
                </div>

                <div className="space-y-12">
                  {project.modules.map((mod, idx) => {
                    const isEven = idx % 2 === 0
                    const moduleFeatures = mod.features[language] || mod.features.en || []

                    return (
                      <div 
                        key={idx} 
                        className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}
                      >
                        {/* Image side - takes 6 cols */}
                        <div className="lg:col-span-6">
                          <div 
                            onClick={() => openLightbox(mod.image)}
                            className="group relative rounded-3xl overflow-hidden border border-slate-800/80 bg-slate-900/20 p-2.5 hover:border-cyan-500/50 transition-all duration-300 shadow-xl cursor-pointer"
                          >
                            <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-950">
                              <img 
                                src={mod.image} 
                                alt={mod.title[language] || mod.title.en}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                              <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                                <span className="px-4 py-2 rounded-xl bg-slate-900/90 border border-cyan-500/40 text-cyan-300 text-xs font-semibold flex items-center gap-2 shadow-xl">
                                  <ZoomIn className="w-4 h-4 text-cyan-400" />
                                  {t('ขยายภาพ & คำอธิบาย', 'Enlarge & View Explanation')}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Text side - takes 6 cols */}
                        <div className="lg:col-span-6 space-y-4">
                          <h4 className="text-xl sm:text-2xl font-bold font-heading text-white">
                            {mod.title[language] || mod.title.en}
                          </h4>
                          <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
                            {mod.description[language] || mod.description.en}
                          </p>

                          {/* Features List */}
                          {moduleFeatures.length > 0 && (
                            <ul className="space-y-2">
                              {moduleFeatures.map((feat, fIdx) => (
                                <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400">
                                  <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                                  <span className="leading-relaxed">{feat}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>

                      </div>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Project Image Gallery Showcase */}
            {allImages.length > 1 && (
              <div className="space-y-6 pt-10 border-t border-slate-800/60">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <Images className="w-4 h-4 text-cyan-400" /> {t('ภาพตัวอย่างระบบทั้งหมด', 'System Screenshots Gallery')}
                  </h3>
                  <span className="text-xs text-slate-500 font-mono">
                    {t(`คลิกที่ภาพเพื่อขยายและอ่านคำอธิบายทุกหน้าจอ (${allImages.length} ภาพ)`, `Click to view full image & detailed screen breakdown (${allImages.length} items)`)}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {allImages.map((img, idx) => {
                    const matchingModule = project.modules?.find(m => m.image === img)

                    return (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => openLightbox(img)}
                        className="group relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/80 cursor-pointer shadow-lg hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between"
                      >
                        <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                          <img 
                            src={img} 
                            alt={`Screenshot ${idx + 1}`} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                          />
                          <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                            <ZoomIn className="w-6 h-6 text-cyan-400 drop-shadow-md" />
                          </div>
                          <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-slate-950/80 border border-slate-800 text-[10px] font-mono text-slate-300 opacity-80">
                            #{idx + 1}
                          </div>
                        </div>

                        {/* Title label under thumbnail */}
                        <div className="p-3 bg-slate-900/90 text-left border-t border-slate-800/80">
                          <p className="text-xs font-semibold text-slate-200 line-clamp-1 group-hover:text-cyan-300 transition-colors">
                            {matchingModule ? (matchingModule.title[language] || matchingModule.title.en) : `${t('หน้าจอที่', 'Screen')} ${idx + 1}`}
                          </p>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Project Demonstration Video Showcase */}
            {project.video && (
              <div className="space-y-6 pt-10 border-t border-slate-800/60">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <Video className="w-4 h-4 text-cyan-400" /> {project.videoTitle ? (project.videoTitle[language] || project.videoTitle.en) : t('วิดีโอสาธิตการทำงาน', 'Demo Video')}
                  </h3>
                  <span className="text-xs text-slate-500 font-mono flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    {t('AI Model Real-Time Inference Result', 'AI Model Real-Time Inference Result')}
                  </span>
                </div>

                <div className="group relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl">
                  <div className="relative aspect-video w-full overflow-hidden bg-slate-950 flex items-center justify-center">
                    <video 
                      controls 
                      playsInline
                      preload="metadata"
                      src={project.video}
                      className="w-full h-full object-contain"
                    >
                      {t('เบราว์เซอร์ของคุณไม่รองรับการเล่นวิดีโอ HTML5', 'Your browser does not support HTML5 video.')}
                    </video>
                  </div>

                  {project.videoDescription && (
                    <div className="p-4 sm:p-5 bg-slate-900/90 border-t border-slate-800/80 text-left space-y-1">
                      <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400">
                        {t('รายละเอียดวิดีโอสาธิตผลลัพธ์', 'Video Demonstration Breakdown')}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                        {project.videoDescription[language] || project.videoDescription.en}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Code Repository Actions */}
            <div className="pt-8 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs text-slate-500 font-light">
                {t('พัฒนาขึ้นเพื่อจัดแสดงทักษะด้านเว็บเทคโนโลยี', 'Developed as part of a Web Technologies Showcase.')}
              </div>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-slate-850 hover:bg-slate-800 border border-slate-700 rounded-xl transition-all shadow-md hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Github className="w-4.5 h-4.5 text-cyan-400" />
                  {t('ดูซอร์สโค้ดบน GitHub', 'View GitHub Source')}
                </a>
              )}
            </div>

          </div>
        </motion.div>

      </div>

      {/* Lightbox / Image Zoom Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 backdrop-blur-md p-3 sm:p-6"
            onClick={() => setIsModalOpen(false)}
          >
            <div 
              className="relative max-w-5xl w-full max-h-[95vh] flex flex-col items-center justify-center select-none"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Bar inside Modal */}
              <div className="w-full flex items-center justify-between px-4 py-3 mb-2 bg-slate-900/90 border border-slate-800 rounded-2xl backdrop-blur-md">
                <div className="flex items-center gap-2 text-slate-300 text-xs sm:text-sm font-medium font-mono">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span>
                    {t('คำอธิบายหน้าจอที่', 'Screen Details')} {currentImageIndex + 1} / {allImages.length}
                  </span>
                </div>

                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 rounded-xl bg-slate-800/80 hover:bg-red-500/20 hover:text-red-400 text-slate-300 border border-slate-700 transition-colors cursor-pointer"
                  title={t('ปิด (Esc)', 'Close (Esc)')}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Main Image Stage */}
              <div className="relative w-full h-[55vh] sm:h-[62vh] flex items-center justify-center rounded-2xl overflow-hidden bg-slate-900/50 border border-slate-800/80 p-2">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25 }}
                    src={allImages[currentImageIndex]}
                    alt={`Screenshot ${currentImageIndex + 1}`}
                    className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
                  />
                </AnimatePresence>

                {/* Prev / Next buttons */}
                {allImages.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setCurrentImageIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1))
                      }}
                      className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-2xl bg-slate-900/90 text-slate-200 hover:text-white hover:bg-cyan-500 hover:border-cyan-400 border border-slate-700 shadow-2xl transition-all cursor-pointer group"
                      title={t('รูปก่อนหน้า', 'Previous')}
                    >
                      <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setCurrentImageIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1))
                      }}
                      className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-2xl bg-slate-900/90 text-slate-200 hover:text-white hover:bg-cyan-500 hover:border-cyan-400 border border-slate-700 shadow-2xl transition-all cursor-pointer group"
                      title={t('รูปถัดไป', 'Next')}
                    >
                      <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </>
                )}
              </div>

              {/* Screen Explanation Container inside Modal */}
              {currentImageInfo && (
                <div className="w-full mt-3 p-3.5 sm:p-4 bg-slate-900/95 border border-slate-800 rounded-2xl backdrop-blur-md text-left shadow-2xl space-y-1.5 max-h-[18vh] overflow-y-auto">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-sm sm:text-base font-bold font-heading text-cyan-300 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-cyan-400" />
                      {currentImageInfo.title}
                    </h4>
                    <span className="text-[11px] font-mono text-slate-400 bg-slate-800 px-2.5 py-0.5 rounded-full border border-slate-700 flex-shrink-0">
                      #{currentImageIndex + 1} / {allImages.length}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                    {currentImageInfo.description}
                  </p>
                  {currentImageInfo.features && currentImageInfo.features.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-1">
                      {currentImageInfo.features.map((feat, fIdx) => (
                        <span key={fIdx} className="text-[11px] text-slate-300 bg-slate-800/80 px-2 py-0.5 rounded-md border border-slate-700/60">
                          • {feat}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Thumbnail Bar at bottom of Modal if multiple images */}
              {allImages.length > 1 && (
                <div className="w-full flex items-center justify-center gap-2 mt-3 px-2 overflow-x-auto py-1.5">
                  {allImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`relative w-14 h-10 sm:w-16 sm:h-12 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 cursor-pointer ${
                        idx === currentImageIndex 
                          ? 'border-cyan-400 scale-105 shadow-md shadow-cyan-500/20' 
                          : 'border-slate-800 opacity-60 hover:opacity-100 hover:border-slate-600'
                      }`}
                    >
                      <img src={img} alt={`thumb ${idx}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ProjectDetail

