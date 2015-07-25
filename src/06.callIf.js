Function.prototype.callIf = function (condition) {
  var original = this;
  return function () {
    var originalArgs = argsToArray(arguments);
    if (condition.apply(this, originalArgs)) {
      return original.apply(this, originalArgs);
    }
  };
};