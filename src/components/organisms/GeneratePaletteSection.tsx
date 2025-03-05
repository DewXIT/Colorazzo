import ColorInput from '@/components/atoms/ColorInput'
import GeneratePaletteButton from '@/components/atoms/GeneratePaletteButton'
import PalettePreview from '@/components/molecules/PalettePreview'
import { ColorObjectType } from '@/types/types'
import { Card } from '@mui/material'
import React from 'react'

interface IGeneratePaletteButtonProps {
  baseColor: string
  palette: ColorObjectType[]
  onChange: (color: string) => void
  onClick: () => void
}
const GeneratePaletteSection = ({
  baseColor,
  palette,
  onChange,
  onClick,
}: IGeneratePaletteButtonProps) => {
  return (
    <section className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8">
      <Card
        className="w-full md:max-w-[400px] p-16 pt-8 pb-4 shadow-lg "
        style={{
          backgroundColor: '#1e1e1e',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
        }}
      >
        <ColorInput baseColor={baseColor} onChange={onChange} />
        <div className="mt-6">
          <GeneratePaletteButton onClick={onClick} />
        </div>
      </Card>
      <Card
        className="w-full sm:w-auto p-6 shadow-lg"
        style={{
          backgroundColor: '#1e1e1e',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
        }}
      >
        <PalettePreview palette={palette} />
      </Card>
    </section>
  )
}

export default GeneratePaletteSection
