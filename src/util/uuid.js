// https://stackoverflow.com/a/8809472
const uuid = () => {
  let timestamp = new Date().getTime()
  if (
    typeof window.performance !== 'undefined' &&
    typeof window.performance.now === 'function'
  ) {
    timestamp += window.performance.now() // use high-precision timer if available
  }

  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    var r = ((timestamp + Math.random() * 16) % 16) | 0
    timestamp = Math.floor(timestamp / 16)
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16)
  })
}

export default uuid
