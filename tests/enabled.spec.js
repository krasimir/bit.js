var chai = require('chai');
var sinon = require('sinon');
chai.use(require('sinon-chai'));

var expect = chai.expect;

describe('Given Function.prototype.enabled', function() {

  before(function () {
    require('../build/bit');
  });

  describe('when enabled is used', function () {

    it('should disable and enable a function execution', function () {
      var spy = sinon.spy();
      var f = function () { spy(); return f; }.enabled(false);
      f();
      f();
      f.enabled(true);
      f();
      f();
      f();
      f.enabled(false);
      f();
      f();
      expect(spy.callCount).to.be.equal(3);
    });

    it('should allow chaining', function () {
      var spy = sinon.spy();
      var f = function () { spy(); return f; }.enabled(false);
      f();
      f();
      f.enabled(true)()()().enabled(false);
      f();
      f();
      expect(spy.callCount).to.be.equal(3);
    });

  });

});