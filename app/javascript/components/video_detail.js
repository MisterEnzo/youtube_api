import React, { Component } from 'react';

const VideoDetail = ({ video }) => {
  if (!video){
    return <div>Loading..</div>
  }
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return(
    <div>
      <div className="video-iframe">
        <iframe src={url} />
      </div>
      <div className="video-details">
      </div>
    </div>
  )
}

export default VideoDetail;
