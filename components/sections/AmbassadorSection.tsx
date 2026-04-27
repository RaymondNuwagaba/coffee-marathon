import Image from 'next/image'
import { PinnketCTA } from '@/components/ui/PinnketCTA'
import { TornPaperDivider } from '@/components/ui/TornPaperDivider'

interface AmbassadorSectionProps {
  pinnketRegisterUrl: string
}

export function AmbassadorSection({ pinnketRegisterUrl }: AmbassadorSectionProps) {
  return (
    <>
      {/* Torn paper edge INTO this section (light → dark) */}
      <div className="bg-[var(--color-cream-light)]">
        <TornPaperDivider fillColor="#2C0F06" />
      </div>

      <section className="bg-[var(--color-espresso)] py-16 md:py-24 relative overflow-hidden">
        {/* Decorative coffee-bean blob */}
        <div
          className="absolute top-0 right-0 w-96 h-96 opacity-5 rounded-full pointer-events-none"
          style={{ background: '#C07040', transform: 'translate(30%, -30%)' }}
          aria-hidden="true"
        />

        <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">

          {/* Left — text */}
          <div className="flex-1 order-2 md:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-[var(--color-forest)] rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-forest-light)]" />
              <span className="font-body text-xs font-medium text-[var(--color-forest-light)] tracking-widest uppercase">
                Celebrity ambassador
              </span>
            </div>

            <p className="font-body text-[var(--color-cream)]/60 text-sm tracking-widest uppercase mb-2">
              Featuring
            </p>
            <p className="font-display italic text-[var(--color-forest)] text-5xl md:text-6xl font-semibold leading-none mb-6">
              Tyrese Gibson
            </p>

            <p className="font-body text-[var(--color-cream)]/70 text-base leading-relaxed max-w-md mb-3">
              Hollywood actor, recording artist, and global advocate — joining us at
              Africa Coffee Park to champion the IK Community of Karamoja on
              3 October 2026.
            </p>
            <p className="font-body text-[var(--color-cream)]/50 text-sm leading-relaxed max-w-md mb-8">
              Theme:{' '}
              <span className="text-[var(--color-seedling)] italic">
                &ldquo;Empowering the IK Community of Karamoja through Coffee Farming to End Poverty&rdquo;
              </span>
            </p>

            <PinnketCTA
              href={pinnketRegisterUrl}
              label="Register to attend"
              variant="primary"
            />
          </div>

          {/* Right — photo */}
          <div className="order-1 md:order-2 flex-shrink-0 w-64 md:w-80">
            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden border border-[var(--color-espresso-light)] bg-[var(--color-espresso-light)] flex items-center justify-center">
              <Image
                src="/images/tyrese-gibson.jpg"
                alt="Tyrese Gibson — celebrity ambassador, The Coffee Marathon Uganda 2026"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 256px, 320px"
              />
            </div>
            <div className="mt-3 text-center">
              <p className="font-display italic text-[var(--color-forest)] text-2xl">Tyrese Gibson</p>
              <p className="font-body text-[var(--color-cream)]/40 text-xs tracking-widest uppercase mt-1">
                Featured celebrity · 2026
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Torn paper edge OUT of this section (dark → light) */}
      <TornPaperDivider fillColor="#FAF3E8" />
    </>
  )
}
