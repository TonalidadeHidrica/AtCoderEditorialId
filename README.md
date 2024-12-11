# AtCoderEditorialId
Shows editorial ID in AtCoder.

- Tampermonkey をインストール
  - Chrome の拡張機能マネージャで Tampermonkey を開き、ファイルアクセスの許可
- Tampermonkey のセットアップ
  - 設定のモード：~初心者~ 上級者でないといけなくなった？
  - 「スクリプトによるローカルファイルへのアクセスを許可する」が Externals (@require and @resource) となっていることを確認する
- 新規スクリプトを生成
  - 生成されたコードのヘッダを `main.js` のヘッダで置き換え
  - ヘッダに `@require /clone/destination/main.js` を追加
