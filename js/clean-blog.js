/*
Duplicate menu list from sidebar to navbar
*/
var side_menu_list = document.querySelector('#menu ul.navbar-nav').innerHTML;
document.querySelector('#panel ul.navbar-nav').innerHTML = side_menu_list;

/*
Slideout (a.k.a sidebar menu)
Slideout toggle button (a.k.a hamburger button)
*/
var slideout = new Slideout({
  'panel': document.getElementById('panel'),
  'menu': document.getElementById('menu'),
  'padding': 256,
  'tolerance': 70
});
document.querySelector('.toggle-button').addEventListener('click', function() {
  slideout.toggle();
});

/*
Siema (a.k.a welcome banner)
*/
var siema = document.getElementsByClassName('siema-container');
if(siema.length) {
  new Siema({
    selector: '.siema-container',
    duration: 200,
    easing: 'ease-out',
    perPage: 1,
    startIndex: 0,
    draggable: true,
    multipleDrag: true,
    threshold: 20,
    loop: false
  });
}

/*
Defer images
*/
var imgDefer = document.getElementsByClassName('defer');
if(imgDefer.length){
  function defer() {
    var i;
    for (i=0; i < imgDefer.length; i++) {
      var data_src = imgDefer[i].getAttribute('data-src');
      if(data_src) {
        imgDefer[i].setAttribute('src', data_src);
      }
    }
  }
  window.onload = defer;
}
