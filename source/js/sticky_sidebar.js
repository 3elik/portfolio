var sticky_sidebar = (function () {
  var sb_m = 70; /* отступ сверху и снизу */
  var mb = 300; /* высота подвала с запасом */
  var sb = $(".js-sidebar");
  var sbi = $(".sidebar__list");
  return {
    init: function () {
      if (!sb.length) return;
      $(window).scroll(function() {
        var st = $(window).scrollTop();
        var sb_ot = sb.offset().top;
        var sbi_ot = sbi.offset().top;
        var sb_h = sb.height();

        if(sb_h + $(document).scrollTop() + sb_m + mb < $(document).height()) {
          if(st > sb_ot) {
            var h = Math.round(st - sb_ot) + sb_m;
            sb.animate({"paddingTop" : h}, {duration: 10});
          }
          else {
            sb.animate({"paddingTop" : sb_m}, {duration: 10});
          }
        }
      });
    }
  }
})();
