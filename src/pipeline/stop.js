/**
 * ### surveillance.pipeline.stop
 *
 * String
 *
 * If a pipeline function returns this value, it skips the rest of the pipeline.
 *
 * If a pipeline function _is_ this value, it skips the rest of the pipeline.
 *
 * Use it kinda like a Maybe monad, except without the manual overhead.
 */

export default `___$$$-stop-${Math.random()}-$$$___`
