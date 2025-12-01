
// accordion
$('#openButton').click(function(){
  var acHeight = $(".main__cardContainer").height();
  $("#sp-accordion").css("height", acHeight + "px");
  $("#sp-accordion").toggleClass("open");
  $(".chevron-down").toggleClass("open");
  if($("#sp-accordion").hasClass('open')) {
    $(this).text('閉じる');
  } else {
    $(this).text('もっと見る');
    
  };
  $(".timelineButton").addClass("open");
})

// スクロールのドラッグ有効化
jQuery.prototype.mousedragscrollable = function () {
  let target;
  $(this).each(function (i, e) {
    $(e).mousedown(function (event) {
      event.preventDefault();
      target = $(e);
      $(e).data({
        down: true,
        move: false,
        x: event.clientX,
        y: event.clientY,
        scrollleft: $(e).scrollLeft(),
        scrolltop: $(e).scrollTop(),
      });
      return false;
    });
    $(e).click(function (event) {
      if ($(e).data("move")) {
        return false;
      }
    });
  });
  $(document)
    .mousemove(function (event) {
      if ($(target).data("down")) {
        event.preventDefault();
        let move_x = $(target).data("x") - event.clientX;
        let move_y = $(target).data("y") - event.clientY;
        if (move_x !== 0 || move_y !== 0) {
          $(target).data("move", true);
        } else {
          return;
        }
        $(target).scrollLeft($(target).data("scrollleft") + move_x);
        $(target).scrollTop($(target).data("scrolltop") + move_y);
        return false;
      }
    })
    .mouseup(function (event) {
      $(target).data("down", false);
      return false;
    });
};
$(".main__timelineWrapper").mousedragscrollable();

// SP Line数値代入
$(function(){

  var top1 = $(".timeDot-1").offset().top;
  var top2 = $(".timeDot-2").offset().top;
  var top3 = $(".timeDot-3").offset().top;
  var top4 = $(".timeDot-4").offset().top;
  var top5 = $(".timeDot-5").offset().top;
  var top6 = $(".timeDot-6").offset().top;
  var top7 = $(".timeDot-7").offset().top;
  var top8 = $(".timeDot-8").offset().top;
  var top9 = $(".timeDot-9").offset().top;
  var top10 = $(".timeDot-10").offset().top;
  var top11 = $(".timeDot-11").offset().top;
  var top12 = $(".timeDot-12").offset().top;

  //ドット座標取得テスト
  //console.log("height", (top2 - top1) + "px");
  //console.log(top1, top2);

  $(".timeDot-1").css("height", (top2 - top1) + "px");
  $(".timeDot-2").css("height", (top3 - top2) + "px");
  $(".timeDot-3").css("height", (top4 - top3) + "px");
  $(".timeDot-4").css("height", (top5 - top4) + "px");
  $(".timeDot-5").css("height", (top6 - top5) + "px");
  $(".timeDot-6").css("height", (top7 - top6) + "px");
  $(".timeDot-7").css("height", (top8 - top7) + "px");
  $(".timeDot-8").css("height", (top9 - top8) + "px");
  $(".timeDot-9").css("height", (top10 - top9) + "px");
  $(".timeDot-10").css("height", (top11 - top10) + "px");
  $(".timeDot-11").css("height", (top12 - top11) + "px");

});

// SPの時のみtimelineの２番目までのカードの高さを取得する
$(function() {
  if ($(window).width() <= 940) {
    var card1 = $('.main__cardContainer li').eq(-8).outerHeight(true);
    var card2 = $('.main__cardContainer li').eq(-7).outerHeight(true);
    //console.log(card1, card2);
    $("#sp-accordion").css("height", (card1 + card2) + "px");
  }
});

//SP専用スクロールスナップ用ドット切り替え位置取得（完了後、可能であれば上のJSにマージさせる）
$(function() {
  if ($(window).width() <= 940) {
    const cardWidth = $('.carousel div').eq(-4).outerWidth();
    const cardPos1 = $('.carousel div').eq(-3).position().left;
    const cardPos2 = $('.carousel div').eq(-2).position().left;
    const cardPos3 = $('.carousel div').eq(-1).position().left;
    const commentBullet1 = $('#sp-commentPagination .paginationBullet').eq(-4);
    const commentBullet2 = $('#sp-commentPagination .paginationBullet').eq(-3);
    const commentBullet3 = $('#sp-commentPagination .paginationBullet').eq(-2);
    const commentBullet4 = $('#sp-commentPagination .paginationBullet').eq(-1);

    //console.log(cardWidth, cardPos1, cardPos2, cardPos3);
    $('.carousel').scroll(function () {
      const positionX = $(this).scrollLeft();
      if (positionX >= 0 && positionX < ((cardPos1 - 16) / 2)) {
        //対象となるドットをアクティブにする
        commentBullet1.addClass('active');
        commentBullet2.removeClass('active');
        commentBullet3.removeClass('active');
        commentBullet4.removeClass('active');
        //console.log('dot 1');
      }
      else if (positionX >= ((cardPos1 - 16) / 2) && positionX < ((cardPos2 -16) - (cardWidth / 2))) {
        //対象となるドットをアクティブにする
        commentBullet2.addClass('active');
        commentBullet1.removeClass('active');
        commentBullet3.removeClass('active');
        commentBullet4.removeClass('active');
        //console.log('dot 2');
      }
      else if (positionX >= ((cardPos2 -16) - (cardPos1 / 2)) && positionX < ((cardPos3 -32) - (cardWidth / 2))) {
        //対象となるドットをアクティブにする
        commentBullet3.addClass('active');
        commentBullet1.removeClass('active');
        commentBullet2.removeClass('active');
        commentBullet4.removeClass('active');
        //console.log('dot 3');
      }
      else if (positionX >= ((cardPos3 -32) - (cardWidth / 2))) {
        //対象となるドットをアクティブにする
        commentBullet4.addClass('active');
        commentBullet1.removeClass('active');
        commentBullet2.removeClass('active');
        commentBullet3.removeClass('active');
        //console.log('dot 4');
      };
      //console.log(positionX, (cardPos1 - 16), (cardPos2 - 16), (cardPos3 - 32));
      
    });
  }
});

// PC用スライダー
$(function() {
  if ($(window).width() >= 941) {
    const smallCard = $('#pc-slider li').eq(-2).outerWidth();
    const largeCard = $('#pc-slider li').eq(-1).outerWidth();
    const stepSlide1 = $('#pc-slider li').eq(-7).position().left;
    const stepSlide2 = $('#pc-slider li').eq(-6).position().left;
    const stepSlide3 = $('#pc-slider li').eq(-5).position().left;
    const stepSlide4 = $('#pc-slider li').eq(-4).position().left;
    const timelineBullet1 = $('#pc-timelinePagination div').eq(-5);
    const timelineBullet2 = $('#pc-timelinePagination div').eq(-4);
    const timelineBullet3 = $('#pc-timelinePagination div').eq(-3);
    const timelineBullet4 = $('#pc-timelinePagination div').eq(-2);
    const timelineBullet5 = $('#pc-timelinePagination div').eq(-1);
    const timelineBulletAll = $('#pc-timelinePagination div');
    const timelineWidth = (stepSlide4 + largeCard - 1216);

    //console.log('pc', smallCard, largeCard, stepSlide4, timelineWidth);
    $('#sp-accordion').scroll(function() {
      const slidePos = $(this).scrollLeft();
      //console.log(slidePos, stepSlide2);

      if (slidePos >= 0 && slidePos < ((stepSlide1 - 20) / 2)) {
        //対象となるドットをアクティブにする
        timelineBulletAll.removeClass('active')
        timelineBullet1.addClass('active');
        //console.log('dot 1');
      }
      else if (slidePos >= ((stepSlide1 - 20) / 2) && slidePos < ((stepSlide2 - 20) - (largeCard / 2))) {
        //対象となるドットをアクティブにする
        timelineBulletAll.removeClass('active')
        timelineBullet2.addClass('active');
        //console.log('dot 2');
      }
      else if (slidePos >= ((stepSlide2 - 20) - (largeCard / 2)) && slidePos < ((stepSlide3 - 20) - (largeCard / 2))) {
        //対象となるドットをアクティブにする
        timelineBulletAll.removeClass('active')
        timelineBullet3.addClass('active');
        //console.log('dot 3');
      }
      else if (slidePos >= ((stepSlide3 - 20) - (largeCard / 2)) && slidePos < ((stepSlide4 - 20) - (smallCard / 2))) {
        //対象となるドットをアクティブにする
        timelineBulletAll.removeClass('active')
        timelineBullet4.addClass('active');
        //console.log('dot 4');
      }
      else if (slidePos >= ((stepSlide4 - 20) - (smallCard / 2))) {
        //対象となるドットをアクティブにする
        timelineBulletAll.removeClass('active')
        timelineBullet5.addClass('active');
        //console.log('dot 5');
      };
    });

    // スライダーのクリックイベント
    timelineBullet1.click(function(){
      $('#sp-accordion').animate({
        scrollLeft: $(this).scrollLeft() + 0
      }, 500, 'swing');
      return false;
    });
    timelineBullet2.click(function(){
      $('#sp-accordion').animate({
        scrollLeft: $(this).scrollLeft() + stepSlide1
      }, 500, 'swing');
      return false;
    });
    timelineBullet3.click(function(){
      $('#sp-accordion').animate({
        scrollLeft: $(this).scrollLeft() + stepSlide2
      }, 500, 'swing');
      return false;
    });
    timelineBullet4.click(function(){
      $('#sp-accordion').animate({
        scrollLeft: $(this).scrollLeft() + stepSlide3
      }, 500, 'swing');
      return false;
    });
    timelineBullet5.click(function(){
      $('#sp-accordion').animate({
        scrollLeft: $(this).scrollLeft() + stepSlide4
      }, 500, 'swing');
      return false;
    });
  }
});

// Slide-in contents
$(function() {
  let scroll;
  let displayHeight = $(window).height();
  //初期設定
  $('.slideInContent').each(function(){
    if($(this).offset().top < displayHeight){
      $(this).removeClass('slideInContent')
    };
  });
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
