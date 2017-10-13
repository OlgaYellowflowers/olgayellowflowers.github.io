jQuery(document).ready(function()
{
	function menuMediaPopup() {
    $(".media-popup").hide();
    console.log("dfd");
    $(".menu-media-popup .media-popup-link").on("click", function () {
            $(".media-popup").toggle('fast');
            $(".menu-media-popup").toggleClass("active");
            return false; 
    });
    $(".close-btn").on("click", function () {
            $(".media-popup").hide('fast');
            $(".menu-media-popup").removeClass("active");
    }); 

    return false;  
    }
    menuMediaPopup();

		$( ".sticky-wrapper" ).css( "height", "135");
		var width2 = $( ".width-full" ).outerWidth(true);

        var height = $( ".tp-banner" ).css( "height");
        $( ".banner-right" ).css( "max-height", height).css( "height", height);
        var height2 = height.substr(0,3) - 70;
        $( ".banner-right2" ).css( "max-height", height2 + 'px').css( "height", height2 + 'px');

	
	if (document.documentElement.clientHeight > document.documentElement.clientWidth) {
	$('.container-fullwidth').css("width", "100%");
	$('.cl_right').css("display", "none");
	$('.s-top').css("display", "inline");
	
	}

	if (document.documentElement.clientHeight < 768) {
	$('.full-width-w').removeClass("full-width-w");
	$('.full-width-w2').removeClass("full-width-w2");

	$('.s-top').css("display", "inline");

	}


	if (document.documentElement.clientHeight < document.documentElement.clientWidth && document.documentElement.clientHeight > 799) {
	$('.20wd').css("width", "20%");
	$('.80wd').css("width", "80%");
	}
		
	if (document.documentElement.clientHeight < document.documentElement.clientWidth) {
	var w = document.documentElement.clientWidth - 100;
	$('.cont-quot').css("width", w);
	}
	$('.quoet').hide();

	$(".more-quot").on("click", function () {
    		$(".quoet").show('slow');
		$(".flex-viewport").css("height", "100%");
		$(".more-quot").hide();
	});





});