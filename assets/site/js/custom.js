$(document).ready(function () {
  // главный слайдер на странице brief
  const sliderAbout = document.querySelector('.js-about-slider');
  let swiper = new Swiper(sliderAbout, {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next.slider__arrows-next',
      prevEl: '.swiper-button-prev.slider__arrows-prev',
    },
  });

  // слайдер наша команда на странице brief
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

  // слайдер отзывы на странице brief
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

  // показать больше в секции преимущества на странице brief START
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
  // показать больше в секции преимущества на странице brief END

  // появление инфомации при скролле и клике(мобилка) о человеке в секции наша команда на странице brief START
  const ourTeamCard = document.querySelectorAll('.our-team__card');
  const ourTeamCardActiv = document.querySelector('.our-team__card.swiper-slide-active .our-team__card-info');
  let ourTeamCardActivInfoShow = false;

  function showOurTeamCardActivInfo(el) {
    el.classList.add('scroll');
    ourTeamCardActivInfoShow = true;
    setTimeout(function () {
      el.classList.remove('scroll');
    }, 800);
  }

  // появление при скролле
  if (ourTeamCard.length) {
    window.addEventListener('scroll', function () {
      ourTeamCard.forEach(function (el, i) {
        if (
          el.getBoundingClientRect().top <= document.documentElement.clientHeight / 2 &&
          ourTeamCardActivInfoShow == false
        ) {
          showOurTeamCardActivInfo(ourTeamCardActiv);
        }
      });
    });
  }

  // появление при клике на мобилке
  ourTeamCard.forEach(function (el) {
    el.addEventListener('click', function (e) {
      showOurTeamCardActivInfo(e.target.nextElementSibling);
    });
  });
  // появление инфомации о человеке секции наша команда на странице brief END
});
