import ExportButton from '@/components/atoms/ExportButton'
import { Method } from '@/enums/enums'
import { ColorObjectType } from '@/types/types'
import { FormControl, Select, MenuItem, SelectChangeEvent } from '@mui/material'
import React from 'react'

interface IOptionsProps {
  palette: ColorObjectType[]
  method: Method
  onChange: (event: SelectChangeEvent<Method>) => void
}

const Options: React.FC<IOptionsProps> = ({ method, palette, onChange }) => {
  return (
    <div className="flex flex-row gap-4 items-center">
      <FormControl
        size="small"
        className="bg-white rounded-md shadow-md min-w-[160px]"
      >
        <Select
          labelId="method-select-label"
          value={method}
          onChange={onChange}
          displayEmpty
          className="rounded-md"
        >
          <MenuItem value={Method.Default}>Default</MenuItem>
          <MenuItem value={Method.HSL}>HSL</MenuItem>
          <MenuItem value={Method.LAB}>LAB</MenuItem>
        </Select>
      </FormControl>
      <ExportButton palette={palette} />
    </div>
  )
}

export default Options
