import { combineReducers } from 'redux';
import GemReducer from './gem_reducer';
import FavoritesReducer from './favorites_reducer';

const Reducer = combineReducers({
  gem: GemReducer,
  favorites: FavoritesReducer
});

export default Reducer;
