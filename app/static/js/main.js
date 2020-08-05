//ヘッダーの高さ分だけコンテンツを下げる
$(function() {
    var height=$("#header").height();
    $("body").css("margin-top", height + 10);//10pxだけ余裕をもたせる
});