'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import CountdownClock from '@/components/ui/CountdownClock'

interface AnimatedHeroProps {
  registerUrl: string
}

const ease = [0.22, 1, 0.36, 1] as const
const distances = ['42KM', '21KM', '10KM', '5KM']

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06, delayChildren: 0.15 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease },
  },
}

const letter = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease },
  },
}

export default function AnimatedHero({ registerUrl }: AnimatedHeroProps) {
  const reduceMotion = useReducedMotion()
  const title = 'MARATHON'

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-black text-white">
      {/* Single full-bleed image — no panel seam */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          initial={reduceMotion ? false : { scale: 1.1, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease }}
        >
          <Image
            src="/images/races-runner-portrait.jpg"
            alt="Coffee Marathon runner"
            fill
            priority
            className="object-cover object-[center_16%] lg:object-[20%_center] hero-kenburns"
            sizes="100vw"
          />
        </motion.div>

        {/* Mobile fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/15 to-black/95 lg:hidden" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_12%,rgba(244,196,58,0.22),transparent_45%)] lg:hidden" />

        {/* Desktop soft blend into copy side — no hard vertical line */}
        <div
          className="absolute inset-0 hidden lg:block"
          style={{
            background:
              'linear-gradient(90deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.2) 32%, rgba(0,0,0,0.55) 52%, rgba(0,0,0,0.88) 68%, rgba(0,0,0,0.97) 82%, #000 100%)',
          }}
        />
        <div className="absolute inset-0 hidden bg-[radial-gradient(ellipse_at_78%_40%,rgba(244,196,58,0.1),transparent_42%)] lg:block" />
        <div className="hero-glow pointer-events-none absolute left-1/2 top-[22%] h-48 w-48 -translate-x-1/2 rounded-full bg-[var(--yellow)]/25 blur-3xl lg:left-[72%] lg:top-[30%] lg:h-80 lg:w-80 lg:translate-x-0 lg:bg-[var(--yellow)]/12" />
      </div>

      <div className="relative z-10 flex min-h-[100svh] flex-col justify-end px-5 pb-5 pt-[4.75rem] safe-bottom sm:px-8 sm:pb-7 lg:justify-center lg:px-10 lg:py-28 xl:px-16">
        <div className="site-container flex w-full justify-end !max-w-none lg:!w-[min(1180px,calc(100vw-5rem))] lg:!mx-auto">
          <motion.div
            className="relative z-10 w-full max-w-xl lg:ml-auto lg:w-[min(100%,34rem)] xl:w-[36rem]"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <div className="pointer-events-none absolute inset-0 -z-10 hidden opacity-[0.05] hero-grain lg:block" />

            <motion.p
              variants={fadeUp}
              className="font-label text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--yellow)] sm:text-[11px] lg:text-xs lg:tracking-[0.28em]"
            >
              The Coffee · Experience ’27
            </motion.p>

            <h1 className="mt-2 overflow-visible sm:mt-3">
              <span className="sr-only">Coffee Marathon ’27</span>
              <span
                className="hero-title-glow flex font-display text-[clamp(3.1rem,14vw,6.2rem)] leading-[0.88] tracking-tight text-white"
                aria-hidden
              >
                {title.split('').map((char, i) => (
                  <motion.span key={`${char}-${i}`} variants={letter} className="inline-block">
                    {char}
                  </motion.span>
                ))}
              </span>
            </h1>

            <motion.div variants={fadeUp} className="mt-3.5 flex flex-wrap gap-1.5 sm:mt-5 sm:gap-2.5">
              {distances.map((d, i) => (
                <motion.span
                  key={d}
                  initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.42 + i * 0.06, duration: 0.35, ease }}
                  className="rounded-full border border-white/25 bg-white/12 px-3 py-1 font-display text-sm leading-none tracking-tight text-white backdrop-blur-md sm:bg-white/10 sm:px-3.5 sm:py-1.5 sm:text-base lg:text-lg"
                >
                  {d}
                </motion.span>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-4 sm:mt-6 lg:mt-8">
              <p className="font-heading text-[1.55rem] font-bold leading-none tracking-tight sm:text-[1.85rem] lg:text-4xl xl:text-[2.75rem]">
                13th <span className="text-[var(--yellow)]">Feb, 2027</span>
              </p>
              <p className="mt-1.5 font-body text-[13px] text-white/72 sm:mt-2 sm:text-sm lg:text-base">
                Africa Coffee Park,{' '}
                <span className="font-semibold text-[var(--yellow)]">Ntungamo</span>
                <span className="hidden sm:inline"> · 6AM start</span>
              </p>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="mt-3 hidden max-w-md font-body text-[15px] leading-relaxed text-white/70 sm:mt-4 sm:block"
            >
              Run through coffee country. Four distances, one cause.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-4 grid grid-cols-2 gap-2 sm:mt-6 sm:flex sm:flex-wrap sm:gap-3 lg:mt-8">
              <a
                href={registerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-cta-pulse inline-flex items-center justify-center rounded-xl bg-[var(--yellow)] px-3 py-3.5 font-label text-[11px] font-bold uppercase tracking-[0.1em] text-[var(--ink)] transition-transform duration-300 hover:scale-[1.03] sm:rounded-md sm:px-7 sm:py-3.5 sm:text-sm"
              >
                Register Now
              </a>
              <Link
                href="/races"
                className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/8 px-3 py-3.5 font-label text-[11px] font-bold uppercase tracking-[0.1em] text-white backdrop-blur-sm transition-colors hover:border-white/60 hover:bg-white/5 sm:rounded-md sm:border-white/25 sm:bg-transparent sm:px-6 sm:text-sm sm:backdrop-blur-none"
              >
                View Races
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-4 rounded-2xl border border-white/10 bg-black/45 px-3.5 py-3.5 backdrop-blur-md sm:mt-6 sm:px-4 sm:py-4 lg:mt-9 lg:border-white/12 lg:bg-black/30"
            >
              <CountdownClock
                targetDate="2027-02-13T06:00:00+03:00"
                tone="dark"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
