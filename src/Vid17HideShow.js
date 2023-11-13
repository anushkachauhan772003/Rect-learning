import React,{useState} from "react";
function Vid17HideShow(){
    const[status,setStatus]=useState(false);
return(
    <div style={{border:"5px solid Black", margin:"3px"}}>
        {status? <h1>Anushka Chauhan</h1>:null}
       
        {/* <button onClick={()=>setStatus(false)}>Hide</button>
        <button onClick={()=>setStatus(true)}>Show</button> */}
        <button onClick={()=>setStatus(!status)}>By Toggle hide and show</button>
    </div>
)
}
export default Vid17HideShow;