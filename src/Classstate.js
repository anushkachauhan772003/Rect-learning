import React from "react";
export default class Classstate extends React.Component{
    constructor(){
        super();
        this.state={
            data:"anil"
        }
    }
    render(){
        return(
            <div>
                <h1>{this.state.data}</h1>
            </div>
        )
    }
}