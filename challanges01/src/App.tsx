import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Box from "./box";
interface IAppProps {
  arr: [];
}

function App() {
  const [count, setCount] = useState<number>(0);
  const [arr, setArr] = useState<number[]>([0, 0, 0, 0, 0]);
  const newarr: any = [];

  const redArr = Array.from({ length: 5 });
  console.log(redArr, "ARRR");
  // console.log(Array.from({ length: 5 }, (_, i) => <span key={i}>{i}</span>));
  const submitAnswer = (count: number) => {
    console.log(count, "??-----------");
    // for (let index = 0; index < arr.length; index++) {
    //   const element = arr[index];
    //   setCount(element);
    // }
    // setArr([count]);
    // newarr.push(count);
    // setCount(0);
    // setArr([count]);
    // const nextArr: any = arr?.map((newarr) => {
    //   console.log(newarr);
    // if (shape.type === "square") {
    //   return shape;
    // } else {
    //   return {
    //     ...shape,
    //     y: shape.y + 50,
    //   };
    // }
    // });
    // setArr(nextArr);
  };
  console.log(arr, "dfsd??fds");
  return (
    <div className="App">
      <input
        type="number"
        value={count}
        placeholder="enter the number"
        style={{ padding: "10px 20px 10px 20px" }}
        onChange={(e) => setCount(parseInt(e.target.value))}
      />
      <button onClick={() => submitAnswer(count)}>Submit</button>
      {/* <Box arr={arr} /> */}

      {/* {[...Array(count)].map((value: undefined, index: number) => (
        <Box id={index + 1} key={index} />
      ))} */}
    </div>
  );
}

export default App;
