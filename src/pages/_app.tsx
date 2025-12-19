import Layout from '@/layout/Layout'
import type { AppProps } from 'next/app'
import '../styles/global.css'
import { ToastProvider } from '@/contexts/ToastContext'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ToastProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ToastProvider>
  )
}
