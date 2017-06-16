/**
 * ### surveillance.pipeline.fork
 *
 * (...function) -> Object -> [Object]
 *
 * splits a pipeline through multiple functions
 */

const fork = (...fns) => data => Promise.all(fns.map(f => f(data)))

export default fork
