import React from 'react';
import { Provider } from 'react-redux';
import { Router, IndexRoute, Switch } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './app';
import Search from './search';

const Root = ({store}) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
          <App>
            <Switch>
              <Route exact path='/' component={Search} />
            </Switch>
          </App>
      </BrowserRouter>
    </Provider>
  )
}

export default Root;
