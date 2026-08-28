import { useState } from "react"
import MotionDiv from "../motion/AnimationContainer"

/* eslint-disable react/prop-types */
const ContactCard = ({ icon: Icon, title, info, delay = 0, direction = "up" }) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <MotionDiv
            delay={delay} 
            direction={direction}
            className="group cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden relative">
                {/* Background animated gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
                
                <div className="relative z-10">
                    <div className="flex justify-center mb-4">
                        <div className={`p-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white transition-all duration-500 ${isHovered ? 'scale-110 rotate-12' : 'scale-100 rotate-0'}`}>
                            <Icon size={28} />
                        </div>
                    </div>
                    <h3 className="font-bold text-lg md:text-xl mb-3 text-gray-800 text-center">{title}</h3>
                    <p className="text-gray-600 text-center text-sm md:text-base break-all">{info}</p>
                </div>
            </div>
        </MotionDiv>
    )
}

export default ContactCard