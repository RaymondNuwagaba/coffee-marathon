'use client'

import { useState, useEffect } from 'react'

interface CountdownClockProps {
  targetDate: string
  ctaHref?: string
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

export default function CountdownClock({ targetDate, ctaHref }: CountdownClockProps) {
  const targetTimestamp = new Date(targetDate).getTime()
  const [now, setNow] = useState<number>(() => Date.now())

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [targetDate])

  const timeLeft = calcTimeLeft(targetTimestamp, now)

  const units: { label: string; value: number }[] = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ]

  return (
    <div className="rounded-2xl bg-[var(--color-accent)] p-4 md:p-5 flex flex-wrap items-center justify-between gap-4">
      <div className="basis-full">
        <p className="font-label text-xs uppercase tracking-[0.1em] text-[var(--color-logo-deep-brown)] font-bold">
          Countdown to Race Day
        </p>
      </div>
      <div className="flex items-center gap-3 flex-wrap">
        {units.map(({ label, value }, i) => (
          <div key={label} className="flex items-center gap-3">
            <div className="bg-black/10 rounded-xl px-4 py-3 min-w-[72px] text-center">
              <div className="font-display text-4xl text-[var(--color-dark)] font-bold tabular-nums">
                {pad(value)}
              </div>
              <div className="font-label text-xs text-[var(--color-logo-warm-brown)] uppercase tracking-[0.08em] mt-1">
                {label}
              </div>
            </div>
            {i < units.length - 1 && (
              <span className="font-display text-2xl text-[var(--color-dark)]/80 font-bold">
                :
              </span>
            )}
          </div>
        ))}
      </div>
      {ctaHref && (
        <a
          href={ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-[var(--color-primary)] text-white px-5 py-3 rounded-full font-label font-bold uppercase tracking-[0.08em] text-sm hover:bg-[#B52222] transition-colors shadow-sm"
        >
          Register Now
        </a>
      )}
    </div>
  )
}
