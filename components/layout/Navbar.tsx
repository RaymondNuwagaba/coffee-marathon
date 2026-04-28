'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { navLinks } from '@/lib/content'
import { PINNKET } from '@/lib/pinnket'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const isHome = pathname === '/'
  const solidBg = scrolled || !isHome

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          solidBg
            ? 'bg-[var(--color-espresso)] shadow-lg'
            : 'bg-black/40 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <Image
                src="/images/logo.png"
                alt="The Coffee Marathon Uganda"
                width={44}
                height={44}
                className="object-contain"
                priority
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const active = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`font-body text-sm font-medium transition-colors relative ${
                      active
                        ? 'text-[var(--color-forest-light)]'
                        : 'text-[var(--color-cream)]/80 hover:text-[var(--color-cream)]'
                    }`}
                  >
                    {link.label}
                    {active && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--color-forest-light)] rounded-full" />
                    )}
                  </Link>
                )
              })}
            </nav>

            {/* CTA + hamburger */}
            <div className="flex items-center gap-3">
              <Link
                href={PINNKET.register10k}
                className="hidden sm:inline-flex items-center bg-[var(--color-forest)] text-[var(--color-cream)] px-5 py-2 rounded-full font-body font-semibold text-sm hover:bg-[var(--color-forest-light)] transition-colors"
              >
                Register Now
              </Link>
              <button
                onClick={() => setOpen(true)}
                className="lg:hidden p-2 text-[var(--color-cream)] hover:text-[var(--color-latte)] transition-colors"
                aria-label="Open menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      {open && (
        <div className="fixed inset-0 z-[60] bg-[var(--color-espresso)] flex flex-col">
          <div className="flex items-center justify-between px-4 h-16">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/logo.png"
                alt="The Coffee Marathon Uganda"
                width={44}
                height={44}
                className="object-contain"
              />
            </Link>
            <button
              onClick={() => setOpen(false)}
              className="p-2 text-[var(--color-cream)] hover:text-[var(--color-latte)] transition-colors"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="flex-1 flex flex-col justify-center px-8 gap-6">
            {navLinks.map((link) => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-display text-3xl font-semibold transition-colors ${
                    active
                      ? 'text-[var(--color-forest-light)]'
                      : 'text-[var(--color-cream)] hover:text-[var(--color-latte)]'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
            <Link
              href={PINNKET.register10k}
              className="mt-4 inline-flex items-center justify-center bg-[var(--color-forest)] text-[var(--color-cream)] px-8 py-3 rounded-full font-body font-semibold text-lg hover:bg-[var(--color-forest-light)] transition-colors"
            >
              Register Now
            </Link>
          </nav>

          <p className="px-8 pb-8 font-body text-sm text-[var(--color-cream)]/40">
            3 October 2026 · Africa Coffee Park, Ntungamo
          </p>
        </div>
      )}
    </>
  )
}
