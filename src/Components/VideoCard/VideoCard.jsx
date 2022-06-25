import { MdPlaylistPlay, MdWatchLater,MdUnpublished } from "react-icons/md";
import { FaThumbsUp, FaRegThumbsUp } from "react-icons/fa";
import {AddtoLikeList,RemovetoLikeList} from "../../utils/LikeHelper"
import { useVideo } from "../../Context/VideoContext";
import "./VideoCard.css"
import {
  Addtowatchlater,
  Removetowatchlater,
} from "../../utils/WatchLaterHelper";
function VideoCard({ item }) {
  const { creatorImg, creator, title, views, thumbnail,_id } =
    item;

    const {
      videoState: {LikeList,watchLater},
      videoDispatch,
    } = useVideo();
  return (
    <div className="card-padding">
      <img className="thumbnail" src={thumbnail.url} alt={item.title} />
      <div className="video-details">
        <img src={creatorImg} alt={creator} className="creator-dp" />
        <div>
          <h3 className="video-title">{title}</h3>
          <p>{creator}</p>
          <p>
            {views} views
          </p>
        </div>
        <div>
        <div>
            {LikeList.some((video) => video._id === _id) ? (
              <FaThumbsUp
                className="options"
                onClick={() => RemovetoLikeList(item, videoDispatch)}
              />
            ) : (
              <FaRegThumbsUp
                className="options"
                onClick={() => AddtoLikeList(item, videoDispatch)}
              />
            )}
          </div>

          <MdPlaylistPlay className="options" />

          <div>
            {watchLater.some((video) => video._id === _id) ? (
              <MdUnpublished
                className="options"
                onClick={() => Removetowatchlater(item, videoDispatch)}
              />
            ) : (
              <MdWatchLater
                className="options"
                onClick={() => Addtowatchlater(item , videoDispatch)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;