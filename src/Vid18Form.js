import React,{useState} from "react";
function Vid18Form(){
    const[name,setName]=useState("");
    const[tnc,setTnc]=useState(false);
    const[interest,setInterest]=useState("");

    function getFormData(e){
        console.warn(name,tnc,interest);
        e.preventDefault();//stops page reloading
    }
    return(
        <div style={{border:"5px solid Black", margin:"2px"}}>
            <h1>Forms in ReactJS</h1>
            <form onSubmit={getFormData}>
                <input type="text" onChange={(e)=>setName(e.target.value)}></input><br/><br/>
                <select onChange={(e)=>setInterest(e.target.value)}><br/><br/>
                <option>Select Options</option>
                <option>Marvel</option>
                <option>DC</option>
                </select><br/><br/>
                <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)}></input><span>Accept terms and conditons</span><br/><br/>
                <button>Submit form</button>

            </form>
        </div>
    )
}
export default Vid18Form;