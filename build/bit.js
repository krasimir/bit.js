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