'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { navLinks } from '@/lib/content'
import { PINNKET } from '@/lib/pinnket'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const solid = !isHome || scrolled || open

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          solid
            ? 'border-b border-white/10 bg-[var(--green-deep)]/92 shadow-[0_12px_40px_rgba(7,61,49,0.22)] backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="site-container">
          <div className="flex h-[68px] items-center justify-between lg:h-[76px]">
            <Link
              href="/"
              className="flex items-center rounded-full bg-white px-2 py-1 shadow-sm transition-transform duration-300 hover:scale-[1.02]"
              onClick={() => setOpen(false)}
            >
              <Image
                src="/images/logo.png"
                alt="The Coffee Marathon Uganda"
                width={56}
                height={56}
                className="h-9 w-9 object-contain lg:h-11 lg:w-11"
                priority
              />
            </Link>

            <nav className="hidden items-center gap-6 lg:flex xl:gap-7">
              {navLinks.map((link) => {
                const active = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative font-label text-[12px] font-bold uppercase tracking-[0.11em] xl:text-[13px] ${
                      active ? 'text-[var(--yellow)]' : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-px bg-[var(--yellow)] transition-all duration-300 ${
                        active ? 'w-full' : 'w-0'
                      }`}
                    />
                  </Link>
                )
              })}
            </nav>

            <div className="flex items-center gap-2.5">
              <a
                href={PINNKET.register10k}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary hidden !px-4 !py-2 !text-[11px] sm:inline-flex"
              >
                Register
              </a>
              <button
                onClick={() => setOpen(true)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/15 text-white lg:hidden"
                aria-label="Open menu"
              >
                <Menu size={18} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[60] flex animate-[fade-up_0.35s_ease] flex-col bg-[var(--green-deep)] text-white">
          <div className="flex h-[68px] items-center justify-between border-b border-white/10 px-5">
            <Link href="/" className="rounded-full bg-white px-2 py-1" onClick={() => setOpen(false)}>
              <Image
                src="/images/logo.png"
                alt="The Coffee Marathon Uganda"
                width={48}
                height={48}
                className="h-9 w-9 object-contain"
              />
            </Link>
            <button
              onClick={() => setOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="flex flex-1 flex-col justify-center gap-4 px-8">
            {navLinks.map((link) => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`font-display text-[2.5rem] leading-none ${
                    active ? 'text-[var(--yellow)]' : 'text-white'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
            <a
              href={PINNKET.register10k}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="btn-primary mt-6 w-fit"
            >
              Register Now
            </a>
          </nav>

          <p className="px-8 pb-8 font-body text-sm text-white/50">
            13 February 2027 · Africa Coffee Park, Ntungamo
          </p>
        </div>
      )}
    </>
  )
}
