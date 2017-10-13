$( document ).ready(function() {


// Init Plugin Selectpicker for custom selects
// Plugin site: http://silviomoreto.github.io/bootstrap-select/
// Required files: bootstrap-select.js, bootstrap-select.css
	$('.selectpicker').selectpicker();

// Validation for form in STEP 1
	$.validate({

		modules : "toggleDisabled",
		ignore: ":hidden:not(.selectpicker)",
		disabledFormFilter : "form.toggle-disabled",
		validateHiddenInputs: true
	});

	$('#stepSelectCountry').on('change', function(e) {
				$('#stepSelectCountry').validate();
	});

	$('#stepSelectCat').on('change', function(e) {
				$('#stepSelectCat').validate();
	});



// Init Plugin for drug and drop and upload picture 
// Plugin site: http://www.dropzonejs.com/
// Required files: dropzone.min.js and dropzone.css
	Dropzone.autoDiscover = false; // keep this line if you have multiple dropzones in the same page
	$("#dropzoneLogo").dropzone({
		acceptedFiles: "image/*",
		url: 'upload.php',
		maxFiles: 1, // Number of files at a time
		maxFilesize: 1, //in MB
		maxfilesexceeded: function(file)
			{
			alert('You have uploaded more than 1 Image. Only the first file will be uploaded!');
			},
		success: function (response) {
			var x = JSON.parse(response.xhr.responseText);
				$('.icon').hide(); // Hide Cloud icon
				$('.img').attr('src',x.img); // Set src for the image
				$('.thumb').attr('src',x.thumb); // Set src for the thumbnail
				$('img').addClass('imgdecoration');
				this.removeAllFiles(); // This removes all files after upload to reset dropzone for next upload
				console.log('Image -> '+x.img+', Thumb -> '+x.thumb); // Just to return the JSON to the console.
			},
		addRemoveLinks: true,
		removedfile: function(file) {
			var _ref; // Remove file on clicking the 'Remove file' button
			return (_ref = file.previewElement) != null ? _ref.parentNode.removeChild(file.previewElement) : void 0;
			}
	});
	// Hide input type file if 1 picture uploaded 
	if ( $("#dropzoneLogo").hasClass("dz-max-files-reached") ) {
		$(".dz-hidden-input").hide();
	}

// Steps switcher

	// Show first step on default
		$("#step1").show();
		$("#step2").hide();
		$("#step3").hide();
		$("#step4").hide();


	$("#step1Next").click(function() {

			$("#step1").hide();
			$("#step2").show();
			$("#step3").hide();
			$("#step4").hide();
		

	});

	$("#step2Prev").click(function() {
		$("#step1").show();
		$("#step2").hide();
		$("#step3").hide();
		$("#step4").hide();
	});	

	$("#step2Next").click(function() {
		$("#step1").hide();
		$("#step2").hide();
		$("#step3").show();
		$("#step4").hide();
	});	

	$("#step3Prev").click(function() {
		$("#step1").hide();
		$("#step2").show();
		$("#step3").hide();
		$("#step4").hide();
	});	

	$("#step3Next").click(function() {
		$("#step1").hide();
		$("#step2").hide();
		$("#step3").hide();
		$("#step4").show();
	});	

	$("#step4Prev").click(function() {
		$("#step1").hide();
		$("#step2").hide();
		$("#step3").show();
		$("#step4").hide();
	});	

	$("#step4Next").click(function() {
		$("#StepsModal").hide();
	});		






}); 

