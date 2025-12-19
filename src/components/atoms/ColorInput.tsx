import React, { useState } from 'react'
import ColorPicker from 'react-best-gradient-color-picker'

interface ColorInputProps {
  baseColor: string
  onChange: (color: string) => void
}

const ColorInput = ({ baseColor, onChange }: ColorInputProps) => {
  const [copied, setCopied] = useState(false)

  const handleCopyColor = async () => {
    try {
      await navigator.clipboard.writeText(baseColor)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {}
  }

  return (
    <div className="space-y-5" data-testid="color-input">
      {/* Large Color Preview */}
      <button
        onClick={handleCopyColor}
        className="relative group w-full h-24 rounded-2xl border-2 border-gray-200 shadow-sm transition-all duration-200 hover:shadow-lg hover:border-gray-300 hover:scale-[1.02] overflow-hidden"
        style={{
          backgroundColor: baseColor,
          backgroundImage:
            'radial-gradient(ellipse at top left, rgba(255,255,255,0.3), transparent 50%), radial-gradient(ellipse at bottom right, rgba(0,0,0,0.1), transparent 50%)',
        }}
      >
        {/* Copy Overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
          <div className="text-white text-center">
            {copied ? (
              <>
                <svg
                  className="w-8 h-8 mx-auto mb-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-sm font-semibold">Copied!</span>
              </>
            ) : (
              <>
                <svg
                  className="w-8 h-8 mx-auto mb-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-sm font-semibold">Click to copy</span>
              </>
            )}
          </div>
        </div>

        {/* Color Value */}
        <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
          <div className="text-white text-center">
            <div className="text-2xl font-mono font-bold tracking-wider">
              {baseColor}
            </div>
          </div>
        </div>
      </button>

      {/* Color Picker */}
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
              color: '#111827',
            },
          }}
        />
      </div>

      {/* Quick Color Presets */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-semibold text-gray-700">Quick Colors</p>
          <button
            onClick={() => {
              const randomColor = `#${Math.floor(Math.random() * 16777215)
                .toString(16)
                .padStart(6, '0')}`
              onChange(randomColor)
            }}
            className="text-xs font-medium text-indigo-600 hover:text-indigo-700 flex items-center gap-1"
          >
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            Random
          </button>
        </div>
        <div className="grid grid-cols-8 gap-2">
          {[
            '#4f46e5', // Indigo
            '#ef4444', // Red
            '#f59e0b', // Amber
            '#10b981', // Emerald
            '#3b82f6', // Blue
            '#8b5cf6', // Purple
            '#ec4899', // Pink
            '#06b6d4', // Cyan
          ].map((color) => (
            <button
              key={color}
              onClick={() => onChange(color)}
              className={`aspect-square rounded-lg border-2 transition-all duration-200 hover:scale-110 ${
                baseColor.toLowerCase() === color.toLowerCase()
                  ? 'border-indigo-600 ring-2 ring-indigo-600 ring-offset-2'
                  : 'border-gray-200 hover:border-gray-400'
              }`}
              style={{ backgroundColor: color }}
              aria-label={`Select ${color}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ColorInput
