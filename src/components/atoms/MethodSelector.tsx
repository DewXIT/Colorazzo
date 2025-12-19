import React, { useState, useRef, useEffect } from 'react'
import { Method } from '@/enums/enums'
import { Palette, Rainbow, FlaskConical } from 'lucide-react'

interface MethodSelectorProps {
  value: Method
  onChange: (method: Method) => void
}

const methodInfo = {
  [Method.Default]: {
    label: 'Default',
    description: 'Unique algorithm',
    Icon: Palette,
  },
  [Method.HSL]: {
    label: 'HSL',
    description: 'Hue, Saturation, Lightness',
    Icon: Rainbow,
  },
  [Method.LAB]: {
    label: 'LAB',
    description: 'Perceptually uniform',
    Icon: FlaskConical,
  },
}

const MethodSelector = ({ value, onChange }: MethodSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const handleSelect = (method: Method) => {
    onChange(method)
    setIsOpen(false)
  }

  const currentMethod = methodInfo[value]

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-700 bg-white border-2 border-gray-200 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-indigo-400/20"
      >
        <currentMethod.Icon className="w-4 h-4 text-gray-600" />
        {currentMethod.label}
        <svg
          className={`w-4 h-4 text-gray-400 transition-transform duration-200 ml-1 ${isOpen ? 'rotate-180' : ''}`}
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

      {isOpen && (
        <div className="absolute right-0 mt-2 w-full min-w-[280px] bg-white border-2 border-gray-200 rounded-xl shadow-2xl z-10 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
          {Object.entries(methodInfo).map(([methodKey, info]) => (
            <button
              key={methodKey}
              onClick={() => handleSelect(methodKey as Method)}
              className={`w-full px-4 py-3.5 text-left transition-colors flex items-center gap-3 ${
                value === methodKey
                  ? 'bg-indigo-50 text-indigo-900 border-l-4 border-indigo-600'
                  : 'hover:bg-gray-50 text-gray-700 border-l-4 border-transparent'
              }`}
            >
              <info.Icon className="w-5 h-5" />
              <div className="flex-1">
                <div className="font-semibold">{info.label}</div>
                <div className="text-xs text-gray-500">{info.description}</div>
              </div>
              {value === methodKey && (
                <svg
                  className="w-5 h-5 text-indigo-600"
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
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default MethodSelector
