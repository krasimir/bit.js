var chai = require('chai');
var sinon = require('sinon');
chai.use(require('sinon-chai'));

var expect = chai.expect;

describe('Given Function.prototype.callIf', function() {

  before(function () {
    require('../build/bit');
  });

  describe('when callIf is used', function () {

    it('should call my function if the condition is met', function () {
      var isNightsWatch = function (character) {
        var allowed = ['Jon Snow', 'Denys Mallister', 'Othell Yarwyck'];
        return allowed.indexOf(character) >= 0;
      }
      var visitCastleBlack = function (character) {
        return character + ' visisted Castle Black';
      };
      var spy = sinon.spy(visitCastleBlack);
      var patched = spy.callIf(isNightsWatch);

      expect(patched('Jon Snow')).to.be.equal('Jon Snow visisted Castle Black');
      expect(patched('Drogo')).to.be.undefined;
      expect(spy).to.be.calledOnce;
    });

  });

});