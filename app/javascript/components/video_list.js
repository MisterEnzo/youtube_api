import React, { Component } from 'react';

import VideoItem from './video_item'

export default class VideoList extends Component{
  state = { videos: ''}

  render() {
    return(
      <div>
        <h2>Video List</h2>
        <ul>
          <li><VideoItem /></li>
          <li><VideoItem /></li>
          <li><VideoItem /></li>
        </ul>
      </div>
    )
  }
}
