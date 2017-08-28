import * as types from 'constants/headerTypes';

export default function (state = {}, { type, payload }) {
  switch (type) {
    case types.SET_NAVIGATION:
      return payload;

    default:
      return state;
  }
}
