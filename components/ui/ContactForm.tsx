'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { CheckCircle2, Loader2 } from 'lucide-react'

interface FormValues {
  name: string
  email: string
  subject: string
  message: string
}

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [serverError, setServerError] = useState('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>()

  const onSubmit = async (data: FormValues) => {
    setServerError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Server error')
      setSubmitted(true)
    } catch {
      setServerError('Something went wrong. Please try again or email us directly.')
    }
  }

  if (submitted) {
    return (
      <div className="bg-[var(--color-seedling-light)] rounded-2xl p-8 text-center">
        <CheckCircle2 size={40} className="text-[var(--color-forest)] mx-auto mb-3" />
        <p className="font-display text-2xl font-semibold text-[var(--color-forest)] mb-2">Message sent!</p>
        <p className="font-body text-sm text-[var(--color-forest-dark)]">
          Thank you for reaching out. We&apos;ll get back to you soon.
        </p>
        <button
          onClick={() => { setSubmitted(false); reset() }}
          className="mt-4 font-body text-sm text-[var(--color-forest)] underline"
        >
          Send another message
        </button>
      </div>
    )
  }

  const inputClass =
    'w-full px-4 py-3 rounded-xl border bg-white font-body text-sm text-[var(--color-espresso)] focus:outline-none focus:border-[var(--color-forest)] transition-colors'
  const errorBorder = 'border-red-400'
  const defaultBorder = 'border-[var(--color-cream-dark)]'

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <div>
        <label htmlFor="name" className="block font-body text-xs uppercase tracking-widest text-[var(--color-arabica)] mb-1.5">
          Your Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="Jane Doe"
          className={`${inputClass} ${errors.name ? errorBorder : defaultBorder}`}
          {...register('name', { required: 'Name is required' })}
        />
        {errors.name && <p className="font-body text-xs text-red-500 mt-1">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block font-body text-xs uppercase tracking-widest text-[var(--color-arabica)] mb-1.5">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          placeholder="jane@example.com"
          className={`${inputClass} ${errors.email ? errorBorder : defaultBorder}`}
          {...register('email', {
            required: 'Email is required',
            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email address' },
          })}
        />
        {errors.email && <p className="font-body text-xs text-red-500 mt-1">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="subject" className="block font-body text-xs uppercase tracking-widest text-[var(--color-arabica)] mb-1.5">
          Subject
        </label>
        <input
          id="subject"
          type="text"
          placeholder="e.g. Registration query"
          className={`${inputClass} ${errors.subject ? errorBorder : defaultBorder}`}
          {...register('subject', { required: 'Subject is required' })}
        />
        {errors.subject && <p className="font-body text-xs text-red-500 mt-1">{errors.subject.message}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block font-body text-xs uppercase tracking-widest text-[var(--color-arabica)] mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Your message..."
          className={`${inputClass} ${errors.message ? errorBorder : defaultBorder} resize-none`}
          {...register('message', { required: 'Message is required', minLength: { value: 10, message: 'Message must be at least 10 characters' } })}
        />
        {errors.message && <p className="font-body text-xs text-red-500 mt-1">{errors.message.message}</p>}
      </div>

      {serverError && (
        <p className="font-body text-sm text-red-500 bg-red-50 rounded-xl px-4 py-3">{serverError}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[var(--color-forest)] text-[var(--color-cream)] py-3 rounded-full font-body font-semibold hover:bg-[var(--color-forest-light)] transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Sending…
          </>
        ) : (
          'Send Message'
        )}
      </button>
    </form>
  )
}
