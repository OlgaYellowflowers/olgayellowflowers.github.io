

$( document ).ready(function() {

	// Menu changes background-color on scroll

	if ($("#wrapper").hasClass("inner-second")) {

	    $(window).scroll(function() {    
		    if ($(window).scrollTop() >= 20) {
		        $("#wrapper.inner-second #header").addClass("header-inner-second");
		    }
		    else {
		    	$("#wrapper.inner-second #header").removeClass("header-inner-second");	
		    }
		});


	}

	else {
	   $(window).scroll(function() {    
		    if ($(window).scrollTop() >= 20) {
		        $("#wrapper.inner #header").addClass("header-video");
		    }
		    else {
		    	$("#wrapper.inner #header").removeClass("header-video");	
		    }
		});	
	}

 



});