import { SET_GB_FILTER } from 'constants/GBTypes';

const initialState = {
  ALL_BROKER: [],
  ALL_STATUS_OBJ: [],
  ALL_CITY: [],
  ALL_RAYONS: [],
  ALL_METRO: [],
  ALL_CATEGORY_GB_1: [],
  ALL_CATEGORY_GB_2: [],
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case SET_GB_FILTER:
      console.log(payload);
      return {
        ...state,
        ...payload,
      };

    default:
      return state;
  }
}
