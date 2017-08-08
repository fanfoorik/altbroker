import { combineReducers } from 'redux';

import auth from 'components/pages/Auth/reducers/index';
import header from 'reducers/header/headerReducer';
import user from 'components/pages/User/reducers';
import GB from './pages/GB/GBReducer';

export default combineReducers({
  auth,
  header,
  user,
  GB,
});
