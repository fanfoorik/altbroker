import ajax from 'utils/ajax';
import { AUTH_USER } from 'constants/userTypes';

export const logoutUser = () => (dispatch) => {
  ajax.post('user/logout/',
    { LOGIN: '' },
  )
  .then(() => {
    localStorage.removeItem('login');
    localStorage.removeItem('token');
    dispatch({ type: AUTH_USER, payload: false });
  });
};
