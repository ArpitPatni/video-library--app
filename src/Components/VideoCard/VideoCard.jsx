import React from "react";
import { MdPlaylistPlay, MdWatchLater } from "react-icons/md";
import { FaThumbsUp } from "react-icons/fa";
import "./VideoCard.css"

function VideoCard({ item }) {
  const { creatorImg, creator, title, views, thumbnail } =
    item;

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
          <FaThumbsUp className="options" />

          <MdPlaylistPlay className="options" />

          <MdWatchLater className="options" />
        </div>
      </div>
    </div>
  );
}

export default VideoCard;