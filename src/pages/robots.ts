import { NextApiRequest, NextApiResponse } from 'next'
import { baseUrl } from './sitemap'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Content-Type', 'text/plain')
  res
    .status(200)
    .send(`User-agent: *\nDisallow:\nSitemap: ${baseUrl}/sitemap.xml`)
}
