/*
Duplicate menu list from sidebar to navbar
*/
var side_menu_list = document.querySelector('#menu ul.navbar-nav').innerHTML;
document.querySelector('#panel ul.navbar-nav').innerHTML = side_menu_list;

/*
Slideout (a.k.a sidebar menu)
*/
var slideout = new Slideout({
  'panel': document.getElementById('panel'),
  'menu': document.getElementById('menu'),
  'padding': 256,
  'tolerance': 70
});

/*
Slideout toggle button (a.k.a hamburger button)
*/
document.querySelector('.toggle-button').addEventListener('click', function() {
  slideout.toggle();
});

/*
Swiper (a.k.a welcome banner)
*/
var mySwiper = new Swiper('.swiper-container', {
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
