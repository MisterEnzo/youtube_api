import React, { Component } from 'react';

import VideoItem from './video_item'

const VideoList = (props) => {
  const videoItems = props.videos.map(video => {
    return (
      <VideoItem
        // onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video} />
    )
  })

  return(
    <div>
      <h2>Video List</h2>
      <ul>
        {videoItems}
      </ul>
    </div>
  );
};

export default VideoList;
