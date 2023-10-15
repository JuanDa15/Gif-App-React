import useGifts from "../../../src/hooks/useGifts";
import CategoryPreview from "../../../src/components/CategoryPreview"
import { render, screen } from "@testing-library/react"
import { gifts } from "../../mocks/giftsMock";
 
jest.mock('../../../src/hooks/useGifts')

describe('Test for <CategoryPreview />', () => {
  const testCategory = 'dragon ball';

  test('Should render the loading component', async () => {
    (useGifts as any).mockReturnValue({
      gifts: [],
      loading: true
    })

    render(<CategoryPreview category={testCategory} />)
    const element = await screen.findByTestId('list-loading-skeleton')
    expect(element).toBeTruthy()
    expect(screen.getByText(testCategory))
  })

  test('Should render the gifts list', async () => {
    (useGifts as any).mockReturnValue({
      gifts: gifts,
      loading: false
    })
    render(<CategoryPreview category={testCategory} />)
    const element = await screen.findByTestId('grid-with-data')
    expect(screen.getByText(testCategory))
    expect(element.querySelectorAll('li').length).toBe(gifts.length)
  })
})