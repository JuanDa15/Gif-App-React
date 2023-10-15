import SearchBar from "../../../src/components/Searchbar"
import { fireEvent, render, screen } from "@testing-library/react"

describe('Test for <Searchbar />', () => {
  const handler = (value: string) => {value}
  test('should match with the snapshot', () => {
    const { container } = render(<SearchBar onSearch={handler} />)
    expect(container).toMatchSnapshot()
  })
  test('should change the input value', () => {
    const newInputValue = 'dragon ball';
    render(<SearchBar onSearch={handler} />)
    const input: HTMLInputElement = screen.getByRole('search') as HTMLInputElement;
    fireEvent.input(input, { target: { value: newInputValue}})
    expect(input.value).toBe(newInputValue);
  })
  test('should call the submit Fn', () => {
    const newInputValue = 'dragon ball';
    const mockedHandler = jest.fn(handler)
    render(<SearchBar onSearch={mockedHandler} />)
    
    const input = screen.getByRole('search') as HTMLInputElement;
    const form = screen.getByRole('searchbox') as HTMLFormElement;
    
    fireEvent.input(input, { target: { value: newInputValue}})
    fireEvent.submit(form)

    expect(mockedHandler).toHaveBeenCalledWith(newInputValue)
    expect(input.value).toBe('')
  })
  test('should not call the handler Fn', () => {
    const newInputValue = '';
    const mockedHandler = jest.fn(handler)
    render(<SearchBar onSearch={mockedHandler} />)

    const input = screen.getByRole('search') as HTMLInputElement;
    const form = screen.getByRole('searchbox') as HTMLFormElement;

    fireEvent.input(input, { target: { value: newInputValue}})
    fireEvent.submit(form)

    expect(mockedHandler).not.toHaveBeenCalled()
  })
})