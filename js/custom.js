(function($) {
  "use strict";
  var mainApp = {
    main_fun: function() {
      $('a[href*=#]').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
          location.hostname == this.hostname) {
          var $target = $(this.hash);
          $target = $target.length && $target ||
            $('[name=' + this.hash.slice(1) + ']');
          if ($target.length) {
            var targetOffset = $target.offset().top;
            $('html,body')
              .animate({
                scrollTop: targetOffset
              }, 800);
            return false;
          }
        }
      });
      $('.carousel').carousel({
        interval: 3000
      })
    },
    initialization: function() {
      mainApp.main_fun();
    }
  }
  $(document).ready(function() {
    mainApp.main_fun();
  });
});
$('.scryt').click(function() {
  $('#about').fadeToggle(100);
  $('.1').fadeToggle(100);
});
function bigImg(x) {
  x.style.width = "170px";
  x.style.margin = "0px";
  x.style.border = "solid";
}

function normalImg(x) {
  x.style.width = "150px";
  x.style.margin = "10px";
  x.style.border = "none";
}
