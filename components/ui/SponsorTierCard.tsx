import { CheckCircle2 } from 'lucide-react'

interface SponsorTierCardProps {
  name: string
  color: string
  textColor: string
  perks: string[]
}

export default function SponsorTierCard({
  name,
  color,
  textColor,
  perks,
}: SponsorTierCardProps) {
  return (
    <div
      className={`${color} ${textColor} rounded-2xl p-8 flex flex-col gap-5 hover:scale-[1.02] hover:shadow-xl transition-all duration-300`}
    >
      <div>
        <span className="font-body text-xs uppercase tracking-widest opacity-60 mb-1 block">
          Sponsorship
        </span>
        <h3 className="font-display text-2xl font-bold">{name}</h3>
      </div>
      <ul className="space-y-3 flex-1">
        {perks.map((perk) => (
          <li key={perk} className="flex items-start gap-2 font-body text-sm">
            <CheckCircle2 size={16} className="shrink-0 mt-0.5 opacity-70" />
            {perk}
          </li>
        ))}
      </ul>
    </div>
  )
}
