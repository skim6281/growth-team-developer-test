import React from 'react';
import { fetchFavorites } from '../action';
import { connect } from 'react-redux';
import Gem from './gem';


class Favorites extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchFavorites();
  }

  renderFavorites() {
    const { favorites } = this.props;
    return favorites.map((name, index) => {
      return(
        <div className="fave-gem" key={index}>
          <Gem name={name}/>
        </div>
      )
    });
  }

  render() {
    return (
      <section className="favorites-container">
        <h1 className="fave-title">Your Favorite Gems</h1>
        <div className="favorites-list">
          {this.renderFavorites()}
        </div>
      </section>
    )
  }
}

const mapStateToProps = state => {
  return ({
    favorites: state.favorites.favorites
  });
}

const mapDispatchToProps = dispatch => {
  return ({
    fetchFavorites: () => dispatch(fetchFavorites())
  });
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorites);
