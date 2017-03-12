var hamburger = (function () {
  var hamburger = $('.js-hamburger'),
    fullscreen = $('.js-fullscreen');

  return {
    init: function () {
      $('.hamburger__link').on('click', function (e) {
        e.preventDefault();
        hamburger.toggleClass('hamburger--open');
        fullscreen.fadeToggle();
      })
    }
  }
})();
