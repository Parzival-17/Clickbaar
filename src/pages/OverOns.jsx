import { Link } from 'react-router-dom'
import { Target, DollarSign, TrendingUp, ArrowRight, CheckCircle, Clock, Headphones, MessageSquare } from 'lucide-react'

const values = [
  {
    icon: Clock,
    title: 'Snel',
    desc: 'Websites die werken, niet stilstaan',
    detail: 'Jouw website is binnen 5-7 werkdagen live. Geen maanden wachten, direct resultaat.',
    gradient: 'from-blue-500/20 to-indigo-500/20',
    iconColor: 'text-blue-400',
  },
  {
    icon: DollarSign,
    title: 'Betaalbaar',
    desc: 'Kwaliteit hoeft niet duur te zijn',
    detail: 'Vanaf €99 voor een professionele website. Transparante prijzen, geen verborgen kosten.',
    gradient: 'from-green-500/20 to-emerald-500/20',
    iconColor: 'text-green-400',
  },
  {
    icon: TrendingUp,
    title: 'Effectief',
    desc: 'Websites die klanten binnenbrengen',
    detail: 'Elke website wordt gebouwd met conversie in gedachten. SEO-optimized en user-friendly.',
    gradient: 'from-orange-500/20 to-amber-500/20',
    iconColor: 'text-accent',
  },
]

const whyPoints = [
  { icon: MessageSquare, text: 'Geen jargon – alles begrijpelijk uitgelegd' },
  { icon: Clock, text: 'Snelle turnaround – gemiddeld 5-7 werkdagen' },
  { icon: Headphones, text: 'Persoonlijke service – direct contact met Jesse' },
  { icon: CheckCircle, text: 'Langetermijn support – we laten je niet vallen' },
  { icon: Target, text: 'Lokale focus – we kennen de Nederlandse markt' },
  { icon: TrendingUp, text: 'Resultaatgericht – websites die écht werken' },
]

export default function OverOns() {
  return (
    <>
      {/* Page header */}
      <section className="relative bg-[#07071a] py-24 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-64 bg-indigo-600/15 rounded-full blur-[100px]" />
        <div className="absolute inset-0 grid-pattern" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">Over ons</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-4">
            Wie is{' '}
            <span className="gradient-text">Clickbaar?</span>
          </h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Een gepassioneerde web design agency vanuit Heiloo, Noord-Holland.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-[#09091e] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-widest">Onze missie</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3 mb-6 leading-tight">
                Elke lokale onderneming verdient een{' '}
                <span className="gradient-text">geweldige website</span>
              </h2>
              <div className="border-l-2 border-accent pl-5 py-2 mb-6">
                <p className="text-white/60 italic leading-relaxed">
                  "Bij Clickbaar geloven we dat elke lokale onderneming een geweldige website verdient. Niet ingewikkeld. Niet duur. Gewoon effectief."
                </p>
              </div>
              <p className="text-white/40 leading-relaxed mb-6 text-sm">
                Veel kleine bedrijven lopen klanten mis omdat ze geen goede online aanwezigheid hebben. Wij lossen dat op – met professionele websites die betaalbaar zijn en snel worden opgeleverd.
              </p>
              <Link
                to="/contact"
                className="bg-accent hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-xl inline-flex items-center gap-2 transition-all glow-orange"
              >
                Praat met ons <ArrowRight size={16} />
              </Link>
            </div>
            <div className="glass gradient-border rounded-3xl p-10 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500/30 to-purple-500/30 rounded-full flex items-center justify-center mx-auto mb-5 text-4xl">
                👨‍💻
              </div>
              <h3 className="text-xl font-extrabold text-white">Jesse</h3>
              <p className="text-accent font-semibold text-sm mt-1">Founder & Web Designer</p>
              <p className="text-white/40 text-sm mt-4 leading-relaxed">
                Gepassioneerd over websites en lokale bedrijven. Jesse combineert technisch vakmanschap met een scherp oog voor design.
              </p>
              <div className="mt-5 flex justify-center gap-4 text-xs text-white/30">
                <span className="flex items-center gap-1"><CheckCircle size={12} className="text-green-400" /> Noord-Holland</span>
                <span className="flex items-center gap-1"><CheckCircle size={12} className="text-green-400" /> 2+ jaar ervaring</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#07071a] py-24 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">Onze waarden</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3">
              Wat ons <span className="gradient-text">drijft</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {values.map((v) => {
              const Icon = v.icon
              return (
                <div key={v.title} className="glass glass-hover rounded-2xl p-8 text-center">
                  <div className={`w-14 h-14 bg-gradient-to-br ${v.gradient} rounded-2xl flex items-center justify-center mx-auto mb-5`}>
                    <Icon size={26} className={v.iconColor} />
                  </div>
                  <h3 className="text-xl font-extrabold text-white mb-1">{v.title}</h3>
                  <p className="text-accent font-semibold text-sm mb-4">{v.desc}</p>
                  <p className="text-white/40 text-sm leading-relaxed">{v.detail}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Clickbaar */}
      <section className="bg-[#09091e] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-widest">Waarom ons kiezen</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3 mb-8 leading-tight">
                Wat maakt Clickbaar <span className="gradient-text">anders?</span>
              </h2>
              <div className="space-y-3">
                {whyPoints.map((point) => {
                  const Icon = point.icon
                  return (
                    <div key={point.text} className="glass rounded-xl p-4 flex items-center gap-4 hover:bg-white/[0.06] transition-colors">
                      <div className="w-8 h-8 bg-accent/15 rounded-lg flex items-center justify-center shrink-0">
                        <Icon size={16} className="text-accent" />
                      </div>
                      <span className="text-white/70 text-sm">{point.text}</span>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="gradient-border rounded-3xl p-10">
              <h3 className="text-2xl font-extrabold text-white mb-4">Klaar om samen te werken?</h3>
              <p className="text-white/50 leading-relaxed mb-6 text-sm">
                Boek een gratis consultatie van 30 minuten. We bespreken jouw wensen en geven direct een eerlijke offerte.
              </p>
              <ul className="space-y-3 mb-8">
                {['Geen verplichtingen', 'Eerlijk advies', 'Direct antwoord op je vragen'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-white/50">
                    <CheckCircle size={15} className="text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="bg-accent hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-xl inline-flex items-center gap-2 transition-all glow-orange"
              >
                Gratis consultatie plannen <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
