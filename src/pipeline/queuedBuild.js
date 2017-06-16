import makeQueue from '../util/makeQueue'

import build from './build'

/**
 * ### surveillance.pipeline.queuedBuild
 *
 * conf -> Object -> Object
 *
 * like build, but returns immediately and enqueues events until the pipeline is built
 */

const queuedBuild = conf => makeQueue(build(conf))

export default queuedBuild
