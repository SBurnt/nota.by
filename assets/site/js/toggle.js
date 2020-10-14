function toggleTheme() {
  if ($('body').attr('data-theme') == 'night') {
    $('.slider-v1').addClass('active');
    $('.slider-v1').siblings('.theme-svg').toggleClass('active');
  }
  $('.slider-v1, .switch').click(function(){
    $('.slider-v1').toggleClass('active');
    $('.slider-v1').siblings('.theme-svg').toggleClass('active');
    if ($('body').attr('data-theme') == 'night') {
      $('[data-mode=day]').click();
      //$('body').attr('data-theme', 'day');
      //$('.sun').toggleClass('active');
      //$('.moon').removeClass('active');
    } else {
        //$('body').attr('data-theme', 'night');
        $('[data-mode=night]').click();
        //$('.moon').toggleClass('active');
        //$('.sun').removeClass('active');
    }
  })
}
toggleTheme();

$('.dropdown-link a, .dropdown-link svg').click(function (e) {
  $(this).siblings('.dropdown-menu').toggleClass('dropdown-menu__active');
  $('.drop__overlay').addClass('active');
})
$('.dropdown-menu__active').click(function () {
  e.stopPropagation();
})
$('.drop__overlay').click(function () {
  $(this).removeClass('active');
  $('.dropdown-menu').removeClass('dropdown-menu__active');
})

$('.mobile__close, .mobile__menu').click(function(){
  $('#mobile').toggleClass('active');
})

$('.mobile__submenu').slideToggle('slow');

$('.mobile__submenu__btn').click(function (e) {
  e.preventDefault();
  $(this).parent().siblings('.mobile__submenu').slideToggle('slow');
})
