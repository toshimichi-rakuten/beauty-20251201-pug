// SP用スライダー
$(function() {
  if ($(window).width() <= 941) {
    // concentres
    const concentresScrollEnd = 760 - $(window).width();
    const concentresBullet1 = $('#concentres__pagination span').eq(0);
    const concentresBullet2 = $('#concentres__pagination span').eq(1);
    const concentresBullet3 = $('#concentres__pagination span').eq(2);
    const concentresBulletAll = $('#concentres__pagination span');

    $('#concentres__swiper').scroll(function() {
      const slidePos = $(this).scrollLeft();

      if (slidePos == 0) {
        //対象となるドットをアクティブにする
        concentresBulletAll.removeClass('active')
        concentresBullet1.addClass('active');
      }
      else if (slidePos > 0 && slidePos < concentresScrollEnd) {
        //対象となるドットをアクティブにする
        concentresBulletAll.removeClass('active')
        concentresBullet2.addClass('active');
      }
      else if (slidePos >= concentresScrollEnd) {
        //対象となるドットをアクティブにする
        concentresBulletAll.removeClass('active')
        concentresBullet3.addClass('active');
      };
    });
    // boosters
    const boostersScrollEnd = 575 - $(window).width();
    const boostersBullet1 = $('#boosters__pagination span').eq(0);
    const boostersBullet2 = $('#boosters__pagination span').eq(1);
    const boostersBullet3 = $('#boosters__pagination span').eq(2);
    const boostersBulletAll = $('#boosters__pagination span');

    $('#boosters__swiper').scroll(function() {
      const boostersSlidePos = $(this).scrollLeft();

      if (boostersSlidePos == 0) {
        //対象となるドットをアクティブにする
        boostersBulletAll.removeClass('active')
        boostersBullet1.addClass('active');
      }
      else if (boostersSlidePos > 0 && boostersSlidePos < boostersScrollEnd) {
        //対象となるドットをアクティブにする
        boostersBulletAll.removeClass('active')
        boostersBullet2.addClass('active');
      }
      else if (boostersSlidePos >= boostersScrollEnd) {
        //対象となるドットをアクティブにする
        boostersBulletAll.removeClass('active')
        boostersBullet3.addClass('active');
      };
    });
  }
});

