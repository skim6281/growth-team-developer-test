import React from 'react';
import { connect } from 'react-redux';
import { addFavorite, deleteFavorite } from '../action';

class Gem extends React.Component{
  constructor(props) {
    super(props);
    this.handleFave = this.handleFave.bind(this);
    this.handleUnfave = this.handleUnfave.bind(this);
  }

  handleFave(name) {
    return () => this.props.addFavorite(name);
  }

  handleUnfave(name) {
    return () => this.props.deleteFavorite(name);
  }

  renderStar(name) {
    if(this.props.favorites.includes(name)) {
      return(
        <img className="star" src={window.images.starBlue} onClick={this.handleUnfave(name)}/>
      )
    } else {
      return(
        <img className="star" src={window.images.starGray} onClick={this.handleFave(name)}/>
      )
    }
  }

  render() {
    const { name, search } = this.props;
    if(search) {
      return(
        <div className="gem-link link">
          <a href={`https://rubygems.org/gems/${name}`} target="_blank">{name}</a>
          {this.renderStar(name)}
        </div>
      )
    } else {
      return(
        <div className="fave-link link">
          {this.renderStar(name)}
          <a href={`https://rubygems.org/gems/${name}`} target="_blank">{name}</a>
        </div>
      )
    }

  }
}

const mapStateToProps = state => {
  return ({
    favorites: state.favorites.favorites
  });
}

const mapDispatchToProps = dispatch => {
  return ({
    addFavorite: gemName => dispatch(addFavorite(gemName)),
    deleteFavorite: gemName => dispatch(deleteFavorite(gemName))
  });
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gem);
