import { REFRESH_LISTING_ITEM, SET_LISTING, CHANGE_FILTER } from 'constants/listingTypes';

const initialState = {
  listingItems: [],
  nav: {},
  page: {
    SORT_CODE: ['ID'],
    SORT_METOD: ['DESC'],
    PAGE: '1',
    COUNT: '15',
    FILTER: {
      ID: '',
      ID_NAME_TEL: name,
      ACTIVE: 'Y',
      SECTION_ID: [],

      PROPERTY_STATUS_OBJ: '',

      PROPERTY_BROKER: [],

      PROPERTY_GEO_ID: [],
      PROPERTY_RAYON2: [],
      PROPERTY_METRO_NEW: [],

      from_PROPERTY_PRICE_BUSINESS: '',
      to_PROPERTY_PRICE_BUSINESS: '',

      from_PROPERTY_CHIST_PRIB: '',
      to_PROPERTY_CHIST_PRIB: '',

      from_PROPERTY_OKUP: '',
      to_PROPERTY_OKUP: '',
    },
    SHOW_SHARED: '',
    DEBUG: '',
  },
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

    case CHANGE_FILTER:
      return {
        ...state,
        page: {
          ...state.page,
          FILTER: {
            ...state.page.FILTER,
            ...payload,
          },
        },
      };

    default:
      return state;
  }
}
