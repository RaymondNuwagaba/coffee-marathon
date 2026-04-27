import Link from 'next/link'
import Image from 'next/image'
import { MessageCircle } from 'lucide-react'
import { FacebookIcon, InstagramIcon, TwitterXIcon } from '@/components/ui/SocialIcons'
import { navLinks } from '@/lib/content'
import { PINNKET } from '@/lib/pinnket'

export default function Footer() {
  return (
    <footer className="bg-[var(--color-espresso)] text-[var(--color-cream)]">
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
            <p className="font-body text-sm text-[var(--color-cream)]/60 leading-relaxed">
              Celebrating the women who grow Uganda&apos;s coffee — one step at a time.
            </p>
            <a
              href="https://wa.me/256750263333"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 bg-[var(--color-forest)] text-[var(--color-cream)] px-4 py-2 rounded-full font-body text-sm font-medium hover:bg-[var(--color-forest-light)] transition-colors"
            >
              <MessageCircle size={16} />
              WhatsApp Us
            </a>
          </div>

          {/* Col 2: Quick links */}
          <div>
            <h3 className="font-body text-xs font-semibold uppercase tracking-widest text-[var(--color-latte)] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-[var(--color-cream)]/70 hover:text-[var(--color-cream)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/sponsorships"
                  className="font-body text-sm text-[var(--color-cream)]/70 hover:text-[var(--color-cream)] transition-colors"
                >
                  Sponsorships
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="font-body text-sm text-[var(--color-cream)]/70 hover:text-[var(--color-cream)] transition-colors"
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  href="/results"
                  className="font-body text-sm text-[var(--color-cream)]/70 hover:text-[var(--color-cream)] transition-colors"
                >
                  Results
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Race info */}
          <div>
            <h3 className="font-body text-xs font-semibold uppercase tracking-widest text-[var(--color-latte)] mb-4">
              Race Info
            </h3>
            <p className="font-body text-sm text-[var(--color-cream)]/70 mb-3">
              3 October 2026
            </p>
            <p className="font-body text-sm text-[var(--color-cream)]/70 mb-3">
              Africa Coffee Park<br />Ntungamo, Uganda
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {['5K', '10K', '21K', '42K'].map((d) => (
                <span
                  key={d}
                  className="font-body text-xs font-semibold px-2.5 py-1 rounded-full bg-[var(--color-forest)]/30 text-[var(--color-seedling)] border border-[var(--color-forest)]/40"
                >
                  {d}
                </span>
              ))}
            </div>
            <Link
              href={PINNKET.register10k}
              className="mt-5 inline-flex items-center bg-[var(--color-forest)] text-[var(--color-cream)] px-4 py-2 rounded-full font-body text-sm font-semibold hover:bg-[var(--color-forest-light)] transition-colors"
            >
              Register Now →
            </Link>
          </div>

          {/* Col 4: Connect */}
          <div>
            <h3 className="font-body text-xs font-semibold uppercase tracking-widest text-[var(--color-latte)] mb-4">
              Connect
            </h3>
            <div className="flex gap-3 mb-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-[var(--color-espresso-light)] flex items-center justify-center text-[var(--color-cream)]/70 hover:text-[var(--color-cream)] hover:bg-[var(--color-forest)] transition-all"
              >
                <FacebookIcon size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-[var(--color-espresso-light)] flex items-center justify-center text-[var(--color-cream)]/70 hover:text-[var(--color-cream)] hover:bg-[var(--color-forest)] transition-all"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X / Twitter"
                className="w-10 h-10 rounded-full bg-[var(--color-espresso-light)] flex items-center justify-center text-[var(--color-cream)]/70 hover:text-[var(--color-cream)] hover:bg-[var(--color-forest)] transition-all"
              >
                <TwitterXIcon size={18} />
              </a>
            </div>
            <Link
              href="/contact"
              className="font-body text-sm text-[var(--color-cream)]/70 hover:text-[var(--color-cream)] transition-colors block mb-2"
            >
              Contact Us
            </Link>
            <Link
              href="/accommodation"
              className="font-body text-sm text-[var(--color-cream)]/70 hover:text-[var(--color-cream)] transition-colors block"
            >
              Accommodation
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom border + copyright */}
      <div className="border-t-2 border-[var(--color-latte)]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-body text-xs text-[var(--color-cream)]/40">
            © 2026 The Coffee Marathon Uganda. All rights reserved.
          </p>
          <p className="font-body text-xs text-[var(--color-cream)]/30">
            Built with love in Uganda 🇺🇬
          </p>
        </div>
      </div>
    </footer>
  )
}
