import React from 'react'
import {Link} from 'react-router-dom'
import { useAuth } from '../../Context/AuthContext'
import './Navbar.css'
const Navbar = () => {
  const { isLogin, setIsLogin } = useAuth();
  return (
    <div>
         <nav class="flex nav-item background-color">
        <div class="left-nav flex">
          <Link to="/"><a class="nav-heading">Patni's Hub</a></Link>
          <input class="search-bar" placeholder="Search here" />
        </div>
        <div class="btn-class">

        
        <Link to="/signup"><button className="btn">Signup</button></Link>

        <Link to="/login">{isLogin ? (
            <button
              className="btn"
              onClick={() => setIsLogin((isLogin) => !isLogin)}
            >
              Logout
            </button>
          ) : (
            <button className="btn">Login</button>
          )}</Link>

        </div>
      </nav>
    </div>
  )
}

export default Navbar