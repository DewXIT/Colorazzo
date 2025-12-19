export const runtime = 'edge'

export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /
Sitemap: https://colorazzo.dewxit.com/sitemap.xml`

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}
