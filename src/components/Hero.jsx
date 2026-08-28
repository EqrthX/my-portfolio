import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { ArrowRight, Github, Sparkles, Terminal, FileCode, Layers } from 'lucide-react'
import earth from '../assets/earth.jpg'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center items-center overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/20 via-indigo-500/15 to-purple-500/20 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content Column */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wide mb-6 shadow-inner shadow-cyan-500/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for Full-Stack & Developer Roles
            </div>

            {/* Main Greeting & Name */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-heading tracking-tight leading-[1.1] mb-4">
              Hello, I&apos;m <br className="hidden sm:inline" />
              <span className="text-gradient">Nontprawitch</span>
              <span className="text-slate-400 text-3xl sm:text-5xl lg:text-6xl font-light ml-3 sm:ml-4">(Earth)</span>
            </h1>

            {/* Subtitle / Role */}
            <h2 className="text-lg sm:text-2xl font-medium text-slate-300 mb-6 flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span>Full Stack Developer</span>
              <span className="text-cyan-400 font-bold">•</span>
              <span className="text-slate-400">React & Node.js Specialist</span>
            </h2>

            {/* Brief Bio */}
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl mb-8 leading-relaxed font-light">
              Crafting scalable web applications, responsive user interfaces, and modern backend services with clean architecture and performant code.
            </p>

            {/* Tech stack quick badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-10">
              {['React', 'Node.js', 'Express', 'Tailwind CSS', 'PHP', 'MySQL'].map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 text-xs font-mono font-medium rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:border-cyan-500/50 hover:text-cyan-300 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <Link
                to="projects"
                smooth={true}
                duration={500}
                offset={-80}
                className="group flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 rounded-2xl shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="https://github.com/EqrthX"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 rounded-2xl shadow-lg hover:border-slate-600 hover:text-white hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <Github className="w-4 h-4 text-cyan-400" />
                <span>GitHub Profile</span>
              </a>
            </div>

          </motion.div>

          {/* Profile Image & Glow Frame Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            <div className="relative group">
              {/* Outer Glowing Gradient Ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 rounded-full blur-xl opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-glow" />
              
              {/* Main Avatar Container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full p-2 bg-[#0B0F17] border border-slate-800 shadow-2xl flex items-center justify-center overflow-hidden">
                <img 
                  src={earth} 
                  alt="Nontprawitch Saetang" 
                  className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Floating Decorative Badges */}
              <div className="absolute -bottom-4 -left-4 bg-slate-900/90 backdrop-blur-xl border border-slate-800 rounded-2xl p-3 shadow-xl flex items-center gap-3 animate-float">
                <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Primary Focus</p>
                  <p className="text-xs font-bold text-white">Full Stack Web Dev</p>
                </div>
              </div>

              <div className="absolute -top-2 -right-2 bg-slate-900/90 backdrop-blur-xl border border-slate-800 rounded-2xl p-3 shadow-xl flex items-center gap-3 animate-float" style={{ animationDelay: '2s' }}>
                <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Architecture</p>
                  <p className="text-xs font-bold text-white">MERN & PHP Stack</p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

        {/* Stats Row Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 glass-card p-6 rounded-3xl border border-slate-800/80 shadow-2xl"
        >
          <div className="flex flex-col items-center p-3 text-center border-r border-slate-800/80 last:border-r-0">
            <span className="text-3xl font-extrabold text-gradient font-heading">3+</span>
            <span className="text-xs text-slate-400 font-medium mt-1 uppercase tracking-wider">Featured Projects</span>
          </div>
          <div className="flex flex-col items-center p-3 text-center border-r border-slate-800/80 last:border-r-0">
            <span className="text-3xl font-extrabold text-cyan-400 font-heading">Full-Stack</span>
            <span className="text-xs text-slate-400 font-medium mt-1 uppercase tracking-wider">Frontend & Backend</span>
          </div>
          <div className="flex flex-col items-center p-3 text-center border-r border-slate-800/80 last:border-r-0">
            <span className="text-3xl font-extrabold text-indigo-400 font-heading">100%</span>
            <span className="text-xs text-slate-400 font-medium mt-1 uppercase tracking-wider">Responsive Design</span>
          </div>
          <div className="flex flex-col items-center p-3 text-center">
            <span className="text-3xl font-extrabold text-purple-400 font-heading">Active</span>
            <span className="text-xs text-slate-400 font-medium mt-1 uppercase tracking-wider">Learner & Builder</span>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero
