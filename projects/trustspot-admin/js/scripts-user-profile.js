$( document ).ready(function() {

// Init Plugin for Styling input type file
// Required files: bootstrap.file-input.js
$('.input-file-styled').bootstrapFileInput();

// Validation
	 $.validate({
	  ignore: ":hidden:not(.selectpicker)",
	  validateHiddenInputs: true,
	  modules : "toggleDisabled",
	  disabledFormFilter : "form.toggle-disabled"
	});



}); 


