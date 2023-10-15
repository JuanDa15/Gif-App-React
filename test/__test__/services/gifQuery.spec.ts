import getGifts from "./../../../src/services/gifQuery"

describe('Test in getGifts Fn', () => {
  test('Should return an arr of gift', async () => {
    const mockedFn = jest.fn(getGifts).mockResolvedValue([])
    const gifs = await mockedFn('One Punch', 0);
    expect(mockedFn).toHaveBeenCalled();
    expect(gifs.length).toBe(0);
  })
})