$(document).ready(function(){
  $('#topper').click(function(){
    $('html').animate({ scrollTop: 0 }, 'slow');
  });

  hasScrolled();

  $(window).on('scroll orientationchange resize', function(){
    hasScrolled();
  });

  function hasScrolled(){
    // Calc progression
    var docHeight = $(document).height();
    var winHeight = $(window).outerHeight();
    var scrollTop = $(window).scrollTop();
    var percentage = ((scrollTop / (docHeight - winHeight)) * 100);

    $('#progress').css({'width': percentage + '%'});

    // Toggle button
    if(percentage > 30){
      $('#topper').show();
    } else {
      $('#topper').hide();
    };
  };
});