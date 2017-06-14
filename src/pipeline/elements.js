/**
 * ## pipes/elements.js
 *
 * elements for the construction of pipelines
 */

export const fork = (...fns) => data => Promise.all(fns.map(f => f(data)))

export const mergeWith = (target = {}) => datas =>
  datas.reduce((a, b) => ({ ...a, ...b }), target)

export const merge = mergeWith({})

export const pipe = (...fns) => {
  const composedFns = fns.reverse().reduce((fn, prev) => v => fn(prev(v)))
  return data => composedFns(data)
}