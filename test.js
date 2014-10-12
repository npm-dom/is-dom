/*eslint no-unused-expressions: 0*/

/**
 * Module dependencies
 */

var jsdom = require('jsdom').jsdom;
var isDom = require('./index');

/**
 * Setup DOM env.
 */

beforeEach(function() {
  global.document = jsdom('<html><body></body></html>');
  global.window = document.parentWindow;
});

/**
 * Test
 */

describe('is-dom', function() {
  it('should check if supplied argument is a dom node', function() {
    isDom(2).should.equal(false)
    isDom('foo').should.equal(false)
    isDom(/asda/).should.equal(false)
    isDom({}).should.equal(false);
    isDom({nodeType: 1, nodeName: 'BODY'}).should.equal(true)
    isDom(global.window).should.equal(false);
    isDom(global.document).should.equal(true);
  });
});
