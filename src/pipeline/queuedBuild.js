import build from './build'

/**
 * ### makeQueue
 * enqueue sets of args until a function is ready
 *
 * takes a promised function, returns a function immediately
 */

const makeQueue = promisedFn => {
  let queue = []
  let fn = null
  promisedFn.then(f => {
    fn = f
    queue.forEach(([args, cb]) => cb(fn(...args)))
    queue = null
  })
  return (...args) => {
    if (fn) return fn(...args)

    return new Promise(resolve => {
      queue.push([args, resolve])
    })
  }
}

const queuedBuild = conf => makeQueue(build(conf))

export default queuedBuild
