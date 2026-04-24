import { Logo } from './UI'

const cols = [
  { h: 'Bureau', items: ['Over ons', 'Team', 'Carrière', 'Blog'] },
  { h: 'Diensten', items: ['Strategie', 'Design', 'Development', 'CRO & Growth'] },
  { h: 'Werk', items: ['Cases', 'Klantverhalen', 'Industrieën', 'Proces'] },
  { h: 'Contact', items: ['hello@clickbaar.nl', '+31 20 123 45 67', 'Prinsengracht 263, Amsterdam', 'KvK 87654321'] },
]

export default function Footer() {
  return (
    <footer style={{ background: 'var(--blue-deep)', color: '#fff', padding: '80px 32px 40px' }}>
      <div style={{ maxWidth: 1360, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr repeat(4,1fr)', gap: 40, marginBottom: 60 }}>
          <div>
            <Logo color="#fff" />
            <p style={{ fontSize: 14.5, lineHeight: 1.55, color: 'rgba(255,255,255,.7)', marginTop: 18, maxWidth: 280 }}>
              Clickbaar is een studio van 8 in Amsterdam die websites bouwt voor
              merken met ambitie. Sinds 2019.
            </p>
            <div style={{ display: 'flex', gap: 10, marginTop: 22 }}>
              {['Li', 'Ig', 'Dr', 'Fi'].map(s => (
                <div key={s} style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: 'rgba(255,255,255,.12)',
                  display: 'grid', placeItems: 'center', fontSize: 12, fontWeight: 600,
                }}>{s}</div>
              ))}
            </div>
          </div>
          {cols.map(c => (
            <div key={c.h}>
              <div style={{ fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--yellow)', fontWeight: 600, marginBottom: 18 }}>{c.h}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {c.items.map(i => (
                  <a key={i} href="#" style={{ fontSize: 14.5, color: 'rgba(255,255,255,.8)' }}>{i}</a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{
          fontSize: 'clamp(80px,15vw,220px)', fontWeight: 800, letterSpacing: '-0.05em',
          lineHeight: 0.9, color: 'rgba(255,255,255,.08)', marginTop: 20,
          borderTop: '1px solid rgba(255,255,255,.15)', paddingTop: 20, whiteSpace: 'nowrap', overflow: 'hidden',
        }}>
          Clickbaar<span style={{ color: 'var(--yellow)', opacity: 0.3 }}>.</span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12, marginTop: 20, fontSize: 13, color: 'rgba(255,255,255,.6)' }}>
          <div>© 2026 Clickbaar BV. Alle rechten voorbehouden.</div>
          <div style={{ display: 'flex', gap: 20 }}>
            <a href="#">Privacy</a>
            <a href="#">Cookies</a>
            <a href="#">Voorwaarden</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
