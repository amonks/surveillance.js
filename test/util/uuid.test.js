/* eslint-env jest */

import * as surveillance from '../../src'

describe('surveillance.util.uuid', () => {
  it('produces a 36-character string', () => {
    expect(surveillance.util.uuid().length).toBe(36)
  })

  it('works with performance.now if available', () => {
    window.performance = { now: jest.fn(() => 0) }
    expect(surveillance.util.uuid().length).toBe(36)
  })

  it("doesn't produce the same string twice", () => {
    const cache = []
    for (let i = 0; i++; i <= 1000) {
      const newUuid = surveillance.util.uuid()
      console.log(newUuid)
      expect(cache.includes(newUuid)).toBe(false)
      cache.push(newUuid)
    }
  })
})
