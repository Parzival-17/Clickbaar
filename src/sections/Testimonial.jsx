import { StarIcon } from '../components/Icons'

export default function Testimonial() {
  return (
    <section style={{ padding: '120px 32px' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', gap: 4, marginBottom: 28 }}>
          {[0, 1, 2, 3, 4].map(i => <StarIcon key={i} width="22" height="22" style={{ color: 'var(--yellow)' }} />)}
        </div>
        <blockquote style={{
          margin: 0, fontSize: 'clamp(26px,2.6vw,38px)', lineHeight: 1.3,
          fontWeight: 600, letterSpacing: '-0.025em', color: 'var(--blue-deep)',
        }}>
          "Clickbaar bouwde in zes weken de site die ons drie bureaus niet konden leveren.
          Zes maanden later is onze organische omzet verdrievoudigd — en we weten precies waaróm."
        </blockquote>
        <div style={{ marginTop: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14 }}>
          <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--yellow)', display: 'grid', placeItems: 'center', fontWeight: 800, color: 'var(--blue-deep)' }}>MV</div>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontWeight: 700, fontSize: 15 }}>Maartje Vermeer</div>
            <div style={{ fontSize: 13, color: 'var(--ink-2)' }}>Head of Growth · Noordkaap</div>
          </div>
        </div>
      </div>
    </section>
  )
}
