import { resolve } from 'path'

import R from 'ramda'

import {
  addBabel,
  addCJS2,
  addMinify,
  addName,
  addOutputPath,
  addProduction,
  addProgress,
  addSourcemap,
  addUMD,
  base,
} from '@amonks/webpack-helpers'

const addSrc = R.pipe(R.assoc('entry', [resolve(__dirname, 'src/index.js')]))

const common = R.pipe(
  addSrc,
  addSourcemap,
  addBabel,
  addProgress,
  addName('surveillance'),
)

const config = [
  // cjs
  R.pipe(common, addOutputPath(resolve(__dirname, 'dist/cjs')), addCJS2)(base),
  // cjs.min
  R.pipe(
    common,
    addOutputPath(resolve(__dirname, 'dist/cjs')),
    addCJS2,
    addMinify,
    addProduction,
  )(base),

  // umd
  R.pipe(common, addOutputPath(resolve(__dirname, 'dist/umd')), addUMD)(base),
  // umd.min
  R.pipe(
    common,
    addOutputPath(resolve(__dirname, 'dist/umd')),
    addUMD,
    addMinify,
    addProduction,
  )(base),
]

export default config
