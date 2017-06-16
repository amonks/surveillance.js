/* eslint-env jest */

import * as surveillance from '../../src'

describe('surveillance.filters.sample', () => {
  it('always passes through when the rate is 1', () => {
    const sampler = surveillance.filters.sample({ rate: 1 })
    expect(sampler('event')).toBe('event')
  })

  it('never passes through when the rate is 0', () => {
    const sampler = surveillance.filters.sample({ rate: 0 })
    expect(sampler('event')).toBe(surveillance.pipeline.stop)
  })
})
