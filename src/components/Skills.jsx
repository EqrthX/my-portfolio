import { useState } from 'react'
import { 
  Code, Layout, Server, Database, Wrench, Users, 
  Cpu, ChevronDown
} from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Skills = () => {
  const [activeTab, setActiveTab] = useState('all')
  const [openCategory, setOpenCategory] = useState('frontend')
  const { t } = useTranslation()

  const skillCategories = [
    { id: 'all', label: t('skills.allSkills') },
    { id: 'frontend', label: 'Front-End' },
    { id: 'backend', label: 'Back-End' },
    { id: 'tools', label: t('skills.toolsDb') },
    { id: 'soft', label: t('skills.softSkills') },
  ]

  const skillsData = [
    // Frontend
    { name: 'HTML5', category: 'frontend', icon: Layout, desc: t('skills.semanticStructureAccessibility') },
    { name: 'CSS3 / Tailwind CSS', category: 'frontend', icon: Layout, desc: t('skills.responsiveDesignCustomStyling') },
    { name: 'JavaScript (ES6+)', category: 'frontend', icon: Code, desc: t('skills.modernJsSyntaxAsyncOperations') },
    { name: 'React', category: 'frontend', icon: Code, desc: t('skills.hooksComponentLifecycleRouter') },
    { name: 'Bootstrap', category: 'frontend', icon: Layout, desc: t('skills.rapidGridUiLayouts') },

    // Backend
    { name: 'C#', category: 'backend', icon: Code, desc: t('skills.objectOrientedApplicationBuilding') },
    { name: '.NET', category: 'backend', icon: Server, desc: t('skills.enterpriseServerBackendFramework') },
    { name: 'Python', category: 'backend', icon: Code, desc: t('skills.scriptingBackendAndDataScience') },
    { name: 'Node.js & Express', category: 'backend', icon: Server, desc: t('skills.restfulApiDevelopmentMiddleware') },
    { name: 'FastAPI', category: 'backend', icon: Server, desc: t('skills.highPerformanceModernPythonApiFramework') },
    { name: 'MySQL', category: 'backend', icon: Database, desc: t('skills.databaseSchemaDesignQuerying') },
    { name: 'SQL Server', category: 'backend', icon: Database, desc: t('skills.microsoftRelationalDatabaseEngine') },

    // Tools & Databases
    { name: 'Docker', category: 'tools', icon: Cpu, desc: t('skills.containerizationApplicationDeployment') },
    { name: 'Azure', category: 'tools', icon: Server, desc: t('skills.microsoftCloudPlatformServices') },
    { name: 'Supabase', category: 'tools', icon: Database, desc: t('skills.backendAsAServiceUsingPostgresql') },
    { name: 'Roboflow', category: 'tools', icon: Cpu, desc: t('skills.computerVisionDatasetManagement') },
    { name: 'YOLO', category: 'tools', icon: Cpu, desc: t('skills.realTimeObjectDetectionModels') },
    { name: 'Git & GitHub', category: 'tools', icon: Wrench, desc: t('skills.versionControlCodeRepositories') },
    { name: 'Postman', category: 'tools', icon: Wrench, desc: t('skills.apiTestingDocumentation') },
    { name: 'VS Code', category: 'tools', icon: Wrench, desc: t('skills.developmentEnvironmentExtensions') },
    { name: 'XAMPP', category: 'tools', icon: Wrench, desc: t('skills.localApacheMariadbServer') },

    // Soft Skills
    { name: t('skills.problemSolving'), category: 'soft', icon: Users, desc: t('skills.debuggingAlgorithmLogic') },
    { name: t('skills.teamworkCollaboration'), category: 'soft', icon: Users, desc: t('skills.effectiveCommunicationInProjects') },
    { name: t('skills.timeManagement'), category: 'soft', icon: Users, desc: t('skills.taskPrioritizationDeadlines') },
  ]

  const filteredSkills = activeTab === 'all' 
    ? skillsData 
    : skillsData.filter(s => s.category === activeTab)

  return (
    <section id="skills" className="relative py-12 sm:py-24 sm:min-h-screen flex flex-col justify-center items-center overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <Cpu className="w-3.5 h-3.5" />
            {t('skills.capabilitiesTechStack')}
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-heading tracking-tight mb-4 text-slate-900 dark:text-white leading-tight">
            {t('skills.skills')}
            <span className="text-gradient inline-block">{t('skills.technologies')}</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-lg font-light">
            {t('skills.toolsFrameworksAndMethodologiesILeverage')}
          </p>
        </div>

        {/* Mobile: browse one compact category at a time. */}
        <div className="space-y-3 sm:hidden">
          {skillCategories.filter(cat => cat.id !== 'all').map((cat) => {
            const categorySkills = skillsData.filter(skill => skill.category === cat.id)
            const isOpen = openCategory === cat.id
            return (
              <div key={cat.id} className="glass-card rounded-2xl overflow-hidden">
                <h3>
                  <button
                    type="button"
                    id={`skills-heading-${cat.id}`}
                    aria-expanded={isOpen}
                    aria-controls={`skills-panel-${cat.id}`}
                    onClick={() => setOpenCategory(isOpen ? null : cat.id)}
                    className="flex w-full items-center gap-3 px-4 py-4 text-left text-sm font-semibold text-slate-900 dark:text-white focus-visible:outline-2 focus-visible:outline-cyan-500 focus-visible:-outline-offset-2"
                  >
                    <span className="flex-1">{cat.label}</span>
                    <span className="rounded-full bg-cyan-500/10 px-2 py-0.5 text-xs text-cyan-700 dark:text-cyan-300">{categorySkills.length}</span>
                    <ChevronDown aria-hidden="true" className={`h-4 w-4 text-slate-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                </h3>
                <div
                  id={`skills-panel-${cat.id}`}
                  role="region"
                  aria-labelledby={`skills-heading-${cat.id}`}
                  hidden={!isOpen}
                  className="px-4 pb-4"
                >
                  <ul className="flex flex-wrap gap-2">
                    {categorySkills.map(skill => (
                      <li key={skill.name} className="max-w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800/70 px-2.5 py-1.5 text-xs font-medium leading-relaxed text-slate-700 dark:text-slate-200 break-words">
                        {skill.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>

        <div className="hidden sm:block">
        {/* Desktop category filters */}
        <div className="flex flex-col items-center gap-4 mb-10 w-full">
          
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5 max-w-full">
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                aria-pressed={activeTab === cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  activeTab === cat.id
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/20 scale-105'
                    : 'bg-slate-200/80 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-slate-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

        </div>

        {/* Keep results mounted so filtering never waits for an exit animation. */}
            <div
              role="list"
              aria-live="polite"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            >
              {filteredSkills.map((skill) => {
                const Icon = skill.icon
                return (
                  <div
                    role="listitem"
                    key={skill.name}
                    className="glass-card glass-card-hover p-5 sm:p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1">{skill.name}</h3>
                      <p className="text-xs text-slate-600 dark:text-slate-400 font-light mb-2">{skill.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
        </div>

      </div>
    </section>
  )
}

export default Skills
