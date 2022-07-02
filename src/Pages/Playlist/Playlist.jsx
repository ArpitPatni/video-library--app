import { useVideo } from "../../Context/VideoContext";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import PlaylistCard from "../../Components/Playlist/PlaylistCard"
import "../PlaylistPage/Playlist.css"
export default function Playlist() {
  const {
    videoState: { playlists },
  } = useVideo();
  return (
    <div>
      <Navbar />
      <div className="home-container">
        <Sidebar />
        <div
          className="home-wrapper1">

          <ul className="video-list">
            {playlists?.length === 0 ? (
              <div className="empty-page">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAKR1e4vaicSqiqDX0ob97-PXHl3ibsAhggQ&usqp=CAU"
                  alt="empty-page"
                />
              </div>
            ) : (
              playlists?.map((playlist) => (
                <PlaylistCard playlist={playlist} key={playlist._id} />
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}