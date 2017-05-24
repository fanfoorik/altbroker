import ajax from 'utils/ajax';
import getHeaders from 'utils/getHeaders';
import handleError from 'utils/handleError';
import { apiUrl } from 'utils/urls.js';
import { SET_USER_DATA, SET_USER_WORK, SET_USER_CONTACTS } from 'constants/userTypes';

export default function fetchUser(userId) {
  return (dispatch) => {
    ajax.get(`${apiUrl}user/${userId}/`, {
      headers: getHeaders(),
    })
      .then(response => response.data)
      .then((data) => {
        const { USER: user } = data.ANSWER;
        window.scrollTo(0, 0);

        dispatch({
          type: SET_USER_DATA,
          payload: user,
        });

        dispatch({
          type: SET_USER_WORK,
          payload: user,
        });

        dispatch({
          type: SET_USER_CONTACTS,
          payload: user,
        });
      })
      .catch(error => handleError(error, dispatch));
  };
}
