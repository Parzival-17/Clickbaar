import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Logo, Btn } from './UI'

const navLinks = [
  { label: 'Werk', href: '/#werk' },
  { label: 'Diensten', href: '/#diensten' },
  { label: 'Proces', href: '/#proces' },
  { label: 'Tarieven', href: '/#tarieven' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', on)
    return () => window.removeEventListener('scroll', on)
  }, [])

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: scrolled ? 'rgba(255,255,255,.92)' : 'rgba(255,255,255,0)',
      backdropFilter: scrolled ? 'saturate(160%) blur(14px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--line)' : '1px solid transparent',
      transition: 'background .2s, border .2s',
    }}>
      <div style={{
        maxWidth: 1360, margin: '0 auto',
        padding: '18px 32px', display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', gap: 40,
      }}>
        <Link to="/"><Logo variant="bracket" /></Link>

        <nav className="desktop-nav" style={{ display: 'flex', gap: 32, fontSize: 15 }}>
          {navLinks.map(({ label, href }) => (
            <a key={label} href={href} style={{
              opacity: 0.85, fontWeight: 500,
              color: label === 'Contact' ? 'var(--blue)' : 'var(--ink)',
            }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--blue)'; e.currentTarget.style.opacity = '1' }}
              onMouseLeave={e => { e.currentTarget.style.color = label === 'Contact' ? 'var(--blue)' : 'var(--ink)'; e.currentTarget.style.opacity = '0.85' }}
            >{label}</a>
          ))}
        </nav>

        <div className="desktop-nav" style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <Link to="/contact">
            <Btn kind="primary">Plan een afspraak</Btn>
          </Link>
        </div>

        <button className="hamburger" onClick={() => setMenuOpen(o => !o)}
          aria-label="Menu"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
            <span style={{ display: 'block', width: 22, height: 2, background: 'var(--ink)', borderRadius: 2, transition: 'transform .2s', transform: menuOpen ? 'rotate(45deg) translate(5px,5px)' : 'none' }} />
            <span style={{ display: 'block', width: 22, height: 2, background: 'var(--ink)', borderRadius: 2, opacity: menuOpen ? 0 : 1, transition: 'opacity .2s' }} />
            <span style={{ display: 'block', width: 22, height: 2, background: 'var(--ink)', borderRadius: 2, transition: 'transform .2s', transform: menuOpen ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }} />
          </div>
        </button>
      </div>

      {menuOpen && (
        <div style={{
          background: '#fff', borderTop: '1px solid var(--line)',
          padding: '16px 32px 24px',
        }}>
          {navLinks.map(({ label, href }) => (
            <a key={label} href={href} onClick={() => setMenuOpen(false)}
              style={{
                display: 'block', padding: '13px 0', fontSize: 16, fontWeight: 500,
                color: label === 'Contact' ? 'var(--blue)' : 'var(--ink)',
                borderBottom: '1px solid var(--line)',
              }}>{label}</a>
          ))}
          <div style={{ marginTop: 18 }}>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              <Btn kind="primary">Plan een afspraak</Btn>
            </Link>
          </div>
        </div>
      )}

      <style>{`
        .hamburger { display: none !important; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </header>
  )
}