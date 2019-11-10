$(document).ready(function(){

  // Progress
  $(window).on('scroll orientationchange resize', function(){
    progressBar();
  });

  // ScrollTop
  $('#topper').click(function(){
    $('html').animate({
      scrollTop: 0
    }, 'slow');
  });

  function progressBar(){
    // Calc progression
    var docHeight = $(document).height();
    var winHeight = Math.min(document.documentElement.clientHeight, window.screen.height, window.innerHeight); //$(window).innerHeight();
    var scrollTop = $(window).scrollTop();
    var percentage = ((scrollTop / (docHeight - winHeight)) * 100);

    $('.progress').css({'width': percentage + '%'});

    // ScrollTop Toggle
    if(percentage > 30){
      $('#topper').show();
    } else {
      $('#topper').hide();
    }
  };
});