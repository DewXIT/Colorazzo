import Layout from '@/layout/Layout'
import type { AppProps } from 'next/app'
import '../styles/global.css'
import { ThemeProvider, CssBaseline } from '@mui/material'
import theme from '@/styles/theme'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
