import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import React from 'react';
import ReactDom from 'react-dom';
import Reducer from './reducer';
import Root from './components/root';


const configureStore = (preloadedState = {}) => (
  createStore(
    Reducer,
    preloadedState,
    applyMiddleware(thunk)
  )
);

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
