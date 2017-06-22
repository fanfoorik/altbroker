import ajax from 'utils/ajax';
import { AUTH_USER, TRIGGER_USER } from 'constants/userTypes';

export function triggerUser() {
  return { type: TRIGGER_USER };
}

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
