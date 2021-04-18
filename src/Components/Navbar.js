import React from 'react'
import {Link} from 'react-router-dom'
import "./Navbar.css";
function Navbar() {
    return (
        <nav>
        <div className="nav-wrapper ">
          <Link to="/" className="brand-logo">Logo</Link>
          
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signin">Singin</Link></li>

            <li><button className="btn red" >Logout</button></li>
          </ul>
        </div>
      </nav>
    )
}

export default Navbar
