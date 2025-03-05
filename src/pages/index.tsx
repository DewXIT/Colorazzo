import { generateColorPalette } from '@/utils/colorUtils'
import { useState } from 'react'
import { Container, SelectChangeEvent } from '@mui/material'
import GeneratePaletteSection from '@/components/organisms/GeneratePaletteSection'
import HeadSection from '@/components/organisms/HeadSection'
import { ColorObjectType } from '@/types/types'
import { Method } from '@/enums/enums'

const Home = () => {
  const [method, setMethod] = useState<Method>(Method.Default)
  const [baseColor, setBaseColor] = useState<string>('#3498db')
  const [palette, setPalette] = useState<ColorObjectType[]>(() =>
    generateColorPalette(baseColor),
  )

  const handleGeneratePalette = () => {
    const newPalette = generateColorPalette(baseColor)
    setPalette(newPalette)
  }

  const handleMethodChange = (event: SelectChangeEvent<Method>) => {
    const selectedMethod = event.target.value as Method
    setMethod(selectedMethod)
    setPalette(generateColorPalette(baseColor, selectedMethod))
  }

  return (
    <Container maxWidth="xl" className="flex flex-col pt-10 pb-10 sm:pb-0">
      <HeadSection
        palette={palette}
        method={method}
        onChange={handleMethodChange}
      />
      <GeneratePaletteSection
        baseColor={baseColor}
        palette={palette}
        onChange={setBaseColor}
        onClick={handleGeneratePalette}
      />
    </Container>
  )
}

export default Home
