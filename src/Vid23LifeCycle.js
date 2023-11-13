import React from "react";
class Vid23LifeCycle extends React.Component{
   constructor(){
      super();//unka parent hai component usko call krk and first class ko bnne mai sbse phle constructor call hota hai state is laways in constructor so that we can use that in html
      console.log("constructor called")
   }
   render(){
      console.log("render called");
      return(
         <div style={{border:"3px solid black",margin:"2px"}}>
         <h1>Hello I am constructor life cycle</h1>
         </div>
      )
   }
}
export default Vid23LifeCycle;