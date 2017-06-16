import stop from './stop'

/**
 * ### surveillance.pipeline.pipe
 *
 * (...function) -> Object -> Object
 *
 * reverse-composes a bunch of pipelines
 */

export const pipe = (...fns) => {
  const composedFns = fns.reverse().reduce((fn, prev) => {
    if (prev === stop) return v => stop

    return v => {
      const last = prev(v)
      if (last === stop) return stop
      return fn(last)
    }
  })

  return composedFns
}

export default pipe
