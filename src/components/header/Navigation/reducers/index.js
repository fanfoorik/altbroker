import * as types from 'constants/headerTypes';

export default function (state = [], action) {
  switch (action.type) {
    case types.SET_NAVIGATION:
      return action.payload;

    default:
      return state;
  }
}
