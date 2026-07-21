import Link from 'next/link'
import Image from 'next/image'
import { MessageCircle } from 'lucide-react'
import { FacebookIcon, InstagramIcon, TwitterXIcon } from '@/components/ui/SocialIcons'
import { navLinks } from '@/lib/content'
import { PINNKET } from '@/lib/pinnket'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--green-deep)' }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Col 1: Logo + tagline */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/logo.png"
                alt="The Coffee Marathon Uganda"
                width={120}
                height={60}
                className="object-contain"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </Link>
            <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Empowering the IK Community of Karamoja through Coffee Farming to End Poverty.
            </p>
            <a
              href="https://wa.me/256750263333"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full font-label text-sm font-bold uppercase tracking-[0.08em] transition-colors"
              style={{ backgroundColor: 'var(--green-mid)', color: 'white' }}
            >
              <MessageCircle size={16} />
              WhatsApp Us
            </a>
          </div>

          {/* Col 2: Quick links */}
          <div>
            <h3 className="font-label text-xs font-bold uppercase tracking-[0.12em] mb-4" style={{ color: 'var(--green-pale)' }}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm transition-colors hover:text-white"
                    style={{ color: 'var(--green-pale)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/sponsorships" className="font-body text-sm transition-colors hover:text-white" style={{ color: 'var(--green-pale)' }}>Sponsorships</Link>
              </li>
              <li>
                <Link href="/news" className="font-body text-sm transition-colors hover:text-white" style={{ color: 'var(--green-pale)' }}>News</Link>
              </li>
              <li>
                <Link href="/results" className="font-body text-sm transition-colors hover:text-white" style={{ color: 'var(--green-pale)' }}>Results</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Race info */}
          <div>
            <h3 className="font-label text-xs font-bold uppercase tracking-[0.12em] mb-4" style={{ color: 'var(--green-pale)' }}>
              Race Info
            </h3>
            <p className="font-body text-sm mb-1" style={{ color: 'rgba(255,255,255,0.7)' }}>3 October 2026</p>
            <p className="font-body text-sm mb-4" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Africa Coffee Park<br />Ntungamo, Uganda
            </p>
            <div className="flex flex-wrap gap-2 mb-5">
              {['5K', '10K', '21K', '42K'].map((d) => (
                <span
                  key={d}
                  className="font-label text-xs font-bold uppercase tracking-[0.08em] px-2.5 py-1 rounded-full border"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.08)',
                    color: 'var(--green-pale)',
                    borderColor: 'rgba(255,255,255,0.15)',
                  }}
                >
                  {d}
                </span>
              ))}
            </div>
            <Link
              href={PINNKET.register10k}
              className="inline-flex items-center px-4 py-2 rounded-full font-label text-sm font-bold uppercase tracking-[0.08em] transition-colors"
              style={{ backgroundColor: 'var(--green-primary)', color: 'white' }}
            >
              Register Now →
            </Link>
          </div>

          {/* Col 4: Connect */}
          <div>
            <h3 className="font-label text-xs font-bold uppercase tracking-[0.12em] mb-4" style={{ color: 'var(--green-pale)' }}>
              Connect
            </h3>
            <div className="flex gap-3 mb-6">
              {[
                { href: 'https://facebook.com', label: 'Facebook', icon: <FacebookIcon size={18} /> },
                { href: 'https://instagram.com', label: 'Instagram', icon: <InstagramIcon size={18} /> },
                { href: 'https://twitter.com', label: 'X / Twitter', icon: <TwitterXIcon size={18} /> },
              ].map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.08)',
                    color: 'var(--green-pale)',
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
            <Link href="/contact" className="font-body text-sm transition-colors hover:text-white block mb-2" style={{ color: 'var(--green-pale)' }}>
              Contact Us
            </Link>
            <Link href="/accommodation" className="font-body text-sm transition-colors hover:text-white block" style={{ color: 'var(--green-pale)' }}>
              Accommodation
            </Link>
            <p className="mt-6 font-body text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
              info@coffeemarathonug.com<br />
              +256 750 263 333
            </p>
          </div>
        </div>
      </div>

      {/* Theme statement */}
      <div className="border-t" style={{ borderColor: 'rgba(255,255,255,0.1)', backgroundColor: 'rgba(255,255,255,0.03)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 text-center">
          <p className="font-label text-xs uppercase tracking-[0.12em] mb-1" style={{ color: 'rgba(194,237,210,0.6)' }}>Theme 2026</p>
          <p className="font-heading text-base font-semibold italic leading-snug" style={{ color: 'var(--green-pale)' }}>
            &ldquo;Empowering the IK Community of Karamoja through Coffee Farming to End Poverty&rdquo;
          </p>
        </div>
      </div>

      <div className="border-t" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-body text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
            © 2026 The Coffee Marathon Uganda · Organised by Inspire Africa Group
          </p>
          <p className="font-body text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
            Africa Coffee Park, Ntungamo, Uganda
          </p>
        </div>
      </div>
    </footer>
  )
}
