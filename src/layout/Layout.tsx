import React, { ReactNode } from 'react'
import Footer from './Footer'
import { baseUrl } from '@/pages/sitemap'
import { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
interface LayoutProps {
  children: ReactNode
}

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Colorazzo',
    template: '%s | Colorazzo',
  },
  description: 'Color palette web tool',
  openGraph: {
    title: 'Colorazzo',
    description: 'Color palette web tool',
    url: baseUrl,
    siteName: 'Colorazzo',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col justify-between bg-[#121212] h-full min-h-screen">
      {children}
      <Footer />
      <Analytics />
      <SpeedInsights />
    </div>
  )
}

export default Layout
