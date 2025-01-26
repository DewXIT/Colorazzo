import React from 'react'
import ColorPicker from 'react-best-gradient-color-picker'

interface ColorInputProps {
  baseColor: string
  onChange: (color: string) => void
}

const ColorInput = ({ baseColor, onChange }: ColorInputProps) => {
  return (
    <div className="flex w-full justify-center items-center">
      <ColorPicker
        value={baseColor}
        onChange={onChange}
        hideGradientType
        hideGradientAngle
        hideGradientControls
        hideGradientStop
        hideAdvancedSliders
        hideControls
        hideEyeDrop
        hideInputType
        hideOpacity
        hidePresets
        disableDarkMode
        style={{
          body: {
            width: '100%',
            backgroundColor: 'transparent',
          },
          rbgcpCanvasWrapper: {
            display: 'flex',
            width: '100%',
          },
          rbgcpInput: {
            color: 'rgb(190, 190, 190)',
          },
        }}
      />
    </div>
  )
}

export default ColorInput
