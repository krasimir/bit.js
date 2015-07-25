var $ = function (selector) {
  return document.querySelector(selector);
}
var $$ = function (selector) {
  return document.querySelectorAll(selector);
}
var getUI = function (sectionSelector) {
  var outputEl = $(sectionSelector + ' .output');
  var outputMessages = [];
  return {
    button: $(sectionSelector + ' button'),
    buttons: $$(sectionSelector + ' button'),
    output: function (str) {
      outputMessages.push(str);
      outputEl.innerHTML = outputMessages.concat([]).reverse().join('<br />');
    }
  }
}