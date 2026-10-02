import { useState } from 'react'
import { motion } from 'framer-motion'
import { Facebook, Mail, Phone, Send, Copy, Check, Sparkles, MessageSquare } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Contact = () => {
  const [copiedItem, setCopiedItem] = useState(null)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const { t } = useTranslation()

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
      title: t('contact.emailAddress'),
      value: 'nontprawitch.saetang@gmail.com',
      action: 'mailto:nontprawitch.saetang@gmail.com',
      color: 'from-amber-500/20 to-orange-500/20 border-amber-500/30 text-amber-400'
    },
    {
      id: 'phone',
      icon: Phone,
      title: t('contact.phoneMobile'),
      value: '+66 64 912 9021',
      action: 'tel:+66649129021',
      color: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-400'
    },
    {
      id: 'facebook',
      icon: Facebook,
      title: t('contact.facebookProfile'),
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
            {t('contact.letSCollaborate')}
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight mb-4 text-slate-900 dark:text-white">
            {t('contact.getIn')}<span className="text-gradient">{t('contact.touch')}</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-light">
            {t('contact.haveAProjectInMindA')}
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
                  className="glass-card glass-card-hover p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between group"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3.5 rounded-2xl bg-gradient-to-br ${method.color} border shadow-lg`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-slate-500 dark:text-slate-400">{method.title}</p>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white font-mono break-all">{method.value}</h3>
                    </div>
                  </div>

                  {/* Copy Button */}
                  <button
                    onClick={() => handleCopy(method.value, method.id)}
                    className="p-2.5 rounded-xl bg-slate-200/80 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-slate-700 transition-colors relative"
                    title={t('contact.copyToClipboard')}
                  >
                    {isCopied ? (
                      <Check className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                    {isCopied && (
                      <span className="absolute -top-8 right-0 bg-emerald-500 text-slate-950 text-[10px] font-bold px-2 py-0.5 rounded shadow">
                        {t('contact.copied')}
                      </span>
                    )}
                  </button>
                </div>
              )
            })}

            {/* Response Time Card */}
            <div className="p-6 rounded-3xl bg-cyan-500/10 dark:bg-cyan-950/40 border border-cyan-300/50 dark:border-cyan-500/20 backdrop-blur-md">
              <div className="flex items-center gap-3 mb-2">
                <Sparkles className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">{t('contact.fastResponseGuaranteed')}</h4>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                {t('contact.iTypicallyRespondToMessagesWithin')}
              </p>
            </div>
          </div>

          {/* Interactive Contact Form Column */}
          <div className="lg:col-span-7">
            <form 
              onSubmit={handleSubmit}
              className="glass-card p-8 sm:p-10 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 shadow-2xl space-y-6 relative"
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
                    <p className="font-bold">{t('contact.messageSentSuccessfully')}</p>
                    <p className="text-xs text-emerald-400/80">{t('contact.thankYouForReachingOutI')}</p>
                  </div>
                </motion.div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    {t('contact.fullName')} <span className="text-cyan-500 dark:text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder={t('contact.yourName')}
                    className="w-full bg-white dark:bg-slate-900/90 border border-slate-300 dark:border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all shadow-sm"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    {t('contact.emailAddress2')} <span className="text-cyan-500 dark:text-cyan-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full bg-white dark:bg-slate-900/90 border border-slate-300 dark:border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all shadow-sm"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                  {t('contact.subject')}
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder={t('contact.projectCollaborationJobOpportunity')}
                  className="w-full bg-slate-900/90 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                  {t('contact.message')} <span className="text-cyan-400">*</span>
                </label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t('contact.tellMeAboutYourProjectDetails')}
                  className="w-full bg-slate-900/90 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 rounded-2xl shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>{t('contact.sendMessage')}</span>
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Contact
