import React from "react";
import Vid40child from "./Vid40Child";
export default class Vid40PureComp extends React.Component{
    constructor(){
        super()
        this.state={
            count:1
        }
    }
    render() {
        return (
            <div style={{border:"4px solid green", margin:"3px"}}>
                <Vid40child count={this.state.count}/>
                <button onClick={()=>this.setState({count:this.state.count})}>Update</button>

            </div>
        )
    }
}