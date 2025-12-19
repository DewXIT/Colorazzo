const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-12 mt-auto">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-gray-500">
        <p>© 2025 Colorazzo. Built for designers and developers.</p>
        <p className="mt-2 text-sm">
          Made by{' '}
          <a
            href="https://dewxit.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-gray-700 hover:text-indigo-600 transition-colors"
          >
            DewXIT
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
