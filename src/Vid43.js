import React,{useRef} from "react";
export default function Vid43(){
    const inputRef=useRef(null);
    function handleIn(){
        console.warn("function called")
        inputRef.current.style.color="red";
    }
return(
    <div style={{ border: "4px solid red", margin: "16px" ,}}>
        <h1>useRef</h1>
        <input type="text" ref={inputRef}></input>
        <button onClick={()=>handleIn()}>handle inputRef</button>
    </div>
)
}