import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Code, Layout, Server, Database, Wrench, Users, 
  Cpu
} from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const Skills = () => {
  const [activeTab, setActiveTab] = useState('all')
  const { t } = useLanguage()

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
    <section id="skills" className="relative py-24 min-h-screen flex flex-col justify-center items-center">
      
      {/* Background Glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <Cpu className="w-3.5 h-3.5" />
            {t('ความสามารถ & เทคโนโลยี', 'Capabilities & Tech Stack')}
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight mb-4 text-slate-900 dark:text-white">
            {t('ทักษะ & ', 'Skills & ')}<span className="text-gradient">{t('เทคโนโลยีที่ใช้', 'Technologies')}</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-light">
            {t('เครื่องมือ เฟรมเวิร์ก และระเบียบวิธีที่ผมเลือกใช้เพื่อสร้างแอปพลิเคชันที่มีประสิทธิภาพ', 'Tools, frameworks, and methodologies I leverage to build robust software applications.')}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeTab === cat.id
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/25 scale-105'
                  : 'bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
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
                  className="glass-card glass-card-hover p-6 rounded-2xl border border-slate-800/80 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-1">{skill.name}</h3>
                    <p className="text-xs text-slate-400 font-light mb-2">{skill.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  )
}

export default Skills
