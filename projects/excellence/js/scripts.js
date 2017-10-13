
$(document).ready(function() {

// 
// 
// Define mobile or not
var is_mobile = ((/Mobile|Android|iPhone|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera) ? true : false);


// 
// 
// Jquery Form Validation Plugin Init
// jquery.form-validator.js
// http://www.formvalidator.net/

// 28.09.2016 CHANGES BEGIN
if ( $('form').length ) {

	if ($(window).width()>767 ) {
	     $.validate({
	      lang : 'es',
	      modules : 'security',
		  addValidClassOnAll : true,
		  scrollToTopOnError: false
		});
	 }
	 else {
	      $.validate({
	      lang : 'es',
	      modules : 'security',
		  addValidClassOnAll : true,
		  scrollToTopOnError: true
		});	
	 }

}
// 28.09.2016 CHANGES END


// 28.09.2016 CHANGES BEGIN

// 
// 
// Get today day for select on page with age validation

function setToday(){
	var d = new Date();
	var month = d.getMonth()+1;
	var day = d.getDate();
	    
	$('#AgeDay').val(((''+day).length<2 ? '0' : '') + day);
	$('#AgeMonth').val(((''+month).length<2 ? '0' : '') + month);
	$('#AgeYear').val(d.getFullYear());

	// Hide future years
	$('#AgeYear option').each(function () {
		if ($(this).val() > d.getFullYear() ) {
			$(this).hide();
		}
	})


}

if ($('.selects-age').length) {
    setToday();
}

// 28.09.2016 CHANGES END


// 
// 
// Select styling plugin init
// bootstrap-select.min.js
// http://silviomoreto.github.io/bootstrap-select
// Exists on page 1.3.-HOME-Edad-escuela.html

if ($('.select-styled').length) {
        $('.select-styled').selectpicker();
}


// 
// 
// Validate checkox "accepto las condiciones legales"
// Exists on page 2.2.1.-ALUMNOS-Register-form.html


$("[name='AcceptCondicionesLeagales[]']:eq(0)")
  .valAttr('','validate_checkbox_group')
  .valAttr('qty','1')
  .valAttr('error-msg','Accepto las condiciones legales');


// 
// 
// Validate checkox "accepto las bases de participación"
// Exists on page CONSUMIDOR_1.5.-Premium-selection-register.html


$("[name='AcceptCondicionesParticipacion[]']:eq(0)")
  .valAttr('','validate_checkbox_group')
  .valAttr('qty','1')
  .valAttr('error-msg','Accepto las bases de participación');





// 
// 
// Vertical aligner - align block in the middle of the window
// Exists on pages: 1.1-1.4 Home

function VerticalAligner () {
	var windowHeight = $(window).height() - $('.navbar-default').height() - $('.footer').outerHeight() - 80;
	var contentHeight = $('.vertical-aligner').height();
	var contentMargin = windowHeight/2 - contentHeight/2

		if (contentMargin > 0) {
			$('.vertical-aligner').css('margin-top', contentMargin);
		}
		else {
			$('.vertical-aligner').css('margin-top', '20px');

		}
}

if ($('.vertical-aligner').length) {

	VerticalAligner ();

	$(window).on('resize', function(){
		VerticalAligner ();
	});

}


// 
// 
// Modal window - fixing height

function modalFixHeight () {
	$('.modal').each(function(){
		$(this).on('show.bs.modal', function () {
		    $(this).find('.modal-body').css('overflow-y', 'auto'); 
		    $(this).find('.modal-body').css('max-height', $(window).height() * 0.7);
		});	
	});
}

if ($(window).width()>767 ) {
	modalFixHeight ();
}
$(window).on('resize', function(){
	if ($(window).width()>767 ) {
		modalFixHeight ();
	}
});
// 
// 
// Styling scrollbar in modal windows
// perfect-scrollbar.jquery.min.js
// https://github.com/noraesae/perfect-scrollbar


if ($(window).width()>767 ) {
	if ($('.modal-scroll').length) {
		$('.modal-scroll').mCustomScrollbar({
			theme:"dark-2",
		});
	}
}
$(window).on('resize', function(){
	if ($(window).width()>767 ) {
		if ($('.modal-scroll').length) {
			$('.modal-scroll').mCustomScrollbar({
				theme:"dark-2",
			});
		}
	}
});


// 
// 
// Styling scrollbar for different blocks
// perfect-scrollbar.jquery.min.js
// https://github.com/noraesae/perfect-scrollbar


if ($('.block-scrollable').length) {
	$('.block-scrollable').mCustomScrollbar({
		theme:"dark-3",
});
} 

// 
// 
// Count heights for scrollable blocks and make responsive scrollable blocks

// Function to define height of scrollable blocks
function defineElemHeight(elem, offsetBottom) {
	var offsetTop = $(elem).offset().top;
	var elemHeight = $(window).height() - offsetTop - offsetBottom - 5;
	$(elem).css('height', elemHeight);	
}

// 
// 
// Make Scrollable block
if ( !is_mobile ) {

	// Exists on page CONSUMIDOR_1.6.-City-selection-map.html
	// 60 is the height of button in the bottom of the page
	if ($('.list-bars-cities').length) {
		if ($(window).height()>600 && $(window).width()>768) {
			defineElemHeight('.block-scrollable.list-bars-cities', 60);
		}
		$(window).on('resize', function(){
			if ($(window).height()>600 ) {
					defineElemHeight('.block-scrollable.list-bars-cities', 60);
			}
		});
	}
	else {

	// Exists on page 4.1.-JURADDO-Detalle-lista.html
	// Exists on page 5.1.-JURADDO-MAXXIUM-Detalle-lista.html
	// Exists on page 4.2.-JURADDO-Detalle-ranking.html
	// Exists on page 5.2.-JURADDO-MAXXIUM-Detalle-ranking.html
	if ($('.block-scrollable').length) {
		if ($(window).height()>600 ) {
				defineElemHeight('.block-scrollable', 0);
			}
			$(window).on('resize', function(){
				if ($(window).height()>600 ) {
						defineElemHeight('.block-scrollable', 0);
				}
			});
		}
	}
}

// 
// 
// Go, scroll to the map when click on address bar for mobiles
// Exists on page CONSUMIDOR_1.6.-City-selection-map.html
$(".list-bar-item").click(function() {
    $('html, body').animate({
        scrollTop: $("#map").offset().top
    }, 1000);
});


// 
// 
// Styling scrollbar for textarea
// perfect-scrollbar.jquery.min.js
// https://github.com/noraesae/perfect-scrollbar
// Exists on page 2.4.-ALUMNOS-Subir-propuesta.html

function textareaCustomScrollbar () {
				var textareaLineHeight=parseInt($(".textarea-wrapper textarea").css("line-height"));
				
				$(".textarea-wrapper").mCustomScrollbar({
					scrollInertia:0,
					theme:"dark-3",
					advanced:{autoScrollOnFocus:false},
					keyboard:{enable:false},
					snapAmount:textareaLineHeight
				});
				
				var textarea=$(".textarea-wrapper textarea"),textareaWrapper=$(".textarea-wrapper"),textareaClone=$(".textarea-wrapper .textarea-clone");
				
				textarea.bind("keyup keydown",function(e){
        			var $this=$(this),textareaContent=$this.val(),clength=textareaContent.length,cursorPosition=textarea.getCursorPosition();
					textareaContent="<span>"+textareaContent.substr(0,cursorPosition)+"</span>"+textareaContent.substr(cursorPosition,textareaContent.length);
					textareaContent=textareaContent.replace(/\n/g,"<br />");
        			textareaClone.html(textareaContent+"<br />");
        			$this.css("height",textareaClone.height());
					var textareaCloneSpan=textareaClone.children("span"),textareaCloneSpanOffset=0,
						viewLimitBottom=(parseInt(textareaClone.css("min-height")))-textareaCloneSpanOffset,viewLimitTop=textareaCloneSpanOffset,
						viewRatio=Math.round(textareaCloneSpan.height()+textareaWrapper.find(".mCSB_container").position().top);
					if(viewRatio>viewLimitBottom || viewRatio<viewLimitTop){
						if((textareaCloneSpan.height()-textareaCloneSpanOffset)>0){
							textareaWrapper.mCustomScrollbar("scrollTo",textareaCloneSpan.height()-textareaCloneSpanOffset-textareaLineHeight);
						}else{
							textareaWrapper.mCustomScrollbar("scrollTo","top");
						}
					}
    			});
    			
    			$.fn.getCursorPosition=function(){
        			var el=$(this).get(0),pos=0;
        			if("selectionStart" in el){
            			pos=el.selectionStart;
        			}else if("selection" in document){
            			el.focus();
            			var sel=document.selection.createRange(),selLength=document.selection.createRange().text.length;
            			sel.moveStart("character",-el.value.length);
            			pos=sel.text.length-selLength;
        			}
        			return pos;
    			}
}

if ($('.textarea-wrapper textarea').length) {
	textareaCustomScrollbar ();
}



// 
// 
// Average rating, counted from Star rating's values
// Exists on page 4.3.-JURADDO-Subir-propuesta.html

function isFloat(x) { return !!(x % 1); }

$('.AverageRating_wrap').each(function () {

	$(':radio').change(function () {
	    var total = 0,
	        valid_labels = 0,
	        average = 0;
	        $("#AverageRating").val(average);
	    $('input:checked').each(function () {
	        var val = parseInt($(this).val(), 10);
	        if (!isNaN(val)) {
	            valid_labels += 1;
	            total += val;
	        }
	    });
	    console.log(total);
	    console.log(valid_labels);
	    average = total / valid_labels;
        if (isFloat(average)==true) {
	      console.log(average)
	      average = average.toFixed(1);
	    }
	    $("#AverageRating").val(average);

	});

});
 

//Styler for file input

if ($('.input-file-styled').length) {
	$('.input-file-styled').bootstrapFileInput();
}

});



