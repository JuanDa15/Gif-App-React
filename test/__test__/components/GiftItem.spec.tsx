import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import GiftItem from '../../../src/components/GiftItem'

describe('Test in <GiftItem />', () => {
  const props = {
    url: 'https://picsum.photos/200/300',
    width: '200',
    height: '300'
  }
  test("Renders the component", () => {
    render(<GiftItem {...props} />)
    expect(true).toBeTruthy()
  })
  test("should match with snapshot", () => {
    const { container } = render(<GiftItem {...props} />)
    expect(container).toMatchSnapshot()
  })
  test("should have all the attributes", () => {
    render(<GiftItem {...props} />)
    const { src, width, height} = screen.getByRole('img') as HTMLImageElement;
    expect(src).toBe(props.url)
    expect(width.toString()).toEqual(props.width)
    expect(height.toString()).toEqual(props.height)
  })
})