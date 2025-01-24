import React, { ReactNode } from 'react'
import Navbar from './Navbar'

interface LayoutProps {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen w-full bg-gray-900 text-gray-200">
      <main>{children}</main>
    </div>
  )
}

export default Layout
