Function.prototype.middlewares = function () {
  var original = this;
  var middlewares = argsToArray(arguments);
  var process = function (result) {
    if (middlewares.length === 0) return result;
    return process(middlewares.shift()(result));
  }
  return function () {
    return process(original.apply(this, argsToArray(arguments)));
  };
};