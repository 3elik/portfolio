var tabs = (function () {
  const nav = $('.tabs'),
    tabs = $('.tabs__item'),
    links = $('.tabs__link'),
    panels = $('.panels__panel'),
    activeTabClass = 'tabs__item--active',
    activePanelClass = 'panels__panel--active';

  return {
    init: function () {
      if (nav.length > 0) {
        links.on('click', function (e) {
          e.preventDefault();
          let $this = $(this),
            target = $this.data('target');

          tabs.removeClass(activeTabClass);
          panels.removeClass(activePanelClass);

          $this.parent().addClass(activeTabClass);
          $(target).addClass(activePanelClass);
        })
      }
    }
  }
})();
