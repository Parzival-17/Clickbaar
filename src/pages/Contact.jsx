import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

/* ── Icons ── */
const ArrowIcon = (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M5 12h14M13 6l6 6-6 6"/></svg>
const CheckIcon = (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M4 12.5l5 5L20 6.5"/></svg>
const BoltIcon  = (p) => <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z"/></svg>
const MailIcon  = (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>
const PhoneIcon = (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M5 4h4l2 5-3 2a12 12 0 006 6l2-3 5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z"/></svg>
const PinIcon   = (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M12 22s7-7.5 7-13a7 7 0 10-14 0c0 5.5 7 13 7 13z"/><circle cx="12" cy="9" r="2.5"/></svg>
const ClockIcon = (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>

/* ── Reveal ── */
function Reveal({ children, delay = 0, from = 'up', as = 'div', style, ...rest }) {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)
  useEffect(() => {
    if (!ref.current) return
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); io.disconnect() }
    }, { threshold: 0.12 })
    io.observe(ref.current)
    return () => io.disconnect()
  }, [])
  const offsets = { up: 'translate(0,40px)', down: 'translate(0,-40px)', left: 'translate(-40px,0)', right: 'translate(40px,0)', zoom: 'scale(.94)', none: 'none' }
  const Tag = as
  return (
    <Tag ref={ref} style={{
      ...style,
      opacity: visible ? 1 : 0,
      transform: visible ? 'none' : offsets[from],
      transition: `opacity .8s cubic-bezier(.2,.8,.2,1) ${delay}ms, transform .9s cubic-bezier(.2,.8,.2,1) ${delay}ms`,
      willChange: 'opacity, transform',
    }} {...rest}>{children}</Tag>
  )
}

/* ── Field ── */
function Field({ label, children, required, hint }) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--blue-deep)', letterSpacing: '-0.005em' }}>
        {label} {required && <span style={{ color: 'var(--red)' }}>*</span>}
      </span>
      {children}
      {hint && <span style={{ fontSize: 12, color: 'var(--ink-2)', opacity: 0.7 }}>{hint}</span>}
    </label>
  )
}

const inputStyle = {
  width: '100%', padding: '14px 16px', borderRadius: 10,
  border: '1.5px solid var(--line)', background: '#fff',
  fontSize: 15, color: 'var(--ink)', outline: 'none',
  transition: 'border-color .15s ease, box-shadow .15s ease',
  fontFamily: 'inherit',
}
const applyFocus = (e) => { e.currentTarget.style.borderColor = 'var(--blue)'; e.currentTarget.style.boxShadow = '0 0 0 4px rgba(79,156,249,.15)' }
const clearFocus = (e) => { e.currentTarget.style.borderColor = 'var(--line)'; e.currentTarget.style.boxShadow = 'none' }

/* ── ContactRow ── */
function ContactRow({ icon, label, value, href }) {
  const inner = (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
      <div style={{
        width: 38, height: 38, borderRadius: 10,
        background: 'rgba(255,228,146,.18)', color: 'var(--yellow)',
        display: 'grid', placeItems: 'center', flexShrink: 0,
      }}>{icon}</div>
      <div>
        <div style={{ fontSize: 12, opacity: 0.7, fontFamily: 'JetBrains Mono,monospace', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{label}</div>
        <div style={{ fontSize: 16, fontWeight: 600, letterSpacing: '-0.01em', marginTop: 2 }}>{value}</div>
      </div>
    </div>
  )
  return <li style={{ listStyle: 'none' }}>{href ? <a href={href} style={{ color: '#fff' }}>{inner}</a> : inner}</li>
}

/* ── Contact Page ── */
export default function Contact() {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', message: '', topic: 'Nieuwe website' })
  const [sent, setSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }))
  const valid = form.name.trim() && form.email.trim() && form.message.trim()

  const submit = (e) => {
    e.preventDefault()
    if (!valid) return
    setSubmitting(true)
    setTimeout(() => { setSubmitting(false); setSent(true) }, 800)
  }

  return (
    <>
      {/* Hero */}
      <section style={{ padding: '60px 32px 30px', position: 'relative', overflow: 'hidden', background: 'var(--bg)' }}>
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.22, pointerEvents: 'none' }} viewBox="0 0 1400 500" preserveAspectRatio="none">
          <defs>
            <pattern id="cdots" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.2" fill="#4F9CF9" />
            </pattern>
            <mask id="cmask">
              <rect width="1400" height="500" fill="black" />
              <path d="M -100 320 Q 400 100 800 260 T 1500 180" stroke="white" strokeWidth="200" fill="none" />
            </mask>
          </defs>
          <rect width="1400" height="500" fill="url(#cdots)" mask="url(#cmask)" />
        </svg>
        <div style={{ maxWidth: 1080, margin: '0 auto', position: 'relative', textAlign: 'center' }}>
          <Reveal from="up">
            <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--blue)', fontFamily: 'JetBrains Mono, monospace' }}>— Contact</div>
            <h1 style={{ fontSize: 'clamp(40px,6vw,80px)', fontWeight: 800, letterSpacing: '-0.035em', lineHeight: 1, margin: '12px 0 0', color: 'var(--blue-deep)' }}>
              Laten we <span style={{ position: 'relative', display: 'inline-block' }}>
                kennismaken
                <svg style={{ position: 'absolute', left: -4, right: -4, bottom: -8, width: 'calc(100% + 8px)', height: 14 }} viewBox="0 0 200 14" preserveAspectRatio="none">
                  <path d="M2 8 Q 50 2 100 6 T 198 5" stroke="var(--yellow)" strokeWidth="5" fill="none" strokeLinecap="round" />
                </svg>
              </span>.
            </h1>
          </Reveal>
          <Reveal as="p" from="up" delay={150} style={{ fontSize: 20, lineHeight: 1.5, color: 'var(--ink-2)', marginTop: 24, maxWidth: 560, marginLeft: 'auto', marginRight: 'auto', letterSpacing: '-0.01em' }}>
            Heb je een idee, vraag of project? Vul het formulier in en we reageren binnen één werkdag.
          </Reveal>
        </div>
      </section>

      {/* Body */}
      <section style={{ padding: '40px 32px 100px', background: 'var(--bg-soft)' }}>
        <div className="contact-grid" style={{ maxWidth: 1180, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 40, alignItems: 'start' }}>

          {/* Form */}
          <Reveal from="up">
            <form onSubmit={submit} style={{
              background: '#fff', borderRadius: 22,
              border: '1px solid var(--line)',
              padding: '40px 40px 36px',
              boxShadow: '0 24px 60px -30px rgba(4,56,115,.18)',
            }}>
              {sent ? (
                <div style={{ padding: '40px 0', textAlign: 'center' }}>
                  <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--yellow)', display: 'grid', placeItems: 'center', margin: '0 auto 20px', color: 'var(--blue-deep)' }}>
                    <CheckIcon width="32" height="32" />
                  </div>
                  <h3 style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--blue-deep)', margin: '0 0 10px' }}>
                    Bedankt, {form.name.split(' ')[0]}!
                  </h3>
                  <p style={{ fontSize: 16, color: 'var(--ink-2)', lineHeight: 1.5, margin: '0 auto', maxWidth: 380 }}>
                    Je bericht is binnen. We reageren binnen één werkdag op <strong>{form.email}</strong>.
                  </p>
                  <div style={{ marginTop: 28 }}>
                    <button type="button" onClick={() => { setSent(false); setForm({ name: '', company: '', email: '', phone: '', message: '', topic: 'Nieuwe website' }) }}
                      style={{ display: 'inline-flex', alignItems: 'center', gap: 10, borderRadius: 10, fontWeight: 600, padding: '14px 22px', fontSize: 15, transition: 'transform .15s ease', cursor: 'pointer', background: 'transparent', color: 'var(--blue-deep)', boxShadow: 'inset 0 0 0 1.5px var(--blue-deep)' }}
                      onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-1px)'}
                      onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
                      Nog een bericht sturen
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <h2 style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-0.025em', color: 'var(--blue-deep)', margin: '0 0 6px' }}>Stuur ons een bericht</h2>
                  <p style={{ fontSize: 15, color: 'var(--ink-2)', margin: '0 0 28px' }}>
                    Velden met <span style={{ color: 'var(--red)' }}>*</span> zijn verplicht.
                  </p>

                  <div className="form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
                    <Field label="Naam" required>
                      <input required type="text" value={form.name} onChange={set('name')} placeholder="Voor- en achternaam" style={inputStyle} onFocus={applyFocus} onBlur={clearFocus} />
                    </Field>
                    <Field label="Bedrijfsnaam">
                      <input type="text" value={form.company} onChange={set('company')} placeholder="Bijv. Studio Merel" style={inputStyle} onFocus={applyFocus} onBlur={clearFocus} />
                    </Field>
                    <Field label="E-mail" required>
                      <input required type="email" value={form.email} onChange={set('email')} placeholder="naam@bedrijf.nl" style={inputStyle} onFocus={applyFocus} onBlur={clearFocus} />
                    </Field>
                    <Field label="Telefoonnummer">
                      <input type="tel" value={form.phone} onChange={set('phone')} placeholder="+31 6 ..." style={inputStyle} onFocus={applyFocus} onBlur={clearFocus} />
                    </Field>
                  </div>

                  <div style={{ marginTop: 18 }}>
                    <Field label="Onderwerp">
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                        {['Nieuwe website', 'Redesign', 'Webshop', 'Anders'].map(t => (
                          <button key={t} type="button" onClick={() => setForm(f => ({ ...f, topic: t }))} style={{
                            padding: '10px 16px', borderRadius: 999, fontSize: 13, fontWeight: 600,
                            border: form.topic === t ? '1.5px solid var(--blue)' : '1.5px solid var(--line)',
                            background: form.topic === t ? '#EEF5FF' : '#fff',
                            color: form.topic === t ? 'var(--blue-deep)' : 'var(--ink-2)',
                            transition: 'all .15s ease', cursor: 'pointer',
                          }}>{t}</button>
                        ))}
                      </div>
                    </Field>
                  </div>

                  <div style={{ marginTop: 18 }}>
                    <Field label="Bericht" required hint="Vertel ons kort over je project, doelen en eventuele deadline.">
                      <textarea required rows={6} value={form.message} onChange={set('message')} placeholder="Waar kunnen we je mee helpen?" style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.5 }} onFocus={applyFocus} onBlur={clearFocus} />
                    </Field>
                  </div>

                  <div style={{ marginTop: 28, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 14 }}>
                    <div style={{ fontSize: 13, color: 'var(--ink-2)', display: 'flex', alignItems: 'center', gap: 8 }}>
                      <BoltIcon width="14" height="14" style={{ color: 'var(--blue)' }} />
                      Reactie binnen 1 werkdag
                    </div>
                    <button type="submit" disabled={!valid || submitting}
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: 10, borderRadius: 10,
                        fontWeight: 600, padding: '18px 26px', fontSize: 17,
                        transition: 'transform .15s ease, box-shadow .2s ease',
                        background: 'var(--blue)', color: '#fff',
                        boxShadow: '0 10px 24px -10px rgba(79,156,249,.6)',
                        opacity: (!valid || submitting) ? 0.55 : 1,
                        cursor: (!valid || submitting) ? 'not-allowed' : 'pointer',
                        border: 'none', fontFamily: 'inherit',
                      }}
                      onMouseEnter={e => { if (valid && !submitting) e.currentTarget.style.transform = 'translateY(-1px)' }}
                      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)' }}>
                      {submitting ? 'Versturen...' : 'Verstuur bericht'}
                      <ArrowIcon width="16" height="16" />
                    </button>
                  </div>
                </>
              )}
            </form>
          </Reveal>

          {/* Sidebar */}
          <Reveal from="right" delay={200}>
            <aside style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{
                background: 'var(--blue-deep)', color: '#fff',
                borderRadius: 22, padding: '32px 28px',
                position: 'relative', overflow: 'hidden',
              }}>
                <svg style={{ position: 'absolute', right: -30, top: -30, width: 200, height: 200, opacity: 0.18, pointerEvents: 'none' }} viewBox="0 0 200 200">
                  <defs>
                    <pattern id="sd" width="14" height="14" patternUnits="userSpaceOnUse">
                      <circle cx="2" cy="2" r="1.4" fill="#FFE492" />
                    </pattern>
                  </defs>
                  <circle cx="100" cy="100" r="100" fill="url(#sd)" />
                </svg>
                <div style={{ position: 'relative' }}>
                  <div style={{ fontSize: 13, fontFamily: 'JetBrains Mono,monospace', color: 'var(--yellow)', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>— Onze gegevens</div>
                  <h3 style={{ fontSize: 24, fontWeight: 800, letterSpacing: '-0.02em', margin: '10px 0 18px' }}>Direct contact</h3>
                  <ul style={{ padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 18 }}>
                    <ContactRow icon={<MailIcon width="18" height="18" />} label="E-mail" value="Info@klikbaar.com" href="mailto:Info@klikbaar.com" />
                    <ContactRow icon={<PhoneIcon width="18" height="18" />} label="Telefoon" value="+31 6 12 34 56 78" href="tel:+31612345678" />
                    <ContactRow icon={<PinIcon width="18" height="18" />} label="Locatie" value="Omgeving Alkmaar, NL" />
                    <ContactRow icon={<ClockIcon width="18" height="18" />} label="Bereikbaarheid" value="Ma–vr · 09:00–18:00" />
                  </ul>
                </div>
              </div>

              <div style={{ background: 'var(--yellow)', borderRadius: 22, padding: '24px 26px', color: 'var(--blue-deep)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--blue-deep)', display: 'inline-block', animation: 'pulseBeacon 1.6s infinite' }} />
                  <div style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Gratis pilot</div>
                </div>
                <div style={{ fontSize: 18, fontWeight: 700, lineHeight: 1.35, letterSpacing: '-0.015em' }}>
                  Eerste 2 klanten krijgen een gratis website. Wees er snel bij.
                </div>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>

      <style>{`
        @keyframes pulseBeacon { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.4;transform:scale(1.4)} }
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .contact-grid { padding: 0 !important; }
        }
      `}</style>
    </>
  )
}