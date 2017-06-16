/* eslint-env jest */

import * as surveillance from '../../src'

describe('surveillance/annotators/addTimestamp', () => {
  it('adds a timestamp to an object', () => {
    const obj = { a: 1 }
    const out = surveillance.annotators.addTimestamp()(obj)
    expect(Object.keys(out).sort()).toEqual(['a', 'timestamp'].sort())
  })
})
