$(document).ready(function () {
  // Browser compatibility ie11 (forEach)
  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
      thisArg = thisArg || window;
      for (let i = 0; i < this.length; i++) {
        callback.call(thisArg, this[i], i, this);
      }
    };
  }

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

  if ($('.tabs__item').length) {
    servicesTenTabs();
  }

  // прохождение квиза START
  function servicesTenTabs() {
    $('.tabs__item').on('click', function () {
      var attrID = $(this).find('div.tabs__text').attr('data-tab');

      $(this).closest('.quiz__wrap').find('.tabs__item, .content__item').removeClass('active');

      $(this)
        .addClass('active')
        .closest('.quiz__wrap')
        .find('.content__item[data-id="' + attrID + '"]')
        .addClass('active');

      if (attrID == 'tab4') {
        $('.quiz__btn-wrap').css('display', 'none');
        $('.quiz__btn-send').css('display', 'inline-block');
      } else {
        $('.quiz__btn-wrap').css('display', 'block');
        $('.quiz__btn-send').css('display', 'none');
      }

      if (attrID == 'tab1') {
        $('.quiz__btn-prev').css('display', 'none');
      } else {
        $('.quiz__btn-prev').css('display', 'inline-block');
      }

      $(this).addClass('question__answered');
    });

    $('.quiz__btn-next').on('click', function () {
      var tabs = $(this).closest('.quiz__wrap').find('.tabs__item');
      var currentIndex = tabs.index($(this).closest('.quiz__wrap').find('.tabs__item.active'));

      if (currentIndex === tabs.length - 1) {
        $(tabs[0]).trigger('click');
      } else {
        $(tabs[currentIndex + 1]).trigger('click');
      }
    });

    $('.quiz__btn-prev').on('click', function () {
      var tabs = $(this).closest('.quiz__wrap').find('.tabs__item');
      var currentIndex = tabs.index($(this).closest('.quiz__wrap').find('.tabs__item.active'));

      if (!currentIndex) {
        $(tabs[$tabs.length - 1]).trigger('click');
      } else {
        $(tabs[currentIndex - 1]).trigger('click');
      }
    });
  }
  // прохождение квиза END
});
