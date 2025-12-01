//- 追従navigation

// 共通で読み込んでいるスムーズスクロールを無視
scroll.destroy()

//基準点の準備
var elemTop = [];

//現在地を取得するための設定を関数でまとめる
function PositionCheck(){
    //headerの高さを取得
  var headerH = $("#pageScrollNav").outerHeight(true);
    //.scroll-pointというクラス名がついたエリアの位置を取得する設定
  $(".scroll-point").each(function(i) {//.scroll-pointクラスがついたエリアからトップまでの距離を計算して設定
    elemTop[i] =Math.round(parseInt($(this).offset().top-headerH));//追従するheader分の高さを引き小数点を四捨五入
  });
}

//ナビゲーションに現在地のクラスをつけるための設定
function ScrollAnime() {//スクロールした際のナビゲーションの関数にまとめる
  var scroll = Math.round($(window).scrollTop());
  var NavElem = $(".navigation li");//ナビゲーションのliの何番目かを定義するための準備
  $(".navigation li").removeClass('current');//全てのナビゲーションの現在地クラスを除去
  if(scroll >= 0 && scroll < elemTop[1]) {//スクロール値が0以上 .scroll-point 1つめ（area-1）の高さ未満
      $(NavElem[0]).addClass('current');//1つめのliに現在地クラスを付与
    }
  else if(scroll >= elemTop[1] && scroll < elemTop[2]) {//.scroll-point 1つめ（area-1）以上.scroll-point 2つめ（area-2）未満
     $(NavElem[1]).addClass('current');//2つめのliに現在地クラスを付与
    } 
    else if(scroll >= elemTop[2] && scroll < elemTop[3]) {//.scroll-point 2つめ（area-2）以上.scroll-point 3つめ（area-3）未満
     $(NavElem[2]).addClass('current');//3つめのliに現在地クラスを付与
    } 
    else if(scroll >= elemTop[3]) {// .scroll-point 3つめ（area-3）以上
      $(NavElem[3]).addClass('current');//4つめのliに現在地クラスを付与
    } 
}

// position: stickyに対応していないものは通常のスムーススクロールにする
const fixedNav = document.getElementById('pageScrollNav');
const fixedNavHeight = fixedNav.offsetHeight;
fixedNav.style.setProperty('position', 'sticky');

//ナビゲーションをクリックした際のスムーススクロール
const spuScroll = new SmoothScroll('a[href*="#"]', {
  offset: function (anchor) {
    if(anchor.id == "simulationSubmit") {
      return 0;
    } else {
      //- position: sticky に対応していれば、ナビゲーションの高さをスクロール位置に追加
      if( fixedNav.style.getPropertyValue('position') && fixedNav.style.getPropertyValue('position').indexOf('sticky') !== -1) {
        return fixedNavHeight;
      } else {
        return 0
      }
    }
  }
});

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  PositionCheck();/* 現在地を取得する関数を呼ぶ*/
  ScrollAnime();/* ナビゲーションに現在地のクラスをつけるための関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
  PositionCheck();/* 現在地を取得する関数を呼ぶ*/
  ScrollAnime();/* ナビゲーションに現在地のクラスをつけるための関数を呼ぶ*/
});

$(window).resize(function() {
  //リサイズされたときの処理
  PositionCheck()
});


//- ポイント付与シミュレーター
const simulator = new Vue({
  el: '#point-simulation',
  data: function() {
    return {
      rsv_years: [],
      rsv_months: [
        {
          text: '1月',
          value: 1
        },
        {
          text: '2月',
          value: 2
        },
        {
          text: '3月',
          value: 3
        },
        {
          text: '4月',
          value: 4
        },
        {
          text: '5月',
          value: 5
        },
        {
          text: '6月',
          value: 6
        },
        {
          text: '7月',
          value: 7
        },
        {
          text: '8月',
          value: 8
        },
        {
          text: '9月',
          value: 9
        },
        {
          text: '10月',
          value: 10
        },
        {
          text: '11月',
          value: 11
        },
        {
          text: '12月',
          value: 12
        }
      ],
      visit_year_month: [],
      visit_years: [],
      visit_months: [],
      rsv_year_selected: 0,
      rsv_month_selected: 0,
      visit_year_selected: 0,
      visit_month_selected: 0,
      result: {
        spu_year: 0,
        spu_month: 0,
        add_year: 0,
        add_month: 0
      },
      is_accordion: false,
      is_initEnd: false
    }
  },
  methods: {
    init: function() {
      const now = new Date()
      const thisYear = now.getFullYear()
      const lastYear = thisYear - 1
      const nextYear = thisYear + 1
      const thisMonth = now.getMonth() + 1

      this.rsv_year_selected = this.result.spu_year = thisYear
      this.rsv_month_selected = this.result.spu_month = thisMonth

      // 三ヶ月先の来店年月計算
      this.set_visit_year_month()
      this.update_visit_month(thisYear)
      this.set_visit_year_selected()
      this.set_visit_month_selected()

      // 初期計算
      this.sum_month()

      this.rsv_years = [{
        text: lastYear + '年',
        value: lastYear
      },
      {
        text: thisYear + '年',
        value: thisYear
      },
      {
        text: nextYear + '年',
        value: nextYear
      }]
    },
    set_visit_year_month: function() {
      const currentMonth = new Date(this.rsv_year_selected, (this.rsv_month_selected - 1), 1, 0, 0, 0)
      const nextMonth = new Date(this.rsv_year_selected, (this.rsv_month_selected - 1) + 1, 1, 0, 0, 0)
      const twoMonth = new Date(this.rsv_year_selected, (this.rsv_month_selected - 1) + 2, 1, 0, 0, 0)
      const threeMonth = new Date(this.rsv_year_selected, (this.rsv_month_selected - 1) + 3, 1, 0, 0, 0)
      const fourMonth = new Date(this.rsv_year_selected, (this.rsv_month_selected - 1) + 4, 1, 0, 0, 0)

      const items = [currentMonth, nextMonth, twoMonth, threeMonth, fourMonth]
      const data = []
      var year_index = 0
      for (var i = 0; i < items.length; i++) {
        if(data[year_index] && data[year_index].value == items[i].getFullYear()) {
          data[year_index].month.push(
            {
              text: items[i].getMonth() + 1 + '月',
              value: items[i].getMonth() + 1
            }
          )
        } else {
          data.push({
            text: items[i].getFullYear() + '年',
            value: items[i].getFullYear(),
            month: [
              {
                text: items[i].getMonth() + 1 + '月',
                value: items[i].getMonth() + 1
              }
            ]
          });

        if(i != 0) { year_index++ }
        }
      }
      this.visit_year_month = data
    },
    update_visit_month: function(year) {
      if(this.visit_year_month[0].value == year) {
        this.visit_months = this.visit_year_month[0].month
      } else {
        this.visit_months = this.visit_year_month[1].month
      }
    },
    set_visit_year_selected: function() {
      this.visit_year_selected = this.visit_year_month[0].value
    },
    set_visit_month_selected: function() {
      const _self = this

      const check = this.visit_months.some(function(el){
        return el.value == _self.visit_month_selected;
      });

      if(this.visit_month_selected == 0 || check == false) {
        this.visit_month_selected = this.visit_months[0].value
      }
    },
    submit_checker: function() {
      this.result.spu_year = this.rsv_year_selected
      this.result.spu_month = this.rsv_month_selected

      this.sum_month()

      if (navigator.userAgent.match(/iPhone|Android.+Mobile/)) {
        const anchor = document.getElementById('simulationSubmit');
        spuScroll.animateScroll(anchor);
      }
      dataLayer.push({'event': 'click_point_simulator'})
    },

    sum_month: function() {
      const convert_add_date = new Date(this.visit_year_selected, this.visit_month_selected - 1, 1, 0, 0)
      convert_add_date.setMonth(convert_add_date.getMonth() + 1)

      this.result.add_year = convert_add_date.getFullYear()
      this.result.add_month = convert_add_date.getMonth() + 1
    },

    toggle_accordion: function() {
      this.is_accordion = !this.is_accordion;
      dataLayer.push({'event': 'click_point_schedule'})
    }
  },

  watch: {
    rsv_year_selected: function() {
      // 三ヶ月先の来店年月計算
      this.set_visit_year_month()
      this.update_visit_month(this.rsv_year_selected)
      this.set_visit_year_selected()
      this.set_visit_month_selected()
    },
    rsv_month_selected: function() {
      // 三ヶ月先の来店年月計算
      this.set_visit_year_month()
      this.update_visit_month(this.rsv_year_selected)
      this.set_visit_year_selected()
      this.set_visit_month_selected()
    },
    visit_year_selected: function() {
      // 三ヶ月先の来店年月計算
      this.update_visit_month(this.visit_year_selected)
      this.set_visit_month_selected()
    }
  },

  created: function() {
    this.init()
    this.is_initEnd = true
  }
});



// // 対象サロンを探す アコーディオン
// function accordions() {
//   var accordions = document.querySelectorAll('.rbSPU-box-inner-button');

//   accordions.forEach(function(accordion) {
//     var accordionTarget = accordion.querySelector('.rbSPU-box-inner-button-target');
//     var accordionBtn = accordion.querySelector('.rbSPU-box-inner-button-title');
//     var accordionIcon = accordion.querySelector('.rbSPU-box-inner-button-title-icon');

//     accordionBtn.addEventListener('click', function() {
//       var isOpen = accordion.classList.contains('is-open');
//       if (isOpen) {
//         accordionTarget.style.height = '0px';
//       } else {
//         var scrollHeight = accordionTarget.scrollHeight;
//         accordionTarget.style.height = scrollHeight + 'px';
//       }

//       accordion.classList.toggle('is-open');
//       accordionTarget.classList.toggle('is-open');
//       accordionIcon.classList.toggle('is-open');
//     });
//   });
// };

// // 初期状態はclose
// document.addEventListener('DOMContentLoaded', accordions);