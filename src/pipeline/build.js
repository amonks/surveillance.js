/**
 * ## surveillance/pipeline/build
 *
 * build a reactiveish pipeline from a simple data structure
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

    default:
      throw Error(`unexpected item type in pipeline.\n"${pipeline}"`)
  }
}

export default build
