import { Link } from 'react-router-dom'
import { Monitor, Settings, Search, CheckCircle, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Monitor,
    title: 'Website Bouwen',
    tagline: 'Moderne websites gebouwd in dagen, niet weken',
    desc: 'We ontwerpen en bouwen een professionele website die perfect past bij jouw bedrijf. Van simpele one-pager tot uitgebreide bedrijfswebsite – altijd op maat.',
    features: ['Responsive design', 'Snelle laadtijd', 'SEO-basis ingebouwd', 'Contact formulier', 'SSL & beveiliging', 'Google Analytics', 'Design op maat'],
    cta: 'Vraag een gratis audit aan',
    ctaLink: '/contact',
    gradient: 'from-indigo-500/15 to-blue-500/15',
    iconGradient: 'from-indigo-500/30 to-blue-500/30',
    iconColor: 'text-indigo-400',
    accentColor: 'text-indigo-400',
  },
  {
    icon: Settings,
    title: 'Onderhoud & Beheer',
    tagline: 'We zorgen dat je website altijd up-to-date is',
    desc: 'Een website is nooit "af". Updates, beveiligingspatches, backups en performance – wij houden alles bij zodat jij je op je business kunt richten.',
    features: ['Maandelijkse updates', 'Security patches', 'Automatische backups', 'Email support', 'Uptime monitoring', 'Content updates', 'Maandelijks rapport'],
    cta: 'Bekijk maintenance plans',
    ctaLink: '/pricing',
    gradient: 'from-purple-500/15 to-pink-500/15',
    iconGradient: 'from-purple-500/30 to-pink-500/30',
    iconColor: 'text-purple-400',
    accentColor: 'text-purple-400',
  },
  {
    icon: Search,
    title: 'SEO & Vindbaarheid',
    tagline: 'Gevonden worden op Google door klanten',
    desc: 'Lokale SEO is de sleutel voor kleine bedrijven. We zorgen dat jouw website gevonden wordt door mensen in jouw regio.',
    features: ['Keyword research', 'Google Business setup', 'Lokale SEO', 'Technische audit', 'Meta tags & structured data', 'Ranking rapport', 'Concurrentieanalyse'],
    cta: 'Start je SEO journey',
    ctaLink: '/contact',
    gradient: 'from-orange-500/15 to-amber-500/15',
    iconGradient: 'from-orange-500/30 to-amber-500/30',
    iconColor: 'text-accent',
    accentColor: 'text-accent',
  },
]

const process = [
  { step: '01', title: 'Intake gesprek', desc: 'We bespreken jouw wensen, doelgroep en doelen.' },
  { step: '02', title: 'Offerte', desc: 'Heldere offerte binnen 24 uur. Geen verrassingen.' },
  { step: '03', title: 'Design & Bouw', desc: 'We bouwen jouw website snel en professioneel.' },
  { step: '04', title: 'Review & Launch', desc: 'Samen controleren we alles, dan gaan we live!' },
]

export default function Services() {
  return (
    <>
      {/* Page header */}
      <section className="relative bg-[#07071a] py-24 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-64 bg-purple-600/15 rounded-full blur-[100px]" />
        <div className="absolute inset-0 grid-pattern" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">Services</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-4">
            Alles voor jouw{' '}
            <span className="gradient-text">online groei</span>
          </h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Van een nieuwe website tot SEO en onderhoud – wij bieden alles wat lokale bedrijven nodig hebben.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-[#09091e] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div key={service.title} className={`grid lg:grid-cols-2 gap-10 items-center`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${service.iconGradient} rounded-2xl mb-5`}>
                    <Icon size={26} className={service.iconColor} />
                  </div>
                  <h2 className="text-3xl font-extrabold text-white mb-3">{service.title}</h2>
                  <p className={`font-semibold mb-4 ${service.accentColor}`}>{service.tagline}</p>
                  <p className="text-white/40 leading-relaxed mb-6 text-sm">{service.desc}</p>
                  <Link
                    to={service.ctaLink}
                    className="bg-accent hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-xl inline-flex items-center gap-2 transition-all glow-orange"
                  >
                    {service.cta} <ArrowRight size={16} />
                  </Link>
                </div>
                <div className={`bg-gradient-to-br ${service.gradient} glass rounded-2xl p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h3 className="font-semibold text-white/60 mb-5 text-xs uppercase tracking-widest">Inbegrepen</h3>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm text-white/70">
                        <CheckCircle size={16} className="text-accent shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#07071a] py-24 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">Hoe werkt het</span>
            <h2 className="text-3xl font-extrabold text-white mt-3">
              Ons <span className="gradient-text">werkproces</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {process.map((p) => (
              <div key={p.step} className="glass glass-hover rounded-2xl p-6 text-center">
                <div className="text-4xl font-black gradient-text mb-3">{p.step}</div>
                <h3 className="font-bold text-white mb-2 text-sm">{p.title}</h3>
                <p className="text-xs text-white/40">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing preview */}
      <section className="relative bg-[#09091e] py-16 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-32 bg-accent/10 rounded-full blur-[60px]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
            Transparante prijzen, geen verrassingen
          </h2>
          <p className="text-white/40 mb-6 text-sm">
            Starter €99 · Standard €150 · Professional €299 · Premium €499
          </p>
          <Link
            to="/pricing"
            className="bg-accent hover:bg-orange-600 text-white font-bold px-8 py-3.5 rounded-xl inline-flex items-center gap-2 transition-all glow-orange"
          >
            Bekijk alle prijzen <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
