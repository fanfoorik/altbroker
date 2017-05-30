import { combineReducers } from 'redux';

import auth from 'components/pages/Auth/reducers/index';
import header from 'components/Header/reducers/index';
import user from 'components/pages/User/reducers';
import listing from './pages/listingReducer';

export default combineReducers({
  auth,
  header,
  listing,
  user,
});
