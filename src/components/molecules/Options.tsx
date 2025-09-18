import { Method } from '@/enums/enums'
import { ColorObjectType } from '@/types/types'
import {
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
  InputLabel,
  Button,
} from '@mui/material'
import React from 'react'

interface IOptionsProps {
  palette: ColorObjectType[]
  method: Method
  onChange: (event: SelectChangeEvent<Method>) => void
}

const controlHeight = 40

const Options = ({ method, palette, onChange }: IOptionsProps) => {
  const exportPalette = () => {
    const dataStr = `data:text/json;charset=utf-8,${encodeURIComponent(
      JSON.stringify(palette, null, 2),
    )}`
    const a = document.createElement('a')
    a.setAttribute('href', dataStr)
    a.setAttribute('download', 'palette.json')
    a.click()
    a.remove()
  }

  return (
    <div className="flex flex-row gap-3 items-center">
      <FormControl size="small" sx={{ minWidth: 180, height: controlHeight }}>
        <InputLabel id="method-select-label" sx={{ fontFamily: 'inherit' }}>
          Method
        </InputLabel>
        <Select
          labelId="method-select-label"
          id="simple-select"
          label="Method"
          value={method}
          onChange={onChange}
          sx={{
            height: controlHeight,
            borderRadius: 1.5,
            fontFamily: 'inherit',
            '.MuiSelect-select': {
              display: 'flex',
              alignItems: 'center',
              height: controlHeight,
              paddingTop: 0,
              paddingBottom: 0,
              fontFamily: 'inherit',
            },
            '.MuiOutlinedInput-input': {
              paddingTop: 0,
              paddingBottom: 0,
              fontFamily: 'inherit',
            },
          }}
        >
          <MenuItem value={Method.Default}>Default</MenuItem>
          <MenuItem value={Method.HSL}>HSL</MenuItem>
          <MenuItem value={Method.LAB}>LAB</MenuItem>
        </Select>
      </FormControl>
      <Button
        onClick={exportPalette}
        variant="outlined"
        color="inherit"
        sx={{ height: controlHeight, borderRadius: 1.5, px: 2.5, fontFamily: 'inherit' }}
      >
        Export Palette
      </Button>
    </div>
  )
}

export default Options
