'use client'

import React, { useState } from 'react'
import { ColorObjectType } from '@/types/types'
import { Palette, Waves, Bird, Bot, FileCode, Package, Lightbulb } from 'lucide-react'

interface CodeSnippetsPanelProps {
  palette: ColorObjectType[]
  isOpen: boolean
  onClose: () => void
}

type Language = 'css' | 'tailwind' | 'swift' | 'kotlin' | 'xml' | 'json'

const CodeSnippetsPanel = ({
  palette,
  isOpen,
  onClose,
}: CodeSnippetsPanelProps) => {
  const [selectedLang, setSelectedLang] = useState<Language>('css')
  const [copied, setCopied] = useState(false)

  const generateSnippet = (lang: Language): string => {
    switch (lang) {
      case 'css':
        const cssVars = palette
          .map(({ shade, color }) => `  --color-${shade}: ${color};`)
          .join('\n')
        return `:root {\n${cssVars}\n}`

      case 'tailwind':
        const colors = palette.reduce(
          (acc, { shade, color }) => {
            acc[shade] = color
            return acc
          },
          {} as Record<string, string>,
        )
        return `module.exports = {
  theme: {
    extend: {
      colors: {
        custom: ${JSON.stringify(colors, null, 8).replace(/\n/g, '\n        ')}
      }
    }
  }
}`

      case 'swift':
        const swiftColors = palette
          .map(({ shade, color }) => {
            const hex = color.replace('#', '')
            const r = parseInt(hex.substring(0, 2), 16) / 255
            const g = parseInt(hex.substring(2, 4), 16) / 255
            const b = parseInt(hex.substring(4, 6), 16) / 255
            return `    static let ${shade} = Color(red: ${r.toFixed(3)}, green: ${g.toFixed(3)}, blue: ${b.toFixed(3)})`
          })
          .join('\n')
        return `import SwiftUI

extension Color {
${swiftColors}
}`

      case 'kotlin':
        const kotlinColors = palette
          .map(({ shade, color }) => {
            const colorValue = color.replace('#', '0xFF')
            return `    val ${shade} = Color(${colorValue})`
          })
          .join('\n')
        return `package com.yourapp.ui.theme

import androidx.compose.ui.graphics.Color

object AppColors {
${kotlinColors}
}`

      case 'xml':
        const xmlColors = palette
          .map(
            ({ shade, color }) =>
              `    <color name="color_${shade}">${color}</color>`,
          )
          .join('\n')
        return `<?xml version="1.0" encoding="utf-8"?>
<resources>
${xmlColors}
</resources>`

      case 'json':
        return JSON.stringify(palette, null, 2)
    }
  }

  const handleCopy = async () => {
    const snippet = generateSnippet(selectedLang)
    await navigator.clipboard.writeText(snippet)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const languages = [
    { id: 'css' as Language, label: 'CSS', Icon: Palette },
    { id: 'tailwind' as Language, label: 'Tailwind', Icon: Waves },
    { id: 'swift' as Language, label: 'Swift', Icon: Bird },
    { id: 'kotlin' as Language, label: 'Kotlin', Icon: Bot },
    { id: 'xml' as Language, label: 'XML', Icon: FileCode },
    { id: 'json' as Language, label: 'JSON', Icon: Package },
  ]

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-in zoom-in-95 duration-200 max-h-[80vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="border-b border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
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
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Code Snippets
                </h2>
                <p className="text-sm text-gray-500 mt-0.5">
                  Ready to use in your project
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Language Tabs */}
          <div className="flex gap-2 mt-4 flex-wrap">
            {languages.map((lang) => (
              <button
                key={lang.id}
                onClick={() => setSelectedLang(lang.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                  selectedLang === lang.id
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <lang.Icon className="w-4 h-4" />
                {lang.label}
              </button>
            ))}
          </div>
        </div>

        {/* Code Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="relative">
            <pre className="bg-gray-900 text-gray-100 p-6 rounded-xl overflow-x-auto text-sm font-mono leading-relaxed">
              <code>{generateSnippet(selectedLang)}</code>
            </pre>
            <button
              onClick={handleCopy}
              className={`absolute top-4 right-4 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                copied
                  ? 'bg-emerald-500 text-white'
                  : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
              }`}
            >
              {copied ? (
                <>
                  <svg
                    className="w-4 h-4 inline-block mr-2"
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
                  Copied!
                </>
              ) : (
                <>
                  <svg
                    className="w-4 h-4 inline-block mr-2"
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
                  Copy
                </>
              )}
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 px-6 py-4 bg-gray-50">
          <p className="text-xs text-gray-500 text-center flex items-center justify-center gap-2">
            <Lightbulb className="w-3.5 h-3.5" />
            Tip: Copy the snippet and paste it directly into your project
          </p>
        </div>
      </div>
    </div>
  )
}

export default CodeSnippetsPanel
