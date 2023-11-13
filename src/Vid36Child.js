import React from "react";
export default function Vid36Child(props){
    return(
        <div style={{ border: "3px solid black", margin: "2px" }}>
                <span>{props.data.name}</span>
                <span>{props.data.email}</span>
                <span>{props.data.cont}</span>
        </div>
    )
}