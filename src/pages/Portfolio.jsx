import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: "Restaurant De Gouden Lepel",
    industry: "Restaurant & Horeca",
    category: "website",
    location: "Haarlem",
    description: "Website redesign met online reserveringssysteem. Resultaat: 40% meer reserveringen.",
    features: ["Online reserveringen", "Menu management", "Google Maps", "SEO"],
    gradient: "from-orange-500/40 to-red-600/40",
    emoji: "🍽️",
  },
  {
    id: 2,
    title: "Kappers Shine",
    industry: "Kapsalon & Beauty",
    category: "website",
    location: "Alkmaar",
    description: "Nieuwe website met online boekingssysteem. Nu vindbaar voor 'kapper Alkmaar'.",
    features: ["Online booking", "Portfolio galerie", "Behandelingen", "Lokale SEO"],
    gradient: "from-pink-500/40 to-purple-600/40",
    emoji: "✂️",
  },
  {
    id: 3,
    title: "Lisa Fitness Coach",
    industry: "Fitness & Coaching",
    category: "seo",
    location: "Noord-Holland",
    description: "Personal brand website met focus op lead generatie en programma-informatie.",
    features: ["Personal branding", "Programma's", "Testimonials", "Lead formulier"],
    gradient: "from-green-500/40 to-teal-600/40",
    emoji: "💪",
  },
  {
    id: 4,
    title: "Noord-Holland Fietsenwinkel",
    industry: "Retail & Winkel",
    category: "ecommerce",
    location: "Heiloo",
    description: "E-commerce site met productcatalogus en offerte formulier voor de lokale markt.",
    features: ["Productcatalogus", "Offerte formulier", "Winkel info", "Google Maps"],
    gradient: "from-blue-500/40 to-indigo-600/40",
    emoji: "🚲",
  },
  {
    id: 5,
    title: "Loodgietersbedrijf Van Dam",
    industry: "Service & Vakman",
    category: "website",
    location: "Castricum",
    description: "Lead generation website met urgentie CTA's en duidelijke contactopties.",
    features: ["Urgentie CTA's", "Diensten overzicht", "Reviews", "Lokale SEO"],
    gradient: "from-cyan-500/40 to-blue-600/40",
    emoji: "🔧",
  },
  {
    id: 6,
    title: "Consultant & Adviseur",
    industry: "Consultancy",
    category: "seo",
    location: "Amsterdam",
    description: "Professioneel portfolio voor een zelfstandig consultant met case studies.",
    features: ["Case studies", "Blog sectie", "LinkedIn", "Professioneel design"],
    gradient: "from-violet-500/40 to-purple-700/40",
    emoji: "📊",
  },
]

const filters = [
  { key: 'all', label: 'Alle projecten' },
  { key: 'website', label: 'Website Bouwen' },
  { key: 'seo', label: 'SEO' },
  { key: 'ecommerce', label: 'E-Commerce' },
]

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered = activeFilter === 'all' ? projects : projects.filter((p) => p.category === activeFilter)

  return (
    <>
      {/* Page header */}
      <section className="relative bg-[#07071a] py-24 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-64 bg-purple-600/15 rounded-full blur-[100px]" />
        <div className="absolute inset-0 grid-pattern" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">Portfolio</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-4">
            Onze <span className="gradient-text">projecten</span>
          </h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Bekijk een selectie van websites voor lokale bedrijven in Nederland.
          </p>
        </div>
      </section>

      {/* Portfolio */}
      <section className="bg-[#09091e] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-10 justify-center">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeFilter === f.key
                    ? 'bg-accent text-white glow-orange'
                    : 'glass text-white/50 hover:text-white hover:bg-white/10'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((project) => (
              <div key={project.id} className="glass glass-hover rounded-2xl overflow-hidden">
                {/* Image area */}
                <div className={`h-44 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative`}>
                  <span className="text-6xl">{project.emoji}</span>
                  <div className="absolute top-3 right-3 glass text-white/70 text-xs font-medium px-2.5 py-1 rounded-full">
                    {project.location}
                  </div>
                </div>

                <div className="p-6">
                  <span className="text-xs font-semibold text-white/30 uppercase tracking-wider">{project.industry}</span>
                  <h3 className="text-base font-bold text-white mt-1 mb-2">{project.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.features.map((f) => (
                      <span key={f} className="text-xs glass px-2 py-1 rounded-md text-white/50">
                        {f}
                      </span>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-400 hover:text-white transition-colors"
                  >
                    Soortgelijk project? <ExternalLink size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-white/30">
              Geen projecten in deze categorie.
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#07071a] py-16 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-extrabold text-white mb-3">
            Wil jij ook zo'n <span className="gradient-text">website?</span>
          </h2>
          <p className="text-white/40 mb-6 text-sm">Neem contact op voor een gratis audit en vrijblijvende offerte.</p>
          <Link
            to="/contact"
            className="bg-accent hover:bg-orange-600 text-white font-bold px-8 py-3.5 rounded-xl inline-flex items-center gap-2 transition-all glow-orange"
          >
            Gratis audit aanvragen <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
