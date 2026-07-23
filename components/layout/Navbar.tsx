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
        {/* Announcement bar, unchanged */}
        <div className="py-2 text-center px-4" style={{ backgroundColor: 'var(--brown-heading)' }}>
          <p className="font-label text-xs font-bold text-white uppercase tracking-[0.14em]">
            <span style={{ color: 'var(--brown-mid)' }}>The Coffee Marathon 2027</span>
            {' '}· 13 February · Africa Coffee Park, Ntungamo
          </p>
        </div>

        {/* Navbar, cream background */}
        <header
          className="border-b"
          style={{
            backgroundColor: '#F5EDE0',
            borderBottomColor: 'rgba(26,107,58,0.15)',
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 lg:h-20">

              {/* Logo, original colors on cream background, no filter */}
              <Link href="/" className="flex items-center group" onClick={() => setOpen(false)}>
                <Image
                  src="/images/logo.png"
                  alt="The Coffee Marathon Uganda"
                  width={80}
                  height={80}
                  className="object-contain group-hover:scale-105 transition-transform duration-200"
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
                      onClick={() => setOpen(false)}
                      className="font-label text-sm font-bold uppercase tracking-[0.08em] transition-colors relative"
                      style={{ color: active ? '#1A6B3A' : '#1A6B3A' }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = '#2D8C52' }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = '#1A6B3A' }}
                    >
                      {link.label}
                      {active && (
                        <span
                          className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                          style={{ backgroundColor: '#2D8C52' }}
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
                  className="hidden sm:inline-flex items-center px-5 py-2 rounded-full font-label font-bold uppercase tracking-[0.08em] text-sm transition-all"
                  style={{
                    backgroundColor: '#1A6B3A',
                    color: 'white',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#2D8C52' }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#1A6B3A' }}
                >
                  Register Now
                </Link>
                <button
                  onClick={() => setOpen(true)}
                  className="lg:hidden p-2 transition-colors"
                  style={{ color: '#1A6B3A' }}
                  aria-label="Open menu"
                >
                  <Menu size={24} />
                </button>
              </div>
            </div>
          </div>
        </header>
      </div>

      {/* Mobile overlay, keep dark for readability */}
      {open && (
        <div className="fixed inset-0 z-[60] flex flex-col" style={{ backgroundColor: '#F5EDE0' }}>
          <div className="flex items-center justify-between px-4 h-16 border-b" style={{ borderBottomColor: 'rgba(26,107,58,0.15)' }}>
            <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
              <Image
                src="/images/logo.png"
                alt="The Coffee Marathon Uganda"
                width={60}
                height={60}
                className="object-contain"
              />
            </Link>
            <button
              onClick={() => setOpen(false)}
              className="p-2 transition-colors"
              style={{ color: '#1A6B3A' }}
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
                  style={{ color: active ? '#1A6B3A' : '#6B2D1B' }}
                >
                  {link.label}
                </Link>
              )
            })}
            <Link
              href={PINNKET.register10k}
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center px-8 py-3 rounded-full font-label font-bold uppercase tracking-[0.08em] text-lg text-white transition-colors"
              style={{ backgroundColor: '#1A6B3A' }}
            >
              Register Now
            </Link>
          </nav>

          <p className="px-8 pb-8 font-body text-sm" style={{ color: '#6B2D1B' }}>
            13 February 2027 · Africa Coffee Park, Ntungamo
          </p>
        </div>
      )}
    </>
  )
}
