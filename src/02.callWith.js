Function.prototype.callWith = function () {
  var original = this;
  var additionalArgs = argsToArray(arguments);
  return function () {
    var originalArgs = argsToArray(arguments);
    return original.apply(this, originalArgs.concat(additionalArgs));
  };
};