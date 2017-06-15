/* eslint-env jest */

import * as surveillance from '../..'

describe('surveillance.pipeline.mergeWith', () => {
  it('merges objects synchronously', () => {
    expect(
      surveillance.pipeline.mergeWith({ a: 4, b: 4, c: 4, d: 4 })([
        { a: 3, b: 3, c: 3 },
        { a: 2, b: 2 },
        { a: 1 },
      ]),
    ).toEqual({ a: 1, b: 2, c: 3, d: 4 })
  })
})
