$(function(){
    //variables
    
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
});