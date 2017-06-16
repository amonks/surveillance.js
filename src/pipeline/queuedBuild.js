import makeQueue from '../util/makeQueue'

import build from './build'

const queuedBuild = conf => makeQueue(build(conf))

export default queuedBuild
