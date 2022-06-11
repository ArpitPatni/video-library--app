import React from 'react'
import './Sidebar.css'
const Sidebar = () => {
  return (
    <div>
        <div className="Wrapper">
            <div className="Sidebar">
               
                <ul>
                    <li> <i className="fa-solid fa-house sider-icn"></i><a href="#">Home</a></li>
                    <li><i className="fa-solid fa-folder-plus sider-icn"></i><a href="#">Playlist</a></li>
                    <li><i className="fa-solid fa-heart sider-icn"></i><a href="#">Liked</a></li>
                    <li><i className="fa-solid fa-clock sider-icn"></i><a href="#">Watch Later</a></li>
                    <li><i className="fa-solid fa-clock-rotate-left sider-icn"></i><a href="#">History</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Sidebar