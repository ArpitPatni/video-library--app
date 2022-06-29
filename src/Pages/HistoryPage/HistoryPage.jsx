import { useVideo } from "../../Context/VideoContext";
import React, { useEffect } from "react";
import axios from "axios";
import { AiFillCloseCircle } from "react-icons/ai";
import { ClearHistory, RemoveFromHistory } from "../../utils/HistoryHelper";
import "./HistoryPage.css";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import VideoCard from "../../Components/VideoCard/VideoCard";

function HistoryPage() {
  const {
    videoState: { History },
    videoDispatch,
  } = useVideo();
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/user/history");
        videoDispatch({ type: "saveHistory", payload: response.data.history });
      } catch (error) {
        console.log(error, "Could not load data");
      }
    })();
  }, [videoDispatch]);
  return (
    <div>
      <Navbar />

      <Sidebar />
      <div>
        <div className="historyHeading">
          <h1>History</h1>
          <p
            className="ClearButton"
            onClick={() => ClearHistory(videoDispatch)}
          >
            Clear History
          </p>
        </div>
        <div className=" video-display video-list">
          {History.map((item) => {
            return (
              <div className="video-card"
                key={item.id}
              >
                <VideoCard className="video-card" item={item} />
                <AiFillCloseCircle
                  className="delete-video"
                  onClick={() => RemoveFromHistory(item, videoDispatch)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>

  );
}

export default HistoryPage;