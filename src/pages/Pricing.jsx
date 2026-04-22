import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react'

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
    features: ['8+ pagina\'s unlimited', 'Blog & nieuws', 'Email hosting (3)', 'Volledige SEO-strategie', '6 maanden onderhoud', 'Hosting + domain 2 jaar', 'Maandelijks rapport', 'Prioriteit support'],
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
    <div className="glass rounded-xl overflow-hidden">
      <button
        className="w-full text-left flex items-center justify-between p-5 hover:bg-white/[0.03] transition-colors"
        onClick={() => setOpen((o) => !o)}
      >
        <span className="font-semibold text-white/80 text-sm pr-4">{q}</span>
        {open
          ? <ChevronUp size={17} className="text-accent shrink-0" />
          : <ChevronDown size={17} className="text-white/30 shrink-0" />
        }
      </button>
      {open && (
        <div className="px-5 pb-5 text-sm text-white/40 leading-relaxed border-t border-white/5 pt-4">
          {a}
        </div>
      )}
    </div>
  )
}

export default function Pricing() {
  return (
    <>
      {/* Page header */}
      <section className="relative bg-[#07071a] py-24 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-64 bg-indigo-600/15 rounded-full blur-[100px]" />
        <div className="absolute inset-0 grid-pattern" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">Pricing</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-4">
            Eerlijke, <span className="gradient-text">transparante</span> prijzen
          </h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Kies het pakket dat bij jouw bedrijf past. Geen verborgen kosten, geen verrassingen.
          </p>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="bg-[#09091e] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5 items-start">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl overflow-hidden transition-all ${
                  plan.popular
                    ? 'gradient-border scale-[1.03]'
                    : 'glass'
                }`}
              >
                {plan.popular && (
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-bold text-center py-2 tracking-wider uppercase">
                    ⭐ Meest populair
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-extrabold text-white">{plan.name}</h3>
                  <p className="text-xs text-white/30 mt-1 mb-4">{plan.target}</p>
                  <div className="flex items-end gap-1 mb-1">
                    <span className="text-4xl font-black text-white">€{plan.price}</span>
                    <span className="text-white/30 text-sm mb-1.5">eenmalig</span>
                  </div>
                  <p className="text-xs text-white/40 mb-5">{plan.desc}</p>
                  <Link
                    to="/contact"
                    className={`block text-center font-bold py-3 rounded-xl text-sm transition-all mb-6 ${
                      plan.popular
                        ? 'bg-accent hover:bg-orange-600 text-white glow-orange'
                        : 'glass hover:bg-white/10 text-white'
                    }`}
                  >
                    Kies {plan.name}
                  </Link>
                  <ul className="space-y-2.5">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs text-white/60">
                        <CheckCircle size={14} className="text-green-400 shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                    {plan.notIncluded.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs text-white/20 line-through">
                        <span className="w-3.5 h-3.5 shrink-0 mt-0.5 rounded-full border border-white/10 inline-block" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-white/25 mt-6">
            Alle prijzen zijn exclusief BTW.
          </p>
        </div>
      </section>

      {/* Add-ons */}
      <section className="bg-[#07071a] py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">Add-ons</span>
            <h2 className="text-3xl font-extrabold text-white mt-2">
              Maandelijkse <span className="gradient-text">diensten</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {addons.map((addon) => (
              <div key={addon.name} className="glass glass-hover rounded-2xl p-6 text-center">
                <h3 className="font-bold text-white mb-1 text-sm">{addon.name}</h3>
                <p className="text-2xl font-black gradient-text my-2">{addon.price}</p>
                <p className="text-xs text-white/40">{addon.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/contact"
              className="bg-accent hover:bg-orange-600 text-white font-bold px-8 py-3.5 rounded-xl inline-flex items-center gap-2 transition-all glow-orange"
            >
              Vraag een offerte aan <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#09091e] py-20">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">FAQ</span>
            <h2 className="text-3xl font-extrabold text-white mt-2">
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
