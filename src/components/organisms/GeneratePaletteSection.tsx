import ColorInput from '@/components/atoms/ColorInput'
import GeneratePaletteButton from '@/components/atoms/GeneratePaletteButton'
import PalettePreview from '@/components/molecules/PalettePreview'
import { ColorObjectType } from '@/types/types'
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
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Color Input Panel */}
      <div className="lg:col-span-4 w-full">
        <div className="sticky top-8 p-8 rounded-3xl bg-white shadow-xl border-2 border-gray-200 hover:shadow-2xl transition-all duration-300">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
              Base Color
            </h3>
            <div className="px-3 py-1.5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs font-bold rounded-full shadow-lg">
              LIVE
            </div>
          </div>
          <div className="space-y-6">
            <ColorInput baseColor={baseColor} onChange={onChange} />

            {/* Quick Stats */}
            <div className="pt-4 border-t border-gray-100">
              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="p-3 bg-gray-50 rounded-xl">
                  <div className="text-2xl font-bold text-gray-900">
                    {palette.length}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Shades</div>
                </div>
                <div className="p-3 bg-indigo-50 rounded-xl">
                  <div className="text-2xl font-bold text-indigo-600">
                    {baseColor.toUpperCase()}
                  </div>
                  <div className="text-xs text-indigo-600/70 mt-1">Active</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Palette Display Panel */}
      <div className="lg:col-span-8 w-full">
        <div className="p-8 rounded-3xl bg-white shadow-xl border-2 border-gray-200 hover:shadow-2xl transition-all duration-300">
          <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
            <h3 className="text-xl font-bold text-gray-900">
              Generated Palette
            </h3>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-lg border border-gray-200">
              <svg
                className="w-4 h-4 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                />
              </svg>
              <span className="text-sm font-medium text-gray-600">
                Click to copy
              </span>
            </div>
          </div>
          <PalettePreview palette={palette} />
        </div>
      </div>
    </section>
  )
}

export default GeneratePaletteSection
