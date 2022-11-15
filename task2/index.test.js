import { getPercents } from './index.js'

describe("test getPercents", () => {
  it('20 процентов от 300 равно 60', () => {
    const result = getPercents(20, 300)
    expect(result).toBe(60);
  }),
    it('120 процентов от 300 равно 360', () => {
      const result = getPercents(120, 300)
      expect(result).toBe(360)
    }),
    it('введены буквы в аргументы', () => {
      const result = getPercents('ad', 'dd')
      expect(result).toBe('данные не число')
    })
})