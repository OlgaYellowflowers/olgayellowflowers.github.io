$(document).ready( function() {


// Make menu smaller when scroll down    

    if ($(window).width() > 767) {
        $(".navbar").removeClass("navbar-scroll");

        $(window).scroll(function() {
                if ($(this).scrollTop() > 20) {
                    $(".navbar").addClass("navbar-scroll");
                    $( ".navbar-scroll .navbar-brand" ).delay(800).css('width', '127px');
                    $( ".navbar-scroll .navbar-brand" ).delay(800).css('height', '25px');

                }
                else {
                    $(".navbar").removeClass("navbar-scroll");

                        if ($(window).width() > 1220) {
                            $( ".navbar-brand" ).css('width', '200px');
                            $( ".navbar-brand" ).css('height', '39px');
                        }
                        else {
                            $( ".navbar-brand" ).css('width', '127px');
                            $( ".navbar-brand" ).css('height', '25px');                     
                        }
                    }

        });
    }


// Make dropdown in top menu visible on hover

    $( 'ul.nav li.dropdown' ).hover(function() {
        // you could also use this condition: $( window ).width() >= 768
        if ($('.navbar-toggle').css('display') === 'none' 
            && false === ('ontouchstart' in document)) {

            $( '.dropdown-toggle', this ).trigger( 'click' );
        }
    }, function() {
        if ($('.navbar-toggle').css('display') === 'none'
            && false === ('ontouchstart' in document)) {

            $( '.dropdown-toggle', this ).trigger( 'click' );
        }
    });

    $('a.dropdown-toggle').on('click', function() {
    var $a = $(this);
        var $a = $a.children('a.dropdown-toggle');
        if ($a.length && $a.attr('href')) {
            location.href = $a.attr('href');
        }
});


// Animate blocks appearing when scroll down with Reveal Plugin
// https://github.com/jlmakes/scrollreveal.js

  window.sr = ScrollReveal();
  sr.reveal('.animated', { duration: 1000 });




  // Clients (customer) page 



  // Clients (customer) Blocks For big screens
    if ($(window).width() < 568) {
        var selector1 = '.customerblock > div.original:nth-child(2n)';
        var selector2 = '.customerblock > div.original:nth-last-of-type(-n+2)';
    }
    else if ($(window).width() < 961) {
        var selector1 = '.customerblock > div.original:nth-child(3n)';
        var selector2 = '.customerblock > div.original:nth-last-of-type(-n+3)';
        
    }
    else {
        var selector1 = '.customerblock > div.original:nth-child(6n)';
        var selector2 = '.customerblock > div.original:nth-last-of-type(-n+6)';

    }

    function customerTouchScreens () {

                          var hoverSection = $('<section class="hover" />');
                          $('.customerblock').append(hoverSection);
                          $('.customerblock > div').each(function() {

                            var self = $(this);
                            var clone = self.clone();
                            if (self.is($(selector1))) {
                              clone.css({
                                right: 0
                              });
                            } else {
                              clone.css({
                                left: self.position().left + 'px'
                              });
                            }
                            if (self.is($(selector2))) {
                              clone.css({
                                bottom: 0
                              });

                            } else {
                              clone.css({
                                top: self.position().top + 'px',
                              });
                            }
                            clone.removeClass('original');
                            clone.addClass("touchCustomerClone");
                            clone.find('.content-long').parent().addClass('customerblockCloneLong')
 
                            hoverSection.append(clone);

                          });

                            $('.touchCustomerClone').each(function() {

                              $(this).mouseenter(function() {

                                $('.touchCustomerClone').removeClass('hover');
                                $(this).addClass('hover');

                                $(this).find('.close').each(function() {
                                  $(this).mouseenter(function() {
                                    $('.touchCustomerClone').removeClass('hover');
                                  });
                                });


                              });
                              

                            });                            

     
    }

    function customersDesktop() {

          $('.original .close').css('display','none');
          $('.customerblockClone .close').css('display','none');

                          var hoverSection = $('<section class="hover" />');
                          $('.customerblock').append(hoverSection);
                          $('.customerblock > div').hover(function() {
                            var self = $(this);
                            var clone = self.clone();
                            if (self.is($(selector1))) {
                              clone.css({
                                right: 0
                              });
                            } else {
                              clone.css({
                                left: self.position().left + 'px'
                              });
                            }
                            if (self.is($(selector2))) {
                              clone.css({
                                bottom: 0
                              });

                            } else {
                              clone.css({
                                top: self.position().top + 'px',
                              });
                            }
                            clone.removeClass('original');                            
                            clone.addClass("customerblockClone");
                            clone.find('.content-long').parent().addClass('customerblockCloneLong')
                            hoverSection.append(clone);

                          },
                          function(){});


    }



    if ( $(".customerblock").length ) {
      if ($(window).width() < 1025) {
        customerTouchScreens();
      }
      else {
         customersDesktop();
      }
    }
    




    // Services page: Fix services box hover background

    if ( $(".services-box").length ) {


      if ($(window).width() < 1025) {
        $(".services-box .card-bg").each(function () {
          $(this).click(function () {
             $(this).addClass('hover');
          });
        });

        $('.services-box a').click(function (e) {
            e.preventDefault();                   
            var goTo = this.getAttribute("href"); 
            setTimeout(function(){
                 window.location = goTo;
            },500);       
        }); 

      }


    }
    


// Fix .nav-secondary appearing on page

if ( $(".nav-secondary-wrapper").length ) {
  $(".nav-secondary-wrapper").css('visibility', 'visible')         
}




// Some fixes for browsers

 if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 ) 
    {
        $(document).find('.animated').removeClass();
    }
  // else if(navigator.userAgent.indexOf("Safari") != -1)
  //   {
  //       $(document).find('.animated').css('opacity','1');
  //   }



// Animation for research page: long arrow animation

sr.reveal('#researchPoint1', { duration: 500, scale: 0.5 });
sr.reveal('#researchPoint2', { duration: 1000, scale: 0.5 });
sr.reveal('#researchPoint3', { duration: 1500, scale: 0.5 });
sr.reveal('#researchPoint4', { duration: 2000, scale: 0.5 });
sr.reveal('#researchPoint5', { duration: 500, scale: 0.6 });
sr.reveal('#researchPoint6', { duration: 1000, scale: 0.6 });
sr.reveal('#researchPoint7', { duration: 1500, scale: 0.6 });



// Smooth scroll for secondary navigation for perspective page

    function scrollNav( selector, speedScroll, setPadding ){
      
      speedScroll = parseInt(speedScroll, 10) === speedScroll ? speedScroll : 300;
 
      $(selector).on('click', function(event){
        event.preventDefault();
        var url = $(this).attr('href'); 
 

        if ($(window).width() > 767) {
          $("html, body").animate({ 
              scrollTop: parseInt( $(url).offset().top ) - $('.navbar-fixed-top').outerHeight() +setPadding
            }, speedScroll);
        }
        
        else {
          $("html, body").animate({ 
              scrollTop: parseInt( $(url).offset().top ) - $('.navbar-fixed-top').outerHeight()
            }, speedScroll);
        }
      }); 

    }
  

  // Smooth scroll for secondary navigation for perspective page
  scrollNav( '.nav-to-section a', 500, 40);


  // Smooth scroll for secondary navigation for consulting-services-agreement page
  scrollNav( '.nav-consulting a', 500, -10);



// Jquery Form Validation Plugin Init
// http://www.formvalidator.net/
if ( $("form").length ) {

     $.validate();

}

// Equal width rows with the border beetwen in the center  (perspective page)
function equalRows(selector, columnWidth) {
  $(selector).each(function () {
         $('.equalRows').each(function () {
         outerWidth = $(this).closest('.container').width();
         columns = 3
         padding = (outerWidth -columns*columnWidth)/4;

         $(selector).find('.equalRowsOuter').css('padding-left', padding);
         $(selector).find('.equalRowsOuter').css('padding-right', padding);
    });
  });
}

  equalRows('#nav-articles', 250);
  if ($(window).width() < 992) {
      equalRows('#nav-articles', 150)
  }
  $(window).on("resize", function() {
      equalRows('#nav-articles', 250);
      if ($(window).width() < 992) {
        equalRows('#nav-articles', 150)
      }
  });


  equalRows('#nav-webinars', 300);
  if ($(window).width() < 992) {
      equalRows('#nav-webinars', 150)
  }
  $(window).on("resize", function() {
      equalRows('#nav-webinars', 300);
      if ($(window).width() < 992) {
        equalRows('#nav-webinars', 150)
      }
  });


// Image hover overlay  (perspective page)
        if (Modernizr.touch) {
            // handle the adding of hover class when clicked
            $(".overlay-wrapper").click(function(e){
                if (!$(this).hasClass("hover")) {
                    $(this).addClass("hover");
                }
            });
        } else {
            // handle the mouseenter functionality
            $(".overlay-wrapper").mouseenter(function(){
                $(this).addClass("hover");
            })
            // handle the mouseleave functionality
            .mouseleave(function(){
                $(this).removeClass("hover");
            });
        }


 //  Show form for download article (perspective page)
    if ( $("#articleFormDownload").length ) {

      $("#articleFormDownload").hide();
      $('.section-articles-block a').bind('click', function() { 
        $("#articleFormDownload").show();
      
          $('html, body').animate({
              scrollTop: $("#articleFormDownload").offset().top - 60
          }, 500);    
      
        return false;
      });

    }



// Play video on perspective page

if ( $("#nav-videos").length ) {


    $("#owl-videos").owlCarousel({
    autoplay: false,
    nav: true,
    navText: ["<img src='images/arrow-left-circled.png'>","<img src='images/arrow-right-circled.png'>"],
    loop: true,
    autoplayTimeout: 100,
    autoplaySpeed: 1000,
    responsiveClass: true,
    touchDrag: false,
    mouseDrag: false,
    responsive:{
                  0:{
                      items:1
                  },
                  480:{
                      items:2
                  },
                  568:{
                      items:3
                  }
              }
      });


    // Show video in separate area
      $("#videosPlayArea").hide();

      $('#owl-videos .item-area[data-video]').on('click', function() {
          $("#videosPlayArea").fadeIn();
          $('html, body').animate({
              scrollTop: $("#nav-videos").offset().top + 60
          }, 500);   

          $('#videosPlayArea').html('<div class="close-area"></div><div class="title-area">'+$(this).find('.styled-carousel-title').text()+'</div><div class="play-area-wrapper"><iframe type="text/html"  width="560" height="315" src="http://www.youtube.com/embed/'+$(this).data('video')+'?autoplay=1" allowfullscreen frameborder="0"></iframe></div>');

          return false;
      });

          $(document).on('click','#videosPlayArea .close-area', function(){
             $("#videosPlayArea").fadeOut();
          });
}





// Play webinars on perspective page

if ( $("#nav-webinars").length ) {

    // Show webinar in separate area
      $("#webinarsPlayArea").hide();

      $('#nav-webinars .item-area[data-video]').on('click', function() {
          $("#webinarsPlayArea").fadeIn();
          $('html, body').animate({
              scrollTop: $("#nav-webinars").offset().top + 60
          }, 500);   

          $('#webinarsPlayArea').html('<div class="close-area"></div><div class="title-area">'+$(this).find('.section-webinars-title').text()+'</div><div class="play-area-wrapper"><video controls autoplay><source src="'+$(this).data('video')+'" type="video/mp4">Sorry, your browser does not support the video.</video></div>');

          return false;
      });

          $(document).on('click','#webinarsPlayArea .close-area', function(){
             $("#webinarsPlayArea").fadeOut();
          });
}



// Show infographics webinars on perspective page

if ( $("#nav-infographics").length ) {

    // Show webinar in separate area
      $("#infographicsPlayArea").hide();

      $('#nav-infographics .item-area').on('click', function() {
          $("#infographicsPlayArea").fadeIn();
          $('html, body').animate({
              scrollTop: $("#nav-infographics").offset().top + 60
          }, 500);   

          $('#infographicsPlayArea').html('<div class="close-area"></div><div class="title-area">'+$(this).find('.section-infographics-title').text()+'</div><div class="play-area-wrapper"><img src="'+$(this).find('img').attr('src')+'"></div>');

          return false;
      });

          $(document).on('click','#infographicsPlayArea .close-area', function(){
             $("#infographicsPlayArea").fadeOut();
          });
}



// Styled radio buttons and checkboxes
//  * jquery-asCheck
//  * https://github.com/amazingSurge/jquery-asCheck


if ( $(".radio").length ) {
    $(".form-default .radio").asCheck({
        skin: 'skin-1'
    });
}

if ( $(".checkbox").length ) {
    $(".form-default .checkbox").asCheck({
          skin: 'skin-1'
    });
    $(".form-primary .checkbox").asCheck({
        skin: 'skin-2'
    });
}


  // Select2 plugin 
  // https://select2.github.io/

if ( $(".select-styled").length ) {
    $(".select-styled").select2({
      minimumResultsForSearch: Infinity
    });

}




// Make blocks equal heights 
//  (on each of services pages)

function performEqualHeights (elementToMakeHeights, responsivePoint) {
   
  function equalHeights(elementToMakeHeights) {
      
      var highestBox = 0;
      $(elementToMakeHeights).each(function(){
        
        if( $(this).height() > highestBox ) {
          highestBox = $(this).height(); 
        }
      });  
      $(elementToMakeHeights).height(highestBox);
  }



    if ($(window).width() > responsivePoint) {
      $(elementToMakeHeights).css('height', 'auto');
      equalHeights(elementToMakeHeights);
    }


    $(window).on("resize", function() {
      $(elementToMakeHeights).css('height', 'auto');
      if ($(window).width() > 767) {
        equalHeights(elementToMakeHeights);
      }
    });


}


performEqualHeights ('.box-offer', 768);
performEqualHeights ('.box-offer h3', 768);
performEqualHeights ('.box-lined', 768);


});





