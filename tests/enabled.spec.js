var chai = require('chai');
var sinon = require('sinon');
chai.use(require('sinon-chai'));

var expect = chai.expect;

describe('Given Function.prototype.enabled', function() {

  before(function () {
    require('../build/bit');
  });

  describe('when enabled is used', function () {

    it('should return formatted result', function () {
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

  });

});