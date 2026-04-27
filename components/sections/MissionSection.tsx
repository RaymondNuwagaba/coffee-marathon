import Link from 'next/link'
import { Leaf, ArrowRight } from 'lucide-react'

interface MissionSectionProps {
  missionText?: string | null
}

export default function MissionSection({ missionText }: MissionSectionProps) {
  return (
    <section className="bg-[var(--color-espresso)] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf size={16} className="text-[var(--color-latte)]" />
              <span className="font-body text-xs uppercase tracking-widest text-[var(--color-latte)] font-semibold">
                Our Mission
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-[var(--color-cream)] mb-6 leading-tight">
              Running for the women behind the cup
            </h2>
            {missionText ? (
              <p className="font-body text-lg text-[var(--color-cream)]/70 leading-relaxed mb-8">{missionText}</p>
            ) : (
              <>
                <p className="font-body text-lg text-[var(--color-cream)]/70 leading-relaxed mb-6">
                  The Coffee Marathon brings attention to the invisible backbone of Uganda&apos;s
                  coffee industry — the brave women who toil in the fields to produce some of
                  the world&apos;s finest coffee, yet often go unrecognised.
                </p>
                <p className="font-body text-base text-[var(--color-cream)]/60 leading-relaxed mb-8">
                  Every stride you take through Africa Coffee Park tells their story. Every
                  registration fee contributes to programmes that empower and uplift these
                  extraordinary women and their families.
                </p>
              </>
            )}
            <p className="font-body text-sm italic text-[var(--color-seedling)] mb-6">
              &ldquo;Empowering the IK Community of Karamoja through Coffee Farming to End Poverty&rdquo;
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-body text-sm font-semibold text-[var(--color-latte)] hover:text-[var(--color-latte-light)] transition-colors group"
            >
              Read our story{' '}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Image placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-[var(--color-espresso-light)] overflow-hidden flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[var(--color-arabica)]/30 flex items-center justify-center mx-auto mb-3">
                  <Leaf size={28} className="text-[var(--color-latte)]" />
                </div>
                <span className="font-body text-xs text-[var(--color-cream)]/30">
                  Photography — women coffee farmers
                </span>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-[var(--color-forest)]/20 blur-xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
