/**
 * ### surveillance.pipeline.mergeWith
 *
 * Object -> (...Object) -> Object
 *
 * Merges a bunch of objects with a given object
 */

const mergeWith = (target = {}) => datas =>
  datas.reduce((a, b) => ({ ...a, ...b }), target)

export default mergeWith
