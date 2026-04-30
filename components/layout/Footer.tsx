import Link from 'next/link'
import Image from 'next/image'
import { MessageCircle } from 'lucide-react'
import { FacebookIcon, InstagramIcon, TwitterXIcon } from '@/components/ui/SocialIcons'
import { navLinks } from '@/lib/content'
import { PINNKET } from '@/lib/pinnket'

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white border-t-4 border-[var(--color-primary)]">
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
              />
            </Link>
            <p className="font-body text-sm text-white/55 leading-relaxed">
              Empowering the IK Community of Karamoja through Coffee Farming to End Poverty.
            </p>
            <a
              href="https://wa.me/256750263333"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 bg-[var(--color-forest)] text-white px-4 py-2 rounded-full font-label text-sm font-bold uppercase tracking-[0.08em] hover:bg-[var(--color-forest-light)] transition-colors"
            >
              <MessageCircle size={16} />
              WhatsApp Us
            </a>
          </div>

          {/* Col 2: Quick links */}
          <div>
            <h3 className="font-label text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-logo-forest)] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-white/50 hover:text-[var(--color-logo-forest)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/sponsorships" className="font-body text-sm text-white/50 hover:text-[var(--color-logo-forest)] transition-colors">Sponsorships</Link>
              </li>
              <li>
                <Link href="/news" className="font-body text-sm text-white/50 hover:text-[var(--color-logo-forest)] transition-colors">News</Link>
              </li>
              <li>
                <Link href="/results" className="font-body text-sm text-white/50 hover:text-[var(--color-logo-forest)] transition-colors">Results</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Race info */}
          <div>
            <h3 className="font-label text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-logo-forest)] mb-4">
              Race Info
            </h3>
            <p className="font-body text-sm text-white/50 mb-1">3 October 2026</p>
            <p className="font-body text-sm text-white/50 mb-4">
              Africa Coffee Park<br />Ntungamo, Uganda
            </p>
            <div className="flex flex-wrap gap-2 mb-5">
              {['5K', '10K', '21K', '42K'].map((d) => (
                <span
                  key={d}
                  className="font-label text-xs font-bold uppercase tracking-[0.08em] px-2.5 py-1 rounded-full bg-white/10 text-[var(--color-logo-forest)] border border-white/20"
                >
                  {d}
                </span>
              ))}
            </div>
            <Link
              href={PINNKET.register10k}
              className="inline-flex items-center bg-[var(--color-accent)] text-[var(--color-dark)] px-4 py-2 rounded-full font-label text-sm font-bold uppercase tracking-[0.08em] hover:bg-[var(--color-amber-dark)] transition-colors"
            >
              Register Now →
            </Link>
          </div>

          {/* Col 4: Connect */}
          <div>
            <h3 className="font-label text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-logo-forest)] mb-4">
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
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/55 hover:text-[#111111] hover:bg-[var(--color-accent)] transition-all"
                >
                  {icon}
                </a>
              ))}
            </div>
            <Link href="/contact" className="font-body text-sm text-white/50 hover:text-[var(--color-logo-forest)] transition-colors block mb-2">
              Contact Us
            </Link>
            <Link href="/accommodation" className="font-body text-sm text-white/50 hover:text-[var(--color-logo-forest)] transition-colors block">
              Accommodation
            </Link>
            <p className="mt-6 font-body text-xs text-white/30">
              info@coffeemarathonug.com<br />
              +256 750 263 333
            </p>
          </div>
        </div>
      </div>

      {/* Theme statement above copyright */}
      <div className="border-t border-white/10 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 text-center">
          <p className="font-label text-xs text-[var(--color-logo-forest)]/70 uppercase tracking-[0.12em] mb-1">Theme 2026</p>
          <p className="font-display text-base font-semibold text-[var(--color-logo-forest)] italic leading-snug">
            &ldquo;Empowering the IK Community of Karamoja through Coffee Farming to End Poverty&rdquo;
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-body text-xs text-white/40">
            © 2026 The Coffee Marathon Uganda · Organised by Inspire Africa Group
          </p>
          <p className="font-body text-xs text-white/30">
            Africa Coffee Park, Ntungamo, Uganda
          </p>
        </div>
      </div>
    </footer>
  )
}
