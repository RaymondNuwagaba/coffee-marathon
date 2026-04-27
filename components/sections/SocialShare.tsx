'use client'

import { Share2, MessageCircle, Copy, Check } from 'lucide-react'
import { useState } from 'react'

interface SocialShareProps {
  message?: string
  url?: string
}

const DEFAULT_MESSAGE =
  "I'm running The Coffee Marathon Uganda on 3 October 2026! Join me → coffeemarathonug.com"

export default function SocialShare({ message = DEFAULT_MESSAGE, url }: SocialShareProps) {
  const [copied, setCopied] = useState(false)
  const shareUrl = url ?? 'https://coffeemarathonug.com'
  const waUrl = `https://wa.me/?text=${encodeURIComponent(message)}`

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {}
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <div className="flex items-center gap-2 text-[var(--color-arabica)]">
        <Share2 size={16} />
        <span className="font-body text-sm font-medium">Share:</span>
      </div>
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-full font-body text-sm font-semibold hover:opacity-90 transition-opacity"
      >
        <MessageCircle size={15} />
        WhatsApp
      </a>
      <button
        onClick={handleCopy}
        className="inline-flex items-center gap-2 bg-[var(--color-cream-dark)] text-[var(--color-espresso)] px-4 py-2 rounded-full font-body text-sm font-semibold hover:bg-[var(--color-cream)] transition-colors"
      >
        {copied ? <Check size={15} className="text-[var(--color-forest)]" /> : <Copy size={15} />}
        {copied ? 'Copied!' : 'Copy link'}
      </button>
    </div>
  )
}
