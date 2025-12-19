import React, { useState } from 'react'

interface IGeneratePaletteButtonProps {
  onClick: () => void
}

const GeneratePaletteButton: React.FC<IGeneratePaletteButtonProps> = ({
  onClick,
}) => {
  const [isGenerating, setIsGenerating] = useState(false)

  const handleClick = () => {
    setIsGenerating(true)
    onClick()
    setTimeout(() => setIsGenerating(false), 600)
  }

  return (
    <button
      onClick={handleClick}
      disabled={isGenerating}
      className="relative w-full px-6 py-4 text-base font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-xl shadow-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/40 focus:outline-none focus:ring-4 focus:ring-indigo-400/50 disabled:opacity-70 disabled:cursor-not-allowed group overflow-hidden"
    >
      {/* Shimmer Effect */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <span className="relative flex items-center justify-center gap-2">
        {isGenerating ? (
          <>
            <svg
              className="w-5 h-5 animate-spin"
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
            Generating...
          </>
        ) : (
          <>
            <svg
              className="w-5 h-5 transition-transform group-hover:rotate-180 duration-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
              />
            </svg>
            Generate Palette
            <kbd className="hidden sm:inline-block ml-2 px-2 py-1 text-xs font-mono bg-white/20 rounded">
              Ctrl+G
            </kbd>
          </>
        )}
      </span>
    </button>
  )
}

export default GeneratePaletteButton
