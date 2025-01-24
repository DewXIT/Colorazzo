import ColorInput from '@/components/ColorInput'
import PalettePreview from '@/components/PalettePreview'
import { generateColorPalette } from '@/utils/colorUtils'
import { useState } from 'react'
import { Button, Card, Container, Typography } from '@mui/material'
import ExportButton from '@/components/ExportButton'
const Home = () => {
  const [baseColor, setBaseColor] = useState<string>('#3498db')
  const [palette, setPalette] = useState<
    {
      shade: string
      color: string
    }[]
  >(() => generateColorPalette('#3498db'))

  const handleGeneratePalette = () => {
    const newPalette = generateColorPalette(baseColor)
    setPalette(newPalette)
  }

  return (
    <Container maxWidth="xl" className="flex flex-col pt-32 pb-32 sm:pb-0">
      <Container
        maxWidth="xl"
        className="flex flex-col sm:flex-row justify-between items-center mb-16 gap-8"
      >
        <Typography
          variant="h3"
          component="h1"
          style={{ fontWeight: 'bold', color: '#e0e0e0' }}
          className="text-center sm:text-left"
        >
          Color Palette Generator
        </Typography>
        <ExportButton palette={palette} />
      </Container>

      <Container
        maxWidth="xl"
        className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8"
        style={{ padding: 0 }}
      >
        <Card
          style={{
            maxWidth: 400,
            padding: '1.5rem',
            backgroundColor: '#1e1e1e',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
            flex: 1,
          }}
          className="w-full sm:w-auto"
        >
          <ColorInput baseColor={baseColor} onChange={setBaseColor} />
          <Button
            onClick={handleGeneratePalette}
            variant="contained"
            style={{
              marginTop: '1.5rem',
              backgroundColor: '#bb86fc',
              color: '#121212',
            }}
            fullWidth
          >
            Generate Palette
          </Button>
        </Card>

        <Card
          style={{
            padding: '1.5rem',
            backgroundColor: '#1e1e1e',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
            flex: 1,
          }}
          className="w-full sm:w-auto"
        >
          <PalettePreview palette={palette} />
        </Card>
      </Container>
    </Container>
  )
}

export default Home
