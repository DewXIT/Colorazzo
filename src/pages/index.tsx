import { generateColorPalette } from '@/utils/colorUtils'
import { useState, useCallback } from 'react'
import GeneratePaletteSection from '@/components/organisms/GeneratePaletteSection'
import HeadSection from '@/components/organisms/HeadSection'
import HeroSection from '@/components/organisms/HeroSection'
import HowItWorksSection from '@/components/organisms/HowItWorksSection'
import SupportSection from '@/components/organisms/SupportSection'
import DeveloperGuide from '@/components/organisms/DeveloperGuide'
import CommandPalette from '@/components/organisms/CommandPalette'
import KeyboardShortcutsHelp from '@/components/organisms/KeyboardShortcutsHelp'
import CodeSnippetsPanel from '@/components/organisms/CodeSnippetsPanel'
import Container from '@/components/atoms/Container'
import { ColorObjectType } from '@/types/types'
import { Method } from '@/enums/enums'
import { useKeyboardShortcuts } from '@/hooks/useKeyboardShortcuts'
import {
  exportToJSON,
  exportToCSS,
  exportToTailwind,
  exportToSCSS,
} from '@/utils/exportUtils'

const Home = () => {
  const [method, setMethod] = useState<Method>(Method.Default)
  const [baseColor, setBaseColor] = useState<string>('#4f46e5')
  const [palette, setPalette] = useState<ColorObjectType[]>(() =>
    generateColorPalette('#4f46e5'),
  )
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false)
  const [isShortcutsHelpOpen, setIsShortcutsHelpOpen] = useState(false)
  const [isCodeSnippetsOpen, setIsCodeSnippetsOpen] = useState(false)

  const handleGeneratePalette = useCallback(() => {
    const newPalette = generateColorPalette(baseColor, method)
    setPalette(newPalette)
  }, [baseColor, method])

  const handleMethodChange = useCallback(
    (newMethod: Method) => {
      setMethod(newMethod)
      setPalette(generateColorPalette(baseColor, newMethod))
    },
    [baseColor],
  )

  // Auto-generate palette on color change (LIVE)
  const handleColorChange = useCallback(
    (color: string) => {
      setBaseColor(color)
      setPalette(generateColorPalette(color, method))
    },
    [method],
  )

  const generateRandomColor = useCallback(() => {
    const randomColor = `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')}`
    setBaseColor(randomColor)
    setPalette(generateColorPalette(randomColor, method))
  }, [method])

  // Keyboard Shortcuts
  useKeyboardShortcuts([
    {
      key: 'k',
      metaKey: true,
      callback: () => setIsCommandPaletteOpen(true),
      description: 'Open command palette',
    },
    {
      key: 'g',
      ctrlKey: true,
      callback: handleGeneratePalette,
      description: 'Generate new palette',
    },
    {
      key: 'r',
      ctrlKey: true,
      callback: generateRandomColor,
      description: 'Random base color',
    },
    {
      key: '?',
      shiftKey: true,
      callback: () => setIsShortcutsHelpOpen((prev) => !prev),
      description: 'Toggle keyboard shortcuts help',
    },
    {
      key: 'j',
      shiftKey: true,
      callback: () => exportToJSON(palette),
      description: 'Export as JSON',
    },
    {
      key: 'c',
      shiftKey: true,
      callback: () => exportToCSS(palette),
      description: 'Export as CSS',
    },
    {
      key: 't',
      shiftKey: true,
      callback: () => exportToTailwind(palette),
      description: 'Export as Tailwind',
    },
    {
      key: 's',
      shiftKey: true,
      callback: () => exportToSCSS(palette),
      description: 'Export as SCSS',
    },
  ])

  return (
    <>
      <HeroSection />

      <div
        id="generator"
        className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-24 border-t border-gray-200 min-h-screen"
      >
        <Container>
          <div className="mb-8">
            <HeadSection
              palette={palette}
              method={method}
              onChange={handleMethodChange}
              onOpenCodeSnippets={() => setIsCodeSnippetsOpen(true)}
            />
          </div>
          <GeneratePaletteSection
            baseColor={baseColor}
            palette={palette}
            onChange={handleColorChange}
            onClick={handleGeneratePalette}
          />
        </Container>
      </div>

      <HowItWorksSection />

      <DeveloperGuide />

      <SupportSection />

      {/* Command Palette */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        palette={palette}
        onMethodChange={handleMethodChange}
        onGeneratePalette={handleGeneratePalette}
      />

      {/* Keyboard Shortcuts Help */}
      <KeyboardShortcutsHelp
        isOpen={isShortcutsHelpOpen}
        onClose={() => setIsShortcutsHelpOpen(false)}
      />

      {/* Code Snippets Panel */}
      <CodeSnippetsPanel
        palette={palette}
        isOpen={isCodeSnippetsOpen}
        onClose={() => setIsCodeSnippetsOpen(false)}
      />

      {/* Floating Action Button - Keyboard Shortcuts */}
      <button
        onClick={() => setIsShortcutsHelpOpen(true)}
        className="fixed bottom-8 right-8 w-14 h-14 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-indigo-400/50 group"
        aria-label="Keyboard shortcuts"
      >
        <span className="text-xl font-bold">?</span>
        <div className="absolute bottom-full right-0 mb-2 px-3 py-1.5 bg-gray-900 text-white text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Keyboard shortcuts
        </div>
      </button>
    </>
  )
}

export default Home
