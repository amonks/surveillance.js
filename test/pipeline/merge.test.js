/* eslint-env jest */

import * as surveillance from '../..'

describe('surveillance.pipes.merge', () => {
  it('merges objects synchronously', () => {
    expect(
      surveillance.pipes.merge([
        { a: 3, b: 3, c: 3 },
        { a: 2, b: 2 },
        { a: 1 },
      ]),
    ).toEqual({ a: 1, b: 2, c: 3 })
  })
})
