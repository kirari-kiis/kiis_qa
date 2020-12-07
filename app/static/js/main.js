// マウスストーカーの処理
var
cursor = $(".cursor"),
follower = $(".follower"),
view = $(".view"),
read = $(".read"),
read_p = $(".read_p"),
arrow = $(".arrow")
cWidth = 8, //カーソルの大きさ
fWidth = 40, //フォロワーの大きさ
delay = 10, //数字を大きくするとフォロワーがより遅れて来る
mouseX = 0, //マウスのX座標
mouseY = 0, //マウスのY座標
posX = 0, //フォロワーのX座標
posY = 0; //フォロワーのX座標
h = $(window).height();

$(function() {
    $("body").on("scroll", function() {
        scrollY = $(this).scrollTop()
        });
    });

//カーソルの遅延アニメーション
//ほんの少ーーーしだけ遅延させる 0.001秒
TweenMax.to({}, .001, {
    repeat: -1,
    onRepeat: function() {
    posX += (mouseX - posX) / delay;
    posY += (mouseY - posY) / delay;
    
    TweenMax.set(follower, {
        css: {    
            left: posX - (fWidth / 2),
            top:  posY - scrollY - (fWidth / 2)
        }
    });
    
    TweenMax.set(cursor, {
        css: {    
            left: mouseX - (cWidth / 2),
            top: mouseY - (cWidth / 2)
        }
    });
    }
});

//マウス座標を取得
$(document).on("mousemove", function(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
});

$("a").on({
    "mouseenter": function() {
        cursor.addClass("is-active1");
        follower.addClass("is-active2");
        view.addClass("is-active3");
    },
    "mouseleave": function() {
        cursor.removeClass("is-active1");
        follower.removeClass("is-active2");
        view.removeClass("is-active3");
    }
});

$("#hover").hover(function() {
    cursor.addClass("is-active1");
    follower.addClass("is-active2");
    view.addClass("is-active3");
}, function() {
    cursor.removeClass("is-active1");
    follower.removeClass("is-active2");
    view.removeClass("is-active3");
});

$(".cp_actab").hover(function() {
    cursor.addClass("is-active1");
    follower.addClass("is-active2");
    view.addClass("is-active3");
}, function() {
    cursor.removeClass("is-active1");
    follower.removeClass("is-active2");
    view.removeClass("is-active3");
});

read.hover(function() {
    arrow.addClass("read_hover");
    read_p.addClass("read_p_hover");
    
}, function() {
    arrow.removeClass("read_hover");
    read_p.removeClass("read_p_hover");
});

// ヘッダーを消す

var startPos = 0,winScrollTop = 0;
$(window).on('scroll',function(){
    winScrollTop = $(this).scrollTop();
    if (winScrollTop >= startPos) {
        if(winScrollTop >= 50){
            $('header').addClass('hide');
        }
    } else {
        $('header').removeClass('hide');
    }
    startPos = winScrollTop;
});

var startPos = 0,winScrollTop = 0;
$(window).on('scroll',function(){
    winScrollTop = $(this).scrollTop();
    if (winScrollTop >= startPos) {
        if(winScrollTop >= 450){
            $('.spinner').addClass('black');
        }
    } else {
        $('.spinner').removeClass('black');
    }
    startPos = winScrollTop;
});

// var startPos = 0,winScrollTop = 0;
// $(window).on('scroll',function(){
//     winScrollTop = $(this).scrollTop();
//     if (winScrollTop >= startPos) {
//         if(winScrollTop >= 450){
//             $('.center_title').addClass('display');
//         }
//     } else {
//         $('.center_title').removeClass('display');
//     }
//     startPos = winScrollTop;
// });


// $(function () {
//     $(window).scroll(function () {
//         if ($(this).scrollTop() > h ) {
//             $('.top').addClass('relative');
//         } else {
//             $('.top').removeClass('relative');
//         }
//         });
//     });

// $('#co1').hide();
// $('#co2').hide();
// $('#co3').hide();


// jQuery(function($){
//     $(window).on('scroll', function(){
//         if ($(window).scrollTop() > 600 && $(window).scrollTop() < 1100) {
//             $('#co1').fadeIn(400);
//         } else {
//             $('#co1').fadeOut(400);
//         }
//         });
//     });

// jQuery(function($){
//     $(window).on('scroll', function(){
//         if ($(window).scrollTop() > 1500 && $(window).scrollTop() < 2000) {
//             $('#co2').fadeIn(400);
//         } else {
//             $('#co2').fadeOut(400);
//         } 
//         });
//     });

// jQuery(function($){
//     $(window).on('scroll', function(){
//         if ($(window).scrollTop() > 2400 && $(window).scrollTop() < 2900) {
//             $('#co3').fadeIn(400);
//         } else {
//             $('#co3').fadeOut(400);
//         } 
//         });
//     });

// サイドバーのフェードイン
$('.sidebarIconToggle').click(function() {
    if($(this).hasClass('is-active')){
        $(this).removeClass("is-active");
        $('.spinner').css('background-color','whitesmoke');
    }else{
        $(this).addClass("is-active");
        $('.spinner').css('background-color','#333');
        $('ul.sidebarMenuInner  li')
        .css({opacity: 0})
        .each(function(i){
            $(this).delay(200 * i).animate({opacity:1}, 1500);
        });
    }
});


// $(function() {
//     $(window).scroll(function() {
//         var scroll = $(window).scrollTop();
//         $('.top').css({
//             backgroundSize: (100 + scroll/3)  + "%",
//             top: -(scroll/10)  + "%"
//         });
//     });
// });

