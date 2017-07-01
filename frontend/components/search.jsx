import React from 'react';
import SearchBar from './search_bar';
import GemDetail from './gem_detail';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1 className="title">Search Gems</h1>
        <SearchBar/>
        <GemDetail/>
      </div>
    );
  }

}

export default Search;
