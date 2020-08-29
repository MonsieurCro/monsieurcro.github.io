$(document).ready(function(){
  // Scroll to section
  $('a.scroll').click(function(event){
    event.preventDefault();
    $('html').animate({ scrollTop: $($(this).attr('href')).offset().top }, 1000, 'linear');
  });

  // Back to top
  $('#topper').click(function(){
    $('html').animate({ scrollTop: 0 }, 'slow');
  });

  // Progress bar
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

    // Update bar
    $('#progress').css({'width': percentage + '%'});

    // Toggle button
    if(percentage > 30){
      $('#topper').show();
    } else {
      $('#topper').hide();
    };
  };

  // Check SVG letters size
  /*var letter = $('svg path');
  console.log(letter.length + " letters");

  for(i = 0; i < letter.length; i++){
    console.log(Math.ceil($(letter).get(i).getTotalLength()));
  };*/
});