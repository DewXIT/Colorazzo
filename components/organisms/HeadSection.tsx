import Options from '@/components/molecules/Options'
import { Method } from '@/enums/enums'
import { ColorObjectType } from '@/types/types'
import React from 'react'

interface IHeadSectionProps {
  palette: ColorObjectType[]
  method: Method
  onChange: (method: Method) => void
  onOpenCodeSnippets: () => void
}

const HeadSection = ({
  method,
  palette,
  onChange,
  onOpenCodeSnippets,
}: IHeadSectionProps) => {
  return (
    <section className="w-full flex justify-between items-center mb-8 gap-8 flex-wrap">
      <button
        onClick={onOpenCodeSnippets}
        className="px-5 py-2.5 text-sm font-semibold text-indigo-600 bg-indigo-50 border border-indigo-200 rounded-xl hover:bg-indigo-100 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-indigo-400/20 flex items-center gap-2 group"
      >
        <svg
          className="w-5 h-5 transition-transform group-hover:rotate-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
        View Code
      </button>
      <Options method={method} palette={palette} onChange={onChange} />
    </section>
  )
}

export default HeadSection
