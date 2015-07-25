var chai = require('chai');
var sinon = require('sinon');
chai.use(require('sinon-chai'));

var expect = chai.expect;

describe('Given the Function.prototype.callWith', function() {

  before(function () {
    require('../build/bit');
  });

  describe('when callWith is used should mimic my function behavior', function () {
    var f = function (a, b) {
      return a + ' ' + b;
    }

    it('and return the same value', function () {
      var fPatched = f.callWith('is coming');
      var result = fPatched('Winter');
      expect(result).to.be.equal('Winter is coming');
    });

    it('and should be called with right arguments', function () {
      var spy = sinon.spy(f);
      var fPatched = spy.callWith('is coming');
      fPatched('Winter');
      expect(spy).to.be.calledWith('Winter', 'is coming');
    });

    it('and should be called within right context', function () {
      var Class = function () {
        this.character = 'Jon Snow';
        this.message = this.whatsUp('Winter');
      }
      Class.prototype.whatsUp = function (a, b) {
        return this.character + ': ' + a + ' ' + b;
      }.callWith('is coming');

      var c = new Class();
      expect(c.message).to.be.equal('Jon Snow: Winter is coming');
    });

  });

});