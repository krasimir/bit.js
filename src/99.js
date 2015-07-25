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