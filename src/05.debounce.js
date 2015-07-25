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