import ajax from 'utils/ajax';
import { GET_GB_FILTER } from 'constants/filterTypes';

export const fetchGBfilter = () => (dispatch) => {
  ajax.post('broker/gb/getfilter/')
    .then((data) => {
      dispatch({
        type: GET_GB_FILTER,
        payload: data.ANSWER,
      });
    });
};
