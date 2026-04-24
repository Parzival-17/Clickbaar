const clients = ['NOORDKAAP', 'Studio Merel', 'Haverkamp & Co', 'Fietshelden', 'Noord-Archief', 'Bakkerij Os']

export default function LogoBar() {
  return (
    <section style={{ padding: '0 32px 60px' }}>
      <div style={{ maxWidth: 1360, margin: '0 auto', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', padding: '28px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
          <div style={{ fontSize: 13, color: 'var(--ink-2)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Vertrouwd door 60+ merken
          </div>
          {clients.map(c => (
            <div key={c} style={{
              fontSize: 18, fontWeight: 700, color: 'var(--ink-2)', opacity: 0.7, letterSpacing: '-0.01em',
              fontFamily: c.includes('Studio') ? 'Inter' : 'JetBrains Mono, monospace',
            }}>
              {c}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
