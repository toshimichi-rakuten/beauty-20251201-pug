(function($){
  'use strict';
  let title = document.querySelector('#Mama .skillfulUse__title');
  let wrapper = document.querySelector('#Mama .skillfulUse');
  let content = document.querySelector('#Mama .skillfulUse__stepBox');
  $(title).click(function() {
    $(wrapper).toggleClass('openBox');
    $(content).slideToggle();
  });

  let scroll_position = 0;
  let mainHight;
  window.addEventListener('DOMContentLoaded', function(){
    mainHight = document.querySelector('#Mama #Main').clientHeight;
    add_fixed_class();
  }, false);
  window.addEventListener('resize', function(){
    mainHight = document.querySelector('#Mama #Main').clientHeight;
  }, false);
  window.addEventListener('scroll', function(e){
    add_fixed_class();
  }, false);
  function add_fixed_class(){
    let alsh = document.querySelector('#Mama .anchorListBox.static').clientHeight;
    let alfh = document.querySelector('#Mama .anchorListBox.fixed').clientHeight;
    let sub_val = alsh - alfh;
    let anchor_list = document.querySelector('#Mama .anchorListBox.fixed');
    let pos = $('#Mama #Main').offset();
    scroll_position = window.pageYOffset;
    let point = pos.top + mainHight + sub_val;
    if (point < scroll_position) {
      anchor_list.classList.add('visible');
    } else {
      anchor_list.classList.remove('visible');
    }
  }

  let windowWidth;
  let slide_30s;
  let slide_40s;
  let slide_nail;
  let slide_exist = false;
  window.addEventListener('DOMContentLoaded', function(){
    windowWidth = window.innerWidth;
    if(windowWidth <= 900){
      slide_exist = set_slider_object();
    }
  }, false);
  window.addEventListener('resize', function(){
    setTimeout(function () {
      windowWidth = window.innerWidth;
      if(windowWidth <= 900){
        if (slide_exist === false) {
          slide_exist = set_slider_object();
        }
      }else{
        if (slide_exist === true) {
          slide_exist = reset_slider_object();
        }
      }
    }, 500);
  }, false);

  function set_slider_object(){
    if(typeof Swiper === 'function'){
      slide_30s = new Swiper('#Mama .slide_30s', {
        loop: false,
        slidesPerView: 2.6,
        spaceBetween: 0,
        speed: 1000,
      });
      slide_40s = new Swiper('#Mama .slide_40s', {
        loop: false,
        slidesPerView: 2.6,
        spaceBetween: 0,
        speed: 1000,
      });
      slide_nail = new Swiper('#Mama .slide_nail', {
        loop: false,
        slidesPerView: 2.6,
        spaceBetween: 0,
        speed: 1000,
      });
      return true;
    }else{
      return false;
    }
  }

  function reset_slider_object(){
    if(typeof Swiper === 'function'){
      slide_30s.destroy(false,true);
      slide_40s.destroy(false,true);
      slide_nail.destroy(false,true);
    }
    return false;
  }
})(window.jQuery);