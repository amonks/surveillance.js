/**
 * ### surveillance.pipeline.build
 *
 * (conf | pipeline) -> Promise(Object -> Object)
 *
 * build a reactiveish pipeline from a simple data structure
 *
 * a conf looks like this:
 *
 * ```
 * const conf = {
 *   pipeline: 'fn',
 *   elements: {
 *     fn: event => {...event, annotation: 'fact'}
 *   }
 * }
 * ```
 *
 * a pipeline can be:
 *
 * - a function
 *   - in which case it's used as-is.
 *
 * - a promise that resolves to a function
 *
 * - a string
 *   - in which case it's treated as a reference to a function in the elements object
 *
 * - an array
 *   - in which case it's treated as an s-expression representing a function call. That call should return a function or a promise representing a function, which is used as-is.
 *   - the function position (first in array) is treated as a pipeline itself -- it can be a string reference, for example.
 */

const build = async conf => {
  const { elements, pipeline } = conf.pipeline ? conf : { pipeline: conf }

  switch (true) {
    case typeof pipeline === 'function':
      return pipeline

    case typeof pipeline === 'string':
      const resolvedRef = elements[pipeline]
      if (resolvedRef === undefined) throw Error(`bad ref: ${pipeline}`)
      return resolvedRef

    case Array.isArray(pipeline):
      const [ref, ...args] = pipeline

      // resolve ref (or recursive call, I guess)
      const fn = await build({ pipeline: ref, elements })

      // pass in args
      return await fn(...args)

    case typeof pipeline.then === 'function':
      return await pipeline

    default:
      throw Error(`unexpected item type in pipeline.\n"${pipeline}"`)
  }
}

export default build
