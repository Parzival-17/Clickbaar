import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowDown, ExternalLink, Minus } from 'lucide-react'

/* ─── Website mockup data ─────────────────────────────────── */
const projects = [
  {
    id: 1,
    title: 'Restaurant De Gouden Lepel',
    type: 'Restaurant & Horeca',
    location: 'Haarlem',
    result: '+40% reserveringen',
    tag: 'Website',
    navItems: ['Menu', 'Reserveer', 'Over ons', 'Contact'],
    heroTitle: 'Authentieke Italiaanse Keuken',
    heroCta: 'Reserveer een tafel',
    heroGrad: 'from-[#7c2d12] via-[#9a3412] to-[#431407]',
    accentColor: '#f97316',
    cardColors: ['bg-orange-950/60', 'bg-red-950/60', 'bg-amber-950/60'],
    imgColors: ['bg-orange-800/50', 'bg-red-700/50', 'bg-amber-700/50'],
    logoColor: 'text-orange-400',
  },
  {
    id: 2,
    title: 'Kappers Shine',
    type: 'Kapsalon & Beauty',
    location: 'Alkmaar',
    result: '3x meer boekingen',
    tag: 'Booking',
    navItems: ['Home', 'Diensten', 'Boek nu', 'Galerie'],
    heroTitle: 'Jouw perfecte look begint hier',
    heroCta: 'Maak een afspraak',
    heroGrad: 'from-[#4a044e] via-[#701a75] to-[#2d0036]',
    accentColor: '#e879f9',
    cardColors: ['bg-purple-950/60', 'bg-pink-950/60', 'bg-fuchsia-950/60'],
    imgColors: ['bg-purple-800/50', 'bg-pink-700/50', 'bg-fuchsia-700/50'],
    logoColor: 'text-fuchsia-400',
  },
  {
    id: 3,
    title: 'Lisa Fitness Coach',
    type: 'Fitness & Coaching',
    location: 'Noord-Holland',
    result: '2x meer leads',
    tag: 'Portfolio',
    navItems: ['Home', 'Programma\'s', 'Resultaten', 'Contact'],
    heroTitle: 'Bereik jouw fitness doelen',
    heroCta: 'Start vandaag',
    heroGrad: 'from-[#052e16] via-[#14532d] to-[#0f2618]',
    accentColor: '#4ade80',
    cardColors: ['bg-green-950/60', 'bg-emerald-950/60', 'bg-teal-950/60'],
    imgColors: ['bg-green-800/50', 'bg-emerald-700/50', 'bg-teal-700/50'],
    logoColor: 'text-green-400',
  },
  {
    id: 4,
    title: 'Noord-Holland Fietsenwinkel',
    type: 'Retail & E-commerce',
    location: 'Heiloo',
    result: '+60% online aanvragen',
    tag: 'E-commerce',
    navItems: ['Fietsen', 'Accessoires', 'Service', 'Over ons'],
    heroTitle: 'De beste fietsen voor elke rit',
    heroCta: 'Bekijk collectie',
    heroGrad: 'from-[#172554] via-[#1e3a8a] to-[#0c1a3d]',
    accentColor: '#60a5fa',
    cardColors: ['bg-blue-950/60', 'bg-indigo-950/60', 'bg-sky-950/60'],
    imgColors: ['bg-blue-800/50', 'bg-indigo-700/50', 'bg-sky-700/50'],
    logoColor: 'text-blue-400',
  },
  {
    id: 5,
    title: 'Loodgietersbedrijf Van Dam',
    type: 'Service & Vakman',
    location: 'Castricum',
    result: '5x meer belafspraken',
    tag: 'Lead Gen',
    navItems: ['Diensten', 'Spoedklus', 'Reviews', 'Bel ons'],
    heroTitle: 'Loodgietersproblemen? Wij lossen het op.',
    heroCta: 'Direct bellen',
    heroGrad: 'from-[#0c4a6e] via-[#075985] to-[#082f49]',
    accentColor: '#38bdf8',
    cardColors: ['bg-cyan-950/60', 'bg-blue-950/60', 'bg-sky-950/60'],
    imgColors: ['bg-cyan-800/50', 'bg-blue-700/50', 'bg-sky-700/50'],
    logoColor: 'text-cyan-400',
  },
  {
    id: 6,
    title: 'Marieke Bakker Consultant',
    type: 'Consultancy & Advies',
    location: 'Amsterdam',
    result: '+35% nieuwe klanten',
    tag: 'Portfolio',
    navItems: ['Diensten', 'Cases', 'Over mij', 'Contact'],
    heroTitle: 'Strategisch advies dat werkt',
    heroCta: 'Plan een gesprek',
    heroGrad: 'from-[#1e1b4b] via-[#312e81] to-[#11102d]',
    accentColor: '#a78bfa',
    cardColors: ['bg-violet-950/60', 'bg-purple-950/60', 'bg-indigo-950/60'],
    imgColors: ['bg-violet-800/50', 'bg-purple-700/50', 'bg-indigo-700/50'],
    logoColor: 'text-violet-400',
  },
  {
    id: 7,
    title: 'Studio Roos Fotografie',
    type: 'Fotografie & Creatie',
    location: 'Haarlem',
    result: '+80% boekingen',
    tag: 'Portfolio',
    navItems: ['Portfolio', 'Diensten', 'Pakketten', 'Boek'],
    heroTitle: 'Momenten die eeuwig duren',
    heroCta: 'Bekijk portfolio',
    heroGrad: 'from-[#27272a] via-[#3f3f46] to-[#18181b]',
    accentColor: '#f4f4f5',
    cardColors: ['bg-zinc-900/60', 'bg-neutral-900/60', 'bg-stone-900/60'],
    imgColors: ['bg-zinc-700/50', 'bg-neutral-600/50', 'bg-stone-600/50'],
    logoColor: 'text-zinc-300',
  },
  {
    id: 8,
    title: 'Tandartspraktijk Smile',
    type: 'Zorg & Gezondheid',
    location: 'Alkmaar',
    result: '+50% online afspraken',
    tag: 'Booking',
    navItems: ['Behandelingen', 'Team', 'Afspraak', 'Contact'],
    heroTitle: 'Een gezonde glimlach voor iedereen',
    heroCta: 'Maak een afspraak',
    heroGrad: 'from-[#0f4c75] via-[#1b6ca8] to-[#0a3050]',
    accentColor: '#7dd3fc',
    cardColors: ['bg-sky-950/60', 'bg-blue-950/60', 'bg-cyan-950/60'],
    imgColors: ['bg-sky-800/50', 'bg-blue-700/50', 'bg-cyan-700/50'],
    logoColor: 'text-sky-400',
  },
]

/* ─── Browser / Website Mockup ───────────────────────────── */
function WebsiteMockup({ project }) {
  return (
    <div className="w-full h-full bg-[#0a0a18] rounded-lg overflow-hidden flex flex-col text-[10px] leading-tight select-none">
      {/* Browser chrome */}
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

      {/* Website content */}
      <div className="flex-1 overflow-hidden flex flex-col">
        {/* Navbar */}
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

        {/* Hero */}
        <div className={`bg-gradient-to-br ${project.heroGrad} px-4 py-4 flex flex-col gap-1.5 shrink-0`}>
          <div className="w-3/4 h-3 bg-white/30 rounded-sm" />
          <div className="w-1/2 h-2 bg-white/20 rounded-sm" />
          <div className="w-2/3 h-2 bg-white/15 rounded-sm" />
          <div
            className="w-20 h-5 rounded mt-1 text-[7px] flex items-center justify-center font-bold"
            style={{ background: project.accentColor }}
          />
        </div>

        {/* Cards grid */}
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

        {/* Footer bar */}
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

/* ─── Card ────────────────────────────────────────────────── */
function ProjectCard({ project }) {
  return (
    <div className="shrink-0 w-[380px] md:w-[440px] group cursor-default">
      {/* Browser frame */}
      <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50 transition-all duration-500 group-hover:border-white/20 group-hover:shadow-black/70 group-hover:-translate-y-2">
        <div style={{ aspectRatio: '16/10' }}>
          <WebsiteMockup project={project} />
        </div>

        {/* Hover overlay with info */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-3 p-6">
          <span
            className="text-xs font-bold px-3 py-1 rounded-full"
            style={{ background: project.accentColor + '22', color: project.accentColor }}
          >
            {project.tag}
          </span>
          <p className="text-white font-bold text-lg text-center leading-tight">{project.title}</p>
          <p className="text-white/50 text-xs">{project.location}</p>
          <div
            className="text-sm font-bold px-4 py-1.5 rounded-full mt-1"
            style={{ background: project.accentColor + '22', color: project.accentColor }}
          >
            {project.result}
          </div>
          <Link
            to="/contact"
            className="mt-2 bg-white text-black font-bold text-xs px-5 py-2 rounded-full inline-flex items-center gap-1.5 hover:bg-white/90 transition-colors"
          >
            Soortgelijk project <ArrowRight size={12} />
          </Link>
        </div>
      </div>

      {/* Label below */}
      <div className="mt-3 px-1 flex items-center justify-between">
        <div>
          <p className="text-white/70 text-sm font-semibold">{project.title}</p>
          <p className="text-white/30 text-xs">{project.type}</p>
        </div>
        <span
          className="text-xs font-semibold px-2.5 py-1 rounded-full"
          style={{ background: project.accentColor + '1a', color: project.accentColor }}
        >
          {project.result}
        </span>
      </div>
    </div>
  )
}

/* ─── Horizontal scroll section ─────────────────────────── */
function HorizontalScrollGallery() {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  const currentXRef = useRef(0)
  const targetXRef = useRef(0)
  const rafRef = useRef(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const lerp = (a, b, t) => a + (b - a) * t

    // RAF loop for smooth interpolation
    const animate = () => {
      currentXRef.current = lerp(currentXRef.current, targetXRef.current, 0.07)
      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(${currentXRef.current}px)`
      }
      rafRef.current = requestAnimationFrame(animate)
    }
    rafRef.current = requestAnimationFrame(animate)

    const handleScroll = () => {
      if (!sectionRef.current || !trackRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const scrollable = sectionRef.current.offsetHeight - window.innerHeight
      const rawProgress = Math.max(0, Math.min(1, -rect.top / scrollable))
      setProgress(rawProgress)

      const trackWidth = trackRef.current.scrollWidth - window.innerWidth + 128
      targetXRef.current = -rawProgress * trackWidth
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    /* Tall section – sets the scroll distance */
    <div ref={sectionRef} style={{ height: `${projects.length * 120 + 100}vh` }} className="relative">
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center bg-[#07071a]">
        {/* Background effects */}
        <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Header */}
        <div className="relative z-10 px-6 sm:px-16 mb-8 flex items-end justify-between">
          <div>
            <span className="text-accent font-semibold text-xs uppercase tracking-widest">Onze projecten</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-1">
              Websites die{' '}
              <span className="gradient-text">wij bouwen</span>
            </h2>
          </div>
          {/* Progress bar */}
          <div className="hidden sm:flex items-center gap-3 pb-1">
            <div className="w-32 h-px bg-white/10 relative overflow-hidden rounded-full">
              <div
                className="absolute left-0 top-0 h-full bg-accent rounded-full transition-none"
                style={{ width: `${progress * 100}%` }}
              />
            </div>
            <span className="text-white/30 text-xs tabular-nums">
              {String(Math.round(progress * projects.length) + 1).padStart(2, '0')}/{String(projects.length).padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Scrolling track */}
        <div className="relative z-10 flex-1 flex items-center overflow-visible">
          <div
            ref={trackRef}
            className="flex gap-6 px-16 will-change-transform"
            style={{ transform: 'translateX(0px)' }}
          >
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
            {/* End spacer */}
            <div className="shrink-0 w-16" />
          </div>
        </div>

        {/* Scroll hint (fades out after scrolling) */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-opacity duration-500"
          style={{ opacity: progress > 0.05 ? 0 : 1 }}
        >
          <span className="text-white/30 text-xs">Scroll om te verkennen</span>
          <ArrowDown size={16} className="text-white/20 animate-bounce" />
        </div>
      </div>
    </div>
  )
}

/* ─── Page ───────────────────────────────────────────────── */
export default function Portfolio() {
  return (
    <>
      {/* Page header */}
      <section className="relative bg-[#07071a] py-24 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-64 bg-indigo-600/15 rounded-full blur-[100px]" />
        <div className="absolute inset-0 grid-pattern" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">Portfolio</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-4">
            Onze <span className="gradient-text">projecten</span>
          </h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Scroll door onze portfolio. Bekijk de websites die wij hebben gebouwd voor lokale bedrijven.
          </p>
          <div className="flex items-center justify-center gap-2 mt-6 text-white/30 text-sm">
            <ArrowDown size={14} className="animate-bounce" />
            <span>Scroll naar beneden</span>
          </div>
        </div>
      </section>

      {/* Horizontal scroll gallery */}
      <HorizontalScrollGallery />

      {/* CTA */}
      <section className="bg-[#09091e] py-20 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
            Wil jij ook zo'n{' '}
            <span className="gradient-text">website?</span>
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
