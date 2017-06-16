import { FETCH_LISTING, REFRESH_LISTING_ITEM } from 'constants/listingTypes';

export default function (state = {}, { type, payload }) {
  switch (type) {
    case FETCH_LISTING:
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
