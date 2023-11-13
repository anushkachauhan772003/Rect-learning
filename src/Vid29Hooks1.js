import React,{useState} from "react";
export default function Vid29Hooks1(){
    const[data,setData]=useState("name");
return(
    <div style={{ border: "3px solid black", margin: "2px" }}>
        <h1>{data}</h1>
        <button onClick={()=>setData("Anushka")}>Click me</button>
    </div>
)
}