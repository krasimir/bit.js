Function.prototype.twice = function () {
  var original = this;
  var called = 0;
  return function () {
    if (called++ < 2) {
      return original.apply(this, argsToArray(arguments));
    }
  };
};