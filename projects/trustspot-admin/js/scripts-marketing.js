$( document ).ready(function() {

// Show edited fields if click "Edit" in "Item list" and "Coupon list" table in Marketing
	$('.tablelist-item-tr').each(function () {

		// Click "Edit": show inputs and show "Ok"|"Delete" buttons
		$(this).find('.tablelist-item-edit-btn').click(function (){

			$(this).closest('.tablelist-item-tr').find('.tablelist-item-editable').each(function () {
				$(this).find('input').val( $(this).find('span').text() );
				$(this).find('input').fadeIn();
				$(this).find('span').hide();				
			});

			$(this).closest('.tablelist-item-tr').find('.tablelist-item-hidden-buttons').fadeIn();
			$(this).hide();

			// Click "Ok": replace edited values and show "Edit button"
		    $(this).closest('.tablelist-item-tr').find('.tablelist-item-save-btn').click(function (){

				$(this).closest('.tablelist-item-tr').find('.tablelist-item-editable').each(function () {
					$(this).find('span').html( $(this).find('input').val() );
					$(this).find('input').hide();
					$(this).find('span').fadeIn();				
				});

				$(this).closest('.tablelist-item-tr').find('.tablelist-item-hidden-buttons').hide();
				$(this).closest('.tablelist-item-tr').find('.tablelist-item-edit-btn').fadeIn();

		    });

			// Click "Delete": remove Item from the list if confirmed
		    $(this).closest('.tablelist-item-tr').find('.tablelist-item-delete-btn').click(function (){

		    	var nameOfDeletedItem = $(this).closest('.tablelist-item-tr').find('.tablelist-item-name span').text()
				if (confirm('Do you really want to delete "' + nameOfDeletedItem + '" ?')) {
					$(this).closest('.tablelist-item-tr').remove();
				}

		    });

		});
	});

// When Checkbox checked - show additional content
$('.checkbox-block').each(function () {
	if ( $(this).find('.checkbox-additional-content') ) {

		// Show/hide additional content on first load
		if ( $(this).closest('.checkbox-block').find('input[type="checkbox"]:checked').length > 0 ) {
			$(this).closest('.checkbox-block').find('.checkbox-additional-content').show();
		}
		else {
			$(this).closest('.checkbox-block').find('.checkbox-additional-content').hide();
		};

		// Show/hide additional content on click
		$(this).closest('.checkbox-block').find('input[type="checkbox"]').click(function () {

			if ( $(this).closest('.checkbox-block').find('input[type="checkbox"]:checked').length > 0 ) {
				$(this).closest('.checkbox-block').find('.checkbox-additional-content').slideDown('fast');
			}
			else {
				$(this).closest('.checkbox-block').find('.checkbox-additional-content').slideUp('fast');
			};
		});
	};
});
 


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



}); 

