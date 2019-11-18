const isObject = require(`is-object`)
const isWindow = require(`is-window`)

function isNode(val) {
	if (!isObject(val) || !isWindow(window) || !(`Node` in window)) {
		return false
	}

	return typeof val.nodeType === `number`
		&& typeof val.nodeName === `string`
}

module.exports = isNode
