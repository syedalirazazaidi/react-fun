import * as React from "react";

interface IAppProps {
  arr: number[];
}
export default function Box({ arr }: IAppProps) {
  return (
    <div style={{display:'flex',justifyContent:'space-between',marginLeft:'-300px', alignContent:'center' ,width:'400px'}}
    //   style={{
    //     gridTemplateColumns: "100px 50px 100px",
    //     gridTemplateRows: " 80px auto 80px",
    //     columnGap: "110px",
    //     rowGap: "105px",
    //     gap:'100px'
    //   }}
    >
        <p style={{backgroundColor:'teal',padding:'40px',margin:'40px'}}>1</p>
        <p style={{backgroundColor:'teal',padding:'40px',margin:'40px'}}>2</p>
        <p style={{backgroundColor:'teal',padding:'40px',margin:'40px'}}>3</p>
        <p style={{backgroundColor:'teal',padding:'40px',margin:'40px'}}>4</p>
        <p style={{backgroundColor:'teal',padding:'40px',margin:'40px'}}>5</p>
        <p style={{backgroundColor:'teal',padding:'40px',margin:'40px'}}>6</p>

      {/* {arr.map((ar) =><p style={{ gridTemplateColumns: "100px 50px 100px",
        gridTemplateRows: " 80px auto 80px",
        columnGap: "110px",
        rowGap: "105px",
        gap:'100px'}}>{ ar}</p>)} */}
    </div>
  );
}
