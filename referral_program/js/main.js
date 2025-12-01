const tabListSend = document.querySelectorAll('.flow__tabMenuSend');
const tabContentSend = document.querySelectorAll('.flow__tabContentsItemSend');
const tabListReceive = document.querySelectorAll('.flow__tabMenuReceive');
const tabContentReceive = document.querySelectorAll('.flow__tabContentsItemReceive');

document.addEventListener('DOMContentLoaded', function(){
  // 紹介する方の処理
  for(let i = 0; i < tabListSend.length; i++) {
    tabListSend[i].addEventListener('click', tabSwitchSend);
  }
  // タブをクリックすると実行
  function tabSwitchSend(){
    // flow__tabMenuSendと-activeのあるタブから-active削除処理
    document.querySelectorAll('.flow__tabMenuSend.-active')[0].classList.remove('-active');
    // クリックしたタブにーactive追加処理  
    this.classList.add('-active');
    // flow__tabContentsItemSendとーshowのあるコンテンツから-showクラスを削除
    document.querySelectorAll('.flow__tabContentsItemSend.-show')[0].classList.remove('-show');

    const aryTabsSend = Array.prototype.slice.call(tabListSend);
    // クリックしたタブの番号取得     
    const indexSend = aryTabsSend.indexOf(this);
    // クリックしたタブと同じ番号のタブにーshowを追加
    tabContentSend[indexSend].classList.add('-show');
  };

  // 紹介された方の処理
  for(let i = 0; i < tabListReceive.length; i++) {
    tabListReceive[i].addEventListener('click', tabSwitchReceive);
  }
  // タブをクリックすると実行
  function tabSwitchReceive(){
    // flow__tabMenuReceiveと-activeのあるタブから-active削除処理
    document.querySelectorAll('.flow__tabMenuReceive.-active')[0].classList.remove('-active');
    // クリックしたタブにーactive追加処理  
    this.classList.add('-active');
    // flow__tabContentsItemReceiveとーshowのあるコンテンツから-showクラスを削除
    document.querySelectorAll('.flow__tabContentsItemReceive.-show')[0].classList.remove('-show');

    const aryTabsReceive= Array.prototype.slice.call(tabListReceive);
    // クリックしたタブの番号取得     
    const indexReceive = aryTabsReceive.indexOf(this);
    // クリックしたタブと同じ番号のタブにーshowを追加
    tabContentReceive[indexReceive].classList.add('-show');
  };
});
