import { uuid } from '../util'

const localStorageKey = '__surveillance_token__'

const getToken = () => {
  let token = null

  // return a token from localStorage if there is one
  try {
    token = window.localStorage.getItem(localStorageKey)
    if (token) return token
  } catch (e) {}

  token = uuid()

  // try to set the new token in localStorage
  try {
    window.localStorage.setItem(localStorageKey, token)
  } catch (e) {}

  return token
}

/**
 * ### addToken
 *
 * () -> Object -> Object
 *
 * addToken takes an object and adds a token property to it.
 *
 * The property is called 'token'.
 *
 * addToken saves its token in localStorage and tries to reuse it later. If a token is not found in localStorage (or localStorage errors), it uses a uuid. Even if localStorage errors, the token is kept in memory.
 */

const addToken = () => {
  const token = getToken()
  return data => ({
    ...data,
    token,
  })
}

export default addToken
