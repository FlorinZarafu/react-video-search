import React from "react";
import "./VideoItem-style.css";

const VideoItem = ({ video }) => {
  return (
    <div className="item video-item">
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt=""
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
        {/* <div className="description">{video.snippet.description}</div> */}
      </div>
    </div>
  );
};
export default VideoItem;
