/* eslint-disable react/prop-types */
import useInView from '../hook/useInView'



const SkillCardComponent = ({ title, skills, icon: Icon, delay = 0 }) => {
    const [cardRef, isInView] = useInView()
    return (
        <div
            ref={cardRef}
            className={`bg-blue-500 text-white p-6 rounded-lg shadow-lg text-center transition-all duration-700 ease-out ${
                isInView 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-12 scale-95'
            }`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            <div className='flex justify-center mb-3'>
                <Icon size={32}/>
            </div>
            
            <h3 className='text-lg font-semibold mb-3'>{title}</h3>
            {Array.isArray(skills) ? (
                <ul className='text-left ml-6 list-disc'>
                    {skills.map((skill, idx) => (
                        <li key={idx}>{skill}</li>
                    ))}
                </ul>
            ): (
                skills
            )}
        </div>
    )
}

export default SkillCardComponent
