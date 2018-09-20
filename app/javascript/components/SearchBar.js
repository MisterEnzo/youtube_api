import React, { Component } from 'react';

export default class SearchBar extends Component {
  state = { searchTerm: '' }

  render() {
    return(
      <div>
        <h2>SearchBar</h2>
        <input type="text"
          value={this.state.searchTerm}
          onChange={event => this.setState({ searchTerm: event.target.value })}
        />
      </div>
    )
  }
}
