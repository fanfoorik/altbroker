import { combineReducers } from 'redux';

import nav from '../Navigation/reducers/';
import notifications from '../NavNotifications/reducers/';
import patchNotes from '../PatchNotes/reducers/';
import stickers from '../Stickers/reducers/';
import usertop from '../Usertop/reducers/';

export default combineReducers({
  patchNotes,
  nav,
  notifications,
  stickers,
  usertop,
});
