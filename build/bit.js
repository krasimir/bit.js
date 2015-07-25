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
Function.prototype.debounce = function (limit) {
  var original = this;
  var wait = false;
  return function () {
    var originalArgs = argsToArray(arguments);
    if (!wait) {
      wait = true;
      original.apply(this, originalArgs);
      setTimeout(function () {
        wait = false;
      }, limit);
    }
  };
};
Function.prototype.callIf = function (condition) {
  var original = this;
  return function () {
    var originalArgs = argsToArray(arguments);
    if (condition.apply(this, originalArgs)) {
      return original.apply(this, originalArgs);
    }
  };
};
Function.prototype.format = function (formatter) {
  var original = this;
  return function () {
    return formatter(original.apply(this, argsToArray(arguments)));
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