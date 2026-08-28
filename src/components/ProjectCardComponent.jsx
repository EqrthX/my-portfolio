/* eslint-disable react/prop-types */
import useInView from '../hook/useInView'
import { Code, Github } from 'lucide-react';

const skillColor = {
    "HTML": "#e34c26",         
    "CSS": "#2965f1",          
    "JavaScript": "#f7df1e",   
    "PHP": "#777bb4",         
    "Kotlin": "#a97bff",       
    "Node.js": "#68a063",      
    "Express": "#444444",      
    "MySQL": "#00758f",        
    "Sequelize": "#3aafc2" 
}


const ProjectCardComponent = ({ project, delay = 0, description, stack, github, img }) => {
    
    const [cardRef, isInView] = useInView();

    return (
        <div
            ref={cardRef}
            className={`bg-white p-4 sm:p-6 rounded-lg shadow-lg border transition-all duration-700 ease-out hover:shadow-xl hover:scale-105 flex flex-col h-full ${
                isInView 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-8'
            }`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            <div className="w-full h-32 sm:h-40 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg mb-4 flex items-center justify-center relative">  
                {img !== "" ? (
                    <img src={img} className="w-full h-full object-contain" />
                ): (
                    <Code size={40} className="text-white" />
                )}
            </div>

            <h3 className='text-lg sm:text-xl font-semibold mb-3 break-words'>Project {project}</h3>
            
            <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 hover:underline mb-3 break-all">
                <Github />
            </a>
            
            <p className="text-gray-600 mb-4 text-sm sm:text-base break-words">
                {description}
            </p>
            
            <div className="flex gap-2 flex-wrap mt-auto">
                {Array.isArray(stack) && stack.map((tech, idx) => (
                    <span
                        key={idx}
                        style={{
                            backgroundColor: skillColor[tech] || "#e0e7ff",
                            color: tech === "JavaScript" ? "#222" : "#fff"
                        }}
                        className={` px-2 py-1 rounded text-xs sm:text-sm`}
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    )
}

export default ProjectCardComponent