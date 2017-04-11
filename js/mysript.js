$(function(){
    //variables
    var imgQty = $('.carousel .item').length;
	var random = Math.floor(Math.random()*3);
    //Changing the carousel image to background image
    
    $('.carousel .item img').each(function(){
        var imgSrc = $(this).attr('src');
        $(this).parent().css({'background-image': 'url('+imgSrc+')'});
        $(this).remove();
    });
    
    //carousel maintance
    
    $('.carousel').carousel({
        pause: null,
        interval: false
    });
	
	//carousel indicators
	
	$('.carousel .item').eq(random).addClass('active');
	for (var i = 0; i < imgQty; i++) {
		var htmlIndicator ='';
		if (i === random) {
			htmlIndicator = '<li data-target="#carousel-id" class="active" data-slide-to="'+i+'"></li>';
		} else {
			htmlIndicator = '<li data-target="#carousel-id" data-slide-to="'+i+'"></li>';
		}
		$('.carousel-indicators').append(htmlIndicator);
	}
	
});