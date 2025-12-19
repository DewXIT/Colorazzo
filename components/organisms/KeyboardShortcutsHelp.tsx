import React from 'react'

interface KeyboardShortcutsHelpProps {
  isOpen: boolean
  onClose: () => void
}

const shortcuts = [
  { key: 'Cmd + K', description: 'Open command palette' },
  { key: 'Ctrl + G', description: 'Generate new palette' },
  { key: 'Ctrl + R', description: 'Random base color' },
  { key: 'Shift + J', description: 'Export as JSON' },
  { key: 'Shift + C', description: 'Export as CSS' },
  { key: 'Shift + T', description: 'Export as Tailwind' },
  { key: 'Shift + S', description: 'Export as SCSS' },
  { key: 'Shift + ?', description: 'Toggle this help' },
  { key: 'Esc', description: 'Close dialogs' },
]

const KeyboardShortcutsHelp = ({
  isOpen,
  onClose,
}: KeyboardShortcutsHelpProps) => {
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-in zoom-in-95 duration-200"
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
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-gray-900">
                Keyboard Shortcuts
              </h2>
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
        </div>

        {/* Shortcuts List */}
        <div className="p-6 space-y-3 max-h-96 overflow-y-auto">
          {shortcuts.map((shortcut, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <span className="text-sm text-gray-700">
                {shortcut.description}
              </span>
              <kbd className="px-3 py-1.5 text-xs font-semibold text-gray-700 bg-gray-100 border border-gray-300 rounded-lg shadow-sm">
                {shortcut.key}
              </kbd>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 px-6 py-4 bg-gray-50">
          <p className="text-xs text-gray-500 text-center">
            Press{' '}
            <kbd className="px-1.5 py-0.5 bg-white border border-gray-200 rounded text-xs font-mono">
              Shift + ?
            </kbd>{' '}
            anytime to toggle this dialog
          </p>
        </div>
      </div>
    </div>
  )
}

export default KeyboardShortcutsHelp
