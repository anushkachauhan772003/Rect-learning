import React,{createRef} from "react";
export default class Vid42ref extends React.Component{
    constructor(){
        super();
        this.inputRef=createRef();
    }
    getVal(){
        console.warn(this.inputRef.current.value);
    }
    render(){
        return(
            <div>
                <h1>createRef class Component</h1>
                <input type="text" ref={this.inputRef}></input>
                <button onClick={()=>this.getVal()}>getRefData</button>
            </div>
        )
    }
}