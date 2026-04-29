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

  useEffect(() => { setOpen(false) }, [pathname])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const solidBg = scrolled || !pathname.startsWith('/') || pathname !== '/'

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50">
        {/* Announcement bar */}
        <div className="bg-[#1A0A00] py-2 text-center px-4">
          <p className="font-body text-xs font-semibold text-[#F5C842] tracking-wide">
            🎤 Tyrese Gibson — Live at Coffee Marathon 2026 &nbsp;·&nbsp; 3 October &nbsp;·&nbsp; Africa Coffee Park
          </p>
        </div>

      <header
        className={`transition-all duration-300 ${
          solidBg
            ? 'bg-white shadow-sm border-b border-[var(--color-border)]'
            : 'bg-white/90 backdrop-blur-md'
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
                        ? 'text-[var(--color-amber)]'
                        : 'text-[var(--color-text-dark)] hover:text-[var(--color-amber)]'
                    }`}
                  >
                    {link.label}
                    {active && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--color-amber)] rounded-full" />
                    )}
                  </Link>
                )
              })}
            </nav>

            {/* CTA + hamburger */}
            <div className="flex items-center gap-3">
              <Link
                href={PINNKET.register10k}
                className="hidden sm:inline-flex items-center bg-[var(--color-amber)] text-white px-5 py-2 rounded-full font-body font-semibold text-sm hover:bg-[var(--color-amber-dark)] transition-colors shadow-sm"
              >
                Register Now
              </Link>
              <button
                onClick={() => setOpen(true)}
                className="lg:hidden p-2 text-[var(--color-text-dark)] hover:text-[var(--color-amber)] transition-colors"
                aria-label="Open menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>
      </div>

      {/* Mobile overlay */}
      {open && (
        <div className="fixed inset-0 z-[60] bg-white flex flex-col">
          <div className="flex items-center justify-between px-4 h-16 border-b border-[var(--color-border)]">
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
              className="p-2 text-[var(--color-text-dark)] hover:text-[var(--color-amber)] transition-colors"
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
                      ? 'text-[var(--color-amber)]'
                      : 'text-[var(--color-text-dark)] hover:text-[var(--color-amber)]'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
            <Link
              href={PINNKET.register10k}
              className="mt-4 inline-flex items-center justify-center bg-[var(--color-amber)] text-white px-8 py-3 rounded-full font-body font-semibold text-lg hover:bg-[var(--color-amber-dark)] transition-colors"
            >
              Register Now
            </Link>
          </nav>

          <p className="px-8 pb-8 font-body text-sm text-[var(--color-text-light)]">
            3 October 2026 · Africa Coffee Park, Ntungamo
          </p>
        </div>
      )}
    </>
  )
}
