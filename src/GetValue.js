import React,{useState} from "react";
function GetValue() {
    const[data,setData]=useState();
    const[print,setPrint]=useState(false)
    function updateData(val){
        setData(val.target.value);
        setPrint(false);
    }
    return (
        <div style={{border:"5px solid Black", margin:"3px"}}>
            Get the input Value:-
            {print?<h1>{data}</h1>:null}
            <input type="text" onChange={updateData}/>
            <button onClick={()=>setPrint(true)}>Print Data</button>
        </div>
    )
}
export default GetValue; 