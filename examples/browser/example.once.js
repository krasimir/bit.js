App.register(function () {

  var ui = getUI('.js-once');

  var handler = function (e, message) {
    ui.output('button clicked');
  }.once();

  ui.buttons[0].addEventListener('click', handler);

});