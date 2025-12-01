// preprosアプリを使ってコンパイル
// ディレクトリを移動 or ファイル名変更した場合：prepros上でファイルを選択 → Process Automatically にチェックを入れて更新

// スクロールをサポートしているか（Google bot 確認）
let supportScroll = ('onscroll' in window) && !(/(gle|ing)bot/.test(navigator.userAgent));
if(supportScroll !== false) {
  // スクロールアニメーション用ライブラリの設定：https://github.com/terwanerik/ScrollTrigger
  const trigger = new ScrollTrigger.default()
  trigger.add('[data-trigger-list]', {
    once: true,
    offset: {
      element: {
        y: 10
      }
    }
  })
}

// 代替画像(Lazyloadされると効かない)
// const images = document.querySelectorAll('img');
// images.forEach((image) => {
//   image.addEventListener('error',() => {
//     image.setAttribute('src', '/cnt/topics/campaign/beautyaward/images/noimage.png');
//   });
// });

document.querySelectorAll('.awardOutline__content__link.no-link').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault(); // デフォルトのリンク動作を無効化
  });
});