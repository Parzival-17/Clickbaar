import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: '99',
    popular: false,
    target: 'Heel kleine bedrijven',
    desc: 'Perfect voor een eerste online aanwezigheid.',
    features: [
      '1 pagina (one-pager)',
      'Contact formulier',
      'Mobile-friendly design',
      'Basis SEO',
      'Hosting + domain 1 jaar',
      'SSL certificaat',
    ],
    notIncluded: ['Portfolio sectie', 'Email hosting', 'Onderhoud'],
  },
  {
    name: 'Standard',
    price: '150',
    popular: true,
    target: 'Lokale bedrijven',
    desc: 'Het populairste pakket voor lokale ondernemers.',
    features: [
      '3-4 pagina\'s',
      'Contact formulier + notificaties',
      'Basis portfolio sectie',
      'SEO geoptimaliseerd',
      'Hosting + domain 1 jaar',
      '2 uur gratis aanpassingen',
      'Google Analytics setup',
      'SSL certificaat',
    ],
    notIncluded: ['Email hosting', '6 maanden onderhoud'],
  },
  {
    name: 'Professional',
    price: '299',
    popular: false,
    target: 'Groeibedrijven',
    desc: 'Voor bedrijven die serieus willen groeien online.',
    features: [
      '5-6 pagina\'s',
      'Uitgebreid portfolio',
      'Email hosting (1 account)',
      'Geavanceerde SEO',
      '3 maanden gratis onderhoud',
      'Google Analytics + Search Console',
      'Performance optimalisatie',
      'SSL certificaat',
    ],
    notIncluded: ['Blog sectie', '6 maanden onderhoud'],
  },
  {
    name: 'Premium',
    price: '499',
    popular: false,
    target: 'Professionele bedrijven',
    desc: 'Alles inbegrepen voor een volledige online aanwezigheid.',
    features: [
      '8+ pagina\'s (alles unlimited)',
      'Blog & nieuws sectie',
      'Email hosting (3 accounts)',
      'Volledige SEO-strategie',
      '6 maanden gratis onderhoud',
      'Hosting + domain 2 jaar',
      'Google Analytics + Search Console',
      'Maandelijks rapport',
      'Prioriteit support',
    ],
    notIncluded: [],
  },
]

const addons = [
  { name: 'Maintenance Plan', price: '€29/mnd', desc: 'Updates, security & support' },
  { name: 'SEO Package', price: '€49/mnd', desc: 'Maandelijkse SEO-optimalisatie' },
  { name: 'Design Updates', price: '€79/mnd', desc: 'Onbeperkt kleine aanpassingen' },
]

const faqs = [
  {
    q: 'Kan ik later upgraden naar een hoger plan?',
    a: 'Ja! Je kan altijd upgraden naar een hoger plan. We berekenen het verschil en passen de website aan. Geen extra kosten voor de upgrade zelf.',
  },
  {
    q: 'Hoe lang duurt het bouwen van een website?',
    a: 'Standard websites leveren we in 5-7 werkdagen. Voor Professional en Premium plannen rekenen we 7-14 werkdagen. We houden je op de hoogte van de voortgang.',
  },
  {
    q: 'Wat is precies inbegrepen in de prijs?',
    a: 'Domain registratie (1e jaar), hosting, SSL certificaat, responsief design, SEO-basis en de benodigde pagina\'s. Geen verborgen kosten.',
  },
  {
    q: 'Hoe werkt de support?',
    a: 'Je bereikt ons via email (info@clickbaar.nl). We antwoorden binnen 24-48 uur. Premium klanten krijgen prioriteit support.',
  },
  {
    q: 'Heb ik technische kennis nodig?',
    a: 'Nee! Wij regelen alles voor je. Je hoeft niks te weten van websites, code of hosting. Wij leggen alles in begrijpelijke taal uit.',
  },
  {
    q: 'Wat als ik niet tevreden ben?',
    a: 'We werken op basis van revisierondes en zorgen dat je tevreden bent. We stoppen niet totdat jij blij bent met het eindresultaat.',
  },
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-gray-100 rounded-xl overflow-hidden">
      <button
        className="w-full text-left flex items-center justify-between p-5 bg-white hover:bg-light-bg transition-colors"
        onClick={() => setOpen((o) => !o)}
      >
        <span className="font-semibold text-deep-blue text-sm pr-4">{q}</span>
        {open ? <ChevronUp size={18} className="text-accent shrink-0" /> : <ChevronDown size={18} className="text-gray-400 shrink-0" />}
      </button>
      {open && (
        <div className="px-5 pb-5 text-sm text-gray-500 leading-relaxed bg-white">
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
      <section className="bg-deep-blue py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Pricing</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-4">
            Eerlijke, transparante prijzen
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Kies het pakket dat bij jouw bedrijf past. Geen verborgen kosten, geen verrassingen.
          </p>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="bg-light-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6 items-start">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl overflow-hidden shadow-sm border ${
                  plan.popular
                    ? 'border-accent ring-2 ring-accent bg-white'
                    : 'border-gray-100 bg-white'
                }`}
              >
                {plan.popular && (
                  <div className="bg-accent text-white text-xs font-bold text-center py-2 tracking-wider uppercase">
                    ⭐ Meest populair
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-extrabold text-deep-blue">{plan.name}</h3>
                  <p className="text-xs text-gray-400 mt-1 mb-4">{plan.target}</p>
                  <div className="flex items-end gap-1 mb-2">
                    <span className="text-4xl font-black text-deep-blue">€{plan.price}</span>
                    <span className="text-gray-400 text-sm mb-1.5">eenmalig</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-5">{plan.desc}</p>
                  <Link
                    to="/contact"
                    className={`block text-center font-bold py-3 rounded-xl text-sm transition-colors mb-6 ${
                      plan.popular
                        ? 'bg-accent hover:bg-orange-600 text-white'
                        : 'bg-deep-blue hover:bg-blue-900 text-white'
                    }`}
                  >
                    Kies {plan.name}
                  </Link>
                  <ul className="space-y-2.5">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle size={15} className="text-green-500 shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                    {plan.notIncluded.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-gray-300 line-through">
                        <span className="w-3.5 h-3.5 shrink-0 mt-0.5 rounded-full border border-gray-200 inline-block" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-gray-400 mt-8">
            Alle prijzen zijn exclusief BTW. Hosting en domain zijn inbegrepen voor het vermelde aantal jaar.
          </p>
        </div>
      </section>

      {/* Add-ons */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Add-ons</span>
            <h2 className="text-3xl font-extrabold text-deep-blue mt-2">
              Maandelijkse diensten
            </h2>
            <p className="text-gray-500 mt-2">Combineer met elk pakket voor doorlopende ondersteuning.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {addons.map((addon) => (
              <div key={addon.name} className="bg-light-bg rounded-2xl p-6 text-center border border-gray-100">
                <h3 className="font-bold text-deep-blue mb-1">{addon.name}</h3>
                <p className="text-2xl font-black text-accent my-2">{addon.price}</p>
                <p className="text-sm text-gray-500">{addon.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/contact"
              className="bg-accent hover:bg-orange-600 text-white font-bold px-8 py-3.5 rounded-xl inline-flex items-center gap-2 transition-colors"
            >
              Vraag een offerte aan
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-light-bg py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl font-extrabold text-deep-blue mt-2">
              Veelgestelde vragen
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
