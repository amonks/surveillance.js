const babel = require('babel-core')

const config = {
  presets: [['env', { loose: true }]],
  plugins: ['transform-export-extensions', 'transform-object-rest-spread'],
}

module.exports = {
  process(src, path) {
    return babel.transform(src, config).code
  },
}
