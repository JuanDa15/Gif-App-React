import { renderHook, waitFor } from "@testing-library/react";
import useGifts from "../../../src/hooks/useGifts"

describe('test for useGifts', () => {
  const category = 'dragon ball';
  test('should return the initial state', () => {
    const { result: { current: { gifts, loading}} } = renderHook( () => useGifts(category, 4))
    expect(gifts.length).toBe(0);
    expect(loading).toBe(true)
  })
  test('should return data and loading in false', async () => {
    const { result } = renderHook( () => useGifts(category, 4))
    await waitFor(() =>  expect(result.current.gifts.length).toBeGreaterThan(0))

    const { gifts, loading } = result.current
    expect(gifts.length).toBe(4)
    expect(loading).toBeFalsy()
  })
})