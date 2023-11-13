import React,{useRef} from "react";
function Vid45Controlled(){
    const inputRef=useRef();
    const inputRef2=useRef();
    function subForm(e){
        e.preventDefault();
        console.warn(inputRef.current.value);
        console.warn(inputRef2.current.value);
    }
return(
    <div>
        <h1>Uncontrolled</h1>
        <form onSubmit={subForm}>
        <input type="text" ref={inputRef}></input><br/><br/>
        <input type="text" ref={inputRef2}></input><br/><br/>
        <button>submit</button>
        </form>

    </div>
)
}
export default Vid45Controlled;