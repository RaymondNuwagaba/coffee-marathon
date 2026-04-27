import type { Metadata } from 'next'
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react'
import { FacebookIcon, InstagramIcon, TwitterXIcon } from '@/components/ui/SocialIcons'
import PageHero from '@/components/layout/PageHero'
import ContactForm from '@/components/ui/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    "Get in touch with The Coffee Marathon Uganda team. Questions about registration, sponsorships, or the event.",
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Got a question about the race, sponsorships, or the event? We'd love to hear from you."
        label="Get in Touch"
      />

      <section className="bg-[var(--color-cream-light)] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact form */}
            <div>
              <h2 className="font-display text-2xl font-semibold text-[var(--color-espresso)] mb-6">
                Send a Message
              </h2>
              <ContactForm />
            </div>

            {/* Contact details */}
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-2xl font-semibold text-[var(--color-espresso)] mb-6">
                  Other Ways to Reach Us
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      icon: Mail,
                      label: 'Email',
                      value: 'info@coffeemarathonug.com',
                      href: 'mailto:info@coffeemarathonug.com',
                    },
                    {
                      icon: Phone,
                      label: 'Phone',
                      value: '+256 750 263 333',
                      href: 'tel:+256750263333',
                    },
                    {
                      icon: MapPin,
                      label: 'Address',
                      value: 'Africa Coffee Park, Ntungamo, Uganda',
                      href: '#',
                    },
                  ].map(({ icon: Icon, label, value, href }) => (
                    <a
                      key={label}
                      href={href}
                      className="flex items-start gap-4 p-4 bg-white rounded-xl border border-[var(--color-cream-dark)] hover:border-[var(--color-forest)] transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-full bg-[var(--color-seedling-light)] flex items-center justify-center shrink-0">
                        <Icon size={16} className="text-[var(--color-forest)]" />
                      </div>
                      <div>
                        <p className="font-body text-xs uppercase tracking-widest text-[var(--color-arabica)]/60">
                          {label}
                        </p>
                        <p className="font-body text-sm font-semibold text-[var(--color-espresso)] group-hover:text-[var(--color-forest)] transition-colors">
                          {value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Socials */}
              <div>
                <h3 className="font-body text-xs uppercase tracking-widest text-[var(--color-arabica)]/60 mb-4">
                  Follow Us
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    { icon: FacebookIcon, href: 'https://facebook.com', label: 'Facebook' },
                    { icon: InstagramIcon, href: 'https://instagram.com', label: 'Instagram' },
                    { icon: TwitterXIcon, href: 'https://twitter.com', label: 'Twitter' },
                  ].map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-10 h-10 rounded-full bg-[var(--color-espresso)] flex items-center justify-center text-[var(--color-cream)] hover:bg-[var(--color-forest)] transition-colors"
                    >
                      <Icon size={16} />
                    </a>
                  ))}
                  <a
                    href="https://wa.me/256750263333"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-full font-body text-sm font-semibold hover:opacity-90 transition-opacity"
                  >
                    <MessageCircle size={15} />
                    WhatsApp
                  </a>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="aspect-video bg-[var(--color-cream-dark)] rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={24} className="text-[var(--color-arabica)]/30 mx-auto mb-2" />
                  <p className="font-body text-xs text-[var(--color-arabica)]/40">
                    Google Maps embed — to be added
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
