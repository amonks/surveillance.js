/* eslint-env jest */

import * as surveillance from '../..'

describe('surveillance.pipes.fork', () => {
  it('applies a number of functions to a value, returning an array', async () => {
    expect(
      await surveillance.pipes.fork(a => `first-${a}`, a => `second-${a}`)(
        'event',
      ),
    ).toEqual(['first-event', 'second-event'])
  })

  it('works with async functions', async () => {
    expect(
      await surveillance.pipes.fork(
        async a => `first-${a}`,
        async a => `second-${a}`,
      )('event'),
    ).toEqual(['first-event', 'second-event'])
  })
})
