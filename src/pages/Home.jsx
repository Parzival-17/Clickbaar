import { Link } from 'react-router-dom'
import { ArrowRight, Monitor, Settings, Search, CheckCircle, Star, ChevronRight, Zap } from 'lucide-react'

const stats = [
  { value: '1.000+', label: 'Views per maand' },
  { value: '25+', label: 'Websites gebouwd' },
  { value: '98%', label: 'Klanten tevreden' },
  { value: '5–7', label: 'Werkdagen levering' },
]

const servicesOverview = [
  {
    icon: Monitor,
    title: 'Website Bouwen',
    desc: 'Modern, snel, effectief',
    detail: 'Professionele websites die jouw bedrijf laten groeien – in 5-7 werkdagen live.',
    gradient: 'from-indigo-500/20 to-blue-500/20',
    iconColor: 'text-indigo-400',
  },
  {
    icon: Settings,
    title: 'Onderhoud & Beheer',
    desc: 'Jouw site, onze zorg',
    detail: 'Updates, beveiliging en performance monitoring – zodat jij focust op je business.',
    gradient: 'from-purple-500/20 to-pink-500/20',
    iconColor: 'text-purple-400',
  },
  {
    icon: Search,
    title: 'SEO & Vindbaarheid',
    desc: 'Online zichtbaar worden',
    detail: 'Gevonden worden op Google door je doelgroep. Lokale SEO specialist in Noord-Holland.',
    gradient: 'from-orange-500/20 to-amber-500/20',
    iconColor: 'text-accent',
  },
]

const steps = [
  { number: '01', emoji: '🔍', title: 'Consultatie', desc: 'Gratis gesprek van 30 minuten – we begrijpen jouw bedrijf en doelen.' },
  { number: '02', emoji: '🛠️', title: 'Bouw', desc: 'We bouwen jouw website snel, professioneel en op maat.' },
  { number: '03', emoji: '🚀', title: 'Launch', desc: 'Live in 5-7 werkdagen. Jij krijgt klanten, wij blijven supporten.' },
]

const testimonials = [
  {
    name: 'Fatima el-Hassan',
    company: 'Kapsalon Shine, Alkmaar',
    rating: 5,
    quote: 'Binnen een week had ik een prachtige website. Klanten vinden me nu makkelijk via Google. Absoluut de investering waard!',
    avatar: 'FH',
    color: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Marco de Vries',
    company: 'Restaurant De Gouden Lepel',
    rating: 5,
    quote: 'Professionele service, snelle levering. De reserveringen via mijn website zijn met 40% gestegen!',
    avatar: 'MV',
    color: 'from-indigo-500 to-blue-500',
  },
  {
    name: 'Lisa Bakker',
    company: 'Fitness Coach, Noord-Holland',
    rating: 5,
    quote: 'Jesse heeft mijn personal brand website perfect neergezet. Stijlvol, snel en precies wat ik wilde. Aanrader!',
    avatar: 'LB',
    color: 'from-orange-500 to-amber-500',
  },
]

function Stars({ count = 5 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
      ))}
    </div>
  )
}

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center bg-[#07071a] overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 grid-pattern" />

        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[120px] animate-float-slow" />
        <div className="absolute top-3/4 left-1/2 w-[300px] h-[300px] bg-orange-600/10 rounded-full blur-[100px] animate-float-xslow" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white/60 text-sm">Web Design Agency · Heiloo, Noord-Holland</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
              Jouw Website,<br />
              <span className="gradient-text">Onze Expertise</span>
            </h1>

            <p className="text-lg md:text-xl text-white/50 mb-10 max-w-2xl mx-auto leading-relaxed">
              Professionele websites voor lokale bedrijven. Snel geleverd, betaalbaar geprijsd en effectief voor jouw doelgroep.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-accent hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl inline-flex items-center gap-2 transition-all glow-orange text-base"
              >
                Gratis Website Audit
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/services"
                className="glass glass-hover text-white font-semibold px-8 py-4 rounded-xl inline-flex items-center gap-2 text-base"
              >
                Bekijk Services
                <ChevronRight size={18} />
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-5 text-sm text-white/40">
              {['5-7 werkdagen levering', 'Gratis consultatie', 'Geen verborgen kosten'].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <CheckCircle size={14} className="text-green-400" />
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Floating browser mockup */}
          <div className="mt-20 max-w-3xl mx-auto">
            <div className="glass gradient-border rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
              {/* Browser bar */}
              <div className="flex items-center gap-3 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <div className="flex-1 bg-white/5 rounded-md px-4 py-1 text-xs text-white/30 text-center">
                  jouwbedrijf.nl
                </div>
              </div>
              {/* Content placeholder */}
              <div className="p-6 space-y-4">
                <div className="flex gap-4">
                  <div className="flex-1 space-y-2">
                    <div className="h-6 bg-white/10 rounded w-3/4" />
                    <div className="h-3 bg-white/5 rounded w-full" />
                    <div className="h-3 bg-white/5 rounded w-4/5" />
                    <div className="h-9 bg-accent/40 rounded-lg w-36 mt-3" />
                  </div>
                  <div className="w-32 h-28 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl hidden sm:block" />
                </div>
                <div className="grid grid-cols-3 gap-3 pt-2">
                  {['from-indigo-500/20 to-blue-500/20', 'from-purple-500/20 to-pink-500/20', 'from-orange-500/20 to-amber-500/20'].map((g, i) => (
                    <div key={i} className={`bg-gradient-to-br ${g} rounded-xl p-4 space-y-2`}>
                      <div className="h-8 bg-white/10 rounded" />
                      <div className="h-2 bg-white/5 rounded" />
                      <div className="h-2 bg-white/5 rounded w-3/4" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Floating tag */}
            <div className="flex justify-end mt-3 mr-4">
              <div className="glass rounded-full px-4 py-1.5 text-xs text-white/60 inline-flex items-center gap-1.5">
                <Zap size={12} className="text-accent" />
                Live in 5 werkdagen
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-[#09091e] border-y border-white/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {stats.map((stat) => (
              <div key={stat.label} className="glass rounded-2xl p-6 text-center glass-hover">
                <div className="text-3xl md:text-4xl font-extrabold gradient-text mb-1">{stat.value}</div>
                <div className="text-sm text-white/40">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="bg-[#07071a] py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[160px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">Wat we doen</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3">
              Alles wat jouw bedrijf{' '}
              <span className="gradient-text">nodig heeft</span>
            </h2>
            <p className="mt-3 text-white/40 max-w-xl mx-auto text-sm">
              Van een gloednieuwe website tot onderhoud en SEO – wij regelen het allemaal.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {servicesOverview.map((s) => {
              const Icon = s.icon
              return (
                <div key={s.title} className="glass glass-hover rounded-2xl p-7">
                  <div className={`w-12 h-12 bg-gradient-to-br ${s.gradient} rounded-xl flex items-center justify-center mb-5`}>
                    <Icon size={22} className={s.iconColor} />
                  </div>
                  <h3 className="text-base font-bold text-white mb-1">{s.title}</h3>
                  <p className="text-xs font-semibold text-accent mb-3">{s.desc}</p>
                  <p className="text-white/40 text-sm leading-relaxed">{s.detail}</p>
                  <Link
                    to="/services"
                    className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-indigo-400 hover:text-white transition-colors"
                  >
                    Meer info <ArrowRight size={13} />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="bg-[#09091e] py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-[80px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">Het proces</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3">
              Van idee naar website{' '}
              <span className="gradient-text">in 3 stappen</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 relative">
            {/* Connector */}
            <div className="hidden md:block absolute top-8 left-[calc(33.33%+8px)] right-[calc(33.33%+8px)] h-px bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-orange-500/30" />
            {steps.map((step, i) => (
              <div key={step.title} className="glass rounded-2xl p-8 text-center relative">
                <div className="text-5xl font-black text-white/5 absolute top-4 right-5 select-none">{step.number}</div>
                <div className="text-4xl mb-4">{step.emoji}</div>
                <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/contact"
              className="bg-accent hover:bg-orange-600 text-white font-bold px-8 py-3.5 rounded-xl inline-flex items-center gap-2 transition-all glow-orange"
            >
              Start jouw traject <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="bg-[#07071a] py-24 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-64 bg-indigo-600/10 rounded-full blur-[100px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">Klanten aan het woord</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3">
              Wat onze klanten{' '}
              <span className="gradient-text">zeggen</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div key={t.name} className="glass glass-hover rounded-2xl p-7 flex flex-col">
                <Stars count={t.rating} />
                <p className="text-white/60 text-sm leading-relaxed mt-4 flex-1">"{t.quote}"</p>
                <div className="mt-6 pt-5 border-t border-white/5 flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-xs font-bold text-white shrink-0`}>
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">{t.name}</div>
                    <div className="text-xs text-white/30">{t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative bg-[#09091e] py-24 overflow-hidden">
        <div className="absolute inset-0 dot-pattern" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-indigo-600/15 rounded-full blur-[80px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[100px] bg-accent/10 rounded-full blur-[60px]" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <div className="gradient-border p-10 rounded-3xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Klaar om{' '}
              <span className="gradient-text">online te gaan?</span>
            </h2>
            <p className="text-white/50 text-lg mb-8">
              Laten we samen jouw website bouwen. Start met een gratis audit – geen verplichtingen.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-accent hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl inline-flex items-center gap-2 transition-all glow-orange"
              >
                Neem contact op <ArrowRight size={18} />
              </Link>
              <Link
                to="/pricing"
                className="glass glass-hover text-white font-semibold px-8 py-4 rounded-xl"
              >
                Bekijk prijzen
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
