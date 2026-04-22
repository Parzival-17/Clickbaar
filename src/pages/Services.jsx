import { Link } from 'react-router-dom'
import { Monitor, Settings, Search, CheckCircle, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Monitor,
    title: 'Website Bouwen',
    tagline: 'Moderne, mobiel-vriendelijke websites gebouwd in dagen, niet weken',
    desc: 'We ontwerpen en bouwen een professionele website die perfect past bij jouw bedrijf en doelgroep. Van simpele one-pager tot uitgebreide bedrijfswebsite – altijd op maat.',
    features: [
      'Responsive design (mobiel + tablet + desktop)',
      'Snelle laadtijd (Core Web Vitals geoptimaliseerd)',
      'SEO-basis ingebouwd',
      'Contact formulier',
      'SSL certificaat & beveiliging',
      'Google Analytics integratie',
      'Professioneel design op maat',
    ],
    cta: 'Vraag een gratis audit aan',
    ctaLink: '/contact',
    color: 'bg-blue-50',
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-100',
  },
  {
    icon: Settings,
    title: 'Onderhoud & Beheer',
    tagline: 'We zorgen dat je website altijd up-to-date en veilig is',
    desc: 'Een website is nooit "af". Updates, beveiligingspatches, backups en performance – wij houden alles bij zodat jij je op je business kunt richten.',
    features: [
      'Maandelijkse updates & security patches',
      'Performance monitoring & optimalisatie',
      'Automatische dagelijkse backups',
      'Technische support via email',
      'Uptime monitoring (24/7)',
      'Content updates (op aanvraag)',
      'Maandelijks rapport',
    ],
    cta: 'Bekijk maintenance plans',
    ctaLink: '/pricing',
    color: 'bg-orange-50',
    iconColor: 'text-accent',
    iconBg: 'bg-accent/10',
  },
  {
    icon: Search,
    title: 'SEO & Vindbaarheid',
    tagline: 'Jouw website gevonden worden door klanten op Google',
    desc: 'Lokale SEO is de sleutel voor kleine bedrijven. We zorgen dat jouw website gevonden wordt door mensen in jouw regio die precies zoeken wat jij aanbiedt.',
    features: [
      'Keyword research & optimalisatie',
      'Google Business Profile setup & optimalisatie',
      'Lokale SEO (regio-targeting)',
      'Technische SEO audit',
      'Meta tags & structured data',
      'Maandelijks ranking rapport',
      'Concurrentieanalyse',
    ],
    cta: 'Start je SEO journey',
    ctaLink: '/contact',
    color: 'bg-green-50',
    iconColor: 'text-green-600',
    iconBg: 'bg-green-100',
  },
]

const process = [
  { step: '01', title: 'Intake gesprek', desc: 'We bespreken jouw wensen, doelgroep en bedrijfsdoelen.' },
  { step: '02', title: 'Offerte', desc: 'Je ontvangt een heldere offerte binnen 24 uur.' },
  { step: '03', title: 'Design & Bouw', desc: 'We bouwen jouw website snel en professioneel.' },
  { step: '04', title: 'Review & Launch', desc: 'Samen controleren we alles, dan gaan we live!' },
]

export default function Services() {
  return (
    <>
      {/* Page header */}
      <section className="bg-deep-blue py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Services</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-4">
            Alles voor jouw online groei
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Van een nieuwe website tot SEO en onderhoud – wij bieden alles wat lokale bedrijven nodig hebben om online te slagen.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className={`grid lg:grid-cols-2 gap-10 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className={`inline-flex items-center justify-center w-14 h-14 ${service.iconBg} rounded-2xl mb-5`}>
                    <Icon size={28} className={service.iconColor} />
                  </div>
                  <h2 className="text-3xl font-extrabold text-deep-blue mb-3">{service.title}</h2>
                  <p className="text-accent font-semibold mb-4">{service.tagline}</p>
                  <p className="text-gray-500 leading-relaxed mb-6">{service.desc}</p>
                  <Link
                    to={service.ctaLink}
                    className="bg-accent hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-xl inline-flex items-center gap-2 transition-colors"
                  >
                    {service.cta}
                    <ArrowRight size={16} />
                  </Link>
                </div>
                <div className={`${service.color} rounded-2xl p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h3 className="font-bold text-deep-blue mb-4 text-sm uppercase tracking-wider">Inbegrepen:</h3>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-gray-700">
                        <CheckCircle size={17} className="text-accent shrink-0 mt-0.5" />
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
      <section className="bg-light-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Hoe werkt het</span>
            <h2 className="text-3xl font-extrabold text-deep-blue mt-2">Ons werkproces</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p) => (
              <div key={p.step} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
                <div className="text-4xl font-black text-accent/20 mb-3">{p.step}</div>
                <h3 className="font-bold text-deep-blue mb-2">{p.title}</h3>
                <p className="text-sm text-gray-500">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing preview */}
      <section className="bg-deep-blue py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
            Transparante prijzen, geen verrassingen
          </h2>
          <p className="text-white/70 mb-6">
            Starter €99 · Standard €150 · Professional €299 · Premium €499
          </p>
          <Link
            to="/pricing"
            className="bg-accent hover:bg-orange-600 text-white font-bold px-8 py-3.5 rounded-xl inline-flex items-center gap-2 transition-colors"
          >
            Bekijk alle prijzen
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
