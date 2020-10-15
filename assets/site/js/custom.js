const sliderAbout = document.querySelector('.js-about-slider');
let swiper = new Swiper(sliderAbout, {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next.slider__arrows-next',
    prevEl: '.swiper-button-prev.slider__arrows-prev',
  },
});
