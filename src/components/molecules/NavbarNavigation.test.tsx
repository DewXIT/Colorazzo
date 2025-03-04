import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import NavbarNavigation from '@/components/molecules/NavbarNavigation'
import 'next/link'

jest.mock('next/link', () => {
  const MockLink = ({
    children,
    href,
  }: {
    children: React.ReactNode
    href: string
  }) => {
    return <a href={href}>{children}</a>
  }
  return MockLink
})

describe('NavbarNavigation', () => {
  it('renders the Navbar Navigation component', () => {
    render(<NavbarNavigation />)
    const buttonElement = screen.getByTestId('navbar-navigation')
    expect(buttonElement).toBeInTheDocument()
  })

  it('renders the Home button', () => {
    render(<NavbarNavigation />)
    const buttonElement = screen.getByText(/Home/i)
    expect(buttonElement).toBeInTheDocument()
  })

  it('renders the About button', () => {
    render(<NavbarNavigation />)
    const buttonElement = screen.getByText('About')
    expect(buttonElement).toBeInTheDocument()
  })

  it('navigate to Home page', () => {
    render(<NavbarNavigation />)
    const buttonElement = screen.getByText(/Home/i)
    fireEvent.click(buttonElement)

    expect(window.location.pathname).toBe('/')
  })

  it('navigate to About page', () => {
    render(<NavbarNavigation />)
    const buttonElement = screen.getByText('About')
    fireEvent.click(buttonElement)
    expect(window.location.pathname).toBe('/about')
  })
})
