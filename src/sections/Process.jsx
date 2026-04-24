import { Eyebrow, Underline, h2Style } from '../components/UI'
import { useIsMobile } from '../hooks/useIsMobile'

const steps = [
  { n: '01', t: 'Discovery', d: 'Twee workshops. We distilleren doel, doelgroep en differentiator. Jij krijgt een brand brief die sticky is.' },
  { n: '02', t: 'Design sprint', d: '3 weken, wekelijkse check-ins in Figma. Concept, systeem, en prototype. We designen geen pagina — we designen een ervaring.' },
  { n: '03', t: 'Build', d: 'Onze developers en designers zitten naast elkaar. Geen overdracht, geen verrassingen. CMS naar keuze.' },
  { n: '04', t: 'Launch & groei', d: 'Soft launch, QA, performance audit. Daarna: driemaandelijkse CRO-cycli om te blijven groeien.' },
]

export default function Process() {
  const isMobile = useIsMobile()
  return (
    <section id="proces" style={{ padding: isMobile ? '60px 20px' : '120px 32px', background: 'var(--blue-deep)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.12 }} viewBox="0 0 1400 700" preserveAspectRatio="xMidYMid slice">
        {Array.from({ length: 60 }).map((_, i) => {
          const x = (i * 73) % 1400, y = (i * 131) % 700
          return <path key={i} d={`M${x} ${y - 8} l2.4 5.8 6 0.6 -4.5 4.2 1.2 6 -5.4-3 -5.4 3 1.2-6 -4.5-4.2 6-0.6z`} fill="#FFE492" />
        })}
      </svg>

      <div style={{ maxWidth: 1360, margin: '0 auto', position: 'relative' }}>
        <div style={{ maxWidth: 640, marginBottom: 70 }}>
          <Eyebrow light>Proces</Eyebrow>
          <h2 style={{ ...h2Style, color: '#fff' }}>Van brief tot live in <Underline color="var(--yellow)">zes weken</Underline>.</h2>
          <p style={{ fontSize: 18, lineHeight: 1.5, color: 'rgba(255,255,255,.8)', marginTop: 16 }}>
            Geen vaag lopende trajecten. Vaste sprints, vaste prijs, vast team.
            Elke vrijdag een demo — zelfs als er niets af is.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2,1fr)' : 'repeat(4,1fr)', gap: 0, borderTop: '1px solid rgba(255,255,255,.15)' }}>
          {steps.map((s, i) => (
            <div key={s.n} style={{
              padding: isMobile ? '24px 16px 20px' : '32px 28px 28px',
              borderRight: isMobile ? (i % 2 === 0 ? '1px solid rgba(255,255,255,.15)' : 'none') : (i < 3 ? '1px solid rgba(255,255,255,.15)' : 'none'),
              borderBottom: isMobile && i < 2 ? '1px solid rgba(255,255,255,.15)' : 'none',
              position: 'relative',
            }}>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 14, color: 'var(--yellow)', fontWeight: 500, marginBottom: 20 }}>
                {s.n} / 04
              </div>
              <h3 style={{ fontSize: 24, fontWeight: 700, letterSpacing: '-0.02em', margin: '0 0 12px' }}>{s.t}</h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.55, margin: 0, color: 'rgba(255,255,255,.75)' }}>{s.d}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 50, display: 'flex', alignItems: 'center', gap: 14, fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: 'rgba(255,255,255,.7)' }}>
          <span>Week 1</span>
          <div style={{ flex: 1, height: 6, borderRadius: 3, background: 'rgba(255,255,255,.15)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg,var(--yellow),var(--blue))' }} />
            {[0, 25, 55, 80].map((p, i) => (
              <div key={i} style={{ position: 'absolute', left: p + '%', top: -4, width: 14, height: 14, borderRadius: '50%', background: 'var(--yellow)', border: '3px solid var(--blue-deep)' }} />
            ))}
          </div>
          <span>Week 6 · Live</span>
        </div>
      </div>
    </section>
  )
}
