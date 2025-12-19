'use client'

import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { Method } from '@/enums/enums'
import {
  exportToJSON,
  exportToCSS,
  exportToTailwind,
  exportToSCSS,
} from '@/utils/exportUtils'
import { ColorObjectType } from '@/types/types'

interface Command {
  id: string
  label: string
  shortcut?: string
  category: string
  action: () => void
}

interface CommandPaletteProps {
  isOpen: boolean
  onClose: () => void
  palette: ColorObjectType[]
  onMethodChange: (method: Method) => void
  onGeneratePalette: () => void
}

const CommandPalette = ({
  isOpen,
  onClose,
  palette,
  onMethodChange,
  onGeneratePalette,
}: CommandPaletteProps) => {
  const [search, setSearch] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)

  const commands: Command[] = useMemo(
    () => [
      {
        id: 'generate',
        label: 'Generate New Palette',
        shortcut: 'Ctrl+G',
        category: 'Actions',
        action: () => {
          onGeneratePalette()
          onClose()
        },
      },
      {
        id: 'method-default',
        label: 'Switch to Default Method',
        category: 'Color Method',
        action: () => {
          onMethodChange(Method.Default)
          onClose()
        },
      },
      {
        id: 'method-hsl',
        label: 'Switch to HSL Method',
        category: 'Color Method',
        action: () => {
          onMethodChange(Method.HSL)
          onClose()
        },
      },
      {
        id: 'method-lab',
        label: 'Switch to LAB Method',
        category: 'Color Method',
        action: () => {
          onMethodChange(Method.LAB)
          onClose()
        },
      },
      {
        id: 'export-json',
        label: 'Export as JSON',
        shortcut: 'Shift+J',
        category: 'Export',
        action: () => {
          exportToJSON(palette)
          onClose()
        },
      },
      {
        id: 'export-css',
        label: 'Export as CSS',
        shortcut: 'Shift+C',
        category: 'Export',
        action: () => {
          exportToCSS(palette)
          onClose()
        },
      },
      {
        id: 'export-tailwind',
        label: 'Export as Tailwind',
        shortcut: 'Shift+T',
        category: 'Export',
        action: () => {
          exportToTailwind(palette)
          onClose()
        },
      },
      {
        id: 'export-scss',
        label: 'Export as SCSS',
        shortcut: 'Shift+S',
        category: 'Export',
        action: () => {
          exportToSCSS(palette)
          onClose()
        },
      },
    ],
    [palette, onMethodChange, onGeneratePalette, onClose],
  )

  const filteredCommands = useMemo(() => {
    if (!search) return commands
    const lowerSearch = search.toLowerCase()
    return commands.filter(
      (cmd) =>
        cmd.label.toLowerCase().includes(lowerSearch) ||
        cmd.category.toLowerCase().includes(lowerSearch),
    )
  }, [commands, search])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setSelectedIndex((prev) =>
          prev < filteredCommands.length - 1 ? prev + 1 : prev,
        )
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0))
      } else if (e.key === 'Enter') {
        e.preventDefault()
        filteredCommands[selectedIndex]?.action()
      } else if (e.key === 'Escape') {
        onClose()
      }
    },
    [filteredCommands, selectedIndex, onClose],
  )

  useEffect(() => {
    setSelectedIndex(0)
  }, [search])

  useEffect(() => {
    if (!isOpen) {
      setSearch('')
      setSelectedIndex(0)
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input */}
        <div className="border-b border-gray-200 p-4">
          <div className="flex items-center gap-3">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a command or search..."
              className="flex-1 text-lg bg-transparent border-none outline-none text-gray-900 placeholder-gray-400"
              autoFocus
            />
            <kbd className="hidden sm:inline-block px-2 py-1 text-xs font-semibold text-gray-600 bg-gray-100 border border-gray-200 rounded">
              ESC
            </kbd>
          </div>
        </div>

        {/* Commands List */}
        <div className="max-h-96 overflow-y-auto">
          {filteredCommands.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              No commands found
            </div>
          ) : (
            <div className="py-2">
              {filteredCommands.map((command, index) => (
                <button
                  key={command.id}
                  onClick={command.action}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`w-full px-4 py-3 flex items-center justify-between transition-colors ${
                    index === selectedIndex
                      ? 'bg-indigo-50 text-indigo-900'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[80px] text-left">
                      {command.category}
                    </span>
                    <span className="font-medium">{command.label}</span>
                  </div>
                  {command.shortcut && (
                    <kbd className="hidden sm:inline-block px-2 py-1 text-xs font-semibold bg-white border border-gray-200 rounded shadow-sm">
                      {command.shortcut}
                    </kbd>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 px-4 py-3 bg-gray-50 flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <kbd className="px-1.5 py-0.5 bg-white border border-gray-200 rounded text-xs">
                ↑
              </kbd>
              <kbd className="px-1.5 py-0.5 bg-white border border-gray-200 rounded text-xs">
                ↓
              </kbd>
              to navigate
            </span>
            <span className="flex items-center gap-1.5">
              <kbd className="px-1.5 py-0.5 bg-white border border-gray-200 rounded text-xs">
                ↵
              </kbd>
              to select
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommandPalette
