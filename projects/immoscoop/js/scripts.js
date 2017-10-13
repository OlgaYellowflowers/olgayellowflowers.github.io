    
$(document).ready(function() {






    // Fixing focus for select2 plugin in bootstrap modal
    // $.fn.modal.Constructor.prototype.enforceFocus = function () {};
    

  // Select2 plugin for search in tabs on index.html
  // https://select2.github.io/

    var data1 = [{ id: 0, text: 'Zoek op gemeente, postcode of makelaar' }, { id: 1, text: 'bug' }, { id: 2, text: 'duplicate' }, { id: 3, text: 'invalid' }, { id: 4, text: 'wontfix' }];
    $("#selectKoop").select2({
        data: data1
    });


    var data2 = [{ id: 0, text: 'Pris' }, { id: 1, text: '5000' }, { id: 2, text: '10000' }, { id: 3, text: '15000' }];
    $("#selectKoopPrice").select2({
        data: data2,
        minimumResultsForSearch: Infinity
    });


    var data3 = [{ id: 0, text: 'Zoek op gemeente, postcode of makelaar' }, { id: 1, text: 'bug' }, { id: 2, text: 'duplicate' }, { id: 3, text: 'invalid' }, { id: 4, text: 'wontfix' }];
    $("#selectHuur").select2({
        data: data3
    });


    var data4 = [{ id: 0, text: 'Pris' }, { id: 1, text: '5000' }, { id: 2, text: '10000' }, { id: 3, text: '15000' }];
    $("#selectHuurPrice").select2({
        data: data4,
        minimumResultsForSearch: Infinity
    });


  // Select2 plugin for filter on search-results.html
  // https://select2.github.io/
    var data5 = [{ id: 0, text: 'Sorteer op' }, { id: 1, text: 'Price' }, { id: 2, text: 'Date' }, { id: 3, text: 'Rating' }];
    $("#filterResults").select2({
        data: data5,
        minimumResultsForSearch: Infinity
    });


    // Animate menu to be smaller when scroll down    
    if ($(window).width() > 767) {
        $(window).scroll(function() {
                if ($(this).scrollTop() > 20) {
                    $(".navbar").addClass("navbar-scroll");
                }
                else {
                    $(".navbar").removeClass("navbar-scroll");
                }

        });
    }




  // Show-hide more in filters sidebar
  $('.list-filters').each(function (){
        $(this).find('.show-hide-line').nextAll().hide();
        $(this).find('.show-hide-more').show();

   $(this).find('.show-hide-more').click(function() {
          if ( $(this).parent().hasClass('show-all') ) {
                  $(this).parent().find('.show-hide-line').nextAll().hide();
                  $(this).parent().find('.show-hide-more').find('.fa-caret-up').remove();
                  $(this).parent().find('.show-hide-more').prepend("<i class='fa fa-caret-down'></i>");
                  $(this).parent().removeClass('show-all');
                  $(this).parent().find('.show-hide-more').show();
          }
          else {
                  $(this).parent().find('.show-hide-line').nextAll().show();
                  $(this).parent().addClass('show-all');
                  $(this).parent().find('.show-hide-more').find('.fa-caret-down').remove();
                  $(this).parent().find('.show-hide-more').prepend("<i class='fa fa-caret-up'></i>");
          }
    });

  });

    
    // // Styled checkboxes
if ( $(window).find('.checkbox') ) {
    $('.checkbox').asCheck({
        skin: 'skin'
    });  
}



});
