$( document ).ready(function() {



// Init Plugin for adding tags
// Required files: jquery.tagbox.js and jquery.tagbox.css
// Site: http://www.geektantra.com/2011/05/jquery-tagbox-plugin/
      $("#jquery-tagbox-text").tagBox({
	      maxTags: 10
      });


// Init Plugin Selectpicker for custom selects with icons
// Plugin site: http://silviomoreto.github.io/bootstrap-select/
// Required files: bootstrap-select.js, bootstrap-select.css
 	$('.selectpicker').selectpicker();


// Init Plugin Bootstrap color picker
// Plugin site: http://mjolnic.com/bootstrap-colorpicker/
// Requiered files: bootstrap-colorpicker.min.js, bootstrap-colorpicker.css
    $('.colorpicker-init').colorpicker();


// Show basic or extended Trust Widget Layout depends on select value
function switchTrustWidgetLayout() {
     var optionSelected = $('#layoutTrustWidgetSelect').find("option:selected");
     if (optionSelected.val() == 'basic') {
        $('.trust-widget').addClass('trust-widget-basic');
    }
    else 
        $('.trust-widget').removeClass('trust-widget-basic');
};

	switchTrustWidgetLayout(); //First load

	$('#layoutTrustWidgetSelect').change(function () {
		switchTrustWidgetLayout() 
	 });


// Init Plugin "Owl carousel 1.3.2" for Promotion Widgets
// Site http://owlgraphic.com/owlcarousel/

// Carousel for for Widget "Reviews Tab"
$('#widgetReviewsTab').owlCarousel({
    navigation:true,
    navigationText : ["<img src='img/arrow-grey-left.png'>","<img src='img/arrow-grey-right.png'>"],
    pagination: true,
    paginationNumbers: true,
    items : 1, 
    itemsDesktop : false,
    itemsDesktopSmall : false,
    itemsTablet: false,
    itemsMobile : false

})

// Carousel for for Widget "Reviews Carousel"
$('#widgetReviewsCarousel').owlCarousel({
    navigation:true,
    navigationText : ["<img src='img/arrow-grey-left.png'>","<img src='img/arrow-grey-right.png'>"],
    pagination: false,
    items : 2,
    itemsDesktop : false,
    itemsDesktopSmall : false,
    itemsTablet: false,
    itemsMobile : false
})



// Init bootstrap tooltip
    $('[data-toggle="tooltip"]').tooltip();   


// Badge dropdown toggle
    $('a.tsbadge-dropdown-title').click(function() {
        $('.tsbadge-dropdown-dropdown').slideToggle();
        $('.tsbadge-dropdown-dropdown .trust-widget-body .ps-scrollbar-y-rail').trigger('click');      
        return false;
    });
    $('.tsbadge-dropdown-dropdown .close') .click(function() {
        $('.tsbadge-dropdown-dropdown').slideToggle();
    });

// Styling scrollbar in Badge dropdown with plugin https://github.com/noraesae/perfect-scrollbar
// Need files perfect-scrollbar.css, perfect-scrollbar.jquery.min.js
    $('.tsbadge-dropdown-dropdown .trust-widget-body').perfectScrollbar();          // Initialize

// Badge mini-carousel
    $('.mini-carousel').owlCarousel({
      items: 1,
      singleItem: true
    });


// Badge slider
$('#widgetReviewsSlider').owlCarousel({
    navigation:true,
    navigationText : ["<img src='img/arrow-grey-left.png'>","<img src='img/arrow-grey-right.png'>"],
    pagination: false,
    items : 3,
    itemsDesktop : false,
    itemsDesktopSmall : false,
    itemsTablet: false,
    itemsMobile : false
})

// Mini carousel
$('#widgetMiniCarousel').owlCarousel({
    navigation:true,
    navigationText : ["<img src='img/arrow-grey-left.png'>","<img src='img/arrow-grey-right.png'>"],
    pagination: true,
    paginationNumbers: true,
    items : 1, 
    itemsDesktop : false,
    itemsDesktopSmall : false,
    itemsTablet: false,
    itemsMobile : false

})


}); 


