import { Method } from '@/enums/enums'
import { ColorObjectType } from '@/types/types'
import chroma from 'chroma-js'

const getColorObject = (
  color: chroma.Color,
  shade: string,
): ColorObjectType => {
  return { shade, color: color.hex() }
}

// Method Default
const generateDefaultPalette = (hex: string) => {
  const baseColor = chroma(hex)
  const baseLight = chroma('#ffffff')
  const baseDark = baseColor.darken(2)

  return [
    getColorObject(
      chroma.mix(baseLight, baseColor, 0.12).brighten(0.15).saturate(0.1),
      '50',
    ),
    getColorObject(
      chroma.mix(baseLight, baseColor, 0.3).brighten(0.15).saturate(0.12),
      '100',
    ),
    getColorObject(
      chroma.mix(baseLight, baseColor, 0.5).brighten(0.13).saturate(0.13),
      '200',
    ),
    getColorObject(chroma.mix(baseLight, baseColor, 0.75), '300'),
    getColorObject(
      chroma.mix(baseLight, baseColor, 0.9).brighten(0.05).saturate(0.1),
      '400',
    ),
    getColorObject(chroma.mix(baseLight, baseColor, 1), '500'),
    getColorObject(chroma.mix(baseDark, baseColor, 0.9).saturate(0.18), '600'),
    getColorObject(chroma.mix(baseDark, baseColor, 0.7).saturate(0.22), '700'),
    getColorObject(chroma.mix(baseDark, baseColor, 0.54).saturate(0.3), '800'),
    getColorObject(chroma.mix(baseDark, baseColor, 0.25).darken(0.14), '900'),
  ]
}

// Method HSL
const generateHSLPalette = (hex: string) => {
  const baseColor = chroma(hex).hsl()
  const [h, s, l] = baseColor

  return [
    getColorObject(chroma.hsl(h, s, l + 0.4), '50'),
    getColorObject(chroma.hsl(h, s, l + 0.3), '100'),
    getColorObject(chroma.hsl(h, s, l + 0.2), '200'),
    getColorObject(chroma.hsl(h, s, l + 0.1), '300'),
    getColorObject(chroma.hsl(h, s, l + 0.05), '400'),
    getColorObject(chroma.hsl(h, s, l), '500'),
    getColorObject(chroma.hsl(h, s, l - 0.1), '600'),
    getColorObject(chroma.hsl(h, s, l - 0.2), '700'),
    getColorObject(chroma.hsl(h, s, l - 0.3), '800'),
    getColorObject(chroma.hsl(h, s, l - 0.4), '900'),
  ]
}

// Method LAB
const generateLABPalette = (hex: string) => {
  const baseColor = chroma(hex)
  const baseLight = chroma('white')
  const baseDark = baseColor.darken(2)

  return [
    getColorObject(chroma.mix(baseLight, baseColor, 0.1, 'lab'), '50'),
    getColorObject(chroma.mix(baseLight, baseColor, 0.25, 'lab'), '100'),
    getColorObject(chroma.mix(baseLight, baseColor, 0.4, 'lab'), '200'),
    getColorObject(chroma.mix(baseLight, baseColor, 0.6, 'lab'), '300'),
    getColorObject(chroma.mix(baseLight, baseColor, 0.75, 'lab'), '400'),
    getColorObject(baseColor, '500'),
    getColorObject(chroma.mix(baseDark, baseColor, 0.7, 'lab'), '600'),
    getColorObject(chroma.mix(baseDark, baseColor, 0.5, 'lab'), '700'),
    getColorObject(chroma.mix(baseDark, baseColor, 0.3, 'lab'), '800'),
    getColorObject(chroma.mix(baseDark, baseColor, 0.1, 'lab'), '900'),
  ]
}

export const generateColorPalette = (
  hex: string,
  method: Method = Method.Default,
) => {
  switch (method) {
    case Method.HSL:
      return generateHSLPalette(hex)
    case Method.LAB:
      return generateLABPalette(hex)
    default:
      return generateDefaultPalette(hex)
  }
}
