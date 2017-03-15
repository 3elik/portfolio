$(document).ready(function () {

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

$(function () {
  preloader.init();
  slider.init();
  hamburger.init();
  sidebar.init();
  sticky_sidebar.init();
  auth.init();
});