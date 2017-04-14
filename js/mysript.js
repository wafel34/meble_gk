$(function () {
    'use strict';
    //variables
    var imgQty = $('.carousel .item').length,
        random = Math.floor(Math.random() * 3),
        i = 0,
        htmlIndicator = '';
    //Changing the carousel image to background image
    
    $('.carousel .item img').each(function () {
        var imgSrc = $(this).attr('src');
        $(this).parent().css({'background-image': 'url(' + imgSrc + ')'});
        $(this).remove();
    });
    
    //carousel maintance
    
    $('.carousel').carousel({
        pause: null,
        interval: false
    });
	
	//carousel indicators
	
	$('.carousel .item').eq(random).addClass('active');
	for (i = 0; i < imgQty; i++) {
		if (i === random) {
			htmlIndicator = '<li data-target="#carousel-id" class="active" data-slide-to="' + i + '"></li>';
		} else {
			htmlIndicator = '<li data-target="#carousel-id" data-slide-to="' + i + '"></li>';
		}
		$('.carousel-indicators').append(htmlIndicator);
	}
    
    //Gallery thumbnails
    
    $('.tab-pane a').each(function () {
		var imageSrc = $(this).attr('href');
		imageSrc = imageSrc.split('.');
		imageSrc[0] = imageSrc[0] + '_t';
		imageSrc = imageSrc.join('.');
		
		$(this).append('<img src="' + imageSrc + '" class="thumbnail img-responsive center-block" alt="Kuchnia">');
    });
    
	
});