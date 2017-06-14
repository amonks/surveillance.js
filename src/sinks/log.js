const log = (config = {}) => {
  const logger = config.logger || console.log.bind(console)
  const message = config.message || 'surveillance data'
  return data => {
    logger(`${message}: ${JSON.stringify(data, null, 2)}`)
    return data
  }
}

export default log
