import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Box from "./box";
interface IAppProps {
  arr: [];
}
function App() {
  const [count, setCount] = useState<number>(0);
  const [arr, setArr] = useState<number[]>([]);
  const newarr: any = [];

  const submitAnswer = () => {
    newarr.push(count);
    setCount(0);
    setArr([...arr, count]);
  };
  console.log(arr, "dfsdfds");
  return (
    <div className="App">
      <input
        type="number"
        value={count}
        placeholder="enter the number"
        style={{ padding: "5px 20px 5px 20px" }}
        onChange={(e) => setCount(parseInt(e.target.value))}
      />
      <button onClick={submitAnswer}>Submit</button>
      <Box arr={arr} />
    </div>
  );
}

export default App;
