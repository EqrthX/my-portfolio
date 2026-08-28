/* eslint-disable react/prop-types */
import useInView from "../hook/useInView"
const MotionDiv = ({ children, delay = 0, direction = "up", className = "", duration = 0.6, ...props }) => {
    const [ref, isInView] = useInView()
    
    const getTransform = () => {
        switch(direction) {
            case "up": return isInView ? "translateY(0)" : "translateY(60px)"
            case "down": return isInView ? "translateY(0)" : "translateY(-60px)"
            case "left": return isInView ? "translateX(0)" : "translateX(-60px)"
            case "right": return isInView ? "translateX(0)" : "translateX(60px)"
            case "scale": return isInView ? "scale(1)" : "scale(0.8)"
            default: return isInView ? "translateY(0)" : "translateY(60px)"
        }
    }

    return (
        <div
            ref={ref}
            className={`transition-all ease-out ${className}`}
            style={{
                transform: getTransform(),
                opacity: isInView ? 1 : 0,
                transitionDuration: `${duration}s`,
                transitionDelay: `${delay}s`
            }}
            {...props}
        >
            {children}
        </div>
    )
}

export default MotionDiv