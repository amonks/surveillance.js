/* eslint-env jest */

import * as surveillance from '../..'

describe('surveillance.pipeline.fork', () => {
  it('applies a number of functions to a value, returning an array', async () => {
    expect(
      await surveillance.pipeline.fork(a => `first-${a}`, a => `second-${a}`)(
        'event',
      ),
    ).toEqual(['first-event', 'second-event'])
  })

  it('works with async functions', async () => {
    expect(
      await surveillance.pipeline.fork(
        async a => `first-${a}`,
        async a => `second-${a}`,
      )('event'),
    ).toEqual(['first-event', 'second-event'])
  })
})
