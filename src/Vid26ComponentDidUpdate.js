import React from "react";
export default class Vid26ComponentDidUpdate extends React.Component{
    constructor(){
        super();
        this.state={
            name:"Mohit",
            count:0
        }

    }
    componentDidUpdate(preProps,preState,snapshot){
        
        //if we want to update update with a condition else it will go on infinite loop
        if(this.state.count<10){
            this.setState({count:this.state.count+1})
        }
        console.log("didupdate",preState);
    }
   
    render(){
        return(
            <div style={{ border: "3px solid black", margin: "2px" }}>
                <h1>{this.state.name} {this.state.count}</h1>
                <button onClick={()=>{this.setState({name:"Mohit Chauhan",count:1})}}>Update Name and count</button>
            </div>
        )
    }
}