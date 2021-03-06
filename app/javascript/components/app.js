import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';

//  components
import VideoDetail from './video_detail';
import SearchBar from './search_bar';
import VideoList from './video_list';

const API_KEY = "" //insert your own api key here

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  }

  videoSearch = (term) => {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  videoSelect = (selectedVideo) => {
    this.setState({selectedVideo});
  }

  componentDidMount() {
    this.videoSearch("boku no hero");
  }

  render(){
    return(
      <div>
        <h1> Youtube App </h1>
        <VideoDetail video={this.state.selectedVideo} />
        <SearchBar videoSearch={this.videoSearch} />
        <VideoList videos={this.state.videos}
                   videoSelect={this.videoSelect} />
      </div>
    );
  }
}

export default App;
