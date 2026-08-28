import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FolderGit2, ExternalLink, Github, Eye, Sparkles, Code2 } from 'lucide-react'
import EcomPHP from '../assets/PHP/E-com_PHP.png'
import AppAndroid from '../assets/Android/BooKLover_ProjectAndroid.png'
import BlankImg from '../assets/Blank.jpg'
import ProjectModal from './ProjectModal'

const Project = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full-Stack Web' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'backend', label: 'Backend & API' },
  ]

  const projects = [
    {
      id: 1,
      title: "E-Commerce Web Application",
      category: "fullstack",
      categoryLabel: "Full-Stack Web App",
      description: "A comprehensive e-commerce platform built as a Year 2 university capstone project featuring product catalogs, cart management, and user checkout.",
      fullDescription: "A full-featured web-based e-commerce platform developed with a custom PHP backend and MySQL relational database. Includes role-based authentication, product categorization, shopping cart state management, and order transaction handling.",
      image: EcomPHP,
      tags: ["PHP", "MySQL", "JavaScript", "HTML5/CSS3", "Responsive UI"],
      features: [
        "User registration, login, and session authentication",
        "Interactive product catalog with category search",
        "Shopping cart management and total calculation",
        "Admin control panel for product stock updates"
      ],
      github: "https://github.com/EqrthX/SI232-Project-Final-year2-PHP.git"
    },
    {
      id: 2,
      title: "Book Lover App",
      category: "mobile",
      categoryLabel: "Mobile App (Android)",
      description: "An intuitive Android application for book enthusiasts to track, manage, and catalog their favorite personal book collections locally.",
      fullDescription: "A native Android mobile application designed to manage personal reading lists and book records. Leverages SQLite local storage for reliable offline performance and instant data persistence.",
      image: AppAndroid,
      tags: ["Android Dev", "Java/Kotlin", "SQLite", "Local Storage", "Mobile UX"],
      features: [
        "Add, edit, and delete personal book entries",
        "Embedded SQLite database for offline caching",
        "Custom lists for 'Reading', 'Completed', and 'Favorites'",
        "Clean mobile navigation design"
      ],
      github: "https://github.com/EqrthX/Book_Lover.git"
    },
    {
      id: 3,
      title: "CRUD Backend Web Application",
      category: "backend",
      categoryLabel: "Backend REST API",
      description: "A scalable backend RESTful API built with Node.js, Express, MySQL, and Sequelize ORM, tested thoroughly via Postman.",
      fullDescription: "A robust backend API service demonstrating modern REST principles, controller-service pattern architecture, database relational modeling with Sequelize ORM, and comprehensive Postman collection testing.",
      image: BlankImg,
      tags: ["Node.js", "Express.js", "MySQL", "Sequelize ORM", "Postman", "REST API"],
      features: [
        "Complete CRUD API endpoints for data management",
        "Sequelize ORM model definitions and migrations",
        "Error handling middleware and input validation",
        "Postman collection setup for seamless API testing"
      ],
      github: "https://github.com/EqrthX/CRUD-with-MySQL.git"
    }
  ]

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="projects" className="relative py-24 min-h-screen flex flex-col justify-center items-center">
      
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-10 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <FolderGit2 className="w-3.5 h-3.5" />
            Portfolio Showcase
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-light">
            A showcase of web applications, mobile projects, and backend API services I have built.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/25 scale-105'
                  : 'bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="glass-card glass-card-hover rounded-3xl overflow-hidden border border-slate-800/80 flex flex-col justify-between group"
              >
                <div>
                  {/* Image Container with Hover Overlay */}
                  <div className="relative h-56 w-full bg-slate-900 overflow-hidden border-b border-slate-800/80">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-xs">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="p-3 rounded-full bg-cyan-500 text-white hover:bg-cyan-400 transition-colors shadow-lg"
                        title="View Details"
                      >
                        <Eye className="w-5 h-5" />
                      </button>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-full bg-slate-900 text-slate-200 hover:text-white hover:bg-slate-800 transition-colors border border-slate-700 shadow-lg"
                          title="GitHub Source"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-cyan-400 mb-2 block">
                      {project.categoryLabel}
                    </span>
                    <h3 className="text-xl font-bold font-heading text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-sm font-light leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="px-2.5 py-0.5 text-[11px] font-mono rounded-md bg-slate-900 text-slate-300 border border-slate-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action Bar inside Card */}
                <div className="px-6 pb-6 pt-0 flex items-center justify-between border-t border-slate-800/40 pt-4">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
                  >
                    <span>Overview & Details</span>
                    <Eye className="w-3.5 h-3.5" />
                  </button>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
                    >
                      <span>Code</span>
                      <Github className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal Dialog */}
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}

      </div>
    </section>
  )
}

export default Project
