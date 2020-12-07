jQuery(function($){
    $(window).on('scroll', function(){
        if ($(window).scrollTop() < 600) {
            $('.kiis_top').addClass('show_top');
            
        } else {
            $('.kiis_top').removeClass('show_top');
            
        }
        });
    });