import React,{forwardRef} from "react";
 function Vid44Child(props,ref){
    return(
        <div>
            <input type="text"  ref={ref}></input>
        </div>
    )
}
export default forwardRef(Vid44Child);