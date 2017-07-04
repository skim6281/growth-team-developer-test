import React from 'react';
import { Provider } from 'react-redux';
import { Switch } from 'react-router';
import { HashRouter, Route } from 'react-router-dom';
import App from './app';
import Search from './search';
import Favorites from './favorites';

const Root = ({store}) => {
  return (
    <Provider store={store}>
      <HashRouter>
          <App>
            <Switch>
              <Route exact path='/' component={Search} />
              <Route exact path='/favorites' component={Favorites} />
            </Switch>
          </App>
      </HashRouter>
    </Provider>
  )
}

export default Root;
