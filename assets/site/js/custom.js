$(document).ready(function () {
  const sliderAbout = document.querySelector('.js-about-slider');
  let swiper = new Swiper(sliderAbout, {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next.slider__arrows-next',
      prevEl: '.swiper-button-prev.slider__arrows-prev',
    },
  });

  const sliderOurTeam = document.querySelector('.js-our-team-slider');
  let swiper2 = new Swiper(sliderOurTeam, {
    slidesPerView: 3,
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,
    navigation: {
      nextEl: '.our-team .swiper-button-next',
      prevEl: '.our-team .swiper-button-prev',
    },
    breakpoints: {
      1024: {
        slidesPerView: 2,
        spaceBetween: 20,
        centeredSlides: false,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  });

  const sliderReviews = document.querySelector('.js-reviews-slider');
  let swiper3 = new Swiper(sliderReviews, {
    slidesPerView: 2,
    spaceBetween: 20,
    // centeredSlides: true,
    loop: true,
    navigation: {
      nextEl: '.reviews .swiper-button-next',
      prevEl: '.reviews .swiper-button-prev',
    },
    breakpoints: {
      1024: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      // 768: {
      //   slidesPerView: 1,
      //   spaceBetween: 10,
      // },
    },
  });

  const btnMoreAdvantages = $('.js-advantages__btn-more');
  if (btnMoreAdvantages.length) {
    let advantagesItem = $('.advantages__item');
    // let advantagesItemVis = $('.advantages__item--visible');

    btnMoreAdvantages.on('click', function () {
      // advantagesItemVis.slideToggle();
      if (advantagesItem.hasClass('advantages__item--visible')) {
        advantagesItem.removeClass('advantages__item--visible');
      } else {
        advantagesItem.addClass('advantages__item--visible');
      }
      $(this).html(
        advantagesItem.hasClass('advantages__item--visible') ? 'свернуть преимущества' : 'развернуть преимущества'
      );
    });
  }
});
