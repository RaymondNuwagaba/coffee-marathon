import Link from 'next/link'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline'

interface ButtonProps {
  href?: string
  onClick?: () => void
  variant?: ButtonVariant
  children: React.ReactNode
  className?: string
  external?: boolean
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-[var(--color-espresso)] text-[var(--color-cream)] hover:bg-[var(--color-espresso-light)] shadow-sm',
  secondary:
    'bg-[var(--color-forest)] text-[var(--color-cream)] hover:bg-[var(--color-forest-light)] shadow-sm',
  ghost:
    'bg-transparent text-[var(--color-espresso)] hover:bg-[var(--color-cream-dark)]',
  outline:
    'bg-transparent border-2 border-[var(--color-cream)] text-[var(--color-cream)] hover:bg-[var(--color-cream)]/10',
}

const base =
  'inline-flex items-center justify-center px-6 py-3 rounded-full font-body font-semibold text-sm transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-forest)] focus-visible:ring-offset-2'

export default function Button({
  href,
  onClick,
  variant = 'primary',
  children,
  className = '',
  external = false,
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
