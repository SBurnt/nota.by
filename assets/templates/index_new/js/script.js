$(document).ready(function () {
  function toggleTheme() {
    document.cookie = "theme=day";
    if ($("body").attr("data-theme") == "night") {
      $(".slider-v1").addClass("active");
      $(".slider-v1").siblings(".theme-svg").toggleClass("active");
      document.cookie = "theme=night";
    }
    $(".slider-v1, .switch").click(function () {
      $(".slider-v1").toggleClass("active");
      $(".slider-v1").siblings(".theme-svg").toggleClass("active");
      if ($("body").attr("data-theme") == "night") {
        $("body").attr("data-theme", "day");
        $(".sun").toggleClass("active");
        $(".moon").removeClass("active");
      } else {
        $("body").attr("data-theme", "night");
        $(".moon").toggleClass("active");
        $(".sun").removeClass("active");
      }
      var theme = $("body").attr("data-theme");
      document.cookie = "theme=" + theme;
    });
  }
  toggleTheme();

  $(".mobile__close, .mobile__menu").click(function () {
    $("#mobile").toggleClass("active");
  });

  $(".mobile__submenu").slideToggle("slow");

  $(".mobile__submenu__btn").click(function (e) {
    e.preventDefault();
    $(this).parent().siblings(".mobile__submenu").slideToggle("slow");
  });

  //video
  $(".cases__main__link__play").click(function (e) {
    e.preventDefault();
    $(".cases__main__video").css("display", "block");
    $(".cases__main__name, .cases__main__img, .cases__main__link__play").css("display", "none");
    $(".play-icon").click();
  });

  // tabs
  function tabs() {
    $(".tab").hide();
    $(".tab__content_active").show();

    $(".tabs__list li a").click(function (e) {
      e.preventDefault();
    });

    $(".tabs__list li").click(function () {
      var tabid = $(this).find("a").attr("href");
      $(".tabs__list li,.tabs li.tab").removeClass("tab__content_active"); // removing active class from tab
      $(".tab").hide(); // hiding open tab
      $(tabid).show(); // show tab
      $(this).addClass("tab__content_active"); //  adding active class to clicked tab
    });
  }
  tabs();
  // end tabs

  if ($("div").is(".cases__main__video")) {
    console.log("have video");
  } else {
    $(".cases__main__link__play").css("display", "none");
  }

  // custom scroll and sliders
  window.addEventListener("resize", function () {
    resizeSliders();
  });
  function resizeSliders() {
    console.log("resize func work");
    if ($(window).width() > "768") {
      $(".team__list").mCustomScrollbar({
        axis: "x", // horizontal scrollbar
      });
    } else {
      $(".team__list").removeClass("mCustomScrollbar");
      $(".team__list").slick({
        dots: true,
        centerMode: true,
        slidesToShow: 1,
        infinite: false,
        dotsClass: "slick-dots review-dots team__dots",
        lazyLoad: "ondemand",
      });
      $(".info__review__slider").slick({
        dots: true,
        slidesToShow: 1,
        infinite: false,
        dotsClass: "slick-dots review-dots",
        lazyLoad: "ondemand",
      });
      $(".team__title").html("Команда студии <br> Nota Bene");
    }
    if ($(window).width() > "1024") {
      $(".project-carousel").slick({
        items: 1,
        mouseDrag: false,
        center: true,
        dots: true,
        speed: 150,
        nav: false,
        infinite: false,
        dotsClass: "slick-dots project-dots",
        lazyLoad: "ondemand",
      });
    }
    if ($(window).width() <= "768") {
      $(".cases__main__video").remove();
      $(".awards__adv__item_hide").slideDown("slow");
      $(".awards__adv__item").removeClass(".awards__adv__item_hide");
      $(".awards__adv__list").slick({
        dots: true,
        slidesToShow: 1,
        rows: 1,
        slidesPerRow: 1,
        centerMode: true,
        infinite: false,
        dotsClass: "slick-dots review-dots team__dots",
        lazyLoad: "ondemand",
      });
    }
  }
  resizeSliders();
  //end custom scroll and sliders

  // awards more link
  $(".awards__adv__item_hide").slideUp();
  $(".awards__adv__all").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("awards__adv__all__active");
    $(".awards__adv__item_hide").slideToggle();
  });
  // end awards more link

  // to top
  $(".to-top").click(function () {
    $("body,html").animate({ scrollTop: 0 }, 3000);
  });

  // end to top
  $(".dropdown-link a, .dropdown-link svg").click(function (e) {
    $(this).siblings(".dropdown-menu").toggleClass("dropdown-menu__active");
    $(".drop__overlay").addClass("active");
  });
  $(".dropdown-menu__active").click(function () {
    e.stopPropagation();
  });
  $(".drop__overlay").click(function () {
    $(this).removeClass("active");
    $(".dropdown-menu").removeClass("dropdown-menu__active");
  });
  // project carousel

  $(".studio__link").click(function (e) {
    $("body").addClass("videoModal");
  });
  $(".exit").click(function () {
    $("body").removeClass("videoModal");
  });
});
$(window).scroll(function () {
  if ($(window).scrollTop() > 500) {
    $(".to-top").addClass("to-top__active");
  } else {
    $(".to-top").removeClass("to-top__active");
  }
});

var columns = document.getElementsByClassName("project-carousel__switch__item");
for (var i = 0; i < columns.length; i++) {
  columns[i].addEventListener("mouseenter", function (e) {
    var column = e.target;
    var columnNum = column.getAttribute("data-column");
    var elemSlider = $(column).parent().siblings(".project-carousel");
    var elemDots = $(elemSlider).children(".project-dots");
    // если убрать заккомкод, то последний слайдер при наведении будет не активен и фото не отобразится, 
    //а будет показана предпоследняя фотка слайдера
    // if (columnNum != 3) {
      $(elemSlider).slick("slickGoTo", columnNum);
      var carouselSwitch = $(column).parent().removeClass("slider-end");
    // } else {
    //   $(elemDots).find("li").removeClass("slick-active");
    //   $(elemDots).find("li").last().addClass("slick-active");
    //   var carouselSwitch = $(column).parent().addClass("slider-end");
    // }
  });
}
// change emoji

var items = document.getElementsByClassName("awards__count__item");
var intChange;

for (var i = 0; i < items.length; i++) {
  items[i].addEventListener("mouseenter", function (e) {
    var element = e.target;
    var itemId = element.getAttribute("id");
    var imgCount = itemId == "years" ? 6 : itemId == "country" ? 11 : itemId == "city" ? 7 : "Ошибка!";
    var imgTag = element.querySelector("img");
    var loop = 0;
    function change() {
      imgTag.src = "/assets/templates/index_new/img/" + itemId + "/" + itemId + loop + ".png";
      if (loop >= imgCount) {
        loop = -1;
      }
      loop++;
    }
    intChange = setInterval(change, 700);
  });
  items[i].addEventListener("mouseleave", function () {
    clearInterval(intChange);
  });
}
// end change emoji
