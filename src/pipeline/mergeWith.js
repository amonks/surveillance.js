const mergeWith = (target = {}) => datas =>
  datas.reduce((a, b) => ({ ...a, ...b }), target)

export default mergeWith
