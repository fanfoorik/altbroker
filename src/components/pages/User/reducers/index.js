import { combineReducers } from 'redux';

import user from './userDataReducer';
import work from './userWorkReducer';

export default combineReducers({
  user,
  work,
});
