var preloader = (function () {
  var preloader = $('.js-preloader'),
    total = 0,
    textPercent = $('.preloader__text'),
    hello = $('.hello__wrapper');

  var imgPaths = $('*').map(function (i, el) {
    var background = $(el).css('background-image');
    var isImg = $(el).is('img');
    var path = '';

    if (background != 'none') {
      path = background.replace('url("', '').replace('")', '');
    }

    if (isImg) {
      path = $(el).attr('src');
    }

    if (path) return path;
  });

  var setPercents = function (total, current) {
    var percents = Math.ceil(current / total * 100);

    textPercent.text(percents + '%');

    if (percents >= 100) {
      end_preloader();
    }
  };
  var end_preloader = function () {
    preloader.fadeOut();
    if (hello.length > 0) hello.addClass('hello__wrapper--displayed');
  };

  var loadImages = function (images) {
    if (!images.length) end_preloader();

    images.forEach(function (img, i, images) {
      var fakeImg = $('<img>', {
        attr: {
          src: img
        }
      });

      fakeImg.on('load error', function () {
        total++;
        setPercents(images.length, total);
      })
    })
  };

  return {
    init: function () {
      var imgs = imgPaths.toArray();
      loadImages(imgs);
    }
  }
})();
