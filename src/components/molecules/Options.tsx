import { Method } from '@/enums/enums'
import { ColorObjectType } from '@/types/types'
import {
  exportToJSON,
  exportToCSS,
  exportToTailwind,
  exportToSCSS,
  exportToSwift,
  exportToKotlin,
  exportToXML,
  exportToFigma,
} from '@/utils/exportUtils'
import React, { useState, useEffect, useRef } from 'react'
import { useToast } from '@/contexts/ToastContext'
import MethodSelector from '@/components/atoms/MethodSelector'
import { Package, Palette, Waves, Gem, Bird, Bot, FileCode } from 'lucide-react'

interface IOptionsProps {
  palette: ColorObjectType[]
  method: Method
  onChange: (method: Method) => void
}

const Options = ({ method, palette, onChange }: IOptionsProps) => {
  const [showExportMenu, setShowExportMenu] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const { showToast } = useToast()

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowExportMenu(false)
      }
    }

    if (showExportMenu) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showExportMenu])

  const handleExport = (
    format:
      | 'json'
      | 'css'
      | 'tailwind'
      | 'scss'
      | 'swift'
      | 'kotlin'
      | 'xml'
      | 'figma',
  ) => {
    const formatLabels = {
      json: 'JSON',
      css: 'CSS Variables',
      tailwind: 'Tailwind Config',
      scss: 'SCSS',
      swift: 'Swift',
      kotlin: 'Kotlin',
      xml: 'XML',
      figma: 'Figma',
    }

    switch (format) {
      case 'json':
        exportToJSON(palette)
        break
      case 'css':
        exportToCSS(palette)
        break
      case 'tailwind':
        exportToTailwind(palette)
        break
      case 'scss':
        exportToSCSS(palette)
        break
      case 'swift':
        exportToSwift(palette)
        break
      case 'kotlin':
        exportToKotlin(palette)
        break
      case 'xml':
        exportToXML(palette)
        break
      case 'figma':
        exportToFigma(palette)
        break
    }

    showToast(`Exported as ${formatLabels[format]}!`, 'success')
    setShowExportMenu(false)
  }

  return (
    <div className="flex flex-row gap-3 items-center">
      <MethodSelector value={method} onChange={onChange} />

      <div className="relative" ref={menuRef}>
        <button
          onClick={() => setShowExportMenu(!showExportMenu)}
          className="px-4 py-2.5 text-sm font-medium text-gray-700 bg-white border-2 border-gray-200 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-indigo-400/20 flex items-center gap-2"
        >
          Export
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {showExportMenu && (
          <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-xl shadow-2xl z-10 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="py-1">
              <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Web
              </div>
              <button
                onClick={() => handleExport('json')}
                className="w-full px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors flex items-center gap-3"
              >
                <Package className="w-4 h-4" />
                JSON
              </button>
              <button
                onClick={() => handleExport('css')}
                className="w-full px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors flex items-center gap-3"
              >
                <Palette className="w-4 h-4" />
                CSS Variables
              </button>
              <button
                onClick={() => handleExport('tailwind')}
                className="w-full px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors flex items-center gap-3"
              >
                <Waves className="w-4 h-4" />
                Tailwind Config
              </button>
              <button
                onClick={() => handleExport('scss')}
                className="w-full px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors flex items-center gap-3"
              >
                <Gem className="w-4 h-4" />
                SCSS
              </button>
            </div>

            <div className="border-t border-gray-100 py-1">
              <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Mobile
              </div>
              <button
                onClick={() => handleExport('swift')}
                className="w-full px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors flex items-center gap-3"
              >
                <Bird className="w-4 h-4" />
                Swift (iOS)
              </button>
              <button
                onClick={() => handleExport('kotlin')}
                className="w-full px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors flex items-center gap-3"
              >
                <Bot className="w-4 h-4" />
                Kotlin (Android)
              </button>
              <button
                onClick={() => handleExport('xml')}
                className="w-full px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors flex items-center gap-3"
              >
                <FileCode className="w-4 h-4" />
                XML (Android)
              </button>
            </div>

            <div className="border-t border-gray-100 py-1">
              <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Design
              </div>
              <button
                onClick={() => handleExport('figma')}
                className="w-full px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors flex items-center gap-3"
              >
                <Palette className="w-4 h-4" />
                Figma
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Options
