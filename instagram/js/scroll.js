$(function(){
  // ページ上部からの距離を取得
  var scrollStart = $('#Step2').offset().top;
  var scrollEnd = $('#Campaign').offset().top;

  $(document).scroll(function() {
    // スクロール量を取得
    distance = $(this).scrollTop();
    // スクロール位置がscrollStartで指定した値を超えたら
    if (scrollStart <= distance) {
      $('.buttonSection').addClass('-active');
      $('.buttonSection').addClass('-remove-item');
      $('.buttonSection').removeClass('-top-remove');
    } else if (scrollStart >= distance) {
      $('.buttonSection').removeClass('-active');
      $('.buttonSection').addClass('-top-remove');
    }

    // スクロール距離が『scrollEnd』の位置を超えたら
    if (scrollEnd <= distance) {
      $('.buttonSection').addClass('-remove');
    } else {
      $('.buttonSection').removeClass('-remove');
    }
  });
});