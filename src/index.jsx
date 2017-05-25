import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { AUTH_USER } from 'constants/userTypes';
import About from 'components/pages/About';
import Admin from 'components/pages/Admin';
import AppContainer from 'components/App/AppContainer';
import Auth from 'components/pages/auth/Auth';
import Broker from 'components/pages/Broker';
import Deal from 'components/pages/Deal';
import Evolution from 'components/pages/Evolution';
import Index from 'components/pages/Index';
import NotFound from 'components/pages/404';
import ProtectedRoute from './components/HOC/ProtectedRoute';
import Stat from 'components/pages/Stat';
import store from './store';
import style from './assets/styles/style';
import User from 'components/pages/User/User';

const login = localStorage.getItem('login');
const token = localStorage.getItem('token');

if (login && token) {
  store.dispatch({ type: AUTH_USER, payload: true });
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/altbroker3" component={ProtectedRoute(AppContainer)}>
        <IndexRoute component={ProtectedRoute(Index)} />

        <Route path="user" component={ProtectedRoute(User)}>
          <Route path=":userId">
            <Route path=":action" />
          </Route>
        </Route>

        <Route path="about" component={ProtectedRoute(About)} />

        <Route path="broker" component={ProtectedRoute(Broker)}>
          <Route path=":page" />
        </Route>

        <Route path="deal" component={ProtectedRoute(Deal)}>
          <Route path=":page" />
        </Route>

        <Route path="evolution" component={ProtectedRoute(Evolution)}>
          <Route path=":page" />
        </Route>

        <Route path="stat" component={ProtectedRoute(Stat)}>
          <Route path=":page" />
        </Route>

        <Route path="admin" component={ProtectedRoute(Admin)}>
          <Route path=":page" />
        </Route>
      </Route>
      <Route path="/altbroker3/login" component={Auth} />
      <Route path="*" component={NotFound} />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
