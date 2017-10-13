jQuery(window).load(function() { 

function funcNewLandings() {	

    
// Footer always sticked to bottom
var bodyHeight = $("body").height();
var vwptHeight = $(window).height();
if (vwptHeight > bodyHeight) {
$(".new-pages footer").css("position","absolute").css("bottom",0);
}

// Focus styling for new-search bar
$(".new-search input").focusin(function(){
            $(".new-search").addClass("focused");
});
$(".new-search input").focusout(function(){
            $(".new-search").removeClass("focused");
});

// Select styling
$(".new-pages .styled-select select").selectBoxIt();
$(".new-pages .big-green-select select").selectBoxIt();


// --------------------- NEW CODE !!!!!!!!!!!!!!!!!!__________________________
$(".new-pages .select-as-formfield select").selectBoxIt();
$(window).on("resize", function () {
	$('.new-pages .select-as-formfield').each(function() {
			var selectFormWidth = $(this).parent().width();
			$(this).find(".selectboxit-container .selectboxit").css("width",selectFormWidth);
			$(this).find(".selectboxit-text").css("width",selectFormWidth-55);
			console.log($(".new-pages .select-as-formfield .selectboxit-container .selectboxit").width());
	});
}).resize();
// --------------------- NEW CODE !!!!!!!!!!!!!!!!!!__________________________



// Function that scroll to section on the page
function goToByScroll(id){
    id = id.replace("-link", "");
    $('html,body').animate({
        scrollTop: $("#"+id).offset().top},
        'slow');
}
$("#kehoots-benefits-link, #offer-kehoots-link, #view-business-link, #how-kehoots-link, #view-business2-link, #why-kehoots-link, #claim-bussiness-link, #view-groups-link").click(function(e) { 
    e.preventDefault(); 
    goToByScroll($(this).attr("id"));           
});
}


// Function to align horizontally select with "position: absolute" on the map 
$(window).on("resize", function () {
var windowWidth = $('.map-container').width()/2;
var leftPos = windowWidth-150;
    $(".styled-select").css("position","absolute").css("left",leftPos+'px');
}).resize();




funcNewLandings();
});
