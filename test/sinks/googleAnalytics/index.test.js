/* eslint-env jest */

import * as surveillance from '../../../src'

describe('surveillance.sinks.googleAnalytics', () => {
  beforeEach(() => {
    const scr = window.document.createElement('script')
    window.document.body.appendChild(scr)
    if (window.ga) window.ga.q = []
  })
  it('adds a jawn to the queue', () => {
    surveillance.sinks.googleAnalytics({ trackingId: '123' })('event')
    expect(window.ga.q.map(args => [].slice.call(args))).toEqual([
      ['create', '123', { cookieDomain: 'none' }],
      ['send', 'event'],
    ])
  })
})
