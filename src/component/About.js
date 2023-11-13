import { Link } from "react-router-dom"
export default function About(){
    return(
        <div style={{backgroundColor:"red"}}>
    
            <h1>Rect router about page </h1>
            <p>Hey so you are her after reading the home page so have you leanrt about links???</p>
            <Link to="/user/anil">Anil</Link><br/>
            <Link to="/user/peter">Peter</Link>
       

        </div>
    )
}