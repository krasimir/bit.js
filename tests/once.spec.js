var chai = require('chai');
var sinon = require('sinon');
chai.use(require('sinon-chai'));

var expect = chai.expect;

describe('Given Function.prototype.once', function() {

  before(function () {
    require('../build/bit');
  });

  describe('when once is used', function () {
    var f = function (a, b) {
      return a + ' ' + b;
    }

    it('should call my function only once', function () {
      var spy = sinon.spy(f);
      var fPatched = spy.once();
      fPatched('Winter', 'is coming');
      fPatched('Winter', 'is coming');
      fPatched('Winter', 'is coming');
      expect(spy).to.be.calledOnce;
    });

    it('should call my function only once and receive proper result', function () {
      var spy = sinon.spy(f);
      var fPatched = spy.once();
      var result = fPatched('Winter', 'is coming');
      fPatched('Winter', 'is coming');
      fPatched('Winter', 'is coming');
      expect(result).to.be.equal('Winter is coming');
    });

  });

});