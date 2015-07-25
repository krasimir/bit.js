var chai = require('chai');
var expect = chai.expect;

suite('Function.prototype.callWith', function() {

  beforeEach(function () {
    require('../build/bit');
  });

  test ('callWith should exist', function () {
    var f = function () {};
    expect(f.callWith).to.not.be.undefined;
  });

});