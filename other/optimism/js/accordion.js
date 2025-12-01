$(function(){
  $('.mainContent__question__item--button').on('click', function() {
    $(this).parents('.mainContent__question').next().slideDown().addClass('-active');
  });
});
