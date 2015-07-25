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