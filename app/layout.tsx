import React, { ReactNode } from 'react'
import Footer from '@/layout/Footer'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { ToastProvider } from '@/contexts/ToastContext'
import '@/styles/global.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Colorazzo — Color Palette Generator',
  description:
    'Generate beautiful, accessible color palettes with just one click. Export to CSS, Tailwind, SCSS and more. Free and open source.',
  keywords: ['color palette', 'color generator', 'design tools', 'css', 'tailwind'],
  authors: [{ name: 'Colorazzo' }],
  creator: 'Colorazzo',
  publisher: 'Colorazzo',
  metadataBase: new URL('https://colorazzo.dewxit.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    siteName: 'Colorazzo',
    title: 'Colorazzo — Color Palette Generator',
    description:
      'Generate beautiful, accessible color palettes with just one click. Export to CSS, Tailwind, SCSS and more. Free and open source.',
    url: 'https://colorazzo.dewxit.com',
    images: [
      {
        url: '/colorazzo_logo.png',
        width: 1200,
        height: 630,
        alt: 'Colorazzo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Colorazzo — Color Palette Generator',
    description:
      'Generate beautiful, accessible color palettes with just one click. Export to CSS, Tailwind, SCSS and more. Free and open source.',
    images: ['/colorazzo_logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/colorazzo_logo.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/manifest.json',
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#4f46e5" />
      </head>
      <body>
        <ToastProvider>
          <div className="min-h-screen flex flex-col bg-white text-gray-900">
            <main className="flex-grow flex flex-col">{children}</main>
            <Footer />
          </div>
        </ToastProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
