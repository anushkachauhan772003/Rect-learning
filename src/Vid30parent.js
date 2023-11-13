import React,{useState} from "react";
import Vid30 from "./Vid30";
export default function Vid30parent(){
    const[data,setData]=useState(0);
    const[count,setCount]=useState(0);
    return(
        <div>
            <Vid30 count={count} data={data}/>
            <button onClick={()=>setData(data+1)}>data</button>
            <button onClick={()=>setCount(count+1)}>count</button>
        </div>
    )
}