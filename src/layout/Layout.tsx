import React, { ReactNode } from 'react'
import Footer from './Footer'

interface LayoutProps {
  children: ReactNode
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col justify-between bg-[#121212] h-full min-h-screen">
      {children}
      <Footer />
    </div>
  )
}

export default Layout
