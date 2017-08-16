import { SET_GB_LISTING } from 'constants/GBTypes';

const initialState = {
  listingItems: [],
  listingNav: {},
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case SET_GB_LISTING:
      return {
        ...state,
        listingItems: payload.ITEMS,
        listingNav: payload.NAV,
      };

    default:
      return state;
  }
}
