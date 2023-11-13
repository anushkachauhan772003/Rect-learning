
import {NavLink } from "react-router-dom"
export default function Navbar() {
    return (
        <div>
        <ul className="navBar">
            <li> <NavLink className="nav-bar-link active" to="">Home</NavLink></li>
            <li><NavLink to="/about" className="nav-bar-link active"> About </NavLink></li>
            <li><NavLink to="/contact" className="nav-bar-link active">Contact</NavLink></li>
            <li><NavLink to="/login" className="nav-bar-link active">LogIn</NavLink></li>
            </ul>

        </div>
    )

}
