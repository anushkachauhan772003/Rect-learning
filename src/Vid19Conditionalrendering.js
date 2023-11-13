import React,{useState} from "react";
function Vid19Conditionalrendering(){
    const[loogedIn,setLoggedIn]=useState(true);
return(
    <div style={{border:"5px solid Black", margin:"2px"}}>
        <h1>Conditional Rendering ||| If else condition</h1>
        {loogedIn?<header>Welcome anushka</header>:<header>Welcome guest</header>}
    </div>
)
}
export default Vid19Conditionalrendering;