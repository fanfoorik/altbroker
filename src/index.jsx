import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, IndexRedirect, browserHistory } from 'react-router';
import 'babel-polyfill';

import { AUTH_USER } from 'constants/userTypes';
import Edit from 'components/pages/Edit';
import Add from 'components/pages/Add';
import Admin from 'components/pages/Admin';
import AppContainer from 'components/App/AppContainer';
import AuthContainer from 'components/pages/Auth/AuthContainer';
import GBContainer from 'components/pages/GB/GBContainer';
import GBNavItems from 'components/pages/GB/GBNavItems';
import Deal from 'components/pages/Deal/Deal.jsx';
import DealDetail from 'components/pages/DetailDeal';
import Evolution from 'components/pages/Evolution';
import FAQ from 'components/pages/FAQ/FAQ';
import FAQAskQuestion from 'components/pages/FAQ/FAQAskQuestion';
import FAQList from 'components/pages/FAQ/FAQList';
import Index from 'components/pages/Index';
import NotFound from 'components/pages/404';
import ProtectedRoute from './components/HOC/ProtectedRoute';
import Statistic from 'components/pages/Statistic';
import store from './store';
import './assets/less/style.less';
import './assets/styles/style';
import User from 'components/pages/User/User';

import { LocaleProvider } from 'antd';
import ruRU from 'antd/lib/locale-provider/ru_RU';

const login = localStorage.getItem('login');
const token = localStorage.getItem('token');

if (login && token) {
  store.dispatch({ type: AUTH_USER, payload: true });
}

ReactDOM.render(
  <LocaleProvider locale={ruRU}>
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/altbroker3" component={ProtectedRoute(AppContainer)}>
          <IndexRedirect to="broker/gb/" />
          {/*<IndexRoute component={ProtectedRoute(Index)} />*/}
          <Route path="user" component={ProtectedRoute(User)}>
            <Route path=":userId">
              <Route path=":action" />
            </Route>
          </Route>

          <Route path="faq">
            <IndexRoute component={ProtectedRoute(FAQ)} />
            <Route path="getask" component={ProtectedRoute(FAQAskQuestion)} />
            <Route path=":listId" component={ProtectedRoute(FAQList)}>
              <Route path=":questionId" />
            </Route>
          </Route>

          <Route path="deal">
            <IndexRoute component={ProtectedRoute(Deal)} />
            <Route path=":dealId" component={ProtectedRoute(DealDetail)} />
          </Route>

          <Route path="broker">
            <Route path="gb">
              <IndexRoute component={ProtectedRoute(GBContainer)} />
              <Route path=":id/edit" component={ProtectedRoute(Edit)} />
              <Route path="add" component={ProtectedRoute(Add)} />
            </Route>
            <Route path=":page" component={ProtectedRoute(GBNavItems)} />
          </Route>

          <Route path="deal2" component={ProtectedRoute(Deal)}>
            <Route path=":page" />
          </Route>

          <Route path="evolution" component={ProtectedRoute(Evolution)}>
            <Route path=":page" />
          </Route>

          <Route path="stat" component={ProtectedRoute(Statistic)}>
            <Route path=":page" />
          </Route>

          <Route path="admin" component={ProtectedRoute(Admin)}>
            <Route path=":page" />
          </Route>
        </Route>

        <Route path="/altbroker3/login" component={AuthContainer} />
        <Route path="*" component={NotFound} />
      </Router>
    </Provider>
  </LocaleProvider>,
  document.getElementById('root'),
);
