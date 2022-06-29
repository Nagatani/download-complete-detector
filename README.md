# download-complete-detector

> **Warning**  
> このChrome拡張機能は機能検証用です

- [chrome://extensions/](chrome://extensions/) から、manifest.jsonのあるディレクトリを「パッケージ化されていない拡張機能を読み込む」で指定する。
- 右上のデベロッパーモードがONになってないとダメかも。

## background.jsでやってること

Twitterから画像をダウンロードすると、新しいタブでTwitterを開く

ファイル生成時に保持しておくファイルの条件を指定しておくことで、ダウンロード完了時のidと照らし合わせてトリガーを引く対象を決められる。

デバッグは、↓の画像を参考に、「ビューを検証:」の横にあるService Workerのリンクより検証ツールを起動する。
![スクリーンショット 2022-06-30 024852](https://user-images.githubusercontent.com/696573/176502863-ee1c3316-0f32-4ccb-9b8d-d8b51d1eb0fb.png)

## 懸念事項
1. background.js、常駐して永続化するので、PC起動しっぱなしのクライアントがいるとダウンロード情報の取得やらでリソース管理してあげないとメモリ食い潰しそう。
  - persistent: falseとかでEventPageに切り替えつつやるのがよさそうかもしれんがそこまでは未対応
