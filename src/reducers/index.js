import { combineReducers } from 'redux';

import auth from 'components/pages/Auth/reducers/index';
import header from 'reducers/header/headerReducer';
import user from 'components/pages/User/reducers';
import listing from './pages/listingReducer';
import filter from './filter/filterReducer';

export default combineReducers({
  auth,
  header,
  listing,
  user,
  filter,
});
