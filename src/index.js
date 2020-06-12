const { resolve } = require('path')
const _ = require('lodash')
const { DEFAULT_OPTIONS } = require('./helpers/constant')
module.exports = function (userOptions) {
  const options = _.merge(
    {},
    DEFAULT_OPTIONS,
    userOptions,
    this.options.noxTracker
  )
  const { gtag, sa } = options
  if (gtag.id) {
    this.addPlugin({
      src: resolve(__dirname, './plugins/gtag.plugin.js'),
      fileName: 'nox-track-gtag.js',
      options: Object.assign({}, gtag),
      mode: 'client',
    })
    this.options.head.script.push({
      src: `https://www.googletagmanager.com/gtag/js?id=${gtag.id}`,
      async: true,
    })
  }
  if (sa.id) {
    this.addPlugin({
      src: resolve(__dirname, './plugins/sa.plugin.js'),
      fileName: 'nox-track-sa.js',
      options: Object.assign({}, sa),
      mode: 'client',
    })
  }
  this.addPlugin({
    src: resolve(__dirname, './plugins/track.plugin.js'),
    fileName: 'nox-track.js',
    options,
    mode: 'client',
  })
}

module.exports.meta = require('../package.json')
