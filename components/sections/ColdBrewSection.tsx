import Image from 'next/image'
import { Leaf, Zap, Coffee } from 'lucide-react'

const variants = [
  {
    icon: Leaf,
    name: 'Malt Coffee',
    desc: 'Caffeine-free, made from roasted malted barley with creamy malted milk powder.',
    badge: 'Caffeine-Free',
  },
  {
    icon: Zap,
    name: 'Energy Drink',
    desc: 'Cold brew with B-vitamins, guarana, and taurine, built for race day.',
    badge: 'High Energy',
  },
  {
    icon: Coffee,
    name: 'Iced Coffee',
    desc: "Uganda's finest beans, brewed hot and immediately chilled.",
    badge: 'Classic',
  },
]

export default function ColdBrewSection() {
  return (
    <section className="py-20 md:py-24" style={{ backgroundColor: 'var(--green-mist)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left, text */}
          <div>
            <p
              className="font-label text-xs font-bold uppercase tracking-[0.12em] mb-3"
              style={{ color: 'var(--green-mid)' }}
            >
              IAC Cold Brew
            </p>
            <h2
              className="font-display text-4xl md:text-5xl font-bold mb-4"
              style={{ color: 'var(--brown-heading)' }}
            >
              Fuel your race day.
            </h2>
            <p
              className="font-body text-base leading-relaxed mb-8"
              style={{ color: 'var(--brown-dark)' }}
            >
              IAC Cold Brew is the official coffee drink of the Coffee Marathon, smooth, energising, and crafted from Uganda&apos;s finest beans.
            </p>

            <div className="space-y-4">
              {variants.map(({ icon: Icon, name, desc, badge }) => (
                <div
                  key={name}
                  className="bg-white rounded-xl p-4 flex items-start gap-4 border"
                  style={{ borderColor: 'rgba(26,107,58,0.15)' }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: 'var(--green-pale)' }}
                  >
                    <Icon size={18} style={{ color: 'var(--green-primary)' }} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-0.5">
                      <p className="font-body font-semibold text-sm" style={{ color: 'var(--brown-heading)' }}>{name}</p>
                      <span
                        className="font-label text-xs px-2 py-0.5 rounded-full font-bold"
                        style={{ backgroundColor: 'var(--green-pale)', color: 'var(--green-deep)' }}
                      >
                        {badge}
                      </span>
                    </div>
                    <p className="font-body text-sm" style={{ color: 'var(--brown-dark)' }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right, product image */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-sm">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden relative shadow-xl">
                <Image
                  src="/images/cold-brew-product.jpg"
                  alt="IAC Cold Brew - Inspire Africa Coffee"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div
                className="absolute -bottom-4 left-4 right-4 rounded-xl shadow-lg p-3 text-center"
                style={{ backgroundColor: 'white' }}
              >
                <p
                  className="font-body text-xs font-semibold uppercase tracking-widest"
                  style={{ color: 'var(--brown-dark)' }}
                >
                  Official Drink of The Coffee Marathon
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
