const fetchRubyGem = name => {
  return $.ajax({
    method: 'GET',
    url: `/gem/${name}`
  });
};

export const receiveGem = gem => ({
  type: 'RECEIVE_GEM',
  gem
});

export const fetchGem = name => dispatch => {
  return fetchRubyGem(name)
    .then(gem => dispatch(receiveGem(gem)));
};
