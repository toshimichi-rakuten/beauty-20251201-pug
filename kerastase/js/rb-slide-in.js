// Slide-in contents
$(function() {
  let scroll;
  let displayHeight = $(window).height();
  // 初期設定(スライドインさせたい1つ目のコンテンツが初期表示領域内に配置されている時に、固定表示にするために使用)
  /*$('.slideInContent').each(function(){
    if($(this).offset().top < displayHeight){
      $(this).removeClass('slideInContent')
    };
  });*/
  // scroll処理
  $(window).on('scroll', function(){
    scroll = $(window).scrollTop();
    $('.slideInContent').each(function(){
      const contentTop = $(this).offset().top;
      if (scroll >= contentTop - displayHeight + 100){
        $(this).addClass('slide-in');
      }
    })
  });
})