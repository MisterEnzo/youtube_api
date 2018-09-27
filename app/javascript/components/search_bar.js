import React, { Component } from 'react';

export default class SearchBar extends Component {
  state = { term: '' }

  onInputChange(term){
    this.setState({term});
    this.props.videoSearch(term);
  }

  render() {
    return(
      <div>
        <h2>SearchBar</h2>
        <input type="text"
          value={this.state.searchTerm}
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    )
  }
}
