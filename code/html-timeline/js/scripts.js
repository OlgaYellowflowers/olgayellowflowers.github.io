jQuery(document).ready(function(){

        // Timeline
        	$(".timeline-line").each(function() {
        		heightPrev = $(this).prev(".timeline-block").outerHeight();
        		heightNext = $(this).next(".timeline-block").outerHeight();
        		heightLine = heightPrev/2 + heightNext/2 + 27;
        		$(this).find("span").css("height", heightLine);
        	    $(this).find("span").css("top", -heightPrev/2-4);
        	});




});
