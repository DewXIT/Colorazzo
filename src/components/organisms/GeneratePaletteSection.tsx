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
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <Card
        className="lg:col-span-5 w-full p-6 sm:p-8 rounded-2xl"
        style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}
      >
        <div className="space-y-6">
          <ColorInput baseColor={baseColor} onChange={onChange} />
          <div className="pt-2">
            <GeneratePaletteButton onClick={onClick} />
          </div>
        </div>
      </Card>
      <Card
        className="lg:col-span-7 w-full p-6 sm:p-8 rounded-2xl"
        style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}
      >
        <PalettePreview palette={palette} />
      </Card>
    </section>
  )
}

export default GeneratePaletteSection
