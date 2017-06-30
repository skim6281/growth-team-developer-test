import React from 'react';
import { Provider } from 'react-redux';
import { Router, IndexRoute} from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './app';
import Search from './search';

const Root = ({store}) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route path='/' component={App}>
          <IndexRoute component={Search} />
        </Route>
      </BrowserRouter>
    </Provider>
  )
}

export default Root;
