import React,{useState} from "react";
function Vid20Vali(){
    const[user,setUser]=useState();
    const[pwd,setPwd]=useState();
    const[userErr,setUserErr]=useState(false);
    const[pwdEr,setPwdEr]=useState(false);

    function loginHnadle(e){
        if(user.length<3 || pwd.length<3){
            alert("not correct")
        }
        else{
            alert("all good");
        }
        e.preventDefault();
    }
    function userHnadler(e){
        let item=e.target.value;
        if(item.length<3){
            setUserErr(true);
        }
        else{
            setUserErr(false);
        }
        setUser(item);
    }
    function passHnadler(e){
        let item=e.target.value;
        if(item.length<3){
            setPwdEr(true);
        }
        else{
            setPwdEr(false);
        }
        setPwd(item);
    }

    return (
    <div style={{border:"5px solid Black", margin:"2px"}}>
        <form onSubmit={loginHnadle}>
        <h1>LogIn</h1>
        <input type="text" onChange={userHnadler}/>{userErr?<span>"User Invalid"</span>:""}
        <br/><br/>
        <input type="password" onChange={passHnadler}/>{pwdEr?<span>"pwd Invalid"</span>:""}<br/><br/>
        <button >Log in</button>
        </form>
    </div>
    )
}
export default Vid20Vali;