import { Btn, Underline } from '../components/UI'
import { useIsMobile } from '../hooks/useIsMobile'

function AvailCard({ day, slot, flat }) {
  return (
    <div style={{
      background: flat ? 'rgba(255,255,255,.5)' : '#fff',
      borderRadius: 14, padding: '16px 20px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      border: '1px solid rgba(4,56,115,.15)',
    }}>
      <div>
        <div style={{ fontSize: 13, color: 'var(--blue-deep)', opacity: 0.7 }}>{day}</div>
        <div style={{ fontSize: 17, fontWeight: 700, color: 'var(--blue-deep)', letterSpacing: '-0.01em', marginTop: 2 }}>{slot}</div>
      </div>
      <button style={{
        background: 'var(--blue-deep)', color: 'var(--yellow)',
        borderRadius: 8, padding: '8px 14px', fontSize: 13, fontWeight: 600, cursor: 'pointer',
      }}>Boek â†’</button>
    </div>
  )
}

export default function CTA() {
  const isMobile = useIsMobile()
  return (
    <section style={{ padding: isMobile ? '40px 20px' : '80px 32px' }}>
      <div style={{
        maxWidth: 1360, margin: '0 auto',
        background: 'var(--yellow)', borderRadius: 28,
        padding: isMobile ? '48px 24px' : '80px 60px', position: 'relative', overflow: 'hidden',
        display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.2fr 1fr', gap: 40, alignItems: 'center',
      }}>
        <svg style={{ position: 'absolute', right: -30, top: -30, width: 360, height: 360, opacity: 0.5 }} viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="70" fill="none" stroke="var(--blue-deep)" strokeWidth="1.5" strokeDasharray="3 6" />
          <circle cx="100" cy="100" r="50" fill="none" stroke="var(--blue-deep)" strokeWidth="1.5" strokeDasharray="3 6" />
          <circle cx="100" cy="100" r="30" fill="none" stroke="var(--blue-deep)" strokeWidth="1.5" strokeDasharray="3 6" />
        </svg>

        <div style={{ position: 'relative' }}>
          <h2 style={{ fontSize: 'clamp(36px,4vw,58px)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1, margin: 0, color: 'var(--blue-deep)' }}>
            Laten we iets bouwen<br />dat <Underline color="var(--blue)">klikt</Underline>.
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.5, color: 'var(--blue-deep)', marginTop: 20, opacity: 0.85, maxWidth: 480 }}>
            30 minuten, geen verkoperstruc. We luisteren, stellen scherpe vragen,
            en sturen dezelfde dag een concrete aanpak op.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 32, flexWrap: 'wrap' }}>
            <Btn kind="dark" size="lg">Plan kennismaking</Btn>
            <Btn kind="ghost" size="lg" icon={false}>hello@Klikbaar.nl</Btn>
          </div>
        </div>

        <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: 12 }}>
          <AvailCard day="Dinsdag 28 apr" slot="10:00 â€“ 10:30" />
          <AvailCard day="Woensdag 29 apr" slot="14:00 â€“ 14:30" flat />
          <AvailCard day="Vrijdag 1 mei" slot="09:30 â€“ 10:00" flat />
        </div>
      </div>
    </section>
  )
}
