//whenever our compnent will remove from our DOM unmount method will call
import React from "react";
import Vid28child from "./Vid28child";
export default class Vid28compWillUnmount extends React.Component{
    constructor(){
        super();
        this.state={
            show:true
        }

    }
    render(){
        return(
            <div style={{ border: "3px solid black", margin: "2px" }}>
               {this.state.show? <h1><Vid28child/></h1>:null}
                <button onClick={()=>this.setState({show:!this.state.show})}>Toggle child component</button>
            </div>
        )
    }
}