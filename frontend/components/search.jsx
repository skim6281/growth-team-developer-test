import React from 'react';
import SearchBar from './search_bar';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Search Gems</h1>
        <SearchBar/>
      </div>
    );
  }

}

export default Search;
