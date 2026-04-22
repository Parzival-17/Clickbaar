import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, CheckCircle, Send } from 'lucide-react'

function LinkedinIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
    </svg>
  )
}

function FacebookIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  )
}

function InstagramIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  )
}

const topics = ['Website Bouwen', 'Onderhoud & Beheer', 'SEO & Vindbaarheid', 'Pricing Informatie', 'Ander']
const budgets = ['Minder dan €150', '€150 – €300', '€300 – €500', '€500+', 'Nog niet zeker']
const initialForm = { naam: '', email: '', telefoon: '', onderwerp: '', budget: '', bericht: '' }

const inputClass = (hasError) =>
  `w-full bg-white/5 border rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:ring-1 transition ${
    hasError ? 'border-red-500/50 focus:ring-red-500/30' : 'border-white/10 focus:ring-accent/40 focus:border-accent/40'
  }`

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function validate() {
    const e = {}
    if (!form.naam.trim()) e.naam = 'Naam is verplicht'
    if (!form.email.trim()) e.email = 'Email is verplicht'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Voer een geldig emailadres in'
    if (!form.onderwerp) e.onderwerp = 'Kies een onderwerp'
    if (!form.bericht.trim()) e.bericht = 'Bericht is verplicht'
    return e
  }

  function handleChange(e) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (errors[name]) setErrors((p) => ({ ...p, [name]: '' }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const e2 = validate()
    if (Object.keys(e2).length > 0) { setErrors(e2); return }
    setLoading(true)
    setTimeout(() => { setLoading(false); setSubmitted(true); setForm(initialForm) }, 1000)
  }

  return (
    <>
      {/* Page header */}
      <section className="relative bg-[#07071a] py-24 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-64 bg-indigo-600/15 rounded-full blur-[100px]" />
        <div className="absolute inset-0 grid-pattern" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">Contact</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-4">
            Laten we <span className="gradient-text">praten</span>
          </h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Heb je een vraag of wil je een gratis audit? We antwoorden binnen 24 uur.
          </p>
        </div>
      </section>

      <section className="bg-[#09091e] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="glass gradient-border rounded-2xl p-8">
                <h2 className="text-2xl font-extrabold text-white mb-6">Stuur een bericht</h2>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle size={32} className="text-green-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Bedankt voor je bericht!</h3>
                    <p className="text-white/40 text-sm">We nemen binnen 24 uur contact met je op.</p>
                    <button onClick={() => setSubmitted(false)} className="mt-6 text-accent hover:text-orange-400 text-sm font-medium transition-colors">
                      Nog een bericht sturen
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-white/50 mb-1.5 uppercase tracking-wider" htmlFor="naam">
                          Naam <span className="text-accent">*</span>
                        </label>
                        <input id="naam" name="naam" type="text" value={form.naam} onChange={handleChange}
                          placeholder="Jouw naam" className={inputClass(errors.naam)} />
                        {errors.naam && <p className="text-red-400 text-xs mt-1">{errors.naam}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-white/50 mb-1.5 uppercase tracking-wider" htmlFor="email">
                          Email <span className="text-accent">*</span>
                        </label>
                        <input id="email" name="email" type="email" value={form.email} onChange={handleChange}
                          placeholder="jouw@email.nl" className={inputClass(errors.email)} />
                        {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-white/50 mb-1.5 uppercase tracking-wider" htmlFor="telefoon">
                          Telefoon <span className="text-white/20 font-normal normal-case">(optioneel)</span>
                        </label>
                        <input id="telefoon" name="telefoon" type="tel" value={form.telefoon} onChange={handleChange}
                          placeholder="+31 6 12345678" className={inputClass(false)} />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-white/50 mb-1.5 uppercase tracking-wider" htmlFor="onderwerp">
                          Onderwerp <span className="text-accent">*</span>
                        </label>
                        <select id="onderwerp" name="onderwerp" value={form.onderwerp} onChange={handleChange}
                          className={`${inputClass(errors.onderwerp)} ${form.onderwerp === '' ? 'text-white/20' : 'text-white'}`}>
                          <option value="">Kies een onderwerp</option>
                          {topics.map((t) => <option key={t} value={t} className="bg-[#09091e]">{t}</option>)}
                        </select>
                        {errors.onderwerp && <p className="text-red-400 text-xs mt-1">{errors.onderwerp}</p>}
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block text-xs font-semibold text-white/50 mb-1.5 uppercase tracking-wider" htmlFor="budget">
                          Budget <span className="text-white/20 font-normal normal-case">(optioneel)</span>
                        </label>
                        <select id="budget" name="budget" value={form.budget} onChange={handleChange}
                          className={`sm:w-auto ${inputClass(false)} ${form.budget === '' ? 'text-white/20' : 'text-white'}`}>
                          <option value="">Indicatief budget</option>
                          {budgets.map((b) => <option key={b} value={b} className="bg-[#09091e]">{b}</option>)}
                        </select>
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block text-xs font-semibold text-white/50 mb-1.5 uppercase tracking-wider" htmlFor="bericht">
                          Bericht <span className="text-accent">*</span>
                        </label>
                        <textarea id="bericht" name="bericht" rows={5} value={form.bericht} onChange={handleChange}
                          placeholder="Vertel ons over jouw bedrijf en wat je nodig hebt..."
                          className={`${inputClass(errors.bericht)} resize-none`} />
                        {errors.bericht && <p className="text-red-400 text-xs mt-1">{errors.bericht}</p>}
                      </div>
                    </div>

                    <button type="submit" disabled={loading}
                      className="mt-6 bg-accent hover:bg-orange-600 disabled:opacity-60 text-white font-bold px-8 py-3.5 rounded-xl inline-flex items-center gap-2 transition-all glow-orange">
                      {loading ? 'Versturen...' : 'Stuur bericht'}
                      <Send size={16} />
                    </button>
                    <p className="text-xs text-white/25 mt-3">* Verplichte velden. Antwoord binnen 24 uur.</p>
                  </form>
                )}
              </div>
            </div>

            {/* Contact info */}
            <div className="space-y-5">
              <div className="glass rounded-2xl p-6">
                <h3 className="font-bold text-white mb-5 text-sm">Contactgegevens</h3>
                <ul className="space-y-4">
                  {[
                    { icon: Mail, label: 'Email', value: 'info@clickbaar.nl', href: 'mailto:info@clickbaar.nl' },
                    { icon: Phone, label: 'Telefoon', value: '+31 6 12345678', href: 'tel:+31612345678' },
                    { icon: MapPin, label: 'Locatie', value: 'Heiloo, Noord-Holland', href: null },
                    { icon: Clock, label: 'Responstijd', value: 'Binnen 24 uur', href: null },
                  ].map((item) => {
                    const Icon = item.icon
                    return (
                      <li key={item.label} className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-accent/15 rounded-lg flex items-center justify-center shrink-0">
                          <Icon size={16} className="text-accent" />
                        </div>
                        <div>
                          <p className="text-xs text-white/30 mb-0.5">{item.label}</p>
                          {item.href ? (
                            <a href={item.href} className="text-sm text-white/70 hover:text-white transition-colors font-medium">{item.value}</a>
                          ) : (
                            <p className="text-sm text-white/70 font-medium">{item.value}</p>
                          )}
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </div>

              {/* Social */}
              <div className="glass rounded-2xl p-6">
                <h3 className="font-bold text-white mb-4 text-sm">Volg ons</h3>
                <div className="space-y-2">
                  {[
                    { Icon: LinkedinIcon, label: 'LinkedIn', handle: '@clickbaar', href: 'https://linkedin.com' },
                    { Icon: FacebookIcon, label: 'Facebook', handle: '@clickbaar', href: 'https://facebook.com' },
                    { Icon: InstagramIcon, label: 'Instagram', handle: '@clickbaar.nl', href: 'https://instagram.com' },
                  ].map((s) => {
                    const Icon = s.Icon
                    return (
                      <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                        <div className="w-8 h-8 glass rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                          <Icon size={15} className="text-white/50 group-hover:text-accent transition-colors" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white/70">{s.label}</p>
                          <p className="text-xs text-white/30">{s.handle}</p>
                        </div>
                      </a>
                    )
                  })}
                </div>
              </div>

              {/* Promise */}
              <div className="gradient-border rounded-2xl p-6">
                <h3 className="font-bold text-white mb-3 text-sm">Onze belofte</h3>
                <ul className="space-y-2.5">
                  {['Gratis consultatie (30 min)', 'Offerte binnen 24 uur', 'Geen verborgen kosten', 'Persoonlijk contact'].map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-white/50">
                      <CheckCircle size={13} className="text-accent shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
