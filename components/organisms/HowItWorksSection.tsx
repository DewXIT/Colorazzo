import React from 'react'
import Container from '@/components/atoms/Container'
import { Palette, Zap, Package } from 'lucide-react'

const HowItWorksSection = () => {
  const steps = [
    {
      number: '01',
      title: 'Choose Your Base Color',
      description:
        'Start by selecting a base color using the color picker or by entering a hex code. This will be the foundation of your palette.',
    },
    {
      number: '02',
      title: 'Select Generation Method',
      description:
        'Choose from Default, HSL, or LAB color space methods. Each method generates shades differently to match your needs.',
    },
    {
      number: '03',
      title: 'Generate & Preview',
      description:
        'Click generate to create a full spectrum of shades. Preview all variations from lightest to darkest in real-time.',
    },
    {
      number: '04',
      title: 'Export Your Palette',
      description:
        'Export your palette as JSON, CSS variables, Tailwind config, or copy individual color values with a single click.',
    },
  ]

  return (
    <section
      id="guide"
      className="py-24 bg-gradient-to-br from-gray-50 via-indigo-50/30 to-purple-50/20 border-t border-gray-200"
    >
      <Container>
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            How it works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Generate professional color palettes in four simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-20">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className="flex gap-6 p-6 rounded-2xl bg-white border-2 border-gray-200 hover:border-indigo-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white font-bold text-xl flex items-center justify-center shadow-lg">
                    {step.number}
                  </div>
                </div>
                <div className="grow pt-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-2xl border-2 border-gray-200 bg-white hover:border-indigo-300 transition-all duration-300 hover:shadow-xl group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Palette className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-gray-900 mb-3 text-lg">
              Multiple Color Spaces
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Generate palettes using Default, HSL, or LAB color spaces for
              maximum flexibility and precision.
            </p>
          </div>

          <div className="p-8 rounded-2xl border-2 border-gray-200 bg-white hover:border-indigo-300 transition-all duration-300 hover:shadow-xl group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Zap className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-gray-900 mb-3 text-lg">
              Live Preview
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              See your palette update in real-time as you adjust colors. No
              clicking generate button—just instant updates.
            </p>
          </div>

          <div className="p-8 rounded-2xl border-2 border-gray-200 bg-white hover:border-indigo-300 transition-all duration-300 hover:shadow-xl group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Package className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-gray-900 mb-3 text-lg">
              Export Anywhere
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Export to JSON, CSS, Tailwind, Swift, Kotlin and more. Integrate
              seamlessly with your favorite tools.
            </p>
          </div>
        </div>

        <style jsx>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </Container>
    </section>
  )
}

export default HowItWorksSection
