const swiperBox = document.querySelector('.about-countries__swiper');
const swiperList = document.querySelector('.about-countries__countries-list');

swiperBox.classList.remove('about-countries__swiper--nojs');
swiperList.classList.remove('countries-list--nojs');

let swiper = new Swiper('.swiper', {
  watchOverflow: true,
  slidesPerView: 'auto',
  spaceBetween: 99,
}
);

function swiperMode() {
let mobile = window.matchMedia('(min-width: 0px) and (max-width: 767px)');
let tablet = window.matchMedia('(min-width: 768px) and (max-width: 1023px)');
let desktop = window.matchMedia('(min-width: 1024px)');

if(mobile.matches || tablet.matches) {
    swiper.enable();
} else if(desktop.matches) {
    swiper.disable();
  }
}

window.addEventListener('load', function() {
  swiperMode();
});

window.addEventListener('resize', function() {
  swiperMode();
});
