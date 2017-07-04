import React from 'react';
import { connect } from 'react-redux';
import { fetchGem } from '../action';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { query: "" };
    window.searchState = this.state;
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(e) {
    e.preventDefault();
    this.setState({query: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchGem(this.state.query);
  }

  render() {
    if(this.props.error) {
      return (
        <form className="search-bar-container red" onSubmit={this.handleSubmit}>
          <input
            className="search-input"
            placeholder="Search"
            value={this.state.query}
            onChange={this.update} />
          <button className="search-button" onClick={this.handleSubmit}>
            <img src={window.images.magnifyingGlassRed} />
          </button>
        </form>
      )
    }
    return (
      <form className="search-bar-container" onSubmit={this.handleSubmit}>
        <input
          className="search-input"
          placeholder="Search"
          value={this.state.query}
          onChange={this.update} />
        <button className="search-button" onClick={this.handleSubmit}>
          <img src={window.images.magnifyingGlass} />
        </button>
      </form>
    )
  }
}

const mapStateToProps = state => {
  return ({
    error: state.gem.error
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchGem: name => dispatch(fetchGem(name))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
