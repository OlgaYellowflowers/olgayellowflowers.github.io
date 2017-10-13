$(document).ready(function() {
    $(".slider-blocks").append('<div class="column-slider"><div class="title bg-yellow">Decouvrir Paris</div><div class="content"></div></div>');
    $('.slider-blocks img').each(function(index, obj) {
        $('.column-slider .content').last().append('<a href="" class="item-slider col-lg-2 col-md-4 col-sm-4 col-xs-12" style="background-image:url(' + $(obj).attr('src') + ')"><span class="card-cover-yellow"></span></a>');
    });
    var a_width = $('.column-slider .content a').first().outerWidth();
    $('.column-slider .content a').css({
        'height': a_width + 'px'
    });
    $('.slider-blocks img').remove();
});
