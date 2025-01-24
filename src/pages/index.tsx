import ColorInput from '@/components/ColorInput'
import PalettePreview from '@/components/PalettePreview'
import { generateColorPalette } from '@/utils/colorUtils'
import { useState } from 'react'
import { Button, Card, Container, Typography } from '@mui/material'
import Navbar from '@/layout/Navbar'
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
    <div
      style={{
        backgroundColor: '#121212',
        color: '#e0e0e0',
      }}
      className="min-h-screen w-full"
    >
      <Navbar />
      <Container maxWidth="xl" className="py-16">
        <Container
          maxWidth="xl"
          className="flex flex-row justify-between items-center mb-16"
        >
          {/* Header */}
          <Typography
            variant="h3"
            component="h1"
            style={{ fontWeight: 'bold', color: '#e0e0e0' }}
          >
            Color Palette Generator
          </Typography>
          <ExportButton palette={palette} />
        </Container>

        <Container
          maxWidth="xl"
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            gap: '2rem',
            padding: 0,
          }}
        >
          {/* Color Input Section */}
          <Card
            style={{
              maxWidth: 400,
              padding: '1.5rem',
              backgroundColor: '#1e1e1e',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
              flex: 1, // pozwala karcie rozciągnąć się w poziomie
            }}
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

          {/* Palette Preview Section */}
          <Card
            style={{
              padding: '1.5rem',
              backgroundColor: '#1e1e1e',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
              flex: 1, // pozwala karcie rozciągnąć się w poziomie
            }}
          >
            <PalettePreview palette={palette} />
          </Card>
        </Container>
      </Container>
      {/* Footer */}
      <footer
        style={{
          backgroundColor: '#1e1e1e',
          padding: '1rem',
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          textAlign: 'center',
        }}
      >
        <Typography variant="body2" style={{ color: '#e0e0e0' }}>
          Created by <strong>DewXIT Marcin Falkowski</strong> 2025
        </Typography>
      </footer>
    </div>
  )
}

export default Home
