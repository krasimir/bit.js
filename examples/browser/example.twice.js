App.register(function () {

  var ui = getUI('.js-twice');

  var handler = function (e) {
    ui.output('button clicked');
  }.twice();

  ui.buttons[0].addEventListener('click', handler);

});