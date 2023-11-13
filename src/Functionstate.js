import { useState } from "react";
function Functionstate(){
    const[data,setData]=useState(1);
    function updateData(){
        setData(data+1);

    }

return(
    <div style={{border:"5px solid Black", margin:"3px"}}>
        <h1>Hello {data}</h1>
        <button onClick={updateData}>Click Me</button>
    </div>
)
}
export default Functionstate;