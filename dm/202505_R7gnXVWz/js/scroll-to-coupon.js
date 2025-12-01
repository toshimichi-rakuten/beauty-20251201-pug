document.addEventListener('DOMContentLoaded', function() {
  const scrollButtons = document.querySelectorAll('.nav__list');
  const targetElements = document.querySelectorAll('.couponBox'); // スクロール先の要素
  const navigation = document.getElementById('navigation');
  const navigationHeight = navigation.offsetHeight;

  scrollButtons.forEach((button, index) => {
    button.addEventListener('click', function(event) {
      event.preventDefault();

      if (targetElements[index]) {
        const targetY = targetElements[index].getBoundingClientRect().top + window.pageYOffset;
        const adjustedY = targetY - navigationHeight; // ナビゲーションの高さを考慮

        window.scrollTo({
          top: adjustedY,
          behavior: 'smooth'
        });
      }
    });
  });
});

// ボタン要素を取得
let floatingButton = document.getElementById("scroll-to-search");

// スクロールイベントリスナーを追加
window.onscroll = function() {
  scrollFunction();
};

// スクロール量に応じてボタンの表示/非表示を切り替える関数
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    floatingButton.classList.add("show"); // showクラスを追加
  } else {
    floatingButton.classList.remove("show"); // showクラスを削除
  }
}

// ボタンクリック時の動作
floatingButton.addEventListener("click", function() {
  // アンカーリンク要素を取得
  let anchorElement = document.getElementById("Shoplist");

  // アンカーリンクまでスムーズスクロール
  anchorElement.scrollIntoView({
    behavior: "smooth",
    block: "start" // または "center", "end", "nearest"
  });
});