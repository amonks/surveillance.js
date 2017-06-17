/* eslint-env jest */

import isogram from '../../../src/sinks/googleAnalytics/isogram'

describe('surveillance.googleAnalytics.isogram', () => {
  beforeEach(() => {
    const scr = window.document.createElement('script')
    window.document.body.appendChild(scr)
    if (window.ga) window.ga.q = []
  })

  it('sets the right globals', () => {
    isogram('123')
    expect(window.GoogleAnalyticsObject).toBe('ga')
  })

  it('window.ga adds a thing to the queue when called', () => {
    isogram('123')
    window.ga('12345')
    expect(window.ga.q.map(args => [].slice.call(args))).toEqual([
      ['create', '123', { cookieDomain: 'none' }],
      ['12345'],
    ])
  })
})
