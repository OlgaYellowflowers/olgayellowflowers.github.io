jQuery(window).load(function() { 



$(window).on("resize", function () {

			// Toggle filter panel on small screens

			$(".other-filters").click(function(){
				$(this).find(".other-filters-arrow-up").toggleClass("other-filters-arrow-up, other-filters-arrow-down");
				$(".other-filters-hide").toggle();
				$(this).toggleClass("other-filters-border");
			}); 



			// Vertical aligning of elements
			function VerticalAligningElements() {
				$('.v-middle').each(function() {
						var heightParent = $(this).parent().height();
						var heightElem = $(this).height();
						$(this).css("padding-top",heightParent/2-heightElem/2);
				});
			};
			VerticalAligningElements();


			// Vertical aligning of element in divtable in responsive on contacts page
			function ContactRespDivtable() {
				var windowWidth = $(window).width();
				if (windowWidth < 768) {
				$('.contacts-td-name').each(function() {
						var widthParent = $(this).parent().width();
						var widthElem = widthParent - $('.icon-table-first').width();
						$(this).css("width",widthElem);
				});
					$('.contacts-td-company').each(function() {
						var widthParent = $(this).parent().width();
						var widthElem = widthParent - $('.icon-table-first').width();
						$(this).css("width",widthElem);
				});
						$('.contacts-td-location').each(function() {
						var widthParent = $(this).parent().width();
						var widthElem = widthParent - $('.icon-table-first').width();
						$(this).css("width",widthElem);
				});
				}
			};
			ContactRespDivtable();

			// Fixing width of dropdowns list
			function FixWidthDropdown() {
				$('button.dropdown-toggle').each(function() {
						var widthParent = $(this).closest('.input-group').innerWidth();
						$(this).parent().find('ul').css('width',widthParent);
						console.log($(this).closest('.input-group').innerWidth());
				});
			};
			FixWidthDropdown();



			// Schedule 

			// Schedule responsive
			function ScheduleResponsive() {
				var windowWidth = $(window).width();
				$('.schedule-table-window').css('width',windowWidth);
			};
			ScheduleResponsive();

			// Schedule css fixes
			function ScheduleCssFixes() {
				$('.event-box-item').each(function() {
					 if (($(this).width()) < 30) {
						$(this).css('padding','5px 0');
						$(this).find('.event-box-reminder').toggleClass('event-box-reminder-narrow')
						$(this).find('button').toggleClass('button-narrow')
					}
				});
			};
			ScheduleCssFixes();

			// Fixed header - scrollable table 
			function FixedHeaderScrollableTable() {
				var screenHeight = $(window).height();
				if (screenHeight > 615) {
						$('.fixed-table-body').css('height','615px').css('overflow-y','visible');
				}
				else {
					var heightScrollableBody = screenHeight - $('.fixedHeader').height();
					$('.fixed-table').css('height',heightScrollableBody);
					$('.fixed-table-body').css('height',heightScrollableBody - $('.fixed-table-header').height() - 30).css('overflow-y','scroll').css('overflow-x','visible');
				}
			};
			FixedHeaderScrollableTable();




			// ----- Summary page

				// Toggle More people from team
					// Horizontal aligning people chart
					var widthSectionTeamAligner = $('section.team').width()-$('.people-chart-wrap').width()-$('.team-choice').width()-$('.team-statistic-wrap').width();	    
					$('.people-chart-wrap').css('padding-left',(widthSectionTeamAligner-302)/2);


					$(".btn-team-statistic-wrap").click(function() { 
				    $(".team-statistic").toggle();
				    $(".team-statistic-wrap").toggleClass('team-statistic-wrap-open');
					// Horizontal aligning people chart
					var widthSectionTeamAligner = $('section.team').width()-$('.people-chart-wrap').width()-$('.team-choice').width()-$('.team-statistic-wrap').width();	    
					$('.people-chart-wrap').css('padding-left',(widthSectionTeamAligner-302)/2);
					return false;
				});
				// ---- People chart
				// Vertical aligning numbers in stairs
				$('.people-chart-item-value').each(function() {
					var elemHeight = $(this).innerHeight();
				 	$(this).css('padding-top',(elemHeight-16)/2)
				});

			// statistic-table aligner
			$('.statistic-table-height-aligner').each(function() {
			var heights = $(".box-stat-body", this).map(function ()
			    {
			        return $(this).outerHeight();
			    }).get(),
			    maxHeight = Math.max.apply(null, heights);
			 	$(".box-stat-body", this).css('min-height',maxHeight);

			});


			// Dropdown block avoid close on click (bootstrap in-build to close dropdown onclick)
			    $('.dropdown-content').click(function(e) {
			        e.stopPropagation();
			    });
			    $('.dropdown-content').focus(function(e) {
			        e.stopPropagation();
			    });




}).resize();





// Color picker carousel

function ColorPicker() {
	$('.bg-theme1').addClass('theme-picker-active');
	$('.preview-screen-tablet').hide();
	$('.preview-screen-mobile').hide();
	$('.screen-pc').addClass('screen-choice-active');

$('.theme-picker span').click(function() { 
	$('.theme-picker span').removeClass('theme-picker-active');
	$(this).addClass('theme-picker-active');
	var bgColor = $(this).css('background-color');
	$('.preview-screen').css('background-color',bgColor);
	return false;
});

$('.screen-pc').click(function() { 
	$(this).addClass('screen-choice-active');
	$('.screen-tablet').removeClass('screen-choice-active');
	$('.screen-mobile').removeClass('screen-choice-active');
	$('.preview-screen-pc').show();
	$('.preview-screen-tablet').hide();
	$('.preview-screen-mobile').hide();
	return false;
});
$('.screen-tablet').click(function() {
	$(this).addClass('screen-choice-active');
	$('.screen-pc').removeClass('screen-choice-active');
	$('.screen-mobile').removeClass('screen-choice-active'); 
	$('.preview-screen-pc').hide();
	$('.preview-screen-tablet').show();
	$('.preview-screen-mobile').hide();
	return false;
});
$('.screen-mobile').click(function() { 
	$(this).addClass('screen-choice-active');
	$('.screen-tablet').removeClass('screen-choice-active');
	$('.screen-pc').removeClass('screen-choice-active');
	$('.preview-screen-pc').hide();
	$('.preview-screen-tablet').hide();
	$('.preview-screen-mobile').show();
	return false;
});
};
ColorPicker();


// Переключатели
function switchers() {
$('.switch').each(function() {
    $(this).on('click', function (){
        $(this).toggleClass('left right');
		return false; 
    });
});
};
switchers()


// Adinistrator settings -  category edit
function editCategory() {

		$('.edit-input').hide();
		$('.edit-link-ok').hide();

			$('.edit-link-edit').each(function() {
				$(this).click(function() {
		       		$(this).parent().parent().find('.edit-category-name').hide();
			        $(this).parent().parent().find('.edit-input').show();
			        $(this).parent().parent().find('.edit-link-edit').hide();
			        $(this).parent().parent().find('.edit-link-ok').show();
			        return false;
			    });    
			});
			$('.edit-link-ok').each(function() {
				$(this).click(function() {
		       		$(this).parent().parent().find('.edit-category-name').show();
			        $(this).parent().parent().find('.edit-input').hide();
			        $(this).parent().parent().find('.edit-link-edit').show();
			        $(this).parent().parent().find('.edit-link-ok').hide();
			        return false;
			    });    
			});
};
editCategory();


function delButton(e) {
			$(e).each(function() {
				$(this).click(function() {
		       		$(this).parent().parent().remove();
		       		return false; 
			    });    
			});
};
delButton('.linebox-item-del .icon-close');
delButton('.item-del');
delButton('.product-item-del');


$('.multiply-select').chosen({
	    width: "95%"
});




});