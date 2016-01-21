// Click on the Hamburger .menu-btn and the responsive menu expands.
// Click on the hamburgare again, and it closes.
$('.menu-btn').click(function() {
  $('.responsive-menu').toggleClass('expand');
});


// Back to top scroll button

$(document).ready(function() {
  // Check to see if the window is at the top and if not then display the button

  $(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
      $('.scrollToTop').fadeIn();
    } else {
      $('.scrollToTop').fadeOut();
    }
  });

  // Click event to scroll to top
  $('.scrollToTop').click(function() {
    $('html, body').animate({scrollTop: 0}, 600);
    return false;
  });

});

// CC Container Collapse

$(".cc_btn").click(function() {
  $(".cc_container").toggle();
});

