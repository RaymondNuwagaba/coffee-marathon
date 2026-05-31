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
  const pathname = usePathname()

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50">
        {/* Announcement bar — brown-heading bg */}
        <div className="py-2 text-center px-4" style={{ backgroundColor: 'var(--brown-heading)' }}>
          <p className="font-label text-xs font-bold text-white uppercase tracking-[0.14em]">
            <span style={{ color: 'var(--brown-mid)' }}>Tyrese Gibson</span>
            {' '}Live At Coffee Marathon 2026 · 3 October · Africa Coffee Park
          </p>
        </div>

        {/* Navbar — green-primary bg */}
        <header style={{ backgroundColor: 'var(--green-primary)' }} className="shadow-sm border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 lg:h-20">

              {/* Logo */}
              <Link href="/" className="flex items-center gap-2 group" onClick={() => setOpen(false)}>
                <Image
                  src="/images/logo.png"
                  alt="The Coffee Marathon Uganda"
                  width={44}
                  height={44}
                  className="object-contain"
                  priority
                />
                <span className="hidden md:inline font-label text-sm font-bold uppercase tracking-[0.08em]">
                  <span className="text-white">The </span>
                  <span style={{ color: 'var(--green-pale)' }}>Coffee</span>
                  <span className="text-white"> Marathon</span>
                </span>
              </Link>

              {/* Desktop nav */}
              <nav className="hidden lg:flex items-center gap-8">
                {navLinks.map((link) => {
                  const active = pathname === link.href
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="font-label text-sm font-bold uppercase tracking-[0.08em] transition-colors relative"
                      style={{
                        color: active ? 'white' : 'rgba(255,255,255,0.75)',
                      }}
                    >
                      {link.label}
                      {active && (
                        <span
                          className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                          style={{ backgroundColor: 'var(--green-pale)' }}
                        />
                      )}
                    </Link>
                  )
                })}
              </nav>

              {/* CTA + hamburger */}
              <div className="flex items-center gap-3">
                <Link
                  href={PINNKET.register10k}
                  onClick={() => setOpen(false)}
                  className="hidden sm:inline-flex items-center px-5 py-2 rounded-full font-label font-bold uppercase tracking-[0.08em] text-sm transition-all border"
                  style={{
                    color: 'white',
                    borderColor: 'var(--green-mid)',
                    backgroundColor: 'transparent',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'white'
                    e.currentTarget.style.color = 'var(--green-primary)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent'
                    e.currentTarget.style.color = 'white'
                  }}
                >
                  Register Now
                </Link>
                <button
                  onClick={() => setOpen(true)}
                  className="lg:hidden p-2 text-white transition-colors"
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
        <div className="fixed inset-0 z-[60] flex flex-col" style={{ backgroundColor: 'var(--green-primary)' }}>
          <div className="flex items-center justify-between px-4 h-16 border-b border-white/10">
            <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
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
              className="p-2 text-white transition-colors"
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
                  onClick={() => setOpen(false)}
                  className="font-display text-3xl font-semibold transition-colors"
                  style={{ color: active ? 'white' : 'rgba(255,255,255,0.75)' }}
                >
                  {link.label}
                </Link>
              )
            })}
            <Link
              href={PINNKET.register10k}
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center px-8 py-3 rounded-full font-label font-bold uppercase tracking-[0.08em] text-lg border border-white/50 text-white hover:bg-white/10 transition-colors"
            >
              Register Now
            </Link>
          </nav>

          <p className="px-8 pb-8 font-body text-sm text-white/55">
            3 October 2026 · Africa Coffee Park, Ntungamo
          </p>
        </div>
      )}
    </>
  )
}
