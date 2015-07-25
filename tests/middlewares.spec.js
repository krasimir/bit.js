var chai = require('chai');
var sinon = require('sinon');
chai.use(require('sinon-chai'));

var expect = chai.expect;

describe('Given Function.prototype.middlewares', function() {

  before(function () {
    require('../build/bit');
  });

  describe('when middlewares is used', function () {

    it('should transform the result of my function', function () {
      var A = function (n) { return n * 2; }
      var B = function (n) { return n + 10; }
      var f = function (n) {
        return n;
      }.middlewares(A, B);
      expect(f(42)).to.be.equal(94);
    });

  });

});