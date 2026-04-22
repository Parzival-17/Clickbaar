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

const topics = [
  'Website Bouwen',
  'Onderhoud & Beheer',
  'SEO & Vindbaarheid',
  'Pricing Informatie',
  'Ander',
]

const budgets = [
  'Minder dan €150',
  '€150 – €300',
  '€300 – €500',
  '€500+',
  'Nog niet zeker',
]

const initialForm = {
  naam: '',
  email: '',
  telefoon: '',
  onderwerp: '',
  budget: '',
  bericht: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function validate() {
    const e = {}
    if (!form.naam.trim()) e.naam = 'Naam is verplicht'
    if (!form.email.trim()) {
      e.email = 'Email is verplicht'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Voer een geldig emailadres in'
    }
    if (!form.onderwerp) e.onderwerp = 'Kies een onderwerp'
    if (!form.bericht.trim()) e.bericht = 'Bericht is verplicht'
    return e
  }

  function handleChange(e) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const e2 = validate()
    if (Object.keys(e2).length > 0) {
      setErrors(e2)
      return
    }
    setLoading(true)
    // Simulate send — wire up Formspree or similar for real emails
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setForm(initialForm)
    }, 1000)
  }

  return (
    <>
      {/* Page header */}
      <section className="bg-deep-blue py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Contact</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-4">
            Laten we praten
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Heb je een vraag of wil je een gratis website audit? Stuur een bericht – we antwoorden binnen 24 uur.
          </p>
        </div>
      </section>

      <section className="bg-light-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-extrabold text-deep-blue mb-6">Stuur een bericht</h2>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle size={32} className="text-green-500" />
                    </div>
                    <h3 className="text-xl font-bold text-deep-blue mb-2">Bedankt voor je bericht!</h3>
                    <p className="text-gray-500">We nemen zo snel mogelijk contact met je op, uiterlijk binnen 24 uur.</p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 text-accent hover:underline text-sm font-medium"
                    >
                      Nog een bericht sturen
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="grid sm:grid-cols-2 gap-5">
                      {/* Naam */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="naam">
                          Naam <span className="text-accent">*</span>
                        </label>
                        <input
                          id="naam"
                          name="naam"
                          type="text"
                          value={form.naam}
                          onChange={handleChange}
                          placeholder="Jouw naam"
                          className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition ${
                            errors.naam ? 'border-red-400' : 'border-gray-200'
                          }`}
                        />
                        {errors.naam && <p className="text-red-500 text-xs mt-1">{errors.naam}</p>}
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="email">
                          Email <span className="text-accent">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="jouw@email.nl"
                          className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition ${
                            errors.email ? 'border-red-400' : 'border-gray-200'
                          }`}
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                      </div>

                      {/* Telefoon */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="telefoon">
                          Telefoon <span className="text-gray-400 font-normal">(optioneel)</span>
                        </label>
                        <input
                          id="telefoon"
                          name="telefoon"
                          type="tel"
                          value={form.telefoon}
                          onChange={handleChange}
                          placeholder="+31 6 12345678"
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition"
                        />
                      </div>

                      {/* Onderwerp */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="onderwerp">
                          Onderwerp <span className="text-accent">*</span>
                        </label>
                        <select
                          id="onderwerp"
                          name="onderwerp"
                          value={form.onderwerp}
                          onChange={handleChange}
                          className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition bg-white ${
                            errors.onderwerp ? 'border-red-400' : 'border-gray-200'
                          } ${form.onderwerp === '' ? 'text-gray-400' : 'text-gray-800'}`}
                        >
                          <option value="">Kies een onderwerp</option>
                          {topics.map((t) => (
                            <option key={t} value={t}>{t}</option>
                          ))}
                        </select>
                        {errors.onderwerp && <p className="text-red-500 text-xs mt-1">{errors.onderwerp}</p>}
                      </div>

                      {/* Budget */}
                      <div className="sm:col-span-2">
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="budget">
                          Budget <span className="text-gray-400 font-normal">(optioneel)</span>
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={form.budget}
                          onChange={handleChange}
                          className={`w-full sm:w-auto border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition bg-white ${
                            form.budget === '' ? 'text-gray-400' : 'text-gray-800'
                          }`}
                        >
                          <option value="">Indicatief budget</option>
                          {budgets.map((b) => (
                            <option key={b} value={b}>{b}</option>
                          ))}
                        </select>
                      </div>

                      {/* Bericht */}
                      <div className="sm:col-span-2">
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="bericht">
                          Bericht <span className="text-accent">*</span>
                        </label>
                        <textarea
                          id="bericht"
                          name="bericht"
                          rows={5}
                          value={form.bericht}
                          onChange={handleChange}
                          placeholder="Vertel ons over jouw bedrijf en wat je nodig hebt..."
                          className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition resize-none ${
                            errors.bericht ? 'border-red-400' : 'border-gray-200'
                          }`}
                        />
                        {errors.bericht && <p className="text-red-500 text-xs mt-1">{errors.bericht}</p>}
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="mt-6 bg-accent hover:bg-orange-600 disabled:opacity-70 text-white font-bold px-8 py-3.5 rounded-xl inline-flex items-center gap-2 transition-colors"
                    >
                      {loading ? 'Versturen...' : 'Stuur bericht'}
                      <Send size={16} />
                    </button>
                    <p className="text-xs text-gray-400 mt-3">
                      * Verplichte velden. We antwoorden binnen 24 uur.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Contact info */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-deep-blue mb-5">Contactgegevens</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                      <Mail size={18} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 mb-0.5">Email</p>
                      <a href="mailto:info@clickbaar.nl" className="text-sm font-semibold text-deep-blue hover:text-accent transition-colors">
                        info@clickbaar.nl
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                      <Phone size={18} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 mb-0.5">Telefoon</p>
                      <a href="tel:+31612345678" className="text-sm font-semibold text-deep-blue hover:text-accent transition-colors">
                        +31 6 12345678
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                      <MapPin size={18} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 mb-0.5">Locatie</p>
                      <p className="text-sm font-semibold text-deep-blue">
                        Heiloo, Noord-Holland<br />
                        <span className="font-normal text-gray-500">Nederland</span>
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                      <Clock size={18} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 mb-0.5">Responstijd</p>
                      <p className="text-sm font-semibold text-deep-blue">Binnen 24 uur</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Social */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-deep-blue mb-4">Volg ons</h3>
                <div className="space-y-3">
                  {[
                    { icon: LinkedinIcon, label: 'LinkedIn', handle: '@clickbaar', href: 'https://linkedin.com' },
                    { icon: FacebookIcon, label: 'Facebook', handle: '@clickbaar', href: 'https://facebook.com' },
                    { icon: InstagramIcon, label: 'Instagram', handle: '@clickbaar.nl', href: 'https://instagram.com' },
                  ].map((s) => {
                    const Icon = s.icon
                    return (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-light-bg transition-colors group"
                      >
                        <div className="w-8 h-8 bg-deep-blue/10 group-hover:bg-accent/10 rounded-lg flex items-center justify-center transition-colors">
                          <Icon size={16} className="text-deep-blue group-hover:text-accent transition-colors" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-700">{s.label}</p>
                          <p className="text-xs text-gray-400">{s.handle}</p>
                        </div>
                      </a>
                    )
                  })}
                </div>
              </div>

              {/* Quick promise */}
              <div className="bg-deep-blue rounded-2xl p-6 text-white">
                <h3 className="font-bold mb-3">Onze belofte</h3>
                <ul className="space-y-2">
                  {[
                    'Gratis consultatie (30 min)',
                    'Offerte binnen 24 uur',
                    'Geen verborgen kosten',
                    'Persoonlijk contact',
                  ].map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-white/80">
                      <CheckCircle size={14} className="text-accent" />
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
