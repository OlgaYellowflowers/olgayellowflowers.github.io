$( document ).ready(function() {

// Init Plugin for Styling input type file
// Required files: bootstrap.file-input.js
$('.input-file-styled').bootstrapFileInput();

// Bootstrap popover customization for actions
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

// Init Plugin Selectpicker for custom selects with icons
// Plugin site: http://silviomoreto.github.io/bootstrap-select/
// Required files: bootstrap-select.js, bootstrap-select.css
 	$('.selectpicker').selectpicker();



// Toggle bootstrap panels on click
$('.panel-toggle .panel-heading button').each(function () {
	$(this).on("click", function (e) {
	            if ($(this).hasClass('panel-collapsed')) {
	                // expand the panel
	                $(this).parents('.panel').find('.panel-body').slideDown();
	                $(this).removeClass('panel-collapsed');
	                $(this).find('i').removeClass('fa-angle-down').addClass('fa-angle-up');
	            }
	            else {
	                // collapse the panel
	                $(this).parents('.panel').find('.panel-body').slideUp();
	                $(this).addClass('panel-collapsed');
	                $(this).find('i').removeClass('fa-angle-up').addClass('fa-angle-down');
	            }
	});
});



// Init bootstrap tooltip
    $('[data-toggle="tooltip"]').tooltip();

// Init Plugin Bootstrap color picker
// Plugin site: http://mjolnic.com/bootstrap-colorpicker/
// Requiered files: bootstrap-colorpicker.min.js, bootstrap-colorpicker.css
    $('.colorpicker-init').colorpicker();



// Validation
	 $.validate({
	  ignore: ":hidden:not(.selectpicker)",
	  validateHiddenInputs: true,
	  modules : "toggleDisabled",
	  disabledFormFilter : "form.toggle-disabled"
	});

}); 

