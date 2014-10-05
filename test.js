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
  it('should assert argument types', function() {
    isDom.bind(null, 'foo')
      .should.throw('is-dom: val should be an object');
  });

  it('should check if object is a dom node', function() {
    isDom({}).should.equal(false);
    isDom(global.window).should.equal(false);
    isDom(global.document).should.equal(true);
  });
});
