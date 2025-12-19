import React, { useState } from 'react'

interface PalettePreviewProps {
  palette: {
    shade: string
    color: string
  }[]
}

const PalettePreview = ({ palette }: PalettePreviewProps) => {
  const [copied, setCopied] = useState<string | null>(null)
  const [hoveredShade, setHoveredShade] = useState<string | null>(null)

  const handleCopy = async (shade: string, color: string) => {
    try {
      await navigator.clipboard.writeText(color)
      setCopied(shade)
      setTimeout(() => setCopied(null), 1500)
    } catch {}
  }

  const getContrastColor = (hexColor: string) => {
    const hex = hexColor.replace('#', '')
    const r = parseInt(hex.substring(0, 2), 16)
    const g = parseInt(hex.substring(2, 4), 16)
    const b = parseInt(hex.substring(4, 6), 16)
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
    return luminance > 0.5 ? '#000000' : '#ffffff'
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-2">
      {palette.map(({ shade, color }, index) => (
        <div
          key={shade}
          className="group"
          style={{
            animation: `fadeInUp 0.3s ease-out ${index * 0.05}s both`,
          }}
        >
          <button
            type="button"
            onClick={() => handleCopy(shade, color)}
            onMouseEnter={() => setHoveredShade(shade)}
            onMouseLeave={() => setHoveredShade(null)}
            className="w-full text-left relative"
            aria-label={`Copy ${color} for shade ${shade}`}
          >
            {/* Color Card */}
            <div
              className="relative rounded-2xl border-2 border-gray-200 overflow-hidden aspect-[5/6] transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:shadow-2xl group-hover:border-gray-300 group-active:scale-95"
              style={{
                backgroundColor: color,
                backgroundImage:
                  'radial-gradient(ellipse at top, rgba(255,255,255,0.2), transparent 60%)',
              }}
            >
              {/* Hover Overlay */}
              <div
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 ${
                  hoveredShade === shade || copied === shade
                    ? 'opacity-100'
                    : 'opacity-0'
                }`}
                style={{
                  backgroundColor: `${color}dd`,
                  backdropFilter: 'blur(4px)',
                }}
              >
                {copied === shade ? (
                  <div className="flex flex-col items-center gap-2">
                    <svg
                      className="w-8 h-8 animate-in zoom-in duration-200"
                      fill="none"
                      stroke={getContrastColor(color)}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span
                      className="text-xs font-semibold"
                      style={{ color: getContrastColor(color) }}
                    >
                      Copied!
                    </span>
                  </div>
                ) : (
                  <svg
                    className="w-7 h-7 animate-in zoom-in duration-150"
                    fill="none"
                    stroke={getContrastColor(color)}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                )}
              </div>

              {/* Gradient Effect on Hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(135deg, transparent 0%, ${color}33 100%)`,
                }}
              />
            </div>

            {/* Label & Color Code - Fixed Height */}
            <div className="mt-3 px-1 h-12">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-900 font-semibold tracking-wide">
                  {shade}
                </span>
                <span
                  className={`text-xs font-mono transition-colors duration-200 ${
                    copied === shade
                      ? 'text-emerald-600 font-semibold'
                      : 'text-gray-500 group-hover:text-gray-700'
                  }`}
                >
                  {color}
                </span>
              </div>

              {/* Status - Fixed Height */}
              <div className="mt-1 h-4 flex items-center">
                {copied === shade ? (
                  <span className="text-xs text-emerald-600 font-medium animate-in fade-in duration-200">
                    ✓ Copied to clipboard
                  </span>
                ) : hoveredShade === shade ? (
                  <span className="text-xs text-gray-400 animate-in fade-in duration-200">
                    Click to copy
                  </span>
                ) : null}
              </div>
            </div>
          </button>
        </div>
      ))}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}

export default PalettePreview
