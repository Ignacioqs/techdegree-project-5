
lightbox.option({

      'showImageNumberLabel': false
    });


$('.search').keyup(function(){
    let userSearch = $('.search').val();
	  userSearch = userSearch.toLowerCase();

    $('.innerContainer a').each(function(){

    let caption = $(this).attr('data-title');
    caption = caption.toLowerCase();

    if ( caption.includes(userSearch) === true ){
      $(this).show();
    } else {
      $(this).hide();
    }
  });
});
