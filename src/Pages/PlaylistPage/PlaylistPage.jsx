import { useParams } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";
import { useTheme, useVideo } from "../../context";
import VideoCard from "../../Components/VideoCard/VideoCard";
import Navbar from "../../Components/Navbar/Navbar"
import Sidebar from "../../Components/Sidebar/Sidebar"
import { deleteFromPlaylist } from "../../utils/PlaylistHelper";
import "./playlist.css";
export default function PlaylistPage() {
  const { playlistId } = useParams();
  const {
    videoState: { playlists },
    videoDispatch,
  } = useVideo();

  const findPlaylist = playlists.find(
    (playlist) => playlist._id === playlistId
  );

  return (
    <div>
      <Navbar />
      <div className="home-container">
        <Sidebar />
        <div
          className="home-wrapper"
        >
          <div className="video-list">
            {findPlaylist.length === 0 ? (
              <div className="empty-page">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAKR1e4vaicSqiqDX0ob97-PXHl3ibsAhggQ&usqp=CAU"
                  alt="empty-page"
                />
              </div>
            ) : (
              findPlaylist?.videos?.map((item) => (
                <div className="playlist-videos" key={item._id}>
                  <VideoCard item={{ item }} key={item._id} />
                  <AiFillCloseCircle
                    className="delete-video"
                    onClick={() =>
                      deleteFromPlaylist(findPlaylist, item, videoDispatch)
                    }
                  />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}