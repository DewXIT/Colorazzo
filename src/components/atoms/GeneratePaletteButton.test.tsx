import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import GeneratePaletteButton from '@/components/atoms/GeneratePaletteButton'

describe('GeneratePaletteButton', () => {
  const onClick = jest.fn()

  it('renders the GeneratePaletteButton component', () => {
    render(<GeneratePaletteButton onClick={onClick} />)
    const buttonElement = screen.getByText(/Generate Palette/i)
    expect(buttonElement).toBeInTheDocument()
  })

  it('triggers the export function on button click', () => {
    render(<GeneratePaletteButton onClick={onClick} />)
    const buttonElement = screen.getByText(/Generate Palette/i)

    fireEvent.click(buttonElement)

    expect(onClick).toHaveBeenCalled()
  })
})
