$(function () {
    'use strict';
    
    //variables
    var imgQty = $('.carousel .item').length,
        random = Math.floor(Math.random() * 3),
        i = 0,
        htmlIndicator = '',
        hash = '',
        target = "";

    
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
    
    //Scrollspy
    
    $('body').scrollspy({
        target: '.navbar-default',
        offset: 75
    });
    
    //Adding inbody class to navigation
    
        //If page refreshed etc.
    
    hash = $(this).find('nav ul').find('li.active a').attr('href');
    if (hash !== "#home") {
        $('header nav').addClass('inbody');
	} else {
		$('header nav').removeClass('inbody');
	}

        //If page scrolled
    
    $('.navbar-fixed-top').on('activate.bs.scrollspy', function () {
	    var hash = $(this).find('li.active a').attr('href');
		if (hash !== "#home") {
            $('header nav').addClass('inbody');
		} else {
			$('header nav').removeClass('inbody');
		}
	});
    
    
    //smoothscrolling
    $('nav ul li a').click(function () {
       target = $(this).attr('href');
       target = $(target).offset().top;

        $('html,body').animate({
          scrollTop: target - 50
        }, 'slow');
    });
    	
		
    
    
});