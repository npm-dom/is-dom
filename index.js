'use strict'
var isObject = require('is-object')
var isWindow = require('is-window')

function isNode (val) {
  return !isObject(val)
    ? false
    : (!isWindow(window) || typeof window.Node !== 'function')
      ? false
      : (typeof val.nodeType === 'number') &&
        (typeof val.nodeName === 'string')
}

module.exports = isNode
