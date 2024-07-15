import { ColoredMessage } from "./components/ColoredMessage";

export const App = () => {
  // ボタンを押した時に実行する関数を定義
  const onClickButton = () => {
    alert();
  };

  return (
    <>
      <h1>Hello World</h1>
      <ColoredMessage color="blue" message="お元気ですか？" />
      <ColoredMessage color="pink" message="元気です！" />
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};
