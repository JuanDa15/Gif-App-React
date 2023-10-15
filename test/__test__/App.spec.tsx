import { fireEvent, render, screen } from "@testing-library/react"
import App from "../../src/App"

describe('test for the <App />', () => {
  test('should add a category', () => {
    render(<App />)
    const input = screen.getByRole('search') as HTMLInputElement
    const button = screen.getByTestId('search-button')
    
    fireEvent.input(input, { target: { value: 'dragon ball' } })
    fireEvent.click(button)

    const category = screen.queryAllByTestId('category')
    expect(category).toHaveLength(1)
    expect(category[0].querySelector('h2')?.innerHTML).toContain('dragon ball')
  })
  test('should not add existing category', () => {
    render(<App />)
    const input = screen.getByRole('search') as HTMLInputElement
    const button = screen.getByTestId('search-button')
    
    fireEvent.input(input, { target: { value: 'dragon ball' } })
    fireEvent.click(button)

    fireEvent.input(input, { target: { value: 'naruto' } })
    fireEvent.click(button)

    const category = screen.queryAllByTestId('category')
    expect(category).toHaveLength(2)
  })
  test('should not add existing category', () => {
    render(<App />)
    const input = screen.getByRole('search') as HTMLInputElement
    const button = screen.getByTestId('search-button')
    
    fireEvent.input(input, { target: { value: 'dragon ball' } })
    fireEvent.click(button)

    fireEvent.input(input, { target: { value: 'dragon ball' } })
    fireEvent.click(button)

    const category = screen.queryAllByTestId('category')
    expect(category).not.toHaveLength(2)
  })
})