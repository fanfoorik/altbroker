import { combineReducers } from 'redux';

import nav from 'reducers/header/navigationReducer';
import notifications from 'reducers/header/navNotificationReducer';
import patchNotes from 'reducers/header/patchNotesReducer';
import stickers from 'reducers/header/stickersReducer';
import usertop from 'reducers/header/usertopReducer';

export default combineReducers({
  patchNotes,
  nav,
  notifications,
  stickers,
  usertop,
});
