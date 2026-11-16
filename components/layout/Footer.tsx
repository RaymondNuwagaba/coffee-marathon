import Link from 'next/link'
import Image from 'next/image'
import { MessageCircle } from 'lucide-react'
import { FacebookIcon, InstagramIcon, TwitterXIcon } from '@/components/ui/SocialIcons'
import { navLinks } from '@/lib/content'
import { PINNKET } from '@/lib/pinnket'

export default function Footer() {
  return (
    <footer className="bg-[var(--green-deep)] text-white">
      <div className="site-container section-pad !pb-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="mb-5 inline-flex rounded-full bg-white px-2.5 py-1.5">
              <Image
                src="/images/logo.png"
                alt="The Coffee Marathon Uganda"
                width={72}
                height={72}
                className="h-12 w-12 object-contain"
              />
            </Link>
            <p className="max-w-xs font-body text-sm leading-relaxed text-white/65">
              Empowering the IK Community of Karamoja through Coffee Farming to End Poverty.
            </p>
            <a
              href="https://wa.me/256750263333"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--green-mid)] px-4 py-2.5 font-label text-xs font-bold uppercase tracking-[0.1em] text-white transition-colors hover:bg-[var(--green-light)]"
            >
              <MessageCircle size={15} />
              WhatsApp Us
            </a>
          </div>

          <div>
            <h3 className="font-label text-xs font-bold uppercase tracking-[0.16em] text-[var(--yellow)]">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/sponsorships" className="font-body text-sm text-white/70 transition-colors hover:text-white">
                  Sponsorships
                </Link>
              </li>
              <li>
                <Link href="/news" className="font-body text-sm text-white/70 transition-colors hover:text-white">
                  News
                </Link>
              </li>
              <li>
                <Link href="/results" className="font-body text-sm text-white/70 transition-colors hover:text-white">
                  Results
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-label text-xs font-bold uppercase tracking-[0.16em] text-[var(--yellow)]">
              Race Info
            </h3>
            <p className="mt-5 font-body text-sm text-white/70">13 February 2027</p>
            <p className="mt-1 font-body text-sm leading-relaxed text-white/70">
              Africa Coffee Park<br />Ntungamo, Uganda
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {['5K', '10K', '21K', '42K'].map((d) => (
                <span
                  key={d}
                  className="rounded-full border border-white/15 px-3 py-1 font-label text-[11px] font-bold uppercase tracking-[0.1em] text-white/75"
                >
                  {d}
                </span>
              ))}
            </div>
            <a
              href={PINNKET.register10k}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-6 !py-2.5 !px-4 !text-xs"
            >
              Register Now
            </a>
          </div>

          <div>
            <h3 className="font-label text-xs font-bold uppercase tracking-[0.16em] text-[var(--yellow)]">
              Connect
            </h3>
            <div className="mt-5 flex gap-3">
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
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/75 transition-colors hover:border-white/40 hover:text-white"
                >
                  {icon}
                </a>
              ))}
            </div>
            <Link href="/contact" className="mt-6 block font-body text-sm text-white/70 transition-colors hover:text-white">
              Contact Us
            </Link>
            <Link href="/accommodation" className="mt-2 block font-body text-sm text-white/70 transition-colors hover:text-white">
              Accommodation
            </Link>
            <p className="mt-6 font-body text-xs leading-relaxed text-white/40">
              info@coffeemarathonug.com<br />
              +256 750 263 333
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-black/10">
        <div className="site-container py-6 text-center">
          <p className="font-label text-[11px] uppercase tracking-[0.16em] text-white/45">
            Theme 2027
          </p>
          <p className="mx-auto mt-2 max-w-2xl font-heading text-base font-semibold italic leading-snug text-[var(--green-pale)] sm:text-lg">
            &ldquo;Empowering the IK Community of Karamoja through Coffee Farming to End Poverty&rdquo;
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="site-container flex flex-col items-center justify-between gap-2 py-4 sm:flex-row">
          <p className="font-body text-xs text-white/40">
            © 2026 The Coffee Marathon Uganda · Organised by Inspire Africa Group
          </p>
          <p className="font-body text-xs text-white/35">
            Africa Coffee Park, Ntungamo, Uganda
          </p>
        </div>
      </div>
    </footer>
  )
}
