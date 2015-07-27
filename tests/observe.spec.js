var chai = require('chai');
var sinon = require('sinon');
chai.use(require('sinon-chai'));

var expect = chai.expect;

describe('Given Function.prototype.observe', function() {

  before(function () {
    require('../build/bit');
  });

  describe('when observe is used', function () {

    it('should call the handler every time when my function is executed', function () {
      var something = 0;
      var handlerSpy = sinon.spy();
      var f = function () { something += 1; return f; }.observe(handlerSpy);
      f()()()();
      expect(handlerSpy.callCount).to.be.equal(4);
      expect(something).to.be.equal(4);
    });

  });

});