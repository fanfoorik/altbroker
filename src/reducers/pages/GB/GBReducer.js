import { combineReducers } from 'redux';

import filter from './filterReducer';
import listing from './listingReducer';
import options from './GBOptionsReduser';

export default combineReducers({
  filter,
  listing,
  options,
});
