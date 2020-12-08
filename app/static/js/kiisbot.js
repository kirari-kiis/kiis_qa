jQuery(function($){
    $(window).on('scroll', function(){
        if ($(window).scrollTop() < 600) {
        } else {
            $('.kiis_top').fadeOut(400);
            
        }
        });
    });