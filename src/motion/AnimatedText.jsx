import {motion} from "framer-motion"
import { useState } from "react"
import useInView from "../hook/useInView.jsx"

const container = {
    hidden: {opacity: 0},
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.06
        }
    }
}

const letterAnimation = {
    hidden: {opacity: 0, y:20},
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 20
        }
    }
}


const AnimatedText = ({ text, delay = 0, className = "" }) => {

    const [textRef, isInView] = useInView()

    return (
        <motion.div
            ref={textRef}
            className='flex flex-wrap text-[40px] font-black'
            variants={container}
            initial="hidden"
            animate={isInView ? `visible` : 'hidden'}
        >
            {text.split('').map((char, index) => (
                <motion.span
                    key={index}
                    variants={letterAnimation}
                    className={`transition-all duration-1000 ease-out ${
                    isInView 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-8'
                } ${className}`}
                style={{ transitionDelay: `${delay}ms` }}
                >
                    {char === ' ' ? '\u00A0' : char}
                </motion.span>
            ))}
        </motion.div>
    )
}

export default AnimatedText
