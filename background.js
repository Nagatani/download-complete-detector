const files = []

chrome.downloads.onCreated.addListener((item) => {
  // ファイルダウンロードが始まったとき
  console.log(item)

  //if (item.url.match(/^https:\/\/twitter.com\//)) { // Twitterの画像保持しているドメインがこれじゃなかった
  if (item.url.match(/^https:\/\/pbs.twimg.com\//)) {
    // Twitterから適当な画像でもなんでもダウンロードする

    files.push(item)  // ダウンロードしているファイルのデータを保持させる
  }
})

chrome.downloads.onChanged.addListener((delta) => {
  if (delta.state && delta.state.current === "complete") {
    console.log(delta)

    if (files.find((file) => file.id === delta.id)) {
      // ↑で作成されたリストにあれば

      // ファイルのダウンロードが終わったら、新しいタブでURLを開く
      chrome.tabs.create({ url: "https://twitter.com/" })
    }
  }
});