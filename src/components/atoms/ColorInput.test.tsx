import { render, screen } from '@testing-library/react'
import ColorInput from './ColorInput'
import '@testing-library/jest-dom/extend-expect'
HTMLCanvasElement.prototype.getContext = jest.fn()

describe('ColorInput Component', () => {
  const baseColor = '#ff0000'
  const onChange = jest.fn()

  it('renders ColorInput component', () => {
    render(<ColorInput baseColor={baseColor} onChange={onChange} />)
    const colorInput = screen.getByTestId('color-input')
    expect(colorInput).toBeInTheDocument()
  })
})
