import { SET_STICKERS, TRIGGER_STICKERS } from 'constants/headerTypes';

const initialState = {
  active: false,
  data: [],
  error: {
    on: false,
    message: '',
  },
  stickers: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case TRIGGER_STICKERS:
      return {
        ...state,
        active: !state.active,
      };

    case SET_STICKERS:
      return {
        ...state,
        stickers: action.payload,
      };

    default:
      return state;
  }
}
