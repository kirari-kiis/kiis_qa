// jQuery(function($){
//     $(window).on('scroll', function(){
//         if ($(window).scrollTop() < 600) {
//         } else {
//             $('.kiis_top').fadeOut(400);
//         }
//         });
//     });
if (window.matchMedia( "(max-width: 768px)" ).matches) {
    $(function() {
        $('.flex').height(3500);
    });
}


if (window.matchMedia( "(min-width: 768px)" ).matches) {
    /* ウィンドウサイズが 768px以下の場合のコードをここに */

    $(function() {
        $('.header_menu li a').css('color', 'whitesmoke');
        
    });

    $(function() {
        $('.flex').height(6500);
    });

$('#kiis_co1').hide();
$('#kiis_co2').hide();
$('#kiis_co3').hide();
$('#kiis_co4').hide();
$('#kiis_co5').hide();
$('#kiis_co6').hide();
$('#kiis_co7').hide();

$('#kiis_thum1').hide();
$('#kiis_thum2').hide();
$('#kiis_thum3').hide();
$('#kiis_thum4').hide();
$('#kiis_thum5').hide();
$('#kiis_thum6').hide();
$('#kiis_thum7').hide();

jQuery(function($){
    $(window).on('scroll', function(){
        if ($(window).scrollTop() < 600) {
            $('#kiis_co1').hide();
            $('#kiis_thum1').hide();
        } 
        });
    });

jQuery(function($){
    $(window).on('scroll', function(){
        if ($(window).scrollTop() < 300) {
            $('#kiisbot_title').fadeIn(200);
            $('#kiis_thum_top').fadeIn(200);
        } else {
            $('#kiisbot_title').fadeOut(200);
            $('#kiis_thum_top').fadeOut(200);
        }
        });
    });

jQuery(function($){
    $(window).on('scroll', function(){
        if ($(window).scrollTop() > 600 && $(window).scrollTop() < 1100) {
            $('#kiis_co1').fadeIn(200);
            $('#kiis_thum1').fadeIn(200);
        } else {
            $('#kiis_co1').fadeOut(200);
            $('#kiis_thum1').fadeOut(200);
        }
        });
    });

jQuery(function($){
    $(window).on('scroll', function(){
        if ($(window).scrollTop() > 1500 && $(window).scrollTop() < 2000) {
            $('#kiis_co2').fadeIn(200);
            $('#kiis_thum2').fadeIn(200);
        } else {
            $('#kiis_co2').fadeOut(200);
            $('#kiis_thum2').fadeOut(200);
        } 
        });
    });

jQuery(function($){
    $(window).on('scroll', function(){
        if ($(window).scrollTop() > 2400 && $(window).scrollTop() < 2900) {
            $('#kiis_co3').fadeIn(200);
            $('#kiis_thum3').fadeIn(200);
        } else {
            $('#kiis_co3').fadeOut(200);
            $('#kiis_thum3').fadeOut(200);
        } 
        });
    });

jQuery(function($){
    $(window).on('scroll', function(){
        if ($(window).scrollTop() > 3300 && $(window).scrollTop() < 3800) {
            $('#kiis_co4').fadeIn(200);
            $('#kiis_thum4').fadeIn(200);
        } else {
            $('#kiis_co4').fadeOut(200);
            $('#kiis_thum4').fadeOut(200);
        } 
        });
    });

jQuery(function($){
    $(window).on('scroll', function(){
        if ($(window).scrollTop() > 4400 && $(window).scrollTop() < 4900) {
            $('#kiis_co5').fadeIn(200);
            $('#kiis_thum5').fadeIn(200);
        } else {
            $('#kiis_co5').fadeOut(200);
            $('#kiis_thum5').fadeOut(200);
        } 
        });
    });

jQuery(function($){
    $(window).on('scroll', function(){
        if ($(window).scrollTop() > 5300 && $(window).scrollTop() < 5800) {
            $('#kiis_co6').fadeIn(200);
            $('#kiis_thum6').fadeIn(200);
        } else {
            $('#kiis_co6').fadeOut(200);
            $('#kiis_thum6').fadeOut(200);
        } 
        });
    });

    jQuery(function($){
        $(window).on('scroll', function(){
            if ($(window).scrollTop() > 5800) {
                $('#kiis_co7').hide();
                $('#kiis_thum7').hide();
                $('.arrow').hide();
            } 
            });
        });

    jQuery(function($){
        $(window).on('scroll', function(){
            if ($(window).scrollTop() < 5800) {
                $('.arrow').show();
            } 
            });
        });

        
    
}


