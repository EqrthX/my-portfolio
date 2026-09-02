import { motion } from 'framer-motion'
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { scroller } from 'react-scroll'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import ProjectDetail from "./pages/ProjectDetail"

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function MainLayout() {
  const location = useLocation()

  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        scroller.scrollTo(location.state.scrollTo, {
          duration: 500,
          smooth: true,
          offset: -80,
        })
      }, 100) // Small timeout to ensure home page is rendered first
      // Clear state so it doesn't re-trigger
      window.history.replaceState({}, document.title)
    }
  }, [location])

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-[#F8FAFC] dark:bg-[#0B0F17] text-slate-900 dark:text-slate-100 bg-grid-pattern relative selection:bg-cyan-500/30 selection:text-cyan-200 transition-colors duration-300"
    >
      <Navbar />
      <ScrollToTop />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Routes>
      </main>
      <Footer />
    </motion.div>
  )
}

function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  )
}

export default App

