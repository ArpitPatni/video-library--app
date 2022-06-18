import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import VideoCard from '../../Components/VideoCard/VideoCard';
import { useVideo } from '../../Context/VideoContext';

const LikePage = () => {
    const {
        videoState: { LikeList },
    } = useVideo();
    console.log(LikeList)
    return (
        <div>
            <Navbar />
            <Sidebar />
            <h1 className='video-display'>Liked Videos</h1>
            <div className='video-display video-list '>
                {LikeList.map((item) => {
                    return <div className="video-card">
                        <VideoCard item={item} />
                    </div>;
                })}

            </div>
        </div>
    )
}

export default LikePage