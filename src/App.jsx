import "./styles.css";

export default function App() {
  let com = Math.floor(Math.random() * 3) + 1;
  console.log(com);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
