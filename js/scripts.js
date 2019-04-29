
lightbox.option({

      'showImageNumberLabel': false
    })




//valor de la busqueda del usuario
$('.search').keyup(function(){
    let userSearch = $('.search').val();
	  userSearch = userSearch.toLowerCase();

    $('a').each(function(){

    let caption = $(this).attr('data-title');
    caption = caption.toLowerCase();

    if ( caption.includes(userSearch) === true ){
      $('a').show();
    } else {
      $('a').hide();
    }
    })
});
