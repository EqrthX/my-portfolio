import { useState, useMemo, useEffect, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, Github, CheckCircle, Code, ZoomIn, X, ChevronLeft, ChevronRight, Images, Video, LayoutGrid } from 'lucide-react'
import { projects } from '../data/projects'
import { useTranslation } from 'react-i18next'

const ProjectDetailContent = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { t } = useTranslation()
  const project = projects.find(item => String(item.id) === id)
  const [selection, setSelection] = useState({ projectId: id, index: 0 })
  const [tab, setTab] = useState('overview')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const dialogRef = useRef(null)
  const closeRef = useRef(null)
  const openerRef = useRef(null)
  const tabRefs = useRef({})
  const tabListRef = useRef(null)

  // Keep every screenshot and module accessible, including modules sharing an image.
  const screens = useMemo(() => {
    if (!project) return []
    const modules = project.modules || []
    const images = [...new Set([project.image, ...(project.gallery || [])].filter(Boolean))]
    return [
      ...modules.map(module => ({ ...module })),
      ...images.filter(image => !modules.some(module => module.image === image))
        .map(image => ({ image, title: null, description: null, features: null })),
    ]
  }, [project])
  const selectedIndex = selection.projectId === id ? Math.min(selection.index, screens.length - 1) : 0
  const selectedScreen = screens[selectedIndex]
  const selectScreen = index => setSelection({ projectId: id, index })
  const moveScreen = direction => setSelection(previous => ({
    projectId: id,
    index: ((previous.projectId === id ? previous.index : 0) + direction + screens.length) % screens.length,
  }))
  const screenTitle = (screen, index) => screen.title
    ? t(screen.title).replace(/^\d+\.\s*/, '')
    : t('projectDetail.screenNumber', { count: index + 1 })
  const activeTab = tab === 'demo' && !project?.video ? 'overview' : tab

  useEffect(() => {
    if (!isModalOpen) return
    const dialog = dialogRef.current
    const opener = openerRef.current
    const previousOverflow = document.body.style.overflow
    dialog.showModal()
    closeRef.current?.focus()
    document.body.style.overflow = 'hidden'
    return () => {
      dialog.close()
      document.body.style.overflow = previousOverflow
      opener?.focus({ preventScroll: true })
    }
  }, [isModalOpen])

  const openLightbox = event => {
    openerRef.current = event.currentTarget
    setIsModalOpen(true)
  }

  if (!project) {
    return (
      <div className="min-h-screen pt-28 px-4 text-center">
        <h1 className="text-2xl font-bold mb-6">{t('projectDetail.projectNotFound')}</h1>
        <button onClick={() => navigate('/')} className="rounded-xl bg-cyan-600 px-5 py-3 text-white">
          {t('projectDetail.backToHome')}
        </button>
      </div>
    )
  }

  const features = project.features ? t(project.features, { returnObjects: true }) : []
  const screenFeatures = selectedScreen?.features ? t(selectedScreen.features, { returnObjects: true }) : []
  const tabs = [
    { id: 'overview', label: t('projectDetail.overview'), icon: LayoutGrid },
    ...(screens.length ? [{ id: 'screens', label: t('projectDetail.screens'), icon: Images }] : []),
    ...(project.video ? [{ id: 'demo', label: t('projectDetail.demoVideo'), icon: Video }] : []),
  ]
  const handleTabKey = (event, index) => {
    let next
    if (event.key === 'ArrowRight') next = (index + 1) % tabs.length
    if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length
    if (event.key === 'Home') next = 0
    if (event.key === 'End') next = tabs.length - 1
    if (next === undefined) return
    event.preventDefault()
    setTab(tabs[next].id)
    tabRefs.current[tabs[next].id]?.focus()
  }

  return (
    <div className="min-h-screen pt-24 sm:pt-28 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <button onClick={() => navigate('/', { state: { scrollTo: 'projects' } })}
          className="inline-flex items-center gap-2 py-3 mb-5 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-300">
          <ArrowLeft className="h-4 w-4" /> {t('projectDetail.backToProjects')}
        </button>

        <header className="grid gap-6 lg:grid-cols-2 lg:gap-10 items-center mb-8">
          <div className="min-w-0">
            <span className="inline-block rounded-full border border-cyan-500/25 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-700 dark:text-cyan-300 mb-4">
              {t(project.categoryLabel)}
            </span>
            <h1 className="text-2xl sm:text-4xl font-bold font-heading tracking-tight leading-tight mb-4 text-slate-900 dark:text-white break-words">
              {t(project.title)}
            </h1>
            <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300 mb-5">{t(project.description)}</p>
            <div className="flex flex-wrap gap-3">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 dark:bg-cyan-500 px-4 py-3 text-sm font-semibold text-white dark:text-slate-950 hover:opacity-90">
                  <Github className="h-4 w-4" /> {t('projectDetail.viewGithubSource')}
                </a>
              )}
              {screens.length > 0 && (
                <button onClick={() => {
                  setTab('screens')
                  window.requestAnimationFrame(() => {
                    tabRefs.current.screens?.focus({ preventScroll: true })
                    tabListRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  })
                }}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 dark:border-slate-700 px-4 py-3 text-sm font-semibold hover:border-cyan-500">
                  <Images className="h-4 w-4 text-cyan-600 dark:text-cyan-400" /> {t('projectDetail.exploreScreens')}
                </button>
              )}
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 overflow-hidden">
            <img src={project.image} alt={t(project.title)} className="w-full aspect-video object-contain" />
          </div>
        </header>

        <div className="glass-card rounded-2xl p-4 sm:p-5 mb-8">
          <h2 className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 mb-3">
            <Code className="h-4 w-4" /> {t('projectDetail.technologiesUsed')}
          </h2>
          <ul className="flex flex-wrap gap-2">
            {project.tags.map(tag => <li key={tag} className="rounded-lg bg-slate-200/70 dark:bg-slate-800 px-2.5 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-200">{tag}</li>)}
          </ul>
        </div>

        <div ref={tabListRef} role="tablist" aria-label={t('projectDetail.projectSections')}
          className="scroll-mt-24 flex gap-1 border-b border-slate-200 dark:border-slate-800 mb-6">
          {tabs.map((item, index) => {
            const Icon = item.icon
            return (
              <button key={item.id} ref={element => { tabRefs.current[item.id] = element }}
                id={`project-tab-${item.id}`} role="tab" aria-selected={activeTab === item.id}
                aria-controls={`project-panel-${item.id}`} tabIndex={activeTab === item.id ? 0 : -1}
                onClick={() => setTab(item.id)} onKeyDown={event => handleTabKey(event, index)}
                className={`flex flex-1 sm:flex-none items-center justify-center gap-2 px-2 sm:px-5 py-3 min-h-12 text-xs sm:text-sm font-semibold border-b-2 transition-colors ${activeTab === item.id ? 'border-cyan-500 text-cyan-700 dark:text-cyan-300' : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}>
                <Icon className="h-4 w-4 shrink-0" /> {item.label}
              </button>
            )
          })}
        </div>

        <section id="project-panel-overview" role="tabpanel" aria-labelledby="project-tab-overview" tabIndex={0} hidden={activeTab !== 'overview'}>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="glass-card rounded-2xl p-5 sm:p-7">
              <h2 className="text-lg font-bold mb-4">{t('projectDetail.aboutProject')}</h2>
              <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">{t(project.fullDescription || project.description)}</p>
            </div>
            <div className="glass-card rounded-2xl p-5 sm:p-7">
              <h2 className="text-lg font-bold mb-4">{t('projectDetail.keyFeaturesHighlights')}</h2>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex gap-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    <CheckCircle className="h-4 w-4 shrink-0 mt-1 text-cyan-600 dark:text-cyan-400" /> {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {screens.length > 0 && (
          <section id="project-panel-screens" role="tabpanel" aria-labelledby="project-tab-screens" tabIndex={0} hidden={activeTab !== 'screens'}>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-5">{t('projectDetail.chooseScreen')}</p>
            <div className="grid gap-5 lg:grid-cols-[260px_minmax(0,1fr)] items-start">
              <div className="lg:hidden">
                <label htmlFor="project-screen-select" className="block text-xs font-semibold mb-2">{t('projectDetail.screens')}</label>
                <select id="project-screen-select" value={selectedIndex} onChange={event => selectScreen(Number(event.target.value))}
                  className="w-full min-w-0 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-3 text-sm">
                  {screens.map((screen, index) => <option key={index} value={index}>{index + 1}. {screenTitle(screen, index)}</option>)}
                </select>
              </div>
              <nav aria-label={t('projectDetail.screens')} className="hidden lg:block glass-card rounded-2xl p-2 max-h-[620px] overflow-y-auto">
                {screens.map((screen, index) => (
                  <button key={index} onClick={() => selectScreen(index)} aria-current={index === selectedIndex ? 'true' : undefined}
                    className={`flex w-full items-center gap-3 rounded-xl p-3 text-left text-xs font-medium leading-relaxed ${index === selectedIndex ? 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-300' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800'}`}>
                    <span className="shrink-0 tabular-nums text-slate-400">{String(index + 1).padStart(2, '0')}</span>
                    {screenTitle(screen, index)}
                  </button>
                ))}
              </nav>
              <div className="min-w-0 glass-card rounded-2xl overflow-hidden">
                <button onClick={openLightbox} aria-label={t('projectDetail.openScreen', { title: screenTitle(selectedScreen, selectedIndex) })}
                  className="relative block w-full bg-slate-100 dark:bg-slate-950 group">
                  <img src={selectedScreen.image} alt={screenTitle(selectedScreen, selectedIndex)} className="w-full aspect-video object-contain" loading="lazy" />
                  <span className="absolute bottom-3 right-3 inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/90 px-3 py-2 text-xs text-white">
                    <ZoomIn className="h-4 w-4" /> {t('projectDetail.clickToEnlarge')}
                  </span>
                </button>
                <div className="flex items-center justify-between gap-3 px-4 py-3 border-y border-slate-200 dark:border-slate-800">
                  <button onClick={() => moveScreen(-1)} aria-label={t('projectDetail.previous')} disabled={screens.length < 2} className="rounded-lg p-2 hover:bg-slate-200 dark:hover:bg-slate-800 disabled:opacity-30"><ChevronLeft className="h-5 w-5" /></button>
                  <span aria-live="polite" className="text-xs text-slate-500 dark:text-slate-400 tabular-nums">{selectedIndex + 1} / {screens.length}</span>
                  <button onClick={() => moveScreen(1)} aria-label={t('projectDetail.next')} disabled={screens.length < 2} className="rounded-lg p-2 hover:bg-slate-200 dark:hover:bg-slate-800 disabled:opacity-30"><ChevronRight className="h-5 w-5" /></button>
                </div>
                <div className="p-5 sm:p-6" aria-live="polite">
                  <h2 className="text-lg font-bold mb-3">{screenTitle(selectedScreen, selectedIndex)}</h2>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{selectedScreen.description ? t(selectedScreen.description) : t('projectDetail.screenPreview')}</p>
                  {screenFeatures.length > 0 && <ul className="mt-4 space-y-2">{screenFeatures.map((feature, index) => <li key={index} className="flex gap-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300"><CheckCircle className="h-4 w-4 shrink-0 mt-1 text-cyan-600 dark:text-cyan-400" />{feature}</li>)}</ul>}
                </div>
              </div>
            </div>
          </section>
        )}

        {project.video && (
          <section id="project-panel-demo" role="tabpanel" aria-labelledby="project-tab-demo" tabIndex={0} hidden={activeTab !== 'demo'}>
            <div className="glass-card rounded-2xl overflow-hidden">
              {activeTab === 'demo' && <video controls playsInline preload="metadata" src={project.video} poster={project.image} className="w-full aspect-video bg-slate-950 object-contain">{t('projectDetail.yourBrowserDoesNotSupportHtml5')}</video>}
              <div className="p-5 sm:p-6">
                <h2 className="text-lg font-bold mb-3">{project.videoTitle ? t(project.videoTitle) : t('projectDetail.demoVideo')}</h2>
                {project.videoDescription && <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{t(project.videoDescription)}</p>}
              </div>
            </div>
          </section>
        )}
      </div>

      {isModalOpen && selectedScreen && (
        <dialog ref={dialogRef} aria-labelledby="screen-dialog-title" onCancel={() => setIsModalOpen(false)}
          onClick={event => { if (event.target === event.currentTarget) setIsModalOpen(false) }}
          onKeyDown={event => {
            if (event.key === 'ArrowLeft') { event.preventDefault(); moveScreen(-1) }
            if (event.key === 'ArrowRight') { event.preventDefault(); moveScreen(1) }
          }}
          className="fixed inset-0 m-0 w-full max-w-none h-dvh max-h-none border-0 bg-slate-950/95 text-white p-3 sm:p-6 backdrop:bg-slate-950/80">
          <div className="max-w-6xl mx-auto h-full flex flex-col gap-3">
            <div className="flex items-center justify-between gap-3 shrink-0">
              <h2 id="screen-dialog-title" className="text-sm sm:text-base font-semibold min-w-0">{screenTitle(selectedScreen, selectedIndex)}</h2>
              <button ref={closeRef} onClick={() => setIsModalOpen(false)} aria-label={t('projectDetail.closeEsc')} className="rounded-xl bg-slate-800 p-3 shrink-0 hover:bg-slate-700"><X className="h-5 w-5" /></button>
            </div>
            <div className="flex-1 min-h-0 overflow-auto rounded-xl bg-slate-900 flex items-center justify-center">
              <img src={selectedScreen.image} alt={screenTitle(selectedScreen, selectedIndex)} className="max-w-full max-h-full object-contain" />
            </div>
            <div className="flex items-center justify-between shrink-0">
              <button onClick={() => moveScreen(-1)} disabled={screens.length < 2} aria-label={t('projectDetail.previous')} className="rounded-xl bg-slate-800 p-3 hover:bg-slate-700 disabled:opacity-30"><ChevronLeft className="h-5 w-5" /></button>
              <span aria-live="polite" className="text-sm tabular-nums text-slate-300">{selectedIndex + 1} / {screens.length}</span>
              <button onClick={() => moveScreen(1)} disabled={screens.length < 2} aria-label={t('projectDetail.next')} className="rounded-xl bg-slate-800 p-3 hover:bg-slate-700 disabled:opacity-30"><ChevronRight className="h-5 w-5" /></button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  )
}

// Reset the selected tab, screen and dialog when opening another project.
const ProjectDetail = () => {
  const { id } = useParams()
  return <ProjectDetailContent key={id} />
}

export default ProjectDetail
