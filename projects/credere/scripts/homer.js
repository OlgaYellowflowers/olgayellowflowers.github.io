/**
 * HOMER - Responsive Admin Theme
 * version 1.9
 *
 */

$(document).ready(function () {

    // Add special class to minimalize page elements when screen is less than 768px
    setBodySmall();
    clickToggle();

    // Handle minimalize sidebar menu
    $('.hide-menu').on('click', function(event){
        event.preventDefault();
        if ($(window).width() < 769) {
            $("body").toggleClass("show-sidebar");
        } else {
            $("body").toggleClass("hide-sidebar");
        }
    });

    // Initialize metsiMenu plugin to sidebar menu

     $('#side-menu').metisMenu({ toggle: false });

    // Initialize iCheck plugin
    $('.i-checks').iCheck({
        checkboxClass: 'icheckbox_square-green',
        radioClass: 'iradio_square-green'
    });

    // Initialize animate panel function
    $('.animate-panel').animatePanel();

    // Function for collapse hpanel
    $('.showhide').on('click', function (event) {
        event.preventDefault();
        var hpanel = $(this).closest('div.hpanel');
        var icon = $(this).find('i:first');
        var body = hpanel.find('div.panel-body');
        var footer = hpanel.find('div.panel-footer');
        body.slideToggle(300);
        footer.slideToggle(200);

        // Toggle icon from up to down
        icon.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
        hpanel.toggleClass('').toggleClass('panel-collapse');
        setTimeout(function () {
            hpanel.resize();
            hpanel.find('[id^=map-]').resize();
        }, 50);
    });

        // Function for collapse hpanel with plus icon
        $('.showhide-plus').each(function () {
            var hpanel = $(this).closest('div.hpanel');
            var icon = $(this).find('i:first');
            var body = hpanel.find('div.panel-body');
            var footer = hpanel.find('div.panel-footer');  

            $('.showhide-plus').on('click', function (event) {
                event.preventDefault();
                icon.toggleClass('fa-plus').toggleClass('fa-minus');
                hpanel.toggleClass('collapsed').toggleClass('');       
            });
        })


    // Function for close hpanel
    $('.closebox').on('click', function (event) {
        event.preventDefault();
        var hpanel = $(this).closest('div.hpanel');
        hpanel.remove();
        if($('body').hasClass('fullscreen-panel-mode')) { $('body').removeClass('fullscreen-panel-mode');}
    });

    // Fullscreen for fullscreen hpanel
    $('.fullscreen').on('click', function() {
        var hpanel = $(this).closest('div.hpanel');
        var icon = $(this).find('i:first');
        $('body').toggleClass('fullscreen-panel-mode');
        icon.toggleClass('fa-expand').toggleClass('fa-compress');
        hpanel.toggleClass('fullscreen');
        setTimeout(function() {
            $(window).trigger('resize');
        }, 100);
    });

    // Open close right sidebar
    $('.right-sidebar-toggle').on('click', function () {
        $('#right-sidebar').toggleClass('sidebar-open');
    });

    // Function for small header
    $('.small-header-action').on('click', function(event){
        event.preventDefault();
        var icon = $(this).find('i:first');
        var breadcrumb  = $(this).parent().find('#hbreadcrumb');
        $(this).parent().parent().parent().toggleClass('small-header');
        breadcrumb.toggleClass('m-t-lg');
        icon.toggleClass('fa-arrow-up').toggleClass('fa-arrow-down');
    });

    // Set minimal height of #wrapper to fit the window
    setTimeout(function () {
        fixWrapperHeight();
    });

    // Sparkline bar chart data and options used under Profile image on left navigation panel
    $("#sparkline1").sparkline([5, 6, 7, 2, 0, 4, 2, 4, 5, 7, 2, 4, 12, 11, 4], {
        type: 'bar',
        barWidth: 7,
        height: '30px',
        barColor: '#62cb31',
        negBarColor: '#53ac2a'
    });

    // Initialize tooltips
    $('.tooltip-demo').tooltip({
        selector: "[data-toggle=tooltip]"
    });

    // Initialize popover
    $("[data-toggle=popover]").popover();

    // Move modal to body
    // Fix Bootstrap backdrop issu with animation.css
    $('.modal').appendTo("body")

    // Function to make elements with equal heights
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
          if ($(window).width() > responsivePoint) {
            equalHeights(elementToMakeHeights);
          }
        });



    }

    // Make tile statistics blocks and other blocks equal heights

    function makeEqualHeightDifferentBlocks () {
       if ( $('.row-tile').length ) {
            performEqualHeights ('.hpanel.hblue .row-tile .stats-title h4', 0);
            performEqualHeights ('.hpanel.hyellow .row-tile .stats-title h4', 0);
            performEqualHeights ('.hpanel.hgreen .row-tile .stats-title h4', 0);
            performEqualHeights ('.hpanel.hred .row-tile .stats-title h4', 0);
            performEqualHeights ('.equal-row-tile-performance .stats-title h4', 0);

        }
        if ( $('.equal-account-performance').length ) {
            performEqualHeights ('.equal-account-performance .panel-body', 768);
        }    
        if ( $('.cashflow-equal-blocks').length ) {
            performEqualHeights ('.cashflow-equal-blocks .stats-title h4', 0);
        }  
        if ( $('.cashflows-equal').length ) {
            performEqualHeights ('.cashflows-equal .panel-body', 768);
        }
        if ( $('.equal-row-tile-positions').length ) {
            performEqualHeights ('.equal-row-tile-positions .stats-title h4', 768);
        }    
        if ( $('.equal-row-tile-risk').length ) {
            performEqualHeights ('.equal-row-tile-risk .stats-title h4', 768);
        }          
       
    }

    makeEqualHeightDifferentBlocks (); 

    $(document).on('shown.bs.tab', 'a[data-toggle="tab"]', function (e) {
        makeEqualHeightDifferentBlocks ();

    });

    $('[data-toggle="tooltip"]').tooltip(); 


    // Bootstrap popover multiplying and normalizing
    // Html must be:
    // <div class="popup-window" data-placement='bottom'>
    //     <i title='Button' class="btn-popup">?</i>
    // </div>
    // <div class="popup-content hide">
    //     popup content
    // </div>
    $('.popup-window').popover({
        html: true,
        title : '<button type="button" class="close" onclick="$(&quot;.popup-window&quot;).popover(&quot;hide&quot;);">&times;</button>',
        trigger: 'manual',
        content: function () {
            return $(this).next('.popup-content').html();
        }
    }).click(function(e) {
        $(this).popover('toggle');
        $('.popup-window').not(this).popover('hide');

        e.stopPropagation();
    });
    $('body').on('click', function (e) {
        $('.popup-window').each(function () {
            if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
                $(this).popover('hide');
            }
        });
    });



});

$(window).bind("load", function () {
    // Remove splash screen after load
    $('.splash').css('display', 'none')
});

$(window).bind("resize click", function () {

    // Add special class to minimalize page elements when screen is less than 768px
    setBodySmall();

    // Waint until metsiMenu, collapse and other effect finish and set wrapper height
    setTimeout(function () {
        fixWrapperHeight();
    }, 300);
});

function fixWrapperHeight() {

    // Get and set current height
    var headerH = 62;
    var navigationH = $("#navigation").height();
    var contentH = $(".content").height();

    // Set new height when contnet height is less then navigation
    if (contentH < navigationH) {
        $("#wrapper").css("min-height", navigationH + 'px');
    }

    // Set new height when contnet height is less then navigation and navigation is less then window
    if (contentH < navigationH && navigationH < $(window).height()) {
        $("#wrapper").css("min-height", $(window).height() - headerH  + 'px');
    }

    // Set new height when contnet is higher then navigation but less then window
    if (contentH > navigationH && contentH < $(window).height()) {
        $("#wrapper").css("min-height", $(window).height() - headerH + 'px');
    }
}


function setBodySmall() {
    if ($(this).width() < 769) {
        $('body').addClass('page-small');
    } else {
        $('body').removeClass('page-small');
        $('body').removeClass('show-sidebar');
    }
}
function clickToggle(){
    $('.btn-switcher').click(function(event) {
        $(this).toggleClass('off');
    });
}

// Animate panel function
$.fn['animatePanel'] = function() {

    var element = $(this);
    var effect = $(this).data('effect');
    var delay = $(this).data('delay');
    var child = $(this).data('child');

    // Set default values for attrs
    if(!effect) { effect = 'zoomIn'}
    if(!delay) { delay = 0.06 } else { delay = delay / 10 }
    if(!child) { child = '.row > div'} else {child = "." + child}

    //Set defaul values for start animation and delay
    var startAnimation = 0;
    var start = Math.abs(delay) + startAnimation;

    // Get all visible element and set opacity to 0
    var panel = element.find(child);
    panel.addClass('opacity-0');

    // Get all elements and add effect class
    panel = element.find(child);
    panel.addClass('stagger').addClass('animated-panel').addClass(effect);

    var panelsCount = panel.length + 10;
    var animateTime = (panelsCount * delay * 10000) / 10;

    // Add delay for each child elements
    panel.each(function (i, elm) {
        start += delay;
        var rounded = Math.round(start * 10) / 10;
        $(elm).css('animation-delay', rounded + 's');
        // Remove opacity 0 after finish
        $(elm).removeClass('opacity-0');
    });

    // Clear animation after finish
    setTimeout(function(){
        $('.stagger').css('animation', '');
        $('.stagger').removeClass(effect).removeClass('animated-panel').removeClass('stagger');
    }, animateTime)

};