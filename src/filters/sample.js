import { stop } from '../pipeline'

const n = Math.random()

const sample = ({ rate }) => {
  if (n < rate) {
    return data => data
  } else {
    const sampler = data => stop
    sampler[stop] = true
    return sampler
  }
}

export default sample
