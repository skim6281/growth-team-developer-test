import React from 'react';
import { connect } from 'react-redux';
import { fetchGem } from '../action.js';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    }
    this.update = this.update.bind(this);
    this.submit = this.submit.bind(this);
  }

  update(e) {
    e.preventDefault();
    this.setState({query: e.target.value});
  }

  submit(e) {
    e.preventDefault();
    this.fetchGem(thi.state.query);
  }

  render() {
    return (
      <form className='search-bar-container' onSubmit={this.submit}>
        <input
          className='search-input'
          placeholder='Search'
          onChange={this.update}
          />
        <button className="search-button">
          <img src={window.images.magnifyingGlass} />
        </button>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return ({
    fetchGem: name => dispatch(fetchGem())
  });
};

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
