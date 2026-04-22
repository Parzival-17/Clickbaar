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
    description: "Volledige website redesign met online reserveringssysteem en menu management. Resultaat: 40% meer reserveringen via de website.",
    features: ["Online reserveringen", "Menu management", "Google Maps integratie", "SEO geoptimaliseerd"],
    color: "from-orange-400 to-red-500",
    emoji: "🍽️",
    bg: "bg-orange-50",
  },
  {
    id: 2,
    title: "Kappers Shine",
    industry: "Kapsalon & Beauty",
    category: "website",
    location: "Alkmaar",
    description: "Nieuwe website met online boekingssysteem voor de kapsalon. Nu vindbaar op Google voor 'kapper Alkmaar'.",
    features: ["Online booking", "Behandelingen overzicht", "Portfolio galerie", "Lokale SEO"],
    color: "from-pink-400 to-purple-500",
    emoji: "✂️",
    bg: "bg-pink-50",
  },
  {
    id: 3,
    title: "Lisa Fitness Coach",
    industry: "Fitness & Coaching",
    category: "seo",
    location: "Noord-Holland",
    description: "Personal brand website voor een fitness coach. Clean design met testimonials, programma-informatie en online contact.",
    features: ["Personal branding", "Programma's overzicht", "Testimonials", "Lead generatie formulier"],
    color: "from-green-400 to-teal-500",
    emoji: "💪",
    bg: "bg-green-50",
  },
  {
    id: 4,
    title: "Noord-Holland Fietsenwinkel",
    industry: "Retail & Winkel",
    category: "ecommerce",
    location: "Heiloo",
    description: "E-commerce website met productcatalogus en contactformulier voor offertes. Simpel maar effectief voor de lokale markt.",
    features: ["Productcatalogus", "Offerte formulier", "Winkel info", "Google Maps"],
    color: "from-blue-400 to-indigo-500",
    emoji: "🚲",
    bg: "bg-blue-50",
  },
  {
    id: 5,
    title: "Loodgietersbedrijf Van Dam",
    industry: "Service & Vakman",
    category: "website",
    location: "Castricum",
    description: "Lead generation website voor een loodgietersbedrijf. Focus op snel contact opnemen met duidelijke call-to-actions.",
    features: ["Urgentie CTA's", "Diensten overzicht", "Review sectie", "Lokale SEO"],
    color: "from-cyan-400 to-blue-500",
    emoji: "🔧",
    bg: "bg-cyan-50",
  },
  {
    id: 6,
    title: "Consultant & Adviseur",
    industry: "Consultancy & Advies",
    category: "seo",
    location: "Amsterdam",
    description: "Professioneel portfolio voor een zelfstandig consultant. Strak design met case studies en LinkedIn-integratie.",
    features: ["Case studies", "Blog sectie", "LinkedIn integratie", "Professioneel design"],
    color: "from-violet-400 to-purple-600",
    emoji: "📊",
    bg: "bg-violet-50",
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

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter)

  return (
    <>
      {/* Page header */}
      <section className="bg-deep-blue py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Portfolio</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-4">
            Onze projecten
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Bekijk een selectie van websites die we gebouwd hebben voor lokale bedrijven in Nederland.
          </p>
        </div>
      </section>

      {/* Portfolio grid */}
      <section className="bg-light-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-10 justify-center">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                  activeFilter === f.key
                    ? 'bg-deep-blue text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover-lift border border-gray-100"
              >
                {/* Image placeholder */}
                <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative`}>
                  <span className="text-7xl">{project.emoji}</span>
                  <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {project.location}
                  </div>
                </div>

                <div className="p-6">
                  <div className={`inline-block text-xs font-semibold px-2 py-1 rounded-md mb-3 ${project.bg} text-gray-700`}>
                    {project.industry}
                  </div>
                  <h3 className="text-lg font-bold text-deep-blue mb-2">{project.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{project.description}</p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.features.map((f) => (
                      <span key={f} className="text-xs bg-light-bg text-gray-600 px-2 py-1 rounded-md">
                        {f}
                      </span>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-deep-blue hover:text-accent transition-colors"
                  >
                    Soortgelijk project?
                    <ExternalLink size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-gray-400">
              Geen projecten gevonden in deze categorie.
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-extrabold text-deep-blue mb-3">
            Wil jij ook zo'n website?
          </h2>
          <p className="text-gray-500 mb-6">
            Neem contact op voor een gratis audit en vrijblijvende offerte.
          </p>
          <Link
            to="/contact"
            className="bg-accent hover:bg-orange-600 text-white font-bold px-8 py-3.5 rounded-xl inline-flex items-center gap-2 transition-colors"
          >
            Gratis audit aanvragen
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
