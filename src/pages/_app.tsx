import Layout from '@/layout/Layout'
import type { AppProps } from 'next/app'
import '../styles/global.css' // Zaimportowanie pliku CSS

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
