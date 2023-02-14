import * as React from 'react';

 interface IAppProps {
    arr:number[]
}

export default function Box ({arr}:IAppProps) {
    console.log(arr,'ARR')
  return (
    <div >
      {arr.map((ar) => (
        <div style={{display:'flex',justifyContent:'space-between'}}>{ar}</div> 
        ))} 
      
    </div>
  );
}
