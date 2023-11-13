import React from "react";
export default class Vid28child extends React.Component{
    componentWillUnmount(){
        alert("component will unmount called");
    }
    render(){
        return(
            <div style={{ border: "3px solid black", margin: "2px" }}>
               <h1>Student Component</h1>
            </div>
        )
    }
}