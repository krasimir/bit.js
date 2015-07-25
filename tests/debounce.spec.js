var chai = require('chai');
var sinon = require('sinon');
chai.use(require('sinon-chai'));

var expect = chai.expect;

describe('Given Function.prototype.debounce', function() {

  before(function () {
    require('../build/bit');
  });

  describe('when debounce is used', function () {

    it('should call my function only once per given time limit', function (done) {
      var f = function () {};
      var spy = sinon.spy(f);
      var patched = spy.debounce(50);
      var interval = setInterval(patched, 2);
      setTimeout(function () {
        clearInterval(interval);
        expect(spy.callCount).to.be.equal(4);
        done();
      }, 200);
    });

  });

});