import React from 'react';
import { deleteFavorite, fetchFavorites } from '../action';
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
    console.log(favorites);
    return favorites.map((name, index) => {
      return(
        <div key={index}>
          <Gem name={name}/>
        </div>
      )
    });
  }

  render() {
    return (
      <section>
        <h1 className="fave-title">Your Favorite Gems</h1>
        <section className="favorites-list">
          {this.renderFavorites()}
        </section>
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
    deleteFavorite: gemName => dispatch(deleteFavorite(gemName)),
    fetchFavorites: () => dispatch(fetchFavorites())
  });
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorites);
