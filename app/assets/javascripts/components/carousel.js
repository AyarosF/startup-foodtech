$(document).ready(function() {

   timer = window.setInterval(next, 5000);

  $(".next").click(function() {
    next()
  });

  $(".prev").click(function(){
    prev()
  });

  $('#dot-1').click(function() {
    $('#img-1').addClass('slide-active').show();
    $('#img-2').removeClass('slide-active').hide();
    $('#img-3').removeClass('slide-active').hide();
    $('#dot-2').removeClass('dot-active')
    $('#dot-3').removeClass('dot-active')
    $('#dot-1').addClass('dot-active')
    clearInterval(timer);
    timer = window.setInterval(next, 5000);
  });

  $('#dot-2').click(function() {
    $('#img-2').addClass('slide-active').show();
    $('#img-1').removeClass('slide-active').hide();
    $('#img-3').removeClass('slide-active').hide();
    $('#dot-1').removeClass('dot-active')
    $('#dot-3').removeClass('dot-active')
    $('#dot-2').addClass('dot-active')
    clearInterval(timer);
    timer = window.setInterval(next, 5000);
  });

  $('#dot-3').click(function() {
    $('#img-3').addClass('slide-active').show();
    $('#img-1').removeClass('slide-active').hide();
    $('#img-2').removeClass('slide-active').hide();
    $('#dot-1').removeClass('dot-active')
    $('#dot-2').removeClass('dot-active')
    $('#dot-3').addClass('dot-active')
    clearInterval(timer);
    timer = window.setInterval(next, 5000);
  });

});


  function next() {
    var currentSlide = $('.carousel li.slide-active');
    var nextSlide = $('.carousel li.slide-active').next();
    var currentDot = $('.dot-active');
    var nextDot = currentDot.next();

    currentSlide.fadeOut(600).removeClass('slide-active').hide();
    currentDot.removeClass('dot-active');

    if (nextSlide.length === 0) {
      nextSlide = $('.carousel li').first();
      nextDot = $('.dots li').first();
    }
    nextSlide.fadeIn(600).addClass('slide-active').show();
    nextDot.addClass('dot-active');

    clearInterval(timer);
    timer = window.setInterval(next, 5000);
  }

  function prev() {

    var currentSlide = $('.carousel li.slide-active');
    var prevSlide = $('.carousel li.slide-active').prev();
    var currentDot= $('.dot-active');
    var prevDot= currentDot.prev()

    currentSlide.fadeOut(600).removeClass('slide-active').hide();
    currentDot.removeClass('dot-active');

    if (prevSlide.length === 0) {
      prevSlide = $('.carousel li').last();
      prevDot = $('.dots li').last();
    }

    prevSlide.fadeIn(600).addClass('slide-active').show();
    prevDot.addClass('dot-active');

    clearInterval(timer);
    timer = window.setInterval(next, 5000);

  }
