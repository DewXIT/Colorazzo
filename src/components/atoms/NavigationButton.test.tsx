import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import NavigationButton from '@/components/atoms/NavigationButton'

describe('NavigationButton', () => {
  const Home = 'Home'
  const About = 'About'

  it('renders the GeneratePaletteButton component', () => {
    render(<NavigationButton label={Home} />)
    const buttonElement = screen.getByText(/Home/i)
    expect(buttonElement).toBeInTheDocument()
  })

  it('triggers the export function on button click', () => {
    render(<NavigationButton label={About} />)
    const buttonElement = screen.getByText(/About/i)

    expect(buttonElement).toBeInTheDocument()
  })
})
