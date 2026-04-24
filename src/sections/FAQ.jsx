import { useState } from 'react'
import { Eyebrow, h2Style } from '../components/UI'
import { PlusIcon } from '../components/Icons'

const qs = [
  ['Hoe lang duurt een gemiddeld project?', 'Voor het Groei-pakket rekenen we zes weken van brief tot live — dat is onze belofte. Starter is 4 weken, Schaal loopt doorlopend.'],
  ['Werken jullie met templates?', 'Nooit. Elk design system bouwen we vanaf nul op basis van jullie merk en doelgroep. Templates lekken snelheid en persoonlijkheid.'],
  ['In welke CMS bouwen jullie?', 'Webflow, Sanity, Payload of een headless Next.js setup. We kiezen samen wat het beste past bij jullie content- en dev-capaciteit.'],
  ['Wat als ik niet tevreden ben?', 'Na sprint 1 kun je stoppen tegen gemaakte uren. Geen vendor lock-in, geen piepkleine lettertjes.'],
  ['Doen jullie ook alleen design of alleen dev?', 'Ja — maar alleen als losse traject. We leveren dan Figma files of doen alleen de implementatie vanuit bestaande designs.'],
]

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section style={{ padding: '120px 32px', background: 'var(--bg-soft)' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 50 }}>
          <Eyebrow center>FAQ</Eyebrow>
          <h2 style={{ ...h2Style, textAlign: 'center' }}>Antwoorden, kort en bondig.</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {qs.map(([q, a], i) => (
            <div key={i} style={{ background: '#fff', borderRadius: 14, border: '1px solid var(--line)', overflow: 'hidden' }}>
              <button onClick={() => setOpen(open === i ? -1 : i)} style={{
                width: '100%', padding: '22px 24px', background: 'transparent',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20,
                textAlign: 'left', fontSize: 17, fontWeight: 600, color: 'var(--blue-deep)', letterSpacing: '-0.01em',
                cursor: 'pointer',
              }}>
                {q}
                <span style={{ color: 'var(--blue)', flexShrink: 0, transition: 'transform .2s', transform: open === i ? 'rotate(45deg)' : 'rotate(0)' }}>
                  <PlusIcon width="18" height="18" />
                </span>
              </button>
              {open === i && (
                <div style={{ padding: '0 24px 24px', fontSize: 15.5, lineHeight: 1.55, color: 'var(--ink-2)', maxWidth: 720 }}>
                  {a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
