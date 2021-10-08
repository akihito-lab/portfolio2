$(function () {
  var kvHeight = $('.kv').outerHeight();
  var fvHeight = $('.fv').outerHeight();

  $('.burger-btn').on('click', function() {
    if( $(window).scrollTop() < kvHeight -50 ){
      $('.bar').toggleClass('cross');
      $('.header-nav').toggleClass('open');
      $('.burger-musk').fadeToggle(300);
      $('body').toggleClass('noscroll');
    } else {
      $(this).toggleClass('black');
      $('.bar').toggleClass('cross');
      $('.header-nav').toggleClass('open');
      $('.burger-musk').fadeToggle(300);
      $('body').toggleClass('noscroll');

    }
  });

  $(window).on('road scroll', function() {
    if( $(window).scrollTop() < kvHeight -50 ){
      $('.site-title').removeClass('black');
    } else {
      $('.site-title').addClass('black');
    }

    if( $(window).scrollTop() < fvHeight -50 ){
      $('.burger-btn').removeClass('black');
    } else {
      $('.burger-btn').addClass('black');
    }
  });

  $('.site-title').click(function() {
     var id = $(this).attr('href');
     var position = $(id).offset().top;
     $('html, body').animate({
       scrollTop: position
     }, 500);
   });

});
