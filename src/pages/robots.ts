import type { GetServerSideProps } from 'next'

const baseUrl = 'https://colorazzo.dewxit.com'

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader('Content-Type', 'text/plain')
  res.write(`User-agent: *\nAllow: /\nSitemap: ${baseUrl}/sitemap.xml`)
  res.end()
  return { props: {} }
}

export default function Robots() {
  return null
}
