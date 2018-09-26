import React, { Component } from 'react';

//  components
import SearchBar from './search_bar';
import VideoList from './video_list';

const API_KEY = "AIzaSyD13l-C_YtiG4L28LepadOYOFKTwLyoW-o"

const App extends Component {
  render(){
    return(
      <div>
        <h1> Youtube App </h1>
        <SearchBar />
        <VideoList />
      </div>
    );
  }
}

export default App;
