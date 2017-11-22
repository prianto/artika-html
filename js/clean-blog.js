(function($) {
  "use strict";

  $("body").on("input propertychange", ".floating-label-form-group", function(e) {
    $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
  }).on("focus", ".floating-label-form-group", function() {
    $(this).addClass("floating-label-form-group-with-focus");
  }).on("blur", ".floating-label-form-group", function() {
    $(this).removeClass("floating-label-form-group-with-focus");
  });

  var menu_list = $( "#menu ul.navbar-nav" ).html();
  $( "#panel .navbar-collapse ul.navbar-nav" ).html(menu_list);

  var mySwiper = new Swiper ('.swiper-container', {
    lazy: true,
    loop: true,
    spaceBetween: 30,
    effect: 'fade',
    autoHeight: true,
    calculateHeight:true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    onSlideChangeStart: function(swiper){
      setSwiperHeight();
    }
  });

  $('#menu').css({visibility: 'visible'});
})(jQuery);

var slideout = new Slideout({
  'panel': document.getElementById('panel'),
  'menu': document.getElementById('menu'),
  'padding': 256,
  'tolerance': 70
});

document.querySelector('.toggle-button').addEventListener('click', function() {
  slideout.toggle();
});
