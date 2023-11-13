import React from "react";
import Vid21Child from "./Vid21Child";
function Vid21PassFunctions(){
    function getData(){
        alert("Alert box");
    }
return(
    <div style={{border:"3px solid black",margin:"2px"}}>
    <Vid21Child data={getData}/>
</div>
)
}
export default Vid21PassFunctions;