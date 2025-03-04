import Options from '@/components/molecules/Options'
import { Method } from '@/enums/enums'
import { ColorObjectType } from '@/types/types'
import { Typography, SelectChangeEvent } from '@mui/material'
import React from 'react'

interface IHeadSectionProps {
  palette: ColorObjectType[]
  method: Method
  onChange: (event: SelectChangeEvent<Method>) => void
}

const HeadSection: React.FC<IHeadSectionProps> = ({
  method,
  palette,
  onChange,
}) => {
  return (
    <section className="flex flex-col sm:flex-row justify-between items-center mb-16 gap-8">
      <Typography
        variant="h3"
        component="h1"
        className="text-center sm:text-left font-bold text-gray-200"
      >
        Color Palette Generator
      </Typography>
      <Options method={method} palette={palette} onChange={onChange} />
    </section>
  )
}

export default HeadSection
