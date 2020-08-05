// //ヘッダーの高さ分だけコンテンツを下げる
// $(function() {
//     var height=$("#header").height();
//     $("body").css("margin-top", height + 10);//10pxだけ余裕をもたせる
// });


// //リンク先までスクロール
// $(function(){

//     // htmlとbody、どちらかスクロール可能な要素を取得
//     function getFirstScrollable(selector){
//       var $scrollable;
  
//       $(selector).each(function(){
//         var $this = $(this);
//         if( $this.scrollTop() > 0 ){
//           $scrollable = $this;
//           return false;
//         }else{
//           $this.scrollTop(1);
//           if( $this.scrollTop() > 0 ){
//             $scrollable = $this;
//             return false;
//           }
//           $this.scrollTop(0);
//         }
//       });
  
//       return $scrollable;
//     }
  
//     // スクロールに使用する要素・イベントを設定
//     var $win = $(window),
//         $doc = $(document),
//         $scrollElement = getFirstScrollable("html,body"),
//         mousewheel = "onwheel" in document ? "wheel" : "onmousewheel" in document ? "mousewheel" : "DOMMouseScroll";
  
//     // aタグのクリック
//     $doc.on("click", "a[href^='#']", function(e){
//       var $target = $(this.hash),
//           top;
  
//       // 指定した要素が存在しない場合は未処理とする
//       if( $target.size() < 1 ) return false;
  
//       // スクロール先の座標を調整する
//       top = $target.offset().top;
//       top = Math.min(top, $doc.height() - $win.height());
  
//       // ウィールイベントをキャンセルしておく
//       $doc.on(mousewheel, function(e){ e.preventDefault(); });
  
//       // アニメーションの実行
//       $scrollElement.stop().animate({scrollTop: top}, 1000, "easeOutQuint", function(){
//         $doc.off(mousewheel);
//       });
  
//       return false;
//     });
//   });