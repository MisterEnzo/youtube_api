import React, { Component } from 'react';

const VideoItem = ({video, videoSelect}) => {
  const imageUrl = video.snippet.thumbnails.default.url;

  return(
    <li>
      <div onClick={() => videoSelect(video)} >
        <div id="video-image">
          <img src={imageUrl}/>
        </div>

        <div id="video-body">
          <p>{video.snippet.title}</p>
        </div>
      </div>
    </li>
  )
}

export default VideoItem;
