// Pressing Home Button will scroll to top of page //
  $('.navbar-brand img').click(function(){
    $('body, html').animate({scrollTop: 0}, 700);
  });

// Pressing Nav Bar Image will scroll to top of page //
  $('#home-button').click(function(){
    $('body, html').animate({scrollTop: 0}, 700);
  });

// Pressing Quotes Button will scroll to top of page //
  // $(function() {
    $("#quotes-button").click(function() {
      var position = $("#theCarousel").offset().top; //calculates how far the top of the Carousel is from the top of the page
      $('body, html').animate({ scrollTop: position }, 700); });
  // });

  // $(function() {
    $("#timeline-button").click(function() {
      var position = $("#theTimeline").offset().top; //calculates how far the top of the Timeline is from the top of the page
      $('body, html').animate({scrollTop: position}, 700); });
  // });

  // $(function() {
    $("#resources-button").click(function() {
      var position = $("#resources").offset().top; //calculates how far the top of the Resource Footer is from the top of the page
      $('body, html').animate({scrollTop: position}, 700); });
  // });
