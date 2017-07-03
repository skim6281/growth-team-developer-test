export const fetchRubyGem = name => {
  return $.ajax({
    method: 'GET',
    url: `/gem/${name}`
  });
};

export const fetchFavorites = () => {
  const gems = [];
  for(let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    if(key.includes('fave-gem')) {
      gems.push(localStorage.getItem(key));
    }
  }
  return {
    type: 'RECEIVE_FAVORITES',
    favorites: gems
  }
}

export const receiveGem = gem => ({
  type: 'RECEIVE_GEM',
  gem
});

export const receiveFavorite = gemName => ({
  type: 'RECEIVE_FAVORITE',
  gemName
});

export const removeFavorite = gemName => ({
  type: 'REMOVE_FAVORITE',
  gemName
});

export const receiveError = error => {
  return {
    type: 'RECEIVE_ERROR',
    error
  }
};

export const fetchGem = name => dispatch => {
  return fetchRubyGem(name)
    .then(gem => dispatch(receiveGem(gem)),
      err => dispatch(receiveError(err)));
};

export const addFavorite = name => dispatch => {
  let key = `fave-gem-${name}`;
  if(!window.localStorage.hasOwnProperty(key)) {
    window.localStorage.setItem(key, name);
    dispatch(receiveFavorite(name));
  }
}

export const deleteFavorite = name => dispatch => {
  let key = `fave-gem-${name}`;
  if(window.localStorage.hasOwnProperty(key)) {
    window.localStorage.removeItem(key);
    dispatch(removeFavorite(name));
  }
}
