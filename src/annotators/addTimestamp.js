/**
 * ### addTimestamp
 *
 * () -> Object -> Object
 *
 * addTimestamp takes an object and adds a timestamp property to it. The property is called 'timestamp'.
 */

const addTimestamp = () => e => ({
  ...e,
  timestamp: Date.now(),
})

export default addTimestamp
