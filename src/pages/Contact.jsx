import { useState } from 'react'
import { Mail, MapPin, Clock, CheckCircle, Send } from 'lucide-react'

const topics = ['Website Bouwen', 'Onderhoud & Beheer', 'SEO & Vindbaarheid', 'Pricing Informatie', 'Ander']
const budgets = ['Minder dan €150', '€150 – €300', '€300 – €500', '€500+', 'Nog niet zeker']
const initialForm = { naam: '', email: '', onderwerp: '', budget: '', bericht: '' }

const inputClass = (hasError) =>
  `w-full bg-white dark:bg-slate-800 border rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-300 dark:placeholder-slate-500 focus:outline-none focus:ring-2 transition ${
    hasError
      ? 'border-red-300 dark:border-red-700 focus:ring-red-100 dark:focus:ring-red-900/30 focus:border-red-400'
      : 'border-slate-200 dark:border-slate-700 focus:ring-primary-100 dark:focus:ring-primary-900/30 focus:border-primary-400 dark:focus:border-primary-600'
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
      <section className="relative bg-white dark:bg-slate-950 py-24 overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary-50 dark:bg-primary-900/20 rounded-full blur-[100px] opacity-70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <span className="section-tag">Contact</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mt-4 mb-4">
            Laten we <span className="gradient-text">praten</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Heb je een vraag of wil je een gratis audit? We antwoorden binnen 24 uur.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 dark:bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="card rounded-2xl p-8">
                <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-6">Stuur een bericht</h2>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle size={32} className="text-green-500" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Bedankt voor je bericht!</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">We nemen binnen 24 uur contact met je op.</p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 text-sm font-medium transition-colors"
                    >
                      Nog een bericht sturen
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-wider" htmlFor="naam">
                          Naam <span className="text-primary-600 dark:text-primary-400">*</span>
                        </label>
                        <input id="naam" name="naam" type="text" value={form.naam} onChange={handleChange}
                          placeholder="Jouw naam" className={inputClass(errors.naam)} />
                        {errors.naam && <p className="text-red-500 text-xs mt-1">{errors.naam}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-wider" htmlFor="email">
                          Email <span className="text-primary-600 dark:text-primary-400">*</span>
                        </label>
                        <input id="email" name="email" type="email" value={form.email} onChange={handleChange}
                          placeholder="jouw@email.nl" className={inputClass(errors.email)} />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-wider" htmlFor="onderwerp">
                          Onderwerp <span className="text-primary-600 dark:text-primary-400">*</span>
                        </label>
                        <select id="onderwerp" name="onderwerp" value={form.onderwerp} onChange={handleChange}
                          className={`${inputClass(errors.onderwerp)} ${form.onderwerp === '' ? 'text-slate-300 dark:text-slate-500' : 'text-slate-900 dark:text-white'}`}>
                          <option value="">Kies een onderwerp</option>
                          {topics.map((t) => <option key={t} value={t} className="dark:bg-slate-800">{t}</option>)}
                        </select>
                        {errors.onderwerp && <p className="text-red-500 text-xs mt-1">{errors.onderwerp}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-wider" htmlFor="budget">
                          Budget <span className="text-slate-300 dark:text-slate-600 font-normal normal-case">(optioneel)</span>
                        </label>
                        <select id="budget" name="budget" value={form.budget} onChange={handleChange}
                          className={`${inputClass(false)} ${form.budget === '' ? 'text-slate-300 dark:text-slate-500' : 'text-slate-900 dark:text-white'}`}>
                          <option value="">Indicatief budget</option>
                          {budgets.map((b) => <option key={b} value={b} className="dark:bg-slate-800">{b}</option>)}
                        </select>
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-wider" htmlFor="bericht">
                          Bericht <span className="text-primary-600 dark:text-primary-400">*</span>
                        </label>
                        <textarea id="bericht" name="bericht" rows={5} value={form.bericht} onChange={handleChange}
                          placeholder="Vertel ons over jouw bedrijf en wat je nodig hebt..."
                          className={`${inputClass(errors.bericht)} resize-none`} />
                        {errors.bericht && <p className="text-red-500 text-xs mt-1">{errors.bericht}</p>}
                      </div>
                    </div>

                    <button type="submit" disabled={loading}
                      className="mt-6 btn-primary px-8 py-3.5 gap-2 disabled:opacity-60 disabled:cursor-not-allowed">
                      {loading ? 'Versturen...' : 'Stuur bericht'}
                      <Send size={16} />
                    </button>
                    <p className="text-xs text-slate-400 dark:text-slate-500 mt-3">* Verplichte velden. Antwoord binnen 24 uur.</p>
                  </form>
                )}
              </div>
            </div>

            <div className="space-y-5">
              <div className="card rounded-2xl p-6">
                <h3 className="font-bold text-slate-900 dark:text-white mb-5 text-sm">Contactgegevens</h3>
                <ul className="space-y-4">
                  {[
                    { icon: Mail, label: 'Email', value: 'info@clickbaar.nl', href: 'mailto:info@clickbaar.nl' },
                    { icon: MapPin, label: 'Locatie', value: 'Heiloo, Noord-Holland', href: null },
                    { icon: Clock, label: 'Responstijd', value: 'Binnen 24 uur', href: null },
                  ].map((item) => {
                    const Icon = item.icon
                    return (
                      <li key={item.label} className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-primary-50 dark:bg-primary-900/30 rounded-lg flex items-center justify-center shrink-0">
                          <Icon size={15} className="text-primary-600 dark:text-primary-400" />
                        </div>
                        <div>
                          <p className="text-xs text-slate-400 dark:text-slate-500 mb-0.5">{item.label}</p>
                          {item.href ? (
                            <a href={item.href} className="text-sm text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium">{item.value}</a>
                          ) : (
                            <p className="text-sm text-slate-700 dark:text-slate-300 font-medium">{item.value}</p>
                          )}
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </div>

              <div className="card rounded-2xl p-6 bg-primary-50 dark:bg-primary-900/20 border-primary-100 dark:border-primary-800/30">
                <h3 className="font-bold text-slate-900 dark:text-white mb-3 text-sm">Onze belofte</h3>
                <ul className="space-y-2.5">
                  {['Gratis consultatie (30 min)', 'Offerte binnen 24 uur', 'Geen verborgen kosten', 'Persoonlijk contact'].map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                      <CheckCircle size={13} className="text-green-500 shrink-0" />
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
