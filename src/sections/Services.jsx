import { useState } from 'react'
import { Eyebrow, Underline, h2Style } from '../components/UI'
import { LayersIcon, ClickIcon, BoltIcon, GaugeIcon, ArrowIcon } from '../components/Icons'

const items = [
  { icon: LayersIcon, title: 'Strategie & merk', desc: 'Positionering, messaging en design system. We vertrekken niet vanuit wireframes — we vertrekken vanuit je klant.' },
  { icon: ClickIcon,  title: 'Design dat klikt',  desc: 'Bold, brand-first ontwerp in Figma. Geen templates, geen compromis. Interactie die klopt op elk scherm.' },
  { icon: BoltIcon,   title: 'Razendsnelle build', desc: 'Next.js of Webflow — we kiezen wat past. 99/100 PageSpeed als uitgangspunt, niet als bonus.' },
  { icon: GaugeIcon,  title: 'Meten & groeien',   desc: 'Analytics, A/B tests en CRO. We stoppen niet bij launch, we stoppen bij resultaat.' },
]

function ServiceCard({ icon: Icon, title, desc, n }) {
  const [hover, setHover] = useState(false)
  return (
    <div
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        background: hover ? 'var(--blue-deep)' : '#fff',
        color: hover ? '#fff' : 'var(--ink)',
        borderRadius: 18, padding: '28px 24px 26px',
        border: '1px solid ' + (hover ? 'var(--blue-deep)' : 'var(--line)'),
        transition: 'all .25s ease',
        transform: hover ? 'translateY(-4px)' : 'translateY(0)',
        minHeight: 280,
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      }}>
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 30 }}>
          <div style={{
            width: 48, height: 48, borderRadius: 12,
            background: hover ? 'var(--yellow)' : '#EEF5FF',
            color: hover ? 'var(--blue-deep)' : 'var(--blue)',
            display: 'grid', placeItems: 'center',
          }}>
            <Icon width="22" height="22" />
          </div>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, opacity: 0.5 }}>0{n}</div>
        </div>
        <h3 style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.02em', margin: '0 0 10px' }}>{title}</h3>
        <p style={{ fontSize: 14.5, lineHeight: 1.55, margin: 0, opacity: hover ? 0.85 : 1, color: hover ? 'rgba(255,255,255,.85)' : 'var(--ink-2)' }}>{desc}</p>
      </div>
      <div style={{ marginTop: 22, display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 600, color: hover ? 'var(--yellow)' : 'var(--blue)' }}>
        Lees meer <ArrowIcon width="14" height="14" />
      </div>
    </div>
  )
}

export default function Services() {
  return (
    <section id="diensten" style={{ padding: '120px 32px', background: 'var(--bg-soft)' }}>
      <div style={{ maxWidth: 1360, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 60, alignItems: 'end', marginBottom: 70 }}>
          <div>
            <Eyebrow>Diensten</Eyebrow>
            <h2 style={h2Style}>Eén team,<br />vier <Underline>superkrachten</Underline>.</h2>
          </div>
          <p style={{ fontSize: 19, lineHeight: 1.5, color: 'var(--ink-2)', maxWidth: 560 }}>
            We dekken de volledige cyclus van een website — geen losse freelancers,
            geen ping-pong tussen bureaus. Eén vaste lead, één prijs, één deadline.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }}>
          {items.map((it, i) => <ServiceCard key={i} {...it} n={i + 1} />)}
        </div>
      </div>
    </section>
  )
}
