$(window).bind("load", function() {
    $("#sousligne a").click(function() {
        $("#sousligne").css("visibility", "hidden")
    }), $("#hamburger").click(function() {
        var i = $("#sousligne").css("visibility");
        "visible" === i ? $("#sousligne").css("visibility", "hidden") : $("#sousligne").css("visibility", "visible")
    }), $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
        disableOn: 320,
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: !1,
        fixedContentPos: !1
    }), $(".slider-photos").owlCarousel({
        navigation: !0,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: !0,
        pagination: !1,
        autoPlay: !0
    }), $("#contact-form").bind("submit", function() {
        var i = $(this);
        return $.ajax({
            cache: !1,
            type: "POST",
            url: "mail.php",
            data: i.serialize(),
            success: function() {
                setTimeout(function() {
                    $.fancybox({
                        overlayShow: !1,
                        overlayOpacity: .1,
                        type: "ajax",
                        href: "success.html"
                    }), $("form")[0].reset()
                }, 1e3), setTimeout(function() {
                    $.fancybox.close()
                }, 5e3)
            }
        }), !1
    });
    var i = $(".crv-rnd-img-pddng").width();
    $(".crv-rnd-img-pddng").height(.465 * i), $(window).resize(function() {
        var i = $(".crv-rnd-img-pddng").width();
        $(".crv-rnd-img-pddng").height(.465 * i)
    }), $('[data-toggle="tooltip"]').tooltip();


if ($(window).width() > 640){
    $('.splash-wrap').css('min-height', $(window).height());
    $('.splash-wrap').css('height', $(window).height());
    $('.splash-wrap').css('width', $(window).width());
$('.splash-buttons').css('width', 0.17*$(window).width()+540);
$('.splash-buttons').css('left', ($(window).width()-$('.splash-buttons').width())/2)

}




function scrollRules () {
	var container = document.getElementById('container');
	var windowHeight = window.innerHeight;
	var windowWidth = window.innerWidth;
	var scrollArea = windowHeight;
	var scrollAreaWidth = windowWidth;
	window.addEventListener('scroll', function() {
	  var scrollTop = window.pageYOffset || window.scrollTop;

	  var scrollPercent = scrollTop/scrollArea || 0;

	  $('#button1').css('top', -0.4*scrollPercent*window.innerWidth);
	  $('#button2').css('top', -0.4*scrollPercent*window.innerWidth);
	});
}
if ($(window).width()>640){
    scrollRules ();
}
$(window).resize(function () { 
    if ($(window).width()>640){
        scrollRules ();
    }
});



    


});