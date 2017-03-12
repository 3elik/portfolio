var slider = (function () {
  var counter = 2,
    duration = 300,
    loading = false,
    showEl = $('.examples__preview-img'),
    titleEl = $('.examples__title'),
    techEl = $('.examples__subtitle'),
    linkEl = $('.examples__link'),
    partDown = $('.slider__part--down'),
    partUp = $('.slider__part--up');

  var moveSlide = function (container, direction) {
    var items = $('.slider__preview', container),
      activeItem = items.filter('.slider__preview--active'),
      direction = direction == 'down' ? '100' : '-100';

    if (counter >= items.length) counter = 0;
    if (counter < 0) counter = items.length - 1;

    var eq = direction == '100' ? counter + 1 : counter - 1;

    if (eq >= items.length) eq = 0;
    if (eq < 0) eq = items.length - 1;
    var reqItem = items.eq(eq);

    activeItem.animate({
      'top' : direction + '%'
    }, duration);
    reqItem.animate({
      'top' : '0%'
    }, duration, function () {
      activeItem
        .removeClass('slider__preview--active')
        .css('top', -direction + '%');
      $(this).addClass('slider__preview--active');
    })
  };

  var showSlide = function (container, direction) {
    var items = $('.slider__preview', container),
      activeItem = items.filter('.slider__preview--active'),
      index = items.index(activeItem) - 1,
      fadedOut = $.Deferred(),
      loaded = $.Deferred();

    if (direction == 'down') {
      index--;
    } else {
      index++;
    }
    var showItem = items.eq(index),
      src = showItem.attr('src'),
      title = showItem.data('title'),
      tech = showItem.data('tech'),
      link = showItem.data('link');

    showEl.fadeOut(function () {
      fadedOut.resolve();
      titleEl.fadeOut(duration, function () {
        titleEl.text(title);
      });
      techEl.fadeOut(duration, function () {
        techEl.text(tech);
      });
    });

    fadedOut.done(function () {
      showEl.attr('src', src).on('load', function () {
        loaded.resolve();
        linkEl.attr('href', link);
      })
    });

    loaded.done(function () {
      showEl.fadeIn();
      titleEl.fadeIn();
      techEl.fadeIn();
      loading = false;
    })
  };

  return {
    init : function () {
      $('.slider__arrow--down').on('click', function (e) {
        e.preventDefault();

        if (!loading) {
          loading = true;
          counter--;
          moveSlide(partDown, 'down');
          moveSlide(partUp, 'up');
          showSlide(partDown, 'up');
        }
      });
      $('.slider__arrow--up').on('click', function (e) {
        e.preventDefault();

        if (!loading) {
          loading = true;
          counter++;
          moveSlide(partDown, 'down');
          moveSlide(partUp, 'up');
          showSlide(partUp, 'up');
        }
      });
    }
  }
})();
