import { UPDATE_GB_OPTIONS } from 'constants/GBTypes';

const initialState = {
  SORT_CODE: ['ID'],
  SORT_METOD: ['DESC'],
  PAGE: '1',
  COUNT: '15',
  FILTER: {
    ID: '',
    ID_NAME_TEL: '',
    ACTIVE: 'Y',
    SECTION_ID: [],
    SECTION_ID_1: [],
    SECTION_ID_2: [],
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
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case UPDATE_GB_OPTIONS:
      return {
        ...state,
        ...payload,
      };

    default:
      return state;
  }
}
