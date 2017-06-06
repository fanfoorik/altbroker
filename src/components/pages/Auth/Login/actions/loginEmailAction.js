import isEmail from 'validator/lib/isEmail';
import { LOGIN_SET_EMAIL } from 'constants/authTypes';

export default value => (dispatch) => {
  if (isEmail(value)) {
    dispatch({
      type: LOGIN_SET_EMAIL,
      payload: {
        value,
        valid: true,
      },
    });
  } else {
    dispatch({
      type: LOGIN_SET_EMAIL,
      payload: {
        value,
        valid: false,
      },
    });
  }
};
