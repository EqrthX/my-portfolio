import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Code, Layout, Server, Database, Wrench, Users, 
  Cpu, LayoutGrid, Tag
} from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const Skills = () => {
  const [activeTab, setActiveTab] = useState('all')
  const [viewMode, setViewMode] = useState('pills') // 'pills' or 'cards'
  const { t } = useLanguage()

  // Auto-detect screen size to set default viewMode (Pills on mobile, Cards on desktop)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setViewMode('pills')
      } else {
        setViewMode('cards')
      }
    }
    
    // Initial check
    handleResize()
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const skillCategories = [
    { id: 'all', label: t('ทักษะทั้งหมด', 'All Skills') },
    { id: 'frontend', label: 'Front-End' },
    { id: 'backend', label: 'Back-End' },
    { id: 'tools', label: t('เครื่องมือ & DB', 'Tools & DB') },
    { id: 'soft', label: t('ซอฟต์สกิล', 'Soft Skills') },
  ]

  const skillsData = [
    // Frontend
    { name: 'HTML5', category: 'frontend', icon: Layout, desc: t('โครงสร้างเว็บ & การเข้าถึงข้อมูล', 'Semantic Structure & Accessibility') },
    { name: 'CSS3 / Tailwind CSS', category: 'frontend', icon: Layout, desc: t('การออกแบบที่รองรับทุกหน้าจอ & สไตล์คัสตอม', 'Responsive Design & Custom Styling') },
    { name: 'JavaScript (ES6+)', category: 'frontend', icon: Code, desc: t('ไวยากรณ์ JS สมัยใหม่ & การทำงานแบบอะซิงโครนัส', 'Modern JS Syntax & Async Operations') },
    { name: 'React', category: 'frontend', icon: Code, desc: t('เบ็ดเตล็ด, วัฏจักรคอมโพเนนต์ & ระบบเราเตอร์', 'Hooks, Component Lifecycle & Router') },
    { name: 'Bootstrap', category: 'frontend', icon: Layout, desc: t('การจัดวาง Grid UI อย่างรวดเร็ว', 'Rapid Grid UI Layouts') },

    // Backend
    { name: 'C#', category: 'backend', icon: Code, desc: t('การสร้างแอปพลิเคชันเชิงวัตถุ (OOP)', 'Object-oriented application building') },
    { name: '.NET', category: 'backend', icon: Server, desc: t('เฟรมเวิร์กเซิร์ฟเวอร์หลังบ้านระดับองค์กร', 'Enterprise server backend framework') },
    { name: 'Python', category: 'backend', icon: Code, desc: t('การเขียนสคริปต์, ระบบหลังบ้าน และวิทยาการข้อมูล', 'Scripting, backend, and data science') },
    { name: 'Node.js & Express', category: 'backend', icon: Server, desc: t('การพัฒนา RESTful API & มิดเดิลแวร์', 'RESTful API Development & Middleware') },
    { name: 'FastAPI', category: 'backend', icon: Server, desc: t('เฟรมเวิร์ก API ด้วย Python สมัยใหม่ประสิทธิภาพสูง', 'High-performance modern Python API framework') },
    { name: 'MySQL', category: 'backend', icon: Database, desc: t('การออกแบบโครงสร้างฐานข้อมูล & การคิวรีข้อมูล', 'Database Schema Design & Querying') },
    { name: 'SQL Server', category: 'backend', icon: Database, desc: t('ระบบฐานข้อมูลเชิงสัมพันธ์ของ Microsoft', 'Microsoft relational database engine') },

    // Tools & Databases
    { name: 'Docker', category: 'tools', icon: Cpu, desc: t('การจำลองตู้คอนเทนเนอร์ & การติดตั้งแอปพลิเคชัน', 'Containerization & application deployment') },
    { name: 'Azure', category: 'tools', icon: Server, desc: t('แพลตฟอร์มคลาวด์และบริการของ Microsoft', 'Microsoft cloud platform & services') },
    { name: 'Supabase', category: 'tools', icon: Database, desc: t('บริการระบบหลังบ้านสำเร็จรูปด้วย PostgreSQL', 'Backend-as-a-Service using PostgreSQL') },
    { name: 'Roboflow', category: 'tools', icon: Cpu, desc: t('การจัดการชุดข้อมูลสำหรับคอมพิวเตอร์วิทัศน์', 'Computer vision dataset management') },
    { name: 'YOLO', category: 'tools', icon: Cpu, desc: t('โมเดลตรวจจับวัตถุแบบเรียลไทม์', 'Real-time object detection models') },
    { name: 'Git & GitHub', category: 'tools', icon: Wrench, desc: t('ระบบควบคุมเวอร์ชัน & แหล่งเก็บโค้ด', 'Version Control & Code Repositories') },
    { name: 'Postman', category: 'tools', icon: Wrench, desc: t('การทดสอบ API & การทำเอกสารประกอบ', 'API Testing & Documentation') },
    { name: 'VS Code', category: 'tools', icon: Wrench, desc: t('สภาพแวดล้อมการพัฒนา & ส่วนขยาย', 'Development Environment & Extensions') },
    { name: 'XAMPP', category: 'tools', icon: Wrench, desc: t('เซิร์ฟเวอร์จำลอง Apache & MariaDB ภายในเครื่อง', 'Local Apache & MariaDB Server') },

    // Soft Skills
    { name: t('การแก้ปัญหา', 'Problem-solving'), category: 'soft', icon: Users, desc: t('การดีบักโค้ด & ลอจิกอัลกอริทึม', 'Debugging & Algorithm Logic') },
    { name: t('การทำงานเป็นทีม', 'Teamwork & Collaboration'), category: 'soft', icon: Users, desc: t('การสื่อสารอย่างมีประสิทธิภาพในการทำงานร่วมกัน', 'Effective Communication in Projects') },
    { name: t('การบริหารเวลา', 'Time Management'), category: 'soft', icon: Users, desc: t('การจัดลำดับความสำคัญของงาน & การส่งงานตรงเวลา', 'Task Prioritization & Deadlines') },
  ]

  const filteredSkills = activeTab === 'all' 
    ? skillsData 
    : skillsData.filter(s => s.category === activeTab)

  return (
    <section id="skills" className="relative py-16 sm:py-24 min-h-screen flex flex-col justify-center items-center overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <Cpu className="w-3.5 h-3.5" />
            {t('ความสามารถ & เทคโนโลยี', 'Capabilities & Tech Stack')}
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-heading tracking-tight mb-4 text-slate-900 dark:text-white leading-tight">
            {t('ทักษะ & ', 'Skills & ')}
            <span className="text-gradient inline-block">{t('เทคโนโลยีที่ใช้', 'Technologies')}</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-lg font-light">
            {t('เครื่องมือ เฟรมเวิร์ก และระเบียบวิธีที่ผมเลือกใช้เพื่อสร้างแอปพลิเคชันที่มีประสิทธิภาพ', 'Tools, frameworks, and methodologies I leverage to build robust software applications.')}
          </p>
        </div>

        {/* Controls Bar: Clean stacked layout for filters and view switcher */}
        <div className="flex flex-col items-center gap-4 mb-10 w-full">
          
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5 max-w-full">
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
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

          {/* View Mode Toggle Switcher */}
          <div className="inline-flex items-center p-1 rounded-xl bg-slate-200/80 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-800">
            <button
              onClick={() => setViewMode('pills')}
              title={t('แสดงผลแบบชิป/แท็ก (กะทัดรัด)', 'Compact Chip/Tag View')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                viewMode === 'pills'
                  ? 'bg-cyan-500 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Tag className="w-3.5 h-3.5" />
              <span>{t('แท็ก (กะทัดรัด)', 'Pills')}</span>
            </button>
            <button
              onClick={() => setViewMode('cards')}
              title={t('แสดงผลแบบการ์ดเต็ม', 'Full Card Grid View')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                viewMode === 'cards'
                  ? 'bg-cyan-500 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>{t('การ์ด', 'Cards')}</span>
            </button>
          </div>

        </div>

        {/* Dynamic Display Area */}
        <AnimatePresence mode="wait">
          {viewMode === 'pills' ? (
            /* PILL / CHIP BADGES VIEW (Ultra Compact Responsive Layout) */
            <motion.div
              key="pills-view"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="flex flex-wrap gap-2.5 sm:gap-3 justify-center"
            >
              {filteredSkills.map((skill) => {
                const Icon = skill.icon
                return (
                  <motion.div
                    key={skill.name}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className="group glass-card glass-card-hover px-3.5 py-2.5 rounded-xl border border-slate-200/80 dark:border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 flex items-center gap-3 shadow-xs hover:shadow-cyan-500/10"
                  >
                    <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 group-hover:bg-cyan-500 group-hover:text-white transition-colors flex-shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors leading-snug">
                        {skill.name}
                      </span>
                      <span className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-light max-w-[150px] sm:max-w-[200px] truncate leading-tight">
                        {skill.desc}
                      </span>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          ) : (
            /* FULL CARD GRID VIEW */
            <motion.div
              key="cards-view"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            >
              {filteredSkills.map((skill) => {
                const Icon = skill.icon
                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
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
                  </motion.div>
                )
              })}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  )
}

export default Skills
