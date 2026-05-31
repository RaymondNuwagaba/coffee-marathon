import { CheckCircle2 } from 'lucide-react'

interface SponsorTierCardProps {
  name: string
  price?: string
  color?: string
  textColor?: string
  perks: string[]
  topTier?: boolean
}

export default function SponsorTierCard({
  name,
  price,
  perks,
  topTier,
}: SponsorTierCardProps) {
  return (
    <div
      className="bg-white rounded-2xl p-8 flex flex-col gap-5 hover:scale-[1.02] hover:shadow-xl transition-all duration-300 border"
      style={{ borderColor: 'rgba(26,107,58,0.2)' }}
    >
      <div>
        <span
          className="font-body text-xs uppercase tracking-widest mb-2 block px-3 py-1 rounded-full inline-block"
          style={{
            backgroundColor: topTier ? 'var(--brown-mid)' : 'var(--green-pale)',
            color: topTier ? 'white' : 'var(--green-deep)',
          }}
        >
          Sponsorship
        </span>
        <h3 className="font-display text-2xl font-bold mt-2" style={{ color: 'var(--brown-heading)' }}>{name}</h3>
        {price && (
          <p className="font-display text-3xl font-bold mt-2" style={{ color: 'var(--green-primary)' }}>{price}</p>
        )}
      </div>
      <ul className="space-y-3 flex-1">
        {perks.map((perk) => (
          <li key={perk} className="flex items-start gap-2 font-body text-sm" style={{ color: 'var(--brown-dark)' }}>
            <CheckCircle2 size={16} className="shrink-0 mt-0.5" style={{ color: 'var(--green-light)' }} />
            {perk}
          </li>
        ))}
      </ul>
    </div>
  )
}
