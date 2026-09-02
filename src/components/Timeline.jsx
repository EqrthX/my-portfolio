import { motion } from 'framer-motion'
import { GraduationCap, Code2, Cpu, Cloud, Sparkles, Layers } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const Timeline = () => {
  const { t } = useLanguage()

  const timelineEvents = [
    {
      period: t('ปีที่ 1 (2022)', 'Year 1 (2022)'),
      title: t('เริ่มต้นเขียนโค้ดบรรทัดแรก', 'First Lines of Code'),
      type: t('พื้นฐาน', 'Foundations'),
      icon: GraduationCap,
      color: 'cyan',
      description: t('เริ่มต้นเส้นทางการเขียนโปรแกรมในมหาวิทยาลัย เรียนรู้พื้นฐาน HTML, CSS, JavaScript และ logic การเขียนโปรแกรม ก่อนจะสัมผัส PHP เป็นภาษาแรกสำหรับ server-side', 'Started my programming journey in university. Learned foundations of HTML, CSS, JavaScript, and programming logic, before touching PHP as the first server-side language.'),
      highlights: [
        t('พื้นฐาน HTML5, CSS3 และ JavaScript', 'HTML5, CSS3 & JavaScript fundamentals'),
        t('PHP พื้นฐาน — ก้าวแรกสู่ backend development', 'Basic PHP — first step to backend development'),
        t('MySQL & การออกแบบฐานข้อมูลเบื้องต้น', 'Introduction to MySQL & database design'),
        t('เริ่มคุ้นเคยกับ Git & การควบคุมเวอร์ชัน', 'Familiarization with Git & version control')
      ]
    },
    {
      period: t('ปีที่ 2 (2023)', 'Year 2 (2023)'),
      title: t('การพัฒนาเว็บ Full-Stack & แอป Android', 'Full-Stack Web & Android Development'),
      type: t('การเรียนรู้ผ่านโปรเจกต์', 'Project-Based Learning'),
      icon: Code2,
      color: 'indigo',
      description: t('ลงมือสร้าง project จริงครั้งแรก — ตั้งแต่ E-Commerce web app ด้วย PHP/MySQL ไปจนถึง Android app สำหรับ mobile platform ฝึก OOP และ database relationship จริงๆ', 'Built my first real projects—ranging from an E-Commerce web app with PHP/MySQL to an Android mobile app, practicing OOP and database relationships in real scenarios.'),
      highlights: [
        t('สร้าง E-Commerce web app ด้วย PHP + MySQL ตั้งแต่ login, ตะกร้าสินค้า, ไปจนถึงการชำระเงิน', 'Built E-Commerce web app with PHP + MySQL covering login, shopping cart, and payment flow'),
        t('พัฒนา Android mobile app (BooKLover) ด้วย Java + SQLite', 'Developed Android mobile app (BooKLover) with Java + SQLite'),
        t('ออกแบบโครงสร้างฐานข้อมูลเชิงสัมพันธ์และการทำ Normalization', 'Designed relational database schemas and normalization'),
        t('เรียนรู้แนวคิด REST API และ HTTP methods', 'Learned REST API concepts and HTTP methods')
      ]
    },
    {
      period: t('ปีที่ 3 (2024)', 'Year 3 (2024)'),
      title: t('Node.js, React & ระบบหลังบ้านสมัยใหม่', 'Node.js, React & Modern Backend'),
      type: t('ความเชี่ยวชาญด้านเฟรมเวิร์ก', 'Framework Mastery'),
      icon: Layers,
      color: 'violet',
      description: t('ก้าวสู่ modern JavaScript stack — เริ่มใช้ Node.js + Express สร้าง REST API พร้อม ORM และเรียนรู้ React สำหรับ dynamic frontend ที่ซับซ้อนขึ้น รวมถึง SQL Server สำหรับ enterprise-grade database', 'Moved to the modern JavaScript stack—started using Node.js + Express to build REST APIs with ORM, learned React for complex dynamic frontends, and SQL Server for enterprise-grade databases.'),
      highlights: [
        t('สร้าง Node.js + Express REST API พร้อมระบบกรองข้อมูล ยืนยันตัวตน และดักจับข้อผิดพลาด', 'Created Node.js + Express REST APIs with middleware, auth, and error handling'),
        t('ใช้ Sequelize ORM & SQL Server สำหรับโปรเจกต์ระดับองค์กร', 'Used Sequelize ORM & SQL Server for enterprise projects'),
        t('ใช้ React (Hooks, Context, สถาปัตยกรรมคอมโพเนนต์) + Tailwind CSS', 'Mastered React (Hooks, Context, component architecture) + Tailwind CSS'),
        t('ใช้ Supabase — ระบบหลังบ้านแบบ Serverless ร่วมกับ PostgreSQL', 'Utilized Supabase—Serverless backend with PostgreSQL')
      ]
    },
    {
      period: t('ปีที่ 3–4 (2024–2025)', 'Year 3–4 (2024–2025)'),
      title: t('AI / คอมพิวเตอร์วิทัศน์ & หลังบ้านด้วย Python', 'AI / Computer Vision & Python Backend'),
      type: t('เทคโนโลยีใหม่', 'Emerging Technologies'),
      icon: Cpu,
      color: 'fuchsia',
      description: t('ขยายขอบเขตสู่ AI และ Computer Vision — ใช้ Python + FastAPI สร้าง backend สำหรับโมเดล ML และนำ YOLO + Roboflow มาใช้ real-time object detection ในโปรเจกต์จริง', 'Expanded my horizon to AI and Computer Vision—used Python + FastAPI to build ML inference backends, and implemented YOLO + Roboflow for real-time object detection in projects.'),
      highlights: [
        t('สร้าง async API ประสิทธิภาพสูงด้วย Python + FastAPI สำหรับประมวลผลโมเดล ML', 'Built high-performance async APIs with Python + FastAPI for ML model inference'),
        t('ตรวจจับวัตถุด้วย YOLO (v8/v11) & จัดการชุดข้อมูลด้วย Roboflow', 'Implemented YOLO (v8/v11) object detection & Roboflow dataset management'),
        t('เทรนโมเดลเฉพาะทางด้วยชุดข้อมูลที่สร้างขึ้นเอง', 'Trained custom ML models with custom-annotated datasets'),
        t('ใช้ C# .NET — เรียนรู้ OOP ระดับองค์กรและ Windows Application', 'Learned C# .NET—enterprise OOP and Windows application development')
      ]
    },
    {
      period: t('ปัจจุบัน (2025)', 'Present (2025)'),
      title: t('คลาวด์, DevOps & แอปพลิเคชันที่พร้อมใช้งานจริง', 'Cloud, DevOps & Production-Ready Apps'),
      type: t('คลาวด์ & DevOps', 'Cloud & DevOps'),
      icon: Cloud,
      color: 'sky',
      description: t('มุ่งสู่การ deploy application ระดับ production จริงๆ — ใช้ Docker containerize services, Azure cloud สำหรับ hosting และ scaling รวมถึง design system ที่สวยงามและ UX ที่ดีสำหรับ end user', 'Aiming at deploying production-grade applications—using Docker to containerize services, Azure cloud for hosting and scaling, and designing elegant interfaces with good UX.'),
      highlights: [
        t('ใช้ Docker ในการแพ็กแอปพลิเคชันและจัดการบริการต่างๆ', 'Used Docker to containerize applications and manage services'),
        t('ใช้ Microsoft Azure — การติดตั้งแอปขึ้นคลาวด์, App Service & พื้นที่เก็บข้อมูล', 'Microsoft Azure—cloud hosting, App Services & blob storage'),
        t('สร้างพอร์ตโฟลิโอพร้อมใช้งานจริงด้วย React 19 + Vite + Tailwind v4', 'Built production-grade portfolio using React 19 + Vite + Tailwind v4'),
        t('ศึกษาเพิ่มเติมในส่วนของ CI/CD pipeline และสถาปัตยกรรมแบบ Cloud-native', 'Exploring CI/CD pipelines and cloud-native architecture')
      ]
    }
  ]

  return (
    <section id="timeline" className="relative py-24 min-h-screen flex flex-col justify-center items-center">
      
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-200/80 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-cyan-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            {t('เหตุการณ์สำคัญ & ประสบการณ์', 'Milestones & Experience')}
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight mb-4 text-slate-900 dark:text-white">
            {t('เส้นทางนัก', 'Developer ')}<span className="text-gradient">{t('พัฒนา', 'Journey')}</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg font-light">
            {t('ประวัติการศึกษา ความสำเร็จที่สำคัญ และการพัฒนาความรู้อย่างต่อเนื่องของผม', 'My educational background, key achievements, and continuous learning progression.')}
          </p>
        </div>

        {/* Timeline Line & Items */}
        <div className="relative border-l-2 border-slate-300 dark:border-slate-800/80 ml-4 sm:ml-36 space-y-12">
          {timelineEvents.map((item, index) => {
            const Icon = item.icon
            const colorMap = {
              cyan:    { dot: 'border-cyan-500 shadow-cyan-500/20',    icon: 'text-cyan-500 dark:text-cyan-400',    badge: 'text-cyan-700 dark:text-cyan-400 bg-cyan-100/80 dark:bg-cyan-950/60 border-cyan-300/60 dark:border-cyan-500/30' },
              indigo:  { dot: 'border-indigo-500 shadow-indigo-500/20', icon: 'text-indigo-500 dark:text-indigo-400',  badge: 'text-indigo-700 dark:text-indigo-400 bg-indigo-100/80 dark:bg-indigo-950/60 border-indigo-300/60 dark:border-indigo-500/30' },
              violet:  { dot: 'border-violet-500 shadow-violet-500/20', icon: 'text-violet-500 dark:text-violet-400',  badge: 'text-violet-700 dark:text-violet-400 bg-violet-100/80 dark:bg-violet-950/60 border-violet-300/60 dark:border-violet-500/30' },
              fuchsia: { dot: 'border-fuchsia-500 shadow-fuchsia-500/20', icon: 'text-fuchsia-500 dark:text-fuchsia-400', badge: 'text-fuchsia-700 dark:text-fuchsia-400 bg-fuchsia-100/80 dark:bg-fuchsia-950/60 border-fuchsia-300/60 dark:border-fuchsia-500/30' },
              sky:     { dot: 'border-sky-400 shadow-sky-400/20',       icon: 'text-sky-500 dark:text-sky-400',     badge: 'text-sky-700 dark:text-sky-400 bg-sky-100/80 dark:bg-sky-950/60 border-sky-300/60 dark:border-sky-500/30' },
            }
            const c = colorMap[item.color] || colorMap.cyan
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative pl-8 sm:pl-10 group"
              >
                {/* Timeline Point Indicator */}
                <div className={`absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-slate-100 dark:bg-[#0B0F17] border-2 ${c.dot} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-3.5 h-3.5 ${c.icon}`} />
                </div>

                {/* Period Badge for Desktop */}
                <div className="sm:absolute sm:-left-36 sm:top-2 text-xs font-mono font-semibold text-cyan-600 dark:text-cyan-400 mb-2 sm:mb-0 sm:text-right w-28">
                  {item.period}
                </div>

                {/* Card Container */}
                <div className="glass-card glass-card-hover p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800/80">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-400 bg-indigo-100/80 dark:bg-indigo-950/60 border border-indigo-300/60 dark:border-indigo-500/30 rounded-full">
                      {item.type}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white mb-2">
                    {item.title}
                  </h3>

                  <p className="text-slate-700 dark:text-slate-300 text-sm font-light leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 pt-2 border-t border-slate-200/80 dark:border-slate-800/80">
                    {item.highlights.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <span className="text-cyan-500 dark:text-cyan-400 font-bold">•</span>
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                </div>

              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Timeline
