import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Code, Layout, Server, Database, Wrench, Users, 
  Cpu, Sparkles 
} from 'lucide-react'

const Skills = () => {
  const [activeTab, setActiveTab] = useState('all')

  const skillCategories = [
    { id: 'all', label: 'All Skills' },
    { id: 'frontend', label: 'Front-End' },
    { id: 'backend', label: 'Back-End' },
    { id: 'tools', label: 'Tools & DB' },
    { id: 'soft', label: 'Soft Skills' },
  ]

  const skillsData = [
    // Frontend
    { name: 'HTML5', category: 'frontend', icon: Layout, desc: 'Semantic Structure & Accessibility' },
    { name: 'CSS3 / Tailwind CSS', category: 'frontend', icon: Layout, desc: 'Responsive Design & Custom Styling' },
    { name: 'JavaScript (ES6+)', category: 'frontend', icon: Code, desc: 'Modern JS Syntax & Async Operations' },
    { name: 'React', category: 'frontend', icon: Code, desc: 'Hooks, Component Lifecycle & Router' },
    { name: 'Bootstrap', category: 'frontend', icon: Layout, desc: 'Rapid Grid UI Layouts' },

    // Backend
    { name: 'C#', category: 'backend', icon: Code, desc: 'Object-oriented application building' },
    { name: '.NET', category: 'backend', icon: Server, desc: 'Enterprise server backend framework' },
    { name: 'Python', category: 'backend', icon: Code, desc: 'Scripting, backend, and data science' },
    { name: 'Node.js & Express', category: 'backend', icon: Server, desc: 'RESTful API Development & Middleware' },
    { name: 'FastAPI', category: 'backend', icon: Server, desc: 'High-performance modern Python API framework' },
    { name: 'PHP', category: 'backend', icon: Server, desc: 'Server-side Scripting & Full-Stack Projects' },
    { name: 'MySQL', category: 'backend', icon: Database, desc: 'Database Schema Design & Querying' },
    { name: 'SQL Server', category: 'backend', icon: Database, desc: 'Microsoft relational database engine' },

    // Tools & Databases
    { name: 'Docker', category: 'tools', icon: Cpu, desc: 'Containerization & application deployment' },
    { name: 'Azure', category: 'tools', icon: Server, desc: 'Microsoft cloud platform & services' },
    { name: 'Supabase', category: 'tools', icon: Database, desc: 'Backend-as-a-Service using PostgreSQL' },
    { name: 'Roboflow', category: 'tools', icon: Cpu, desc: 'Computer vision dataset management' },
    { name: 'YOLO', category: 'tools', icon: Cpu, desc: 'Real-time object detection models' },
    { name: 'Git & GitHub', category: 'tools', icon: Wrench, desc: 'Version Control & Code Repositories' },
    { name: 'Postman', category: 'tools', icon: Wrench, desc: 'API Testing & Documentation' },
    { name: 'VS Code', category: 'tools', icon: Wrench, desc: 'Development Environment & Extensions' },
    { name: 'XAMPP', category: 'tools', icon: Wrench, desc: 'Local Apache & MariaDB Server' },

    // Soft Skills
    { name: 'Problem-solving', category: 'soft', icon: Users, desc: 'Debugging & Algorithm Logic' },
    { name: 'Teamwork & Collaboration', category: 'soft', icon: Users, desc: 'Effective Communication in Projects' },
    { name: 'Time Management', category: 'soft', icon: Users, desc: 'Task Prioritization & Deadlines' },
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
            <Sparkles className="w-3.5 h-3.5" />
            Capabilities & Tech Stack
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight mb-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-light">
            Tools, frameworks, and methodologies I leverage to build robust software applications.
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
