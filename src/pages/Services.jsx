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
    iconBg: 'bg-primary-50 dark:bg-primary-900/30',
    iconColor: 'text-primary-600 dark:text-primary-400',
    border: 'border-primary-100 dark:border-primary-900/40',
    tagColor: 'text-primary-600 dark:text-primary-400',
  },
  {
    icon: Settings,
    title: 'Onderhoud & Beheer',
    tagline: 'We zorgen dat je website altijd up-to-date is',
    desc: 'Een website is nooit "af". Updates, beveiligingspatches, backups en performance – wij houden alles bij zodat jij je op je business kunt richten.',
    features: ['Maandelijkse updates', 'Security patches', 'Automatische backups', 'Email support', 'Uptime monitoring', 'Content updates', 'Maandelijks rapport'],
    cta: 'Bekijk maintenance plans',
    ctaLink: '/pricing',
    iconBg: 'bg-violet-50 dark:bg-violet-900/30',
    iconColor: 'text-violet-600 dark:text-violet-400',
    border: 'border-violet-100 dark:border-violet-900/40',
    tagColor: 'text-violet-600 dark:text-violet-400',
  },
  {
    icon: Search,
    title: 'SEO & Vindbaarheid',
    tagline: 'Gevonden worden op Google door klanten',
    desc: 'Lokale SEO is de sleutel voor kleine bedrijven. We zorgen dat jouw website gevonden wordt door mensen in jouw regio.',
    features: ['Keyword research', 'Google Business setup', 'Lokale SEO', 'Technische audit', 'Meta tags & structured data', 'Ranking rapport', 'Concurrentieanalyse'],
    cta: 'Start je SEO journey',
    ctaLink: '/contact',
    iconBg: 'bg-amber-50 dark:bg-amber-900/30',
    iconColor: 'text-amber-600 dark:text-amber-400',
    border: 'border-amber-100 dark:border-amber-900/40',
    tagColor: 'text-amber-600 dark:text-amber-400',
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
      <section className="relative bg-white dark:bg-slate-950 py-24 overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-violet-50 dark:bg-violet-900/20 rounded-full blur-[100px] opacity-70 -translate-y-1/4 translate-x-1/4" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-tag">Services</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mt-4 mb-4">
            Alles voor jouw <span className="gradient-text">online groei</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Van een nieuwe website tot SEO en onderhoud – wij bieden alles wat lokale bedrijven nodig hebben.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 dark:bg-slate-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div key={service.title} className="grid lg:grid-cols-2 gap-12 items-center">
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className={`inline-flex items-center justify-center w-14 h-14 ${service.iconBg} rounded-2xl mb-5`}>
                    <Icon size={26} className={service.iconColor} />
                  </div>
                  <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-3">{service.title}</h2>
                  <p className={`font-semibold mb-4 ${service.tagColor}`}>{service.tagline}</p>
                  <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-6 text-sm">{service.desc}</p>
                  <Link to={service.ctaLink} className="btn-primary px-6 py-3 gap-2">
                    {service.cta} <ArrowRight size={16} />
                  </Link>
                </div>
                <div className={`card rounded-2xl p-8 ${service.border} ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h3 className="font-semibold text-slate-400 dark:text-slate-500 mb-5 text-xs uppercase tracking-widest">Inbegrepen</h3>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                        <CheckCircle size={16} className="text-green-500 shrink-0" />
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

      <section className="bg-white dark:bg-slate-950 py-24 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-tag">Hoe werkt het</span>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mt-4">
              Ons <span className="gradient-text">werkproces</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {process.map((p) => (
              <div key={p.step} className="card card-hover rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white font-bold text-sm">
                  {p.step}
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-2 text-sm">{p.title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary-600 py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white opacity-5 rounded-full blur-[80px]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
            Transparante prijzen, geen verrassingen
          </h2>
          <p className="text-primary-100 mb-6 text-sm">
            Starter €99 · Standard €150 · Professional €299 · Premium €499
          </p>
          <Link to="/pricing" className="bg-white text-primary-600 font-bold px-8 py-3.5 rounded-xl inline-flex items-center gap-2 hover:bg-primary-50 transition-colors shadow-btn">
            Bekijk alle prijzen <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
