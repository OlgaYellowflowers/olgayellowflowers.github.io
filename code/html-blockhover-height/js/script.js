

$(document).ready(function() {
	// Making a proper height to link, that overlapping the business card, 
	// depending on content size inside
	function linkOverlappingBizCard () {
		
		$('.biz-card-wrap').each(function() {
			var heightCard = $(this).outerHeight();
			$(this).find(".biz-card-link").css("height",heightCard);
		});	
	}

	linkOverlappingBizCard();
});
