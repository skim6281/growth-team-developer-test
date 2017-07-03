const initialState = {
  gem: null,
  error: null
}

const GemReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case 'RECEIVE_GEM':
      return { gem: action.gem };
    case 'RECEIVE_ERROR':
      return { error: "Oh no! Looks like that gem can't be found." };
    default:
      return state;
  }
};

export default GemReducer;
