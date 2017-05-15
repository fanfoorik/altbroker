import { combineReducers } from 'redux';

import components from './authComponentsReducer';
import login from '../Login/reducers';
import recoverEmail from '../recoverEmail/reducers';
import recoverPassword from '../RecoverPassword/reducers';

const authenticate = combineReducers({
  components,
  login,
  recoverEmail,
  recoverPassword,
});

export default authenticate;
