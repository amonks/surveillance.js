/* eslint-env jest */

import * as surveillance from '../../src'

describe('surveillance.filters.select', () => {
  it('renames keys provided in an object', () => {
    const mappings = { a: 'd', c: 'e' }
    expect(
      surveillance.filters.select(mappings)({ a: 1, b: 2, c: 3 }),
    ).toEqual({ d: 1, e: 3 })
  })

  it('selects keys provided in an array', () => {
    const mappings = ['a', 'b']
    expect(
      surveillance.filters.select(mappings)({ a: 1, b: 2, c: 3 }),
    ).toEqual({ a: 1, b: 2 })
  })

  it('throws given bad input', () => {
    const mappings = 42
    expect(() =>
      surveillance.filters.select(mappings)({ a: 1, b: 2, c: 3 }),
    ).toThrow()
  })
})
