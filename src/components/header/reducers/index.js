import { combineReducers } from 'redux';

import nav from '../Navigation/reducers/';
import notifications from '../NavNotifications/reducers/';
import patchNotes from 'reducers/patchNotesReducer';
import stickers from 'reducers/stickersReducer';
import usertop from '../Usertop/reducers/';

export default combineReducers({
  patchNotes,
  nav,
  notifications,
  stickers,
  usertop,
});
