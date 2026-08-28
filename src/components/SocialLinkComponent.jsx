/* eslint-disable react/prop-types */
import { useState } from "react"
import MotionDiv from "../motion/AnimationContainer"

const SocialLink = ({ icon: Icon, href, label, delay = 0 }) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <MotionDiv
            delay={delay} 
            direction="scale"
            className="group"
        >
            <a 
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                aria-label={label}
            >
                <div className={`p-4 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 border border-gray-200 ${isHovered ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white border-transparent' : 'text-gray-700'}`}>
                    <Icon size={24} />
                </div>
            </a>
        </MotionDiv>
    )
}

export default SocialLink