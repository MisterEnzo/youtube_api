import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';

//  components
import SearchBar from './search_bar';
import VideoList from './video_list';

const API_KEY = "AIzaSyD13l-C_YtiG4L28LepadOYOFKTwLyoW-o"

class App extends Component {
  state = {
    videos: []
  }

  videoSearch = (term) => {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({videos});
    })
  }

  render(){
    return(
      <div>
        <h1> Youtube App </h1>
        <SearchBar videoSearch={this.videoSearch}/>
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
