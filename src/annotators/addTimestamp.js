const addTimestamp = e => ({
  ...e,
  timestamp: Date.now(),
})

export default addTimestamp
