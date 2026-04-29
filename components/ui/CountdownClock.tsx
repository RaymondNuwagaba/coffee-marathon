'use client'

import { useState, useEffect } from 'react'

interface CountdownClockProps {
  targetDate: string
}

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function calcTimeLeft(target: Date): TimeLeft {
  const diff = target.getTime() - Date.now()
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

export default function CountdownClock({ targetDate }: CountdownClockProps) {
  const target = new Date(targetDate)
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    setTimeLeft(calcTimeLeft(target))
    const id = setInterval(() => setTimeLeft(calcTimeLeft(target)), 1000)
    return () => clearInterval(id)
  }, [targetDate])

  const units: { label: string; value: number }[] = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ]

  return (
    <div className="flex items-center gap-3 flex-wrap">
      {units.map(({ label, value }, i) => (
        <div key={label} className="flex items-center gap-3">
          <div className="bg-[var(--color-amber)]/10 border border-[var(--color-amber)]/30 rounded-xl px-4 py-3 min-w-[72px] text-center">
            <div className="font-display text-4xl text-[var(--color-text-dark)] font-bold tabular-nums">
              {pad(value)}
            </div>
            <div className="font-body text-xs text-[var(--color-text-light)] uppercase tracking-widest mt-1">
              {label}
            </div>
          </div>
          {i < units.length - 1 && (
            <span className="font-display text-2xl text-[var(--color-amber)] font-bold">
              :
            </span>
          )}
        </div>
      ))}
    </div>
  )
}
