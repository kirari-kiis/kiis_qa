$('.sidebarIconToggle').fadeIn(3000);
$('header').fadeIn(3000);

jQuery(window).scroll(function() {
    let scrollTop = jQuery(window).scrollTop(); // スクロール上部の位置
    let areaTop = jQuery(".description").offset().top - 100; // 対象エリアの上部の位置
    let areaBottom = areaTop + jQuery(".description").innerHeight(); // 対象エリアの下部の位置
  
    if (scrollTop > areaTop && scrollTop < areaBottom) {
        $('.spinner').addClass("is-in"); // スクロールが対象エリアに入った場合
    } else {
        $('.spinner').removeClass("is-in"); // スクロールが対象エリアから出ている場合
    }
  });

if (window.matchMedia( "(min-width: 768px)" ).matches) {
        /* ウィンドウサイズが 768px以下の場合のコードをここに */
    $('#co1').hide();
    $('#co2').hide();
    $('#co3').hide();

    $('#thum1').hide();
    $('#thum2').hide();
    $('#thum3').hide();

    jQuery(function($){
        $(window).on('scroll', function(){
            if ($(window).scrollTop() < 600) {
                $('#co1').hide();
                $('#thum1').hide();
            } 
            });
        });

    jQuery(function($){
        $(window).on('scroll', function(){
            if ($(window).scrollTop() > 600 && $(window).scrollTop() < 1100) {
                $('#co1').fadeIn(200);
                $('#thum1').fadeIn(200);
            } else {
                $('#co1').fadeOut(200);
                $('#thum1').fadeOut(200);
            }
            });
        });

    jQuery(function($){
        $(window).on('scroll', function(){
            if ($(window).scrollTop() > 1500 && $(window).scrollTop() < 2000) {
                $('#co2').fadeIn(200);
                $('#thum2').fadeIn(200);
            } else {
                $('#co2').fadeOut(200);
                $('#thum2').fadeOut(200);
            } 
            });
        });

    jQuery(function($){
        $(window).on('scroll', function(){
            if ($(window).scrollTop() > 2400 && $(window).scrollTop() < 2900) {
                $('#co3').fadeIn(200);
                $('#thum3').fadeIn(200);
            } else {
                $('#co3').fadeOut(200);
                $('#thum3').fadeOut(200);
            } 
            });
        });

        jQuery(function($){
            $(window).on('scroll', function(){
                if ($(window).scrollTop() > 3000) {
                    $('#co3').hide();
                    $('#thum3').hide();
                    $('.arrow').hide();
                } 
                });
            });

        jQuery(function($){
            $(window).on('scroll', function(){
                if ($(window).scrollTop() < 3000) {
                    $('.arrow').show();
                } 
                });
            });

        
        
}


