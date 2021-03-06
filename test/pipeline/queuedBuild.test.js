/* eslint-env jest */

import * as surveillance from '../../src'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

describe('surveillance.pipeline.queuedBuild', () => {
  it('enqueues dispatched events until the pipeline is ready', async () => {
    const pipeline = surveillance.pipeline.queuedBuild({
      pipeline: [
        async conf => {
          await sleep(200)
          return arg => `later-${arg}`
        },
      ],
    })

    const results = await Promise.all([pipeline('event'), pipeline('event-2')])

    expect(results).toEqual(['later-event', 'later-event-2'])
  })

  it('continues working _after_ the pipeline is ready', async () => {
    const pipeline = surveillance.pipeline.queuedBuild({
      pipeline: [
        async conf => {
          await sleep(200)
          return arg => `later-${arg}`
        },
      ],
    })

    await sleep(500)

    const results = await Promise.all([pipeline('event'), pipeline('event-2')])

    expect(results).toEqual(['later-event', 'later-event-2'])
  })
})
