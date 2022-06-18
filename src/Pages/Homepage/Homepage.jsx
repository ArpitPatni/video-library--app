import React, { useEffect } from 'react'
import axios from 'axios';
import CategoryList from '../../Components/CategoryList/CategoryList'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { useFilter } from '../../Context/FilterContext'
import { useVideo } from '../../Context/VideoContext'
import VideoCard from '../../Components/VideoCard/VideoCard';
import "./Homepage.css"
const Homepage = () => {
  const {
    videoState: { videodata },
    videoDispatch,
  } = useVideo();
  const {
    FilterState: { byCategory },
  } = useFilter();

  const filteredVideo = () => {
    let filterVideo = videodata;
    if (byCategory.length!==0) {
       var resultFilterVideo = filterVideo.filter(
        (video) => video.category === byCategory
      );
      return resultFilterVideo;
    } else{
      return filterVideo;
    }  
    
  };
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/videos");
        videoDispatch({ type: "savedata", payload: response.data.videos })
      } catch (error) {
        console.log(error, "Could not load data");
      }
    })();
  }, [videoDispatch]);
  return (

    
    <div>
      <Navbar />
      <Sidebar />
      <CategoryList />
      <div className='video-display video-list'>
        {filteredVideo().map((item) => (
          <div className='video-card'>
          <VideoCard item={item} />
          </div>
        ))}
      </div>

    </div>
  )
}

export default Homepage