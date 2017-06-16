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

const addToken = data => ({
  ...data,
  token: getToken(),
})

export default addToken
