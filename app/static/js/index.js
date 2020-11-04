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