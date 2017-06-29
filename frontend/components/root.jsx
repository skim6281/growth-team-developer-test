import React from 'react';
import { Provider } from 'react-redux';
import { Router} from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './app';

const Root = ({store}) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route path='/' component={App}>

        </Route>
      </BrowserRouter>
    </Provider>
  )
}

export default Root;
