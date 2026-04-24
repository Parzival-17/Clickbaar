import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight, ChevronDown, ChevronUp, X } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: '99',
    popular: false,
    target: 'Heel kleine bedrijven',
    desc: 'Eerste stap online.',
    features: ['1 pagina (one-pager)', 'Contact formulier', 'Mobile-friendly', 'Basis SEO', 'Hosting + domain 1 jaar', 'SSL certificaat'],
    notIncluded: ['Portfolio sectie', 'Email hosting', 'Onderhoud'],
  },
  {
    name: 'Standard',
    price: '150',
    popular: true,
    target: 'Lokale bedrijven',
    desc: 'Het populairste pakket.',
    features: ["3-4 pagina's", 'Contact formulier + notificaties', 'Basis portfolio', 'SEO geoptimaliseerd', 'Hosting + domain 1 jaar', '2 uur aanpassingen', 'Google Analytics', 'SSL certificaat'],
    notIncluded: ['Email hosting', '6 maanden onderhoud'],
  },
  {
    name: 'Professional',
    price: '299',
    popular: false,
    target: 'Groeibedrijven',
    desc: 'Serieuze online aanwezigheid.',
    features: ["5-6 pagina's", 'Uitgebreid portfolio', 'Email hosting (1)', 'Geavanceerde SEO', '3 maanden onderhoud', 'Google Analytics + Search Console', 'Performance optimalisatie'],
    notIncluded: ['Blog sectie', '6 maanden onderhoud'],
  },
  {
    name: 'Premium',
    price: '499',
    popular: false,
    target: 'Professionele bedrijven',
    desc: 'Alles inbegrepen.',
    features: ["8+ pagina's unlimited", 'Blog & nieuws', 'Email hosting (3)', 'Volledige SEO-strategie', '6 maanden onderhoud', 'Hosting + domain 2 jaar', 'Maandelijks rapport', 'Prioriteit support'],
    notIncluded: [],
  },
]

const addons = [
  { name: 'Maintenance Plan', price: '€29/mnd', desc: 'Updates, security & support' },
  { name: 'SEO Package', price: '€49/mnd', desc: 'Maandelijkse SEO-optimalisatie' },
  { name: 'Design Updates', price: '€79/mnd', desc: 'Onbeperkt kleine aanpassingen' },
]

const faqs = [
  { q: 'Kan ik later upgraden?', a: 'Ja! Je kan altijd upgraden naar een hoger plan. We berekenen het verschil en passen de website aan.' },
  { q: 'Hoe lang duurt het bouwen?', a: 'Standard websites in 5-7 werkdagen. Professional en Premium 7-14 werkdagen.' },
  { q: 'Wat is inbegrepen in de prijs?', a: 'Domain, hosting, SSL, responsief design en SEO-basis. Geen verborgen kosten.' },
  { q: 'Hoe werkt de support?', a: 'Via email (info@clickbaar.nl). We antwoorden binnen 24-48 uur. Premium krijgt prioriteit.' },
  { q: 'Heb ik technische kennis nodig?', a: 'Nee! Wij regelen alles. Je hoeft niks te weten van websites of hosting.' },
  { q: 'Wat als ik niet tevreden ben?', a: 'We werken op revisierondes en stoppen niet totdat jij blij bent.' },
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="card rounded-xl overflow-hidden">
      <button
        className="w-full text-left flex items-center justify-between p-5 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
        onClick={() => setOpen((o) => !o)}
      >
        <span className="font-semibold text-slate-800 dark:text-slate-200 text-sm pr-4">{q}</span>
        {open
          ? <ChevronUp size={17} className="text-primary-600 dark:text-primary-400 shrink-0" />
          : <ChevronDown size={17} className="text-slate-400 dark:text-slate-500 shrink-0" />
        }
      </button>
      {open && (
        <div className="px-5 pb-5 text-sm text-slate-500 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-700 pt-4">
          {a}
        </div>
      )}
    </div>
  )
}

export default function Pricing() {
  return (
    <>
      <section className="relative bg-white dark:bg-slate-950 py-24 overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute top-0 left-0 w-[500px] h-[400px] bg-primary-50 dark:bg-primary-900/20 rounded-full blur-[100px] opacity-60 -translate-y-1/4 -translate-x-1/4" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <span className="section-tag">Pricing</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mt-4 mb-4">
            Eerlijke, <span className="gradient-text">transparante</span> prijzen
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Kies het pakket dat bij jouw bedrijf past. Geen verborgen kosten, geen verrassingen.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 dark:bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5 items-start">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl overflow-hidden transition-all ${
                  plan.popular
                    ? 'bg-primary-600 shadow-btn ring-2 ring-primary-600 scale-[1.03]'
                    : 'card'
                }`}
              >
                {plan.popular && (
                  <div className="bg-white/20 text-white text-xs font-bold text-center py-2 tracking-wider uppercase">
                    Meest populair
                  </div>
                )}
                <div className="p-6">
                  <h3 className={`text-xl font-extrabold ${plan.popular ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-xs mt-1 mb-4 ${plan.popular ? 'text-primary-100' : 'text-slate-400 dark:text-slate-500'}`}>
                    {plan.target}
                  </p>
                  <div className="flex items-end gap-1 mb-1">
                    <span className={`text-4xl font-black ${plan.popular ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                      €{plan.price}
                    </span>
                    <span className={`text-sm mb-1.5 ${plan.popular ? 'text-primary-200' : 'text-slate-400 dark:text-slate-500'}`}>
                      eenmalig
                    </span>
                  </div>
                  <p className={`text-xs mb-5 ${plan.popular ? 'text-primary-100' : 'text-slate-400 dark:text-slate-500'}`}>
                    {plan.desc}
                  </p>
                  <Link
                    to="/contact"
                    className={`block text-center font-bold py-3 rounded-xl text-sm transition-all mb-6 ${
                      plan.popular
                        ? 'bg-white text-primary-600 hover:bg-primary-50'
                        : 'btn-primary'
                    }`}
                  >
                    Kies {plan.name}
                  </Link>
                  <ul className="space-y-2.5">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs">
                        <CheckCircle size={14} className={`shrink-0 mt-0.5 ${plan.popular ? 'text-green-300' : 'text-green-500'}`} />
                        <span className={plan.popular ? 'text-primary-100' : 'text-slate-600 dark:text-slate-300'}>{f}</span>
                      </li>
                    ))}
                    {plan.notIncluded.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs">
                        <X size={14} className={`shrink-0 mt-0.5 ${plan.popular ? 'text-primary-300/50' : 'text-slate-300 dark:text-slate-600'}`} />
                        <span className={plan.popular ? 'text-primary-200/50' : 'text-slate-300 dark:text-slate-600'}>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-slate-400 dark:text-slate-500 mt-6">
            Alle prijzen zijn exclusief BTW.
          </p>
        </div>
      </section>

      <section className="bg-white dark:bg-slate-950 py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="section-tag">Add-ons</span>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mt-4">
              Maandelijkse <span className="gradient-text">diensten</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {addons.map((addon) => (
              <div key={addon.name} className="card card-hover rounded-2xl p-6 text-center">
                <h3 className="font-bold text-slate-900 dark:text-white mb-1 text-sm">{addon.name}</h3>
                <p className="text-2xl font-black gradient-text my-2">{addon.price}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">{addon.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/contact" className="btn-primary px-8 py-3.5 gap-2">
              Vraag een offerte aan <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 dark:bg-slate-900 py-20">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="section-tag">FAQ</span>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mt-4">
              Veelgestelde <span className="gradient-text">vragen</span>
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
