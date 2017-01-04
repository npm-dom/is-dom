module.exports = isNode

function isNode (val) {
  return (!val || typeof val !== 'object')
    ? false
    : (window && typeof window.Node === 'object')
      ? (val instanceof window.Node)
      : (typeof val.nodeType === 'number') &&
        (typeof val.nodeName === 'string')
}
