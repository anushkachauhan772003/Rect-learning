import React, { useRef } from "react";
import Vid44Child from "./Vid44Child";
export default function Vid44forwardRef(){
    let inputRef=useRef(null);
    function updateIn(){
        inputRef.current.value="1000";
        inputRef.current.style.color="yellow";
        inputRef.current.focus();
    }
    return(
        <div>
            <h1>firwardRef</h1>
            <Vid44Child ref={inputRef}/>
            <button onClick={updateIn}> Update</button>
        </div>
    )
}