/* eslint-env jest */

import * as surveillance from '../..'

describe('surveillance.sinks.log', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log')
  })

  afterEach(() => {
    console.log.mockRestore()
  })

  it('passes through its input', () => {
    const res = surveillance.sinks.log()('event')
    expect(res).toBe('event')
  })

  it('logs to the console', () => {
    surveillance.sinks.log()('event')
    expect(console.log).toHaveBeenCalledWith('surveillance data: "event"')
  })
})
