const initialState = [];

const Reducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case 'RECEIVE_GEM':
      return state.concat(action.gem);
    default:
      return state;
  }
};

export default Reducer;
