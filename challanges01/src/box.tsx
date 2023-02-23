import * as React from "react";

interface IAppProps {
  arr: number[];
}
export default function Box({ arr }: IAppProps) {
  console.log(arr, "???");
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginLeft: "-300px",
        alignContent: "center",
        width: "400px",
      }}
    >
      {arr &&
        arr.map((data) => (
          <p
            style={{ backgroundColor: "teal", padding: "40px", margin: "40px" }}
          >
            {data}
          </p>
        ))}
    </div>
  );
}
