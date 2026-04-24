import { ArrowIcon } from './Icons'

export function Logo({ variant = 'bracket', color = 'var(--blue-deep)' }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, color }}>
      <div style={{
        width: 34, height: 34, borderRadius: 9,
        background: 'var(--blue-deep)',
        display: 'grid', placeItems: 'center',
        boxShadow: 'inset 0 0 0 3px var(--yellow)',
        position: 'relative',
      }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M7 3.5L7 11M3.5 7L11 7" stroke="var(--yellow)" strokeWidth="2.4" strokeLinecap="round"/>
          <path d="M10.5 10.5l9.5 4-4.2 1.9-2 4.6-3.3-10.5z" fill="var(--yellow)"/>
        </svg>
      </div>
      <div style={{ fontWeight: 800, fontSize: 22, letterSpacing: '-0.02em' }}>
        {variant === 'bracket'
          ? <>Clickbaar<span style={{ color: 'var(--blue)' }}>.</span></>
          : 'Clickbaar'}
      </div>
    </div>
  )
}

export function Btn({ children, kind = 'primary', size = 'md', onClick, icon = true }) {
  const base = {
    display: 'inline-flex', alignItems: 'center', gap: 10,
    borderRadius: 10, fontWeight: 600, letterSpacing: '-0.01em',
    padding: size === 'lg' ? '18px 26px' : '14px 22px',
    fontSize: size === 'lg' ? 17 : 15,
    transition: 'transform .15s ease, box-shadow .2s ease, background .2s ease',
    cursor: 'pointer',
  }
  const styles = {
    primary: { ...base, background: 'var(--blue)', color: '#fff', boxShadow: '0 10px 24px -10px rgba(79,156,249,.6)' },
    yellow:  { ...base, background: 'var(--yellow)', color: 'var(--blue-deep)' },
    ghost:   { ...base, background: 'transparent', color: 'var(--blue-deep)', boxShadow: 'inset 0 0 0 1.5px var(--blue-deep)' },
    dark:    { ...base, background: 'var(--blue-deep)', color: '#fff' },
    white:   { ...base, background: '#fff', color: 'var(--blue-deep)' },
  }
  return (
    <button onClick={onClick} style={styles[kind]}
      onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-1px)'}
      onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
      {children}
      {icon && <ArrowIcon width="16" height="16" />}
    </button>
  )
}

export const h2Style = {
  fontSize: 'clamp(40px,5vw,72px)', fontWeight: 800, letterSpacing: '-0.035em',
  lineHeight: 0.98, margin: '12px 0 0', color: 'var(--blue-deep)',
}

export function Eyebrow({ children, light, center }) {
  return (
    <div style={{
      fontSize: 13, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase',
      color: light ? 'var(--yellow)' : 'var(--blue)',
      fontFamily: 'JetBrains Mono, monospace',
      textAlign: center ? 'center' : 'left',
    }}>— {children}</div>
  )
}

export function Underline({ children, color = 'var(--yellow)' }) {
  return (
    <span style={{ position: 'relative', display: 'inline-block', whiteSpace: 'nowrap' }}>
      <span style={{ position: 'absolute', left: 0, right: 0, bottom: '0.06em', height: '0.3em', background: color, zIndex: 0, borderRadius: 3 }} />
      <span style={{ position: 'relative', zIndex: 1 }}>{children}</span>
    </span>
  )
}
