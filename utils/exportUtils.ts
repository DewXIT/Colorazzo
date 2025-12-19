import { ColorObjectType } from '@/types/types'

export const exportToJSON = (palette: ColorObjectType[]) => {
  const dataStr = `data:text/json;charset=utf-8,${encodeURIComponent(
    JSON.stringify(palette, null, 2),
  )}`
  downloadFile(dataStr, 'palette.json')
}

export const exportToCSS = (palette: ColorObjectType[]) => {
  const cssVars = palette
    .map(({ shade, color }) => `  --color-${shade}: ${color};`)
    .join('\n')
  const cssContent = `:root {\n${cssVars}\n}`
  const dataStr = `data:text/css;charset=utf-8,${encodeURIComponent(cssContent)}`
  downloadFile(dataStr, 'palette.css')
}

export const exportToTailwind = (palette: ColorObjectType[]) => {
  const colors = palette.reduce(
    (acc, { shade, color }) => {
      acc[shade] = color
      return acc
    },
    {} as Record<string, string>,
  )

  const tailwindConfig = {
    theme: {
      extend: {
        colors: {
          custom: colors,
        },
      },
    },
  }

  const configContent = `// Add this to your tailwind.config.js
module.exports = ${JSON.stringify(tailwindConfig, null, 2)}`

  const dataStr = `data:text/javascript;charset=utf-8,${encodeURIComponent(configContent)}`
  downloadFile(dataStr, 'tailwind.config.js')
}

export const exportToSCSS = (palette: ColorObjectType[]) => {
  const scssVars = palette
    .map(({ shade, color }) => `$color-${shade}: ${color};`)
    .join('\n')
  const dataStr = `data:text/scss;charset=utf-8,${encodeURIComponent(scssVars)}`
  downloadFile(dataStr, 'palette.scss')
}

export const exportToSwift = (palette: ColorObjectType[]) => {
  const swiftColors = palette
    .map(({ shade, color }) => {
      const hex = color.replace('#', '')
      const r = parseInt(hex.substring(0, 2), 16) / 255
      const g = parseInt(hex.substring(2, 4), 16) / 255
      const b = parseInt(hex.substring(4, 6), 16) / 255

      return `    static let ${shade} = Color(red: ${r.toFixed(3)}, green: ${g.toFixed(3)}, blue: ${b.toFixed(3)})`
    })
    .join('\n')

  const swiftContent = `import SwiftUI

extension Color {
${swiftColors}
}`

  const dataStr = `data:text/swift;charset=utf-8,${encodeURIComponent(swiftContent)}`
  downloadFile(dataStr, 'Colors.swift')
}

export const exportToKotlin = (palette: ColorObjectType[]) => {
  const kotlinColors = palette
    .map(({ shade, color }) => {
      const colorValue = color.replace('#', '0xFF')
      return `    val ${shade} = Color(${colorValue})`
    })
    .join('\n')

  const kotlinContent = `package com.yourapp.ui.theme

import androidx.compose.ui.graphics.Color

object AppColors {
${kotlinColors}
}`

  const dataStr = `data:text/kotlin;charset=utf-8,${encodeURIComponent(kotlinContent)}`
  downloadFile(dataStr, 'AppColors.kt')
}

export const exportToXML = (palette: ColorObjectType[]) => {
  const xmlColors = palette
    .map(
      ({ shade, color }) => `    <color name="color_${shade}">${color}</color>`,
    )
    .join('\n')

  const xmlContent = `<?xml version="1.0" encoding="utf-8"?>
<resources>
${xmlColors}
</resources>`

  const dataStr = `data:text/xml;charset=utf-8,${encodeURIComponent(xmlContent)}`
  downloadFile(dataStr, 'colors.xml')
}

export const exportToFigma = (palette: ColorObjectType[]) => {
  const figmaColors = palette.map(({ shade, color }) => ({
    name: shade,
    color: color,
  }))

  const figmaContent = JSON.stringify({ colors: figmaColors }, null, 2)
  const dataStr = `data:text/json;charset=utf-8,${encodeURIComponent(figmaContent)}`
  downloadFile(dataStr, 'figma-colors.json')
}

const downloadFile = (dataStr: string, filename: string) => {
  const a = document.createElement('a')
  a.setAttribute('href', dataStr)
  a.setAttribute('download', filename)
  a.click()
  a.remove()
}
