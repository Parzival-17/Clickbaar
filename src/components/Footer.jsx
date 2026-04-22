import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'

function LinkedinIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
    </svg>
  )
}

function FacebookIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  )
}

function InstagramIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  )
}

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/over-ons', label: 'Over Ons' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/contact', label: 'Contact' },
]

const services = [
  { to: '/services', label: 'Website Bouwen' },
  { to: '/services', label: 'Onderhoud & Beheer' },
  { to: '/services', label: 'SEO & Vindbaarheid' },
  { to: '/pricing', label: 'Prijzen Bekijken' },
]

export default function Footer() {
  return (
    <footer className="relative bg-[#04040f] border-t border-white/5 overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-indigo-600/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="text-2xl font-extrabold text-white">
              Click<span className="gradient-text">baar</span>
            </Link>
            <p className="mt-3 text-sm text-white/40 leading-relaxed">
              Professionele websites voor lokale bedrijven. Snel. Betaalbaar. Effectief.
            </p>
            <div className="flex gap-3 mt-5">
              {[
                { Icon: LinkedinIcon, href: 'https://linkedin.com', label: 'LinkedIn' },
                { Icon: FacebookIcon, href: 'https://facebook.com', label: 'Facebook' },
                { Icon: InstagramIcon, href: 'https://instagram.com', label: 'Instagram' },
              ].map(({ Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
                  className="glass hover:bg-white/10 p-2 rounded-lg transition-all text-white/50 hover:text-white">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-4">Navigatie</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.to + link.label}>
                  <Link to={link.to} className="text-sm text-white/50 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-4">Services</h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.label}>
                  <Link to={s.to} className="text-sm text-white/50 hover:text-white transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-white/50">
                <Mail size={15} className="text-accent shrink-0" />
                <a href="mailto:info@clickbaar.nl" className="hover:text-white transition-colors">
                  info@clickbaar.nl
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/50">
                <Phone size={15} className="text-accent shrink-0" />
                <a href="tel:+31612345678" className="hover:text-white transition-colors">
                  +31 6 12345678
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/50">
                <MapPin size={15} className="text-accent shrink-0 mt-0.5" />
                <span>Heiloo, Noord-Holland</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/25">
          <span>© 2026 Clickbaar. Alle rechten voorbehouden.</span>
          <div className="flex gap-4">
            <Link to="/contact" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-white/60 transition-colors">Algemene Voorwaarden</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
