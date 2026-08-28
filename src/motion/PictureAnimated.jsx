import React from 'react'
import {motion} from "framer-motion"

const container = {
    hidden: {opacity: 0},
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.06
        }
    }
}

const pictureAnimation = {
    hidden: {opacity: 0, x: 200},
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "tween",
            ease: "easeInOut",
            duration: 0.4,
        }
    }
} 

const PictureAnimated = ({image}) => {


    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
        >
            <motion.img 
                variants={pictureAnimation}
                src={image}
                alt="Nontprawitch"
                className="w-full max-w-[300px] md:max-w-[450px] rounded-full border-8 border-t-indigo-500 border-r-purple-500 border-b-emerald-500 border-l-cyan-500 shadow-2xl transition-transform duration-300 hover:scale-105"
            />
        </motion.div>
    )
}

export default PictureAnimated
