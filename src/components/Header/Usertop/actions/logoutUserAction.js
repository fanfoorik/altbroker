import { apiUrl } from 'utils/urls';
import { AUTH_USER } from 'constants/userTypes';
import ajax from 'utils/ajax';
import getHeaders from 'utils/getHeaders';
import handleError from 'utils/handleError';

const logoutUser = () => (dispatch) => {
  ajax.post(
    `${apiUrl}user/logout/`,
    {
      LOGIN: '',
    },
    {
      headers: getHeaders(),
    },
  )
  .then(() => {
    localStorage.removeItem('login');
    localStorage.removeItem('token');
    dispatch({ type: AUTH_USER, payload: false });
  })
  .catch(error => handleError(error, dispatch));
};

export default logoutUser;
