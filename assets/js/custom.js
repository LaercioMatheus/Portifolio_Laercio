(function ($) {

  "use strict";

    // COLOR MODE
    $('.color-mode').click(function(){
        $('.color-mode-icon').toggleClass('active')
        $('body').toggleClass('dark-mode')
    })

    // HEADER
    $(".navbar").headroom();

    // PROJECT CAROUSEL
    $('.owl-carousel').owlCarousel({
    	items: 1,
	    loop:true,
	    margin:10,
	    nav:true
	});

    // SMOOTHSCROLL
    $(function() {
      $('.nav-link, .custom-btn-link').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });  

    // TOOLTIP
    $('.social-links a').tooltip();

    // PROGRESS
    document.addEventListener("DOMContentLoaded", function () {
      let progressBars = document.querySelectorAll(".progress-bar");
      
      progressBars.forEach((bar) => {
          let width = bar.getAttribute("aria-valuenow");
          bar.style.width = "0%"; // Começa do zero
          
          setTimeout(() => {
              bar.style.transition = "width 1.5s ease-in-out"; // Animação suave
              bar.style.width = width + "%";
          }, 500);
      });
  });
  

})(jQuery);
