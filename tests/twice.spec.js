var chai = require('chai');
var sinon = require('sinon');
chai.use(require('sinon-chai'));

var expect = chai.expect;

describe('Given Function.prototype.twice', function() {

  before(function () {
    require('../build/bit');
  });

  describe('when twice is used', function () {
    var f = function (a, b) {
      return a + ' ' + b;
    }

    it('should call my function twice', function () {
      var spy = sinon.spy(f);
      var fPatched = spy.twice();
      fPatched('Winter', 'is coming');
      fPatched('Winter', 'is coming');
      fPatched('Winter', 'is coming');
      fPatched('Winter', 'is coming');
      fPatched('Winter', 'is coming');
      expect(spy).to.be.calledTwice;
    });

    it('should call my function twice and receive proper result', function () {
      var spy = sinon.spy(f);
      var fPatched = spy.twice();
      var result = fPatched('Winter', 'is coming');
      fPatched('Winter', 'is coming');
      fPatched('Winter', 'is coming');
      expect(result).to.be.equal('Winter is coming');
    });

  });

});