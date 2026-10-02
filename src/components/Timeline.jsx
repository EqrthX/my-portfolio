import { motion } from 'framer-motion'
import { GraduationCap, Code2, Cpu, Sparkles, Layers } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Timeline = () => {
  const { t } = useTranslation()

  const timelineEvents = [
    { id: 'year1', icon: GraduationCap, color: 'cyan' },
    { id: 'year2', icon: Code2, color: 'indigo' },
    { id: 'year3', icon: Layers, color: 'violet' },
    { id: 'year4', icon: Cpu, color: 'fuchsia' },
  ].map(event => ({
    ...event,
    period: t(`timeline.years.${event.id}.period`),
    title: t(`timeline.years.${event.id}.title`),
    type: t(`timeline.years.${event.id}.type`),
    description: t(`timeline.years.${event.id}.description`),
    highlights: t(`timeline.years.${event.id}.highlights`, { returnObjects: true }),
  }))

  return (
    <section id="timeline" className="relative py-24 min-h-screen flex flex-col justify-center items-center">
      
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-200/80 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-cyan-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            {t('timeline.milestonesExperience')}
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight mb-4 text-slate-900 dark:text-white">
            {t('timeline.developer')}<span className="text-gradient">{t('timeline.journey')}</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg font-light">
            {t('timeline.subtitle')}
          </p>
        </div>

        {/* Timeline Line & Items */}
        <div className="relative border-l-2 border-slate-300 dark:border-slate-800/80 ml-4 sm:ml-36 space-y-12">
          {timelineEvents.map((item, index) => {
            const Icon = item.icon
            const colorMap = {
              cyan:    { dot: 'border-cyan-500 shadow-cyan-500/20',    icon: 'text-cyan-500 dark:text-cyan-400',    badge: 'text-cyan-700 dark:text-cyan-400 bg-cyan-100/80 dark:bg-cyan-950/60 border-cyan-300/60 dark:border-cyan-500/30' },
              indigo:  { dot: 'border-indigo-500 shadow-indigo-500/20', icon: 'text-indigo-500 dark:text-indigo-400',  badge: 'text-indigo-700 dark:text-indigo-400 bg-indigo-100/80 dark:bg-indigo-950/60 border-indigo-300/60 dark:border-indigo-500/30' },
              violet:  { dot: 'border-violet-500 shadow-violet-500/20', icon: 'text-violet-500 dark:text-violet-400',  badge: 'text-violet-700 dark:text-violet-400 bg-violet-100/80 dark:bg-violet-950/60 border-violet-300/60 dark:border-violet-500/30' },
              fuchsia: { dot: 'border-fuchsia-500 shadow-fuchsia-500/20', icon: 'text-fuchsia-500 dark:text-fuchsia-400', badge: 'text-fuchsia-700 dark:text-fuchsia-400 bg-fuchsia-100/80 dark:bg-fuchsia-950/60 border-fuchsia-300/60 dark:border-fuchsia-500/30' },
              sky:     { dot: 'border-sky-400 shadow-sky-400/20',       icon: 'text-sky-500 dark:text-sky-400',     badge: 'text-sky-700 dark:text-sky-400 bg-sky-100/80 dark:bg-sky-950/60 border-sky-300/60 dark:border-sky-500/30' },
            }
            const c = colorMap[item.color] || colorMap.cyan
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative pl-8 sm:pl-10 group"
              >
                {/* Timeline Point Indicator */}
                <div className={`absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-slate-100 dark:bg-[#0B0F17] border-2 ${c.dot} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-3.5 h-3.5 ${c.icon}`} />
                </div>

                {/* Period Badge for Desktop */}
                <div className="sm:absolute sm:-left-36 sm:top-2 text-xs font-mono font-semibold text-cyan-600 dark:text-cyan-400 mb-2 sm:mb-0 sm:text-right w-28">
                  {item.period}
                </div>

                {/* Card Container */}
                <div className="glass-card glass-card-hover p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800/80">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-400 bg-indigo-100/80 dark:bg-indigo-950/60 border border-indigo-300/60 dark:border-indigo-500/30 rounded-full">
                      {item.type}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white mb-2">
                    {item.title}
                  </h3>

                  <p className="text-slate-700 dark:text-slate-300 text-sm font-light leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 pt-2 border-t border-slate-200/80 dark:border-slate-800/80">
                    {item.highlights.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <span className="text-cyan-500 dark:text-cyan-400 font-bold">•</span>
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
