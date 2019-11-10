$(document).ready(function(){

  // Progress
  $(document).scroll(function(){
    var docHeight = $(document).height();
    var winHeight = $(window).innerHeight();
    var scrollTop = $(window).scrollTop();
    var percentage = ((scrollTop / (docHeight - winHeight)) * 100);

    $('.progress').css({'width': percentage + '%'});

    // ScrollTop Toggle
    if(percentage > 30){
      $('#topper').show();
    } else {
      $('#topper').hide();
    }
  });

  // ScrollTop
  $('#topper').click(function(){
    $('html').animate({
      scrollTop: 0
    }, 'slow');
  });

});