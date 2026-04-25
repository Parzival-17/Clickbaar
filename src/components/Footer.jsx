import { Logo } from './UI'

export default function Footer() {
  const navLinks = [
    ['Werk', '/#werk'],
    ['Diensten', '/#diensten'],
    ['Proces', '/#proces'],
    ['Tarieven', '/#tarieven'],
    ['Contact', '/contact'],
  ]

  return (
    <footer style={{ background: 'var(--blue-deep)', color: '#fff', padding: '80px 32px 40px' }}>
      <div style={{ maxWidth: 1360, margin: '0 auto' }}>
        <div className="footer-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr 1.2fr',
          gap: 60, marginBottom: 60, alignItems: 'start',
        }}>
          <div>
            <Logo color="#fff" />
            <p style={{ fontSize: 14.5, lineHeight: 1.55, color: 'rgba(255,255,255,.7)', marginTop: 18, maxWidth: 380 }}>
              Klikbaar is een bedrijf opgericht in omgeving Alkmaar voor lokale bedrijven.
            </p>
          </div>

          <div>
            <div style={{ fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--yellow)', fontWeight: 600, marginBottom: 18 }}>Navigatie</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {navLinks.map(([n, href]) => (
                <a key={n} href={href} style={{ fontSize: 14.5, color: 'rgba(255,255,255,.8)' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,.8)'}
                >{n}</a>
              ))}
            </div>
          </div>

          <div>
            <div style={{ fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--yellow)', fontWeight: 600, marginBottom: 18 }}>Contact</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a href="mailto:Info@klikbaar.com" style={{ fontSize: 14.5, color: 'rgba(255,255,255,.8)' }}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,.8)'}>
                Info@klikbaar.com
              </a>
              <a href="tel:+31612345678" style={{ fontSize: 14.5, color: 'rgba(255,255,255,.8)' }}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,.8)'}>
                +31 6 12 34 56 78
              </a>
              <a href="/contact" style={{ fontSize: 14.5, color: 'rgba(255,255,255,.8)' }}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,.8)'}>
                Stuur een bericht
              </a>
            </div>
          </div>
        </div>

        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: 12, paddingTop: 32,
          borderTop: '1px solid rgba(255,255,255,.15)',
          fontSize: 13, color: 'rgba(255,255,255,.6)',
        }}>
          <div>© 2026 Klikbaar BV. Alle rechten voorbehouden.</div>
          <div style={{ display: 'flex', gap: 20 }}>
            {['Privacy', 'Cookies', 'Voorwaarden'].map(t => (
              <a key={t} href="#" style={{ color: 'rgba(255,255,255,.6)' }}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,.6)'}>{t}</a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </footer>
  )
}