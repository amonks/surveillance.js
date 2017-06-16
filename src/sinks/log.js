/**
 * ### surveillance.sinks.log
 *
 * ({ logger: function, message: String }) -> Object -> Object
 *
 * logs a message and an object with the given logger, returning the object.
 *
 * the default logger is 'console.log.bind(console)'.
 *
 * the default message is 'surveillance data'.
 */

const log = (config = {}) => {
  const logger = config.logger || console.log.bind(console)
  const message = config.message || 'surveillance data'
  return data => {
    logger(`${message}: ${JSON.stringify(data, null, 2)}`)
    return data
  }
}

export default log
