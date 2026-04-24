import { Eyebrow, Underline, Btn, h2Style } from '../components/UI'
import { CheckIcon } from '../components/Icons'
import { useIsMobile } from '../hooks/useIsMobile'

const plans = [
  {
    name: 'Starter', badge: null,
    price: '€4.900', sub: 'eenmalig · excl. btw',
    tagline: 'Voor startups die snel moeten launchen.',
    features: ['4–6 pagina\'s', 'Webflow of WordPress', 'Basic SEO setup', '2 revisierondes', 'Launch binnen 4 weken'],
    cta: 'Starter kiezen', kind: 'ghost',
  },
  {
    name: 'Groei', badge: 'Meest gekozen',
    price: '€14.900', sub: 'eenmalig · excl. btw',
    tagline: 'De complete website voor serieuze merken.',
    features: ['Custom design system', 'Tot 20 pagina\'s', 'CMS op maat', '3 revisierondes', 'Analytics & CRO setup', '90 dagen support', 'Launch binnen 6 weken'],
    cta: 'Groei kiezen', kind: 'primary', highlight: true,
  },
  {
    name: 'Schaal', badge: null,
    price: 'Op maat', sub: 'retainer vanaf €4.500/mnd',
    tagline: 'Voor teams die continu willen groeien.',
    features: ['Dedicated design + dev', 'Onbeperkte pagina\'s', 'Maandelijkse CRO-sprints', 'Headless / Next.js', 'A/B test framework', 'SLA 24u'],
    cta: 'Plan gesprek', kind: 'dark',
  },
]

function PriceCard({ name, badge, price, sub, tagline, features, cta, kind, highlight }) {
  const isMobile = useIsMobile()
  return (
    <div style={{
      background: highlight ? 'var(--blue-deep)' : '#fff',
      color: highlight ? '#fff' : 'var(--ink)',
      borderRadius: 22, padding: '36px 32px',
      border: highlight ? '1px solid var(--blue-deep)' : '1px solid var(--line)',
      position: 'relative',
      transform: highlight && !isMobile ? 'scale(1.02)' : 'scale(1)',
      boxShadow: highlight ? '0 30px 60px -20px rgba(4,56,115,.35)' : 'none',
      display: 'flex', flexDirection: 'column',
    }}>
      {badge && (
        <div style={{
          position: 'absolute', top: -14, right: 28,
          background: 'var(--yellow)', color: 'var(--blue-deep)',
          padding: '6px 14px', borderRadius: 999,
          fontSize: 12, fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase',
        }}>{badge}</div>
      )}
      <div style={{ fontSize: 14, fontWeight: 600, color: highlight ? 'var(--yellow)' : 'var(--blue)', letterSpacing: '-0.01em', marginBottom: 6 }}>{name}</div>
      <div style={{ fontSize: 44, fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1 }}>{price}</div>
      <div style={{ fontSize: 13, color: highlight ? 'rgba(255,255,255,.7)' : 'var(--ink-2)', marginTop: 6 }}>{sub}</div>
      <p style={{ fontSize: 15, lineHeight: 1.5, marginTop: 18, marginBottom: 26, color: highlight ? 'rgba(255,255,255,.88)' : 'var(--ink-2)' }}>{tagline}</p>
      <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', display: 'flex', flexDirection: 'column', gap: 11 }}>
        {features.map(f => (
          <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14.5 }}>
            <span style={{
              width: 20, height: 20, borderRadius: '50%', flexShrink: 0, marginTop: 1,
              background: highlight ? 'var(--yellow)' : '#EEF5FF',
              color: highlight ? 'var(--blue-deep)' : 'var(--blue)',
              display: 'grid', placeItems: 'center',
            }}><CheckIcon width="12" height="12" /></span>
            {f}
          </li>
        ))}
      </ul>
      <div style={{ marginTop: 'auto' }}>
        <Btn kind={highlight ? 'yellow' : kind}>{cta}</Btn>
      </div>
    </div>
  )
}

export default function Pricing() {
  const isMobile = useIsMobile()
  return (
    <section id="tarieven" style={{ padding: isMobile ? '60px 20px' : '120px 32px', background: 'var(--bg-soft)' }}>
      <div style={{ maxWidth: 1360, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 60px' }}>
          <Eyebrow center>Tarieven</Eyebrow>
          <h2 style={{ ...h2Style, textAlign: 'center' }}>Transparante prijzen.<br /><Underline>Geen verrassingen.</Underline></h2>
          <p style={{ fontSize: 18, lineHeight: 1.5, color: 'var(--ink-2)', marginTop: 16 }}>
            Drie duidelijke paden. Vaste prijs op de dag van je kennismaking.
            Geen uurtje-factuurtje, geen scope creep.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3,1fr)', gap: 20, alignItems: 'stretch' }}>
          {plans.map(p => <PriceCard key={p.name} {...p} />)}
        </div>

        <p style={{ textAlign: 'center', marginTop: 32, fontSize: 14, color: 'var(--ink-2)' }}>
          Liever iets anders? We bouwen ook alleen-design of alleen-dev trajecten.{' '}
          <a href="#" style={{ color: 'var(--blue)', fontWeight: 600 }}>Neem contact op →</a>
        </p>
      </div>
    </section>
  )
}
