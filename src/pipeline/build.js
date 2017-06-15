/**
 * ## surveillance/pipeline/build
 *
 * build a reactiveish pipeline from a simple data structure
 */

const build = ({ pipeline, elements }) => {
  switch (true) {
    case typeof pipeline === 'function':
      return pipeline

    case typeof pipeline === 'string':
      return elements[pipeline]

    case Array.isArray(pipeline):
      const [ref, ...args] = pipeline
      const fn = build({ pipeline: ref, elements })
      return fn(...args)

    default:
      throw Error(`unexpected item type in pipeline.\n"${pipeline}"`)
  }
}

export default build
