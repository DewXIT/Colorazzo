import { readFile } from 'node:fs/promises'
import sharp from 'sharp'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

async function main() {
  const svgPath = resolve(__dirname, '../public/favicon.svg')
  const out32 = resolve(__dirname, '../public/favicon-32x32.png')
  const out16 = resolve(__dirname, '../public/favicon-16x16.png')
  const svg = await readFile(svgPath)

  await sharp(svg).resize(32, 32, { fit: 'contain', background: { r: 11, g: 15, b: 20, alpha: 1 } }).png().toFile(out32)
  await sharp(svg).resize(16, 16, { fit: 'contain', background: { r: 11, g: 15, b: 20, alpha: 1 } }).png().toFile(out16)
  console.log('Generated', out32, out16)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
