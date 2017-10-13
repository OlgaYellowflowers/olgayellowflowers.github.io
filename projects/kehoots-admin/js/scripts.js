jQuery(window).load(function() { 

function funcNewAdminPanel() {	

// Function to align horizontally selects with "position: absolute" on the map 
$(window).on("resize", function () {
var mapWidth = $('.map-container').width();

if (mapWidth < 505) {
	 $(".sselect-by-state").css({'top' : '100px','left' : '20px'});
	 $("#sselect-by-stateSelectBoxItOptions").css({'left' : '0'});
}
else {
		 $("#sselect-by-stateSelectBoxItOptions").css({'right' : '0'});
};  
}).resize();


// Select styling
$(".new-admin-panel .styled-select select").selectBoxIt();


// Fixing responsive view
$(window).on("resize", function () {
        $(".new-admin-panel").width($(window).width());
}).resize();


// Toggle sidebar
$(".sidebar-toggle").click(function(){
      if ( $(this).hasClass("sidebar-open") ) {
          $(".main-admin-panel").animate({marginLeft: "0"},{ duration: 200, queue: false });
          $(".admin-sidebar").animate({left: "-210px"},{ duration: 200, queue: false });
          $(this).removeClass("sidebar-open");
      } else {
          $(".main-admin-panel").animate({marginLeft: "210px"},{ duration: 200, queue: false });
          $(".admin-sidebar").animate({left: "0"},{ duration: 200, queue: false });
          $(this).addClass("sidebar-open");
      }
}); 

//  Sidebar responsive
$(window).on("resize", function () {
            if ($(window).width() < 768) {
                    $(".main-admin-panel").animate({marginLeft: "0"},{ duration: 200, queue: false });
                    $(".admin-sidebar").animate({left: "-210px"},{ duration: 200, queue: false });
                    $(".sidebar-toggle").removeClass("sidebar-open");
            }
            else {
                    $(".main-admin-panel").animate({marginLeft: "210px"},{ duration: 200, queue: false });
                    $(".admin-sidebar").animate({left: "0"},{ duration: 200, queue: false });
                    $(".sidebar-toggle").addClass("sidebar-open");
            }

}).resize();


//Styler for file input
$('.styled-file-input input[type=file]').bootstrapFileInput();

 

};


funcNewAdminPanel();
});
