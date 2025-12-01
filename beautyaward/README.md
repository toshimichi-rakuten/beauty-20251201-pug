# ビューティアワード運用方法

## バナー更新
[_data.pug](_data.pug) `bartterbanners` の中身を更新

## ベストサロン、ベストスタイリスト更新
[json](json/) の `{都市名}_salons.json` と `{都市名}_stylists.json` 中身を更新

### 画像を最新に更新したい
[_data.pug](_data.pug) の `parameter` を更新する
　
### サロンが非公開 or 削除されたので、リンクを削除したい
#### ベストサロンの店舗が削除された場合
[json](json/) の `{都市名}_salons.json` 内の `status` を `close` に更新する
　
#### ベストスタイリストが所属している店舗が削除された場合
[json](json/) の `{都市名}_stylists.json` 内の `salonStatus` を `close` に更新する
　
### スタイリストが削除されたので、リンクを削除したい
[json](json/) の `{都市名}_stylists.json` 内の `status` を `close` に更新する
　
## 画像表示系のJSを修正したい
[js/list.js](js/list.js) を修正して Prepros でコンパイルしてください
