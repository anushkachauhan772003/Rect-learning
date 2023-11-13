import { useState } from "react";

function Vid46Hoc(){
return(
    <div style={{border:"5px solid brown"}}>
        <h1>High order comp</h1>
        <HOCR cmp={Counter}/>
        <HOCG cmp={Counter}/>
        <HOCB cmp={Counter}/>

    </div>
)
}
function HOCR(props){
    return <h2 style={{backgroundColor:"red" ,width:"100"}}><props.cmp/></h2>
}
function HOCG(props){
    return <h2 style={{backgroundColor:"green" ,width:"100"}}><props.cmp/></h2>
}
function HOCB(props){
    return <h2 style={{backgroundColor:"blue" ,width:"100"}}><props.cmp/></h2>
}
function Counter(){
    const[count,setCount]=useState(0);
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)}>update</button>
        </div>
    )
}
export default Vid46Hoc;