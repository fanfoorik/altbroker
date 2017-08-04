import { GET_GB_FILTER } from 'constants/filterTypes';

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
    case GET_GB_FILTER:
      return {
        ...state,
        ...payload,
      };

    default:
      return state;
  }
}
