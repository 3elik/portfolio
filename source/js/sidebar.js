var sidebar = (function () {
  var container = $('.js-container'),
    sidebar = $('.js-sidebar'),
    $items = $('.article'),
    activeClass = 'sidebar__item--active';

  var circleClick = function (e) {
    var $this = $(this);
    if (sidebar.hasClass('sidebar__circle--active')) {
      sidebar
        .animate({
          'right': '100vw'
        })
        .removeClass('sidebar__circle--active');
      // container
      //   .animate({
      //     'left': '0%'
      //   })
    } else {
      sidebar
        .addClass('sidebar__circle--active')
        .animate({
          'right': '10vw'
        });
      // container
      //   .animate({
      //     'left' : '90%'
      //   });
    }
  };

  var linkClick = function (e) {
    e.preventDefault();

    var href = $(this).data('href'),
      el = $(href),
      top = el.offset().top;
    $('html, body').animate({
      scrollTop: top
    });
  };

  var scrollSpy = function() {
    var fromTop = $(document).scrollTop(),
      allItems = [],
      $currentItem;
    allItems = $items.filter(function() {
      return $(this).offset().top < fromTop;
    });
    $currentItem = allItems.eq(allItems.length - 1);

    $('.sidebar__item').removeClass(activeClass);
    if ($currentItem.length < 1) {
      $('.sidebar__item').eq(0).addClass(activeClass);
    } else {
      $($currentItem.data('link')).addClass(activeClass);
    }
  };
  return {
    init: function () {
      $('.sidebar__circle').on('click', circleClick);
      $('.js-sidebar__link').on('click', linkClick);
      $(window).on('scroll', scrollSpy);
    }
  }
})();
