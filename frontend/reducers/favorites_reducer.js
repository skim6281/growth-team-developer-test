const intialState = {
  favorites: []
}

const FavoritesReducer = (state = intialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case 'RECEIVE_FAVORITES':
      return {favorites: action.favorites};
    case 'RECEIVE_FAVORITE':
      const favorites = state.favorites.slice();
      favorites.push(action.gemName);
      return Object.assign({}, state, {favorites: favorites});
    case 'REMOVE_FAVORITE':
      const newFavorites = state.favorites.slice();
      let index = newFavorites.indexOf(action.gemName);
      if(index >= 0) {
        newFavorites.splice(index, 1);
        return Object.assign({}, state, {favorites: newFavorites});
      }
    default:
      return state;
  }
}

export default FavoritesReducer;
