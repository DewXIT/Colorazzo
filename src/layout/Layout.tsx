import React, { ReactNode } from 'react'
import Footer from './Footer'
import Link from 'next/link'
import Head from 'next/head'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

interface LayoutProps {
  children: ReactNode
}

const site = {
  name: 'Colorazzo',
  title: 'Colorazzo — Color palette web tool',
  description: 'Generate beautiful color palettes instantly (Default, HSL, LAB).',
  url: 'https://colorazzo.netlify.app',
  image: 'https://colorazzo.netlify.app/logo.png',
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#0b0f14] via-[#0a0a0a] to-[#141e30] text-gray-100">
      <Head>
        <title>{site.title}</title>
        <meta name="description" content={site.description} />
        <link rel="canonical" href={site.url} />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#0b0f14" />

        <link rel="icon" href="/favicon.svg" type="image/svg+xml" sizes="any" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo.png" />

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

      <header className="sticky top-0 z-30">
        <div className="mx-auto w-full max-w-7xl px-3 sm:px-4 lg:px-8">
          <div className="mt-3 sm:mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-xl">
            <div className="flex items-center justify-between px-3 sm:px-4 lg:px-6 py-2.5 sm:py-3.5">
              <Link href="/" className="font-semibold tracking-tight text-white">
                <span className="text-lg sm:text-xl lg:text-2xl">Colora</span>
                <span className="text-lg sm:text-xl lg:text-2xl italic text-fuchsia-400">zzo</span>
              </Link>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/DewXIT/Colorazzo"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                  aria-label="Open GitHub repository"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <div className="mx-auto w-full max-w-7xl px-3 sm:px-4 lg:px-8 py-5 sm:py-8">
          {children}
        </div>
      </main>

      <Footer />
      <Analytics />
      <SpeedInsights />
    </div>
  )
}

export default Layout
