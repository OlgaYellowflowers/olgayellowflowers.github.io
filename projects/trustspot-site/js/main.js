$(document).ready(function() {

  // Init bootstrap tooltip 
    $("[data-toggle=tooltip]").tooltip();
 

    // function chooseRating (ratingStar){
    //     $(ratingStar).hover(
    //         function() {
    //             $(this).prevAll().andSelf().addClass('ratings-over');
    //             $(ratingStar).removeClass('ratings-vote'); 
    //         },
    //         function() {
    //             $(this).prevAll().andSelf().removeClass('ratings-over');        
    //         }
    //     );
    //     $(ratingStar).click(function() {
    //             $(this).removeClass('ratings-over');
    //             $(this).removeClass('ratings-vote');
    //             $(this).prevAll().andSelf().addClass('ratings-vote');
    //     });
    // }
    // // Choose rating - stars buttons
    // // Presents on reviw-form page
    // chooseRating ('.review-form-star i');
    // // Choose rating - 0-10 buttons 
    // // Presents on reviw-form page
    // chooseRating ('.review-form-rating li');


    // Switch monthly/yearly radiobuttons
    $('.tarif-check a').click(function() {
        $('.tarif-check a').removeClass('active');
        $(this).addClass('active');
        return false;
    });


    // Toggle menu on mobiles
    $('.header-top .menu-toggle a').click(function() {
        $('.header-nav').slideToggle();
        $(this).toggleClass('active');
    });
    
    // Make long menu to enable scrolling on mobiles
    function fixMobileScrollMenu(){
        windowHeight = $(window).height() - 50;//50 is height of top bar menu
        $('.header-nav').css('max-height', windowHeight);

    }
    if ($(window).width() < 768) {
        fixMobileScrollMenu();
    }
    $(window).resize(function() {
        if ($(window).width() < 768) {
            fixMobileScrollMenu();
        }
    });

    // Init Plugin Selectpicker for custom selects with icons
    // Plugin site: http://silviomoreto.github.io/bootstrap-select/
    // Required files: bootstrap-select.js, bootstrap-select.css
    $('.selectpicker').selectpicker();


    // Tooltip
    $('.plans-table td span').tooltip();


    // Checkbox styling
    $('.checkbox-wrapper span').click(function() {
        $(this).toggleClass('active');
        $(this).parent().find('input').trigger('click');
    });



    // Animate menu to be smaller when scroll down    
    if ($(window).width() > 767) {
        $(window).scroll(function() {
                if ($(this).scrollTop() > 60) {
                    $("header").addClass("header-smaller");
                }
                else {
                    $("header").removeClass("header-smaller");
                }

        });
    }

    // Scroll to "Compare plans" when click link "Compare All Plan Features "
    $(".tarif-all").click(function() {
        $('html, body').animate({
            scrollTop: -30 + $(".plans").offset().top
        }, 1000);
    });


// When first screen has image background and menu becomes opacity
    $('.main').find('.first-screen-background').closest('.main').addClass('headerOpacityBackground');



// Slider 
      $("#owl-slider").owlCarousel({
        stopOnHover : true,
        navigation:true,
        navigationText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        singleItem: true,
        pagination: false,
        autoHeight: true
      });


// Make vertical-reviews text blocks equal heights

    function equalHeightsBlocks(e){
      var maxHeight = -1;

       $(e).each(function() {
         maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
       });

       $(e).each(function() {
         $(this).height(maxHeight+20);//20 is padding-bottom 
       });
    }
    if ($(window).width() > 767) {
        equalHeightsBlocks('.block-vertical-reviews .vertical-review-text');
    }

    $(window).resize(function() {
        $('.block-vertical-reviews .vertical-review-text').css('height','auto');
        if ($(window).width() > 767) {
            equalHeightsBlocks('.block-vertical-reviews .vertical-review-text');
        }
        else {
            $('.block-vertical-reviews .vertical-review-text').css('height','auto');
        }
    });

  
  //FUNCTION TO GET AND AUTO PLAY YOUTUBE VIDEO FROM DATATAG in modal window
    function autoPlayModal(){
      var trigger = $("body").find('[data-toggle="modal"]');
      trigger.click(function() {
        var theFrame = $(this).data( "frame" );
        var theModal = $(this).data( "target" );
        videoSRC = $(this).attr( "data-theVideo" ); 
        if (theFrame == "iframe") {
          videoSRCauto = videoSRC+"?autoplay=1" ;
        } else {
          videoSRCauto = videoSRC;
          $("[id*=videoModal] video").attr('autoplay','true');
        }
        $(theModal+' '+ theFrame).attr('src', videoSRCauto); 
        $("[id*=videoModal]").on('hidden.bs.modal', function () {
            $("[id*=videoModal] "+ theFrame).removeAttr('src');
        })
      });
    }

  autoPlayModal();



});
