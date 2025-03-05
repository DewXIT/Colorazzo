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

const HeadSection = ({ method, palette, onChange }: IHeadSectionProps) => {
  return (
    <section className="w-full flex justify-end items-center mb-8 gap-8">
      <Options method={method} palette={palette} onChange={onChange} />
    </section>
  )
}

export default HeadSection
