/* eslint-env jest */

import * as surveillance from '../../src'

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

  it('works with a custom logger', () => {
    const fn = jest.fn()
    const output = surveillance.sinks.log({ logger: fn })('event')
    expect(output).toBe('event')
    expect(fn.mock.calls).toEqual([['surveillance data: "event"']])
  })

  it('works with a custom message', () => {
    const fn = jest.fn()
    const output = surveillance.sinks.log({ logger: fn, message: 'message' })(
      'event',
    )
    expect(output).toBe('event')
    expect(fn.mock.calls).toEqual([['message: "event"']])
  })

  it('logs to the console', () => {
    surveillance.sinks.log()('event')
    expect(console.log).toHaveBeenCalledWith('surveillance data: "event"')
  })
})
