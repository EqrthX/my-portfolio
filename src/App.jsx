import { motion } from 'framer-motion'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Skills from './components/Skills'
import Project from './components/Project'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-[#0B0F17] text-slate-100 bg-grid-pattern relative selection:bg-cyan-500/30 selection:text-cyan-200"
    >
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Project />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </motion.div>
  )
}

export default App
