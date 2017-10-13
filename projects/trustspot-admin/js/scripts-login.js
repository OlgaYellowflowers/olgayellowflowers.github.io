$(document).ready(function() {

// Show/hide blocks in login modal window

function loginShowHide(){

	// Setting up height of fade block
	$('.modal-login').on('shown.bs.modal', function () {
			fadeHeight = $(".modal-login-login").outerHeight() - 60;
			console.log(fadeHeight);
			$(".modal-login-login-fade").css("height", fadeHeight);
	});

	// Show/hide forgot password block
	$(".btn-forgot-pass").click(function() {
		$(".modal-login-forgot").show();
		$(".modal-login-login-fade").show();
		$(".modal-login-login-btn").hide();
		$(".btn-forgot-pass").hide();
	});
	$(".modal-login-forgot-close").click(function() {
		$(".modal-login-forgot").hide();	
		$(".modal-login-login-fade").hide();
		$(".modal-login-login-btn").show();
		$(".btn-forgot-pass").show();
	});

	// Show/hide create account block
	$(".btn-signup").click(function() {
		$(".modal-login-signup").show();
		$(".modal-login-forgot").hide();	
		$(".modal-login-login-fade").hide();
		$(".modal-login-login").hide();
		$(".modal-login-title").hide();
		$(".modal-signup-title").show();
		$(".btn-forgot-pass").hide();
		$(".btn-signup-wrap").hide();
	});

	// Show/hide normal login block
	$(".link-login").click(function() {
		$(".modal-login-signup").hide();
		$(".modal-login-forgot").show();	
		$(".modal-login-login").show();
		$(".modal-login-title").show();
		$(".modal-signup-title").hide();
		$(".btn-forgot-pass").show();
		$(".btn-signup-wrap").show();
		$(".modal-login-forgot").hide();
	});	
}

// Seting up default blocks
$('.modal-login').on('hidden.bs.modal', function () {
		$(".modal-login-signup").hide();
		$(".modal-login-forgot").show();	
		$(".modal-login-login").show();
		$(".modal-login-title").show();
		$(".modal-signup-title").hide();
		$(".btn-forgot-pass").show();
		$(".btn-signup-wrap").show();
		$(".modal-login-forgot").hide();
		$(".modal-login-login-fade").hide();
		$(".modal-login-login-btn").show();
		
});


loginShowHide();



});
