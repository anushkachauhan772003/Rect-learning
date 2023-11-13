import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export default function Login(){
    const login=()=>{
        localStorage.setItem('login',true)
        navigate('/')
    }
    const navigate=useNavigate();
    useEffect(()=>{
        let login=localStorage.getItem('login');
        if(login){
             navigate('/'); 
        }
    });
    
    return(
        <div>
            <h1>Log in page</h1>
            <input type=" text" placeholder="enter username"/><br/><br/>
            <input type="password" placeholder=" enter password "/><br/><br/>
            <button onClick={login}>Log in</button>
        </div>
    )
}