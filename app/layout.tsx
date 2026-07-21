import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/react'
import Script from 'next/script'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import './globals.css'

// Display font (hero + major section titles) — client-provided Luckiest Guy
const luckiestGuy = localFont({
  src: './fonts/LuckiestGuy-Regular.woff2',
  variable: '--font-display-brand',
  weight: '400',
  display: 'swap',
})

// Body font — client-provided Barlow
const barlow = localFont({
  variable: '--font-barlow',
  display: 'swap',
  src: [
    { path: './fonts/Barlow-Regular.woff2', weight: '400', style: 'normal' },
    { path: './fonts/Barlow-Italic.woff2', weight: '400', style: 'italic' },
    { path: './fonts/Barlow-Medium.woff2', weight: '500', style: 'normal' },
    { path: './fonts/Barlow-MediumItalic.woff2', weight: '500', style: 'italic' },
    { path: './fonts/Barlow-SemiBold.woff2', weight: '600', style: 'normal' },
    { path: './fonts/Barlow-SemiBoldItalic.woff2', weight: '600', style: 'italic' },
    { path: './fonts/Barlow-Bold.woff2', weight: '700', style: 'normal' },
  ],
})

// Label + secondary-heading font — client-provided Barlow Condensed
const barlowCondensed = localFont({
  variable: '--font-barlow-condensed',
  display: 'swap',
  src: [
    { path: './fonts/BarlowCondensed-Bold.woff2', weight: '700', style: 'normal' },
    { path: './fonts/BarlowCondensed-ExtraBold.woff2', weight: '800', style: 'normal' },
  ],
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
      className={`${luckiestGuy.variable} ${barlow.variable} ${barlowCondensed.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased bg-[var(--green-mist)] text-[var(--brown-dark)]">
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
