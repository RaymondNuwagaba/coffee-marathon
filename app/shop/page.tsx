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

      {/* Orders close banner */}
      <div className="py-3 text-center" style={{ backgroundColor: 'var(--brown-mid)' }}>
        <p className="font-label text-sm font-bold uppercase tracking-[0.08em] text-white">
          Orders close {cutoffLabel} — collection on race day at Africa Coffee Park
        </p>
      </div>

      <section className="py-20" style={{ backgroundColor: 'var(--green-mist)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Product image placeholder */}
            <div
              className="aspect-square rounded-2xl flex items-center justify-center border"
              style={{ backgroundColor: 'var(--green-pale)', borderColor: 'rgba(26,107,58,0.2)' }}
            >
              <span className="font-body text-sm text-center px-8" style={{ color: 'var(--green-mid)' }}>
                Kit flat-lay photography — to be added by client
              </span>
            </div>

            <div>
              <p className="font-label text-xs uppercase tracking-[0.12em] font-bold mb-3" style={{ color: 'var(--green-mid)' }}>
                Kit Contents
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6" style={{ color: 'var(--brown-heading)' }}>
                What&apos;s in the Kit
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {kitContents.map(({ icon: Icon, label, desc }) => (
                  <div
                    key={label}
                    className="flex items-start gap-3 bg-white rounded-xl p-4 border"
                    style={{ borderColor: 'rgba(26,107,58,0.15)' }}
                  >
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: 'var(--green-pale)' }}
                    >
                      <Icon size={16} style={{ color: 'var(--green-primary)' }} />
                    </div>
                    <div>
                      <p className="font-body font-semibold text-sm" style={{ color: 'var(--brown-heading)' }}>{label}</p>
                      <p className="font-body text-xs" style={{ color: 'var(--brown-dark)', opacity: 0.7 }}>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Price */}
              <div className="rounded-xl p-6 mb-6" style={{ backgroundColor: 'var(--green-primary)' }}>
                <p className="font-label text-xs uppercase tracking-[0.1em] font-bold mb-1" style={{ color: 'var(--green-pale)' }}>Kit Price</p>
                <p className="font-display text-3xl font-bold text-white">UGX XX,XXX</p>
                <p className="font-body text-xs mt-1" style={{ color: 'rgba(255,255,255,0.4)' }}>Placeholder — price to be confirmed</p>
              </div>

              <PinnketCTA href={shopUrl} label="Order Your Kit on Pinnket →" showNote />
            </div>
          </div>
        </div>
      </section>

      {/* Size Guide */}
      <section className="py-20" style={{ backgroundColor: 'var(--cream)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-label text-xs uppercase tracking-[0.12em] font-bold mb-3 text-center" style={{ color: 'var(--green-mid)' }}>
            Sizing
          </p>
          <h2 className="font-display text-3xl font-semibold mb-4 text-center" style={{ color: 'var(--brown-heading)' }}>
            Size Guide
          </h2>
          <p className="font-body text-xs mb-6 text-center" style={{ color: 'var(--brown-dark)', opacity: 0.6 }}>
            All measurements in centimetres (cm). Placeholder data — to be confirmed.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse rounded-xl overflow-hidden">
              <thead>
                <tr style={{ backgroundColor: 'var(--green-primary)' }}>
                  {['Size', 'Chest', 'Waist', 'Hip'].map((h) => (
                    <th key={h} className="font-label text-xs uppercase tracking-[0.1em] px-4 py-3 text-left text-white">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sizeGuide.map((row, i) => (
                  <tr key={row.size} style={{ backgroundColor: i % 2 === 0 ? 'white' : 'var(--green-mist)' }}>
                    <td className="font-body font-semibold text-sm px-4 py-3" style={{ color: 'var(--brown-heading)' }}>{row.size}</td>
                    <td className="font-body text-sm px-4 py-3" style={{ color: 'var(--brown-dark)' }}>{row.chest}</td>
                    <td className="font-body text-sm px-4 py-3" style={{ color: 'var(--brown-dark)' }}>{row.waist}</td>
                    <td className="font-body text-sm px-4 py-3" style={{ color: 'var(--brown-dark)' }}>{row.hip}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center" style={{ backgroundColor: 'var(--green-primary)' }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-3xl font-bold text-white mb-3">Don&apos;t miss out</h2>
          <p className="font-body text-sm mb-6" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Orders close {cutoffLabel}. Kit is only available while stocks last.
          </p>
          <PinnketCTA href={shopUrl} label="Order Your Kit on Pinnket →" variant="primary" showNote />
        </div>
      </section>
    </>
  )
}
