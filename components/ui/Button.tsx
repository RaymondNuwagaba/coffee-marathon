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
  primary: 'btn-primary',
  secondary: 'bg-[var(--yellow)] text-[var(--ink)] hover:bg-[#ffd45a]',
  ghost: 'bg-transparent text-[var(--ink)] hover:bg-black/5',
  outline:
    'bg-transparent border-[1.5px] border-[var(--green-primary)] text-[var(--green-primary)] hover:bg-[var(--green-primary)] hover:text-white',
}

const base =
  'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-label font-bold uppercase tracking-[0.08em] text-sm transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--green-primary)] focus-visible:ring-offset-2'

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
  const classes = `${variant === 'primary' ? variants.primary : `${base} ${variants[variant]}`} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`

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
