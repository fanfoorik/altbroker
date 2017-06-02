import ajax from 'utils/ajax';
import getHeaders from 'utils/getHeaders';
import handleError from 'utils/handleError';
import { apiUrl } from 'utils/urls';
import { FETCH_LISTING } from 'constants/listingTypes';

export const fetchListing = (page, count) => (dispatch) => {
  ajax.post(`${apiUrl}broker/gb/`, { PAGE: page, COUNT: count },
    { headers: getHeaders() })
    .then((response) => {
      dispatch({
        type: FETCH_LISTING,
        payload: response.data.ANSWER,
      });
    })
    .catch(error => handleError(error, dispatch));
};
