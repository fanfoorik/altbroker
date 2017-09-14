import { SET_GB_LISTING, LOADING_GB_LISTING } from 'constants/GBTypes';

const initialState = {
  loading: false,
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

    case LOADING_GB_LISTING:
      return {
        ...state,
        loading: payload,
      };

    default:
      return state;
  }
}
