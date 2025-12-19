import React from 'react'
import Container from '@/components/atoms/Container'
import Image from 'next/image'

const SupportSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <Container>
        <div className="relative overflow-hidden bg-gradient-to-br from-white via-indigo-50/30 to-purple-50/20 border-2 border-gray-200 rounded-3xl p-12 md:p-16 text-center shadow-xl">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-100/40 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-100/40 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Enjoy using Colorazzo?
            </h3>
            <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed">
              This tool is completely free and open source. If you find it
              useful, consider supporting the project with a coffee!
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <a
                href="https://buycoffee.to/dewxit"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-6 transition-transform hover:scale-105"
              >
                <div className="p-4 bg-white rounded-2xl shadow-2xl">
                  <Image
                    src="/QR_buycoffee.png"
                    alt="Support via BuyCoffee QR"
                    width={192}
                    height={192}
                    className="w-48 h-48 rounded-xl"
                    quality={100}
                    priority
                  />
                </div>
                <div className="bg-white px-8 py-3 rounded-2xl shadow-xl">
                  <Image
                    src="/logo-buycoffee.to.png"
                    alt="BuyCoffee.to"
                    width={300}
                    height={80}
                    className="h-8 w-auto"
                    quality={100}
                    priority
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default SupportSection
