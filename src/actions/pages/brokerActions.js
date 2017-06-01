import ajax from 'utils/ajax';
import getHeaders from 'utils/getHeaders';
import handleError from 'utils/handleError';
import { apiUrl } from 'utils/urls';
import { FETCH_LISTING } from 'constants/listingTypes';

export const fetchListing = () => (dispatch) => {
  ajax.post(`${apiUrl}broker/gb/`, {},
    {
      headers: getHeaders(),
    })
    .then(res => res.data)
    .then((data) => {
      dispatch({
        type: FETCH_LISTING,
        payload: data.ANSWER,
      });
    })
    .catch(error => handleError(error, dispatch));
};
