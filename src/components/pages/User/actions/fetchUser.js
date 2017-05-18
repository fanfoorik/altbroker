import { apiUrl } from 'utils/urls.js';
import { SET_USER_DATA, SET_USER_WORK } from 'constants/userTypes';
import ajax from 'utils/ajax';
import getHeaders from 'utils/getHeaders';
import handleError from 'utils/handleError';

export default function fetchUser(userId) {
  return (dispatch) => {
    ajax.get(`${apiUrl}user/${userId}/`, {
      headers: getHeaders(),
    })
      .then(response => response.data)
      .then((data) => {
        const { USER: user } = data.ANSWER;
        const { WORK: work } = user;

        dispatch({
          type: SET_USER_DATA,
          payload: user,
        });

        dispatch({
          type: SET_USER_WORK,
          payload: work,
        });
      })
      .catch(error => handleError(error, dispatch));
  };
}
