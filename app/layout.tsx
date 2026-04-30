import type { Metadata } from 'next'
import { Oswald, Barlow, Barlow_Condensed } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import Script from 'next/script'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import './globals.css'

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
  weight: ['600', '700'],
})

const barlow = Barlow({
  subsets: ['latin'],
  variable: '--font-barlow',
  weight: ['400', '500', '600'],
  display: 'swap',
})

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  variable: '--font-barlow-condensed',
  weight: ['700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://coffeemarathonug.com'),
  title: {
    default: 'The Coffee Marathon Uganda 2026',
    template: '%s | Coffee Marathon Uganda',
  },
  description:
    "Run through Uganda's coffee country on 3 October 2026 at Africa Coffee Park, Ntungamo. 5KM, 10KM, 21KM and 42KM categories.",
  keywords: [
    'Uganda marathon',
    'Coffee Marathon',
    'Ntungamo Uganda',
    'Africa Coffee Park',
    'Uganda running event 2026',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_UG',
    url: 'https://coffeemarathonug.com',
    siteName: 'The Coffee Marathon Uganda',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'The Coffee Marathon Uganda 2026',
      },
    ],
  },
  twitter: { card: 'summary_large_image' },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${barlow.variable} ${barlowCondensed.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased bg-[var(--color-cream)] text-[var(--color-espresso)]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <>
            <Script
              id="ga4"
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  )
}
