var chai = require('chai');
var sinon = require('sinon');
chai.use(require('sinon-chai'));

var expect = chai.expect;

describe('Given Function.prototype.format', function() {

  before(function () {
    require('../build/bit');
  });

  describe('when format is used', function () {

    it('should return formatted result', function () {
      var toUpperCase = function (s) { return s.toString().toUpperCase(); };
      var A = function () { return 'Winter'; }.format(toUpperCase);
      var B = function () { return 'is coming'; }.format(toUpperCase);
      var C = function () { return A() + ' ' + B(); };
      expect(C()).to.be.equal('WINTER IS COMING');
    });

  });

});