import React from 'react'
import Container from '@/components/atoms/Container'

const HeroSection = () => {
  const scrollToGenerator = () => {
    const element = document.getElementById('generator')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const scrollToGuide = () => {
    const element = document.getElementById('guide')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="bg-white border-b border-gray-200 relative overflow-hidden min-h-screen flex items-center">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* Gradient Blobs */}
      <div className="absolute left-1/4 top-20 -z-10 h-96 w-96 rounded-full bg-indigo-300 opacity-30 blur-[120px] animate-pulse"></div>
      <div
        className="absolute right-1/4 bottom-20 -z-10 h-80 w-80 rounded-full bg-purple-300 opacity-25 blur-[100px] animate-pulse"
        style={{ animationDelay: '1s' }}
      ></div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[500px] w-[500px] rounded-full bg-pink-200 opacity-20 blur-[140px]"></div>

      <Container className="py-32 text-center relative z-10 w-full">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 text-sm font-medium mb-10 border border-indigo-200/50 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
          </span>
          Free & Open Source
        </div>

        {/* Title */}
        <h1 className="text-6xl md:text-8xl font-extrabold text-gray-900 tracking-tight mb-6 leading-none">
          Colorazzo
        </h1>

        <p className="text-2xl md:text-3xl text-gray-600 font-medium mb-8">
          Color Palette Generator
        </p>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed">
          Generate beautiful, accessible color palettes with just one click.
          <br className="hidden sm:block" />
          Export to CSS, Tailwind, SCSS and more.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={scrollToGenerator}
            className="group inline-flex items-center justify-center px-10 py-4 text-lg font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40 cursor-pointer w-full sm:w-auto"
          >
            Start Generating
            <svg
              className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
          <button
            onClick={scrollToGuide}
            className="inline-flex items-center justify-center px-10 py-4 text-lg font-semibold text-gray-700 bg-white border-2 border-gray-300 rounded-2xl hover:bg-gray-50 hover:border-gray-400 transition-all cursor-pointer w-full sm:w-auto"
          >
            How it works
          </button>
        </div>

        {/* Features Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-gray-600">
          <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200">
            <svg
              className="w-4 h-4 text-indigo-600"
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
            Multiple Methods
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200">
            <svg
              className="w-4 h-4 text-indigo-600"
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
            Instant Export
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200">
            <svg
              className="w-4 h-4 text-indigo-600"
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
            No Sign-up
          </div>
        </div>
      </Container>
    </div>
  )
}

export default HeroSection
