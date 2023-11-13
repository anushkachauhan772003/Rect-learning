import { Link, Outlet } from "react-router-dom"
export default function Contact(){

    return(
        <div>
            <h1>Welcome to my Contact Page</h1>
            <p>I hope you enjoyed the whole journey </p>
            <p>meet you soon</p>
            <Link to="/channel"  className="nav-bar-link active">Channel</Link>
            <Outlet/>
        </div>
    )
}