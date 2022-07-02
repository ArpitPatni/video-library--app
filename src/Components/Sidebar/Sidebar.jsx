import React from 'react'
import { Link } from "react-router-dom";
import './Sidebar.css'
const Sidebar = () => {
  return (
    <div>
      <div className="Wrapper">
        <div className="Sidebar">

          <ul>
            <Link to="/">
              <li> <i className="fa-solid fa-house sider-icn"></i><a>Home</a></li>
            </Link>

            <Link to="/playlist">
            <li><i className="fa-solid fa-folder-plus sider-icn"></i><a>Playlist</a></li>
            </Link>

            <Link to="/like">
              <li><i className="fa-solid fa-heart sider-icn"></i><a>Liked</a></li>
            </Link>

            <Link to="/watchLater">
              <li><i className="fa-solid fa-clock sider-icn"></i><a>Watch Later</a></li>
            </Link>

            <Link to="/history">
              <li><i className="fa-solid fa-clock-rotate-left sider-icn"></i><a>History</a></li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar