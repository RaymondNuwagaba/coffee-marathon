import type { Metadata } from 'next'
import { Package, Shirt, ShoppingBag } from 'lucide-react'
import PageHero from '@/components/layout/PageHero'
import PinnketCTA from '@/components/ui/PinnketCTA'
import { getSiteSettings } from '@/sanity/lib/fetch'
import { PINNKET } from '@/lib/pinnket'

export const metadata: Metadata = {
  title: 'Shop — Official Race Kit',
  description: 'Order your official Coffee Marathon Uganda 2026 race kit. Race jersey, shorts, cap, and bag. Secure purchase via Pinnket.',
}

const sizeGuide = [
  { size: 'S', chest: '86–91', waist: '71–76', hip: '89–94' },
  { size: 'M', chest: '96–101', waist: '81–86', hip: '99–104' },
  { size: 'L', chest: '106–111', waist: '91–96', hip: '109–114' },
  { size: 'XL', chest: '116–121', waist: '101–106', hip: '119–124' },
  { size: 'XXL', chest: '126–131', waist: '111–116', hip: '129–134' },
]

const kitContents = [
  { icon: Shirt, label: 'Race Jersey', desc: 'Technical moisture-wicking fabric' },
  { icon: Shirt, label: 'Shorts', desc: 'Lightweight running shorts' },
  { icon: Package, label: 'Cap', desc: 'UV protection, adjustable strap' },
  { icon: ShoppingBag, label: 'Race Bag', desc: 'Branded drawstring bag' },
]

export default async function ShopPage() {
  const settings = await getSiteSettings()
  const shopUrl = settings?.pinnketShopUrl ?? PINNKET.shop
  const cutoffLabel = settings?.kitOrderCutoff
    ? new Intl.DateTimeFormat('en-UG', { dateStyle: 'long' }).format(new Date(settings.kitOrderCutoff))
    : '[DATE — to be confirmed]'

  return (
    <>
      <PageHero
        title="Official Race Kit 2026"
        subtitle="Gear up for race day with the official Coffee Marathon Uganda kit — designed for Uganda's highland terrain."
        label="Shop 2026"
      />

      <div className="bg-[var(--color-accent)] py-3 text-center">
        <p className="font-label text-sm font-bold uppercase tracking-[0.08em] text-[var(--color-dark)]">
          Orders close {cutoffLabel} — collection on race day at Africa Coffee Park
        </p>
      </div>

      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="aspect-square bg-[var(--color-cream-dark)] rounded-2xl flex items-center justify-center">
              <span className="font-body text-sm text-[var(--color-arabica)]/40 text-center px-8">
                Kit flat-lay photography — to be added by client
              </span>
            </div>

            <div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-[var(--color-logo-forest)] mb-6">
                What&apos;s in the Kit
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {kitContents.map(({ icon: Icon, label, desc }) => (
                  <div key={label} className="flex items-start gap-3 bg-[var(--color-warm-white)] rounded-xl p-4 border border-[var(--color-cream-dark)]">
                    <div className="w-9 h-9 rounded-full bg-[var(--color-seedling-light)] flex items-center justify-center shrink-0">
                      <Icon size={16} className="text-[var(--color-forest)]" />
                    </div>
                    <div>
                      <p className="font-body font-semibold text-sm text-[var(--color-logo-deep-brown)]">{label}</p>
                      <p className="font-body text-xs text-[var(--color-arabica)]">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-[var(--color-dark)] rounded-xl p-6 mb-6">
                <p className="font-label text-xs uppercase tracking-[0.1em] text-[var(--color-accent)] mb-1">Kit Price</p>
                <p className="font-display text-3xl font-bold text-[var(--color-cream)]">UGX XX,XXX</p>
                <p className="font-body text-xs text-[var(--color-cream)]/40 mt-1">Placeholder — price to be confirmed</p>
              </div>

              <PinnketCTA href={shopUrl} label="Order Your Kit on Pinnket →" showNote />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-warm-white)] py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold text-[var(--color-logo-forest)] mb-8 text-center">Size Guide</h2>
          <p className="font-body text-xs text-[var(--color-arabica)]/70 mb-4 text-center">
            All measurements in centimetres (cm). Placeholder data — to be confirmed.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[var(--color-dark)] text-[var(--color-cream)]">
                  {['Size', 'Chest', 'Waist', 'Hip'].map((h) => (
                    <th key={h} className="font-label text-xs uppercase tracking-[0.1em] px-4 py-3 text-left">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sizeGuide.map((row, i) => (
                  <tr key={row.size} className={i % 2 === 0 ? 'bg-[var(--color-warm-white)]' : 'bg-[var(--color-cream)]'}>
                    <td className="font-body font-semibold text-sm px-4 py-3 text-[var(--color-logo-deep-brown)]">{row.size}</td>
                    <td className="font-body text-sm px-4 py-3 text-[var(--color-arabica)]">{row.chest}</td>
                    <td className="font-body text-sm px-4 py-3 text-[var(--color-arabica)]">{row.waist}</td>
                    <td className="font-body text-sm px-4 py-3 text-[var(--color-arabica)]">{row.hip}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-dark)] py-16 text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-3xl font-bold text-[var(--color-cream)] mb-3">Don&apos;t miss out</h2>
          <p className="font-body text-sm text-[var(--color-cream)]/70 mb-6">
            Orders close {cutoffLabel}. Kit is only available while stocks last.
          </p>
          <PinnketCTA href={shopUrl} label="Order Your Kit on Pinnket →" variant="primary" showNote />
        </div>
      </section>
    </>
  )
}
