jQuery(document).ready(function(){

// NEW CODE BEGIN
// Fixed right sidebar



$(window).scroll(function() {


    var height = $(window).scrollTop();

       console.log(widthFixedSidebar);


    if(height  > 105) {
var widthFixedSidebar = $(window).width() - $(".fixed-right-sidebar-wrapper").offset().left;
var widthSidebarOffset = $(".fixed-right-sidebar-wrapper").offset().left;
var widthSidebar = $(".fixed-right-sidebar-wrapper").width();
      $(".fixed-right-sidebar-inside").css("width", widthSidebar);
      $(".fixed-right-sidebar").css("width", widthFixedSidebar);
      $(".fixed-right-sidebar").css("left", widthSidebarOffset);
      $(".fixed-right-sidebar").css("top", "0");
      $(".fixed-right-sidebar").css("position", "fixed");
      $(".fixed-right-sidebar").css("padding-left", "15px");

    }
    else {
      $(".fixed-right-sidebar").css("position", "relative");
      $(".fixed-right-sidebar").css("width", "auto");
      $(".fixed-right-sidebar").css("left", "0");

    }
});

// NEW CODE END


// Link to bootstrap tab from the custom url
function LinkToTab(){
    $(document).on('click.bs.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function (e) {
    e.preventDefault()
    if($(this).parent().prop('tagName')!=='LI')
    {

        $('ul.nav li a[href="' + $(this).attr('href') + '"]').tab('show');
        $('html, body').animate({
            scrollTop: $(".nav-tabs").offset().top
        }, 500);
    }   
    else
    {
        $(this).tab('show')
    }
  });
 }
LinkToTab();

// CAROUSEL WITH HOUSES on index.html

var owlWrap = $('.carousel-houses .owl-wrapper');
if (owlWrap.length > 0) {
    if (jQuery().owlCarousel) {
        owlWrap.each(function(){
            var carousel= $(this).find('.owl-carousel'),
               navigation = $(this).find('.customNavigation'),
                nextBtn = navigation.find('.next'),
                prevBtn = navigation.find('.prev'),
                playBtn = navigation.find('.play'),
                stopBtn = navigation.find('.stop');
            
          carousel.owlCarousel({
              itemsCustom : [
        [0, 1],
        [580, 2],
        [1000, 3],
        [1240, 4],
        [1600, 4]
      ],
      pagination  : false,
      navigation: true,
      navigationText: false,
              autoPlay: 2000
          });
            nextBtn.click(function(){
            carousel.trigger('owl.next');
          });
          prevBtn.click(function(){
            carousel.trigger('owl.prev');
          });
          playBtn.click(function(){
            owl.trigger('owl.play',1000); 
          });
          stopBtn.click(function(){
            owl.trigger('owl.stop');
          });

        });
    };
};

// CAROUSEL WITH COMPANIES on index.html

var owlWrap = $('.carousel-companies .owl-wrapper');
if (owlWrap.length > 0) {
    // check if plugin is loaded
    if (jQuery().owlCarousel) {
        owlWrap.each(function(){
            var carousel= $(this).find('.owl-carousel'),
                navigation = $(this).find('.customNavigation'),
                nextBtn = navigation.find('.next'),
                prevBtn = navigation.find('.prev'),
                playBtn = navigation.find('.play'),
                stopBtn = navigation.find('.stop');
            
          carousel.owlCarousel({
              itemsCustom : [
        [0, 2],
        [580, 4],
        [1000, 6],
        [1240, 8],
        [1600, 8]
      ],
      pagination  : false,
      navigation: true,
      navigationText: false,
              autoPlay: 2000
          });
         
          nextBtn.click(function(){
            carousel.trigger('owl.next');
          });
          prevBtn.click(function(){
            carousel.trigger('owl.prev');
          });
          playBtn.click(function(){
            owl.trigger('owl.play',1000); 
          });
          stopBtn.click(function(){
            owl.trigger('owl.stop');
          });

        });
    };
};



// Function that make blocks with equal heights on index.html

function equalHeightsBlock(block1, block2){
  $(block1).css("height", "auto");
  $(block2).css("height", "auto");

  height1 = $(block1).outerHeight();
  height2 = $(block2).outerHeight();

  if (height1 > height2) {
    $(block2).css("height", height1);
  }
  else {
    $(block1).css("height", height2);
  }
}
if ($(window).width() > 768) {
  equalHeightsBlock(".equalHeightsBlock1", ".equalHeightsBlock2");
}


// Carousel with photos of property on the second tab on property-details.html
  var sync1 = $("#sync1");
  var sync2 = $("#sync2");
 
  sync1.owlCarousel({
    singleItem : true,
    slideSpeed : 1000,
    navigation: true,
    pagination:false,
    afterAction : syncPosition,
    responsiveRefreshRate : 200
  });
 
  sync2.owlCarousel({
    items : 8,
    itemsDesktop      : [1199,7],
    itemsDesktopSmall     : [979,6],
    itemsTablet       : [768,7],
    itemsMobile       : [572,3],
    pagination:false,
    responsiveRefreshRate : 100,
    afterInit : function(el){
      el.find(".owl-item").eq(0).addClass("synced");
    }
  });
 
  function syncPosition(el){
    var current = this.currentItem;
    $("#sync2")
      .find(".owl-item")
      .removeClass("synced")
      .eq(current)
      .addClass("synced")
    if($("#sync2").data("owlCarousel") !== undefined){
      center(current)
    }
  }
 
  $("#sync2").on("click", ".owl-item", function(e){
    e.preventDefault();
    var number = $(this).data("owlItem");
    sync1.trigger("owl.goTo",number);
  });
 
  function center(number){
    var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
    var num = number;
    var found = false;
    for(var i in sync2visible){
      if(num === sync2visible[i]){
        var found = true;
      }
    }
 
    if(found===false){
      if(num>sync2visible[sync2visible.length-1]){
        sync2.trigger("owl.goTo", num - sync2visible.length+2)
      }else{
        if(num - 1 === -1){
          num = 0;
        }
        sync2.trigger("owl.goTo", num);
      }
    } else if(num === sync2visible[sync2visible.length-1]){
      sync2.trigger("owl.goTo", sync2visible[1])
    } else if(num === sync2visible[0]){
      sync2.trigger("owl.goTo", num-1)
    }
    
  }



// Footer sticked to bottom

function footerStickToBottom(e){

  heightWindow = $(window).height();
  heightBody = $("body").height();
  if (heightBody < heightWindow) {
    $(e).css("margin-top", heightWindow - heightBody);
    console.log(heightWindow, heightBody);
  }
}
$("body").click(function() {
  footerStickToBottom(".page-footer");
});


footerStickToBottom(".page-footer");

$(window).on("resize", function () {
  footerStickToBottom(".page-footer");
}).resize();



});
