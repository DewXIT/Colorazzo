import React, { ReactNode } from 'react'
import Footer from './Footer'
import Head from 'next/head'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

interface LayoutProps {
  children: ReactNode
}

const site = {
  name: 'Colorazzo',
  title: 'Colorazzo — Color Palette Generator',
  description:
    'Generate beautiful, accessible color palettes with just one click. Export to CSS, Tailwind, SCSS and more. Free and open source.',
  url: 'https://colorazzo.dewxit.com',
  image: 'https://colorazzo.dewxit.com/colorazzo_logo.png',
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Head>
        <title>{site.title}</title>
        <meta name="description" content={site.description} />
        <link rel="canonical" href={site.url} />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#4f46e5" />

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/colorazzo_logo.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon-32x32.png" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={site.name} />
        <meta property="og:title" content={site.title} />
        <meta property="og:description" content={site.description} />
        <meta property="og:url" content={site.url} />
        <meta property="og:image" content={site.image} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={site.title} />
        <meta name="twitter:description" content={site.description} />
        <meta name="twitter:image" content={site.image} />
      </Head>

      <main className="flex-grow flex flex-col">{children}</main>

      <Footer />
      <Analytics />
      <SpeedInsights />
    </div>
  )
}

export default Layout
