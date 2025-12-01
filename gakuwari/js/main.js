var first_flag = true;
var open_flag = false;

if (first_flag) {
  // 初回
  first_flag = false;
  $('.accordion_btn').addClass('-open');
}

$(function () {
  // 通常動作
  $('.accordion_btn').click(function () {
    $(this).toggleClass('-open');
    $(this).toggleClass('-close');
    $(this).next('.accordion_wrap').slideToggle(200);
    if (open_flag) {
      $(this).find('i').addClass('icon-plus');
      $(this).find('i').removeClass('icon-minus');
      open_flag = false;
    } else {
      $(this).find('i').removeClass('icon-plus');
      $(this).find('i').addClass('icon-minus');
      open_flag = true;
    }
  });
});
