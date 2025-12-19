import { useEffect } from 'react'

interface KeyboardShortcut {
  key: string
  ctrlKey?: boolean
  metaKey?: boolean
  shiftKey?: boolean
  callback: () => void
  description: string
}

export const useKeyboardShortcuts = (shortcuts: KeyboardShortcut[]) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      for (const shortcut of shortcuts) {
        const keyMatches =
          event.key.toLowerCase() === shortcut.key.toLowerCase()
        const ctrlMatches = shortcut.ctrlKey ? event.ctrlKey : !event.ctrlKey
        const metaMatches = shortcut.metaKey ? event.metaKey : !event.metaKey
        const shiftMatches = shortcut.shiftKey
          ? event.shiftKey
          : !event.shiftKey

        if (keyMatches && ctrlMatches && metaMatches && shiftMatches) {
          event.preventDefault()
          shortcut.callback()
          return
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [shortcuts])
}

export const KEYBOARD_SHORTCUTS = {
  GENERATE: { key: 'g', ctrlKey: true, description: 'Generate new palette' },
  COMMAND_PALETTE: {
    key: 'k',
    metaKey: true,
    description: 'Open command palette',
  },
  EXPORT_JSON: { key: 'j', shiftKey: true, description: 'Export as JSON' },
  EXPORT_CSS: { key: 'c', shiftKey: true, description: 'Export as CSS' },
  EXPORT_TAILWIND: {
    key: 't',
    shiftKey: true,
    description: 'Export as Tailwind',
  },
  EXPORT_SCSS: { key: 's', shiftKey: true, description: 'Export as SCSS' },
  RANDOM_COLOR: { key: 'r', ctrlKey: true, description: 'Random base color' },
  TOGGLE_HELP: {
    key: '?',
    shiftKey: true,
    description: 'Toggle keyboard shortcuts help',
  },
}
