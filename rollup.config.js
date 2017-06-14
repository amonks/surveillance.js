import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import uglify from 'rollup-plugin-uglify'

const ejs = {
  context: 'window',
  dest: 'dist/surveillance.mjs',
  entry: 'src/index.js',
  format: 'es',
  plugins: [
    resolve(),
    commonjs(),
    babel({ runtimeHelpers: true, exclude: 'node_modules/**' }),
  ],
  sourceMap: true,
}
const cjs = {
  context: 'window',
  dest: 'dist/surveillance.js',
  entry: 'src/index.js',
  format: 'cjs',
  plugins: [
    resolve(),
    commonjs(),
    babel({ runtimeHelpers: true, exclude: 'node_modules/**' }),
  ],
  sourceMap: true,
}
const umd = {
  context: 'window',
  dest: 'dist/surveillance.min.js',
  entry: 'src/index.js',
  moduleName: 'Surveillance',
  format: 'umd',
  plugins: [
    resolve(),
    commonjs(),
    babel({ runtimeHelpers: true, exclude: 'node_modules/**' }),
    uglify(),
  ],
  sourceMap: true,
}

export default [ejs, cjs, umd]
