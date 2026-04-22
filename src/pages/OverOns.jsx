import { Link } from 'react-router-dom'
import { Target, DollarSign, TrendingUp, ArrowRight, CheckCircle, Clock, Headphones, MessageSquare } from 'lucide-react'

const values = [
  {
    icon: Clock,
    title: 'Snel',
    desc: 'Websites die werken, niet stilstaan',
    detail: 'Jouw website is binnen 5-7 werkdagen live. Geen maanden wachten, direct resultaat.',
  },
  {
    icon: DollarSign,
    title: 'Betaalbaar',
    desc: 'Kwaliteit hoeft niet duur te zijn',
    detail: 'Vanaf €99 voor een professionele website. Transparante prijzen, geen verborgen kosten.',
  },
  {
    icon: TrendingUp,
    title: 'Effectief',
    desc: 'Websites die klanten binnenbrengen',
    detail: 'Elke website wordt gebouwd met conversie in gedachten. SEO-optimized en user-friendly.',
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
      <section className="bg-deep-blue py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Over ons</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-4">
            Wie is Clickbaar?
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Een gepassioneerde web design agency vanuit Heiloo, Noord-Holland. Wij helpen lokale ondernemers online te groeien.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Onze missie</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-deep-blue mt-3 mb-6 leading-tight">
                Elke lokale onderneming verdient een geweldige website
              </h2>
              <blockquote className="border-l-4 border-accent pl-6 py-2 mb-6">
                <p className="text-xl text-gray-600 italic leading-relaxed">
                  "Bij Clickbaar geloven we dat elke lokale onderneming een geweldige website verdient. Niet ingewikkeld. Niet duur. Gewoon effectief."
                </p>
              </blockquote>
              <p className="text-gray-500 leading-relaxed mb-6">
                Veel kleine bedrijven lopen klanten mis omdat ze geen goede online aanwezigheid hebben. Wij lossen dat op – met professionele websites die betaalbaar zijn en snel worden opgeleverd.
              </p>
              <Link
                to="/contact"
                className="bg-accent hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-xl inline-flex items-center gap-2 transition-colors"
              >
                Praat met ons
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="relative">
              <div className="bg-light-bg rounded-3xl p-10 text-center">
                <div className="w-24 h-24 bg-deep-blue rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">
                  👨‍💻
                </div>
                <h3 className="text-xl font-extrabold text-deep-blue">Jesse</h3>
                <p className="text-accent font-semibold text-sm mt-1">Founder & Web Designer</p>
                <p className="text-gray-500 text-sm mt-4 leading-relaxed">
                  Gepassioneerd over websites en lokale bedrijven. Jesse combineert technisch vakmanschap met een scherp oog voor design – altijd met jouw doelgroep in gedachten.
                </p>
                <div className="mt-6 flex justify-center gap-4 text-sm text-gray-400">
                  <span className="flex items-center gap-1"><CheckCircle size={14} className="text-green-500" /> Noord-Holland</span>
                  <span className="flex items-center gap-1"><CheckCircle size={14} className="text-green-500" /> 2+ jaar ervaring</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-light-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Onze waarden</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-deep-blue mt-2">
              Wat ons drijft
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v) => {
              const Icon = v.icon
              return (
                <div key={v.title} className="bg-white rounded-2xl p-8 shadow-sm hover-lift border border-gray-100 text-center">
                  <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <Icon size={28} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-extrabold text-deep-blue mb-1">{v.title}</h3>
                  <p className="text-accent font-semibold text-sm mb-4">{v.desc}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.detail}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Clickbaar */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Waarom kiezen voor ons</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-deep-blue mt-3 mb-8 leading-tight">
                Wat maakt Clickbaar anders?
              </h2>
              <div className="space-y-4">
                {whyPoints.map((point) => {
                  const Icon = point.icon
                  return (
                    <div key={point.text} className="flex items-center gap-4 p-4 rounded-xl bg-light-bg">
                      <div className="w-9 h-9 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                        <Icon size={18} className="text-accent" />
                      </div>
                      <span className="text-gray-700 font-medium text-sm">{point.text}</span>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="bg-deep-blue rounded-3xl p-10 text-white">
              <h3 className="text-2xl font-extrabold mb-4">Klaar om samen te werken?</h3>
              <p className="text-white/70 leading-relaxed mb-6">
                Boek een gratis consultatie van 30 minuten. We bespreken jouw wensen, beantwoorden al je vragen en geven direct een eerlijke offerte.
              </p>
              <ul className="space-y-3 mb-8">
                {['Geen verplichtingen', 'Eerlijk advies', 'Direct antwoord op je vragen'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-white/80">
                    <CheckCircle size={16} className="text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="bg-accent hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-xl inline-flex items-center gap-2 transition-colors"
              >
                Gratis consultatie plannen
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
