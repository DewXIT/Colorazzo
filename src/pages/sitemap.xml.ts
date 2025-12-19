import type { GetServerSideProps } from 'next'

const baseUrl = 'https://colorazzo.dewxit.com'

const generate = () => {
  const updated = new Date().toISOString().split('T')[0]
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${updated}</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>`
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader('Content-Type', 'application/xml')
  res.write(generate())
  res.end()
  return { props: {} }
}

export default function SitemapXml() {
  return null
}
