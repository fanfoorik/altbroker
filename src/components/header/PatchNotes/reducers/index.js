import { SET_PATCH_NOTES, TRIGGER_PATCH_NOTES } from 'constants/headerTypes';

const initialState = {
  active: false,
  loading: false,
  data: {
    current: {
      name: '',
      text: '',
      icon: '',
      version: '',
      url: '',
    },
    prev: {
      url: '',
      name: '',
    },
    next: {
      url: '',
      name: '',
    },
  },
  error: {
    on: false,
    message: '',
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_PATCH_NOTES:
      const { CUR: current, NEXT: next, PREV: prev } = action.payload;

      return {
        ...state,
        data: {
          current: {
            ...state.current,
            name: current.NAME,
            text: current.PREVIEW_TEXT,
            icon: current.PROPERTY_ICO_VALUE,
            version: current.PROPERTY_VERSION_VALUE,
            url: current.URL,
          },
          prev: {
            url: prev ? prev.URL : '',
            name: prev ? prev.NAME : '',
          },
          next: {
            url: next ? next.URL : '',
            name: next ? next.NAME : '',
          },
        },
      };

    case TRIGGER_PATCH_NOTES:
      return {
        ...state,
        active: !state.active,
      };

    default:
      return state;
  }
}
