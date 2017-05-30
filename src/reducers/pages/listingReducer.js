import { FETCH_LISTING } from 'constants/listingTypes';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_LISTING:
      return {
        ...state,
        listingItems: action.payload.ITEMS,
        nav: action.payload.NAV,
      };

    default:
      return state;
  }
}
