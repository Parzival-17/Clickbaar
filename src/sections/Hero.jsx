import { Btn } from '../components/UI'
import { BoltIcon } from '../components/Icons'
import { useIsMobile } from '../hooks/useIsMobile'

export default function Hero() {
  const headline = "Websites die écht klikken."
  const isMobile = useIsMobile()

  return (
    <section style={{ padding: isMobile ? '60px 20px 80px' : '80px 32px 120px', position: 'relative', overflow: 'hidden' }}>
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.25, pointerEvents: 'none' }} viewBox="0 0 1400 800" preserveAspectRatio="none">
        <defs>
          <pattern id="dots" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.2" fill="#4F9CF9" />
          </pattern>
        </defs>
        <rect x="0" y="0" width="1400" height="800" fill="url(#dots)" mask="url(#heromask)" />
        <mask id="heromask">
          <rect width="1400" height="800" fill="black" />
          <path d="M -100 520 Q 300 280 700 440 T 1500 320" stroke="white" strokeWidth="220" fill="none" />
        </mask>
      </svg>

      <div style={{ maxWidth: 1360, margin: '0 auto', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.05fr 1fr', gap: isMobile ? 40 : 80, alignItems: 'center', position: 'relative' }}>
        <div>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            padding: '8px 14px', borderRadius: 999,
            background: 'var(--yellow)', color: 'var(--blue-deep)',
            fontSize: 13, fontWeight: 600, letterSpacing: '-0.01em', marginBottom: 28,
          }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--blue-deep)', animation: 'pulse-dot 1.6s infinite' }} />
            Nu: 2 plekken voor Q3 2026
          </div>

          <h1 style={{
            fontSize: 'clamp(44px, 5.4vw, 82px)', lineHeight: 0.98, margin: 0,
            fontWeight: 800, letterSpacing: '-0.035em', color: 'var(--blue-deep)',
          }}>
            {headline.split(' ').map((w, i, a) => (
              <span key={i}>
                {i === a.length - 2 ? (
                  <span style={{ position: 'relative', display: 'inline-block' }}>
                    {w}
                    <svg style={{ position: 'absolute', left: -4, right: -4, bottom: -10, width: 'calc(100% + 8px)', height: 16 }} viewBox="0 0 200 16" preserveAspectRatio="none">
                      <path d="M2 10 Q 50 2 100 8 T 198 6" stroke="var(--blue)" strokeWidth="4" fill="none" strokeLinecap="round" />
                    </svg>
                  </span>
                ) : w}{i < a.length - 1 ? ' ' : ''}
              </span>
            ))}
          </h1>

          <p style={{ fontSize: 20, lineHeight: 1.5, color: 'var(--ink-2)', marginTop: 28, maxWidth: 540, letterSpacing: '-0.01em' }}>
            Wij ontwerpen en bouwen websites voor ambitieuze bedrijven.
            Snel, meetbaar, en zonder templates. Van strategie tot launch in 6 weken.
          </p>

          <div style={{ display: 'flex', gap: 14, marginTop: 36, alignItems: 'center', flexWrap: 'wrap' }}>
            <Btn kind="primary" size="lg">Plan een kennismaking</Btn>
            <Btn kind="ghost" size="lg" icon={false}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
                <span style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--blue-deep)', display: 'grid', placeItems: 'center', color: 'var(--yellow)' }}>▶</span>
                Bekijk ons werk — 2 min
              </span>
            </Btn>
          </div>

          <div style={{ display: 'flex', gap: isMobile ? 24 : 44, marginTop: isMobile ? 40 : 56, flexWrap: 'wrap' }}>
            {[['+312%', 'gem. conversie na launch'], ['6 wkn', 'van brief tot live'], ['4.9/5', 'klantbeoordeling']].map(([a, b]) => (
              <div key={b}>
                <div style={{ fontSize: 30, fontWeight: 800, color: 'var(--blue-deep)', letterSpacing: '-0.03em' }}>{a}</div>
                <div style={{ fontSize: 13, color: 'var(--ink-2)', marginTop: 4 }}>{b}</div>
              </div>
            ))}
          </div>
        </div>

        {!isMobile && <HeroVisual />}
      </div>
    </section>
  )
}

function HeroVisual() {
  return (
    <div style={{ position: 'relative', aspectRatio: '1/0.82' }}>
      <div style={{
        position: 'absolute', inset: '10% -6% 10% 6%', borderRadius: 40,
        background: 'var(--yellow)', transform: 'rotate(-3deg)',
      }} />
      <svg style={{ position: 'absolute', right: -20, top: -20, width: 130, height: 130 }} viewBox="0 0 130 130">
        {Array.from({ length: 7 }).map((_, r) => Array.from({ length: 7 }).map((_, c) => (
          <circle key={r + '-' + c} cx={10 + c * 18} cy={10 + r * 18} r="2.2" fill="var(--blue-deep)" />
        )))}
      </svg>

      <div style={{
        position: 'absolute', inset: '4% 4% 4% 4%',
        borderRadius: 18, background: '#fff',
        boxShadow: '0 40px 80px -30px rgba(4,56,115,.35), 0 0 0 1px rgba(4,56,115,.08)',
        overflow: 'hidden', transform: 'rotate(1.5deg)',
      }}>
        <div style={{ height: 38, background: '#F3F4F6', borderBottom: '1px solid var(--line)', display: 'flex', alignItems: 'center', padding: '0 14px', gap: 7 }}>
          <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#FF605C' }} />
          <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#FFBD44' }} />
          <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#00CA4E' }} />
          <div style={{ flex: 1, margin: '0 14px', height: 20, borderRadius: 6, background: '#fff', fontSize: 11, color: '#888', display: 'flex', alignItems: 'center', padding: '0 10px', fontFamily: 'JetBrains Mono,monospace' }}>
            clickbaar.nl/cases/voorbeeld
          </div>
        </div>
        <div style={{ padding: '26px 26px 18px', display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ height: 14, width: 120, background: 'var(--blue)', borderRadius: 4 }} />
          <div style={{ height: 28, width: '88%', background: 'var(--blue-deep)', borderRadius: 6 }} />
          <div style={{ height: 28, width: '62%', background: 'var(--blue-deep)', borderRadius: 6 }} />
          <div style={{ height: 10, width: '74%', background: '#DCE3EA', borderRadius: 4, marginTop: 6 }} />
          <div style={{ height: 10, width: '58%', background: '#DCE3EA', borderRadius: 4 }} />
          <div style={{ display: 'flex', gap: 10, marginTop: 10 }}>
            <div style={{ height: 38, width: 130, background: 'var(--blue)', borderRadius: 8 }} />
            <div style={{ height: 38, width: 110, background: 'transparent', border: '1.5px solid var(--blue-deep)', borderRadius: 8 }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10, marginTop: 12 }}>
            {[0, 1, 2].map(i => (
              <div key={i} style={{ aspectRatio: '1/0.9', background: 'repeating-linear-gradient(135deg,#F3F4F6 0 6px,#E8ECEF 6px 12px)', borderRadius: 8 }} />
            ))}
          </div>
        </div>
      </div>

      <div style={{
        position: 'absolute', right: '-2%', bottom: '8%',
        display: 'flex', alignItems: 'flex-start', gap: 0,
        animation: 'fly 5s ease-in-out infinite',
      }}>
        <svg width="26" height="32" viewBox="0 0 24 24" fill="var(--blue-deep)"><path d="M4 2l5 18 3.2-7.5L20 11 4 2z" /></svg>
        <div style={{
          marginLeft: -4, marginTop: 22, padding: '6px 12px', borderRadius: '0 10px 10px 10px',
          background: 'var(--blue-deep)', color: '#fff', fontSize: 13, fontWeight: 600, whiteSpace: 'nowrap',
        }}>jij · net nu</div>
      </div>

      <div style={{
        position: 'absolute', left: '-4%', top: '18%',
        background: '#fff', borderRadius: 14, padding: '14px 18px',
        boxShadow: '0 20px 40px -20px rgba(4,56,115,.4)',
        display: 'flex', alignItems: 'center', gap: 14,
      }}>
        <div style={{ width: 42, height: 42, borderRadius: 10, background: 'var(--yellow)', display: 'grid', placeItems: 'center', color: 'var(--blue-deep)' }}>
          <BoltIcon width="22" height="22" />
        </div>
        <div>
          <div style={{ fontSize: 12, color: 'var(--ink-2)' }}>PageSpeed</div>
          <div style={{ fontSize: 22, fontWeight: 800, color: 'var(--green)' }}>99 / 100</div>
        </div>
      </div>
    </div>
  )
}
