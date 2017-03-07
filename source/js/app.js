$(document).ready(function () {

  //sidebar for tablet
  (function () {
    $(document).ready(function () {
      $('.sidebar__circle').on('click', function (e) {
        var $this = $(this),
          sidebar = $('.sidebar');
        if(sidebar.hasClass('sidebar__circle--active')) {
          sidebar
            .animate({
              'left' : '-90%'
            })
            .removeClass('sidebar__circle--active');
          $('.container')
            .animate({
              'left': '0'
            })
        } else {
          sidebar
            .addClass('sidebar__circle--active')
            .animate({
              'left' : '0'
            });
          $('.container')
            .animate({
              'left' : '90%'
            });
        }
      })
    });
  })();

  //skills
  var skills = function () {
    var skillItems = $('.skill__circle .skill__sector');
    skillItems.each(function (i, skill) {
      var $skill = $(skill),
        dasharray = $skill.data('stroke-dasharray'),
        opacity = $skill.data('stroke-opacity');
      skill
        .setAttribute('stroke-dasharray', dasharray);

      skill
        .setAttribute('stroke-opacity', opacity);
    })
  };

  window.onscroll = function () {
    var winScroll = window.pageYOffset;
    if (winScroll > innerHeight / 3) {
      skills();
    }
  };
});
//map
(function () {
  if ($('#map').length < 1) return;
  // When the window has finished loading create our google map below
  google.maps.event.addDomListener(window, 'load', init);

  function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
      scrollwheel: false,
      // How zoomed in you want the map to start at (always required)
      zoom: 14,

      // The latitude and longitude to center the map (always required)
      center: new google.maps.LatLng(51.601549,45.9607903),

      // How you would like to style the map.
      // This is where you would paste any style found on Snazzy Maps.
      styles: [
        {
          "featureType": "all",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#434343"
            }
          ]
        },
        {
          "featureType": "all",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#ffffff"
            },
            {
              "lightness": 13
            }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "all",
          "stylers": [
            {
              "saturation": "-100"
            }
          ]
        },
        {
          "featureType": "administrative.province",
          "elementType": "all",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "landscape",
          "elementType": "all",
          "stylers": [
            {
              "saturation": -100
            },
            {
              "lightness": 65
            },
            {
              "visibility": "on"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "all",
          "stylers": [
            {
              "saturation": -100
            },
            {
              "lightness": "50"
            },
            {
              "visibility": "simplified"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "all",
          "stylers": [
            {
              "saturation": "-100"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "all",
          "stylers": [
            {
              "visibility": "simplified"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "all",
          "stylers": [
            {
              "lightness": "30"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "all",
          "stylers": [
            {
              "lightness": "40"
            }
          ]
        },
        {
          "featureType": "transit",
          "elementType": "all",
          "stylers": [
            {
              "saturation": -100
            },
            {
              "visibility": "simplified"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
            {
              "hue": "#ffff00"
            },
            {
              "lightness": -25
            },
            {
              "saturation": -97
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#86a77a"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels",
          "stylers": [
            {
              "lightness": -25
            },
            {
              "saturation": -100
            }
          ]
        }
      ]
    };

    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    var markerImage = new google.maps.MarkerImage(
      './assets/img/map_marker.svg',
      new google.maps.Size(38,52),
      new google.maps.Point(0,0),
      new google.maps.Point(0,52),
      new google.maps.Size(38, 52)
    );

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
      icon: markerImage,
      position: new google.maps.LatLng(51.601289, 45.9621467),
      map: map,
      title: 'Snazzy!'
    });
  }
})();

var preloader = (function () {
  var preloader = $('.preloader'),
    total = 0;

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

    $('.preloader__text').text(percents + '%');

    if (percents >= 100) {
      preloader.fadeOut();
    }
  };

  var loadImages = function (images) {
    if (!images.length) preloader.fadeOut();

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

var slider = (function () {
  var counter = 2,
    duration = 300,
    loading = false,
    showEl = $('.examples__preview-img'),
    titleEl = $('.examples__title'),
    techEl = $('.examples__subtitle'),
    linkEl = $('.examples__link');

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
          moveSlide($('.slider__part--down'), 'down');
          moveSlide($('.slider__part--up'), 'up');
          showSlide($('.slider__part--down'), 'up');
        }
      });
      $('.slider__arrow--up').on('click', function (e) {
        e.preventDefault();

        if (!loading) {
          loading = true;
          counter++;
          moveSlide($('.slider__part--down'), 'down');
          moveSlide($('.slider__part--up'), 'up');
          showSlide($('.slider__part--up'), 'up');
        }
      });
    }
  }
})();

var hamburger = (function () {
  var hamburger = $('.hamburger'),
    fullscreen = $('.fullscreen');

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


$(function () {
  preloader.init();
  slider.init();
  hamburger.init();
});