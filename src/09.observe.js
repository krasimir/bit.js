Function.prototype.observe = function (handler) {
  var original = this;
  return function () {
    var result = original.apply(this, argsToArray(arguments));
    handler(result);
    return result;
  };
};