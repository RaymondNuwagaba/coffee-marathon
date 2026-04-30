interface StatBadgeProps {
  number: string
  label: string
}

export default function StatBadge({ number, label }: StatBadgeProps) {
  return (
    <div className="text-center p-6">
      <div className="font-display text-5xl md:text-6xl font-bold text-[var(--color-accent)] leading-none">
        {number}
      </div>
      <div className="font-body text-sm text-[var(--color-arabica)] uppercase tracking-widest mt-2">
        {label}
      </div>
    </div>
  )
}
