(function() {

  var argsToArray = function (a) {
    return Array.prototype.slice.call(a);
  };
Function.prototype.callWith = function () {
  var original = this;
  var additionalArgs = argsToArray(arguments);
  return function () {
    var originalArgs = argsToArray(arguments);
    return original.apply(this, originalArgs.concat(additionalArgs));
  };
};
Function.prototype.once = function () {
  var original = this;
  var isItCalled = false;
  return function () {
    if (!isItCalled) {
      isItCalled = true;
      return original.apply(this, argsToArray(arguments));
    }
  };
};
Function.prototype.twice = function () {
  var original = this;
  var called = 0;
  return function () {
    if (called++ < 2) {
      return original.apply(this, argsToArray(arguments));
    }
  };
};
  var bit = {};
  var root = this;
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = bit;
    }
    exports.bit = bit;
  } 
  else {
    root.bit = bit;
  }

}).call(this);