/* eslint-env jest */

import * as surveillance from '../..'

describe('surveillance.pipeline.pipe', () => {
  it('does functions in order', () => {
    expect(
      surveillance.pipeline.pipe(e => `${e}-1`, e => `${e}-2`, e => `${e}-3`)(
        'event',
      ),
    ).toEqual('event-1-2-3')
  })
})
