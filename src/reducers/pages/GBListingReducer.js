import { REFRESH_LISTING_ITEM, SET_LISTING } from 'constants/listingTypes';

const initialState = {
  listingItems: [],
  nav: {},
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case SET_LISTING:
      return {
        ...state,
        listingItems: payload.ITEMS,
        nav: payload.NAV,
      };

    case REFRESH_LISTING_ITEM:
      return {
        ...state,
        listingItems: state.listingItems.map(item => (
          item.ID === payload.ID ? { ...item, ...payload } : item
        )),
      };

    default:
      return state;
  }
}
