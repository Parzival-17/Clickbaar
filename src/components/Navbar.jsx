import { useState, useEffect } from 'react'
import { Logo, Btn } from './UI'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const nav = ['Werk', 'Diensten', 'Proces', 'Tarieven', 'Blog']

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', on)
    return () => window.removeEventListener('scroll', on)
  }, [])

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: scrolled ? 'rgba(255,255,255,.85)' : 'transparent',
      backdropFilter: scrolled ? 'saturate(160%) blur(14px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--line)' : '1px solid transparent',
      transition: 'background .2s, border .2s',
    }}>
      <div style={{
        maxWidth: 1360, margin: '0 auto',
        padding: '18px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 40,
      }}>
        <a href="#"><Logo variant="bracket" /></a>
        <nav style={{ display: 'flex', gap: 32, fontSize: 15, color: 'var(--ink)' }}>
          {nav.map(n => (
            <a key={n} href={'#' + n.toLowerCase()} style={{ opacity: 0.85, fontWeight: 500 }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--blue)'}
              onMouseLeave={e => e.currentTarget.style.color = ''}>{n}</a>
          ))}
        </nav>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <a href="#" style={{ fontSize: 15, fontWeight: 500, padding: '10px 16px', color: 'var(--blue-deep)' }}>Inloggen</a>
          <Btn kind="primary">Start je project</Btn>
        </div>
      </div>
    </header>
  )
}
