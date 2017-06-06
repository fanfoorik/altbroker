import ajax from 'utils/ajax';
import getHeaders from 'utils/getHeaders';
import handleError from 'utils/handleError';
import { apiUrl } from 'utils/urls';
import { AUTH_USER, TRIGGER_USER } from 'constants/userTypes';

export const triggerUser = () => {
  return { type: TRIGGER_USER };
};

export const logoutUser = () => (dispatch) => {
  ajax.post(
    `${apiUrl}user/logout/`,
    { LOGIN: '' },
    { headers: getHeaders() },
  )
  .then(() => {
    localStorage.removeItem('login');
    localStorage.removeItem('token');
    dispatch({ type: AUTH_USER, payload: false });
  })
  .catch(error => handleError(error, dispatch));
};
