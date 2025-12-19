import { readFile } from 'node:fs/promises'
import sharp from 'sharp'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

async function main() {
  const pngPath = resolve(__dirname, '../public/colorazzo_logo.png')
  const out32 = resolve(__dirname, '../public/favicon-32x32.png')
  const out16 = resolve(__dirname, '../public/favicon-16x16.png')
  const out192 = resolve(__dirname, '../public/favicon-192x192.png')
  const out512 = resolve(__dirname, '../public/favicon-512x512.png')
  const png = await readFile(pngPath)

  await sharp(png)
    .resize(32, 32, {
      fit: 'contain',
      background: { r: 255, g: 255, b: 255, alpha: 0 },
    })
    .png()
    .toFile(out32)
  await sharp(png)
    .resize(16, 16, {
      fit: 'contain',
      background: { r: 255, g: 255, b: 255, alpha: 0 },
    })
    .png()
    .toFile(out16)
  await sharp(png)
    .resize(192, 192, {
      fit: 'contain',
      background: { r: 255, g: 255, b: 255, alpha: 0 },
    })
    .png()
    .toFile(out192)
  await sharp(png)
    .resize(512, 512, {
      fit: 'contain',
      background: { r: 255, g: 255, b: 255, alpha: 0 },
    })
    .png()
    .toFile(out512)
  console.log('Generated favicons:', out16, out32, out192, out512)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
