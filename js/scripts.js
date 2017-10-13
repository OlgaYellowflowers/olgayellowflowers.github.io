$(document).ready( function() {





	

// Jquery Form Validation Plugin Init
// http://www.formvalidator.net/
if ( $('form').length ) {
     $.validate();
}

// Fit height of sidebar to main content height
// Used on pages with sidebar
if ( $('.sidebar').length ) {
  if ( $(window).width()  > 992 ) {
    $('#main').css('margin-bottom', 0);
    $('.sidebar').css('min-height', $('#main').height());
}
}


// Fit height to every window height of welcome screen
// Used in index.html

function fitToWindowHeight (element) {
	screenHeight = $(window).height() - $('.navbar').height();
	if (screenHeight > 480) {
		$(element).css('height', screenHeight);
		$(element).css('min-height', screenHeight);		
	}

}

fitToWindowHeight ('.section-welcome');
fitToWindowHeight ('.section-welcome .container');


// Uncheck the radio buttons when click on text input
// Used in ways-to-go.html

$('.buttons-radio').each(function () {
     $('.input-other').click(function () {
           $('input[type="radio"]').prop("checked", false);;

      });
});



// Smooth scroll for navigation
// Used on faq-page.html

function scrollNav( selector, speedScroll ){
  
  speedScroll = parseInt(speedScroll, 10) === speedScroll ? speedScroll : 300;

  $(selector).on('click', function(event){
    event.preventDefault();
    var url = $(this).attr('href'); 


    if ($(window).width() > 767) {
      $("html, body").animate({ 
          scrollTop: parseInt( $(url).offset().top ) - $('.navbar').outerHeight() - 15
        }, speedScroll);
    }
    
    else {
      $("html, body").animate({ 
          scrollTop: parseInt( $(url).offset().top ) - $('.navbar-header').outerHeight() - 15
        }, speedScroll);
    }
  });  

}

scrollNav( '.btn-pills a', 500);




// Animate blocks appearing when scroll down with Reveal Plugin
// https://github.com/jlmakes/scrollreveal.js
// Used on main page

  window.sr = ScrollReveal();
  sr.reveal('.animated', { duration: 1000 });


// Plugin for cut titles
// Used in news lists and calendar of events list
// 
// Site: http://dotdotdot.frebsite.nl/

// For mobiles 
if ( $(window).width()  <= 568 ) {

  $("news-list-item-medium .news-list-title").dotdotdot({
    ellipsis  : '... ',
    wrap    : 'word',
    height    : 48,
    fallbackToLetter: true,
    callback  : function( isTruncated, orgContent ) {}, 
    lastCharacter : {
      remove    : [ ' ', ',', ';', '.', '!', '?' ],
      noEllipsis  : []
    }
  });



  $(".news-list-item-medium .news-list-text").dotdotdot({
    ellipsis  : '... ',
    wrap    : 'word',
    height    : 48,
    fallbackToLetter: true, 
    callback  : function( isTruncated, orgContent ) {},
    lastCharacter : {
      remove    : [ ' ', ',', ';', '.', '!', '?' ],
      noEllipsis  : []
    }
  });

  $("news-list-item-small .news-list-title").dotdotdot({
    ellipsis  : '... ',
    wrap    : 'word',
    height    : 48,
    fallbackToLetter: true,
    callback  : function( isTruncated, orgContent ) {}, 
    lastCharacter : {
      remove    : [ ' ', ',', ';', '.', '!', '?' ],
      noEllipsis  : []
    }
  });



  $(".news-list-item-small .news-list-text").dotdotdot({
    ellipsis  : '... ',
    wrap    : 'word',
    height    : 48,
    fallbackToLetter: true, 
    callback  : function( isTruncated, orgContent ) {},
    lastCharacter : {
      remove    : [ ' ', ',', ';', '.', '!', '?' ],
      noEllipsis  : []
    }
  });


$(".calendar-list-title").dotdotdot({
    ellipsis  : '... ',
    wrap    : 'letter',
    height    : 30,
    fallbackToLetter: true, 
    callback  : function( isTruncated, orgContent ) {},
    lastCharacter : {
      remove    : [ ' ', ',', ';', '.', '!', '?' ],
      noEllipsis  : []
    }
  });




}


// For big screens
if ( $(window).width()  > 568 ) {

  $(".news-list-item-medium .news-list-title").dotdotdot({
    ellipsis  : '... ',
    wrap    : 'word',
    height    : 24,
    fallbackToLetter: true,
    callback  : function( isTruncated, orgContent ) {},
    lastCharacter : {
      remove    : [ ' ', ',', ';', '.', '!', '?' ],
      noEllipsis  : []
    }
  });



  $(".news-list-item-medium .news-list-text").dotdotdot({
    ellipsis  : '... ',
    wrap    : 'word',
    height    : 24,
    fallbackToLetter: true, 
    callback  : function( isTruncated, orgContent ) {},
    lastCharacter : {
      remove    : [ ' ', ',', ';', '.', '!', '?' ],
      noEllipsis  : []
    }
  });

  $(".news-list-item-small .news-list-title").dotdotdot({
    ellipsis  : '... ',
    wrap    : 'word',
    height    : 24,
    fallbackToLetter: true,
    callback  : function( isTruncated, orgContent ) {},
    lastCharacter : {
      remove    : [ ' ', ',', ';', '.', '!', '?' ],
      noEllipsis  : []
    }
  });



  $(".news-list-item-small .news-list-text").dotdotdot({
    ellipsis  : '... ',
    wrap    : 'word',
    height    : 24,
    fallbackToLetter: true, 
    callback  : function( isTruncated, orgContent ) {},
    lastCharacter : {
      remove    : [ ' ', ',', ';', '.', '!', '?' ],
      noEllipsis  : []
    }
  });

$(".calendar-list-title").dotdotdot({
    ellipsis  : '... ',
    wrap    : 'letter',
    height    : 20,
    fallbackToLetter: true, 
    callback  : function( isTruncated, orgContent ) {},
    lastCharacter : {
      remove    : [ ' ', ',', ';', '.', '!', '?' ],
      noEllipsis  : []
    }
  });


$(".calendar-list-text").dotdotdot({
    ellipsis  : '... ',
    wrap    : 'letter',
    height    : 22,
    fallbackToLetter: true,
    callback  : function( isTruncated, orgContent ) {},
    lastCharacter : {
      remove    : [ ' ', ',', ';', '.', '!', '?' ],
      noEllipsis  : []
    }
  });

}

});

