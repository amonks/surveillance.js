const pick = keys => obj => {
  const newObj = {}
  keys.forEach(key => {
    newObj[key] = obj[key]
  })
  return newObj
}

/**
 * ### surveillance.pipeline.select
 *
 * Select and possibly rename keys from an object.
 *
 * two forms:
 *
 * if the config argument is an array of string keys, select
 * will return a filtered object with only those keys.
 *
 * if you want to rename the keys, pass an object that maps from
 * the old name to the new name.
 *
 * See the tests for examples.
 */

const select = mappings => {
  switch (true) {
    case Array.isArray(mappings):
      return data => pick(mappings)(data)

    case typeof mappings === 'object':
      return data => {
        const newObj = {}
        Object.entries(mappings).forEach(([oldName, newName]) => {
          newObj[newName] = data[oldName]
        })
        return newObj
      }

    default:
      throw Error('bad input to select')
  }
}

export default select
