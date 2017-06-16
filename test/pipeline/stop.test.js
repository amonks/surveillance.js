/* eslint-env jest */

import * as surveillance from '../../src'

describe('surveillance/pipeline/stop', () => {
  it(`doesn't call pipeline elements after a stop`, async () => {
    const fn = jest.fn()
    const fn2 = jest.fn()
    const pipeline = await surveillance.pipeline.build({
      pipeline: [surveillance.pipeline.pipe, surveillance.pipeline.stop, fn],
    })
    expect(await pipeline('event')).toBe(surveillance.pipeline.stop)
    expect(fn.mock.calls.length).toBe(0)
    expect(fn2.mock.calls.length).toBe(0)
  })

  it.skip(`doesn't call pipeline elements before a stop`, async () => {
    const fn = jest.fn()
    const fn2 = jest.fn()
    const pipeline = await surveillance.pipeline.build({
      pipeline: [
        surveillance.pipeline.pipe,
        fn,
        fn2,
        surveillance.pipeline.stop,
      ],
    })
    expect(await pipeline('event')).toBe(surveillance.pipeline.stop)
    expect(fn.mock.calls.length).toBe(0)
    expect(fn2.mock.calls.length).toBe(0)
  })

  it(`doesn't call functions following a returned stop`, async () => {
    const stopper = () => surveillance.pipeline.stop
    const fn = jest.fn()
    const pipeline = await surveillance.pipeline.build({
      pipeline: [surveillance.pipeline.pipe, stopper, fn],
    })
    expect(await pipeline('event')).toBe(surveillance.pipeline.stop)
    expect(fn.mock.calls.length).toBe(0)
  })
})
