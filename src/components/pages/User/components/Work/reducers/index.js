import { SET_USER_WORK } from 'constants/userTypes';

const initialState = {
  workDetails: {
    department: [],
    roles: [],
    workPosition: '',
    workSince: '',
  },
  head: [],
  colleague: [],
  subordinates: [],
};

export default function (state = initialState, action) {

  switch (action.type) {

    case SET_USER_WORK:

      const { payload } = action;

      return {
        ...state,
        workDetails: {
          ...state.workDetails,
          department: payload.UF_DEP2_TEXT,
          roles: payload.CURUSER_GROUPS_TEXT,
          workPosition: payload.WORK_POSITION,
          workSince: '',
        },
        head: payload.WORK.HEAD,
        colleague: payload.WORK.COLLEAGUE,
        subordinates: payload.WORK.SUBORDINATES,
      };

    default:
      return state;
  }
}
