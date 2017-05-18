import * as types from 'constants/headerTypes';

const initialState = {
  active: false,
  data: [],
  error: {
    on: false,
    message: '',
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.TRIGGER_NOTIFICATIONS:
      return {
        ...state,
        active: !state.active,
      };

    default:
      return state;
  }
}
