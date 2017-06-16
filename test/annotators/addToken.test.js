/* eslint-env jest */

import * as surveillance from '../../src'

describe('surveillance/annotators/addToken', () => {
  beforeEach(() => {
    window.localStorage = {
      setItem: jest.fn(),
      getItem: jest.fn(key => 'token-from-local-storage'),
    }
  })

  it('adds a timestamp to an object', () => {
    const obj = { a: 1 }
    const out = surveillance.annotators.addToken()(obj)
    expect(Object.keys(out).sort()).toEqual(['a', 'token'].sort())
  })

  it('gets a token from localStorage if there is one', () => {
    const obj = { a: 1 }
    const out = surveillance.annotators.addToken()(obj)
    expect(out.token).toBe('token-from-local-storage')
    expect(window.localStorage.getItem.mock.calls).toEqual([
      ['__surveillance_token__'],
    ])
  })

  it("generates a new token if there isn't one in localStorage", () => {
    const obj = { a: 1 }
    window.localStorage.getItem.mockImplementationOnce(() => null)
    const out = surveillance.annotators.addToken()(obj)
    expect(window.localStorage.getItem.mock.calls).toEqual([
      ['__surveillance_token__'],
    ])
    expect(window.localStorage.setItem.mock.calls).toEqual([
      ['__surveillance_token__', out.token],
    ])
  })

  it('adds a token even if localStorage throws', () => {
    const obj = { a: 1 }
    window.localStorage.getItem = jest.fn(() => {
      throw Error()
    })
    const out = surveillance.annotators.addToken()(obj)
    expect(out.token).toBeDefined()
    expect(out.token.length).toBe(36)
  })
})
