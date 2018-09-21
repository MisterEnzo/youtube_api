import React, { Component } from 'react';

//  components
import SearchBar from './search_bar';
import VideoList from './video_list';

const App = () => {
  return(
    <div>
      <h1> Youtube App </h1>
      <SearchBar />
      <VideoList />
    </div>
  );
}

export default App;
