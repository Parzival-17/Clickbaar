import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, MapPin } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Restaurant De Gouden Lepel',
    branche: 'Restaurant & Horeca',
    location: 'Haarlem',
    result: '+40% reserveringen',
    tags: ['Website', 'SEO'],
    navItems: ['Menu', 'Reserveer', 'Over ons', 'Contact'],
    heroGrad: 'from-[#7c2d12] via-[#9a3412] to-[#431407]',
    accentColor: '#f97316',
    cardColors: ['bg-orange-950/60', 'bg-red-950/60', 'bg-amber-950/60'],
    imgColors: ['bg-orange-800/50', 'bg-red-700/50', 'bg-amber-700/50'],
    logoColor: 'text-orange-400',
  },
  {
    id: 2,
    title: 'Kappers Shine',
    branche: 'Kapsalon & Beauty',
    location: 'Alkmaar',
    result: '3x meer boekingen',
    tags: ['Website', 'Booking'],
    navItems: ['Home', 'Diensten', 'Boek nu', 'Galerie'],
    heroGrad: 'from-[#4a044e] via-[#701a75] to-[#2d0036]',
    accentColor: '#e879f9',
    cardColors: ['bg-purple-950/60', 'bg-pink-950/60', 'bg-fuchsia-950/60'],
    imgColors: ['bg-purple-800/50', 'bg-pink-700/50', 'bg-fuchsia-700/50'],
    logoColor: 'text-fuchsia-400',
  },
  {
    id: 3,
    title: 'Lisa Fitness Coach',
    branche: 'Fitness & Coaching',
    location: 'Noord-Holland',
    result: '2x meer leads',
    tags: ['Website', 'Lead Gen'],
    navItems: ["Home", "Programma's", 'Resultaten', 'Contact'],
    heroGrad: 'from-[#052e16] via-[#14532d] to-[#0f2618]',
    accentColor: '#4ade80',
    cardColors: ['bg-green-950/60', 'bg-emerald-950/60', 'bg-teal-950/60'],
    imgColors: ['bg-green-800/50', 'bg-emerald-700/50', 'bg-teal-700/50'],
    logoColor: 'text-green-400',
  },
  {
    id: 4,
    title: 'Noord-Holland Fietsenwinkel',
    branche: 'Retail & E-commerce',
    location: 'Heiloo',
    result: '+60% online aanvragen',
    tags: ['Website', 'E-commerce'],
    navItems: ['Fietsen', 'Accessoires', 'Service', 'Over ons'],
    heroGrad: 'from-[#172554] via-[#1e3a8a] to-[#0c1a3d]',
    accentColor: '#60a5fa',
    cardColors: ['bg-blue-950/60', 'bg-indigo-950/60', 'bg-sky-950/60'],
    imgColors: ['bg-blue-800/50', 'bg-indigo-700/50', 'bg-sky-700/50'],
    logoColor: 'text-blue-400',
  },
  {
    id: 5,
    title: 'Loodgietersbedrijf Van Dam',
    branche: 'Service & Vakman',
    location: 'Castricum',
    result: '5x meer belafspraken',
    tags: ['Website', 'Lead Gen', 'SEO'],
    navItems: ['Diensten', 'Spoedklus', 'Reviews', 'Bel ons'],
    heroGrad: 'from-[#0c4a6e] via-[#075985] to-[#082f49]',
    accentColor: '#38bdf8',
    cardColors: ['bg-cyan-950/60', 'bg-blue-950/60', 'bg-sky-950/60'],
    imgColors: ['bg-cyan-800/50', 'bg-blue-700/50', 'bg-sky-700/50'],
    logoColor: 'text-cyan-400',
  },
  {
    id: 6,
    title: 'Marieke Bakker Consultant',
    branche: 'Consultancy & Advies',
    location: 'Amsterdam',
    result: '+35% nieuwe klanten',
    tags: ['Website', 'SEO'],
    navItems: ['Diensten', 'Cases', 'Over mij', 'Contact'],
    heroGrad: 'from-[#1e1b4b] via-[#312e81] to-[#11102d]',
    accentColor: '#a78bfa',
    cardColors: ['bg-violet-950/60', 'bg-purple-950/60', 'bg-indigo-950/60'],
    imgColors: ['bg-violet-800/50', 'bg-purple-700/50', 'bg-indigo-700/50'],
    logoColor: 'text-violet-400',
  },
  {
    id: 7,
    title: 'Studio Roos Fotografie',
    branche: 'Fotografie & Creatie',
    location: 'Haarlem',
    result: '+80% boekingen',
    tags: ['Website', 'Booking'],
    navItems: ['Portfolio', 'Diensten', 'Pakketten', 'Boek'],
    heroGrad: 'from-[#27272a] via-[#3f3f46] to-[#18181b]',
    accentColor: '#f4f4f5',
    cardColors: ['bg-zinc-900/60', 'bg-neutral-900/60', 'bg-stone-900/60'],
    imgColors: ['bg-zinc-700/50', 'bg-neutral-600/50', 'bg-stone-600/50'],
    logoColor: 'text-zinc-300',
  },
  {
    id: 8,
    title: 'Tandartspraktijk Smile',
    branche: 'Zorg & Gezondheid',
    location: 'Alkmaar',
    result: '+50% online afspraken',
    tags: ['Website', 'Booking', 'SEO'],
    navItems: ['Behandelingen', 'Team', 'Afspraak', 'Contact'],
    heroGrad: 'from-[#0f4c75] via-[#1b6ca8] to-[#0a3050]',
    accentColor: '#7dd3fc',
    cardColors: ['bg-sky-950/60', 'bg-blue-950/60', 'bg-cyan-950/60'],
    imgColors: ['bg-sky-800/50', 'bg-blue-700/50', 'bg-cyan-700/50'],
    logoColor: 'text-sky-400',
  },
]

const allFilters = ['Alles', 'Website', 'SEO', 'Booking', 'E-commerce', 'Lead Gen']

const tagStyles = {
  Website: 'bg-primary-50 text-primary-700 border border-primary-100',
  SEO: 'bg-amber-50 text-amber-700 border border-amber-100',
  Booking: 'bg-violet-50 text-violet-700 border border-violet-100',
  'E-commerce': 'bg-blue-50 text-blue-700 border border-blue-100',
  'Lead Gen': 'bg-green-50 text-green-700 border border-green-100',
}

function WebsiteMockup({ project }) {
  return (
    <div className="w-full h-full bg-[#0a0a18] rounded-t-2xl overflow-hidden flex flex-col text-[10px] leading-tight select-none">
      <div className="flex items-center gap-2 px-3 py-2 bg-[#111120] border-b border-white/5 shrink-0">
        <div className="flex gap-1 shrink-0">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
        </div>
        <div className="flex-1 bg-white/5 rounded px-2 py-1 text-white/25 truncate">
          {project.title.toLowerCase().replace(/\s+/g, '')}.nl
        </div>
      </div>
      <div className="flex-1 overflow-hidden flex flex-col">
        <div className="flex items-center justify-between px-4 py-2 bg-black/40 border-b border-white/5 shrink-0">
          <div className={`font-bold text-[9px] ${project.logoColor}`}>
            {project.title.split(' ')[0].toUpperCase()}
          </div>
          <div className="flex gap-3">
            {project.navItems.slice(0, 3).map((item) => (
              <span key={item} className="text-white/30 text-[7px]">{item}</span>
            ))}
          </div>
          <div
            className="text-[7px] px-2 py-0.5 rounded font-semibold"
            style={{ background: project.accentColor + '33', color: project.accentColor }}
          >
            {project.navItems[3]}
          </div>
        </div>
        <div className={`bg-gradient-to-br ${project.heroGrad} px-4 py-4 flex flex-col gap-1.5 shrink-0`}>
          <div className="w-3/4 h-3 bg-white/30 rounded-sm" />
          <div className="w-1/2 h-2 bg-white/20 rounded-sm" />
          <div className="w-2/3 h-2 bg-white/15 rounded-sm" />
          <div className="w-20 h-5 rounded mt-1" style={{ background: project.accentColor }} />
        </div>
        <div className="grid grid-cols-3 gap-1.5 p-2 flex-1 content-start">
          {[0, 1, 2].map((i) => (
            <div key={i} className={`${project.cardColors[i] || 'bg-white/5'} rounded p-1.5 space-y-1`}>
              <div className={`${project.imgColors[i] || 'bg-white/10'} rounded h-8`} />
              <div className="h-1.5 bg-white/20 rounded" />
              <div className="h-1 bg-white/10 rounded w-4/5" />
              <div className="h-1 bg-white/10 rounded w-3/5" />
            </div>
          ))}
        </div>
        <div className="px-3 py-1.5 bg-black/30 border-t border-white/5 flex justify-between items-center shrink-0">
          <div className="flex gap-2">
            <div className="w-6 h-1.5 bg-white/10 rounded" />
            <div className="w-6 h-1.5 bg-white/10 rounded" />
            <div className="w-6 h-1.5 bg-white/10 rounded" />
          </div>
          <div className="text-white/15 text-[6px]">© 2026</div>
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ project }) {
  return (
    <div className="card rounded-2xl overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
      <div className="relative" style={{ aspectRatio: '16/10' }}>
        <WebsiteMockup project={project} />
        <div className="absolute inset-0 bg-slate-900/75 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center rounded-t-2xl">
          <Link
            to="/contact"
            className="bg-white text-slate-900 font-bold text-xs px-5 py-2.5 rounded-xl inline-flex items-center gap-2 hover:bg-slate-50 transition-colors shadow-lg"
          >
            Soortgelijk project <ArrowRight size={13} />
          </Link>
        </div>
      </div>
      <div className="p-5 border-t border-slate-100">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-bold text-slate-900 text-sm leading-snug">{project.title}</h3>
        </div>
        <p className="text-xs text-slate-400 mb-3 flex items-center gap-1">
          <MapPin size={10} className="shrink-0" />
          {project.location} &nbsp;·&nbsp; <span className="font-medium text-slate-500">{project.branche}</span>
        </p>
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tags.map((tag) => (
            <span key={tag} className={`text-[0.65rem] font-bold px-2 py-0.5 rounded-full ${tagStyles[tag]}`}>
              {tag}
            </span>
          ))}
        </div>
        <p className="text-xs font-semibold text-green-600">↑ {project.result}</p>
      </div>
    </div>
  )
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('Alles')

  const filtered = activeFilter === 'Alles'
    ? projects
    : projects.filter((p) => p.tags.includes(activeFilter))

  return (
    <>
      <section className="relative bg-white py-24 overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-primary-50 rounded-full blur-[100px] opacity-60 -translate-y-1/4 translate-x-1/4" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-tag">Cases</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-4 mb-4">
            Ons <span className="gradient-text">werk</span>
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Bekijk de websites die wij hebben gebouwd voor lokale bedrijven in Noord-Holland en omgeving.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {allFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                  activeFilter === filter
                    ? 'bg-primary-600 text-white shadow-btn'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-primary-200 hover:text-primary-600'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Project grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-slate-400 text-sm">
              Geen projecten gevonden voor deze categorie.
            </div>
          )}
        </div>
      </section>

      <section className="bg-primary-600 py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white opacity-5 rounded-full blur-[80px]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
            Wil jij ook zo'n website?
          </h2>
          <p className="text-primary-100 mb-6 text-sm">
            Neem contact op voor een gratis audit en vrijblijvende offerte.
          </p>
          <Link to="/contact" className="bg-white text-primary-600 font-bold px-8 py-3.5 rounded-xl inline-flex items-center gap-2 hover:bg-primary-50 transition-colors shadow-btn">
            Gratis audit aanvragen <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
