import React, { Component } from 'react';

const VideoDetail = ({ video }) => {
  if (!video){
    return <div>Loading..</div>
  }
  const url = `https://www.youtube.com/embed/${video}`;

  return(
    <div>
      <div className="video-iframe">
        // <iframe src={url} />
        {url}
      </div>
      <div className="video-details">
      </div>
    </div>
  )
}

export default VideoDetail;
