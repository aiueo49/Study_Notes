export const App = () => {
  // ボタンを押した時に実行する関数を定義
  const onClickButton = () => {
    alert();
  };

  // CSSオブジェクト
  const contentStyle = {
    color: "blue",
    fontSize: "20px"
  };

  return (
    <>
      <h1>Hello World</h1>
      <p style={contentStyle}>This is a paragraph</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};
