/*global window*/

/**
 * Module dependencies.
 */

var assert = require('assert');

/**
 * Check if object is dom node.
 *
 * @param {Object} val
 * @return {Boolean}
 * @api public
 */

module.exports = function isNode(val){
  assert.equal(typeof val, 'object', 'is-dom: val should be an object');
  if ('object' == typeof window.Node) return val instanceof window.Node;
  return 'number' == typeof val.nodeType && 'string' == typeof val.nodeName;
}
