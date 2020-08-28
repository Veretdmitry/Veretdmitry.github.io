AOS.init();
var mySwiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.projects-pagination',
    bulletClass: 'projects-bullet',
    bulletActiveClass: 'projects-bullet-active',
    clickable: true
  },
});

var FormButton = document.getElementById('form-button');
FormButton.onclick = function() {
  $('#modal').modal();
};
var HeroButton = document.getElementById('hero-button');
HeroButton.onclick = function () {
  $('#modal').modal();
};