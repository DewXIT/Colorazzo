import chroma from 'chroma-js'

const getColorObject = (
  color: chroma.Color,
  shade: string,
): { shade: string; color: string } => {
  return { shade, color: color.hex() }
}

export const generateColorPalette = (hex: string) => {
  const baseColor = chroma(hex)
  const baseLight = chroma('#ffffff')
  const baseDark = baseColor.darken(2)

  return [
    // Jaśniejsze kolory
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
    getColorObject(chroma.mix(baseLight, baseColor, 0.7), '300'),
    getColorObject(chroma.mix(baseLight, baseColor, 0.85), '400'),
    // Główny kolor
    getColorObject(chroma.mix(baseLight, baseColor, 1), '500'),
    // Ciemniejsze kolory
    getColorObject(chroma.mix(baseDark, baseColor, 0.87).saturate(0.18), '600'),
    getColorObject(chroma.mix(baseDark, baseColor, 0.7).saturate(0.22), '700'),
    getColorObject(chroma.mix(baseDark, baseColor, 0.54).saturate(0.3), '800'),
    getColorObject(chroma.mix(baseDark, baseColor, 0.25).darken(0.14), '900'),
  ]
}
