import ExportButton from '@/components/atoms/ExportButton'
import { Method } from '@/enums/enums'
import { ColorObjectType } from '@/types/types'
import {
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
  InputLabel,
} from '@mui/material'
import React from 'react'

interface IOptionsProps {
  palette: ColorObjectType[]
  method: Method
  onChange: (event: SelectChangeEvent<Method>) => void
}

const Options = ({ method, palette, onChange }: IOptionsProps) => {
  return (
    <div className="flex flex-row gap-4 items-center">
      <FormControl
        size="small"
        className="bg-transparent rounded-md shadow-md min-w-[160px]"
      >
        <InputLabel id="method-select-label" sx={{ color: '#0b5891' }}>
          Method
        </InputLabel>
        <Select
          labelId="method-select-label"
          id="simple-select"
          label="Method"
          value={method}
          onChange={onChange}
          className="rounded-md"
          sx={{
            '& .MuiSelect-select': {
              color: '#0b5891',
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#0b5891',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#0b5891',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#0b5891',
            },
          }}
          MenuProps={{
            PaperProps: {
              sx: {
                backgroundColor: '#121212',
                borderColor: '#0b5891',
                border: 1,
                '& .MuiMenuItem-root:hover': {
                  backgroundColor: '#0b5891',
                },
                '& .MuiMenuItem-root': {
                  color: '#3498db',
                },
              },
            },
          }}
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
