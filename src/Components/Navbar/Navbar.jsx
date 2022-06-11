import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
         <nav class="flex nav-item background-color">
        <div class="left-nav flex">
          <Link to="/"><a href="index.html" class="nav-heading">Patni's Hub</a></Link>
          <input class="search-bar" placeholder="Search here" />
        </div>
        <div class="btn-class">

        <Link to="/login"><button className="btn">Login</button></Link>
        <Link to="/login"><button className="btn">Signup</button></Link>

        </div>
      </nav>
    </div>
  )
}

export default Navbar