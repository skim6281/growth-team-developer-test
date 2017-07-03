import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import React from 'react';
import ReactDOM from 'react-dom';
import Reducer from './reducer';
import Root from './components/root';
import { fetchRubyGem, fetchGem, receiveGem } from './action';

const configureStore = (preloadedState = {}) => (
  createStore(
    Reducer,
    preloadedState,
    applyMiddleware(thunk)
  )
);

window.fetchRubyGem = fetchRubyGem;
window.fetchGem = fetchGem;
window.receiveGem = receiveGem;

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
