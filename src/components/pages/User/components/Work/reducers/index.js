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

export default function (state = initialState, { type, payload }) {

  switch (type) {

    case SET_USER_WORK:

      return {
        ...state,
        workDetails: {
          ...state.workDetails,
          department: payload.UF_DEP2_TEXT,
          roles: payload.CURUSER_GROUPS_TEXT,
          workPosition: payload.WORK_POSITION,
          workSince: payload.DATE_REGISTER_TEXT,
        },
        head: payload.WORK.HEAD,
        colleague: payload.WORK.COLLEAGUE,
        subordinates: payload.WORK.SUBORDINATES,
      };

    default:
      return state;
  }
}
