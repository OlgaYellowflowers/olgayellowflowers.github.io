var allScripts_progress = false,
    slider_owl = false;
jQuery(document).ready(function() {


    // Slider
    $('.columns-bordered .column-bordered .text-center h3.title-styled').click(function() {
        if (slider_owl) {
            slider_owl.destroy();
            slider_owl = false;
            $("#slider-carousel").empty();
        }
        $(".card-wrap").each(function() {
            if ($($($(this).find('a.btn-modal')).data('target')).is(':visible')) {
                $($($(this).find('a.btn-modal')).data('target')).modal('hide');
            }
        });
        $('.columns-bordered').find('.column-bordered').hide();
        $('#reserve-col').css('height', '0');
        
        var style = $(this).parent().parent().find('.slider-blocks').data('style'),
            title = $(this).parent().parent().find('.slider-blocks').data('title');
        
        var count = 12;
        if ($(window).height() > 700) {
          count = 18;
        }
        else {
          count = 12;
        }

        $(this).parent().parent().find('.slider-blocks img').each(function(index, obj) {
            if (index > count && index % count == 0) {
                $("#slider-carousel").append('<div class="column-slider"><a href="" class="s-close" onclick="s_close(); return false;"></a><div class="title bg-' + style + '"><span>' + title + '</span></div><div class="content"></div><div class="bottom bg-' + style + '""><button class="btn btn-sm btn-styled btn-transparent text-uppercase">voir d\'autres activitе́s</button></div></div>');
            }
            $("#slider-carousel").find('.column-slider .content').last().append('<a href="" class="item-slider col-lg-2 col-md-4 col-sm-4 col-xs-12" style="background-image:url(' + $(obj).attr('src') + ')"><span class="card-cover-' + style + '"></span></a>');
        });

        $("#slider-carousel").owlCarousel({
            items: 1.2,
            itemsTablet: false,
            itemsDesktopSmall: false,
            itemsDesktop: false,
            itemsMobile: false,
            pagination: false
        });
        slider_owl = $("#slider-carousel").data('owlCarousel');
        var a_width = $("#slider-carousel").find('.column-slider .content a').first().outerWidth();
        $("#slider-carousel").find('.column-slider .content a').css({
            'height': a_width + 'px'
        });

    });


    // Function allScripts begin
    function allScripts() {

        if (allScripts_progress) return;
        allScripts_progress = true;
        $('body').css('opacity', 0);
        // Carousel with photos
        // From http://owlgraphic.com/owlcarousel/
        function photoGallery(e1, e2) {
            var sync1 = $(e1);
            var sync2 = $(e2);

            sync1.owlCarousel({
                singleItem: true,
                slideSpeed: 1000,
                navigation: true,
                pagination: false,
                afterAction: syncPosition,
                responsiveRefreshRate: 200
            });

            sync2.owlCarousel({
                items: 3,
                itemsDesktop: [1550, 2],
                itemsDesktopSmall: [1199, 3],
                itemsTablet: [979, 3],
                itemsTabletSmall: [568, 3],
                itemsMobile: [321, 3],
                pagination: false,
                responsiveRefreshRate: 100,
                afterInit: function(el) {
                    el.find(".owl-item").eq(0).addClass("synced");
                }
            });

            function syncPosition(el) {
                var current = this.currentItem;
                $(e2)
                    .find(".owl-item")
                    .removeClass("synced")
                    .eq(current)
                    .addClass("synced")
                if ($(e2).data("owlCarousel") !== undefined) {
                    center(current)
                }
            }

            $(e2).on("click", ".owl-item", function(e) {
                e.preventDefault();
                var number = $(this).data("owlItem");
                sync1.trigger("owl.goTo", number);
            });

            function center(number) {
                var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
                var num = number;
                var found = false;
                for (var i in sync2visible) {
                    if (num === sync2visible[i]) {
                        var found = true;
                    }
                }

                if (found === false) {
                    if (num > sync2visible[sync2visible.length - 1]) {
                        sync2.trigger("owl.goTo", num - sync2visible.length + 2)
                    } else {
                        if (num - 1 === -1) {
                            num = 0;
                        }
                        sync2.trigger("owl.goTo", num);
                    }
                } else if (num === sync2visible[sync2visible.length - 1]) {
                    sync2.trigger("owl.goTo", sync2visible[1])
                } else if (num === sync2visible[0]) {
                    sync2.trigger("owl.goTo", num - 1)
                }

            }

        }

        // All Photo galleries on page
        photoGallery("#sync1", "#sync2");
        photoGallery("#sync3", "#sync4");
        photoGallery("#sync5", "#sync6");
        photoGallery("#sync7", "#sync8");
        photoGallery("#sync9", "#sync10");
        photoGallery("#sync11", "#sync12");
        photoGallery("#sync13", "#sync14");
        photoGallery("#sync15", "#sync16");
        photoGallery("#sync17", "#sync18");
        photoGallery("#sync19", "#sync20");
        photoGallery("#sync21", "#sync22");

        // Making page fit to screen, when it is less content

        function fitToScreen(main, footer) {
            heightWindow = $(window).height();
            heightFooter = $(footer).outerHeight();
            $('#reserve-col').css({
                'height': '0'
            });
            $(main).css("min-height", heightWindow - heightFooter);
            var reserve_width = $('#reserve-col').outerWidth();
            $('#reserve-col').css({
                'height': ($(main).innerHeight() - $('#header-row').outerHeight()) + 'px'
            });
            $('.notifications').css({
                'width': 10 + reserve_width + 'px'
            });
            //$('#header-row').css("margin-left", ($('#reserve-col').outerWidth()+$('#reserve-col').offset().left)+'px');
            $('.notifications .info-scroll').css({
                'height': (heightWindow - $('#notifications-label').outerHeight() - 84 - 120 - 40) + 'px'
            });
            // 120 is top padding, 40 is bottom padding


            // Styling scrollbar with plugin https://github.com/noraesae/perfect-scrollbar
            $('.info-scroll').perfectScrollbar();          // Initialize
            $('.info-scroll').perfectScrollbar('update');  // Update

        }

        fitToScreen("#main", ".page-footer");

        // Footer sticked to bottom 
        function footerStickToBottom(e) {
            $(e).css("margin-top", "auto");
            heightWindow = $(window).outerHeight();
            heightBody = $("html").outerHeight();
            heightFooter = $(e).outerHeight();
            if (heightBody < heightWindow) {
                $(e).css("margin-top", heightWindow - heightBody);
            }
        }

        footerStickToBottom(".page-footer");

        // Cover cards blocks 
        function coverCards() {

            $(".card-wrap").each(function() {
                $(this).find(".card-cover").css("display", "none");
                var heightCard = $(this).find(".card").height();
                var widthCard = $(this).find(".card").width();
                var heightCardCover = $(this).find(".card-cover").height();

                // Make cover block the same height as card
                $(this).find(".card-cover").css("height", heightCard);
                $(this).find(".card-cover").css("width", widthCard);

                // Different behavior for touch and no-touch screens
                function isTouchDevice() {
                    return true == ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
                }

                if (isTouchDevice() === true) {
                    // For touch devices
                    $(this).mouseover(function() {
                        $(".card-cover").hide();
                        $(this).find(".card-cover").css("display", "table").delay(1);
                    });

                    $(this).mouseout(function() {
                        $(".card-cover").hide();
                        $(this).find(".card-cover").hide();
                    });
                } else {
                    // For no touch devices
                    $(this).mouseover(function() {
                        $(this).find(".card-cover").css("display", "table");
                    });
                    $(this).mouseout(function() {
                        if ($("body").hasClass("modal-open")) {} else {
                            $(this).find(".card-cover").hide();
                        }
                    });
                }

                isTouchDevice();

            });

            $(".card-wrap").each(function() {
                SetModalPos($(this).find('a.btn-modal'));
            });
        }

        coverCards();

        // Equal heights for columns on different size screens
        // Plugin jquery.matchHeight.js from site https://github.com/liabru/jquery-match-height
            $(".column-bordered").matchHeight();
        

        // Timeline
        $(".timeline-line").each(function() {
            heightPrev = $(this).prev(".timeline-block").outerHeight();
            heightNext = $(this).next(".timeline-block").outerHeight();
            heightLine = heightPrev / 2 + heightNext / 2 + 27;
            $(this).find("span").css("height", heightLine);
            $(this).find("span").css("top", -heightPrev / 2 - 4);
        });

        $('body').animate({
            opacity: 1
        }, 1000);
        allScripts_progress = false;
    }
    // Function allScripts end

    allScripts();

    // Redraw everything onresize
    $(window).on("resize", function() {
        allScripts();
    }).resize();

    // Showing google map in modal window
    $('.modal').on('shown.bs.modal', function(event) {
        SetModalPos(event.relatedTarget);
        initialize();
    });

    // Show/hide modal windows
    $('.modal').on('show.bs.modal', function(event) {
        $(".card-wrap").each(function() {
            if ($($($(this).find('a.btn-modal')).data('target')).is(':visible')) {
                $($($(this).find('a.btn-modal')).data('target')).modal('hide');
            }
        });
    });

});

// Modal window width and position
function SetModalPos(obj) {
    if ($($(obj).data('target')).is(':visible')) {
        var width_0 = $(obj).parent().parent().parent().parent().parent().outerWidth() - $(obj).parent().parent().parent().parent().outerWidth();
        var width = 2 * ($(obj).parent().parent().parent().parent().parent().outerWidth() - (width_0 - 3) / 2);
        $($(obj).data('target')).css({
            'width': width + 'px'
        });
        $($(obj).data('target')).children().css({
            'width': width + 'px'
        });
        $($(obj).data('target')).css({
            'height': $($(obj).data('target')).children().outerHeight() + 'px'
        });
        $('#main').css('min-height', ($(obj).parent().parent().parent().parent().offset().top - 2 + $($(obj).data('target')).children().outerHeight() + 20) + 'px');
        var left = $(obj).parent().parent().parent().parent().offset().left - 1;
        if (left + width > $(window).innerWidth()) left = left - (width + width_0 - 2) / 2;
        $($(obj).data('target')).offset({
            top: $(obj).parent().parent().parent().parent().offset().top - 2,
            left: left
        });
        $($(obj).data('target')).children().offset({
            top: $(obj).parent().parent().parent().parent().offset().top - 2,
            left: left
        });
    }
}

// Close buttons
function s_close() {
    slider_owl.destroy();
    $("#slider-carousel").empty().hide();
    $('.columns-bordered').find('.column-bordered').show();
}
