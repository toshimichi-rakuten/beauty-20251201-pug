# SPU Figma Campaign Page

このプロジェクトはSPU（スーパーポイントアッププログラム）のキャンペーンページです。

## セットアップ

```bash
npm install
```

## 開発

開発サーバーを起動します（Pugファイルの監視とブラウザの自動リロード）：

```bash
npm run dev
```

ブラウザで http://localhost:3000 を開いてください。

## ビルド

PugファイルをHTMLにコンパイルします：

```bash
npm run build
```

## ファイル構成

- `index.pug` - 元のPugファイル（共通テンプレートを使用）
- `index-standalone.pug` - スタンドアロン版Pugファイル（依存関係なし）
- `index.html` - コンパイルされたHTMLファイル
- `package.json` - プロジェクト設定とスクリプト

## 使い方

1. `index-standalone.pug`を編集してください
2. 保存すると自動的にHTMLが生成され、ブラウザがリロードされます
3. スタイルやリソースは `../spu/` ディレクトリを参照しています
