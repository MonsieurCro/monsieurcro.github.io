$(document).ready(function(){
  // Show progressBar & topper if top != 0
  hasScrolled();

  $(window).on('scroll orientationchange resize', function(){
    hasScrolled();
  });

  // Scroll to top
  $('#topper').click(function(){
    $('html').animate({
      scrollTop: 0
    }, 'slow');
  });

  // Show submenu on click
  $('#menuicon').click(function(){
    $('#menu').toggleClass('active');
  });

  // Yoshi
  var tap = 0;

  $('#egg').click(function(){
    tap++;

    if(tap == 7){
      $('#egg').hide();
      $('#yoshi').show();
    };
  });

  function hasScrolled(){
    // Calc progression
    var docHeight = $(document).height();
    var winHeight = $(window).outerHeight();
    var scrollTop = $(window).scrollTop();
    var percentage = ((scrollTop / (docHeight - winHeight)) * 100);

    $('#progress').css({'width': percentage + '%'});

    // Button toggle
    if(percentage > 30){
      $('#topper').show();
    } else {
      $('#topper').hide();
    }
  };
});