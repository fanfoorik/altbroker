import { combineReducers } from 'redux';

import auth from '../components/pages/Auth/reducers/index';
import header from '../components/Header/reducers/index';

export default combineReducers({
  auth,
  header,
});
