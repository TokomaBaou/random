import "./styles.css";

export const App = () => {
  let com_jan = Math.floor(Math.random() * 3) + 1;
  console.log(com_jan);

  let user_jan = "";

  switch (user_jan) {
    case 1:
      user_jan = "ぐー";
      break;
    case 2:
      user_jan = "ちょき";
      break;
    case 3:
      user_jan = "ぱー";
      break;
    // default:
    //   console.log("１から3の値を入力してください");
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
};
