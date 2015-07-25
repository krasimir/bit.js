App.register(function () {

  var ui = getUI('.js-callWith');

  var handler = function (e, message) {
    ui.output(message);
  }

  ui.buttons[0].addEventListener('click', handler.callWith('Button A pressed'));
  ui.buttons[1].addEventListener('click', handler.callWith('Button B pressed'));

});