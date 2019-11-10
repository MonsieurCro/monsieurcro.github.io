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
    var winHeight = $(window).outerHeight();
    var scrollTop = $(window).scrollTop();
    var percentage = ((scrollTop / (docHeight - winHeight)) * 100);

    $('footer p').text('').append(docHeight, ' / ', winHeight, ' / ', scrollTop, ' / ', percentage);

    $('#progress').css({'width': percentage + '%'});

    // ScrollTop Toggle
    if(percentage > 30){
      $('#topper').show();
    } else {
      $('#topper').hide();
    }
  };
});