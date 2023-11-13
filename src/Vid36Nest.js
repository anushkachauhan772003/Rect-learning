import React from "react";
import Vid36Child from "./Vid36Child";
function Vid36Nest(){
    const users=[
        {name:"anu",email:"anu43@f.com",cont:"343"},
        {name:"mohi",email:"mohi@g.com",cont:"433"},
        {name:"papa",email:"papa@h.com",cont:"215"},
        {name:"mum",email:"mum3@.com",cont:"098"},
    ]
    return(
        <div style={{ border: "4px solid red", margin: "16px" ,}}>
            <h1>Reuse component with list</h1>
            {users.map((items,i)=>
            <Vid36Child data={items}/>
            )}

        </div>
    )
    
}
export default Vid36Nest;