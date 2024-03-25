import sum from '/Pages/sum'

test('1 + 2를 더하면 3이 됩니다.', () => {
  expect(sum(1, 2)).toBe(3)
})
