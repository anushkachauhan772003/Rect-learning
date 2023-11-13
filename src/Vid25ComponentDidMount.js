import React from "react";
export default class Vid25ComponenetDidMount extends React.Component{
    constructor(){
        super();
        this.state={
            name:"Anu"
        }
        console.warn("Constructor");
    }
    componentDidMount(){
        console.warn("ComponentDidMount");
    }
    render(){
        console.warn("Render");
        return(
            <div style={{ border: "3px solid black", margin: "2px" }}>
                <h1>Component Did Mount {this.state.name}</h1>
                <button onClick={()=>{this.setState({name:"Mohit"})}}>Update Name</button>
            </div>
        )
    }
}