$(document).ready( function() {


    


// Make menu smaller when scroll down    

    if ($(window).width() > 767) {
        $(".navbar").removeClass("navbar-scroll");
        $(window).scroll(function() {
                if ($(this).scrollTop() > 20) {
                    $(".navbar").addClass("navbar-scroll");
                }
                else {
                    $(".navbar").removeClass("navbar-scroll");
                }

        });
    }


// Fixing navbar on mobiles and tablets

$('.navbar-default li a').on('click', function(){
    $('.navbar-toggle').click()
});


// Navigation animated scroll

    function scrollNav( selector, speedScroll ){
      
      speedScroll = parseInt(speedScroll, 10) === speedScroll ? speedScroll : 300;
 
      $(selector).on('click', function(event){
        event.preventDefault();
        var url = $(this).attr('href'); 
 

        if ($(window).width() > 767) {
          $("html, body").animate({ 
              scrollTop: parseInt( $(url).offset().top ) - $('.navbar-default').outerHeight()
            }, speedScroll);
        }
        
        else {
          $("html, body").animate({ 
              scrollTop: parseInt( $(url).offset().top ) - $('.navbar-header').outerHeight()
            }, speedScroll);
        }
      });  

    }
  
  scrollNav( '.nav-main a', 500);


// Scroll to top button

  $('.scroll-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},500);
    return false;
  });


// Expand answers in FAQ section

    $('.block-toggled').each(function () {

       $(this).find('.block-toggled-text').hide();

       $(this).find('.block-toggled-title').click(function () {
          $(this).parent().toggleClass('block-toggled-open');
           $(this).parent().find('.block-toggled-text').toggle();
       });

    });


// Make blocks with team members equal heights

  function teamEqualHeights() {
      
      var highestBox = 0;
      $('.block-team').each(function(){
        
        if( $(this).height() > highestBox ) {
          highestBox = $(this).height(); 
        }
      });  
      $('.block-team').height(highestBox);
  }

    if ($(window).width() > 767) {
      $('.block-team').css('height', 'auto');
      teamEqualHeights();
    }


    $(window).on("resize", function() {
      $('.block-team').css('height', 'auto');
      if ($(window).width() > 767) {
        teamEqualHeights();
      }
    });



// Make some images positioned at the bottom of block

  function positionToBottom (selector, selectorWrapper) {
     imgHeight =  $(selector).height();
     wrapperHeight = $(selectorWrapper).outerHeight();
     $(selector).css('margin-top', wrapperHeight-imgHeight);
  }
  if ($(window).width() > 767) {
    positionToBottom ('.contact-form-wrapper img', '.contact-form-wrapper');
    positionToBottom ('.section-welcome img', '.section-welcome');
  }
  
    $(window).on("resize", function() {
      if ($(window).width() > 767) {
            positionToBottom ('.contact-form-wrapper img', '.contact-form-wrapper');
            positionToBottom ('.section-welcome img', '.section-welcome');
      }
    });

// Animate blocks appearing when scroll down with Reveal Plugin
// https://github.com/jlmakes/scrollreveal.js

  window.sr = ScrollReveal();
  sr.reveal('.animated', { duration: 1000 });




});