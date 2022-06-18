import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import VideoCard from '../../Components/VideoCard/VideoCard'
import { useVideo } from '../../Context/VideoContext'
import "../Homepage/Homepage.css"
const WatchLater = () => {
    const {
        videoState: { watchLater },
    } = useVideo();

    return (
        <div>
            <Navbar />
            <Sidebar />
            <h1 className='video-display'>Watch Later</h1>
            <div className='video-display video-list'>
                    {watchLater.map((item) => {
                        return <div className='video-card'>
                            <VideoCard item={item} />
                        </div>;
                    })}
                
            </div>
        </div>
    )
}

export default WatchLater