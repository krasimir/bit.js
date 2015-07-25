App.register(function () {

  var ui = getUI('.js-debounce');

  var handler = function (e) {
    ui.output('button clicked');
  }.debounce(1000);

  ui.buttons[0].addEventListener('click', handler);

});