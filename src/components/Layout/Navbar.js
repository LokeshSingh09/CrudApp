import React from "react";
import {Link,NavLink} from "react-router-dom";


const Navbar =()=> {
  return (
    <div >
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-5">
  <a className="navbar-brand" href="#">React User</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" >
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <NavLink className="nav-link" exact to="/">Home </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" exact to="/about">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" exact to="/contact">Contact</NavLink>
      </li>
      
      
    </ul>
    
  </div>
  <Link className="btn btn-outline-light" exact to='/users/add'>Add User</Link>
</nav>
    </div>
  )
}

export default Navbar;