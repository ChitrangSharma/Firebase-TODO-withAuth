import React from 'react'
import {Link} from 'react-router-dom'
import { auth } from '../firebase';
import "./Navbar.css";
import {useHistory} from 'react-router-dom'
function Navbar({user}) {
    const history = useHistory()
    return (
        <nav>
        <div className="nav-wrapper ">
          <Link to="/" className="brand-logo"><img className="logo__edit" src="logo.png"/></Link>
          
          <ul id="nav-mobile" className="right hide-on-med-and-down">
          {user?   <li><button onClick={()=>{auth.signOut()  
          history.push('/login')
          }}className="btn red" style={{marginRight:"20px"}} >Logout</button></li>
          :<><li><Link to="/login">Login</Link></li>
            <li><Link to="/signin">Singin</Link></li></>}
            

          
          </ul>
        </div>
      </nav>
    )
}

export default Navbar
