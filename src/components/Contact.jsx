import { useState } from 'react'
import { motion } from 'framer-motion'
import { Facebook, Mail, Phone, Send, Copy, Check, Sparkles, MessageSquare } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const Contact = () => {
  const [copiedItem, setCopiedItem] = useState(null)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const { t } = useLanguage()

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text)
    setCopiedItem(label)
    setTimeout(() => setCopiedItem(null), 2500)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.fullName || !formData.email || !formData.message) return
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ fullName: '', email: '', subject: '', message: '' })
    }, 4000)
  }

  const contactMethods = [
    {
      id: 'email',
      icon: Mail,
      title: t('ที่อยู่อีเมล', 'Email Address'),
      value: 'nontprawitch.saetang@gmail.com',
      action: 'mailto:nontprawitch.saetang@gmail.com',
      color: 'from-amber-500/20 to-orange-500/20 border-amber-500/30 text-amber-400'
    },
    {
      id: 'phone',
      icon: Phone,
      title: t('เบอร์โทรศัพท์ / มือถือ', 'Phone / Mobile'),
      value: '+66 64 912 9021',
      action: 'tel:+66649129021',
      color: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-400'
    },
    {
      id: 'facebook',
      icon: Facebook,
      title: t('โปรไฟล์ Facebook', 'Facebook Profile'),
      value: 'Nontprawitch Saetang',
      action: 'https://facebook.com',
      color: 'from-blue-500/20 to-indigo-500/20 border-blue-500/30 text-blue-400'
    }
  ]

  return (
    <section id="contact" className="relative py-24 min-h-screen flex flex-col justify-center items-center">
      
      {/* Background glow */}
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            {t('มาทำงานร่วมกัน', "Let's Collaborate")}
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight mb-4 text-white">
            {t('ช่องทางการ', 'Get In ')}<span className="text-gradient">{t('ติดต่อ', 'Touch')}</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-light">
            {t('หากคุณมีโปรเจกต์ที่สนใจ โอกาสในการทำงานร่วมกัน หรือต้องการพูดคุย แวะทักทายมาได้เลยครับ!', 'Have a project in mind, a job opportunity, or just want to connect? Reach out anytime!')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-4">
            {contactMethods.map((method) => {
              const Icon = method.icon
              const isCopied = copiedItem === method.id

              return (
                <div
                  key={method.id}
                  className="glass-card glass-card-hover p-6 rounded-3xl border border-slate-800/80 flex items-center justify-between group"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3.5 rounded-2xl bg-gradient-to-br ${method.color} border shadow-lg`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-slate-400">{method.title}</p>
                      <h3 className="text-sm sm:text-base font-bold text-white font-mono break-all">{method.value}</h3>
                    </div>
                  </div>

                  {/* Copy Button */}
                  <button
                    onClick={() => handleCopy(method.value, method.id)}
                    className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors relative"
                    title={t('คัดลอกไปยังคลิปบอร์ด', 'Copy to Clipboard')}
                  >
                    {isCopied ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                    {isCopied && (
                      <span className="absolute -top-8 right-0 bg-emerald-500 text-slate-950 text-[10px] font-bold px-2 py-0.5 rounded shadow">
                        {t('คัดลอกแล้ว!', 'Copied!')}
                      </span>
                    )}
                  </button>
                </div>
              )
            })}

            {/* Response Time Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-r from-cyan-950/40 via-indigo-950/40 to-slate-900/60 border border-cyan-500/20 backdrop-blur-md">
              <div className="flex items-center gap-3 mb-2">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <h4 className="text-sm font-bold text-white">{t('ตอบกลับรวดเร็วแน่นอน', 'Fast Response Guaranteed')}</h4>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                {t('โดยปกติผมจะตอบกลับข้อความภายใน 24 ชั่วโมง สามารถส่งอีเมลหรือข้อความมาได้ตลอดเวลาครับ', 'I typically respond to messages within 24 hours. Feel free to send an email or direct message anytime.')}
              </p>
            </div>
          </div>

          {/* Interactive Contact Form Column */}
          <div className="lg:col-span-7">
            <form 
              onSubmit={handleSubmit}
              className="glass-card p-8 sm:p-10 rounded-3xl border border-slate-800/80 shadow-2xl space-y-6 relative"
            >
              {/* Form Toast Feedback */}
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-2xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-sm flex items-center gap-3 shadow-lg"
                >
                  <Check className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <div>
                    <p className="font-bold">{t('ส่งข้อความสำเร็จแล้ว!', 'Message sent successfully!')}</p>
                    <p className="text-xs text-emerald-400/80">{t('ขอบคุณสำหรับข้อความ ผมจะติดต่อกลับคุณในไม่ช้าครับ', "Thank you for reaching out. I'll get back to you shortly.")}</p>
                  </div>
                </motion.div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                    {t('ชื่อ-นามสกุล', 'Full Name')} <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder={t('ชื่อของคุณ', 'Your Name')}
                    className="w-full bg-slate-900/90 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                    {t('อีเมลสำหรับติดต่อ', 'Email Address')} <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full bg-slate-900/90 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                  {t('หัวข้อข้อความ', 'Subject')}
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder={t('ความร่วมมือในโปรเจกต์ / โอกาสการจ้างงาน', 'Project Collaboration / Job Opportunity')}
                  className="w-full bg-slate-900/90 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                  {t('ข้อความ', 'Message')} <span className="text-cyan-400">*</span>
                </label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t('อธิบายรายละเอียดโปรเจกต์ หรือข้อสงสัยของคุณ...', 'Tell me about your project details or inquiries...')}
                  className="w-full bg-slate-900/90 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 rounded-2xl shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>{t('ส่งข้อความ', 'Send Message')}</span>
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Contact
