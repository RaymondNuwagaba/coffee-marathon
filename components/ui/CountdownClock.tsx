'use client'

import { useState, useEffect } from 'react'

interface CountdownClockProps {
  targetDate: string
  ctaHref?: string
  tone?: 'light' | 'dark'
}

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function calcTimeLeft(targetTime: number, nowTime: number): TimeLeft {
  const diff = targetTime - nowTime
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / 1000 / 60) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

function pad(n: number) {
  return String(n).padStart(2, '0')
}

export default function CountdownClock({
  targetDate,
  ctaHref,
  tone = 'light',
}: CountdownClockProps) {
  const targetTimestamp = new Date(targetDate).getTime()
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const tick = () => setTimeLeft(calcTimeLeft(targetTimestamp, Date.now()))
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [targetTimestamp])

  const units: { label: string; value: number }[] = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Mins', value: timeLeft.minutes },
    { label: 'Secs', value: timeLeft.seconds },
  ]

  const isDark = tone === 'dark'

  return (
    <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
      <div>
        <p
          className={`mb-3 font-label text-[10px] font-bold uppercase tracking-[0.16em] sm:text-[11px] ${
            isDark ? 'text-white/50' : 'text-[var(--green-mid)]'
          }`}
        >
          Race begins in
        </p>
        <div className="flex items-end gap-3.5 sm:gap-5" suppressHydrationWarning>
          {units.map(({ label, value }) => (
            <div key={label} className="min-w-[3.1rem] sm:min-w-[3.75rem]">
              <div
                className={`font-display text-[2rem] tabular-nums leading-none tracking-tight sm:text-4xl ${
                  isDark ? 'text-white' : 'text-[var(--ink)]'
                } ${mounted ? 'opacity-100' : 'opacity-35'}`}
              >
                {pad(value)}
              </div>
              <div
                className={`mt-1.5 font-label text-[10px] uppercase tracking-[0.14em] ${
                  isDark ? 'text-white/45' : 'text-[rgba(26,15,8,0.5)]'
                }`}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {ctaHref && (
        <a
          href={ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className={isDark ? 'btn-primary' : 'btn-dark'}
        >
          Register Now
        </a>
      )}
    </div>
  )
}
