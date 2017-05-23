import { SET_USER_WORK } from 'constants/userTypes';

const initialState = {
  HEAD: [],
  COLLEAGUE: [],
  SUBORDINATES: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_USER_WORK:
      const { payload } = action;

      return {
        ...state,
        HEAD: payload.HEAD,
        COLLEAGUE: payload.COLLEAGUE,
        SUBORDINATES: payload.SUBORDINATES,
      };

    default:
      return state;
  }
}
