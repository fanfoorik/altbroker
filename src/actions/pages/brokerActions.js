import ajax from 'utils/ajax';
import { FETCH_LISTING, REFRESH_LISTING_ITEM } from 'constants/listingTypes';

export const fetchListing = (page, count) => (dispatch) => {
  ajax.post('broker/gb/', { PAGE: page, COUNT: count })
    .then((data) => {
      dispatch({
        type: FETCH_LISTING,
        payload: data.ANSWER,
      });
    });
};

export const refreshListingItem = item => (dispatch) => {
  dispatch({
    type: REFRESH_LISTING_ITEM,
    payload: item,
  });
};
