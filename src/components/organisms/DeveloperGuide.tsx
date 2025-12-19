import React from 'react'
import { Code, Zap, Smartphone, Monitor, Palette, Copy, Keyboard } from 'lucide-react'

const DeveloperGuide = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            Built for Developers <Code className="w-9 h-9" />
          </h2>
          <p className="text-xl text-indigo-200">
            Powerful features to speed up your workflow
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-4">
              <Code className="w-6 h-6 text-indigo-300" />
            </div>
            <h3 className="text-xl font-bold mb-2">Command Palette</h3>
            <p className="text-indigo-200 text-sm">
              Access all features instantly with fuzzy search. Just like your
              favorite code editor.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-purple-300" />
            </div>
            <h3 className="text-xl font-bold mb-2">Keyboard Shortcuts</h3>
            <p className="text-indigo-200 text-sm">
              Generate, export, and navigate without touching your mouse. Built
              for speed.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center mb-4">
              <Smartphone className="w-6 h-6 text-pink-300" />
            </div>
            <h3 className="text-xl font-bold mb-2">Multi-Platform Export</h3>
            <p className="text-indigo-200 text-sm">
              Swift, Kotlin, XML, Tailwind, and more. One palette, every
              platform.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-4">
              <Monitor className="w-6 h-6 text-emerald-300" />
            </div>
            <h3 className="text-xl font-bold mb-2">Live Code Snippets</h3>
            <p className="text-indigo-200 text-sm">
              Copy-paste ready code in your language of choice. No manual
              conversion needed.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
              <Palette className="w-6 h-6 text-blue-300" />
            </div>
            <h3 className="text-xl font-bold mb-2">Live Preview</h3>
            <p className="text-indigo-200 text-sm">
              See changes instantly as you adjust colors. No clicking "Generate"
              required.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-4">
              <Copy className="w-6 h-6 text-orange-300" />
            </div>
            <h3 className="text-xl font-bold mb-2">One-Click Copy</h3>
            <p className="text-indigo-200 text-sm">
              Click any color to copy its hex value. Simple, fast, effective.
            </p>
          </div>
        </div>

        {/* Keyboard Shortcuts Preview */}
        <div className="mt-16 bg-black/30 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-center flex items-center justify-center gap-2">
            <Keyboard className="w-6 h-6" />
            Popular Shortcuts
          </h3>
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
              <span className="text-indigo-200">Command Palette</span>
              <kbd className="px-3 py-1.5 bg-white/10 border border-white/20 rounded-lg font-mono text-sm">
                Cmd + K
              </kbd>
            </div>
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
              <span className="text-indigo-200">Generate Palette</span>
              <kbd className="px-3 py-1.5 bg-white/10 border border-white/20 rounded-lg font-mono text-sm">
                Ctrl + G
              </kbd>
            </div>
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
              <span className="text-indigo-200">Random Color</span>
              <kbd className="px-3 py-1.5 bg-white/10 border border-white/20 rounded-lg font-mono text-sm">
                Ctrl + R
              </kbd>
            </div>
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
              <span className="text-indigo-200">Export JSON</span>
              <kbd className="px-3 py-1.5 bg-white/10 border border-white/20 rounded-lg font-mono text-sm">
                Shift + J
              </kbd>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeveloperGuide
