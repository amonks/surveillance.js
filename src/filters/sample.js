import { stop } from '../pipeline'

/**
 * ### sample
 *
 * ({rate: number}) => (Object -> Object) | (Object -> Stop)
 *
 * Sample takes a rate between 0 and 1, generates a random number between 0 and 1, and only continues the pipeline if the number is below the rate.
 */

const sample = ({ rate }) => {
  const n = Math.random()

  if (n < rate) {
    return data => data
  } else {
    const sampler = data => stop
    sampler[stop] = true
    return sampler
  }
}

export default sample
