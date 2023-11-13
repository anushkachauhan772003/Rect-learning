import React,{useEffect} from "react";
export default function Vid30(props){
    useEffect(()=>{
        console.log("ue count called"+props.count)
    },[props.count])
return(
    <div style={{ border: "3px solid black", margin: "2px" }}>
        <h1>props count: {props.count}</h1>
        <h1>props data: {props.data}</h1>
    </div>
)
}