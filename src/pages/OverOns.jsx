import { Link } from 'react-router-dom'
import { Target, DollarSign, TrendingUp, ArrowRight, CheckCircle, Clock, Headphones, MessageSquare } from 'lucide-react'

const values = [
  {
    icon: Clock,
    title: 'Snel',
    desc: 'Websites die werken, niet stilstaan',
    detail: 'Jouw website is binnen 5-7 werkdagen live. Geen maanden wachten, direct resultaat.',
    iconBg: 'bg-blue-50 dark:bg-blue-900/30',
    iconColor: 'text-blue-600 dark:text-blue-400',
  },
  {
    icon: DollarSign,
    title: 'Betaalbaar',
    desc: 'Kwaliteit hoeft niet duur te zijn',
    detail: 'Vanaf â‚¬99 voor een professionele website. Transparante prijzen, geen verborgen kosten.',
    iconBg: 'bg-green-50 dark:bg-green-900/30',
    iconColor: 'text-green-600 dark:text-green-400',
  },
  {
    icon: TrendingUp,
    title: 'Effectief',
    desc: 'Websites die klanten binnenbrengen',
    detail: 'Elke website wordt gebouwd met conversie in gedachten. SEO-optimized en user-friendly.',
    iconBg: 'bg-primary-50 dark:bg-primary-900/30',
    iconColor: 'text-primary-600 dark:text-primary-400',
  },
]

const whyPoints = [
  { icon: MessageSquare, text: 'Geen jargon â€“ alles begrijpelijk uitgelegd' },
  { icon: Clock, text: 'Snelle turnaround â€“ gemiddeld 5-7 werkdagen' },
  { icon: Headphones, text: 'Persoonlijke service â€“ direct contact met het team' },
  { icon: CheckCircle, text: 'Langetermijn support â€“ we laten je niet vallen' },
  { icon: Target, text: 'Lokale focus â€“ we kennen de Nederlandse markt' },
  { icon: TrendingUp, text: 'Resultaatgericht â€“ websites die Ã©cht werken' },
]

const team = [
  {
    name: 'Jesse',
    role: 'Founder & Web Designer',
    desc: 'Gepassioneerd over websites en lokale bedrijven. Jesse combineert technisch vakmanschap met een scherp oog voor design.',
    initials: 'J',
    color: 'bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300',
    tags: ['Noord-Holland', '2+ jaar ervaring'],
  },
  {
    name: 'Keano',
    role: 'Co-founder & Developer',
    desc: 'Keano bouwt robuuste, snelle websites van voor naar achter. Van code tot SEO, hij zit in de details.',
    initials: 'K',
    color: 'bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300',
    tags: ['Full-stack', 'SEO specialist'],
  },
]

export default function OverOns() {
  return (
    <>
      <section className="relative bg-white dark:bg-slate-950 py-24 overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-primary-50 dark:bg-primary-900/20 rounded-full blur-[100px] opacity-60 -translate-y-1/4 translate-x-1/4" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-tag">Over ons</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mt-4 mb-4">
            Wie is <span className="gradient-text">Klikbaar?</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Een gepassioneerde web design agency vanuit Heiloo, Noord-Holland.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 dark:bg-slate-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="section-tag">Onze missie</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mt-4 mb-6 leading-tight">
                Elke lokale onderneming verdient een{' '}
                <span className="gradient-text">geweldige website</span>
              </h2>
              <div className="border-l-4 border-primary-200 dark:border-primary-700 pl-5 py-2 mb-6 bg-primary-50 dark:bg-primary-900/20 rounded-r-xl">
                <p className="text-slate-600 dark:text-slate-300 italic leading-relaxed text-sm">
                  "Bij Klikbaar geloven we dat elke lokale onderneming een geweldige website verdient. Niet ingewikkeld. Niet duur. Gewoon effectief."
                </p>
              </div>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-6 text-sm">
                Veel kleine bedrijven lopen klanten mis omdat ze geen goede online aanwezigheid hebben. Wij lossen dat op â€“ met professionele websites die betaalbaar zijn en snel worden opgeleverd.
              </p>
              <Link to="/contact" className="btn-primary px-6 py-3 gap-2">
                Praat met ons <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {team.map((member) => (
                <div key={member.name} className="card rounded-2xl p-7 text-center">
                  <div className={`w-16 h-16 rounded-2xl ${member.color} flex items-center justify-center mx-auto mb-4 text-2xl font-extrabold`}>
                    {member.initials}
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">{member.name}</h3>
                  <p className="text-primary-600 dark:text-primary-400 font-semibold text-xs mt-1 mb-3">{member.role}</p>
                  <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed mb-4">{member.desc}</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.tags.map((tag) => (
                      <span key={tag} className="section-tag text-[0.65rem]">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-slate-950 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-tag">Onze waarden</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mt-4">
              Wat ons <span className="gradient-text">drijft</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v) => {
              const Icon = v.icon
              return (
                <div key={v.title} className="card card-hover rounded-2xl p-8 text-center">
                  <div className={`w-14 h-14 ${v.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-5`}>
                    <Icon size={26} className={v.iconColor} />
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-1">{v.title}</h3>
                  <p className="text-primary-600 dark:text-primary-400 font-semibold text-sm mb-4">{v.desc}</p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{v.detail}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 dark:bg-slate-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="section-tag">Waarom ons kiezen</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mt-4 mb-8 leading-tight">
                Wat maakt Klikbaar <span className="gradient-text">anders?</span>
              </h2>
              <div className="space-y-3">
                {whyPoints.map((point) => {
                  const Icon = point.icon
                  return (
                    <div key={point.text} className="card card-hover rounded-xl p-4 flex items-center gap-4">
                      <div className="w-8 h-8 bg-primary-50 dark:bg-primary-900/30 rounded-lg flex items-center justify-center shrink-0">
                        <Icon size={16} className="text-primary-600 dark:text-primary-400" />
                      </div>
                      <span className="text-slate-700 dark:text-slate-300 text-sm">{point.text}</span>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="card rounded-3xl p-10">
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-4">Klaar om samen te werken?</h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-6 text-sm">
                Boek een gratis consultatie van 30 minuten. We bespreken jouw wensen en geven direct een eerlijke offerte.
              </p>
              <ul className="space-y-3 mb-8">
                {['Geen verplichtingen', 'Eerlijk advies', 'Direct antwoord op je vragen'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                    <CheckCircle size={15} className="text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn-primary px-6 py-3 gap-2">
                Gratis consultatie plannen <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
