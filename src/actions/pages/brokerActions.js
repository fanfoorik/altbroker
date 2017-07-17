import ajax from 'utils/ajax';
import { SET_LISTING, REFRESH_LISTING_ITEM, CHANGE_FILTER } from 'constants/listingTypes';

export const fetchListing = (page, count) => (dispatch) => {
  ajax.post('broker/gb/', { PAGE: page, COUNT: count })
    .then((data) => {
      dispatch({
        type: SET_LISTING,
        payload: data.ANSWER,
      });
    });
};

export const filterChange = data => (dispatch) => {
  dispatch({
    type: CHANGE_FILTER,
    payload: data,
  });
};

export const filterListing = () => (dispatch, getState) => {
  const filterData = getState().listing.page;
  ajax.post('broker/gb/', filterData)
    .then((data) => {
      console.log(data);

      dispatch({
        type: SET_LISTING,
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
