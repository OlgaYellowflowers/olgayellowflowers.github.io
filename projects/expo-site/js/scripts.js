$(document).ready(function() {

// Functions
(function($) {
    $.fn.clickToggle = function(func1, func2) {
        var funcs = [func1, func2];
        this.data('toggleclicked', 0);
        this.click(function(e) {
            var data = $(this).data();
            var tc = data.toggleclicked;
            $.proxy(funcs[tc], this)();
            data.toggleclicked = (tc + 1) % 2;
                  e.preventDefault;
      return false;
        });
        return this;
    };
}(jQuery));




$(window).on("load resize",function(e){


// INDEX page fit container size
    function fitHeightWindow(e){
      var h = $(window).height();
      e.css("height", h + 10);
      if ($(window).width() < 768) {
            var h = $(window).height();
            e.css("height", h);
      }  
    }

    fitHeightWindow($(".main-nav"));
    fitHeightWindow($(".index-first-screen"));


// Vertical aligning of Cogwheel

    function fitHeightCogwheel(){
      var h = $(window).height();
      $(".index-second-screen").css("height", h);
      if (h > 542) { 
      var margins = (h - 542)/2 - 60;
      $(".index-second-screen .weblatform-links").css("margin-top", margins);
      }
      if ($(window).width() < 768) {
            $(".index-second-screen").css("height", "auto");
      }      
    }
    fitHeightCogwheel();

// INDEX page tooltip for menu
    function animatedTooltip(){
      $(".animated-tooltipmenu").delay(4000).slideUp();
    }
if ($(window).width() > 768) {
    animatedTooltip();
}


// Index scroll 
    function indexScroll(){
    $('.index-first-screen .arrows-nav-down').on('click', function(e) {
        e.preventDefault();
        var target = $('.index-second-screen');
        offsetValue = $(this).data('offset') | 0;
        $('html, body').animate({
          scrollTop: $(target).offset().top-offsetValue
         },
         {
          duration: 2000,
          easing: "easeOutQuint"  
          });
      });
    }
    indexScroll();

// Function menu
    function menu(){

      if ($(window).width() < 768) {
          $(".main-nav").hide();
          var heightMainNav = $(".main-nav").height();
          $(".main-nav").css("height", heightMainNav);
          $(".btn-menu").click(function(){
            $(".main-nav").fadeIn();
            $(".page-footer").hide();  
            var heightFromTop = $(window).scrollTop();
            $(".main-nav").css("top", heightFromTop);
          });
          $(".main-nav .btn-close").click(function(){
            $(".main-nav").fadeOut();
            $(".page-footer").show();  
  
          });
      }
      else {
            $(".main-nav").hide();
            $(".btn-menu").click(function(){
              $(".main-nav").fadeIn();
              $(".btn-menu").fadeOut();
              $(".block-contact").fadeOut();
              $(".animated-tooltipmenu").hide();
          });
          $(".main-nav .btn-close").click(function(){
            $(".main-nav").fadeOut();
            $(".btn-menu").fadeIn();
            $(".block-contact").fadeIn();
          });
          $( ".btn-menu" ).hover(
            function() {
              $(".animated-tooltipmenu").fadeIn();
            }, function() {
              $(".animated-tooltipmenu").fadeOut();
            }
          );
      }
     }
    menu();

// Шестеренка

function fadeInCogweel(){
              $( "#i11" ).hide().delay(250).fadeIn();
              $( "#i12" ).hide().delay(500).fadeIn();
              $( "#i13" ).hide().delay(750).fadeIn();
              $( "#i14" ).hide().delay(1000).fadeIn();
              $( "#i15" ).hide().delay(1250).fadeIn();
              $( "#i16" ).hide().delay(1500).fadeIn();
              $( "#i17" ).hide().delay(1750).fadeIn();
              $( "#i18" ).hide().delay(2000).fadeIn();
              $( "#i19" ).hide().delay(2250).fadeIn();
              $( "#i21" ).hide().delay(2500).fadeIn();
              $( "#i22" ).hide().delay(2750).fadeIn();
              $( "#i23" ).hide().delay(3000).fadeIn();
              $( "#i24" ).hide().delay(3250).fadeIn();
              $( "#i25" ).hide().delay(3500).fadeIn();
              $( "#i26" ).hide().delay(3750).fadeIn();
              $( "#i27" ).hide().delay(4000).fadeIn();
              $( "#i28" ).hide().delay(4250).fadeIn();
              $( "#i29" ).hide().delay(4500).fadeIn(); 
}
$(window).one('scroll', function() {
  if (Math.abs(100 - $(this).scrollTop()) > 20) {
    fadeInCogweel();
  }
});

// Rotate circle
  function rotateOnMouse(e, pw) {
      var offset = pw.offset();
      var center_x = (offset.left) + ($(pw).width() / 2);
      var center_y = (offset.top) + ($(pw).height() / 2);
      var mouse_x = e.pageX;
      var mouse_y = e.pageY;
      var radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);
      var degree = (radians * (180 / Math.PI) * -1) + 100;
      $(pw).css('-moz-transform', 'rotate(' + degree + 'deg)');
      $(pw).css('-webkit-transform', 'rotate(' + degree + 'deg)');
      $(pw).css('-o-transform', 'rotate(' + degree + 'deg)');
      $(pw).css('-ms-transform', 'rotate(' + degree + 'deg)');
  }



  function draggingPreventLeft() {
  $('.weblatform-links-left').mouseover(function(e) {
    e.preventDefault(); // prevents the dragging of the image.
    $(document).bind('mousemove.rotateImg', function(e2) {
      rotateOnMouse(e2, $('.w-circle-left'));
    });
  });
  $(document).mouseout(function(e) {
    $(document).unbind('mousemove.rotateImg');
  });
}
draggingPreventLeft();

  function draggingPreventRight() {
  $('.weblatform-links-right').mouseover(function(e) {
    e.preventDefault(); // prevents the dragging of the image.
    $(document).bind('mousemove.rotateImg', function(e2) {
      rotateOnMouse(e2, $('.w-circle-right'));
    });
  });
  $(document).mouseout(function(e) {
    $(document).unbind('mousemove.rotateImg');
  });  
}
draggingPreventRight();

// Do not rotate logo in circle

  function rotateOnMouse2(e, pw) {
      var offset = pw.offset();
      var center_x = (offset.left) + ($(pw).width() / 2);
      var center_y = (offset.top) + ($(pw).height() / 2);
      var mouse_x = e.pageX;
      var mouse_y = e.pageY;
      var radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);
      var degree = (radians * (180 / Math.PI)) - 100;
      $(pw).css('-moz-transform', 'rotate(' + degree + 'deg)');
      $(pw).css('-webkit-transform', 'rotate(' + degree + 'deg)');
      $(pw).css('-o-transform', 'rotate(' + degree + 'deg)');
      $(pw).css('-ms-transform', 'rotate(' + degree + 'deg)');

  }

  function draggingPreventLeft2() {
  $('.weblatform-links-left').mouseover(function(e) {
    e.preventDefault(); // prevents the dragging of the image.
    $(document).bind('mousemove.rotateImg', function(e2) {
      rotateOnMouse2(e2, $('.w-circle-left-logo'));
    });
  });
  $(document).mouseout(function(e) {
    $(document).unbind('mousemove.rotateImg');
  });
}
draggingPreventLeft2();


  function draggingPreventRight2() {
  $('.weblatform-links-right').mouseover(function(e) {
    e.preventDefault(); // prevents the dragging of the image.
    $(document).bind('mousemove.rotateImg', function(e2) {
      rotateOnMouse2(e2, $('.w-circle-right-logo'));
    });
  });
  $(document).mouseout(function(e) {
    $(document).unbind('mousemove.rotateImg');
  });  
}
draggingPreventRight2();



// Menu in internal pages
$( ".mobile-nav .mi1" ).hide().delay(50).fadeIn();
$( ".mobile-nav .mi2" ).hide().delay(100).fadeIn();
$( ".mobile-nav .mi3" ).hide().delay(150).fadeIn();
$( ".mobile-nav .mi4" ).hide().delay(200).fadeIn();
$( ".mobile-nav .mi5" ).hide().delay(250).fadeIn();
$( ".mobile-nav .mi6" ).hide().delay(300).fadeIn();
$( ".mobile-nav .mi7" ).hide().delay(350).fadeIn();
$( ".mobile-nav .mi8" ).hide().delay(400).fadeIn();
$( ".mobile-nav .mi9" ).hide().delay(450).fadeIn();
$( ".mobile-nav .mi10" ).hide().delay(500).fadeIn();
$( ".mobile-nav .mi11" ).hide().delay(550).fadeIn();
$( ".mobile-nav .mi12" ).hide().delay(600).fadeIn();
$( ".mobile-nav .mi13" ).hide().delay(650).fadeIn();
$( ".mobile-nav .mi14" ).hide().delay(700).fadeIn();
$( ".mobile-nav .mi15" ).hide().delay(750).fadeIn();
$( ".mobile-nav .mi16" ).hide().delay(800).fadeIn();
$( ".mobile-nav .mi17" ).hide().delay(850).fadeIn();
$( ".mobile-nav .mi18" ).hide().delay(900).fadeIn();

// Carousel on Module Pages
$('#ModuleCarousel').carousel('cycle');

$('#ModuleCarousel').on('mouseover', function(ev) {
  	ev.preventDefault();
    $('#ModuleCarousel').carousel('pause');
});
$('#ModuleCarousel').on('mouseleave', function(ev) {
  	ev.preventDefault();
    $('#ModuleCarousel').carousel('cycle');
});


// Popur window on module page

function popupWindowFit(){
      if ($(window).width() < 768) {
        var width = $(".carousel-module").width();
        $(".modal-info-wrap").css("width", width);
        $(".modal-info-wrap").css("height", "auto");
      }
}
popupWindowFit();

function modulePopupWindow(){
      $(".modal-info-wrap").hide();
      $(".btn-info").click(function(){
      	$(".modal-info-wrap").fadeIn();
        var height1 = $(".modal-info-wrap").height();
        var height2 = $(".carousel-module").height();
        $(".col-carousel").css("margin-bottom", height1 - height2);
      });      
      $(".modal-info-close").click(function(){
      	$(".modal-info-wrap").fadeOut();
        $(".col-carousel").css("margin-bottom", 0);
      });
}
modulePopupWindow();



// Add to Favorites on module page

$(".navigation-top ul li").each(function() { 
    $(this).find($(".grey-star")).hide();
});

$(".btn-favorite").click(function(e){
  if ($(".navigation-top ul li.active").hasClass("active-star")) {
      $(".navigation-top ul li.active .grey-star").hide();
      $(".navigation-top ul li.active").removeClass("active-star");
      $(".btn-favorite").html("<span class='glyphicon glyphicon-star'></span> I like this Module");
      e.preventDefault();
  } 
  else {
      $(".btn-favorite").html("<span style='padding-left: 38px; font-size: 13px;'>Remove from favorites</span>");      
      $('html, body').animate({
                  scrollTop: 0
                 },
                 {
                  duration: 1000,
                  easing: "easeOutQuint"  
                  });  
      function showStar() {
         $(".navigation-top ul li.active .grey-star").fadeIn();
         $(".navigation-top ul li.active .grey-star").html("<div style='width: 17px; height: 17px;' title='Added to Favorites'></div>");
         $(".navigation-top ul li.active").addClass("active-star");
      }
      setTimeout(showStar, 900)
  }
});

function isFavoritesEmpty(ul){
if (ul.is(":empty")){
  $(".favorites-empty").show();
} else {
  $(".favorites-empty").hide();
}
}

// Add to favorite on MY Favorite page
isFavoritesEmpty($(".page-my-favorites .ul-stars"));
isFavoritesEmpty($(".page-my-favorites .ul-stars-blue"));

$(".favorite-nav li").clickToggle(function() {   
      var ttext = $.trim($(this).first().contents().eq(1).text());
      $(document).find($(".ul-stars")).append("<li>"+ttext+"</li>");
      $(document).find($(".ul-stars-blue")).append("<li>"+ttext+"</li>");      
      $(this).toggleClass("chosen");
      isFavoritesEmpty($(".page-my-favorites .ul-stars"));
      isFavoritesEmpty($(".page-my-favorites .ul-stars-blue"));
},
function() {
      var ttext = $.trim($(this).first().contents().eq(1).text());
      $('.ul-stars li').each(function() {
          if ($.trim($(this).text()) == ttext) {
              $(this).remove();
          }
      });
      $('.ul-stars-blue li').each(function() {
          if ($.trim($(this).text()) == ttext) {
              $(this).remove();
          }
      });      
      $(this).toggleClass("chosen");
      isFavoritesEmpty($(".page-my-favorites .ul-stars"));
      isFavoritesEmpty($(".page-my-favorites .ul-stars-blue"));
});




// News hover in blog
$(".news-item").each(function() { 
    $(this).hover(
  function() {
    $(this).find($(".news-item-link")).fadeIn();
  }, function() {
    $(this).find($(".news-item-link")).fadeOut();
  }
);
});


// // Fit Popup window on about-us page

// function popupAboutWindowFit(){
//         var width = $(".turned-rectangle").width();
//         var height = $(".turned-rectangle").height();
//         var heightTop = $(".about-text").offset().top;
//         var heightLeft = $(".about-text").offset().left;

//         if ($(window).width() > 768) {
//           $(".modal-info-wrap").css("width", width);
//           $(".modal-info-wrap").css("height", height);
//           $(".modal-info-wrap").css("top", heightTop);
//           $(".modal-info-wrap").css("left", -(heightLeft)/2);
//         } else {
//           $(".modal-info-wrap").css("width", width + 30);
//           $(".modal-info-wrap").css("height", height -100);
//           $(".modal-info-wrap").css("top", heightTop);
//           $(".modal-info-wrap").css("left", 0);
//         }
// }
// popupAboutWindowFit();




}); //Close on load resize function






function popupFavoritesPage(){
      $(".page-my-favorites .modal-info-wrap").hide();
      $("#popupFavorites").click(function(){
          $("#popupFavorites").hide();
          $(".page-my-favorites .modal-info-wrap").fadeIn();
              // Fixing footer when popup opened
              var height1 = $(".internal-page").height();
              var height2 = $(".page-my-favorites .modal-info-wrap").height();
              var height3 = $(".page-my-favorites .modal-info-wrap").offset().top;
              var marginFooter = height2 + height3 - height1;
              $(".internal-page").css("margin-bottom", marginFooter);
      });      
      $(".modal-info-close").click(function(){
            $(".page-my-favorites .modal-info-wrap").fadeOut();
            $("#popupFavorites").show();
            // Fixing footer when popup closed
            $(".internal-page").css("margin-bottom", "50px");
      });
      $("#clickClose").click(function(){
            $(".page-my-favorites .modal-info-wrap").fadeOut();
            $("#popupFavorites").show();
            // Fixing footer when popup closed
            $(".internal-page").css("margin-bottom", "50px");
      });      
}
popupFavoritesPage();



// Popup window on internal page (about us)

function popupInternalPage(){
      $(".modal-info-wrap").hide();
      $(".btnModal").click(function(){
        $(".modal-info-wrap").fadeIn();
      });      
      $(".modal-info-close").click(function(){
        $(".modal-info-wrap").fadeOut();
      });
}
popupInternalPage()


});