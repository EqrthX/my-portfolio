import { motion } from 'framer-motion'
import { GraduationCap, Code2, Award, Calendar, Sparkles } from 'lucide-react'

const Timeline = () => {
  const timelineEvents = [
    {
      period: 'Year 2 - Year 3 University',
      title: 'Full-Stack Web & Software Engineering',
      type: 'Education & Capstones',
      icon: GraduationCap,
      description: 'Focused on core web development, OOP concepts, database design, REST APIs, and modern frontend frameworks.',
      highlights: [
        'Built full-stack E-commerce web application with custom PHP & MySQL',
        'Engineered CRUD REST APIs with Node.js, Express, and Sequelize ORM',
        'Developed native Android mobile app using SQLite database'
      ]
    },
    {
      period: 'Ongoing',
      title: 'Modern Frontend & Cloud Architecture',
      type: 'Self-Driven Growth',
      icon: Code2,
      description: 'Expanding expertise into React 19, modern CSS frameworks (Tailwind v4), state management, and performance optimization.',
      highlights: [
        'Crafting responsive, high-performance web applications',
        'Deepening knowledge in asynchronous JavaScript & microservices architecture',
        'Building production-ready developer portfolio and showcase applications'
      ]
    }
  ]

  return (
    <section id="timeline" className="relative py-24 min-h-screen flex flex-col justify-center items-center">
      
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Milestones & Experience
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight mb-4">
            Developer <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-light">
            My educational background, key achievements, and continuous learning progression.
          </p>
        </div>

        {/* Timeline Line & Items */}
        <div className="relative border-l-2 border-slate-800/80 ml-4 sm:ml-32 space-y-12">
          {timelineEvents.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-8 sm:pl-10 group"
              >
                {/* Timeline Point Indicator */}
                <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-[#0B0F17] border-2 border-cyan-500 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:scale-110 transition-transform">
                  <Icon className="w-3.5 h-3.5 text-cyan-400" />
                </div>

                {/* Period Badge for Desktop */}
                <div className="sm:absolute sm:-left-36 sm:top-2 text-xs font-mono font-semibold text-cyan-400 mb-2 sm:mb-0 sm:text-right w-28">
                  {item.period}
                </div>

                {/* Card Container */}
                <div className="glass-card glass-card-hover p-6 sm:p-8 rounded-3xl border border-slate-800/80">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-400 bg-indigo-950/60 border border-indigo-500/30 rounded-full">
                      {item.type}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-white mb-2">
                    {item.title}
                  </h3>

                  <p className="text-slate-300 text-sm font-light leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 pt-2 border-t border-slate-800/80">
                    {item.highlights.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-400">
                        <span className="text-cyan-400 font-bold">•</span>
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                </div>

              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Timeline
