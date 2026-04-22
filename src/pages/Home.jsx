import { Link } from 'react-router-dom'
import { ArrowRight, Monitor, Settings, Search, CheckCircle, Star, ChevronRight } from 'lucide-react'

const stats = [
  { value: '1.000+', label: 'Views per maand' },
  { value: '25+', label: 'Websites gebouwd' },
  { value: '98%', label: 'Klanten tevreden' },
  { value: '2+', label: 'Jaar ervaring' },
]

const servicesOverview = [
  {
    icon: Monitor,
    title: 'Website Bouwen',
    desc: 'Modern, snel en effectief',
    detail: 'Professionele websites die jouw bedrijf laten groeien – in 5-7 werkdagen live.',
  },
  {
    icon: Settings,
    title: 'Onderhoud & Beheer',
    desc: 'Jouw site, onze zorg',
    detail: 'Updates, beveiliging en performance monitoring – zodat jij je kunt focussen op je business.',
  },
  {
    icon: Search,
    title: 'SEO & Vindbaarheid',
    desc: 'Online zichtbaar worden',
    detail: 'Gevonden worden op Google door je doelgroep. Lokale SEO specialist in Noord-Holland.',
  },
]

const steps = [
  {
    number: '01',
    emoji: '🔍',
    title: 'Consultatie',
    desc: 'We nemen de tijd om jouw bedrijf, doelen en doelgroep te begrijpen. Een gratis gesprek van 30 minuten.',
  },
  {
    number: '02',
    emoji: '🛠️',
    title: 'Bouw',
    desc: 'We bouwen jouw website – professioneel design, snelle code en alle functionaliteit die je nodig hebt.',
  },
  {
    number: '03',
    emoji: '🚀',
    title: 'Launch',
    desc: "Je gaat live! Met een volledig responsieve website die klanten aantrekt. Support inbegrepen.",
  },
]

const testimonials = [
  {
    name: 'Fatima el-Hassan',
    company: 'Kapsalon Shine, Alkmaar',
    rating: 5,
    quote: 'Binnen een week had ik een prachtige website. Klanten vinden me nu makkelijk via Google. Absoluut de investering waard!',
  },
  {
    name: 'Marco de Vries',
    company: 'Restaurant De Gouden Lepel, Haarlem',
    rating: 5,
    quote: 'Professionele service, snelle levering. De reserveringen via mijn website zijn met 40% gestegen. Geweldig werk!',
  },
  {
    name: 'Lisa Bakker',
    company: 'Fitness Coach, Noord-Holland',
    rating: 5,
    quote: 'Jesse heeft mijn personal brand website perfect neergezet. Stijlvol, snel en precies wat ik wilde. Aanrader!',
  },
]

function StarRating({ count = 5 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={16} className="text-accent fill-accent" />
      ))}
    </div>
  )
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-deep-blue relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-accent/20 text-accent text-sm font-semibold px-3 py-1 rounded-full mb-6">
                Web Design Agency · Heiloo, Noord-Holland
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                Jouw Website,<br />
                <span className="text-accent">Onze Expertise</span>
              </h1>
              <p className="text-lg text-white/75 mb-8 leading-relaxed max-w-lg">
                Professionele websites voor lokale bedrijven. Snel geleverd, betaalbaar geprijsd en effectief voor jouw doelgroep.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="bg-accent hover:bg-orange-600 text-white font-bold px-7 py-3.5 rounded-xl text-base inline-flex items-center gap-2 transition-colors"
                >
                  Gratis Website Audit
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/services"
                  className="border border-white/30 hover:border-white text-white font-semibold px-7 py-3.5 rounded-xl text-base inline-flex items-center gap-2 transition-colors"
                >
                  Bekijk Services
                  <ChevronRight size={18} />
                </Link>
              </div>
              <div className="flex items-center gap-3 mt-8 text-white/60 text-sm">
                <CheckCircle size={16} className="text-green-400" />
                <span>5-7 werkdagen levering</span>
                <span className="text-white/30">·</span>
                <CheckCircle size={16} className="text-green-400" />
                <span>Gratis consultatie</span>
                <span className="text-white/30">·</span>
                <CheckCircle size={16} className="text-green-400" />
                <span>Geen jargon</span>
              </div>
            </div>
            {/* Visual placeholder */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-full max-w-md">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-2xl">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                    <div className="ml-2 flex-1 bg-white/10 rounded px-3 py-1 text-xs text-white/50">
                      clickbaar.nl
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-5 bg-white/20 rounded w-3/4" />
                    <div className="h-3 bg-white/10 rounded w-full" />
                    <div className="h-3 bg-white/10 rounded w-5/6" />
                    <div className="h-9 bg-accent rounded-lg w-40 mt-4" />
                    <div className="mt-4 grid grid-cols-3 gap-3">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-white/10 rounded-lg p-3 space-y-1.5">
                          <div className="h-8 bg-white/20 rounded" />
                          <div className="h-2 bg-white/10 rounded" />
                          <div className="h-2 bg-white/10 rounded w-3/4" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-accent text-white rounded-xl px-4 py-2 text-sm font-bold shadow-lg">
                  Live in 5 dagen 🚀
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-extrabold text-accent mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-light-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Wat we doen</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-deep-blue mt-2">
              Alles wat jouw bedrijf nodig heeft
            </h2>
            <p className="mt-3 text-gray-500 max-w-xl mx-auto">
              Van een gloednieuwe website tot onderhoud en SEO – wij regelen het allemaal.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {servicesOverview.map((s) => {
              const Icon = s.icon
              return (
                <div key={s.title} className="bg-white rounded-2xl p-7 shadow-sm hover-lift border border-gray-100">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-5">
                    <Icon size={24} className="text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-deep-blue mb-1">{s.title}</h3>
                  <p className="text-sm font-semibold text-accent mb-3">{s.desc}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.detail}</p>
                  <Link
                    to="/services"
                    className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-deep-blue hover:text-accent transition-colors"
                  >
                    Meer info <ArrowRight size={14} />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Het proces</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-deep-blue mt-2">
              Van idee naar website in 3 stappen
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-8 left-1/3 right-1/3 h-0.5 bg-accent/20" />
            {steps.map((step, i) => (
              <div key={step.title} className="text-center relative">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-deep-blue text-white rounded-2xl text-2xl mb-5 shadow-md">
                  {step.emoji}
                </div>
                <div className="absolute top-0 right-0 md:right-4 text-6xl font-black text-gray-100 -z-0 select-none">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-deep-blue mb-3 relative z-10">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed relative z-10">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="bg-accent hover:bg-orange-600 text-white font-bold px-8 py-3.5 rounded-xl inline-flex items-center gap-2 transition-colors"
            >
              Start jouw traject
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-light-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Klanten aan het woord</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-deep-blue mt-2">
              Wat onze klanten zeggen
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 flex flex-col">
                <StarRating count={t.rating} />
                <p className="text-gray-600 text-sm leading-relaxed mt-4 flex-1">"{t.quote}"</p>
                <div className="mt-6 pt-5 border-t border-gray-100">
                  <div className="font-bold text-deep-blue text-sm">{t.name}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{t.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-deep-blue py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Klaar om online te gaan?
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Laten we samen jouw website bouwen. Start met een gratis audit – geen verplichtingen.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-accent hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl text-base inline-flex items-center gap-2 transition-colors"
            >
              Neem contact op
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/pricing"
              className="border border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-xl text-base transition-colors"
            >
              Bekijk prijzen
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
