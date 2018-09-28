import React, { Component } from 'react';

const VideoItem = ({video}) => {
  const imageUrl = video.snippet.thumbnails.default.url;

  return(
    <li>
      <div>
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
