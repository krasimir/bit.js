Function.prototype.__bitjsEnabledFlag = true;
Function.prototype.enabled = function (flag) {
  var original = this;
  var isBitJsMimicDefined = typeof original.__bitjsOriginalF !== 'undefined';
  original.__bitjsOriginalF = original.__bitjsOriginalF || this;
  original.__bitjsOriginalF.__bitjsEnabledFlag = typeof flag !== 'undefined' ? flag : true;
  if (isBitJsMimicDefined) return original.__bitjsOriginalF;
  var f = function () {
    if (original.__bitjsOriginalF.__bitjsEnabledFlag) {
      return original.apply(this, argsToArray(arguments));
    }
  };
  f.__bitjsOriginalF = original.__bitjsOriginalF;
  return f;
};