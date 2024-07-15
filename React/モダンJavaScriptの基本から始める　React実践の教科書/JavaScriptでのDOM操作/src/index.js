// 追加ボタン押下時に実行する関数
const onClickAdd = () => {
  // テキストボックスのElementを取得
  const textEl = document.getElementById("add-text");

  // テキストボックスの値を取得
  const text = textEl.value;

  // テキストボックスの値を初期化
  textEl.value = "";

  // liタグを生成
  const li = document.createElement("li");
 
  // divタグを生成
  const div = document.createElement("div");

  // pタグを生成(テキストボックスの文字を設定)
  const p = document.createElement("p");
  p.textContent = text;
  
  // buttonタグを生成(削除ボタン)
  const button = document.createElement("button");
  button.textContent = "削除";

  // ボタン押下時に行を削除する処理を設定
  button.addEventListener("click", () => {
    // 削除対象の行を取得
    const deleteTarget = button.closest("li");

    // 削除対象の行を削除
    document.getElementById("memo-list").removeChild(deleteTarget);
  });

  // divタグの配下にpタグとbuttonタグを追加
  div.appendChild(p);
  div.appendChild(button);

  // liタグの配下にdivタグを追加
  li.appendChild(div);

  // メモ一覧のリストにliタグを追加
  document.getElementById("memo-list").appendChild(li);
};

// ボタン押下時にonClickAdd関数を実行 
document.getElementById("add-button").addEventListener("click", () => onClickAdd());
