import React, { Component } from 'react';

//  components
import SearchBar from './SearchBar';
import VideoList from './VideoList';

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
