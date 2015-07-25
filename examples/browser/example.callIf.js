App.register(function () {

  var ui = getUI('.js-callIf');

  var isYesPressed = function (e, type) {
    return type === 'Yes';
  }

  var handler = function (e) {
    ui.output('Yes clicked');
  }.callIf(isYesPressed);

  ui.buttons[0].addEventListener('click', handler.callWith('Yes'));
  ui.buttons[1].addEventListener('click', handler.callWith('No'));

});