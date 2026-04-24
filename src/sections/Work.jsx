import { useState } from 'react'
import { Eyebrow, Underline, Btn, h2Style } from '../components/UI'
import { ArrowIcon } from '../components/Icons'
import { useIsMobile } from '../hooks/useIsMobile'

const cases = [
  { tag: 'E-commerce · 2026', name: 'Noordkaap', blurb: 'Headless Shopify rebuild. +312% omzet uit organisch verkeer in 4 maanden.', bg: 'linear-gradient(135deg,#043873,#4F9CF9)', color: '#FFE492' },
  { tag: 'B2B SaaS · 2025',   name: 'Merel Analytics', blurb: 'Van legacy WordPress naar Next.js. 7× snellere LCP, bounce -48%.', bg: 'var(--yellow)', color: 'var(--blue-deep)' },
  { tag: 'Hospitality · 2025', name: 'Haverkamp & Co', blurb: 'Reserveringsflow herontworpen. +41% direct bookings binnen 60 dagen.', bg: '#F3EFE4', color: 'var(--blue-deep)' },
  { tag: 'Non-profit · 2024', name: 'Noord-Archief', blurb: 'Volledig toegankelijk platform (WCAG 2.2 AA). 120k bezoekers per maand.', bg: 'var(--blue-deep)', color: '#fff' },
]

function CaseCard({ tag, name, blurb, bg, color, big, wide }) {
  const [hover, setHover] = useState(false)
  return (
    <div
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        background: bg, color, borderRadius: 22,
        padding: big ? 44 : 32,
        minHeight: big ? 520 : (wide ? 260 : 240),
        position: 'relative', overflow: 'hidden', cursor: 'pointer',
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        transition: 'transform .3s ease',
        transform: hover ? 'translateY(-4px)' : 'translateY(0)',
      }}>
      <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', opacity: 0.7, fontFamily: 'JetBrains Mono, monospace' }}>
        {tag}
      </div>

      {big && <BigCaseArt />}
      {!big && !wide && <SmallCaseArt />}
      {wide && <WideCaseArt />}

      <div style={{ position: 'relative', zIndex: 2 }}>
        <h3 style={{ fontSize: big ? 48 : 30, fontWeight: 800, letterSpacing: '-0.03em', margin: '0 0 10px' }}>{name}</h3>
        <p style={{ fontSize: big ? 18 : 15, lineHeight: 1.5, margin: 0, opacity: 0.9, maxWidth: 560 }}>{blurb}</p>
        <div style={{ marginTop: 20, display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14, fontWeight: 600, borderBottom: '1.5px solid currentColor', paddingBottom: 3 }}>
          Bekijk case <ArrowIcon width="14" height="14" />
        </div>
      </div>
    </div>
  )
}

function BigCaseArt() {
  return (
    <svg style={{ position: 'absolute', right: -40, top: 40, width: '65%', height: '80%', opacity: 0.95 }} viewBox="0 0 400 400">
      <defs>
        <pattern id="bigdots" width="14" height="14" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.5" fill="#FFE492" />
        </pattern>
      </defs>
      <circle cx="220" cy="200" r="160" fill="url(#bigdots)" opacity="0.5" />
      <rect x="70" y="80" width="220" height="140" rx="10" fill="#fff" />
      <rect x="85" y="96" width="80" height="10" rx="3" fill="#4F9CF9" />
      <rect x="85" y="116" width="180" height="24" rx="4" fill="#043873" />
      <rect x="85" y="150" width="130" height="10" rx="3" fill="#DCE3EA" />
      <rect x="85" y="166" width="100" height="10" rx="3" fill="#DCE3EA" />
      <rect x="85" y="190" width="60" height="22" rx="5" fill="#FFE492" />
      <rect x="180" y="220" width="160" height="120" rx="10" fill="#fff" stroke="#DCE3EA" />
      <rect x="196" y="236" width="128" height="70" rx="6" fill="#F3EFE4" />
      <circle cx="260" cy="271" r="22" fill="#FFE492" />
      <rect x="196" y="316" width="60" height="8" rx="2" fill="#043873" />
      <rect x="196" y="328" width="40" height="6" rx="2" fill="#A7CEFC" />
    </svg>
  )
}

function SmallCaseArt() {
  return (
    <svg style={{ position: 'absolute', right: -10, top: 20, width: 240, height: 160, opacity: 0.9 }} viewBox="0 0 240 160">
      <rect x="20" y="20" width="200" height="120" rx="8" fill="rgba(0,0,0,0.08)" />
      <rect x="32" y="34" width="176" height="10" rx="2" fill="currentColor" opacity=".5" />
      <rect x="32" y="52" width="130" height="22" rx="4" fill="currentColor" opacity=".9" />
      <rect x="32" y="82" width="80" height="8" rx="2" fill="currentColor" opacity=".4" />
      <rect x="32" y="96" width="60" height="8" rx="2" fill="currentColor" opacity=".4" />
      <rect x="32" y="116" width="46" height="14" rx="3" fill="currentColor" opacity=".8" />
    </svg>
  )
}

function WideCaseArt() {
  return (
    <div style={{ position: 'absolute', right: 40, top: '50%', transform: 'translateY(-50%)', display: 'flex', gap: 14, opacity: 0.95 }}>
      {[0, 1, 2, 3, 4].map(i => (
        <div key={i} style={{
          width: 90, height: 130, borderRadius: 10,
          background: 'rgba(255,255,255,.14)',
          border: '1px solid rgba(255,255,255,.22)',
          transform: `rotate(${i * 2 - 4}deg) translateY(${i % 2 ? -6 : 6}px)`,
        }} />
      ))}
    </div>
  )
}

export default function Work() {
  const isMobile = useIsMobile()
  return (
    <section id="werk" style={{ padding: isMobile ? '60px 20px' : '120px 32px' }}>
      <div style={{ maxWidth: 1360, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'end', justifyContent: 'space-between', marginBottom: 60, flexWrap: 'wrap', gap: 20 }}>
          <div>
            <Eyebrow>Recent werk</Eyebrow>
            <h2 style={h2Style}>Zaken die <Underline>klikken</Underline>.</h2>
          </div>
          <Btn kind="ghost">Volledige portfolio</Btn>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.4fr 1fr', gap: 20 }}>
          <CaseCard {...cases[0]} big />
          <div style={{ display: 'grid', gap: 20 }}>
            <CaseCard {...cases[1]} />
            <CaseCard {...cases[2]} />
          </div>
        </div>
        <div style={{ marginTop: 20 }}>
          <CaseCard {...cases[3]} wide />
        </div>
      </div>
    </section>
  )
}
