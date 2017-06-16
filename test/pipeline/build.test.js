/* eslint-env jest */

import * as surveillance from '../..'

describe('surveillance.pipeline.build', () => {
  it('throws an error when given an invalid pipeline type', async () => {
    await expect(
      surveillance.pipeline.build({
        pipeline: {},
      }),
    ).rejects.toBeDefined()

    await expect(
      surveillance.pipeline.build({
        pipeline: 5,
      }),
    ).rejects.toBeDefined()
  })

  it('works with a synchronous function', async () => {
    const pipeline = await surveillance.pipeline.build({
      pipeline: e => `function-${e}`,
    })
    expect(await pipeline('event')).toBe('function-event')
  })

  it('works with a synchronous function without await', async () => {
    const pipeline = await surveillance.pipeline.build({
      pipeline: e => `function-${e}`,
    })
    expect(pipeline('event')).toBe('function-event')
  })

  it('works with an asynchronous function', async () => {
    const pipeline = await surveillance.pipeline.build({
      pipeline: async e => `async-${e}`,
    })
    expect(await pipeline('event')).toBe('async-event')
  })

  it('treats an array as a function application', async () => {
    const pipeline = await surveillance.pipeline.build({
      pipeline: [(a, b) => e => `${a}-${b}-${e}`, 'this', 'that'],
    })
    expect(await pipeline('the-other')).toBe('this-that-the-other')
  })

  it('handles an asynchronous function application', async () => {
    const pipeline = await surveillance.pipeline.build({
      pipeline: [async a => e => `async-${a}-${e}`, 'application'],
    })
    expect(await pipeline('event')).toBe('async-application-event')
  })

  it('throws when given a bad reference', async () => {
    await expect(
      surveillance.pipeline.build({
        pipeline: 'fn',
        elements: {},
      }),
    ).rejects.toBeDefined()
  })

  it('handles references to elements with no arguments', async () => {
    const pipeline = await surveillance.pipeline.build({
      pipeline: 'fn',
      elements: { fn: e => `reference-${e}` },
    })
    expect(await pipeline('event')).toBe('reference-event')
  })

  it('handles references to elements with arguments', async () => {
    const pipeline = await surveillance.pipeline.build({
      pipeline: ['fn', 'first-arg', 'second-arg'],
      elements: { fn: (...args) => e => `reference-${args.join('-')}-${e}` },
    })
    expect(await pipeline('event')).toBe('reference-first-arg-second-arg-event')
  })
})
