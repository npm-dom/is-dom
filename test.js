'use strict'
const test = require(`tape`)

const isDom = require(`./index.js`)

test(`is-dom`, t => {
	t.plan(14)
	console.log(`wat`)
	t.equal(isDom(null), false)
	t.equal(isDom(null), false)
	t.equal(isDom(false), false)
	t.equal(isDom(new Date()), false)

	t.equal(isDom(), false)
	t.equal(isDom([]), false)
	t.equal(isDom(2), false)
	t.equal(isDom(`foo`), false)
	t.equal(isDom(/asda/), false)
	t.equal(isDom({}), false)


	t.equal(isDom({ nodeType: 1, nodeName: `BODY` }), true)
	t.equal(isDom(document.createElement(`body`)), true)
	t.equal(isDom(window), false)
	t.equal(isDom(document), true)
})
