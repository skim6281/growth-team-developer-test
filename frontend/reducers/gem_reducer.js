const initialState = {
  gem: null
}

const GemReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case 'RECEIVE_GEM':
      return { gem: action.gem };
    default:
      return state;
  }
};

export default GemReducer;