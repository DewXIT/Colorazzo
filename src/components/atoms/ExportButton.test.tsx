import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import ExportButton from './ExportButton'
import '@testing-library/jest-dom/extend-expect'

describe('ExportButton', () => {
  const palette = [
    { shade: 'light', color: '#ffffff' },
    { shade: 'dark', color: '#000000' },
  ]

  it('renders the ExportButton component', () => {
    render(<ExportButton palette={palette} />)
    const buttonElement = screen.getByText(/Export Palette/i)
    expect(buttonElement).toBeInTheDocument()
  })

  it('triggers the export function on button click', () => {
    render(<ExportButton palette={palette} />)
    const buttonElement = screen.getByText(/Export Palette/i)
    const createElementSpy = jest.spyOn(document, 'createElement')
    const setAttributeSpy = jest.spyOn(
      HTMLAnchorElement.prototype,
      'setAttribute',
    )
    const clickSpy = jest.spyOn(HTMLAnchorElement.prototype, 'click')
    const removeSpy = jest.spyOn(HTMLAnchorElement.prototype, 'remove')

    fireEvent.click(buttonElement)

    expect(createElementSpy).toHaveBeenCalledWith('a')
    expect(setAttributeSpy).toHaveBeenCalledWith(
      'href',
      expect.stringContaining('data:text/json;charset=utf-8,'),
    )
    expect(setAttributeSpy).toHaveBeenCalledWith('download', 'palette.json')
    expect(clickSpy).toHaveBeenCalled()
    expect(removeSpy).toHaveBeenCalled()
  })
})
