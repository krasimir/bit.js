Function.prototype.format = function (formatter) {
  var original = this;
  return function () {
    return formatter(original.apply(this, argsToArray(arguments)));
  };
};