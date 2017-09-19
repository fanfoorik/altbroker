import axios from 'axios';
import { hostUrl, apiUrl } from 'utils/urls';

export default () => (dispatch, getState) => {
  const { user } = getState().auth.recoverPassword;

  axios.get(`${hostUrl + apiUrl}user/user_change_pass/?USER_LOGIN=${user.login}&USER_CHECKWORD=${user.checkword}`)
    .then(() => {
      // from recoverPasswordReducer
      dispatch({ type: 'RECOVER_CHECKWORD_SUCCESS' });

      // from authReducer
      dispatch({ type: 'RECOVER_PASSWORD_PANEL' });
    })
    .catch(() => dispatch({ type: 'RECOVER_CHECKWORD_ERROR' }));
};
